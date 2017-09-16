'use strict';
/*
 * Copyright (c) 2017 Internet of Protocols Alliance (IOPA)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const util = require('util'),
    EventEmitter = require('events').EventEmitter,
    ZWAVE = require('./zwave-constants'),
    PROTOCOL = ZWAVE.PROTOCOL,
    DEVICE = require('../iopa-slim').constants.DEVICE,
    SERVER = require('../iopa-slim').constants.SERVER
 
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Zwave Message Middleware
 * 
 * This middleware is composed the following functions:
 * 
 * 1. ZwaveMessageFlowControl
 *  - hooks into server send to block further sends until response is received from zwave controller
 *
 * 2. ZwaveMessageNodeMissing
 *   - hooks into server send to block further sends until response is received from zwave controller
 *
 * 3. ZwaveMessageTransactionMatcher
 *  - caches outgoing messages and matches to incoming response
 *  - hooks into send pipeline to provide a promise-based send response
 *  
 * Usage: app.use(ZwaveMessageMiddleware)
 * 
 * @class ZwaveMessageMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveMessageMiddleware(app) {
    _classCallCheck(this, ZwaveMessageMiddleware);

    app.use(ZwaveMessageTransactionMatcher);
    app.use(ZwaveMessageNodeMissing);
    app.use(ZwaveMessageFlowControl);
}

ZwaveMessageMiddleware.prototype.invoke = function (context, next) {
    return next();
}

module.exports = ZwaveMessageMiddleware;


/**************************************************************
 * 
 * Zwave Message Flow Control Middleware
 * 
 * This middleware 
 *  - hooks into server send to block further sends until response is received from zwave controller
 * 
 * @class ZwaveMessageFlowControl
 * @param app  IOPA AppBuilder App
 * @constructor
 * @private
 */
function ZwaveMessageFlowControl(app) {

    _classCallCheck(this, ZwaveMessageFlowControl);

    this.messageQueue = new Array();
    this.messageQueueEvents = new EventEmitter();
    this.block = false;

    var self = this;

    this.messageQueueEvents.on("queue_modified", function () {
        if (self.messageQueue.length > 0) {
            if (!self.block) {
                self.block = true;
                var item = self.messageQueue.shift();
                item.send(item.context).then(function (response) {
                    item.resolve(response);
                    self.block = false;
                    self.messageQueueEvents.emit('queue_modified');
                })
            }
        }
    });

}

ZwaveMessageFlowControl.prototype.send = function (server, next, context) {

    if (context[ZWAVE.DoNotCache] || (context[ZWAVE.RawPayload] && context[ZWAVE.RawPayload].length == 1))
        return next(context);

    var self = this;
    return new Promise(function (resolve, reject) {
        self.messageQueue.push({ resolve: resolve, reject: reject, send: next, context: context });
        self.messageQueueEvents.emit('queue_modified');
    })
}


/*
 * Zwave Message Missing Node Middleware
 * 
 * This middleware adds NodeId to response where known from request
 * 
 * Usage: app.use(ZwaveNodeSerialApi)
 * 
 * @class ZwaveNodeSerialApi
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveMessageNodeMissing(app) {
    _classCallCheck(this, ZwaveMessageNodeMissing);
}

ZwaveMessageNodeMissing.prototype.send = function (server, next, context) {

    if (context[ZWAVE.DoNotCache]
        || (context[ZWAVE.RawPayload] && context[ZWAVE.RawPayload].length == 1))
        return next(context);

    if (typeof context !== 'object' || !(ZWAVE.SerialFunctionClass in context))
        return next(context);

    var serialFunc = PROTOCOL.SERIAL_API_FUNC.enum[context[ZWAVE.SerialFunctionClass]];

    if (!context[ZWAVE.NodeId] && context[ZWAVE.SerialPayload]) {
        // Stash NodeId for payloads that have it as first byte, and provided in raw format
        if ('0x00' in serialFunc.param && serialFunc.param['0x00'].encaptype == 'NODE_NUMBER')
            context[ZWAVE.NodeId] = context[ZWAVE.SerialPayload][0];
    }

    var nodeId = context[ZWAVE.NodeId]

    return next(context).then(function (response) {
        if (response[ZWAVE.Nodes][0]) {
            response[ZWAVE.Nodes][nodeId] = response[ZWAVE.Nodes][0];
            response[ZWAVE.Nodes][nodeId][ZWAVE.NodeId] = nodeId;
            response[ZWAVE.Nodes][0] = undefined;
        }

        return response;
    })
}

/*
 * Zwave Transaction Matcher Middleware 
 * 
 * This Middleware
 *  - caches outgoing messages and matches to incoming response
 *  - hooks into send pipeline to provide a promise-based send response
 * 
 * @class ZwaveMessageTransactionMatcher
 * @param app  IOPA AppBuilder App
 * @constructor
 * @private
 */
