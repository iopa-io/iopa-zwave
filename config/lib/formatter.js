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
    util = require('util');

const constants = require('./formatter-constants'),
    COPYRIGHT = constants.COPYRIGHT,
    SYSTEM_GENERATED_HEADER = constants.SYSTEM_GENERATED_HEADER;


var ZWAVE = {}, ENUMS, ENUM_NAMES;

module.exports = function (context, outputdir, protocolname, COMMAND_CLASS_LABEL, callback) {

    if (!fs.existsSync(outputdir)) fs.mkdirSync(outputdir);

    ENUMS = {}; ENUM_NAMES = {};

    var stream = fs.createWriteStream(outputdir + '/' + protocolname + '.js');

    if (COMMAND_CLASS_LABEL == 'COMMAND_CLASS') {
        fs.createReadStream(__dirname + '/util/bufferstream.js').pipe(fs.createWriteStream(outputdir + '/bufferstream.js', { 'flags': 'w' }));
        fs.createReadStream(__dirname + '/util/copyto_index.js').pipe(fs.createWriteStream(outputdir + '/index.js', { 'flags': 'w' }));
        fs.createReadStream(__dirname + '/util/helpers.js').pipe(fs.createWriteStream(outputdir + '/helpers.js', { 'flags': 'w' }));

        writeProgram(stream, context, COMMAND_CLASS_LABEL, function () {
            stream.end();
            stream.close();

            var stream2 = fs.createWriteStream(outputdir + '/protocol-constants.js');
            stream2.write(COPYRIGHT + SYSTEM_GENERATED_HEADER);
            writeBasicDeviceClass(stream2, context.BASIC_DEVICE_CLASS);
            writeGenericDeviceClass(stream2, context.GENERIC_DEVICE_CLASS);
            stream2.end(callback);
        })
    } else {
        writeProgram(stream, context, COMMAND_CLASS_LABEL, function () {
            stream.end();
            stream.close();

            var stream2 = fs.createWriteStream(outputdir + '/protocol-constants.js', { 'flags': 'a' });
            emitZWAVEExports(stream2);
            stream2.end("/*\r\n * End of system-generated code\r\n */", callback);
        })

    }
}

function writeProgram(stream, context, COMMAND_CLASS_LABEL, callback) {

    stream.write(COPYRIGHT + SYSTEM_GENERATED_HEADER);
    stream.write(`const BufferStreamFactory = require('./bufferstream').BufferStreamFactory,\r\n\tBufferStream = new BufferStreamFactory();\r\n\r\n`);
    stream.write(`const helpers = require('./helpers').helpers;\r\n\r\n`);

    writeCommandClass(stream, context[COMMAND_CLASS_LABEL], COMMAND_CLASS_LABEL);

    stream.write("/*\r\n * End of system-generated code\r\n */", callback);
}

function writeBasicDeviceClass(stream, context) {

    stream.write("module.exports.BASIC_DEVICE_CLASS = { \r\n");

    Object.keys(context).forEach(function (key) {
        stream.write("\t" + context[key].name + ": " + toHex8(key) + ",\r\n")
    })

    stream.write("\tenum: {\r\n");

    var outputBuilder = [];
    Object.keys(context).forEach(function (key) {
        outputBuilder.push("\t\t" + toHex8(key) + ": {" + emitObject(context[key]) + "}");
    })
    stream.write(outputBuilder.join(",\r\n"));

    stream.write("\r\n\t}\r\n");

    stream.write("};\r\n\r\n");
}

function emitObject(context) {

    var list = [];
    Object.keys(context).forEach(function (key) {
        list.push(key + ": " + JSON.stringify(context[key]))
    })
    return list.join(", ");
}

function writeGenericDeviceClass(stream, context) {

    stream.write("module.exports.GENERIC_DEVICE_CLASS = { \r\n");

    Object.keys(context).forEach(function (key) {
        stream.write("\t" + context[key].name + ": " + toHex8(key) + ",\r\n")
    })

    stream.write("\tenum: {");

    Object.keys(context)
        .map((t) => { return { key: t, value: context[t] } })
        .sort((a, b) => ((a.key < b.key) ? -1 : 1))

        .forEach(function (keyvalue) {
            var item = keyvalue.value;
            var key = keyvalue.key;
            var SpecificDeviceClass = item.SPECIFIC_DEVICE_CLASS;
            delete item.SPECIFIC_DEVICE_CLASS;
            delete item.comment;

            stream.write("\r\n\t\t" + toHex8(key) + ": {\r\n")

            Object.keys(item).forEach(function (itemKey) {
                stream.write("\t\t\t" + itemKey + ": " + JSON.stringify(item[itemKey]) + ", \r\n")
            })

            stream.write("\t\t\t" + "SpecificDeviceClass: {\r\n")

            Object.keys(SpecificDeviceClass)
                .map((t) => { return { key: t, value: SpecificDeviceClass[t] } })
                .sort((a, b) => ((a.key < b.key) ? -1 : 1))
                .forEach(function (specDevItem) {
                    var specDevItemKey = specDevItem.key;
                    stream.write("\t\t\t\t" + toHex8(specDevItem.key) + ": " + JSON.stringify(specDevItem.value.name) + ",\r\n")
                })
            stream.write("\t\t\t" + "},\r\n")
            stream.write("\t\t},")

        });

    stream.write("\t}\r\n")

    stream.write("};\r\n\r\n");

}

