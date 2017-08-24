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
 * SMART BUFFER STREAM FACTORY
 *
 * This file is included for the system generated components of IOPA Zwave (iopa-io/iopa-zwave)
 * and contains additional helper functions for reading and writing to Zwave frames
 * based on the Z-Wave Public Specification at Z-WavePublic/libzwaveip
 * under the Apache License above.
 * 
 * Do not edit directly, but make a pull request for the src/protocol-generator/util folder
 *
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Represents BufferStream Factory that caches 20 buffers to reduce memory churn and to avoid
 * running out of Node buffer pool
 *
 * @instance Factory
 * @method alloc()  get new BufferStream from pool or by creation if none available;
 * @method payload.dispose()   return BufferStream to the pool for reuse
 */
function BufferStreamFactory(poolSize) {
    _classCallCheck(this, BufferStreamFactory);

    poolSize = poolSize || 10;
    this.ITEMS = {};

    this._factory = new FreeList('BufferStream', poolSize, function () { return BufferStream.apply(Object.create(BufferStream.prototype)); });
}

//STATIC PROPERTIES, publish as public so additional prototype methods can be added

BufferStreamFactory.Context = BufferStream;

//PUBLIC METHODS 

/**
 * Creates a new Buffer Stream
 *
 * @method alloc
 *
 * @param options object 
 * @returns BufferStream
 * @public
 */
BufferStreamFactory.prototype.alloc = function (name) {

    var context = this._factory.alloc().init();
    
    context.dispose = this._dispose.bind(this, context);
    return context;
};

/**
 * Creates a new Buffer Stream
 *
 * @method alloc
 *
 * @param options object 
 * @returns BufferStream
 * @public
 */
BufferStreamFactory.prototype.allocFrom = function (buffer, name) {

    var context = this._factory.alloc().init();
 
    context.dispose = this._dispose.bind(this, context);
    buffer.copy(context.buffer, 0);
    return context;
};

/**
 * Creates a Buffer Stream from buffer, without using pool
 *
 * @method create
 *
 * @param options object 
 * @returns BufferStream
 * @public
 */
BufferStreamFactory.prototype.from = function (buffer) {
    return BufferStream.from(buffer);
};

/**
 * Release the memory used by a given BufferStream
 *
 * @method _dispose
 *
 * @param context object  the context to free 
 * @private
 */
BufferStreamFactory.prototype._dispose = function (context) {
    this._factory.free(context);
};

module.exports.BufferStreamFactory = BufferStreamFactory;


/**
 * Represents a Smart Payload Stream
 *
 * @class BufferStream
 * @constructor
 */
function BufferStream(bufferSize) {
    bufferSize = bufferSize || 70;  // max size of Zwave frame = 64, allow extra for ACK etc.

    this.buffer = Buffer.alloc(bufferSize);

    return this;
}

BufferStream.from = function (buffer) {
    if (buffer instanceof BufferStream) return buffer;
    var context = Object.create(BufferStream.prototype);
    context.buffer = buffer;
    context.dispose = function () { };
    context.readPosition = 0;
    context.writePosition = buffer.length;
    this.seq = 0;
    return context;
}

BufferStream.prototype.init = function () {
    this.readPosition = 0;
    this.writePosition = 0;
    this.seq = _nextSequence();
    return this;
}

Object.defineProperty(BufferStream.prototype, "length", {
    get: function () { return this.writePosition; },
    enumerable: true,
    configurable: true
})

BufferStream.prototype._incrementReadPosition = function (count) {
    this.readPosition += count;
};

BufferStream.prototype._incrementWritePosition = function (count) {
    this.writePosition += count;
};

BufferStream.prototype.reset = function () {
    this.readPosition = 0;
    this.writePosition = 0;
};

BufferStream.prototype.asBuffer = function () {
    var result = this.buffer.slice(0, this.writePosition);
    result.dispose = this.dispose.bind(this);
    result.asBufferStream = this.asBufferStream.bind(this);
    return result;
}

BufferStream.prototype.asRawBuffer = function () {
    return this.buffer.slice(0, this.writePosition);
}

BufferStream.prototype.asBufferStream = function () {
    return this;
}

BufferStream.prototype.resetFrom = function (bytes) {
    var length = bytes.length;
    this.writePosition = bytes.length;
    this.readPosition = 0;
    bytes.copy(this.buffer, 0);
}

BufferStream.prototype.slice = function (start, end) {
    return BufferStream.from(this.buffer.slice(start, end));
}

BufferStream.prototype.sliceAsBuffer = function (start, end) {
    var result = this.buffer.slice(start, end);
    result.dispose = this.dispose.bind(this);
    result.asBufferStream = this.asBufferStream.bind(this);
    return result;
}

BufferStream.prototype.at = function (offset) {
    return this.buffer[offset];
}

// BASE METHODS

BufferStream.prototype.readBYTE = function () {
    if (this.insufficientBytes(1)) return null;
    var value = this.buffer.readUInt8(this.readPosition);
    this.readPosition += 1;
    return value;
};

