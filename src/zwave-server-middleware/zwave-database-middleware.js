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
    SERVER = { Capabilities: "server.Capabilities" };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Zwave Database In Memory Middleware
 * 
 * This middleware is composed the following functions:
 * 
 * 1. ZwaveDatabaseMemory
 *  - adds a db to the server
 *  
 * Usage: app.use(ZwaveDatabaseMemory)
 * 
 * @class ZwaveDatabaseMemory
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveDatabaseMemory(app) {
    _classCallCheck(this, ZwaveDatabaseMemory);

}

module.exports = ZwaveDatabaseMemory;

ZwaveDatabaseMemory.prototype.createServer = function (registeredScheme, next, scheme, options) {
    if (scheme !== registeredScheme)
        return next(scheme, options);

    var server = next(scheme, options);
    
    server.db = new ZwaveDb();

    var nextSend = server.send;
    server.send = this.send.bind(this, server, nextSend.bind(server));

    return server;
};

ZwaveDatabaseMemory.prototype.send = function (server, next, context) {
  
    if (context[ZWAVE.DoNotCache] || (context[ZWAVE.RawPayload] && context[ZWAVE.RawPayload].length == 1))
        return next(context);

    return next(context)
        .then(function (response) {
            merge(server.db[ZWAVE.Controller], response[ZWAVE.Controller]);
            mergenodes(server.db[ZWAVE.Nodes], response[ZWAVE.Nodes]);
            return response;
        })
}

function ZwaveDb() {
    this[ZWAVE.Controller] = {}
    this[ZWAVE.Nodes] = {}
}

ZwaveDb.prototype.allNodes = function () {
    return Object.keys(this[ZWAVE.Nodes]);
}

ZwaveDb.prototype.allNodesButSelf = function () {
    var ownId = this[ZWAVE.Controller][ZWAVE.OwnNodeId];
    return Object.keys(this[ZWAVE.Nodes]).filter((id) => id != ownId)
}

ZwaveDb.prototype.onlineNodes = function () {
    var self = this;
    return this.allNodesButSelf()
        .filter((id) => this[ZWAVE.Nodes][id][ZWAVE.Online]);
}


// UTILITY FUNCTIONS

function merge(target, changes) {
    if (!target)
        throw new Error("target must not be empty");

    if (!changes)
        changes = {};

    for (var key in changes) {
        if (changes.hasOwnProperty(key)) target[key] = changes[key];
    }
};


function mergeDoubleLayer(target, changes) {
    if (!target)
        throw new Error("target must not be empty");

    if (!changes)
        changes = {};

    for (var key1 in changes) {
        if (changes.hasOwnProperty(key1)) {
            var item = changes[key1];
            if (typeof item == "object") {
                target[key1] = target[key1] || {};
                var targetItem = target[key1];

                for (var key2 in item) {
                    if (item.hasOwnProperty(key2)) target[key1][key2] = item[key2];
                }
            } else
                target[key1] = item;
        }
    }
};

function mergenodes(target, nodechanges) {
    if (!target)
        throw new Error("target must not be empty");

    if (!nodechanges)
        defaults = {};

    for (var id in nodechanges) {
        if (nodechanges[id]) {
            target[id] = target[id] || {};
            mergeDoubleLayer(target[id], nodechanges[id])

            
        }
    }
};

