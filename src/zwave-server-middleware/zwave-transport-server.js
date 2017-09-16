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
    SerialPort = require('serialport'),
    ZWAVE = require('./zwave-constants'),
    SERVER = { Capabilities: "server.Capabilities", Server: "server.Server" },
    ZwaveStreamParser = require('./zwave-transport-stream-parser');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Zwave Transport Server
 * 
 * This IOPA Middleware function should be one of the first middleware to be added to the App pipeline.
 * It adds a createServer function to the app (or hooks into one if already exists) to 
 * create Zwave server objects on demand.
 * 
 * Usage: 
 *      app.use(ZwaveTransportServer);
 *      server = app.createServer("zwave:");
 *      zwave = server.listen("/dev/cu.usbmodem1431");
 *      zwave.send(context);
 * 
 * One Transport Server can create multiple servers using the same pipeline for the use case
 * where multiple Zwave sticks or IP Gateways are available.
 * 
 * @class ZwaveTransportServer
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function ZwaveTransportServer(app) {

    _classCallCheck(this, ZwaveTransportServer);

    this.app = app;

    const packageVersion = require('../../package.json').version;

    app.properties[SERVER.Capabilities][ZWAVE.Capabilities] = {};
    app.properties[SERVER.Capabilities][ZWAVE.Capabilities][ZWAVE.Version] = packageVersion;
}

module.exports = ZwaveTransportServer;

// PUBLIC METHODS, AUTOMATICALLY HOOKED BY AUTO GENERATED createServerForServers (see IOPA AppBuilder)

ZwaveTransportServer.prototype.listen = function (server, port, options) {

    server.port = port;
    server.options = options || { baudRate: 115200, dataBits: 8, stopBits: 1, parity: "none" };

    server[ZWAVE.CallbackId] = 0;

    server._rawstream = new SerialPort(port, options);

    var parser = new ZwaveStreamParser();
    server._rawstream.pipe(parser);

    server.stream = server._rawstream;

    parser.on("data", this.onData_.bind(this, server));

    return new Promise(function (resolve, reject) {
        server._rawstream.on('open', function () {
            server.isOpen = true;
            resolve(server);
        });
    });
};

ZwaveTransportServer.prototype.send = function (server, next, context) {
    if (!server.isOpen)
        throw new Error("server must be opened with listen first");

    var message = context[ZWAVE.RawPayload];

    var result = this.write_(server, message);

    if ('dispose' in context) context.dispose();
    else {
        for (var prop in context) {
            if (context.hasOwnProperty(prop)) {
                if (context[prop].dispose) context[prop].dispose();

                context[prop] = null;
            }
        };
    }
    
    return result;

}

ZwaveTransportServer.prototype.close = function (server) {
    server.isOpen = false;
    return new Promise(function (resolve, reject) {
        if (server._rawstream) server._rawstream.close(resolve);
        server._rawstream = null;
    });
}

// PRIVATE METHODS

ZwaveTransportServer.prototype.onData_ = function (server, data) {

    var context = this.app.createContext();

    context[ZWAVE.Capabilities] = context[ZWAVE.Capabilities] || {};
    context[ZWAVE.RawPayload] = data;
    context[SERVER.Capabilities][SERVER.Server] = server;
    context[ZWAVE.Controller] = {};
    context[ZWAVE.Nodes] = {};

    context.using(this.app.invoke.bind(this.app));
}

ZwaveTransportServer.prototype.write_ = function (server, data) {

    return new Promise(function (resolve, reject) {
        server._rawstream.write(data);
        server._rawstream.drain(resolve);
    });

}