BufferStream.prototype.readWORD = function () {
    if (this.insufficientBytes(2)) return null;
    var value = this.buffer.readUInt16LE(this.readPosition);
    this.readPosition += 2;
    return value;
};

BufferStream.prototype.readBIT_24 = function () {
    if (this.insufficientBytes(3)) return null;
    var value = this.buffer.readUInt8(this.readPosition + 1) << 16
        | this.buffer.readUInt8(this.readPosition + 2) << 8
        | this.buffer.readUInt8(this.readPosition + 3) << 0;
    this.readPosition += 3;
    return value;
};

BufferStream.prototype.readDWORD = function () {
    if (this.insufficientBytes(4)) return null;
    var value = his.buffer.readUInt32LE(this.readPosition);
    this.readPosition += 4;
    return value;
};

BufferStream.prototype.readFLOATING = function (options) {
    var size = options.size || 1;
    var precision = options.precision || 0;

    var value;

    switch (size) {
        case 1:
            if (this.insufficientBytes(1)) return null;
            value = this.buffer.readInt8(this.readPosition);
            this.readPosition += 1;
            break;
        case 2:
            if (this.insufficientBytes(2)) return null;
            value = this.buffer.readInt16BE(this.readPosition);
            this.readPosition += 2;
            break;
        case 4:
            if (this.insufficientBytes(4)) return null;
            value = this.buffer.readInt32BE(this.readPosition);
            this.readPosition += 4;
            break;
        default:
            return null;
    }

    if (precision > 0)
        return value / Math.pow(10, precision);

    else
        return value;

}

BufferStream.prototype.writeARRAY = function (bytes) {
    var length = bytes.length;
    this._expandBufferIfNeeded(length);
    for (var i = 0; i < length; i++) {
        this.buffer.writeUInt8(bytes[i], i);
    };
    this.writePosition += length;
    return this;
};


BufferStream.prototype.writeFLOATING = function (value, options) {
    var size = new Number(options.size || 1);
    var precision = new Number(precision || 0);
    if (precision % 1 !== 0) throw new RangeError("precision must be an integer");
    var unscaled = Math.round(num * Math.pow(10, precision));

    switch (size) {
        case 1:
            this._expandBufferIfNeeded(1);
            this.buffer.writeInt8(unscaled, this.writePosition);
            this.writePosition += 1;
            break;
        case 2:
            this._expandBufferIfNeeded(2);
            value = this.buffer.writeInt16BE(unscaled, this.writePosition);
            this.writePosition += 2;
            break;
        case 4:
            this._expandBufferIfNeeded(4);
            value = this.buffer.writeInt32BE(unscaled, this.writePosition);
            this.writePosition += 4;
            break;
        default:
            throw new RangeError("invalid size");
    }

}

BufferStream.prototype.readSTRING = function (options) {
    return this.readBUFFER(options).toString(options.encoding || "UTF-8").replace(/\0/g, '');
};


BufferStream.prototype.readBUFFER = function (options) {
    var length;

    if (options.length && options.length > 0) {
        length = Math.min(options.length, this.buffer.length - this.readPosition)
    } else {
        length = this.buffer.length - this.readPosition;
    }

    if (length == 0) return null;

    var result = this.buffer.slice(this.readPosition, this.readPosition + length);
    this.readPosition += length;
    return result;
}

BufferStream.prototype.readBUFFERtoMARKER = function (options) {
    if (this.insufficientBytes(1)) return null;

    var marker = options.marker;
    if (!Array.isArray(marker)) marker = [marker];

    var results = [];
    var start = this.readPosition;

    for (this.readPosition < this.buffer.length; this.readPosition++;) {
        var node = this.buffer.readUInt8(this.readPosition);
        var found = false;
        if (node == marker[0]) {
            if (marker.length > 1) {
                var peek = this.buffer.readUInt8(this.readPosition + 1);
                if (peek !== marker[1])
                    console.warning("first marker byte found, not second, continuing");
                else {
                    found = true;
                    break;
                }
            }
        }
        results.push(node);
    }

    if (found) {
        return Buffer.from(results);
    }

    this.readPosition = start;
    return null;
}

BufferStream.prototype.readSTRINGtoMARKER = function (options) {

    var bytes = this.readBUFFERtoMARKER(options);

    if (bytes !== null)
        return bytes.toString(options.encoding || "UTF-8");

    return null;
}

BufferStream.prototype.readBITMASK = function (options) {

    var result = [], length, byte;

    if (options.length) {
        length = Math.min(options.length, this.buffer.length - this.readPosition)
    } else {
        length = this.buffer.length - this.readPosition;
    }

    var maxFlag = (length * 8) - 1;

    for (var index = 0; index < length; ++index) {
        if (this.insufficientBytes(1)) return result;
        byte = this.buffer.readUInt8(this.readPosition);
        this.readPosition += 1;

        for (var bit = 0; bit < 8; ++bit) {
            var bitBig = bit + (8 * index) + 1;
            if (!((byte & (1 << bit)) == 0)) {
                result.push(bitBig.toString());
            }
            if (bitBig >= maxFlag)
                return result;
        }
    }

    return result;
}

