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
    IopaServer = require('../iopa-slim').IopaServer,
    ZWAVE = require('./zwave-constants'),
    PROTOCOL = ZWAVE.PROTOCOL,
    SERVER = { Capabilities: "server.Capabilities" };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Zwave Serial API Middleware
 * 
 * This middleware 
 *  - Coverts responses from Serial API into fields on the ZWAVE (IOPA) Context Record
 *  - Adds Serial API Functions to the server object when server is created
 * 
 * Usage: app.use(ZwaveMessageSerialApiMiddleware)
 * 
 * @class ZwaveMessageSerialApiMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveSerialApiMiddleware(app) {
    _classCallCheck(this, ZwaveSerialApiMiddleware);

    if (!app.properties[SERVER.Capabilities][ZWAVE.Capabilities][ZWAVE.Version])
        throw new Error("ZwaveSerialApiMiddleware requires embedded Iopa ZwaveServer");

    this.app = app;
}

module.exports = ZwaveSerialApiMiddleware;

ZwaveSerialApiMiddleware.prototype.invoke = function (context, next) {

    var cmd = context[ZWAVE.SerialFunctionClass];

    var serialFunc = PROTOCOL.SERIAL_API_FUNC.enum[cmd];

    if (serialFunc.response && '0x00' in serialFunc.response && serialFunc.response['0x00'].encaptype == 'TX_STATUS') {
        // Simple response, passthrough without decoding for performance;
        context[ZWAVE.TxStatus] = context[ZWAVE.SerialPayload][0];
        //silently ignore as Application Update / Command Coming Next
         return Promise.resolve();
    }

    if (cmd == PROTOCOL.SERIAL_API_FUNC.GET_NODE_PROTOCOL_INFO)
        {
           // remap to commandClass;
    //       context[ZWAVE.SerialFunctionClass] = PROTOCOL.SERIAL_API_FUNC.APPLICATION_COMMAND_HANDLER;
           context[ZWAVE.NodeId] = 0;
           context[ZWAVE.CommandClass] = PROTOCOL.COMMAND_CLASS.ZWAVE_CMD_CLASS.id;
           context[ZWAVE.Command] = PROTOCOL.COMMAND_CLASS.ZWAVE_CMD_CLASS.NODE_INFO;
           context[ZWAVE.Payload] = context[ZWAVE.SerialPayload];
           return next();
        }
        
    var item = serialFunc.decode(context[ZWAVE.SerialPayload]);

    if (context[ZWAVE.SerialFunctionClass] == PROTOCOL.SERIAL_API_FUNC.APPLICATION_COMMAND_HANDLER ||
        context[ZWAVE.SerialFunctionClass] == PROTOCOL.SERIAL_API_FUNC.APPLICATION_UPDATE) {

        // add to main part of context for next middleware to process
        Object.assign(context, item);
    } else {
        // add to controller
        Object.assign(context[ZWAVE.Controller], item);
    }

    return next();
}

ZwaveSerialApiMiddleware.prototype.send = function (server, next, context) {

    if (typeof context !== 'object' || !(ZWAVE.SerialFunctionClass in context))
        return next(context);

    var serialFunc = PROTOCOL.SERIAL_API_FUNC.enum[context[ZWAVE.SerialFunctionClass]];

    if (!serialFunc) throw new Error("Unknown serial function " + context[ZWAVE.SerialFunctionClass]);

    if (!(ZWAVE.SerialPayload in context))
        context[ZWAVE.SerialPayload] = serialFunc.encode(context);
    else {
        var payload = context[ZWAVE.SerialPayload] || [];
        context[ZWAVE.SerialPayload] = Array.isArray(payload) ? payload : [payload];
   }

    return next(context);

}

// HELPER METHODS ADDED TO SERVER PROTOTYPE
IopaServer.prototype.sendSerialRequest = function (serialFunctionClass, payload) {
    var server = this;

    var context = server.createContext();
    context[ZWAVE.SerialFunctionClass] = serialFunctionClass;

    if (typeof payload == 'object' && !(Array.isArray(payload)) && !(payload > 0)) {
        for (var key in payload) {
            if (payload.hasOwnProperty(key)) context[key] = payload[key];
        }
    } else {
        context[ZWAVE.SerialPayload] = payload;
    }

    return server.send(context);

}

IopaServer.prototype.sendGetNodeProtocolInfo = function (nodes) {
    var server = this;

    if (Array.isArray(nodes)) {
        return Promise.all(
            nodes.map(function (id) {
                return server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.GET_NODE_PROTOCOL_INFO, id)
            })
        );
    } else {
        return server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.GET_NODE_PROTOCOL_INFO, id);
    }
}

IopaServer.prototype.sendRequestNodeInfo = function (nodes) {
    var server = this;

    if (Array.isArray(nodes)) {
        return Promise.all(
            nodes.map(function (id) {
                return server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.REQUEST_NODE_INFO, id)
            })
        );
    } else {
        return server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.REQUEST_NODE_INFO, nodes);
    }
}
