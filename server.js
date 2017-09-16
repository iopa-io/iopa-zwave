const util = require('util'),
  EventEmitter = require('events').EventEmitter,
  SerialPort = require('serialport'),
  ZwaveTest = require('./src/index').SERVER,
  platformid = "urn:io.resin:" + (process.env.RESIN_DEVICE_UUID || "localhost"),
  locationid = process.env.RESIN_LOCATION_ID || "home",
  IopaApp = require('./src/iopa-slim').App,
  IopaDevice = require('./src/iopa-device'),
  ZwaveBinding = require('./src').Server,
  ZWAVE = ZwaveBinding.ZWAVE,

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
      app.use(IopaDevice, {drivers:  __dirname + '/drivers'});

      var options = { locationid: locationid, platformid: platformid };
      var server = app.createServer("zwave:", options);

      server.listen(port.comName)
        .then(() => {
          console.log(util.inspect(server.db, false, 100));

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
  return ((port.vendorId == '0x0658' &&
    port.productId == '0x0200') ||  // Aeotech Z-Stick Gen-5
    (port.vendorId == '0x0658' &&
      port.productId == '0x0280') ||  // UZB1
    (port.vendorId == '0x10c4' &&
      port.productId == '0xea60'));   // Aeotech Z-Stick S2
}

