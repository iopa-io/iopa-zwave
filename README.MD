# [![IOPA](http://iopa.io/iopa.png)](http://iopa.io)<br> IOPA-ZWAVE

## About
Zero dependency, code-generated from raw protocol, lightning fast Zwave Packet Parser and Formatter in native Javascript for Node.

## Motivation

There are great projects like Open-ZWave and the Z-Wave plugin for OpenHAB that have developed a solid understanding of the Z-Wave protocol over the years, often by reverse engineering. Due to this evolution, the implementations have been hand-coded, sometimes with business logic embedded within the protocol formatting.  

New zwave products often require changes (e.g., when Homeseer introduced light switches that have instant status update, launched after the expiration of a relevant patent, many existing implementations didnt support this feature as Central Scenes are less common).

In recent months, the standard has been published in the public domain, allowing for a more complete and automated protocol formatting.

Further, the best existing libraries rely on compiled code or Java VMs which are hard to configure and access from NodeJS on a variety of ARM devices like the Raspberry Pi.  For a Node.JS implemnentation we really need all JS code for widest cross-platform support.

## This project

The protocol formatting of this library has zero dependencies and is auto generated into pure Javascript.   All command classes and commands are supported out of the box.

The serial protocol uses a simple node-serialport (which does has some native buffering for better threading), but can be replaced with Z/IP Gateway, MQTT or any standard Node stream of ZWAVE raw data.

## How to use

See the example `server.js` file and run it using a Aeotec Z-stick or similar.

Note the protocol itself is built using the build.js file and the files in the `config` folder.   It does not need to be rebuilt except when the zwave protocol changes.

## Status

* Work in process

## License

Apache-2.0
Copyright (c) 2017 The Internet of Protocols Alliance (IOPA)