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
'use strict';

var util = require('util'),
    fs = require('fs');


const constants = require('./formatter-constants'),
    COPYRIGHT = constants.COPYRIGHT,
    SYSTEM_GENERATED_HEADER = constants.SYSTEM_GENERATED_HEADER;

module.exports = function (context, configdir, callback) {
    Object.keys(context).forEach(function (categoryKey) {
        processClass(context[categoryKey], context, categoryKey);
    })

    console.log("normalizer processed: \r\n" + util.inspect(MONITOR));

    writeRaw(context, configdir, callback);

}

function writeRaw(context, configdir, callback) {
    fs.writeFile(configdir + '/converted_zwave_custom_cmd_classes.json', JSON.stringify(context, null, '\t'));
    fs.writeFile(configdir + '/converted_zwave_custom_cmd_classes.js',
        COPYRIGHT + SYSTEM_GENERATED_HEADER + "module.exports = " + util.inspect(context, false, 100),
        callback.bind(null, context)
    );
}

var MONITOR_ATTRIBUTES = ['type', 'encaptype']
var MONITOR = {};
var EXAMPLES = [];

function processClass(context, parent, key) {

    Object.keys(context).forEach(function (itemId) {
        processItem(context[itemId], 1, context, {});
    })

    // SORT OBJECT FOR CLEANLINESS WHEN PRINTING

    var sortedContext = {};
    Object.keys(context)
        .sort()
        .forEach(function (item) {
            sortedContext[item] = context[item];
        })
    context = sortedContext;
    parent[key] = context;
}

function processItem(context, level, parent, grandparent) {
    if (Array.isArray(context)) {
        context.forEach(function (item) { processItem(item, level + 1, context, parent) });
        return;
    }

    if (typeof context !== 'object')
        return;


    Object.keys(context).forEach(function (key) {
        processItem(context[key], level + 1, context, parent);
    })

    removeAttributes(context, ['read_only', 'hasdefines', 'signed', 'variantKey']);  // hasdefines inferred from bitflag present

    removeBlankAttributes(context, ['comment']);

    renameTags(context, { cmd: "COMMAND" });

    if (level == 3 && ('name' in grandparent)) {
        removeParentPrefixes(context, grandparent, 'COMMAND_CLASS_', ['name']);
    }
    normalizeNameFields(context, grandparent, ['name', 'fieldname', 'flagname']);


    if (level > 1) {
        promoteArray(context, ['multi_array'], 'paramdescloc');
        mergeVariantGroups(context, 'variant_group', 'param');

        removeZwaveAndCmdPrefix(context, ['name']);
        normalizeNameFields(context, grandparent, ['name', 'fieldname', 'flagname']);
        normalizeArrayFields(context, ['fieldenum']);
        convertSingleValueToMap(context, ['fieldenum']);
        convertArrayToMap(context, ['fieldenum']);
        promoteFirstChild(context, ['valueattrib', 'word', 'bitmask', 'bit_24', 'dword', 'arrayattrib']);
        promoteChild(context, ['variant']);
        removeTypehashCode(context);
        formatEnums(context, ['enum'], null, 'name');
        formatEnums(context, ['const', 'bitflag'], 'flagmask', 'flagname');
        promoteAttributeToReplaceKey(context, ['bitfield'], 'fieldmask');
        fixLengthMaskShifter(context);
    }

    if (level > 3 && !context.COMMAND) {
        removeUnderScore(context, ['name', 'fieldname', 'flagname']);
        removeCaps(context, ['name', 'fieldname', 'flagname']);
    }

    if (level > 3) {
        fixParamTypeBITMASKBitFlags(context, 'BITMASK');
        fixParamTypeBYTECONSTBitFlags(context, ['BYTE', 'ENUM']);
        fixParamTypeMULTI_ARRAY(context, 'MULTI_ARRAY');
        fixParamTypeVARIANT(context, 'VARIANT');
    }

    // always last
    monitorAttributes(context, MONITOR_ATTRIBUTES);
}

