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

/*
 * ZWAVE PROTOCOL
 *
 * This file is included for the system generated components of IOPA Zwave (iopa-io/iopa-zwave)
 * based on the Z-Wave Public Specification at Z-WavePublic/libzwaveip
 * under the Apache License above.
 * 
 * Do not edit directly, but make a pull request for the src/protocol-generator/util folder
 *
 */

const protocolConstants = require('./protocol-constants.js');
const protocolSerial = require('./protocol-serial.js');
const protocol = require('./protocol.js');
const BufferStreamFactory = require('./bufferstream.js').BufferStreamFactory;

var ZWAVE = {
    constants: protocolConstants.ZWAVE,
    COMMAND_CLASS: protocol.COMMAND_CLASS,
    SERIAL_API_FUNC: protocolSerial.SERIAL_API.SERIAL_API_FUNC,
    ENUM: Object.assign(protocol.ENUM, protocolSerial.ENUM),
    BASIC_DEVICE_CLASS: protocolConstants.BASIC_DEVICE_CLASS,
    GENERIC_DEVICE_CLASS: protocolConstants.GENERIC_DEVICE_CLASS,
    util: {
        helpers: require('./helpers.js').helpers,
        BufferStream : new BufferStreamFactory()
    }
}

ZWAVE.SERIAL_API_FUNC.enum = protocolSerial.SERIAL_API.enum[0x01].command;

module.exports = ZWAVE;
