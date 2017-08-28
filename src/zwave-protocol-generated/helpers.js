
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
* ZWAVE HELPER FUNCTIONS
*
* This file is included for the system generated components of IOPA Zwave (iopa-io/iopa-zwave)
* based on the Z-Wave Public Specification at Z-WavePublic/libzwaveip
* under the Apache License above.
* 
* Do not edit directly, but make a pull request for the src/protocol-generator/util folder
*
*/


module.exports.helpers = {
    lookupNameValue: function (byte, ENUM) {
        var result = { value: byte };
        if (byte in ENUM) {
            result.name = ENUM[byte];
        }
        return result;
    },
    lookupBitMaskValues: function (byte, ENUM) {
        var result = { value: byte };
        Object.keys(ENUM).forEach(function (key) {
            if (byte & parseInt(key)) result[ENUM[key]] = true;
        });
        return result;
    },
    getBitMaskValue: function (context, name, ENUM) {
        
        var value = context[name];

        if (isNaN(value)) {

            var result = 0;     

            Object.keys(value).forEach(function (item) {

                if (!context[item] !== true) return;  // ignore false, null etc.

                if (item in ENUM)
                    result = result & ENUM[item];

                var namelc = item.toLowerCase();

                for (var key in ENUM) {
                    if (key.toLowerCase() == namelc) {
                        result = result & ENUM[key];
                    }
                }
            })

            return result;
        }
        else
            return value;

    },
    getValue: function (context, name, ENUM) {
        // convert {name: value: } or "" or nn to number
        var value = context[name];

        if (typeof value == 'object') {
            if ('value' in value)
                return value.value;

            if ('name' in value) {
                if (value.name in ENUM)
                    return ENUM[value.name];

                var name = value.name.toLowerCase();

                for (var key in ENUM) {
                    if (key.toLowerCase() == name) {
                        return ENUM[key];
                    }
                }
            }
            throw new Error("ENUM conversion of " + name + ": not a recognized {name, value} object");
        } else if (typeof value === 'string' || value instanceof String) {
            if (/^[0-9.,]+$/.test(value))
                return new Number(value);

            if (value in ENUM)
                return ENUM[value];

            var namelc = value.toLowerCase();

            for (var key in ENUM) {
                if (key.toLowerCase() == namelc) {
                    return ENUM[key];
                }
            }

            throw new Error("ENUM conversion of " + name + ": " + value + " not a recognized value");
        } else {
            if (/^[0-9.,]+$/.test(value))
                return new Number(value);

            throw new Error("ENUM conversion of " + name + ": not a recognized value type");
        }
    },
    lookupNameValueArray: function (buffer, ENUM) {
        if (!buffer) return null;

        var result = { values: [], names: [] }
        for (var i = 0; i < buffer.length; i++) {
            var byte = buffer[i];
            result.values.push(byte);

            if (byte in ENUM)
                result.names.push(ENUM[byte]);
            else
                result.names.push('unknown-' + byte.toString());

        }
        return result;
    },
    getValueArray: function (context, name, ENUM) {
        var value = context[name];

        if (typeof value == 'object') {
            if ('values' in value) {
                if (Array.isArray(value.values))
                    return Buffer.from(value);

                throw new Error("ENUM conversion of " + name + ": values must be an array");
            }

            if ('names' in value) {
                var results = [];

                if (!Array.isArray(value.names))
                    throw new Error("ENUM conversion of " + name + ": names must be an array");

                value.names.forEach(function (item) {
                    if (item in ENUM)
                        results.push(ENUM[value.name]);

                    var namelc = value.name.toLowerCase();

                    for (var key in ENUM) {
                        if (key.toLowerCase() == namelc) {
                            results.push(ENUM[key]);
                            break;
                        }
                    }

                })

                if (results.length !== value.names.length)
                    throw new Error("ENUM conversion of " + name + ": one or more invalid values");

                return Buffer.from(results);

            }
            throw new Error("ENUM conversion of " + name + ": not a recognized {names, values} object");
        } else if (Buffer.isBuffer(value)) {

            return value;
        } else if (Array.isArray(value)) {
            if (/^[0-9.,]+$/.test(value[0]))
                return Buffer.from(value);

            var results = [];

            value.forEach(function (item) {
                if (item in ENUM)
                    return results.push(ENUM[value]);

                var namelc = value.toLowerCase();

                for (var key in ENUM) {
                    if (key.toLowerCase() == namelc) {
                        results.push(ENUM[key]);
                        break;
                    }
                }

            })

            if (results.length !== value.names.length)
                throw new Error("ENUM conversion of " + name + ": one or more invalid values");

            return Buffer.from(results);

        }
        throw new Error("ENUM conversion of " + name + ": not a recognized value type");

    }, setNameFlags: function (context, bitmaskarray, ENUM) {

        bitmaskarray.forEach(function (i) {
            if (i in ENUM) {
                context[ENUM[i]] = true;
            } else {
                context["BIT" + i] = true;
            }
        })

    },
    getFlagArray: function (context, ENUM) {
        var results = [];

        Object.keys(context).forEach(function (item) {

            if (!context[item] !== true) return;  // ignore false, null etc.

            if (item in ENUM)
                return results.push(ENUM[value]);

            var namelc = item.toLowerCase();

            for (var key in ENUM) {
                if (key.toLowerCase() == namelc) {
                    return results.push(ENUM[key]);
                }
            }

            if (/^BIT[0-9]+$/.test(item))
                results.push(parseInt(item.substr(item, 3)));
        })

        return results;
    },
    updateFLOATINGSizePrecision: function (context, name, precisionfield, sizefield) {
        var value = context[name];
        var result = getFLOATINGSizePrecision(value);
        context[precisionfield] = result.precision;
        context[sizefield] = result.size;
    },
    getFLOATINGSizePrecision: function (value) {

        // remove trailing zeros and represent as JS float;
        value = parseFloat(value.toString());

        var precision = decimalPlaces(value);
        var unscaled = _unscale(value, precision);

        while (precision > 0 && (unscaled < MIN_INT32 || unscaled > MAX_INT32)) {
            precision--;
            unscaled = _unscale(value, precision);
        }

        if ((unscaled < MIN_INT32) || (unscaled > -MAX_INT32)) throw new RangeError("Value outside of 32 bit range");

        var size = 4;

        if ((unscaled >= -0x80) && unscaled < 0x80)
            size = 1;

        if ((unscaled >= -0x8000) && unscaled < 0x8000)
            size = 2;

        var scaled = unscaled / Math.pow(10, precision);

        return { value: scaled, size: size, precision: precision, unscaled: unscaled };
    }

}

function _decimalPlaces(num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}

function _unscale(num, precision) {
    return Math.round(num * Math.pow(10, precision));
}

const MAX_INT32 = 0x7FFFFFFF;
const MIN_INT32 = -0x80000000;