function removeTypehashCode(context) {
    if ('typehashcode' in context) {

        var hash = context.typehashcode + (context.type || "undefined");
        if (!context.type) {
            if (context.typehashcode == 13)
                context.type = "VARIANT_GROUP";
            else {
                console.log("Missing Type for TypeHashCode " + context.typehashcode);
                return;
            }


        }
        delete context.typehashcode;
    }
}

function removeAttributes(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context)
            delete context[attr];
    })
}


function monitorAttributes(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            MONITOR[attr] = MONITOR[attr] || [];
            if (MONITOR[attr].indexOf(context[attr]) == -1) {
                MONITOR[attr].push(context[attr]);

                if (attr == 'type')
                    EXAMPLES.push(context);
            }
        }
    })
}

function monitorParamNames(context) {
    Object.keys(context).forEach(function (key) {
        var commands = context[key].COMMAND || {};
        Object.keys(commands).forEach(function (cmd) {
            var command = commands[cmd];
            if (command.param)
                Object.keys(command.param).forEach(function (param) {
                    param = command.param[param];
                    MONITOR.param = MONITOR.param || [];
                    if (MONITOR.param.indexOf(param.name) == -1) {
                        MONITOR.param.push(param.name);

                    }
                });
        });
    })


}

function removeBlankAttributes(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context && context[attr].length == 0)
            delete context[attr];
    })
}

function removeZwaveAndCmdPrefix(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            if (context[attr].startsWith("Zwave"))
                context[attr] = context[attr].substr("Zwave".length);

            if (context[attr].startsWith("ZWAVE_"))
                context[attr] = context[attr].substr("ZWAVE_".length);

            if (context[attr].startsWith("Cmd"))
                context[attr] = context[attr].substr("Cmd".length);

            if (context[attr].startsWith("CMD_"))
                context[attr] = context[attr].substr("CMD_".length);

        }
    })
}


function removeParentPrefixes(context, parent, parentprefix, attributes) {

    var parentReducedPrefix = parent.name;
    if (parentReducedPrefix.startsWith(parentprefix))
        parentReducedPrefix = parentReducedPrefix.substr(parentprefix.length);
    else
        return;


    attributes.forEach(function (attr) {
        if (context[attr]) {
            if (context[attr].startsWith(parentReducedPrefix) && context[attr].length > parentReducedPrefix.length) {
                context[attr] = context[attr].substr(parentReducedPrefix.length);

                if (context[attr].charAt(0) == "_" || context[attr].charAt(0) == " ")
                    context[attr] = context[attr].substr(1);
            }

        }
    })
}


function normalizeNameEncaptype(name, encaptype) {

    if (encaptype == "")
        return name;

    switch (encaptype) {
        case 'NODE_NUMBER':
            return 'zwave.NodeId';
        case 'CMD_CLASS_REF':
            return 'zwave.CommandClass';
        case 'CMD_REF':
            return 'zwave.Command';
        case 'CMD_DATA':
            return 'zwave.Payload';
        case 'GEN_DEV_REF':
            return 'zwave.GenericDevice';
        case 'SPEC_DEV_REF':
            return 'zwave.SpecificDevice';
        case 'CMD_ENCAP':
            return 'zwave.EncapsulatedCommand';
        default:
            throw new Errror("Unknown Encaptype " + encaptype);
    }
}

function normalizeNameFields(context, grandparent, attributes) {

    attributes.forEach(function (attr) {
        if (attr in context) {
            context[attr] = normalizeName(context[attr]);


            if ('encaptype' in context) {
                var count = Object.keys(grandparent.param).filter((i) => (grandparent.param[i].encaptype == context.encaptype)).length
                if (count == 1 || context[attr] == 'SourceNodeId') {
                    context.alias = context[attr];
                    context[attr] = normalizeNameEncaptype(context[attr], context.encaptype);

                    if (context.encaptype == 'CMD_DATA' && context.variant.lenmask > 0) {
                        console.log(context);
                    }
                }

            }
        }
    })
}

function normalizeArrayFields(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context && Array.isArray(context[attr]))
            context[attr] = context[attr].map(normalizeName);
    })
}

