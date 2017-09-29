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
    Transform = require('stream').Transform,
    ZWAVE = require('./zwave-constants'),
    BufferStream = ZWAVE.PROTOCOL.util.BufferStream

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Zwave Transport Stream Parser
 * 
 * Node Stream Transform Function that is used as a parser for Zwave Serial or Network Streams
 * 
 * It reads the underlying stream event chunks, inspect for frame boundaries,
 * and passes on complete Zwave frames as each frame boundary is reached
 * 
 * @class ZwaveTransportStreamParser
 * @constructor
 * @implements Node.js Stream Transform Interface
 * @public 
 */
function ZwaveTransportStreamParser() {
    _classCallCheck(this, ZwaveTransportStreamParser);
    Transform.call(this);
    this.bufferStream = BufferStream.alloc("TransportStreamParserInit");
    this.writePosition = 0;
    this.startOffset = 0;
}

util.inherits(ZwaveTransportStreamParser, Transform);

ZwaveTransportStreamParser.prototype._transform = function (chunk, encoding, cb) {

    chunk.copy(this.bufferStream.buffer, this.writePosition);   
    
    this.writePosition += chunk.length;   
    var nextByte;
    var loop = true;

    while (loop) {
        nextByte = this.bufferStream.buffer[this.startOffset];
        loop = false;
        switch (nextByte) {
            case ZWAVE.SERIAL.SerialFrameType.ACK:
            case ZWAVE.SERIAL.SerialFrameType.CAN:
            case ZWAVE.SERIAL.SerialFrameType.NAK:
                this.push(this.bufferStream.buffer.slice(this.startOffset, this.startOffset + 1));
                this.startOffset += 1;
                loop = (this.writePosition > this.startOffset);
                break;
            case ZWAVE.SERIAL.SerialFrameType.SOF:
                var dataLength = this.writePosition - this.startOffset;
                if ((dataLength) >= 5) {
                    nextByte = this.bufferStream.buffer[this.startOffset + 1];
                    if (nextByte < 4 || nextByte > 64) {
                        console.error("Frame length is out of limits (%d)", nextByte);
                        break;
                    }
                    var messageLength = (nextByte & 0xff) + 2;

                    if (dataLength >= messageLength) {
                       var nextBuffer = BufferStream.allocFrom(this.bufferStream.buffer.slice(this.startOffset + messageLength), "INBOUND");
                        this.push(this.bufferStream.buffer.slice(this.startOffset, this.startOffset + messageLength));
                        this.bufferStream = nextBuffer;
                        this.writePosition = dataLength - messageLength;
                        this.startOffset = 0;
                        loop = (this.writePosition > this.startOffset);           
                    }
                }
                break;
            default:
                console.error("Invalid start of frame (%d)", nextByte);
                this.startOffset = 0;
                this.writePosition = 0;
        }
    }
    cb();
}

ZwaveTransportStreamParser.prototype._flush = function (cb) {
    this.push(this.bufferStream.slice(this.startOffset));
    this.buffer = BufferStream.alloc();
    this.writePosition = 0;
    this.startOffset = 0;
    cb();
}

module.exports = ZwaveTransportStreamParser;