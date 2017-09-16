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
 * This file is included for testing convenience only; use dist folder for production
 *
 */

//module.exports.PROTOCOL = require('./bin/protocol-zwave').default;
module.exports.PROTOCOL = require('./zwave-protocol-generated');
module.exports.Server = require('./zwave-server-middleware');