function convertArrayToMap(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context && Array.isArray(context[attr]))
            context[attr] = context[attr].reduce(function (prev, t, i) { prev[i] = t; return prev; }, {});

    })
}

function convertSingleValueToMap(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context && !('type' in context) && !Array.isArray(context[attr])) {
            var result = {};
            Object.keys(context[attr]).forEach(function (key) {
                if (('value' in context[attr][key]) && (Object.keys(context[attr][key]).length == 1))
                    result[key] = context[attr][key].value;
            })
            if (Object.keys(result).length > 0)
                context[attr] = result;
        }
    })
}

function removeUnderScore(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context)
            context[attr] = parseCamelCaseUnderScore(context[attr]);
    })
}

function mergeVariantGroups(context, attrSource, attrTarget) {
    if (attrSource in context) {
        Object.keys(context[attrSource]).forEach(function (key, index) {
            if (key in context[attrTarget])
                throw new Error("Cannot merge same key " + key + context.name);

            if (context[attrSource][key].name.toLowerCase().indexOf('vg') == 0)
                context[attrSource][key].name = "VariableGroup" + (index == 0 ? "" : (index + 1).toString());

            context[attrTarget][key] = context[attrSource][key];
            delete context[attrSource];

        });

    }
}



function fixParamTypeBITMASKBitFlags(context, attribute) {
    if ("type" in context && context.type == attribute) {
        if ("bitflag" in context) {
            if (context.len == 1) {
                if ((Object.keys(context.bitflag)[(Object.keys(context.bitflag).length - 1)]) > 7) {
                    var newbitFlag = {};
                    var seq = 0;
                    Object.keys(context.bitflag).forEach(function (bitflagkey) {
                        newbitFlag[seq++] = context.bitflag[bitflagkey];
                    })
                    context.bitflag = newbitFlag;
                }
            }
        }
    }
}


// paramoffs="6"  sizemask="0xFF" sizeoffs="0" />
// paramoffs="0" lenmask="0x1F" lenoffs="0" />

function fixLengthMaskShifter(context) {

    if ('paramoffs' in context && 'sizemask' in context && 'sizeoffs' in context) {
        context.lengthoffset = context.paramoffs;
        context.lengthmask = context.sizemask;
        context.shifter = context.sizeoffs;
        delete context.paramoffs;
        delete context.sizemask;
        delete context.sizeoffs;
    }


    if ('paramOffs' in context && 'sizemask' in context && 'sizeoffs' in context) {
        context.lengthoffset = context.paramOffs;
        context.lengthmask = context.sizemask;
        context.shifter = context.sizeoffs;
        delete context.paramOffs;
        delete context.sizemask;
        delete context.sizeoffs;
    }

    if ('paramoffs' in context && 'lenmask' in context && 'lenoffs' in context) {
        context.lengthoffset = context.paramoffs;
        context.lengthmask = context.lenmask;
        context.shifter = context.lenoffs;
        delete context.paramoffs;
        delete context.lenmask;
        delete context.lenoffs;
    }
}

function fixParamTypeVARIANT(context, attribute) {
    if ("type" in context && context.type == attribute) {
        if (context.name == "BitMask") {
            context.type = "BITMASK";
        }

        if (!context.is_ascii && context.name.toLowerCase().indexOf("name") > -1)
            context.is_ascii = true;

        if (!context.showhex)
            delete context.showhex;
    }
}