function writeCommandClass(stream, context, COMMAND_CLASS_LABEL, callback) {

    stream.write(`const ${COMMAND_CLASS_LABEL} = { \r\n`);

    var processed = {};

    Object.keys(context).forEach(function (key) {

        var name = context[key].name;

        if (processed[name])
            name += "V" + context[key].version;
        else
            processed[name] = true;

        stream.write("\t" + name + ": { id: " + toHex8(context[key].id))

        if ('COMMAND' in context[key]) {
            var list = [];
            Object.keys(context[key].COMMAND)
                .map((t) => { return { key: t, value: context[key].COMMAND[t] } })
                .sort((a, b) => ((a.value.name < b.value.name) ? -1 : 1))
                .forEach(function (keyvalue) {
                    var key = keyvalue.key
                    var item = keyvalue.value;
                    list.push(`${item.name}: ${toHex8(key)}`);
                });
            stream.write(",\r\n\t\t" + list.join(",\r\n\t\t") + " },\r\n");
        } else
            stream.write(" },\r\n");

    })

    stream.write("\tenum: {\r\n");

    var cmd = {};

    // Deduplicate classes and move cmd out of primary structure;
    Object.keys(context)
        .sort()
        .map((t) => { return { key: t, value: context[t] } })
        .forEach(function (keyvalue) {
            var key = keyvalue.key
            var item = keyvalue.value;
            if ('COMMAND' in item) {
                cmd[item.id] = item.COMMAND
            } else {
                cmd[item.id] = {};
            }
            cmd[item.id].key = key;
        });

    Object.keys(cmd).forEach(function (cmdId) {
        var list = [];
        var item = context[cmd[cmdId].key];
        Object.keys(item).forEach(function (itemKey) {
            if (itemKey !== "COMMAND" && itemKey !== "id") {
                list.push(itemKey + ": " + JSON.stringify(item[itemKey]));
            }
        });
        if ('COMMAND' in item)
            list.push("command" + ": {  /* see below */ }");
        else
            list.push("command" + ": {  /* none */ }");

        stream.write("\t\t" + toHex8(cmdId) + ": { " + list.join(", ") + " },\r\n")
    });


    stream.write("\t}\r\n")
    stream.write("};\r\n\r\n")
    stream.write(`module.exports.${COMMAND_CLASS_LABEL} = ${COMMAND_CLASS_LABEL};\r\n`);

    Object.keys(cmd)
        .forEach(function (commandClassKey) {
            var COMMAND = cmd[commandClassKey];
            var commandClass = context[COMMAND.key];

            if (Object.keys(COMMAND).length > 1) {

                stream.write("\r\n\r\n/*\r\n");
                stream.write(` * ${COMMAND_CLASS_LABEL} ${toHex8(commandClass.id)} ${commandClass.name} COMMANDS\r\n`);
                stream.write(" */\r\n\r\n");

                Object.keys(COMMAND).forEach(function (cmdId) {
                    if (cmdId !== "key")
                        emitCommand(stream, cmdId, COMMAND[cmdId], commandClass, COMMAND_CLASS_LABEL);
                })
            }
        });


    emitENUMExports(stream);


    stream.write("\r\n", callback)
}


function emitENUMExports(stream) {
    var result = Object.keys(ENUMS).map((t) => ENUMS[t]).sort();

    stream.write("module.exports.ENUM = {\r\n\t");
    stream.write(result.map((t) => `'${t.replace(/^ENUM_/, '')}': ${t}`).join(",\r\n\t") + "\r\n")
    stream.write("};\r\n");
}


function emitZWAVEExports(stream) {
    var result = Object.keys(ZWAVE).sort();
    stream.write("\r\nmodule.exports.ZWAVE = {\r\n\t");

    var list1 = [];

    result.forEach(function (t) {
        if (t.match(/^\d/))
            list1.push(`['${t}']: '${t}'`);
        else if (t.match(/^zwave./))
            list1.push(`${t.substr(6)}: '${t}'`);
        else
            list1.push(`${t}: '${t}'`);
    });

    stream.write(list1.join(",\r\n\t") + "\r\n")
    stream.write("};\r\n");
}

function emitCommand(stream, id, context, commandClass, COMMAND_CLASS_LABEL) {

    stream.write("// " + commandClass.name + " [" + toHex8(commandClass.id) + "] " + context.name + " [" + toHex8(id) + "] " + "COMMAND \r\n");
    stream.write(`${COMMAND_CLASS_LABEL}.enum[${toHex8(commandClass.id)}].command[${toHex8(id)}] = {\r\n`);

    if ('variant_group' in context)
        context.variant_group = true;

    Object.keys(context).forEach(function (itemKey) {
        if (itemKey != "id" && ["param", "request", "response"].indexOf(itemKey) == -1)
            stream.write("\t" + itemKey + ": " + JSON.stringify(context[itemKey]) + ",\r\n")
    })

    if (context.param || context.response) {

        context.param = context.param || {};

        if (Object.keys(context.param).length == 0) {
            // response only;
            stream.write("\tparam: { /* no request parameters */ },\r\n")
        } else {
            stream.write("\tparam: { \r\n")
            var list = [];
            emitParamList(list, "", context);
            stream.write(list.join(", \r\n"));

            stream.write("\r\n\t},\r\n")
        }

        var options = {
            COMMAND_CLASS: commandClass.name,
            COMMAND: context.name,
            footer: []
        }

        // ENCODER FUNCTION

        if (Object.keys(context.param).length == 0) {
            stream.write("\tencode: function (context) { return Buffer.alloc(0) },\r\n");
        } else {
            options.header = [];
            options.body = [];
            stream.write("\tencode: function (context) {\r\n");

            options.header.push(TAB2 + `var payload = BufferStream.alloc();`);
            emitEncodeParams(context, options);
            options.body.push(TAB2 + `return payload.asBuffer();`);

            stream.write(options.header.join("\r\n") + "\r\n");
            stream.write(options.body.join("\r\n") + "\r\n");

            stream.write("\t},\r\n");
        }

        // SWITCH TO RESPONSE

        if ('response' in context && Object.keys(context.response).length > 0) {
            context.request = context.param;
            context.param = context.response;
            stream.write("\tresponse: { \r\n")
            var list = [];
            emitParamList(list, "", context);
            stream.write(list.join(", \r\n"));
            stream.write("\r\n\t},\r\n")
        } else if ('response' in context) {
            stream.write("\response: { /* no response parameters */ },\r\n")
        }

        // DECODER FUNCTION
        if (Object.keys(context.param).length == 0) {
            stream.write("\tdecode: function (payload) { return {} }\r\n");
        } else {
            options.header = [];
            options.body = [];
            stream.write("\tdecode: function (payload) {\r\n");

            options.header.push(TAB2 + `var context = {};  payload = BufferStream.from(payload);`)
            emitDecodeParams(context, options);
            options.body.push(TAB2 + `return context;`)

            stream.write(options.header.join("\r\n") + "\r\n");
            stream.write(options.body.join("\r\n") + "\r\n");

            stream.write("\t}\r\n");
        }

        // END COMMAND
        stream.write("};\r\n");

        // WRITE ACCUMULATED FOOTERS FOR ENUMS ETC
        if (options.footer.length > 0) stream.write("\r\n" + options.footer.join("\r\n"));
    } else {

        // NO PARAMETERS
        stream.write("\tparam: { /* no parameters */ },\r\n")
        stream.write("\tencode: function (context) { return Buffer.alloc(0) },\r\n");
        stream.write("\tdecode: function (payload) { return {} }\r\n");
        stream.write("};\r\n");

    }
    stream.write("\r\n");
}