BufferStream.prototype.writeBYTE = function (uint) {
    this._expandBufferIfNeeded(1);
    this.buffer.writeUInt8(uint, this.writePosition);
    this.writePosition += 1;
    return this;
};

BufferStream.prototype.writeWORD = function (uint) {
    this._expandBufferIfNeeded(2);
    this.buffer.writeUInt16LE(uint, this.writePosition);
    this.writePosition += 2;
    return this;
};

BufferStream.prototype.writeINT_24 = function (uint) {
    this._expandBufferIfNeeded(3);
    this.buffer.writeUInt8((uint & 0xff0000) >>> 16, this.writePosition);
    this.buffer.writeUInt8((uint & 0x00ff00) >>> 8, this.writePosition + 1);
    this.buffer.writeUInt8((uint & 0x0000ff) >>> 0, this.writePosition + 2);
    this.writePosition += 3;
    return this;
};

BufferStream.prototype.writeDWORD = function (uint) {
    this._expandBufferIfNeeded(4);
    this.buffer.writeUInt32LE(uint, this.writePosition);
    this.writePosition += 4;
    return this;
};

BufferStream.prototype.writeBUFFER = function (bytes, options) {
    var length = options.length || bytes.length;
    this._expandBufferIfNeeded(length);


    for (var i = 0; i < length; i++) {
        this.buffer.writeUInt8(bytes[i], i);
    };

    this.writePosition += length;
    return this;
};

BufferStream.prototype.writeSTRING = function (str, options) {
    var encoding = options.encoding || "UTF-8";
    var bytes = new Buffer(length);
    return this.writeBUFFER(bytes, options);
};

BufferStream.prototype.writeBUFFERtoMARKER = function (bytes, options) {
    this._expandBufferIfNeeded(bytes.length);
    var marker = options.marker;
    if (!Array.isArray(marker)) marker = [marker];

    bytes.copy(this.buffer, this.writePosition);
    this.writePosition += bytes.length;

    Buffer.from(marker).copy(this.buffer, this.writePosition);
    this.writePosition += marker.length;

    return this;
}

BufferStream.prototype.writeSTRINGtoMARKER = function (str, options) {
    this._expandBufferIfNeeded(str.length);
    var marker = options.marker;
    if (!Array.isArray(marker)) marker = [marker];

    var encoding = options.encoding || "UTF-8";
    var bytes = new Buffer(str, encoding);

    return this.writeBUFFERtoMARKER(bytes, options);
}

BufferStream.prototype.writeBITMASK = function (flagArray, options) {

    var result = [], maxFlag, length = options.length || 0;
    contextArray = flagArray.sort();

    if (length >= 1)
        maxFlag = (length * 8) - 1
    else {
        maxFlag = contextArray[contextArray.length - 1];

        if (maxFlag == 255)
            maxFlag = contextArray[contextArray.length - 2];

        length = Math.floor((maxFlag / 8)) + 1;
    }

    var byte;
    for (var index = 0; index < length; ++index) {
        this._expandBufferIfNeeded(1);
        byte = 0;
        for (var bit = 0; bit < 8; ++bit) {
            var bitBig = bit + (8 * index) + 1;
            if ((contextArray.indexOf[bitBig] > -1) || ((contextArray.indexOf[bitBig.toString()] > -1))) {
                byte = byte | (1 << bit);
            }
        }

        this.buffer.writeUInt8(byte, this.writePosition++);
        if (bitBig >= maxFlag)
            return this;
    }
    return this;
}

// HELPER METHODS

BufferStream.prototype.insufficientBytes = function (bytesToRead) {
    var remaining = (this.buffer.length - this.readPosition);
    return (remaining < bytesToRead);
}

BufferStream.prototype._expandBufferIfNeeded = function (additionalBytes) {
    var remaining = (this.buffer.length - this.writePosition);
    if (remaining >= additionalBytes) {
        return;
    }
    var missingBytes = additionalBytes - remaining;
    var expandedBuffer = new Buffer(this.buffer.length + missingBytes);
    this.buffer.copy(expandedBuffer, 0, 0, this.buffer.length);
    this.buffer = expandedBuffer;
};

const maxSequence = Math.pow(2, 16);
var _lastSequence = Math.floor(Math.random() * (maxSequence - 1));

function _nextSequence() {
    if (++_lastSequence === maxSequence)
        _lastSequence = 1;

    return _lastSequence.toString();
};

module.exports.BufferStream = BufferStream;

/**
 * Node 0.12.x - 4.0.x Freelist module
 * 
 * Included without functional changes
 * just license notice added
 * 
 * Simple function but has now been deprecated in Node.js but including here
 * 
 * This license applies to the FreeList code section below only 
 */


/**
 * Copyright Node.js contributors. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

// This is a free list to avoid creating so many of the same object.
function FreeList(name, max, constructor) {
    this.name = name;
    this.constructor = constructor;
    this.max = max;
    this.list = [];
};


FreeList.prototype.alloc = function () {
    return this.list.length ? this.list.shift() :
        this.constructor.apply(this, arguments);
};


FreeList.prototype.free = function (obj) {
    if (this.list.length < this.max) {
        this.list.push(obj);
        return true;
    }
    return false;
};