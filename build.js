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
    util = require('util'),
    parser = require('./config/lib/parser'),
    normalizer = require('./config/lib/normalizer'),
    formatter = require('./config/lib/formatter');

const { FuseBox, UglifyESPlugin } = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src/zwave-protocol-generated",
    output: "bin/$name.js",
    globals: {
        default: 'default'
    },
    natives: {
        Buffer: false
    },
    plugins: [
        UglifyESPlugin()
    ]
});

parser(__dirname + '/config/zwave_custom_cmd_classes.xml', function (context) {
    normalizer(context,  __dirname + "/config", function () {
        formatter(context, __dirname + "/src/zwave-protocol-generated", "protocol", 'COMMAND_CLASS', function () {
            var context = require('./config/zwave_serial_api_func.js');
            formatter(context, __dirname + "/src/zwave-protocol-generated", "protocol-serial", 'SERIAL_API', function () {
                fuse.bundle("protocol-zwave")
                    .instructions(`>index.js`);

                fuse.run();

                console.log("Done");
            })
        });
    });
})

