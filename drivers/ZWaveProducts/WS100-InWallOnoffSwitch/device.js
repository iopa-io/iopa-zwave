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

function InWallOnoffSwitch(app) {

	app.registerDeviceHandler(["zwave:0315:4447:3033", "zwave:000C:4447:3033"], this);

//	app.registerZwaveAssociationGroup(1, this);

	this.app = app;
	
}

InWallOnoffSwitch.prototype.config = function(deviceContext) {
   return require('./config.json');
}

InWallOnoffSwitch.prototype.deviceAdded = function (deviceContext) {

	var server = deviceContext.server;

	deviceContext.on('capability.OnOff',
		(onoff) => {
			server.send({
				"zwave.NodeId": deviceContext["zwave.NodeId"],
				"zwave.CommandClass": "SWITCH_BINARY",
				"zwave.Command": "SET",
				"TargetValue": onoff ? 255 : 0
			});
		});

}

InWallOnoffSwitch.prototype.getCapability = function (context) {
	
		if ("capability.OnOff" in context) {
			return server.send({
				"zwave.NodeId": context["zwave.NodeId"],
				"zwave.CommandClass": "SWITCH_MULTILEVEL",
				"zwave.Command": "GET"
			}).then(function(response){
				console.log(response);
			})
		}
	
		return Promise.resolve();
	
	}

InWallOnoffSwitch.prototype.deviceInvoke = function (context, next) {

	if (context["zwave.CommandClass"] == "SWITCH_BINARY" &&
		context["zwave.Command"] == "REPORT") {
		context.device.update({
			"capability.OnOff": context["CurrentValue"] > 0,
		});
		return next();
	}

	if (context["zwave.CommandClass"] == "CENTRAL_SCENE" &&
		context["zwave.Command"] == "NOTIFICATION") {
		context.device.update({
			"capability.Scene": context["SceneNumber"],
			"capability.SceneButton": context["KeyAttributes"].name
		});
		return next();
	}

	return next();

}

module.exports = InWallOnoffSwitch;