function fixParamTypeMULTI_ARRAY(context, attribute) {

    var REF_OFF_BY_ONE = false;
    if ("type" in context && context.type == attribute) {
        if (context.name == "SpecificDeviceClass" || context.name == "zwave.SpecificDevice")
            if (context.multi_array[0].bitflag["17"] && context.multi_array[0].bitflag["17"].value == "SatelliteReceiverV2")
                if (context.multi_array[0].bitflag["17"].ref == 4)
                    REF_OFF_BY_ONE = true;
                else
                    console.log("SpecificDeviceClass fix no longer needed in normalizer-fixParamTypeMULTI_ARRAY");
            else
                console.log("SpecificDeviceClass fix not functional in normalizer-fixParamTypeMULTI_ARRAY");

        context.multi_array.forEach(function (array) {
            var bitflag = array.bitflag;
            var ref = bitflag[Object.keys(bitflag)[0]].ref;
            var compareref = ref;
            if (REF_OFF_BY_ONE) ref = Math.max(0, ref - 1);
            array.ref = ref;
            var result = {};
            Object.keys(bitflag).forEach(function (key) {
                result[key] = bitflag[key].value;
                if (bitflag[key].ref !== compareref) {
                    console.log(bitflag);
                    throw new Error("Bitflag refs not consistent in multiarray");
                }
            });
            array.bitflag = result;
        })
    }
}

function fixParamTypeBYTECONSTBitFlags(context, attributes) {
    attributes.forEach(function (attr) {
        if ("type" in context && context.type == attr) {
            if ("bitflag" in context) {
                context.type = "CONST";
                context.const = context.bitflag;
                delete context.bitflag;
            } else if ("enum" in context) {
                context.type = "CONST";
                context.const = context.enum;
                delete context.enum;
            }
        }
    });
}

function renameTags(context, tags) {
    Object.keys(tags).forEach(function (tag) {
        if (tag in context) {
            context[tags[tag]] = context[tag];
            delete context[tag]
        }
    })
}


function promoteArray(context, attributes, fixedTags) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            var arrayItem = context[attr];
            if (!Array.isArray(arrayItem)) {
                console.log("Tried to promote " + attr + " but not an array");
                console.log(context[attr]);
                return;
            }

            var newArray = [];

            arrayItem.forEach(function (source) {
                if (Object.keys(source).length !== 1) {
                    console.log("Tried to promote " + attr + " but elements are not single attribute objects");
                    console.log(source);
                    return;
                }

                var sourceKey = Object.keys(source)[0];
                var sourceValue = source[sourceKey];

                if (fixedTags.indexOf(sourceKey) > -1) {
                    if (sourceKey in context) {
                        console.log("Tried to promote " + attr + " but fixed element " + sourceKey + "  already in parent");
                        console.log(context);
                        //    return;
                    }
                    if (Object.keys(sourceValue).length !== 1) {
                        console.log("Tried to promote " + attr + " but child elements are not single attribute objects");
                        console.log(source);
                        return;
                    }

                    context[sourceKey] = sourceValue[Object.keys(sourceValue)[0]];
                } else {
                    newArray.push(source);
                }
            });

            context[attr] = newArray;
        }
    })
}


function promoteChild(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            if (Object.keys(context[attr]).length <= 1) {
                console.log("Tried to promote " + attr + " but zero or one child fields");
                console.log(context[attr]);
                return;
            }

            var source = context[attr];

            Object.keys(source).forEach(function (sourcekey) {
                if (sourcekey in context) {
                    console.log("Tried to promote " + attr + " but already exists on context");
                    console.log(source);
                    console.log(context);
                    return;
                }
                context[sourcekey] = source[sourcekey];
            })

            delete context[attr];
        }
    })
}

function promoteFirstChild(context, attributes) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            if (Object.keys(context[attr]).length > 1) {
                console.log("Tried to promote " + attr + " but more than one child");
                console.log(context[attr]);
                return;
            }

            var source = context[attr][Object.keys(context[attr])[0]];

            Object.keys(source).forEach(function (sourcekey) {
                if (sourcekey in context) {
                    console.log("Tried to promote " + attr + " but already exists on context");
                    console.log(source);
                    console.log(context);
                    return;
                }
                context[sourcekey] = source[sourcekey];
            })

            delete context[attr];
        }
    })
}

