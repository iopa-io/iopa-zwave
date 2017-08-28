'use strict';

/* 
 * ZWAVE PRODUCTS WD100 IN-WALL DIMMER SWITCH
 * 
 * Portions Copyright (c) 2017 Internet of Protocols Alliance (IOPA)
 * Licensed under the Apache License, Version 2.0
 * 
 * Type: Light Dimmer Switch, Always On Slave
 * Documentation: http://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2299/ZWP_WD100_UG_030217.pdf
 *
 */

function InWallDimmerSwitch(app) {

	app.registerDeviceHandler(["0315:4447:3034"], this);

//	app.registerZwaveAssociationGroup(1, this);

	this.app = app;
	
}

InWallDimmerSwitch.prototype.config = function(deviceContext) {
   return require('./config.json');
}

InWallDimmerSwitch.prototype.deviceAdded = function (deviceContext) {

	var server = deviceContext.server;

	deviceContext.on('capability.DimmerLevel',
		(dimmerLevel) => {
			server.send({
				"zwave.NodeId": deviceContext["zwave.NodeId"],
				"zwave.CommandClass": "SWITCH_MULTILEVEL",
				"zwave.Command": "SET",
				"CurrentValue": dimmerlevel
			});
		});

	deviceContext.on('capability.OnOff',
		(onoff) => {
			server.send({
				"zwave.NodeId": deviceContext["zwave.NodeId"],
				"zwave.CommandClass": "SWITCH_MULTILEVEL",
				"zwave.Command": "SET",
				"CurrentValue": onoff ? 255 : 0
			});
		});

}

InWallDimmerSwitch.prototype.deviceInvoke = function (context, next) {

	if (context["zwave.CommandClass"] == "SWITCH_MULTILEVEL" &&
		context["zwave.Command"] == "REPORT") {
		context.device.update({
			"capability.DimmerLevel": context["CurrentValue"],
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

module.exports = InWallDimmerSwitch;