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
    DEVICE = require('../iopa-slim').constants.DEVICE,
    SERVER = require('../iopa-slim').constants.SERVER,
    ZWAVE = require('./zwave-constants'),
    PROTOCOL = ZWAVE.PROTOCOL;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Zwave Node Middleware
 * 
 * This middleware sends and receives Node-specifgic messages
 * 
 * Usage: app.use(ZwaveNodeMiddleware)
 * 
 * @class ZwaveNodeMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveNodeCommandMiddleware(app) {
    _classCallCheck(this, ZwaveNodeCommandMiddleware);

    if (!app.properties[SERVER.Capabilities][ZWAVE.Capabilities][ZWAVE.Version])
        throw new Error("ZwaveNodeCommandMiddleware requires embedded ZwaveServer");

    app.use(ZwaveNodeCommandSerialMiddleware);
    app.use(ZwaveNodeCommandReportMiddleware);
}

module.exports = ZwaveNodeCommandMiddleware;

/*
 * Zwave Node Command Report Middleware
 * 
 * This middleware does additional business logic translation based on Command Report
 * 
 * Usage: app.use(ZwaveNodeCommandReportMiddleware)
 * 
 * @class ZwaveNodeCommandSerialMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveNodeCommandReportMiddleware(app) {
}

ZwaveNodeCommandReportMiddleware.prototype.invoke = function (context, next) {

    

    switch (context[ZWAVE.CommandClass]) {
        case PROTOCOL.COMMAND_CLASS.MANUFACTURER_SPECIFIC.id:
            if (context[ZWAVE.Command] == PROTOCOL.COMMAND_CLASS.MANUFACTURER_SPECIFIC.REPORT) {
                var report = context[ZWAVE.Nodes][context[ZWAVE.NodeId]].MANUFACTURER_SPECIFIC.REPORT;
                var key = `zwave:${toHex16a(report.ManufacturerId)}:${toHex16a(report.ProductTypeId)}:${toHex16a(report.ProductId)}`;
                context[ZWAVE.Nodes][context[ZWAVE.NodeId]][DEVICE.ProductKey] = key;
            }
            break;
        default:
    }

    return next();
}

/*
 * Zwave Node Command Serial API Middleware
 * 
 * This middleware sends and receives Node-specific messages using the Zwave Serial API
 * 
 * Usage: app.use(ZwaveNodeCommandSerialMiddleware)
 * 
 * @class ZwaveNodeCommandSerialMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveNodeCommandSerialMiddleware(app) {
    _classCallCheck(this, ZwaveNodeCommandSerialMiddleware);
}

/**
 * @method send
 * Iopa Send Method, called for each outbound zwave request / event
 *
 * @param {Object} Context Iopa Context Method, should contain Zwave CommandClass, Command, and Payload
 * @param {Object} next Next middleware in pipeline, prebound to context method
 * @returns {Promise} 
 * @public
 */
ZwaveNodeCommandSerialMiddleware.prototype.send = function (server, next, context) {

    if (typeof context !== 'object' || !context[ZWAVE.NodeId])
        return next(context);

    if (!context[ZWAVE.CommandClass] ||
        !context[ZWAVE.Command])
        return next(context);

    server[ZWAVE.CallbackId] = (server[ZWAVE.CallbackId] + 1) % 0xff;
    context[ZWAVE.CallbackId] = server[ZWAVE.CallbackId];

    if (!(ZWAVE.Payload in context)) {

        context[ZWAVE.CommandClass] = Number.isInteger(context[ZWAVE.CommandClass]) ? context[ZWAVE.CommandClass] :  PROTOCOL.COMMAND_CLASS[context[ZWAVE.CommandClass]].id;
        context[ZWAVE.Command] =  Number.isInteger(context[ZWAVE.Command]) ? context[ZWAVE.Command] :  PROTOCOL.COMMAND_CLASS[ PROTOCOL.COMMAND_CLASS.enum[context[ZWAVE.CommandClass]].name][context[ZWAVE.Command]]

        var commandFunc = PROTOCOL.COMMAND_CLASS.enum[context[ZWAVE.CommandClass]].command[context[ZWAVE.Command]];
        context[ZWAVE.Payload] = commandFunc.encode(context);
    }
    else {
        var commandPayload = context[ZWAVE.Payload] || [];
        context[ZWAVE.Payload] = Array.isArray(commandPayload) ? commandPayload : [commandPayload];
    }

    // Default length, serial function class and Transmit Options if not specified
    context[ZWAVE.Length] = context[ZWAVE.Length] || (context[ZWAVE.Payload].length + 2);
    context[ZWAVE.SerialFunctionClass] = context[ZWAVE.SerialFunctionClass] || PROTOCOL.SERIAL_API_FUNC.SEND_DATA;
    context[ZWAVE.TxOptions] = context[ZWAVE.TxOptions] || PROTOCOL.ENUM.SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS.None;

    return next(context);
}

/**
 * @method invoke
 * Iopa Invoke Method, called for each inbound zwave response / event
 *
 * @param {Object} Context Iopa Context Method
 * @param {Object} next Next middleware in pipeline, prebound to context method
 * @returns {Promise} 
 * @public
 */