function emitDecodeParams(context, options) {

    options.parent = context;

    if (!('param' in context)) return;

    Object.keys(context.param)
        .forEach(function (paramkey) {

            options.param = context.param[paramkey];
            options.key = paramkey;

            switch (options.param.type) {
                case "BYTE":
                    emitDecodeBYTE(options);
                    break;
                case "WORD":
                    emitDecodeWORD(options);
                    break;
                case "BIT_24":
                    emitDecodeBIT_24(options);
                    break;
                case "DWORD":
                    emitDecodeDWORD(options);
                    break;
                case "CONST":
                    emitDecodeCONST(options);
                    break;
                case "BITMASK":
                    emitDecodeBITMASK(options);
                    break;
                case "ARRAY":
                    emitDecodeARRAY(options);
                    break;
                case "VARIANT":
                    emitDecodeVARIANT(options);
                    break;
                case "MARKER":
                    // no-op, handled by preceding VARIANT
                    break;
                case "ENUM_ARRAY":
                    emitDecodeENUM_ARRAY(options);
                    break;
                case "MULTI_ARRAY":
                    emitDecodeMULTI_ARRAY(options);
                    break;
                case "STRUCT_BYTE":
                    emitDecodeSTRUCT_BYTE(options);
                    break;
                case "VARIANT_GROUP":
                    emitDecodeVARIANT_GROUP(options);
                    break;
            }
        })
}

function emitEncodeParams(context, options) {

    options.parent = context;
    var savebody = options.body;

    if (!('param' in context)) { return; }

    Object.keys(context.param)
        .forEach(function (paramkey) {

            options.param = context.param[paramkey];
            options.key = paramkey;

            if (options.param.optionalmask) {
                var optionaloffset = _getOffset(options.parent, options.param.optionaloffs);
                options.body.push(TAB2 + `if ((payload.at(${optionaloffset}) & ${toHex8(options.param.optionalmask)}) !== 0) /* optional flag for ${options.param.name} */ {`);
                options.body = [];   // START NEW BODY, INDENTED
            }

            switch (options.param.type) {
                case "BYTE":
                    emitEncodeBYTE(options);
                    break;
                case "WORD":
                    emitEncodeWORD(options);
                    break;
                case "BIT_24":
                    emitEncodeBIT_24(options);
                    break;
                case "DWORD":
                    emitEncodeDWORD(options);
                    break;
                case "CONST":
                    emitEncodeCONST(options);
                    break;
                case "BITMASK":
                    emitEncodeBITMASK(options);
                    break;
                case "ARRAY":
                    emitEncodeARRAY(options);
                    break;
                case "VARIANT":
                    emitEncodeVARIANT(options);
                    break;
                case "MARKER":
                    // no-op, handled by preceding VARIANT
                    break;
                case "ENUM_ARRAY":
                    emitEncodeENUM_ARRAY(options);
                    break;
                case "MULTI_ARRAY":
                    emitEncodeMULTI_ARRAY(options);
                    break;
                case "STRUCT_BYTE":
                    emitEncodeSTRUCT_BYTE(options);
                    break;
                case "VARIANT_GROUP":
                    emitEncodeVARIANT_GROUP(options);
                    break;
            }

            if (options.param.optionalmask) {
                savebody.push('\t' + options.body.join('\r\n\t'));
                savebody.push(TAB2 + `}`);
                options.body = savebody;   // RESTORE BODY
            }

        })
}


function emitEncodeParam(body, param, statement, level) {
    var TAB = (level == 3) ? TAB3 : TAB2;
    body.push(TAB + `if ('${param.name}' in context) ` + statement + `; else return payload.asBuffer();`)
}

function emitDecodeParam(body, param, statement, level) {
    var TAB = (level == 3) ? TAB3 : TAB2;
    body.push(TAB + `if (!payload.insufficientBytes(1)) context['${param.name}'] = ` + statement + `; else return context;`)
}

function emitOptionalWrapStart({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent, key }) {

}

function emitOptionalWrapComplete({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent, key }) {
    if (!param.optionalmask) return;
    body.push(TAB2 + `}`);
}

// ENCODE, DECODE FUNCTIONS