function ZwaveMessageTransactionMatcher(app) {
    _classCallCheck(this, ZwaveMessageTransactionMatcher);
}

const ZWAVE_MESSAGE_TRANSACTION_MANAGER = "_ZwaveMessageTransactionMatcher";

ZwaveMessageTransactionMatcher.prototype.invoke = function (context, next) {

    var server = context[SERVER.Capabilities][SERVER.Server];
    var store = server[ZWAVE_MESSAGE_TRANSACTION_MANAGER];

    if (context[ZWAVE.MessageType] == ZWAVE.SERIAL.SerialMessageType.Response
        && (context[ZWAVE.SerialFunctionClass] == store.lastRequestFunctionClass
            && context[ZWAVE.SerialFunctionClass] != PROTOCOL.SERIAL_API_FUNC.REQUEST_NODE_INFO)
        || context[ZWAVE.SerialFunctionClass] == PROTOCOL.SERIAL_API_FUNC.APPLICATION_UPDATE
        || context[ZWAVE.SerialFunctionClass] == PROTOCOL.SERIAL_API_FUNC.APPLICATION_COMMAND_HANDLER) {
        var lastRequest = store.requestQueue.shift() || {};
        store.lastRequestFunctionClass = lastRequest[ZWAVE.SerialFunctionClass];
        clearTimeout(lastRequest.timeout);
        if (lastRequest.resolve)
            {
            lastRequest.resolve(context);
             return  true;
            }
        else {
            return next();
        }
    } else {
        console.log(context.toString());
        var lastRequest = store.requestQueue.shift() || {};
        store.lastRequestFunctionClass = lastRequest[ZWAVE.SerialFunctionClass];
        console.error("[ZWAVE] ZwaveMessageTransactionMatcher Unknown response received");
    }

    return next();
}

ZwaveMessageTransactionMatcher.prototype.send = function (server, next, context) {

    if (context[ZWAVE.DoNotCache] || (context[ZWAVE.RawPayload] && context[ZWAVE.RawPayload].length == 1))
        return next(context);

    server[ZWAVE_MESSAGE_TRANSACTION_MANAGER] = server[ZWAVE_MESSAGE_TRANSACTION_MANAGER] || {
        requestQueue: [],
        lastRequestFunctionClass: null
    }

    var store = server[ZWAVE_MESSAGE_TRANSACTION_MANAGER];

    var serialFunctionClass = context[ZWAVE.SerialFunctionClass] || (context[ZWAVE.RawPayload] ? context[ZWAVE.RawPayload][3] : null)

    store.lastRequestFunctionClass = serialFunctionClass;

    return next(context).then(function () {

        return new Promise(function (resolve, reject) {
            store.requestQueue.push({
                [ZWAVE.SerialFunctionClass]: serialFunctionClass,
                resolve: resolve,
                reject: reject,
                timeout: setTimeout(resolve, 2500)
            });
        });
    });

}

