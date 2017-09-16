'use strict';

/* 
 * ZWAVE PRODUCTS WS100 IN-WALL ON/OFF SWITCH
 * 
 * Portions Copyright (c) 2017 Internet of Protocols Alliance (IOPA)
 * Licensed under the Apache License, Version 2.0
 * 
 * Type: On/Off Power Switch, Always On Slave
 * Documentation: http://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2300/ZWP_WS100_UG_030217.pdf
 *
 */

function GenericController(app) {

	app.registerDeviceHandler(["zwave:StaticController", "zwave:GenericController"], this);

	this.app = app;
	
}

GenericController.prototype.config = function(deviceContext) {
   return require('./config.json');
}

GenericController.prototype.deviceAdded = function (deviceContext) {
}

GenericController.prototype.deviceInvoke = function (context, next) {
	return next();
}

module.exports = GenericController;