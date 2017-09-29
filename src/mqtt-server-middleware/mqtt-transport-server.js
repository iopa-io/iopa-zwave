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
    IOPA = { Scheme: "iopa.Scheme", Protocol: "iopa.Protocol" },
    MQTT = { Body: "mqtt.Body", Topic: "mqtt.Topic", Capabilities: "mqtt.Capabilities", Version: "mqtt.Version" },
    SERVER = { Capabilities: "server.Capabilities", Server: "server.Server" },
    mqtt = require('mqtt');

const rejectEvents = {
    'reconnect': 'info',
    'close': 'warn',
    'offline': 'warn',
    'error': 'error'
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * MQTT Transport Server
 * 
 * This IOPA Middleware function should be one of the first middleware to be added to the App pipeline.
 * It adds a createServer function to the app (or hooks into one if already exists) to 
 * create MQTT server objects on demand.
 * 
 * Usage: 
 *      app.use(MqttTransportServer);
 *      server = app.createServer("mqtt:");
 *      zwave = server.listen("localhost:1883");
 *      zwave.send(context);
 * 
 * One Transport Server can create multiple servers using the same pipeline 
 * 
 * @class MqttTransportServer
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function MqttTransportServer(app) {

    _classCallCheck(this, MqttTransportServer);

    this.app = app;

    const packageVersion = require('../../package.json').version;

    app.properties[SERVER.Capabilities][MQTT.Capabilities] = {};
    app.properties[SERVER.Capabilities][MQTT.Capabilities][MQTT.Version] = packageVersion;
}

module.exports = MqttTransportServer;

// PUBLIC METHODS, AUTOMATICALLY HOOKED BY AUTO GENERATED createServerForServers (see IOPA AppBuilder)

MqttTransportServer.prototype.connect = function (server, url, options) {

    options = options || {};
    
    if ((typeof url !== 'string') && !(url instanceof String)) {
        options = url;
        url = options.url || "mqtt:localhost";
     }

    options.will = options.will || {
        topic: options.root + "/" + options.LocationId + "/" + options.PlatformId + "/" + "offline",
        payload: 'connection closed abnormally',
        qos: 0,
        retain: false
    };

    server.url = url;
    server.options = options;
    server.topic = options.root + "/" + options.LocationId + "/" + options.PlatformId;

    server._rawstream = mqtt.connect(url, options);

    server.subscribe = function (topic) {
        return new Promise(function (resolve, reject) {
            server._rawstream.subscribe(topic, null, resolve);
        });
    };

    server.publish = function (topic, payload) {
        if (!server.isOpen)
            throw new Error("server must be opened with listen first");
    
        return new Promise(function (resolve, reject) {
            server._rawstream.publish(server.topic + "/" + topic, payload, resolve);
        });
    }

    this.app.properties[SERVER.Capabilities][MQTT.Capabilities][SERVER.Server] = server;
    
    var self = this;

    return new Promise(function (resolve, reject) {

        server._rawstream.on('connect', function () {

            var topic = server.topic + "/" + "online";
            var payload = 'connection open';
            if (server._rawstream) {
                server._rawstream.publish(topic, payload);
            }

            server._rawstream.subscribe(server.topic + "/+/+/+");
            server.isOpen = true;

            if (options.topics) server.subscribe(options.topics);

            resolve(server);
        });

        server._rawstream.on('message', self.onMessage_.bind(this, server));

        for (var r in rejectEvents) {
            if (rejectEvents.hasOwnProperty(r)) {
                server._rawstream.on(r, function (args) {
                    // TO DO HANDLE REJECTION
                });
            }
        }
    });
};


MqttTransportServer.prototype.send = function (server, next, context) {
    if (!server.isOpen)
        throw new Error("server must be opened with listen first");

    var body = context[MQTT.Body];
    var topic = context[MQTT.Topic];

    var result = new Promise(function (resolve, reject) {
        server._rawstream.publish(topic, body, resolve);
    });

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

MqttTransportServer.prototype.close = function (server) {
    server.isOpen = false;
    return new Promise(function (resolve, reject) {

        const options = server.options;

        var topic = options.root + "/" + options.LocationId + "/" + options.PlatformId + "/" + "offline";
        var payload = 'connection closed';
        if (server._rawstream) {
            server._rawstream.publish(topic, payload);
            server._rawstream.end(resolve);
            server._rawstream = null;
        }
        else
            resolve();

    });
}

// PRIVATE METHODS
MqttTransportServer.prototype.onMessage_ = function (server, topic, message) {
    var context = this.app.createContext();
    context[MQTT.Body] = message;
    context[MQTT.Topic] = topic;
    context[IOPA.Scheme] = "mqtt:";
    context[IOPA.Protocol] = "MQTT/3.1.1";
    context[SERVER.Capabilities][SERVER.Server] = server;
    context.using(this.app.invoke.bind(this.app));
}