function emitEncodeBYTE({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitEncodeParam(body, param, `payload.writeBYTE(context['${param.name}'])`);
}

function emitDecodeBYTE({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitDecodeParam(body, param, `payload.readBYTE()`);
}

function emitEncodeWORD({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitEncodeParam(body, param, `payload.writeWORD(context['${param.name}'])`);
}

function emitDecodeWORD({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitDecodeParam(body, param, `payload.readWORD()`);
}

function emitEncodeBIT_24({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitEncodeParam(body, param, `payload.writeBIT_24(context['${param.name}'])`);
}

const TAB2 = `\t\t`, TAB3 = `\t\t\t`;

function emitDecodeBIT_24({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitDecodeParam(body, param, `payload.readBIT_24()`);
}

function emitEncodeDWORD({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitEncodeParam(body, param, `payload.writeDWORD(context['${param.name}'])`);
}

function emitDecodeDWORD({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    emitDecodeParam(body, param, `payload.readDWORD()`);
}

function emitEncodeCONST({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name), param.const);
    emitEncodeParam(body, param, `payload.writeBYTE(helpers.getValue(context, '${param.name}', ${ENUM}))`);
}

function emitDecodeCONST({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name), param.const);
    emitDecodeParam(body, param, `helpers.lookupNameValue(payload.readBYTE(), ${ENUM}.enum)`);
}

function emitEncodeARRAY({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    var options = {};
    if (param.showhex) options.encoding = "hex";
    if (param.is_ascii) options.encoding = "ascii";
    if (param.len) options.length = param.len;
    optionsDisplay = util.inspect(options);

    if (options.encoding)
        emitEncodeParam(body, param, `payload.writeSTRING(context['${param.name}'], ${optionsDisplay})`);
    else
        emitEncodeParam(body, param, `payload.writeBUFFER(context['${param.name}'], ${optionsDisplay})`);

}

function emitDecodeARRAY({ COMMAND_CLASS, COMMAND, offset, param, header, body, footer }) {
    var options = {};
    if (param.showhex) options.encoding = "hex";
    if (param.is_ascii) options.encoding = "ascii";
    if (param.len) options.length = param.len;
    optionsDisplay = util.inspect(options);

    if (options.encoding)
        emitDecodeParam(body, param, `payload.readSTRING(${optionsDisplay})`);
    else
        emitDecodeParam(body, param, `payload.readBUFFER(${optionsDisplay})`);
}

function emitEncodeVARIANT({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent, key }) {

    var lengthoffset = param.lengthoffset, lengthparameter;

    if (parent.$variantgroup) {
        if (lengthoffset > 127) {
            lengthoffset -= 128;
            lengthparameter = parent.$grandparent.param[lengthoffset];
        }
        else {
            lengthparameter = parent.param[lengthoffset];
            lengthoffset = lengthoffset + parent.$paramoffset;
        }
    } else {
        lengthparameter = parent.param[lengthoffset];
    }

    var options = {};

    if (param.lengthmask == 0 && parent.param[parseInt(key) + 1] && parent.param[parseInt(key) + 1].type == "MARKER") {

        var marker = '[ ' + Object.keys(parent.param[parseInt(key) + 1].const).map((t) => toHex8(parseInt(t))).join(', ') + ' ]';

        if (param.is_ascii) {
            options.encoding = 'utf8';
        }
        else if (param.showhex) {
            options.encoding = "hex";
        }

        var optionsEncoded;

        if (options.encoding)
            optionsEncoded = `{ encoding: '${options.encoding}', marker: ${marker} }`;
        else
            optionsEncoded = `{ marker: ${marker} }`;

        if (options.encoding)
            emitEncodeParam(body, param, `payload.writeSTRINGtoMARKER(context['${param.name}'], ${optionsEncoded})`);
        else
            emitEncodeParam(body, param, `payload.writeBUFFERtoMARKER(context['${param.name}'], ${optionsEncoded})`);
    }
    else if (param.lengthmask !== 7) {

        if (param.is_ascii) {
            options.encoding = 'utf8';
        }
        else if (param.showhex) {
            options.encoding = "hex";
        }

        if (param.lengthmask == 0) {
            // read to end, do not set options.length
        }
        else {
            if (param.shifter > 0)
                options.length = `((payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}) >> ${param.shifter})`;
            else
                options.length = `(payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)})`;
            if (param.sizechange)
                options.length = options.length + " " + param.sizechange.toString();
        }

        var optionsEncoded;

        if (options.encoding && options.length)
            optionsEncoded = `{ encoding: '${options.encoding}', length: ${options.length} }`;
        else if (options.encoding)
            optionsEncoded = `{ encoding: '${options.encoding}' }`;
        else if (options.length)
            optionsEncoded = `{ length: ${options.length} }`;
        else
            optionsEncoded = '{}';

        if (options.encoding)
            emitEncodeParam(body, param, `payload.writeSTRING(context['${param.name}'], ${optionsEncoded})`);
        else
            emitEncodeParam(body, param, `payload.writeBUFFER(context['${param.name}'], ${optionsEncoded})`);

    } else {
        // lengthmask == 7, could be FLOATING or INTEGER
        var refParam = lengthparameter;
        if (refParam.type == "STRUCT_BYTE") {
            if (('bitfield' in refParam)
                && (Object.keys(refParam.bitfield).length >= 2)
                && ('7' in refParam.bitfield) // size
                && ('224' in refParam.bitfield)) // precision
            {
                // FLOATING
                var paramPrecisionName = lengthparameter.bitfield['224'].fieldname;
                var paramSizeName = lengthparameter.bitfield['7'].fieldname;
                header.push(`\t\tif (('${param.name}' in context) && !(('${paramPrecisionName}' in context) && ('${paramSizeName}' in context))) helpers.updateFLOATINGSizePrecision(context, '${param.name}', '${paramPrecisionName}', '${paramSizeName}');`);

                let size = `payload.at(${lengthoffset}) & ${toHex8(7)}`;
                let precision = `(payload.at(${lengthoffset}) & ${toHex8(224)}) >> ${refParam.bitfield['224'].shifter}`;
                emitEncodeParam(body, param, `payload.writeFLOATING(context['${param.name}'], {size: ${size}, precision: ${precision} })`);
            } else {
                // INTEGER, COULD BE SIGNED OR ENUM INDICATING (SIGNED, UNSIGNED, ENUM OR BITS)
                let size = `payload.at(${lengthoffset}) & ${toHex8(7)}`;
                let format = '0x00 /* SignedInteger */'; // signed by default
                if ('fieldenum' in refParam) {
                    if (refParam.fieldenum['1'].fieldenum['0'] == 'SignedInteger') {
                        // DEFINITELY THE ENUM WE RECOGNIZE
                        let fieldmask = refParam.fieldenum['1'].fieldmask;
                        let shifter = refParam.fieldenum['1'].shifter;
                        format = `(payload.at(${lengthoffset}) & ${toHex8(fieldmask)}) >> ${shifter} /* see ENUM */`;
                    }
                    else {
                        // UNKNOWN ENUM
                        throw new Error('first fieldenum in variant ' + COMMAND_CLASS + ' ' + COMMAND + ' ' + param.name + 'is not Format');
                    }
                }
                emitEncodeParam(body, param, `payload.writeINTEGER(context['${param.name}'], {size: ${size}, format: ${format} })`);
            }
        } else {
            // LENGTH FIELD NOT A STRUCTURED BYTE, DON'T RECOGNIZE
            throw new Error('length field referenced is not a STRUCT_BYTE: ' + COMMAND_CLASS + ' ' + COMMAND + ' ' + param.name + 'is not Format');
        }
    }
}

function _getParameter(parent, offset) {
    if (parent.$variantgroup) {
        if (offset > 127) {
            return parent.$grandparent.param[offset - 128];
        }
        else {
            return parent.param[offset];
        }
    } else {
        return parent.param[offset];
    }
}

function _getOffset(parent, offset) {
    if (parent.$variantgroup) {
        if (offset > 127) {
            return offset - 128;
        }
        else {
            return offset + parent.$paramoffset;
        }
    } else {
        return offset
    }
}

function emitDecodeVARIANT({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent, key }) {
    var options = {};

    var lengthoffset = _getOffset(parent, param.lengthoffset);
    var lengthparameter = _getParameter(parent, param.lengthoffset);

    if (param.lengthmask == 0 && parent.param[parseInt(key) + 1] && parent.param[parseInt(key) + 1].type == "MARKER") {

        var marker = '[ ' + Object.keys(parent.param[parseInt(key) + 1].const).map((t) => toHex8(parseInt(t))).join(', ') + ' ]';

        if (param.is_ascii) {
            options.encoding = 'utf8';
        }
        else if (param.showhex) {
            options.encoding = "hex";
        }

        var optionsEncoded;

        if (options.encoding)
            optionsEncoded = `{ encoding: '${options.encoding}', marker: ${marker} }`;
        else
            optionsEncoded = `{ marker: ${marker} }`;

        if (options.encoding)
            emitDecodeParam(body, param, `payload.readSTRINGtoMARKER(${optionsEncoded})`);
        else
            emitDecodeParam(body, param, `payload.readBUFFERtoMARKER(${optionsEncoded})`);
    }
    else if (param.lengthmask !== 7) {

        if (param.is_ascii) {
            options.encoding = 'utf8';
        }
        else if (param.showhex) {
            options.encoding = "hex";
        }

        if (param.lengthmask == 0) {
            // read to end, do not set options.length
        }
        else if (param.shifter > 0)
            options.length = `(payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}) >> ${param.shifter}`;
        else
            options.length = `payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}`;

        var optionsEncoded;

        if (options.encoding && options.length)
            optionsEncoded = `{ encoding: '${options.encoding}', length: ${options.length} }`;
        else if (options.encoding)
            optionsEncoded = `{ encoding: '${options.encoding}' }`;
        else if (options.length)
            optionsEncoded = `{ length: ${options.length} }`;
        else
            optionsEncoded = '{}';

        if (options.encoding)
            emitDecodeParam(body, param, `payload.readSTRING(${optionsEncoded})`);
        else
            emitDecodeParam(body, param, `payload.readBUFFER(${optionsEncoded})`);

    } else {
        // lengthmask == 7, could be FLOATING or INTEGER
        var refParam = lengthparameter;
        if (refParam.type == "STRUCT_BYTE") {
            if (('bitfield' in refParam)
                && (Object.keys(refParam.bitfield).length >= 2)
                && ('7' in refParam.bitfield) // size
                && ('224' in refParam.bitfield)) // precision
            {
                // FLOATING
                let size = `payload.at(${lengthoffset}) & ${toHex8(7)}`;
                let precision = `(payload.at(${lengthoffset}) & ${toHex8(224)}) >> ${refParam.bitfield['224'].shifter}`;
                emitDecodeParam(body, param, `payload.readFLOATING({size: ${size}, precision: ${precision} })`);

            } else {
                // INTEGER, COULD BE SIGNED OR ENUM INDICATING (SIGNED, UNSIGNED, ENUM OR BITS)
                let size = `payload.at(${lengthoffset}) & ${toHex8(7)}`;
                let format = '0x00 /* SignedInteger */'; // signed by default
                if ('fieldenum' in refParam) {
                    if (refParam.fieldenum['1'].fieldenum['0'] == 'SignedInteger') {
                        // DEFINITELY THE ENUM WE RECOGNIZE
                        let fieldmask = refParam.fieldenum['1'].fieldmask;
                        let shifter = refParam.fieldenum['1'].shifter;
                        format = `(payload.at(${lengthoffset}) & ${toHex8(fieldmask)}) >> ${shifter} /* see ENUM */`;
                    }
                    else {
                        // UNKNOWN ENUM
                        throw new Error('first fieldenum in variant ' + COMMAND_CLASS + ' ' + COMMAND + ' ' + param.name + 'is not Format');
                    }
                }
                emitDecodeParam(body, param, `payload.readINTEGER({size: ${size}, format: ${format} })`);
            }
        } else {
            // LENGTH FIELD NOT A STRUCTURED BYTE, DON'T RECOGNIZE
            throw new Error('length field referenced is not a STRUCT_BYTE: ' + COMMAND_CLASS + ' ' + COMMAND + ' ' + param.name + 'is not Format');
        }
    }
}

function emitEncodeENUM_ARRAY({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name), param.enum);
    var options = {};
    if (param.len) options.length = param.len;
    options = util.inspect(options);
    emitEncodeParam(body, param, `payload.writeBUFFER(helpers.getValueArray(context, '${param.name}', ${ENUM}), ${options})`);
}

function emitDecodeENUM_ARRAY({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {
    var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name), param.enum);
    var options = {};
    if (param.len) options.length = param.len;
    options = util.inspect(options);
    emitDecodeParam(body, param, `helpers.lookupNameValueArray(payload.readBUFFER(${options}),  ${ENUM}.enum)`);
}

function emitEncodeMULTI_ARRAY({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent }) {

    var refParam = _getParameter(parent, param.paramdescloc.param);
    var paramstart = _getOffset(parent, param.paramdescloc.paramstart)

    if (refParam.type !== "CONST") {
        console.log(param);
        throw new Error("MULTI_ARRAY refers to non CONST param in paramdescloc");
    }
    var MULTI_ARRAY_ENUM = getEnumMultiName(COMMAND_CLASS, COMMAND, param);

    emitEncodeParam(body, param, `payload.writeBYTE(helpers.getValue(context, '${param.name}', ${MULTI_ARRAY_ENUM}[payload.at(${paramstart})]))`);
}

function emitDecodeMULTI_ARRAY({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent }) {

    var refParam = _getParameter(parent, param.paramdescloc.param);
    var paramstart = _getOffset(parent, param.paramdescloc.paramstart)

    if (refParam.type !== "CONST") {
        console.log(param);
        throw new Error("MULTI_ARRAY refers to non CONST param in paramdescloc");
    }

    var MULTI_ARRAY_ENUM = emitEnumMulti(footer, COMMAND_CLASS, COMMAND, param, refParam);

    emitDecodeParam(body, param, `helpers.lookupNameValue(payload.readBYTE(), ${MULTI_ARRAY_ENUM}[payload.at(${paramstart})].enum)`);

}

function emitEncodeBITMASK({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent }) {

    var lengthoffset = _getOffset(parent, param.lengthoffset);
    var lengthparameter = _getParameter(parent, param.lengthoffset);

    if (param.bitflag) {
        var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name), param.bitflag);
        var length = Object.keys(param.bitflag).length;
        if ("255" in param.bitflag) length -= 1;
        length = param.len || length;
        emitEncodeParam(body, param, `payload.writeBITMASK(helpers.getFlagArray(context,  ${ENUM}), {length: ${length}})`);
    } else {
        var length;

        if (param.lengthmask == 0) {
            if (param.name == "NodeListData")
                length = 29;
            else
                length = 0; // fill based on value
        } else {
            length = `payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}`
        }

        emitEncodeParam(body, param, `payload.writeBITMASK(context['${param.name}'], {length: ${length}})`);
    }
}

function emitDecodeBITMASK({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent }) {
    var lengthoffset = _getOffset(parent, param.lengthoffset);
    var lengthparameter = _getParameter(parent, param.lengthoffset);

    if (param.bitflag) {
        var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name), param.bitflag);
        var length = Object.keys(param.bitflag).length;
        if ("255" in param.bitflag) length -= 1;
        length = param.len || length;
        body.push(TAB2 + `helpers.setNameFlags(context, payload.readBITMASK({length: ${length}}), ${ENUM}.enum);`);
    } else {
        var length;

        if (param.lengthmask == 0) {
            if (param.name == "NodeListData")
                length = 29;
            else
                length = 0; // fill based on value
        } else {
            length = `payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}`
        }

        emitDecodeParam(body, param, `payload.readBITMASK({length: ${length}})`);
    }
}

function emitEncodeVARIANT_GROUP({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent, key }) {

    var lengthoffset = param.lengthoffset;

    var size;
    if (param.lengthmask == 255) {
        var paramRef = parent.param[lengthoffset];
        size = `payload.at(${lengthoffset})`;
    } else if (param.lengthmask > 0) {
        var paramRef = parent.param[lengthoffset];
        if (paramRef.type == "STRUCT_BYTE" && (param.lengthmask.toString() in paramRef.bitfield)) {
            var shifter = paramRef.bitfield[param.lengthmask.toString()].shifter;

            if (shifter !== param.shifter)
                throw new Error("Unmatching shifter in reference length for variant group  + " + COMMAND_CLASS + " " + COMMAND + " " + param.name)

            if (shifter > 0)
                size = `(payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}) >> ${shifter}`;
            else
                size = `payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}`;


            // TO DO: MORE_TO_FOLLOW SPECIAL HANDLING FOR SECURITY2
        }
        else
            throw new Error("Unmatching reference for variant group length + " + COMMAND_CLASS + " " + COMMAND + " " + param.name)

    } else {
        // REPEAT UNTIL END OF BUFFER
        size = null;
    }

    param.$variantgroup = true;
    param.$grandparent = parent;
    param.$paramoffset = parseInt(key);
    body.push(TAB2 + `if ('${param.name}' in context) {`);
    if (size !== null) body.push(TAB2 + `\tif (context['${param.name}'].length !== (${size})) throw new Error('${param.name} array size does not match length field');`);
    body.push(TAB3 + `context['${param.name}'].forEach(function(context) {`);
    var options = { COMMAND_CLASS: COMMAND_CLASS, COMMAND: COMMAND, header: header, body: [], footer: footer };
    emitEncodeParams(param, options);
    body.push(TAB3 + options.body.join('\r\n\t\t'));
    body.push(TAB3 + `});`);
    body.push(TAB2 + `} else return payload.asBuffer();;`);
}

function emitDecodeVARIANT_GROUP({ COMMAND_CLASS, COMMAND, param, header, body, footer, parent, key }) {

    var lengthoffset = param.lengthoffset;

    var size;
    if (param.lengthmask == 255) {
        var paramRef = parent.param[lengthoffset];
        size = `payload.at(${lengthoffset})`;
    } else if (param.lengthmask > 0) {
        var paramRef = parent.param[lengthoffset];
        if (paramRef.type == "STRUCT_BYTE" && (param.lengthmask.toString() in paramRef.bitfield)) {
            var shifter = paramRef.bitfield[param.lengthmask.toString()].shifter;

            if (shifter !== param.shifter)
                throw new Error("Unmatching shifter in reference length for variant group  + " + COMMAND_CLASS + " " + COMMAND + " " + param.name)

            if (shifter > 0)
                size = `(payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}) >> ${shifter}`;
            else
                size = `payload.at(${lengthoffset}) & ${toHex8(param.lengthmask)}`;


            // TO DO: MORE_TO_FOLLOW SPECIAL HANDLING FOR SECURITY2
        }
        else
            throw new Error("Unmatching reference for variant group length + " + COMMAND_CLASS + " " + COMMAND + " " + param.name)

    } else {
        // REPEAT UNTIL END OF BUFFER
        size = null;
    }

    param.$variantgroup = true;
    param.$grandparent = parent;
    param.$paramoffset = parseInt(key);

    var temp_prefix = '$' + param.name.toLowerCase();

    if (size != null) {
        body.push(TAB2 + `let ${temp_prefix} = [],  ${temp_prefix}_length = ${size}; `);
        body.push(TAB2 + `for (var ${temp_prefix}_index = 0;  ${temp_prefix}_index < ${temp_prefix}_length; ${temp_prefix}_index++ ) {`);
        body.push(TAB3 + `if (payload.insufficientBytes(1)) break;`);
        body.push(TAB3 + `let context = {};  // note inner scope shadowing of context`);
    } else {
        body.push(TAB2 + `let ${temp_prefix} = []; `);
        body.push(TAB2 + `while (!(payload.insufficientBytes(1))) {`);
        body.push(TAB3 + `let context = {};  // note inner scope shadowing of context`);
    }
    var options = { COMMAND_CLASS: COMMAND_CLASS, COMMAND: COMMAND, header: header, body: [], footer: footer };
    emitDecodeParams(param, options);
    body.push('\t' + options.body.join('\r\n\t'));
    body.push(TAB3 + `${temp_prefix}.push(context);`);
    body.push(TAB2 + `};`);
    emitDecodeParam(body, param, `${temp_prefix}`);
}

function hashObject(enumObject) {

    let result = 0

    for (let property in enumObject) {
        Object.keys(enumObject).forEach(function (property) {
            var str = property + enumObject[property];
            var hash = 0;
            for (let i = 0; i < str.length; i++) { hash = (((hash << 5) - hash) + str.charCodeAt(i)) & 0xFFFFFFFF }
            result += hash;
        });
    }

    return result
}


function emitEnum(footer, PREFIX, NAME, enumObject) {
    var hash = hashObject(enumObject);

    if (hash in ENUMS)
        return ENUMS[hash];

    PREFIX = PREFIX.replace(/COMMAND_CLASS_|ZWAVE_CMD_CLASS_/g, '');

    var ENUM = PREFIX.replace(/GET_$|SET_$|REPORT_$/, '') + NAME.replace(/BIT_MASK$/, '');

    // remove duplicate words at end
    var test = ENUM.split("_");

    if (test.length > 1 && test[test.length - 1] == test[test.length - 2])
        test.pop();

    if (test.length > 3 && (test[test.length - 1] == test[test.length - 3]) && (test[test.length - 2] == test[test.length - 4]))
    { test.pop(); test.pop(); }

    ENUM = test.join("_");

    if (ENUM in ENUM_NAMES) {
        ENUM = PREFIX + NAME;
        if (ENUM in ENUM_NAMES) {
            var ENUM_BASE = ENUM;
            ENUM = ENUM + (ENUM_NAMES[ENUM].length + 1);
            ENUM_NAMES[ENUM_BASE].push(ENUM);
        } else {
            ENUM_NAMES[ENUM] = [ENUM];
        }
    } else {
        ENUM_NAMES[ENUM] = [ENUM];
    }

    ENUMS[hash] = ENUM;

    // create ENUM LIST
    var list1 = [];
    Object.keys(enumObject).forEach(function (enumKey) {
        if (enumObject[enumKey].toString().match(/^\d/))
            list1.push("'" + enumObject[enumKey] + "': " + toHex8(enumKey));
        else
            list1.push(enumObject[enumKey] + ": " + toHex8(enumKey));
    });
    list1.push("enum" + ": {");
    list1 = "\t" + list1.join(", \r\n\t");
    var list2 = [];
    Object.keys(enumObject).forEach(function (enumKey) {
        list2.push(toHex8(enumKey) + ": " + JSON.stringify(enumObject[enumKey]));
    });
    list2 = "\t\t" + list2.join(", \r\n\t\t");
    var list = list1 + "\r\n" + list2 + "\r\n\t}";

    var result = "{\r\n" + list + "\r\n}"

    footer.push(`const ${ENUM} = ${result};\r\n`);

    return ENUM;

}

function emitEnumMulti(footer, COMMAND_CLASS, COMMAND, param, refParam) {

    var MULTI_ENUMS = {};

    param.multi_array.forEach(function (array) {
        var refParamItem = refParam.const[array.ref];
        if (!refParamItem) {
            if (array.ref == '0')
                refParamItem = "NotUsed_" + array.ref;
            else {
                console.log(array);
                throw new Error("MULTI_ARRAY item reference " + array.ref + " not in CONST " + refParam.name);
            }
        }

        var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(param.name) + "_" + toUnderscoreCase(refParamItem), array.bitflag);
        MULTI_ENUMS[array.ref] = ENUM;
    });

    var list1 = [];
    Object.keys(MULTI_ENUMS).forEach(function (enumKey) {
        list1.push(toHex8(enumKey) + ": " + MULTI_ENUMS[enumKey]);
    });

    var MULTI_ARRAY_ENUM = getEnumMultiName(COMMAND_CLASS, COMMAND, param);

    footer.push(`const ${MULTI_ARRAY_ENUM} = {\r\n\t${list1.join(',\r\n\t')}\r\n};`);

    return MULTI_ARRAY_ENUM;
}


function getEnumMultiName(COMMAND_CLASS, COMMAND, param) {
    return `MULTI_ARRAY_${COMMAND_CLASS}_${COMMAND}_${toUnderscoreCase(param.name)}`;
}

function emitParamList(list, prefix, context) {
    Object.keys(context.param)
        .forEach(function (paramkey) {
            var param = context.param[paramkey];
            if (param.type == "STRUCT_BYTE") {
                var structFields = _getSubParamsSTRUCT_BYTE(param);
                structFields.forEach(function item(t, i) {
                    list.push("\t\t'" + prefix + toHex8(paramkey) + String.fromCharCode(97 + i) + "': {" + emitParamSummary({ name: t }) + " /* " + param.name + " " + param.type + " */ }");
                })
            } else
                if (param.type == "VARIANT_GROUP") {
                    let list2 = [];
                    let fields = emitParamList(list2, toHex8(paramkey) + "-", param);
                    list.push("\t\t'" + prefix + toHex8(paramkey) + "': {" + emitParamSummary(param) + " /* " + param.type + " */ }");
                    list.push("\t\t" + list2.join(",\r\n\t\t"));
                } else if (param.type == "MARKER") {
                    list.push("\t\t'" + prefix + toHex8(paramkey) + "': null /* MARKER " + param.name + " handled by VARIANT */");
                } else if (param.type == "BITMASK" && 'bitflag' in param) {
                    var enumFields = Object.keys(param.bitflag).filter((t) => t != "255");
                    enumFields.forEach(function item(t, i) {
                        list.push("\t\t'" + prefix + toHex8(paramkey) + "-" + i.toString() + "': {" + emitParamSummary({ name: param.bitflag[t] }) + " /* " + param.name + " " + param.type + " */ }");
                    })
                } else {
                    list.push("\t\t'" + prefix + toHex8(paramkey) + "': {" + emitParamSummary(param) + " /* " + param.type + " */ }");
                }
        })
}

function emitParamSummary(context) {

    var list = [];

    ['name', 'alias', 'encaptype'].forEach(function (key) {
        if (key in context) {
            list.push(key + ": " + (key == "name" ? JSON.stringify("" + context[key]) : JSON.stringify(context[key])));
        }
    });

    ZWAVE[context.name] = true;

    return list.join(", ");
}

function _getSubParamsSTRUCT_BYTE(param, prefix) {
    var structFields = [];
    prefix = prefix || '';

    Object.keys(param.fieldenum || {}).map((t) => param.fieldenum[t]).forEach(function (fieldenum) {
        structFields.push(prefix + fieldenum.fieldname);
    });
    Object.keys(param.bitflag || {}).forEach(function (bitmask) {
        structFields.push(prefix + param.bitflag[bitmask]);
    });
    Object.keys(param.bitfield || {}).forEach(function (bitmask) {
        structFields.push(prefix + param.bitfield[bitmask].fieldname);
    });

    return structFields;
}

function emitEncodeSTRUCT_BYTE({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {

    // GET ALL SUBFIELD NAMES FIRST
    var structFields = _getSubParamsSTRUCT_BYTE(param, '');

    // CREATE BYTE VAR
    var nameSTRUCT_BYTE = "_" + param.name.toLowerCase();

    // EMIT
    structFields.map((t) => `'${t}' in context`).join(' || ')
    body.push(TAB2 + `if (${structFields.map((t) => `'${t}' in context`).join(' || ')}) {`);
    body.push(TAB3 + `let ${nameSTRUCT_BYTE} = 0x00;`);
    Object.keys(param.fieldenum || {}).map((t) => param.fieldenum[t]).forEach(function (fieldenum) {
        var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(fieldenum.fieldname), fieldenum.fieldenum);
        body.push(TAB3 + `if ('${fieldenum.fieldname}' in context) ${nameSTRUCT_BYTE} = ${nameSTRUCT_BYTE} | ((helpers.getValue(context, '${fieldenum.fieldname}', ${ENUM})${fieldenum.shifter > 0 ? ' << ' + fieldenum.shifter : ''}) & ${toHex8(fieldenum.fieldmask)}); `);
    });
    Object.keys(param.bitflag || {}).forEach(function (bitmask) {
        body.push(TAB3 + `if (context['${param.bitflag[bitmask]}']) ${nameSTRUCT_BYTE} = ${nameSTRUCT_BYTE} | ${toHex8(bitmask)};`);
    });
    Object.keys(param.bitfield || {}).forEach(function (bitmask) {
        var bitfield = param.bitfield[bitmask];
        body.push(TAB3 + `if ('${bitfield.fieldname}' in context) ${nameSTRUCT_BYTE} = ${nameSTRUCT_BYTE} | ((context['${bitfield.fieldname}']${bitfield.shifter > 0 ? ' << ' + bitfield.shifter : ''}) & ${toHex8(bitmask)});`);
    });
    body.push(TAB3 + `payload.writeBYTE(${nameSTRUCT_BYTE});`);
    body.push(TAB2 + `} else return payload.asBuffer();;`);
}

function emitDecodeSTRUCT_BYTE({ COMMAND_CLASS, COMMAND, param, header, body, footer }) {

    // CREATE BYTE VAR
    var nameSTRUCT_BYTE = "_" + param.name.toLowerCase();

    // EMIT
    body.push(TAB2 + '{');
    body.push(TAB3 + `let ${nameSTRUCT_BYTE} = payload.readBYTE();`);
    Object.keys(param.fieldenum || {}).map((t) => param.fieldenum[t]).forEach(function (fieldenum) {
        var ENUM = emitEnum(footer, `ENUM_${COMMAND_CLASS}_${COMMAND}_`, toUnderscoreCase(fieldenum.fieldname), fieldenum.fieldenum);
        emitDecodeParam(body, { name: fieldenum.fieldname, encaptype: fieldenum.encaptype }, `helpers.lookupNameValue((${nameSTRUCT_BYTE} & ${toHex8(fieldenum.fieldmask)})${fieldenum.shifter > 0 ? ' >> ' + fieldenum.shifter : ''}, ${ENUM}.enum)`, 3);
    });
    Object.keys(param.bitflag || {}).forEach(function (bitmask) {
        emitDecodeParam(body, { name: param.bitflag[bitmask] }, `((${nameSTRUCT_BYTE} & ${toHex8(bitmask)}) == 0) ? false : true`, 3);
    });
    Object.keys(param.bitfield || {}).forEach(function (bitmask) {
        var bitfield = param.bitfield[bitmask];
        emitDecodeParam(body, { name: bitfield.fieldname, encaptype: bitfield.encaptype }, `(${nameSTRUCT_BYTE} & ${toHex8(bitmask)})${bitfield.shifter > 0 ? ' >> ' + bitfield.shifter : ''}`, 3);
    });
    body.push(TAB2 + '}');
}

// UTILITY METHODS

function parseCamelCaseSpace(value) {
    if (value.indexOf(' ') == -1) return value.replace(/\W/g, '');

    var result = value
        .split(' ')
        .map(w => (w.length > 1) ? w[0].toUpperCase() + w.substr(1).toLowerCase() : w)
        .join('')
        .replace(/\W/g, '')
    return result;
}

function parseCamelCase(value) {
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

function toUnderscoreCase(value) {
    return value.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toUpperCase() }).replace(/^_/, "").toUpperCase();
}

function toHex16(d) {
    return "0x" + ("0000" + (+d).toString(16)).slice(-4);
}

function toHex32(b1, b2, b3, b4) {
    return toHex8(b1) + toHex8(b2) + toHex8(b3) + toHex8(b4);
}

function toHex8(b) {
    return "0x" + ("00" + (+b).toString(16)).slice(-2);
}