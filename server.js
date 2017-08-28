const util = require('util'),
  EventEmitter = require('events').EventEmitter,
  SerialPort = require('serialport'),
  ZwaveTest = require('./src/index').SERVER,
  platformid = "urn:io.resin:" + (process.env.RESIN_DEVICE_UUID || "localhost"),
  locationid = process.env.RESIN_LOCATION_ID || "home",
  IopaApp = require('./src/iopa-slim').App,
  ZwaveBinding = require('./src').Server,
  ZwaveDevices = require('./src').Devices,
  ZWAVE = ZwaveBinding.ZWAVE,
  DEVICE = require('./src/iopa-slim').constants.DEVICE,
  SERVER = require('./src/iopa-slim').constants.SERVER,
  WD100 = require('./drivers/ZWaveProducts/WD100-InWallDimmerSwitch/device');

process.removeAllListeners('SIGINT');

process.on('SIGINT', function () {
  console.log('disconnecting...');
  zwave.disconnect();
});

// RUN MAIN

(function main() {

  _findZwavePort(function (error, port) {
    if (!error) {
      console.log("Connecting to " + port.comName)

      var app = new IopaApp();
      app.use(ZwaveBinding);
      app.use(ZwaveDevices)

      // TO DO: MOVE FOLLOWING TO FOLDER DISCOVERY ROUTINE
      app.use(WD100);

      var options = { locationid: locationid, platformid: platformid };
      var server = app.createServer("zwave:", options);

      server.listen(port.comName)
        .then(() => {
          console.log(util.inspect(server.db, false, 100));
          console.log("[ZWAVE] Ready");
          _onZwaveReady(app, server);
        });

    } else {
      console.log(error);
    }
  });
})();


// PRIVATE METHODS

function _onZwaveReady(app, server) {
  Object.keys(server.db[ZWAVE.Nodes]).forEach(function (nodeid) {
    var node = server.db[ZWAVE.Nodes][nodeid]
    var deviceContext = new EventEmitter();
    app.addDevice(
      Object.assign(deviceContext, {
        [DEVICE.Id]: node[DEVICE.Id],
        [ZWAVE.NodeId]: nodeid,
        [DEVICE.ProductKey]: node[DEVICE.ProductKey],
        [SERVER.Server]: server
      })
    );
  });
}

function _findZwavePort(callback) {
  SerialPort.list(function listPortsCallback(error, ports) {
    if (error) {
      console.error(error);
      callback(error);
    }

    for (var port of ports) {
      if (_isZwavePort(port)) {
        callback(null, port);
        return;
      }
    }
    callback(new Error('No Zwave port found'));
  });
}

function _isZwavePort(port) {
  return ((port.vendorId == '0x0658' &&
    port.productId == '0x0200') ||  // Aeotech Z-Stick Gen-5
    (port.vendorId == '0x0658' &&
      port.productId == '0x0280') ||  // UZB1
    (port.vendorId == '0x10c4' &&
      port.productId == '0xea60'));   // Aeotech Z-Stick S2
}