function formatEnums(context, attributes, enumAttribute, enumValue) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            var result = {};
            Object.keys(context[attr]).forEach(function (enumItemKey) {
                var enumItem = context[attr][enumItemKey];

                if (enumAttribute && !(enumAttribute in enumItem)) {
                    console.log("Tried to format enums for " + attr + " but missing " + enumAttribute);
                    console.log(enumItem);
                    console.log(context);
                    return;
                }

                if (!(enumValue in enumItem)) {
                    console.log("Tried to format enums for " + attr + " but missing " + enumValue);
                    console.log(source);
                    console.log(context);
                    return;
                }

                if (!context.type) {
                    if (enumAttribute)
                        result[enumItem[enumAttribute]] = { value: enumItem[enumValue], ref: enumItem.id }
                    else
                        result[enumItemKey] = { value: enumItem[enumValue], ref: enumItem.id }

                } else {
                    if (enumAttribute)
                        result[enumItem[enumAttribute]] = enumItem[enumValue];
                    else
                        result[enumItemKey] = enumItem[enumValue];
                }

            })

            context[attr] = result;
        }
    })
}

function promoteAttributeToReplaceKey(context, attributes, promoteAttribute) {
    attributes.forEach(function (attr) {
        if (attr in context) {
            var result = {};
            Object.keys(context[attr]).forEach(function (enumItemKey) {
                var enumItem = context[attr][enumItemKey];

                if (!(promoteAttribute in enumItem)) {
                    console.log("Tried to promote for " + attr + " but missing " + promoteAttribute);
                    console.log(source);
                    console.log(context);
                    return;
                }

                result[enumItem[promoteAttribute]] = enumItem;
                delete enumItem[promoteAttribute];
            })

            context[attr] = result;
        }
    })
}

const ALLCAPS_ALLOWED = ["ZM", "CO", "CO2", "MST", "DSK", "PS", "RFID", "NA", "ASCII", "MD5", "DNS1", "DNS2", "VC", "SOS", "MOS"]

var ALLCAPS = {};

function removeCaps(context, tags) {
    tags.forEach(function (tag) {
        if (tag in context) {
            var value = context[tag];
            if (value.indexOf('_') == -1) {

                if ((value.toUpperCase() == value) && !ALLCAPS[value] && (ALLCAPS_ALLOWED.indexOf(value) == -1)) {
                    // console.log(value);
                    ALLCAPS[value] = true;
                }

                if ((value.toLowerCase() == value)) {
                    context[tag] = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
                } else if ((value.toUpperCase() == value) && (ALLCAPS_ALLOWED.indexOf(value) == -1)) {
                    context[tag] = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
                }

            }
        }
    })
}

function normalizeName(value) {
    value = normalizeRemovePrefixes(value);


    if (value.indexOf('/') > -1) {
        var result = value
            .split('/')
            .map(w => (w.length > 1) ? w[0].toUpperCase() + w.substr(1).toLowerCase() : w)
            .join('');
        value = result;
    }

    if (value.indexOf(' ') == -1) {
        return value.replace(/\W/g, '')
            .replace(/^Zwave/, '');
    }

    var result = value
        .split(' ')
        .map(w => (w.length > 1) ? w[0].toUpperCase() + w.substr(1).toLowerCase() : w)
        .join('')
        .replace(/\W/g, '')
        .replace(/^Zwave/, '')
    return result;
}

function normalizeRemovePrefixes(value) {
    if (value.indexOf('_') == -1) return value;

    return value
        .replace(/^BASIC\_TYPE\_/g, '')
        .replace(/^SPECIFIC\_TYPE\_/g, '')
        .replace(/^GENERIC\_TYPE\_/g, '')
        .replace(/^COMMAND\_CLASS\_/g, '')

}

function parseCamelCaseUnderScore(value) {
    if (value.indexOf('_') == -1) return value;

    return value
        .replace(/^BASIC\_TYPE\_/g, '')
        .replace(/^SPECIFIC\_TYPE\_/g, '')
        .replace(/^GENERIC\_TYPE\_/g, '')
        .replace(/^COMMAND\_CLASS\_/g, '')
        .split('_')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join('');
}

function maskToShift_(mask) {
    var shift = 0;

    while ((mask & 1) !== 1) {
        mask = mask >> 1;
        shift++;
    }
}