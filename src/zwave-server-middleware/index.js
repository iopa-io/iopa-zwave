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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SerialPort = require('serialport'),
  EventEmitter = require('events').EventEmitter,
  util = require('util'),
  ZWAVE = require('./zwave-constants'),
  PROTOCOL = ZWAVE.PROTOCOL, /* reqplace with iopa-zwave-protocol */
  IopaApp = require('../iopa-slim').App,
  DEVICE = require('../iopa-slim').constants.DEVICE,
  SERVER = require('../iopa-slim').constants.SERVER,
  MQTT = { Body: "mqtt.Body", Topic: "mqtt.Topic", Capabilities: "mqtt.Capabilities", Version: "mqtt.Version" };


const
  ZwaveDatabaseMiddleware = require('./zwave-database-middleware'),
  ZwaveMessageMiddleware = require('./zwave-message-middleware'),
  ZwaveNodeMiddleware = require('./zwave-node-command-middleware'),
  ZwaveSerialMiddleware = require('./zwave-serial-middleware'),
  ZwaveTransportMiddleware = require('./zwave-transport-middleware'),
  ZwaveTransportServer = require('./zwave-transport-server');

/*
 * Zwave IOT Binding
 * 
 * This binding provides a self-contained ZWave Gateway:
 * 
 * Events:
 *    ready(controller, nodes):   Provides
 *  
 * Usage: 
 *    var binding = new ZwaveBinding();
 *    binding.listen("/dev/cu.usbmodem1431");
 *    binding.on("ready", function(controller, nodes) {   });
 * 
 * @class ZwaveBinding
 * @param options optional Options, not currently used
 * @constructor
 * @public
 */
function ZwaveBinding(app) {

  _classCallCheck(this, ZwaveBinding);

  app.use("zwave:", ZwaveTransportServer);
  app.use(ZwaveTransportMiddleware);
  app.use(ZwaveSerialMiddleware);
  app.use(ZwaveNodeMiddleware);
  app.use(ZwaveMessageMiddleware);
  app.use(ZwaveDatabaseMiddleware);

  this.app = app;
}

ZwaveBinding.prototype.createServer = function (registeredScheme, next, scheme, options) {

  if (scheme !== registeredScheme)
    return next(scheme, options);

  var server = next(scheme, options);
  this.server = server;

  var nextListen = server.listen;
  server.listen = this.listen.bind(this, server, nextListen.bind(server));

  return server;

};

ZwaveBinding.prototype.listen = function (server, nextListen, port, options) {
  var self = this;
  return nextListen(port, options)
    .then(() => this._initializeController())
    .then(() => {
      server.db.ready = true;
      console.log("[ZWAVE] Ready");
      _onZwaveReady(self.app, server);
    });
}

ZwaveBinding.prototype._initializeController = function () {

  var server = this.server;
  var db = server.db;
  db[ZWAVE.Nodes] = {};
  var self = this;

  return _run([
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.GET_VERSION),
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.SET_TIMEOUTS, [0x0f, 0x0a]),
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.RF_POWER_LEVEL_SET, 0x00),
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.GET_CAPABILITIES),
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.GET_CONTROLLER_CAPABILITIES),
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.MEMORY_GET_ID),
    () => server.sendSerialRequest(PROTOCOL.SERIAL_API_FUNC.GET_INIT_DATA),
    () => server.sendGetNodeProtocolInfo(db.allNodes()),
    () => server.sendRequestNodeInfo(db.allNodesButSelf()),
    () => server.sendNodesSequence(db.onlineNodes(), PROTOCOL.COMMAND_CLASS.MANUFACTURER_SPECIFIC.id, PROTOCOL.COMMAND_CLASS.MANUFACTURER_SPECIFIC.GET),
    () => server.sendNodesSequence(db.onlineNodes(), PROTOCOL.COMMAND_CLASS.MANUFACTURER_SPECIFIC.id, PROTOCOL.COMMAND_CLASS.MANUFACTURER_SPECIFICV2.DEVICE_SPECIFIC_GET),
    () => server.sendNodesSequence(db.onlineNodes(), PROTOCOL.COMMAND_CLASS.ZWAVEPLUS_INFO.id, PROTOCOL.COMMAND_CLASS.ZWAVEPLUS_INFO.GET)
  ]).then(() => {
    db = null;
    server = null;
  });

}

function _onZwaveReady(app, server) {
  Object.keys(server.db[ZWAVE.Nodes]).forEach(function (nodeid) {
    var node = server.db[ZWAVE.Nodes][nodeid]
    if (nodeid == server.db[ZWAVE.Controller]["zwave.OwnNodeId"])
      node[DEVICE.ProductKey] = server.db[ZWAVE.Controller][DEVICE.ProductKey];

    var deviceContext = new EventEmitter();


    if (app.addDevice) app.addDevice(
      Object.assign(deviceContext, {
        [DEVICE.Id]: server.scheme + server.db[ZWAVE.Controller][SERVER.Id] + ":" + nodeid,
        [ZWAVE.NodeId]: nodeid,
        [DEVICE.ProductKey]: node[DEVICE.ProductKey],
        [DEVICE.ProductGeneric]: server.scheme + node[ZWAVE.GenericDevice].name,
        [SERVER.Server]: server
      })
    );
  });

  if (app.properties[SERVER.Capabilities][MQTT.Capabilities])
    app.properties[SERVER.Capabilities][MQTT.Capabilities][SERVER.Server].publish("ready", server.id);

    console.log(server.db);

}

module.exports = ZwaveBinding;
module.exports.ZWAVE = ZWAVE;

function _run(tasks) {
  var current = Promise.resolve();
  for (var k = 0; k < tasks.length; ++k) {
    current = current.then(tasks[k]);
  }
  return current;
}