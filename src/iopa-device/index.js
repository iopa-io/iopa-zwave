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
    iopa = require('../iopa-slim'),
    DEVICE = iopa.constants.DEVICE,
    SERVER = iopa.constants.SERVER,
    ZWAVE = require('../zwave-server-middleware/zwave-constants'),
    PROTOCOL = ZWAVE.PROTOCOL,
    fs = require('fs'),
    path = require('path')

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Iopa Device Middleware
 * 
 * Usage: app.use(IopaDevicesMiddleware)
 * 
 * @class IopaDeviceMiddleware
 * @param app  IOPA AppBuilder App
 * @constructor
 * @public
 */
function IopaDeviceMiddleware(app, options) {

    _classCallCheck(this, IopaDeviceMiddleware);
    this.app = app;

    const packageVersion = require('../../package.json').version;

    app.properties[SERVER.Capabilities][DEVICE.Capability] = {};
    app.properties[SERVER.Capabilities][DEVICE.Capability][SERVER.Version] = packageVersion;

    app.registerDeviceHandler = this.registerDeviceHandler.bind(this);
    app.addDevice = this.addDevice.bind(this);

    app.properties[SERVER.Capabilities][DEVICE.Capability].registerDeviceHandler = app.registerDeviceHandler;
    app.properties[SERVER.Capabilities][DEVICE.Capability].addDevice = app.addDevice;

    this.handlers = {};
    this.devices = {};

    if (options && 'drivers' in options) {
        this.scanDrivers(options.drivers);
    }

}

module.exports = IopaDeviceMiddleware;

IopaDeviceMiddleware.prototype.registerDeviceHandler = function (productKeys, deviceContext) {

    productKeys = Array.isArray(productKeys) ? productKeys : [productKeys];
    var self = this;

    productKeys.forEach(function (key) {
        self.handlers[key] = deviceContext;
    });

}

IopaDeviceMiddleware.prototype.addDevice = function (deviceContext) {
    if (deviceContext[DEVICE.ProductKey] in this.handlers) {
        var handler = this.handlers[deviceContext[DEVICE.ProductKey]];
        var config = handler.config();
        deviceContext[DEVICE.HandlerName] = config.manufacturer + " " + config.product + " " + config.name.en;
        deviceContext[DEVICE.Handler] = handler;
        this.devices[deviceContext[DEVICE.Id]] = deviceContext;
        console.log("Initialized Device Handler " + deviceContext[DEVICE.HandlerName]);
        handler.deviceAdded(deviceContext);
    } else if (deviceContext[DEVICE.ProductGeneric] in this.handlers) {
        var handler = this.handlers[deviceContext[DEVICE.ProductGeneric]];
        var config = handler.config();
        deviceContext[DEVICE.HandlerName] = config.manufacturer + " " + config.product + " " + config.name.en;
        deviceContext[DEVICE.Handler] = handler;
        this.devices[deviceContext[DEVICE.Id]] = deviceContext;
        console.log("Initialized Device Handler " + deviceContext[DEVICE.HandlerName]);
        handler.deviceAdded(deviceContext);
    } else {
        console.log("UNKNOWN DEVICE");
    }
}

IopaDeviceMiddleware.prototype.invoke = function (context, next) {

    if (!(DEVICE.Id in context)) return next();

    var id = context[DEVICE.Id];

    if (!(id in this.devices)) return next();

    var deviceContext = this.devices[id];
    var handler = deviceContext[DEVICE.Handler];

    return deviceContext.deviceInvoke.call(handle, deviceContext, context, next).then(function(item){
        console.log(context.toString());
    })

}

IopaDeviceMiddleware.prototype.scanDrivers = function (dir) {
    var self = this;

    fs.readdirSync(dir).forEach(function (manufacturer) {
        if (manufacturer.charAt(0) !== '.') {
            fs.readdirSync(path.join(dir, manufacturer)).forEach(function (product) {

                var productPath = path.join(dir, manufacturer, product);
                if (fs.existsSync(path.join(productPath, 'device.js')))
                    self.app.use(require(path.join(productPath, 'device.js')));
            });
        }
    });
}