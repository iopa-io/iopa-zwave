const util = require('util'),
  SerialPort = require('serialport'),
  ZwaveTest = require('./src/index').SERVER,
  platformid = "urn:io.resin:" + (process.env.RESIN_DEVICE_UUID || "localhost"),
  locationid = process.env.RESIN_LOCATION_ID || "home",
  zwave = new ZwaveTest({ locationid: locationid, platformid: platformid, eventSink: eventSink });

process.removeAllListeners('SIGINT');

process.on('SIGINT', function () {
  console.log('disconnecting...');
  zwave.disconnect();

});

function eventSink() {
  console.log(arguments);
}

findZwavePort(function (error, port) {
  if (!error) {
    console.log("Connecting to " + port.comName)
    zwave.listen(port.comName);
  }
});

function isZwavePort(port) {
  return ((port.vendorId == '0x0658' &&
    port.productId == '0x0200') ||  // Aeotech Z-Stick Gen-5
    (port.vendorId == '0x0658' &&
      port.productId == '0x0280') ||  // UZB1
    (port.vendorId == '0x10c4' &&
      port.productId == '0xea60'));   // Aeotech Z-Stick S2
}

function findZwavePort(callback) {
  SerialPort.list(function listPortsCallback(error, ports) {
    if (error) {
      console.error(error);
      callback(error);
    }

    for (var port of ports) {
      if (isZwavePort(port)) {
        callback(null, port);
        return;
      }
    }
    callback('No Zwave port found');
  });
}