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


var fs = require('fs'),
    xml2js = require('xml2js'),
    util = require('util');

var parser = new xml2js.Parser({
    attrNameProcessors: [processAttr],
    tagNameProcessors: [processTag],
    attrValueProcessors: [parseNumbers, parseBooleans],
    parseNumbers: true,
    parseBooleans: true
});

module.exports = function (filename, callback) {
    fs.readFile(filename, function (err, data) {
        parser.parseString(data, function (err, result) {

            var context = {};
            var zwave = result[Object.keys(result)[0]];
            var category = Object.keys(zwave);

            category.forEach(function (category) {
                var items = zwave[category];
                context[category] =  processArray(items, true);
            })

            callback(context);
        });
    });
}


function processAttr(name) {
    return ({
    }[name]) || name;
}

function processTag(name) {
    return ({
        "bas_dev": "BASIC_DEVICE_CLASS",
        "gen_dev": "GENERIC_DEVICE_CLASS",
        "spec_dev": "SPECIFIC_DEVICE_CLASS",
        "cmd_class": "COMMAND_CLASS"
    }[name]) || name;
}

function parseNumbers(str) {

    if (str.substr(0, 2) == "0x")
        return parseInt(str, 16);

    if (str == "")
        return str;

    if (!isNaN(str)) {
        str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
    }

    return str;
};

function parseBooleans(str) {
    if (/^(?:true|false)$/i.test(str)) {
        str = str.toLowerCase() === 'true';
    }
    return str;
};

function processArray(items) {

    var res = {};
    var seq = 0;

    items.forEach(function (item) {
        var keyvalue = processItem(item);
        if (keyvalue.key == '$$$') {
            if (seq == 0 && Object.keys(res).length == 0) {
                res = [];
                seq++;
                res.push(keyvalue.value);
            } else if (seq > 0) {
                seq++;
                res.push(keyvalue.value);
            } else {
                console.log("ERRROR WITH MIXED ARRAYS AND OBJECTS");
                console.log(item);
            }
        } else if (keyvalue.key !== '$$') {
            res[keyvalue.key] = keyvalue.value;
            // no need to have key as child of objectvalue as well as the objectkey
            delete res[keyvalue.key].key;
        }
        else if (items.length > 1)
            // no key known but almost certainly an fieldenum since an array, so just use "fieldenum" as key
            if (keyvalue.value.value) {
                res.fieldenum = res.fieldenum || [];

                res.fieldenum.push(keyvalue.value.value);
            } else {
                // unknown so ignore and send to console.
                console.log("Missing key for following item:")
                console.log(item);
            }
        else
            // no key known but single item so promote to parent which already has a key for which we are child
            res = keyvalue.value;
    })

    // if we are just an enum with no other fields, then promote to parent
    if (res.fieldenum && Object.keys(res).length == 1)
        return res.fieldenum;

    return res;
}

function processItem(item) {
    var value = {};
    var result = { key: null, value: value };

    Object.keys(item).forEach(function (partkey) {

        var part = item[partkey];

        if (partkey == '$') {
            Object.keys(part).forEach(function (partchildkey) {
                value[partchildkey] = part[partchildkey];
            });

            if (part.key == undefined)
                result.key = '$$';
            else {
                if (part.version) {
                    if (part.key >= 0 && part.key <= 255) {
                        result.key = toHex8(part.key) + "-V" + part.version;
                        value.id = part.key;
                    }
                    else {
                        value.id = part.key;
                        result.key = part.key + "-V" + part.version;
                    }
                }  else  if ('flagmask' in part) {
                        result.key = toHex8(part.key) + "-F" + part.flagmask;
                        value.id = part.key;
                }  else {
                    if (!('key' in part))
                        console.log(part);
                    result.key = part.key;
                }
                // delete value.key;
            }

            if ('name' in result.value && Object.keys(value).length == 1)
                result.value = value.name;

        }
        else {
            value[partkey] = processArray(part);
        }
    });

    if (result.key == null) {
        result.key = '$$$';
    }

    return result;
}

function toHex8(b) {
    return "0x" + ("00" + (+b).toString(16)).slice(-2);
}