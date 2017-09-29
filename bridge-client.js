const util = require('util'),
  EventEmitter = require('events').EventEmitter,
  SerialPort = require('serialport'),
  ZwaveTest = require('./src/index').SERVER,
  PlatformId = process.env.RESIN_DEVICE_UUID ? "urn:io.resin:" + process.env.RESIN_DEVICE_UUID : "controller1",
  LocationId = process.env.RESIN_LOCATION_ID || "home",
  IopaApp = require('./src/iopa-slim').App,
  IopaDevice = require('./src/iopa-device'),
  ZwaveServer = require('./src').Server,
  ZWAVE = ZwaveServer.ZWAVE,
  WD100 = require('./drivers/ZWaveProducts/WD100-InWallDimmerSwitch/device');

var zwave, mqtt;

process.removeAllListeners('SIGINT');

process.on('SIGINT', function () {
  console.log('disconnecting...');
  zwave.close();
});

// RUN MAIN

(function main() {

  _findZwavePort(function (error, port) {
    if (!error) {
      console.log("Connecting to " + port.comName)

      var app = new IopaApp();
      app.use(ZwaveServer);
      app.use(IopaDevice, { drivers: __dirname + '/drivers' });

      zwave = app.createServer("zwave:");
      //   mqtt = app.createServer("mqtt:");

      zwave.listen(port.comName, { LocationId: LocationId, PlatformId: PlatformId })
        .then(() => {
          console.log(util.inspect(zwave.db, false, 100));

        });

    } else {
      console.log(error);
    }
  });
})();


// PRIVATE METHODS

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

  const vendorId = parseInt(port.vendorId, 16);
  const productId = parseInt(port.productId, 16);

  return ((vendorId == 0x0658 &&
    productId == 0x0200) ||  // Aeotech Z-Stick Gen-5
    (vendorId == 0x0658 &&
      productId == 0x0280) ||  // UZB1
    (vendorId == 0x10c4 &&
      productId == 0xea60));   // Aeotech Z-Stick S2
}