ZwaveNodeCommandSerialMiddleware.prototype.invoke = function (context, next) {

    switch (context[ZWAVE.SerialFunctionClass]) {
        case PROTOCOL.SERIAL_API_FUNC.GET_INIT_DATA:
            context[ZWAVE.Controller][ZWAVE.NodesAvailable].forEach(function (NodeId) {
                context[ZWAVE.Nodes][NodeId] = { 'zwave.Available': true };
            });

            return next();

        case PROTOCOL.SERIAL_API_FUNC.APPLICATION_COMMAND_HANDLER:

            var node = {};
            context[ZWAVE.Nodes][context[ZWAVE.NodeId]] = node;

            var commandClass = context[ZWAVE.CommandClass];
            var command = context[ZWAVE.Command];

            var commandClassFunc = PROTOCOL.COMMAND_CLASS.enum[commandClass];
            var commandFunc = commandClassFunc.command[command];

            var item = commandFunc.decode(context[ZWAVE.Payload]);

            node[commandClassFunc.name] = node[commandClassFunc.name] || {};
            node[commandClassFunc.name][commandFunc.name] = item;

            return next();
        case PROTOCOL.SERIAL_API_FUNC.GET_NODE_PROTOCOL_INFO:
            var node = {};
            context[ZWAVE.Nodes][context[ZWAVE.NodeId]] = node;
            var commandClassFunc = PROTOCOL.COMMAND_CLASS.enum[context[ZWAVE.CommandClass]];
            var commandFunc = commandClassFunc.command[context[ZWAVE.Command]];
            var item = commandFunc.decode(context[ZWAVE.Payload]);
            node[ZWAVE.BasicDevice] = item.BasicDeviceClass;
            node[ZWAVE.GenericDevice] = item[ZWAVE.GenericDevice];
            node[ZWAVE.SpecificDevice] = item[ZWAVE.SpecificDevice];
            delete item.BasicDeviceClass;
            delete item[ZWAVE.GenericDevice];
            delete item[ZWAVE.SpecificDevice];

            node[commandClassFunc.name] = node[commandClassFunc.name] || {};
            node[commandClassFunc.name][commandFunc.name] = item;
            ;
            return next();
        case PROTOCOL.SERIAL_API_FUNC.APPLICATION_UPDATE:
            var node = {};
            context[ZWAVE.Nodes][context[ZWAVE.NodeId]] = node;

            if (context[ZWAVE.UpdateStatus].value == PROTOCOL.ENUM.SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_UPDATE_STATUS.NodeInfoReceived) {
                node[ZWAVE.Online] = true;
                node[ZWAVE.BasicDevice] = context[ZWAVE.BasicDevice];
                node[ZWAVE.GenericDevice] = context[ZWAVE.GenericDevice];
                node[ZWAVE.SpecificDevice] = context[ZWAVE.SpecificDevice];
                node[ZWAVE.SupportedCommandClasses] = context[ZWAVE.CommandClass];
            } else if (context[ZWAVE.UpdateStatus].value == PROTOCOL.ENUM.SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_UPDATE_STATUS.NodeInfoReqFailed) {
                node[ZWAVE.Online] = false;
            }
            return next();
        default:
            return next();
    }
}


// HELPER METHODS ADDED TO  SERVER PROTOTYPE
IopaServer.prototype.sendNode = function (node, CmdClass, Cmd, payload) {
    var server = this;

    var context = server.createContext();
    context[ZWAVE.NodeId] = node;
    context[ZWAVE.CommandClass] = CmdClass;
    context[ZWAVE.Command] = Cmd;

    if (typeof payload == 'object' && !(Array.isArray(payload)) && !(payload > 0)) {
        for (var key in payload) {
            if (payload.hasOwnProperty(key)) context[key] = payload[key];
        }
    } else {
        context[ZWAVE.Payload] = payload;
    }

    return server.send(context);

}

IopaServer.prototype.sendNodesSequence = function (nodes, CmdClass, Cmd, payload) {
    var server = this;

    return Promise.all(
        nodes.map(function (id) {
            return server.sendNode(id, CmdClass, Cmd, payload);
        })
    );
}

IopaServer.prototype.sendNodesMulti = function (nodes, CmdClass, Cmd, payload) {
    var server = this;

    var context = server.createContext();
    context[ZWAVE.CommandClass] = CmdClass;
    context[ZWAVE.Command] = Cmd;
    context.NodeListData = nodes;
    context.NumberOfNodes = nodes.length;
    context[ZWAVE.SerialFunctionClass] = PROTOCOL.SERIAL_API_FUNC.SEND_DATA_MULTI;

    if (typeof payload == 'object' && !(Array.isArray(payload)) && !(payload > 0)) {
        for (var key in payload) {
            if (payload.hasOwnProperty(key)) context[key] = payload[key];
        }
    } else {
        context[ZWAVE.Payload] = payload;
    }

    return server.send(context);
}


function toHex16(d) {
    return "0x" + ("0000" + (+d).toString(16)).slice(-4);
}

function toHex16a(d) {
    return ("0000" + (+d).toString(16)).slice(-4);
}

function toHex32(b1, b2, b3, b4) {
    return toHex8(b1) + toHex8(b2) + toHex8(b3) + toHex8(b4);
}

function toHex8(b) {
    return "0x" + ("00" + (+b).toString(16)).slice(-2);
}