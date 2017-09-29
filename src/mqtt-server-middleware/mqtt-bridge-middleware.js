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
    IOPA = { Scheme: "iopa.Scheme", Body: "iopa.Body", Protocol: "iopa.Protocol", Path: "iopa.Path" },
    MQTT = { Body: "mqtt.Body", Topic: "mqtt.Topic", Capabilities: "mqtt.Capabilities", Version: "mqtt.Version" },  
    SERVER = { Capabilities: "server.Capabilities", Topics: "server.Topics", Server: "server.Server" };

const mqtt = require('mqtt');

const rejectEvents = {
    'reconnect': 'info',
    'close': 'warn',
    'offline': 'warn',
    'error': 'error'
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * MQTT Bridge Middleware
 * 
 * This middleware is composed of the following functions:
 * 
 *  - converts raw server payload into MQTT frame
 * * 
 * Usage: app.use(MqttBridgeMiddleware)
 * 
 * @class MqttBridgeMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function MqttBridgeMiddleware(app) {
    _classCallCheck(this, MqttBridgeMiddleware);

    if (!app.properties[SERVER.Capabilities][MQTT.Capabilities][MQTT.Version])
        throw new Error("MqttMiddleware requires embedded MQTT Server");
}

module.exports = MqttBridgeMiddleware;

MqttBridgeMiddleware.prototype.invoke = function (context, next) {

    if (context[IOPA.Scheme] !== "mqtt:") {

        context[MQTT.Body] = context[IOPA.Body];
        context[MQTT.Topic] = context[IOPA.Path];
        return context[SERVER.Capabilities][MQTT.Capabilities][SERVER.Server].send(context[MQTT.Topic], context[MQTT.Body]);

    } else if (context[IOPA.Scheme] === "mqtt:") {

        var topic = context[MQTT.Body];
        if (topic in context[SERVER.Capabilities][SERVER.Topics]) {
            context[IOPA.Body] = context[MQTT.Body]
            return context[SERVER.Capabilities][SERVER.Topics][topic].send(context);
        }

        return next();

    } else

        return next();

}
