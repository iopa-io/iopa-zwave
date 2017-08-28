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
* ZWAVE SERIAL API FUNC, HAND-CODED AS INPUT TO CODE GENERATION
* There is no matching XML, unlike zwave_custom_cmd_classes
*
* Please submit pull request to this file to add to it,
* then npm run build
*
*/

module.exports = {
    SERIAL_API: {
        'SERIAL_API_FUNC':
        {
            version: 5,
            name: 'SERIAL_API_FUNC',
            help: 'Z-Wave Serial API Function Class',
            id: 1,
            COMMAND: {
                0x02: {
                    id: 0x02, name: 'GET_INIT_DATA',
                    param: {},
                    response: {
                        '0': {
                            name: 'zwave.SerialApiVersion',
                            type: 'BYTE',
                            showhex: true
                        },
                        '1': {
                            name: 'BitMask',
                            type: 'BITMASK',
                            bitflag:
                            {
                                1: "zwave.IsSlaveApi",
                                2: "zwave.HasTimerSupport",
                                3: "zwave.IsSecondaryController",
                                4: "zwave.IsStaticUpdateController"
                            },
                            len: 1,
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0,
                        }, '2':
                        {
                            name: 'Properties1',
                            type: 'STRUCT_BYTE',
                            bitfield:
                            {
                                '31': { fieldname: 'zwave.NumberOfNodes', shifter: 0 },
                                '96': { fieldname: 'Reserved', shifter: 5 }
                            },
                        },
                        '3':
                        {
                            name: 'zwave.NodesAvailable',
                            type: 'BITMASK',
                            showhex: true,
                            lengthoffset: 2,
                            lengthmask: 31,
                            shifter: 0
                        },
                        '4': { name: 'zwave.ChipType', type: 'BYTE', showhex: true },
                        '5': { name: 'zwave.ChipRevision', type: 'BYTE', showhex: true }
                    }
                },
                0x03: { id: 0x03, name: 'APPL_NODE_INFORMATION' },
                0x04: {
                    id: 0x04,
                    name: 'APPLICATION_COMMAND_HANDLER',
                    response: {
                        '0': {
                            type: 'BITMASK_BYTE',
                            name: 'zwave.RxStatus',
                            bitflag:
                            {
                                0: 'Single',
                                1: 'LowPower',
                                2: 'Busy',
                                3: 'Broad',
                                4: 'Multi',
                                5: 'Explore',
                                6: 'ForeignFrame'
                            }
                        },
                        '1': {
                            name: 'zwave.NodeId',
                            alias: 'SourceNode',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        },
                        '2': {
                            name: 'zwave.Length',
                            alias: 'Length',
                            type: 'BYTE',
                            showhex: true
                        },
                        '3': {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClass',
                            type: 'BYTE',
                            encaptype: 'CMD_CLASS_REF',
                            showhex: false
                        },
                        '4':
                        {
                            name: 'zwave.Command',
                            alias: 'Command',
                            type: 'BYTE',
                            encaptype: 'CMD_REF',
                            showhex: false
                        },
                        '5':
                        {
                            name: 'zwave.Payload',
                            alias: 'Data',
                            type: 'VARIANT',
                            encaptype: 'CMD_DATA',
                            sizechange: -2,
                            lengthoffset: 2,
                            lengthmask: 0,
                            shifter: 0
                        },
                    }
                },
                0x05: {
                    id: 0x05, name: 'GET_CONTROLLER_CAPABILITIES',
                    param: {},
                    response: {
                        '0': {
                            name: 'Bitmask',
                            type: 'BITMASK',
                            bitflag:
                            {
                                1: "IsSecondaryController",
                                2: "IsOnOtherNetwork",
                                3: "IsSISPresent",
                                4: "IsRealPrimary",
                                5: "IsStaticUpdateController"
                            },
                            len: 1,
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0
                        }
                    }
                },
                0x06: {
                    id: 0x06, name: 'SET_TIMEOUTS', version: '4',
                    param: {
                        '0': { name: 'zwave.RxAckTimeout', type: 'BYTE', showhex: true },
                        '1': { name: 'zwave.RxByteTimeout', type: 'BYTE', showhex: true }
                    },
                    response: {
                        '0': { name: 'zwave.PreviousRxAckTimeout', type: 'BYTE', showhex: true },
                        '1': { name: 'zwave.PreviousRxByteTimeout', type: 'BYTE', showhex: true }
                    }
                },
                0x07: {
                    id: 0x07, name: 'GET_CAPABILITIES', version: '4',
                    param: {},
                    response: {
                        '0': { name: 'zwave.SerialApiApplicationVersion', type: 'WORD', showhex: true },
                        '1': { name: 'zwave.ManufacturerId', type: 'WORD', showhex: true },
                        '2': { name: 'zwave.DeviceType', type: 'WORD', showhex: true },
                        '3': { name: 'zwave.DeviceId', type: 'WORD', showhex: true },
                        '4': {
                            name: 'zwave.SerialApiSupported',
                            type: 'BITMASK',
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0
                        }
                    }
                },
                0x08: {
                    id: 0x08,
                    name: 'SOFT_RESET',
                    version: '4',
                    param: {}
                },
                0x09: { notimpl: true, id: 0x09, name: 'GET_PROTOCOL_VERSION' },
                0x0A: { notimpl: true, id: 0x0A, name: 'STARTED' },
                0x0B: { notimpl: true, id: 0x0B, name: 'SETUP' },
                0x0C: { notimpl: true, id: 0x0C, name: 'APPL_NODE_INFORMATION_CMD_CLASSES' },
                0x0E: { notimpl: true, id: 0x0E, name: 'SEND_DATA_EX' },
                0x0F: { notimpl: true, id: 0x0F, name: 'SEND_DATA_MULTI_EX' },
                0x10: { notimpl: true, id: 0x10, name: 'SET_RF_RECEIVE_MODE' },
                0x11: { notimpl: true, id: 0x11, name: 'SET_SLEEP_MODE' },
                0x12: { notimpl: true, id: 0x12, name: 'SEND_NODE_INFORMATION' },
                0x13: {
                    id: 0x13, name: 'SEND_DATA',
                    param: {
                        '0':
                        {
                            name: 'zwave.NodeId',
                            alias: 'NodeId',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        },
                        '1':
                        {
                            name: 'zwave.Length',
                            type: 'BYTE',
                            showhex: false
                        },
                        '2': {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClass',
                            type: 'BYTE',
                            encaptype: 'CMD_CLASS_REF',
                            showhex: false
                        },
                        '3':
                        {
                            name: 'zwave.Command',
                            alias: 'Command',
                            type: 'BYTE',
                            encaptype: 'CMD_REF',
                            showhex: false
                        },
                        '4':
                        {
                            name: 'zwave.Payload',
                            alias: 'Data',
                            type: 'VARIANT',
                            encaptype: 'CMD_DATA',
                            sizechange: -2,
                            lengthoffset: 1,
                            lengthmask: 255,
                            shifter: 0
                        },
                        '5':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            },
                            len: 1,
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0
                        },
                        '6':
                        {
                            name: 'zwave.CallbackId',
                            type: 'BYTE',
                            showhex: false
                        }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x14: {
                    id: 0x14, name: 'SEND_DATA_MULTI',
                    param: {
                        '0':
                        {
                            name: 'Properties1',
                            type: 'STRUCT_BYTE',
                            bitfield:
                            {
                                '31': { fieldname: 'zwave.NumberOfNodes', shifter: 0 },
                                '96': { fieldname: 'Reserved', shifter: 5 }
                            },
                        },
                        '1':
                        {
                            name: 'zwave.NodeListData',
                            type: 'BITMASK',
                            showhex: true,
                            lengthoffset: 2,
                            lengthmask: 31,
                            shifter: 0
                        },
                        '2':
                        {
                            name: 'zwave.Length',
                            alias: 'DataLength',
                            type: 'BYTE',
                            showhex: false
                        },
                        '3': {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClass',
                            type: 'BYTE',
                            encaptype: 'CMD_CLASS_REF',
                            showhex: false
                        },
                        '4':
                        {
                            name: 'zwave.Command',
                            alias: 'Command',
                            type: 'BYTE',
                            encaptype: 'CMD_REF',
                            showhex: false
                        },
                        '5':
                        {
                            name: 'zwave.Payload',
                            alias: 'Data',
                            type: 'VARIANT',
                            encaptype: 'CMD_DATA',
                            sizechange: -2,
                            lengthoffset: 255,
                            lengthmask: 255,
                            shifter: 0
                        },
                        '6':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            },
                            len: 1,
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0
                        }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x15: {
                    id: 0x15, name: 'GET_VERSION',
                    param: {},
                    response: {
                        '0':
                        {
                            name: 'zwave.Version',
                            type: 'ARRAY',
                            len: 12,
                            is_ascii: true
                        },
                        '1': {
                            name: 'zwave.LibraryType',
                            type: 'CONST',
                            optionaloffs: 1,
                            optionalmask: 2,
                            const:
                            {
                                0x00: 'NoLib',
                                0x01: "ControllerStaticLib",
                                0x02: "ControllerLib",
                                0x03: "SlaveEnhancedLib",
                                0x04: "SlaveLib",
                                0x05: "InstallerLib",
                                0x06: "SlaveRoutingLib",
                                0x07: "ControllerBridgeLib"
                            }
                        }
                    }
                },
                0x16: {
                    id: 0x16, name: 'SEND_DATA_ABORT', version: '4',
                    param: {},
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x17: { notimpl: true, id: 0x17, name: 'RF_POWER_LEVEL_SET', version: '4' },
                0x18: {
                    id: 0x18, name: 'SEND_DATA_META', version: '4',
                    param: {
                        '0':
                        {
                            name: 'zwave.NodeId',
                            alias: 'NodeId',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        },
                        '1':
                        {
                            name: 'zwave.Length',
                            alias: 'DataLength',
                            type: 'BYTE',
                            showhex: false
                        },
                        '2': {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClass',
                            type: 'BYTE',
                            encaptype: 'CMD_CLASS_REF',
                            showhex: false
                        },
                        '3':
                        {
                            name: 'zwave.Command',
                            alias: 'Command',
                            type: 'BYTE',
                            encaptype: 'CMD_REF',
                            showhex: false
                        },
                        '4':
                        {
                            name: 'zwave.Payload',
                            alias: 'Data',
                            type: 'VARIANT',
                            encaptype: 'CMD_DATA',
                            sizechange: -2,
                            lengthoffset: 1,
                            lengthmask: 255,
                            shifter: 0
                        },
                        '5':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            },
                            len: 1,
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0
                        }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x19: { notimpl: true, id: 0x19, name: 'RESERVED_SD' },
                0x1A: { notimpl: true, id: 0x1A, name: 'RESERVED_SDM' },
                0x1B: { notimpl: true, id: 0x1B, name: 'RESERVED_SRI' },
                0x1B: { notimpl: true, id: 0x1B, name: 'SET_ROUTING_INFO' },
                0x1C: { notimpl: true, id: 0x1C, name: 'GET_RANDOM' },
                0x1D: { notimpl: true, id: 0x1D, name: 'RANDOM' },
                0x1E: { notimpl: true, id: 0x1E, name: 'RF_POWER_LEVEL_REDISCOVERY_SET' },
                0x20: {
                    id: 0x20, name: 'MEMORY_GET_ID', comment: "Get Home Id",
                    param: {},
                    response: {
                        '0': {
                            name: 'zwave.HomeId',
                            type: 'ARRAY',
                            len: 4,
                            is_ascii: false,
                            showhex: true
                        },
                        '1': {
                            name: 'zwave.OwnNodeId',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        }
                    }
                },
                0x21: { notimpl: true, id: 0x21, name: 'MEMORY_GET_BYTE' },
                0x22: { notimpl: true, id: 0x22, name: 'MEMORY_PUT_BYTE' },
                0x23: { notimpl: true, id: 0x23, name: 'MEMORY_GET_BUFFER' },
                0x24: { notimpl: true, id: 0x24, name: 'MEMORY_PUT_BUFFER' },
                0x25: { notimpl: true, id: 0x25, name: 'GET_APPL_HOST_MEMORY_OFFSET', comment: "not implemented" },
                0x26: { notimpl: true, id: 0x26, name: 'DEBUG_OUTPUT', comment: "not implemented" },
                0x27: { notimpl: true, id: 0x27, name: 'AUTO_PROGRAMMING' },
                0x28: { notimpl: true, id: 0x28, name: 'NVR_GET_VALUE' },
                0x29: { notimpl: true, id: 0x29, name: 'NVM_GET_ID' },
                0x2A: { notimpl: true, id: 0x2A, name: 'NVM_EXT_READ_LONG_BUFFER' },
                0x2B: { notimpl: true, id: 0x2B, name: 'NVM_EXT_WRITE_LONG_BUFFER' },
                0x2C: { notimpl: true, id: 0x2C, name: 'NVM_EXT_READ_LONG_BYTE' },
                0x2D: { notimpl: true, id: 0x2D, name: 'NVM_EXT_WRITE_LONG_BYTE' },
                0x2E: { notimpl: true, id: 0x2E, name: 'NVM_BACKUP_RESTORE' },
                0x2F: { notimpl: true, id: 0x2F, name: 'NVR_GET_APP_VALUE' },
                0x30: { notimpl: true, id: 0x30, name: 'CLOCK_SET' },
                0x31: { notimpl: true, id: 0x31, name: 'CLOCK_GET' },
                0x32: { notimpl: true, id: 0x32, name: 'CLOCK_CMP' },
                0x33: { notimpl: true, id: 0x33, name: 'RTC_TIMER_CREATE' },
                0x34: { notimpl: true, id: 0x34, name: 'RTC_TIMER_READ' },
                0x35: { notimpl: true, id: 0x35, name: 'RTC_TIMER_DELETE' },
                0x36: { notimpl: true, id: 0x36, name: 'RTC_TIMER_CALL' },
                0x37: { notimpl: true, id: 0x37, name: 'CLEAR_TX_TIMERS' },
                0x38: { notimpl: true, id: 0x38, name: 'GET_TX_TIMERS' },
                0x39: { notimpl: true, id: 0x39, name: 'CLEAR_NETWORK_STATS' },
                0x3A: { notimpl: true, id: 0x3A, name: 'GET_NETWORK_STATS' },
                0x3B: { notimpl: true, id: 0x3B, name: 'GET_BACKGROUND_RSSI' },
                0x3C: { notimpl: true, id: 0x3C, name: 'SET_LISTEN_BEFORE_TALK_THRESHOLD' },
                0x3F: { notimpl: true, id: 0x3F, name: 'REMOVE_NODE_ID_FROM_NETWORK' },
                0x40: { notimpl: true, id: 0x40, name: 'SET_LEARN_NODE_STATE' },
                0x41: {
                    id: 0x41, name: 'GET_NODE_PROTOCOL_INFO',
                    param: { '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false } },
                    response:
                    {
                        '0':
                        {
                            name: 'Capability',
                            type: 'STRUCT_BYTE',
                            fieldenum:
                            {
                                '0':
                                {
                                    fieldname: 'zwave.ProtocolVersion',
                                    fieldmask: 7,
                                    shifter: 0,
                                    fieldenum:
                                    {
                                        '0': 'Reserved',
                                        '1': 'Version20',
                                        '2': 'VersionZdk50xZdk42x',
                                        '3': 'VersionZdk45xAndZdk60x',
                                        '4': 'Reserved',
                                        '5': 'Reserved',
                                        '6': 'Reserved',
                                        '7': 'Reserved'
                                    }
                                },
                                '1':
                                {
                                    fieldname: 'zwave.MaxBaudRate',
                                    fieldmask: 56,
                                    shifter: 3,
                                    fieldenum: { '0': 'Reserved', '1': '96Kbps', '2': '40Kbps' }
                                }
                            },
                            bitflag: { '64': 'Routing', '128': 'Listening' }
                        },
                        '1':
                        {
                            name: 'zwave.Security',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '1': 'Security',
                                '2': 'Controller',
                                '4': 'SpecificDevice',
                                '8': 'RoutingSlave',
                                '16': 'BeamCapability',
                                '32': 'Sensor250ms',
                                '64': 'Sensor1000ms',
                                '128': 'OptionalFunctionality'
                            }
                        },
                        '2':
                        {
                            name: 'Properties1',
                            type: 'STRUCT_BYTE',
                            fieldenum:
                            {
                                '0':
                                {
                                    fieldname: 'zwave.SpeedExtension',
                                    fieldmask: 7,
                                    shifter: 0,
                                    fieldenum: { '0': 'Reserved', '1': '100Kbps', '2': '200Kbps' }
                                }
                            },
                            bitfield: { '248': { fieldname: 'Reserved2', shifter: 3 } }
                        },
                        '3':
                        {
                            name: 'zwave.BasicDevice',
                            type: 'CONST',
                            optionaloffs: 1,
                            optionalmask: 2,
                            const:
                            {
                                '1': 'Controller',
                                '2': 'StaticController',
                                '3': 'Slave',
                                '4': 'RoutingSlave'
                            }
                        },
                        '4':
                        {
                            name: 'zwave.GenericDevice',
                            alias: 'GenericDeviceClass',
                            type: 'CONST',
                            encaptype: 'GEN_DEV_REF',
                            const:
                            {
                                '1': 'GenericController',
                                '2': 'StaticController',
                                '3': 'AvControlPoint',
                                '4': 'Display',
                                '5': 'NetworkExtender',
                                '6': 'Appliance',
                                '7': 'SensorNotification',
                                '8': 'Thermostat',
                                '9': 'WindowCovering',
                                '15': 'RepeaterSlave',
                                '16': 'SwitchBinary',
                                '17': 'SwitchMultilevel',
                                '18': 'SwitchRemote',
                                '19': 'SwitchToggle',
                                '21': 'ZipNode',
                                '22': 'Ventilation',
                                '23': 'SecurityPanel',
                                '24': 'WallController',
                                '32': 'SensorBinary',
                                '33': 'SensorMultilevel',
                                '48': 'MeterPulse',
                                '49': 'Meter',
                                '64': 'EntryControl',
                                '80': 'SemiInteroperable',
                                '161': 'SensorAlarm',
                                '255': 'NonInteroperable'
                            }
                        },
                        '5':
                        {
                            name: 'zwave.SpecificDevice',
                            alias: 'SpecificDeviceClass',
                            type: 'MULTI_ARRAY',
                            encaptype: 'SPEC_DEV_REF',
                            multi_array:
                            [{
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '4': 'SatelliteReceiver',
                                    '17': 'SatelliteReceiverV2',
                                    '18': 'Doorbell'
                                },
                                ref: 3
                            },
                            { bitflag: { '0': 'NotUsed', '1': 'SimpleDisplay' }, ref: 4 },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'DoorLock',
                                    '2': 'AdvancedDoorLock',
                                    '3': 'SecureKeypadDoorLock',
                                    '4': 'SecureKeypadDoorLockDeadbolt',
                                    '5': 'SecureDoor',
                                    '6': 'SecureGate',
                                    '7': 'SecureBarrierAddon',
                                    '8': 'SecureBarrierOpenOnly',
                                    '9': 'SecureBarrierCloseOnly',
                                    '10': 'SecureLockbox',
                                    '11': 'SecureKeypad'
                                },
                                ref: 64
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PortableRemoteController',
                                    '2': 'PortableSceneController',
                                    '3': 'PortableInstallerTool',
                                    '4': 'RemoteControlAv',
                                    '6': 'RemoteControlSimple'
                                },
                                ref: 1
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'SimpleMeter',
                                    '2': 'AdvEnergyControl',
                                    '3': 'WholeHomeMeterSimple'
                                },
                                ref: 49
                            },
                            { bitflag: { '0': 'NotUsed' }, ref: 48 },
                            { bitflag: { '0': 'NotUsed' }, ref: 0 },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'RepeaterSlave', '2': 'VirtualNode' },
                                ref: 15
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'ZonedSecurityPanel' },
                                ref: 23
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'EnergyProduction' },
                                ref: 80
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'BasicRoutingAlarmSensor',
                                    '2': 'RoutingAlarmSensor',
                                    '3': 'BasicZensorNetAlarmSensor',
                                    '4': 'ZensorNetAlarmSensor',
                                    '5': 'AdvZensorNetAlarmSensor',
                                    '6': 'BasicRoutingSmokeSensor',
                                    '7': 'RoutingSmokeSensor',
                                    '8': 'BasicZensorNetSmokeSensor',
                                    '9': 'ZensorNetSmokeSensor',
                                    '10': 'AdvZensorNetSmokeSensor',
                                    '11': 'AlarmSensor'
                                },
                                ref: 161
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'RoutingSensorBinary' },
                                ref: 32
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'RoutingSensorMultilevel',
                                    '2': 'ChimneyFan'
                                },
                                ref: 33
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PcController',
                                    '2': 'SceneController',
                                    '3': 'StaticInstallerTool',
                                    '4': 'SetTopBox',
                                    '5': 'SubSystemController',
                                    '6': 'Tv',
                                    '7': 'Gateway'
                                },
                                ref: 2
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PowerSwitchBinary',
                                    '2': 'ColorTunableBinary',
                                    '3': 'SceneSwitchBinary',
                                    '4': 'PowerStrip',
                                    '5': 'Siren',
                                    '6': 'ValveOpenClose',
                                    '7': 'IrrigationController'
                                },
                                ref: 16
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PowerSwitchMultilevel',
                                    '2': 'ColorTunableMultilevel',
                                    '3': 'MotorMultiposition',
                                    '4': 'SceneSwitchMultilevel',
                                    '5': 'ClassAMotorControl',
                                    '6': 'ClassBMotorControl',
                                    '7': 'ClassCMotorControl',
                                    '8': 'FanSwitch'
                                },
                                ref: 17
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'SwitchRemoteBinary',
                                    '2': 'SwitchRemoteMultilevel',
                                    '3': 'SwitchRemoteToggleBinary',
                                    '4': 'SwitchRemoteToggleMultilevel'
                                },
                                ref: 18
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'SwitchToggleBinary',
                                    '2': 'SwitchToggleMultilevel'
                                },
                                ref: 19
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'ThermostatHeating',
                                    '2': 'ThermostatGeneral',
                                    '3': 'SetbackScheduleThermostat',
                                    '4': 'SetpointThermostat',
                                    '5': 'SetbackThermostat',
                                    '6': 'ThermostatGeneralV2'
                                },
                                ref: 8
                            },
                            { bitflag: { '0': 'NotUsed', '1': 'ResidentialHrv' }, ref: 22 },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'SimpleWindowCovering' },
                                ref: 9
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'ZipTunNode', '2': 'ZipAdvNode' },
                                ref: 21
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'BasicWallController' },
                                ref: 24
                            },
                            { bitflag: { '0': 'NotUsed', '1': 'SecureExtender' }, ref: 5 },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'GeneralAppliance',
                                    '2': 'KitchenAppliance',
                                    '3': 'LaundryAppliance'
                                },
                                ref: 6
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'NotificationSensor' },
                                ref: 7
                            }],
                            paramdescloc: { param: 4, paramdesc: 255, paramstart: 4 }
                        },
                        '6':
                        {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClasses',
                            type: 'ENUM_ARRAY',
                            encaptype: 'CMD_CLASS_REF',
                            enum:
                            {
                                '0': 'NoOperation',
                                '1': 'Class',
                                '2': 'ZensorNet',
                                '32': 'Basic',
                                '33': 'ControllerReplication',
                                '34': 'ApplicationStatus',
                                '35': 'Zip',
                                '36': 'SecurityPanelMode',
                                '37': 'SwitchBinary',
                                '38': 'SwitchMultilevel',
                                '39': 'SwitchAll',
                                '40': 'SwitchToggleBinary',
                                '41': 'SwitchToggleMultilevel',
                                '42': 'ChimneyFan',
                                '43': 'SceneActivation',
                                '44': 'SceneActuatorConf',
                                '45': 'SceneControllerConf',
                                '46': 'SecurityPanelZone',
                                '47': 'SecurityPanelZoneSensor',
                                '48': 'SensorBinary',
                                '49': 'SensorMultilevel',
                                '50': 'Meter',
                                '51': 'SwitchColor',
                                '52': 'NetworkManagementInclusion',
                                '53': 'MeterPulse',
                                '54': 'BasicTariffInfo',
                                '55': 'HrvStatus',
                                '56': 'ThermostatHeating',
                                '57': 'HrvControl',
                                '58': 'DcpConfig',
                                '59': 'DcpMonitor',
                                '60': 'MeterTblConfig',
                                '61': 'MeterTblMonitor',
                                '62': 'MeterTblPush',
                                '63': 'Prepayment',
                                '64': 'ThermostatMode',
                                '65': 'PrepaymentEncapsulation',
                                '66': 'ThermostatOperatingState',
                                '67': 'ThermostatSetpoint',
                                '68': 'ThermostatFanMode',
                                '69': 'ThermostatFanState',
                                '70': 'ClimateControlSchedule',
                                '71': 'ThermostatSetback',
                                '72': 'RateTblConfig',
                                '73': 'RateTblMonitor',
                                '74': 'TariffConfig',
                                '75': 'TariffTblMonitor',
                                '76': 'DoorLockLogging',
                                '77': 'NetworkManagementBasic',
                                '78': 'ScheduleEntryLock',
                                '79': 'Zip6lowpan',
                                '80': 'BasicWindowCovering',
                                '81': 'MtpWindowCovering',
                                '82': 'NetworkManagementProxy',
                                '83': 'Schedule',
                                '84': 'NetworkManagementPrimary',
                                '85': 'TransportService',
                                '86': 'Crc16Encap',
                                '87': 'ApplicationCapability',
                                '88': 'ZipNd',
                                '89': 'AssociationGrpInfo',
                                '90': 'DeviceResetLocally',
                                '91': 'CentralScene',
                                '92': 'IpAssociation',
                                '93': 'Antitheft',
                                '94': 'ZwaveplusInfo',
                                '95': 'ZipGateway',
                                '96': 'MultiChannel',
                                '97': 'ZipPortal',
                                '98': 'DoorLock',
                                '99': 'UserCode',
                                '100': 'HumidityControlSetpoint',
                                '101': 'Dmx',
                                '102': 'BarrierOperator',
                                '103': 'NetworkManagementInstallationMaintenance',
                                '104': 'ZipNaming',
                                '105': 'Mailbox',
                                '106': 'WindowCovering',
                                '107': 'Irrigation',
                                '108': 'Supervision',
                                '109': 'HumidityControlMode',
                                '110': 'HumidityControlOperatingState',
                                '111': 'EntryControl',
                                '112': 'Configuration',
                                '113': 'Alarm',
                                '114': 'ManufacturerSpecific',
                                '115': 'Powerlevel',
                                '116': 'InclusionController',
                                '117': 'Protection',
                                '118': 'Lock',
                                '119': 'NodeNaming',
                                '122': 'FirmwareUpdateMd',
                                '123': 'GroupingName',
                                '124': 'RemoteAssociationActivate',
                                '125': 'RemoteAssociation',
                                '128': 'Battery',
                                '129': 'Clock',
                                '130': 'Hail',
                                '132': 'WakeUp',
                                '133': 'Association',
                                '134': 'Version',
                                '135': 'Indicator',
                                '136': 'Proprietary',
                                '137': 'Language',
                                '138': 'Time',
                                '139': 'TimeParameters',
                                '140': 'GeographicLocation',
                                '142': 'MultiChannelAssociation',
                                '143': 'MultiCmd',
                                '144': 'EnergyProduction',
                                '145': 'ManufacturerProprietary',
                                '146': 'ScreenMd',
                                '147': 'ScreenAttributes',
                                '148': 'SimpleAvControl',
                                '149': 'AvContentDirectoryMd',
                                '150': 'AvRendererStatus',
                                '151': 'AvContentSearchMd',
                                '152': 'Security',
                                '153': 'AvTaggingMd',
                                '154': 'IpConfiguration',
                                '155': 'AssociationCommandConfiguration',
                                '156': 'SensorAlarm',
                                '157': 'SilenceAlarm',
                                '158': 'SensorConfiguration',
                                '159': 'Security2',
                                '239': 'Mark',
                                '240': 'NonInteroperable'
                            }
                        }
                    }
                },
                0x42: { notimpl: true, id: 0x42, name: 'SET_DEFAULT' },
                0x43: { notimpl: true, id: 0x43, name: 'NEW_CONTROLLER' },
                0x44: { notimpl: true, id: 0x44, name: 'REPLICATION_COMMAND_COMPLETE' },
                0x45: {
                    id: 0x45, name: 'REPLICATION_SEND_DATA',
                    comment: 'Used when the controller is in replication mode. It sends the payload and '
                    + 'expects the receiver to respond with a command complete message (REPLICATION_COMMAND_COMPLETE).'
                    + 'Messages sent using this command should always be part of the Z-Wave controller'
                    + 'replication command class.',
                    param: {
                        '0':
                        {
                            name: 'zwave.NodeId',
                            alias: 'NodeId',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        },
                        '1':
                        {
                            name: 'zwave.Length',
                            alias: 'DataLength',
                            type: 'BYTE',
                            showhex: false
                        },
                        '2': {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClass',
                            type: 'BYTE',
                            encaptype: 'CMD_CLASS_REF',
                            showhex: false
                        },
                        '3':
                        {
                            name: 'zwave.Command',
                            alias: 'Command',
                            type: 'BYTE',
                            encaptype: 'CMD_REF',
                            showhex: false
                        },
                        '4':
                        {
                            name: 'zwave.Payload',
                            alias: 'Data',
                            type: 'VARIANT',
                            encaptype: 'CMD_DATA',
                            sizechange: -2,
                            lengthoffset: 1,
                            lengthmask: 255,
                            shifter: 0
                        },
                        '3':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            },
                            len: 1,
                            lengthoffset: 255,
                            lengthmask: 0,
                            shifter: 0
                        }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x46: {
                    id: 0x46, name: 'ASSIGN_RETURN_ROUTE',
                    param: {
                        '0': { name: 'zwave.NodeId', alias: 'SourceNodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false },
                        '1': { name: 'zwave.DestinationNodeId', alias: 'DestinationNodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x47: {
                    id: 0x47, name: 'DELETE_RETURN_ROUTE',
                    comment: 'Delete all static return routes from a Routing Slave node or Enhanced Slave node. ',
                    param: { '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false } },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x48: {
                    id: 0x48, name: 'REQUEST_NODE_NEIGHBOR_UPDATE',
                    param: { '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false } },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                /*    '0x49-OLD': { id: 0x49, name: 'APPLICATION_CONTROLLER_UPDATE', comment: "obsolete use ZW_APPLICATION_UPDATE" }, */
                0x49: {
                    notimpl: true, id: 0x49, name: 'APPLICATION_UPDATE',
                    response: {
                        '0': {
                            name: 'zwave.UpdateStatus',
                            type: 'CONST',
                            const:
                            {
                                0x84: "NodeInfoReceived",
                                0x82: "NodeInfoReqDone",
                                0x81: "NodeInfoReqFailed",
                                0x80: "RoutingPending",
                                0x40: "NewIdAssigned",
                                0x20: "DeleteDone",
                                0x10: "SucId"

                            },
                        },
                        '1': {
                            name: 'zwave.NodeId',
                            alias: 'SourceNode',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        },
                        '2': {
                            name: 'zwave.Length',
                            alias: 'Length',
                            type: 'BYTE',
                            showhex: true
                        },
                        '3':
                        {
                            name: 'zwave.BasicDevice',
                            type: 'CONST',
                            optionaloffs: 1,
                            optionalmask: 2,
                            const:
                            {
                                '1': 'Controller',
                                '2': 'StaticController',
                                '3': 'Slave',
                                '4': 'RoutingSlave'
                            }
                        },
                        '4':
                        {
                            name: 'zwave.GenericDevice',
                            alias: 'GenericDeviceClass',
                            type: 'CONST',
                            encaptype: 'GEN_DEV_REF',
                            const:
                            {
                                '1': 'GenericController',
                                '2': 'StaticController',
                                '3': 'AvControlPoint',
                                '4': 'Display',
                                '5': 'NetworkExtender',
                                '6': 'Appliance',
                                '7': 'SensorNotification',
                                '8': 'Thermostat',
                                '9': 'WindowCovering',
                                '15': 'RepeaterSlave',
                                '16': 'SwitchBinary',
                                '17': 'SwitchMultilevel',
                                '18': 'SwitchRemote',
                                '19': 'SwitchToggle',
                                '21': 'ZipNode',
                                '22': 'Ventilation',
                                '23': 'SecurityPanel',
                                '24': 'WallController',
                                '32': 'SensorBinary',
                                '33': 'SensorMultilevel',
                                '48': 'MeterPulse',
                                '49': 'Meter',
                                '64': 'EntryControl',
                                '80': 'SemiInteroperable',
                                '161': 'SensorAlarm',
                                '255': 'NonInteroperable'
                            }
                        },
                        '5':
                        {
                            name: 'zwave.SpecificDevice',
                            alias: 'SpecificDeviceClass',
                            type: 'MULTI_ARRAY',
                            encaptype: 'SPEC_DEV_REF',
                            multi_array:
                            [{
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '4': 'SatelliteReceiver',
                                    '17': 'SatelliteReceiverV2',
                                    '18': 'Doorbell'
                                },
                                ref: 3
                            },
                            { bitflag: { '0': 'NotUsed', '1': 'SimpleDisplay' }, ref: 4 },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'DoorLock',
                                    '2': 'AdvancedDoorLock',
                                    '3': 'SecureKeypadDoorLock',
                                    '4': 'SecureKeypadDoorLockDeadbolt',
                                    '5': 'SecureDoor',
                                    '6': 'SecureGate',
                                    '7': 'SecureBarrierAddon',
                                    '8': 'SecureBarrierOpenOnly',
                                    '9': 'SecureBarrierCloseOnly',
                                    '10': 'SecureLockbox',
                                    '11': 'SecureKeypad'
                                },
                                ref: 64
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PortableRemoteController',
                                    '2': 'PortableSceneController',
                                    '3': 'PortableInstallerTool',
                                    '4': 'RemoteControlAv',
                                    '6': 'RemoteControlSimple'
                                },
                                ref: 1
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'SimpleMeter',
                                    '2': 'AdvEnergyControl',
                                    '3': 'WholeHomeMeterSimple'
                                },
                                ref: 49
                            },
                            { bitflag: { '0': 'NotUsed' }, ref: 48 },
                            { bitflag: { '0': 'NotUsed' }, ref: 0 },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'RepeaterSlave', '2': 'VirtualNode' },
                                ref: 15
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'ZonedSecurityPanel' },
                                ref: 23
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'EnergyProduction' },
                                ref: 80
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'BasicRoutingAlarmSensor',
                                    '2': 'RoutingAlarmSensor',
                                    '3': 'BasicZensorNetAlarmSensor',
                                    '4': 'ZensorNetAlarmSensor',
                                    '5': 'AdvZensorNetAlarmSensor',
                                    '6': 'BasicRoutingSmokeSensor',
                                    '7': 'RoutingSmokeSensor',
                                    '8': 'BasicZensorNetSmokeSensor',
                                    '9': 'ZensorNetSmokeSensor',
                                    '10': 'AdvZensorNetSmokeSensor',
                                    '11': 'AlarmSensor'
                                },
                                ref: 161
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'RoutingSensorBinary' },
                                ref: 32
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'RoutingSensorMultilevel',
                                    '2': 'ChimneyFan'
                                },
                                ref: 33
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PcController',
                                    '2': 'SceneController',
                                    '3': 'StaticInstallerTool',
                                    '4': 'SetTopBox',
                                    '5': 'SubSystemController',
                                    '6': 'Tv',
                                    '7': 'Gateway'
                                },
                                ref: 2
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PowerSwitchBinary',
                                    '2': 'ColorTunableBinary',
                                    '3': 'SceneSwitchBinary',
                                    '4': 'PowerStrip',
                                    '5': 'Siren',
                                    '6': 'ValveOpenClose',
                                    '7': 'IrrigationController'
                                },
                                ref: 16
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'PowerSwitchMultilevel',
                                    '2': 'ColorTunableMultilevel',
                                    '3': 'MotorMultiposition',
                                    '4': 'SceneSwitchMultilevel',
                                    '5': 'ClassAMotorControl',
                                    '6': 'ClassBMotorControl',
                                    '7': 'ClassCMotorControl',
                                    '8': 'FanSwitch'
                                },
                                ref: 17
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'SwitchRemoteBinary',
                                    '2': 'SwitchRemoteMultilevel',
                                    '3': 'SwitchRemoteToggleBinary',
                                    '4': 'SwitchRemoteToggleMultilevel'
                                },
                                ref: 18
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'SwitchToggleBinary',
                                    '2': 'SwitchToggleMultilevel'
                                },
                                ref: 19
                            },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'ThermostatHeating',
                                    '2': 'ThermostatGeneral',
                                    '3': 'SetbackScheduleThermostat',
                                    '4': 'SetpointThermostat',
                                    '5': 'SetbackThermostat',
                                    '6': 'ThermostatGeneralV2'
                                },
                                ref: 8
                            },
                            { bitflag: { '0': 'NotUsed', '1': 'ResidentialHrv' }, ref: 22 },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'SimpleWindowCovering' },
                                ref: 9
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'ZipTunNode', '2': 'ZipAdvNode' },
                                ref: 21
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'BasicWallController' },
                                ref: 24
                            },
                            { bitflag: { '0': 'NotUsed', '1': 'SecureExtender' }, ref: 5 },
                            {
                                bitflag:
                                {
                                    '0': 'NotUsed',
                                    '1': 'GeneralAppliance',
                                    '2': 'KitchenAppliance',
                                    '3': 'LaundryAppliance'
                                },
                                ref: 6
                            },
                            {
                                bitflag: { '0': 'NotUsed', '1': 'NotificationSensor' },
                                ref: 7
                            }],
                            paramdescloc: { param: 4, paramdesc: 255, paramstart: 4 }
                        },
                        '6':
                        {
                            name: 'zwave.CommandClass',
                            alias: 'CommandClasses',
                            type: 'ENUM_ARRAY',
                            encaptype: 'CMD_CLASS_REF',
                            enum:
                            {
                                '0': 'NoOperation',
                                '1': 'Class',
                                '2': 'ZensorNet',
                                '32': 'Basic',
                                '33': 'ControllerReplication',
                                '34': 'ApplicationStatus',
                                '35': 'Zip',
                                '36': 'SecurityPanelMode',
                                '37': 'SwitchBinary',
                                '38': 'SwitchMultilevel',
                                '39': 'SwitchAll',
                                '40': 'SwitchToggleBinary',
                                '41': 'SwitchToggleMultilevel',
                                '42': 'ChimneyFan',
                                '43': 'SceneActivation',
                                '44': 'SceneActuatorConf',
                                '45': 'SceneControllerConf',
                                '46': 'SecurityPanelZone',
                                '47': 'SecurityPanelZoneSensor',
                                '48': 'SensorBinary',
                                '49': 'SensorMultilevel',
                                '50': 'Meter',
                                '51': 'SwitchColor',
                                '52': 'NetworkManagementInclusion',
                                '53': 'MeterPulse',
                                '54': 'BasicTariffInfo',
                                '55': 'HrvStatus',
                                '56': 'ThermostatHeating',
                                '57': 'HrvControl',
                                '58': 'DcpConfig',
                                '59': 'DcpMonitor',
                                '60': 'MeterTblConfig',
                                '61': 'MeterTblMonitor',
                                '62': 'MeterTblPush',
                                '63': 'Prepayment',
                                '64': 'ThermostatMode',
                                '65': 'PrepaymentEncapsulation',
                                '66': 'ThermostatOperatingState',
                                '67': 'ThermostatSetpoint',
                                '68': 'ThermostatFanMode',
                                '69': 'ThermostatFanState',
                                '70': 'ClimateControlSchedule',
                                '71': 'ThermostatSetback',
                                '72': 'RateTblConfig',
                                '73': 'RateTblMonitor',
                                '74': 'TariffConfig',
                                '75': 'TariffTblMonitor',
                                '76': 'DoorLockLogging',
                                '77': 'NetworkManagementBasic',
                                '78': 'ScheduleEntryLock',
                                '79': 'Zip6lowpan',
                                '80': 'BasicWindowCovering',
                                '81': 'MtpWindowCovering',
                                '82': 'NetworkManagementProxy',
                                '83': 'Schedule',
                                '84': 'NetworkManagementPrimary',
                                '85': 'TransportService',
                                '86': 'Crc16Encap',
                                '87': 'ApplicationCapability',
                                '88': 'ZipNd',
                                '89': 'AssociationGrpInfo',
                                '90': 'DeviceResetLocally',
                                '91': 'CentralScene',
                                '92': 'IpAssociation',
                                '93': 'Antitheft',
                                '94': 'ZwaveplusInfo',
                                '95': 'ZipGateway',
                                '96': 'MultiChannel',
                                '97': 'ZipPortal',
                                '98': 'DoorLock',
                                '99': 'UserCode',
                                '100': 'HumidityControlSetpoint',
                                '101': 'Dmx',
                                '102': 'BarrierOperator',
                                '103': 'NetworkManagementInstallationMaintenance',
                                '104': 'ZipNaming',
                                '105': 'Mailbox',
                                '106': 'WindowCovering',
                                '107': 'Irrigation',
                                '108': 'Supervision',
                                '109': 'HumidityControlMode',
                                '110': 'HumidityControlOperatingState',
                                '111': 'EntryControl',
                                '112': 'Configuration',
                                '113': 'Alarm',
                                '114': 'ManufacturerSpecific',
                                '115': 'Powerlevel',
                                '116': 'InclusionController',
                                '117': 'Protection',
                                '118': 'Lock',
                                '119': 'NodeNaming',
                                '122': 'FirmwareUpdateMd',
                                '123': 'GroupingName',
                                '124': 'RemoteAssociationActivate',
                                '125': 'RemoteAssociation',
                                '128': 'Battery',
                                '129': 'Clock',
                                '130': 'Hail',
                                '132': 'WakeUp',
                                '133': 'Association',
                                '134': 'Version',
                                '135': 'Indicator',
                                '136': 'Proprietary',
                                '137': 'Language',
                                '138': 'Time',
                                '139': 'TimeParameters',
                                '140': 'GeographicLocation',
                                '142': 'MultiChannelAssociation',
                                '143': 'MultiCmd',
                                '144': 'EnergyProduction',
                                '145': 'ManufacturerProprietary',
                                '146': 'ScreenMd',
                                '147': 'ScreenAttributes',
                                '148': 'SimpleAvControl',
                                '149': 'AvContentDirectoryMd',
                                '150': 'AvRendererStatus',
                                '151': 'AvContentSearchMd',
                                '152': 'Security',
                                '153': 'AvTaggingMd',
                                '154': 'IpConfiguration',
                                '155': 'AssociationCommandConfiguration',
                                '156': 'SensorAlarm',
                                '157': 'SilenceAlarm',
                                '158': 'SensorConfiguration',
                                '159': 'Security2',
                                '239': 'Mark',
                                '240': 'NonInteroperable'
                            }
                        }
                    }

                },
                0x4A: { notimpl: true, id: 0x4A, name: 'ADD_NODE_TO_NETWORK' },
                0x4B: { notimpl: true, id: 0x4B, name: 'REMOVE_NODE_FROM_NETWORK' },
                0x4C: { notimpl: true, id: 0x4C, name: 'CREATE_NEW_PRIMARY' },
                0x4D: { notimpl: true, id: 0x4D, name: 'CONTROLLER_CHANGE' },
                0x4E: { notimpl: true, id: 0x4E, name: 'RESERVED_FN' },
                0x4F: { notimpl: true, id: 0x4F, name: 'ASSIGN_PRIORITY_RETURN_ROUTE', comment: 'Devkit 6.6x' },
                0x50: { notimpl: true, id: 0x50, name: 'SET_LEARN_MODE', comment: 'slave only' },
                0x51: {
                    id: 0x51, name: 'ASSIGN_SUC_RETURN_ROUTE',
                    comment: 'Used to assign a route between a routing slave and the SUC node. This route is used when routing slave want to get routes updates from the SUC node.',
                    param: { '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false } },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x52: {
                    id: 0x52, name: 'ENABLE_SUC',
                    comment: ' Enable / disable the Automatic network update functionality',
                    param: {
                        '0':
                        {
                            name: 'zwave.Enabled',
                            type: 'CONST',
                            showhex: true,
                            const: { '0': 'Disabled', '1': 'Enabled' }
                        },
                        '1':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            }
                        },
                        '2': { name: 'Capabilities', type: 'BYTE', showhex: true }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x53: {
                    id: 0x53, name: 'REQUEST_NETWORK_UPDATE',
                    param: {},
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x54: {
                    id: 0x54, name: 'SET_SUC_NODE_ID',
                    comment: 'Enable /disable a specified static controller  of functioning as the Static Update Controller',
                    param: {
                        '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false },
                        '1':
                        {
                            name: 'Enabled',
                            type: 'CONST',
                            showhex: true,
                            const: { '0': 'Disabled', '1': 'Enabled' }
                        },
                        '2':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            }
                        },
                        '3': { name: 'Capabilities', type: 'BYTE', showhex: true }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x55: {
                    id: 0x55, name: 'DELETE_SUC_RETURN_ROUTE',
                    param: { '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false } },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x56: {
                    id: 0x56, name: 'GET_SUC_NODE_ID',
                    comment: " Get the currently registered SUC node ID.return SUC node ID, ZERO if no SUC available",
                    param: {},
                    response: { '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false } },
                },
                0x57: {
                    id: 0x57, name: 'SEND_SUC_ID',
                    param: {
                        '0': { name: 'zwave.NodeId', alias: 'NodeId', type: 'BYTE', encaptype: 'NODE_NUMBER', showhex: false },
                        '1':
                        {
                            name: 'Enabled',
                            type: 'CONST',
                            showhex: true,
                            const: { '0': 'Disabled', '1': 'Enabled' }
                        },
                        '2':
                        {
                            name: 'zwave.TxOptions',
                            type: 'BITMASK_BYTE',
                            bitflag:
                            {
                                '0': 'None',
                                '1': 'LowPower',
                                '2': 'AutoRoute',
                                '3': 'Reserved',
                                '4': 'NoRoute',
                                '5': 'Explore',
                                '6': 'NoRetransmission',
                                '7': 'HighPower'
                            }
                        },
                        '3': { name: 'Capabilities', type: 'BYTE', showhex: true }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x58: { notimpl: true, id: 0x58, name: 'ASSIGN_PRIORITY_SUC_RETURN_ROUTE', comment: 'Devkit 6.6x' },
                0x59: { notimpl: true, id: 0x59, name: 'REDISCOVERY_NEEDED', comment: 'obsolete' },
                0x5A: { notimpl: true, id: 0x5A, name: 'REQUEST_NODE_NEIGHBOR_UPDATE_OPTION' },
                0x5B: { notimpl: true, id: 0x5B, name: 'SUPPORT9600_ONLY', comment: 'slave only' },
                0x5C: { notimpl: true, id: 0x5C, name: 'REQUEST_NEW_ROUTE_DESTINATIONS', comment: 'enhanced routing slave only' },
                0x5D: { notimpl: true, id: 0x5D, name: 'IS_NODE_WITHIN_DIRECT_RANGE', comment: 'enhanced routing slave only' },
                0x5E: { notimpl: true, id: 0x5E, name: 'EXPLORE_REQUEST_INCLUSION' },
                0x5F: { notimpl: true, id: 0x5F, name: 'EXPLORE_REQUEST_EXCLUSION' },
                0x60: {
                    id: 0x60, name: 'REQUEST_NODE_INFO',
                    param: {
                        '0': {
                            name: 'zwave.NodeId',
                            alias: 'NodeId',
                            type: 'BYTE',
                            encaptype: 'NODE_NUMBER',
                            showhex: false
                        }
                    },
                    response: { '0': { name: 'zwave.TxStatus', encaptype: 'TX_STATUS', type: 'CONST', const: { 0x00: 'OK', 0x01: "NoAck", 0x02: "Fail" } } }
                },
                0x61: { notimpl: true, id: 0x61, name: 'REMOVE_FAILED_NODE_ID' },
                0x62: { notimpl: true, id: 0x62, name: 'IS_FAILED_NODE_ID' },
                0x63: { notimpl: true, id: 0x63, name: 'REPLACE_FAILED_NODE' },
                0x65: { notimpl: true, id: 0x65, name: 'SET_ROUTING_MAX_6_00', comment: 'In Zensys 6.0x the function id was wrong so this wrong function id is still supported' },
                0x66: { notimpl: true, id: 0x66, name: 'IS_PRIMARY_CTRL' },
                0x67: { notimpl: true, id: 0x67, name: 'AES_ECB' },
                0x70: { notimpl: true, id: 0x70, name: 'TIMER_START' },
                0x71: { notimpl: true, id: 0x71, name: 'TIMER_RESTART' },
                0x72: { notimpl: true, id: 0x72, name: 'TIMER_CANCEL' },
                0x73: { notimpl: true, id: 0x73, name: 'TIMER_CALL' },
                0x78: { notimpl: true, id: 0x78, name: 'FIRMWARE_UPDATE_NVM', comment: 'Firmware Update API' },
                0x80: { notimpl: true, id: 0x80, name: 'GET_ROUTING_TABLE_LINE', comment: "Installer API Only" },
                0x81: { notimpl: true, id: 0x81, name: 'GET_TX_COUNTER', comment: "Installer API Only" },
                0x82: { notimpl: true, id: 0x82, name: 'RESET_TX_COUNTER', comment: "Installer API Only" },
                0x83: { notimpl: true, id: 0x83, name: 'STORE_NODEINFO', comment: "Installer API Only" },
                0x84: { notimpl: true, id: 0x84, name: 'STORE_HOMEID', comment: "Installer API Only" },
                0x90: { notimpl: true, id: 0x90, name: 'LOCK_ROUTE_RESPONSE' },
                /*  '0x92-OLD': { notimpl: true, id: 0x92, name: 'GET_LAST_WORKING_ROUTE', comment: " ZW_SetPriorityRoute/ZW_GetPriorityRoute replaces ZW_SetLastWorkingRoute/ZW_GetLastWorkingRoute" }, */
                0x92: { notimpl: true, id: 0x92, name: 'GET_PRIORITY_ROUTE' },
                /*  '0x93-OLD': { notimpl: true,  id: 0x93, name: 'SET_LAST_WORKING_ROUTE', comment: " ZW_SetPriorityRoute/ZW_GetPriorityRoute replaces ZW_SetLastWorkingRoute/ZW_GetLastWorkingRoute" }, */
                0x93: { notimpl: true, id: 0x93, name: 'SET_PRIORITY_ROUTE' },
                0x95: { notimpl: true, id: 0x95, name: 'TEST' },
                0x98: { notimpl: true, id: 0x98, name: 'EXT' },
                0x9C: { notimpl: true, id: 0x9C, name: 'SECURITY_SETUP', comment: 'slave_enhanced_232 and slave_routing only' },
                0x9D: { notimpl: true, id: 0x9D, name: 'APPLICATION_SECURITY_EVENT', comment: 'slave_enhanced_232 and slave_routing only' },
                0xA0: { notimpl: true, id: 0xA0, name: 'APPL_SLAVE_NODE_INFORMATION', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA1: { notimpl: true, id: 0xA1, name: 'APPLICATION_SLAVE_COMMAND_HANDLER', comment: 'OBSOLETE in 4.5/6.0, ZW_CONTROLLER_BRIDGE only' },
                0xA2: { notimpl: true, id: 0xA2, name: 'SEND_SLAVE_NODE_INFORMATION', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA3: { notimpl: true, id: 0xA3, name: 'SEND_SLAVE_DATA', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA4: { notimpl: true, id: 0xA4, name: 'SET_SLAVE_LEARN_MODE', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA5: { notimpl: true, id: 0xA5, name: 'GET_VIRTUAL_NODES', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA6: { notimpl: true, id: 0xA6, name: 'IS_VIRTUAL_NODE', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA7: { notimpl: true, id: 0xA7, name: 'RESERVED_SSD', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xA8: { notimpl: true, id: 0xA8, name: 'APPLICATION_COMMAND_HANDLER_BRIDGE', comment: 'for 4.5x/6.0x based Controller Bridge applications, ZW_CONTROLLER_BRIDGE only' },
                0xA9: { notimpl: true, id: 0xA9, name: 'SEND_DATA_BRIDGE', comment: 'for 4.5x/6.0x, adds sourceNodeID to the parameter list, ZW_CONTROLLER_BRIDGE only' },
                0xAA: { notimpl: true, id: 0xAA, name: 'SEND_DATA_META_BRIDGE', comment: 'OBSOLETE, ZW_CONTROLLER_BRIDGE only' },
                0xAB: { notimpl: true, id: 0xAB, name: 'SEND_DATA_MULTI_BRIDGE', comment: 'ZW_CONTROLLER_BRIDGE only' },
                0xB0: { notimpl: true, id: 0xB0, name: 'PWR_SETSTOPMODE', comment: 'ZW102 only' },
                0xB1: { notimpl: true, id: 0xB1, name: 'PWR_CLK_PD', comment: 'ZW102 only' },
                0xB2: { notimpl: true, id: 0xB2, name: 'PWR_CLK_PUP', comment: 'ZW102 only' },
                0xB3: { notimpl: true, id: 0xB3, name: 'PWR_SELECT_CLK', comment: 'ZW102 only' },
                0xB4: { notimpl: true, id: 0xB4, name: 'SET_WUT_TIMEOUT' },
                0xB5: { notimpl: true, id: 0xB5, name: 'IS_WUT_KICKED', comment: 'ZW201 only' },
                0xB6: { notimpl: true, id: 0xB6, name: 'WATCHDOG_ENABLE' },
                0xB7: { notimpl: true, id: 0xB7, name: 'WATCHDOG_DISABLE' },
                0xB8: { notimpl: true, id: 0xB8, name: 'WATCHDOG_KICK' },
                0xB9: { notimpl: true, id: 0xB9, name: 'INT_EXT_LEVEL_SET', comment: 'OBSOLETE, ZW201 only' },
                0xB9: { notimpl: true, id: 0xB9, name: 'SET_EXT_INT_LEVEL' },
                0xBA: { notimpl: true, id: 0xBA, name: 'RF_POWER_LEVEL_GET' },
                0xBB: { notimpl: true, id: 0xBB, name: 'GET_NEIGHBOR_COUNT' },
                0xBC: { notimpl: true, id: 0xBC, name: 'ARE_NODES_NEIGHBOURS' },
                0xBD: { notimpl: true, id: 0xBD, name: 'TYPE_LIBRARY' },
                0xBE: { notimpl: true, id: 0xBE, name: 'SEND_TEST_FRAME' },
                0xBF: { notimpl: true, id: 0xBF, name: 'GET_PROTOCOL_STATUS' },
                0xD0: { notimpl: true, id: 0xD0, name: 'SET_PROMISCUOUS_MODE' },
                0xD1: { notimpl: true, id: 0xD1, name: 'PROMISCUOUS_APPLICATION_COMMAND_HANDLER', version: '5' },
                0xD2: { notimpl: true, id: 0xD2, name: 'WATCHDOG_START' },
                0xD3: { notimpl: true, id: 0xD3, name: 'WATCHDOG_STOP' },
                0xD4: { notimpl: true, id: 0xD4, name: 'SET_ROUTING_MAX' },
                0xD5: { notimpl: true, id: 0xD5, name: 'GET_ROUTING_MAX', comment: 'OBSOLETE, UNIMPLEMENTED' },
                0xE0: { notimpl: true, id: 0xE0, name: 'NUNIT_CMD' },
                0xE1: { notimpl: true, id: 0xE1, name: 'NUNIT_INIT' },
                0xE2: { notimpl: true, id: 0xE2, name: 'NUNIT_LIST' },
                0xE3: { notimpl: true, id: 0xE3, name: 'NUNIT_RUN' },
                0xE4: { notimpl: true, id: 0xE4, name: 'NUNIT_END' },
                0xE5: { notimpl: true, id: 0xE5, name: 'IO_PORT_STATUS' },
                0xE6: { notimpl: true, id: 0xE6, name: 'IO_PORT' },
                0xEE: { notimpl: true, id: 0xEE, name: 'SERIAL_API_POWER_MANAGEMENT', comment: 'Allocated for Power Management' },
                0xEF: { notimpl: true, id: 0xEF, name: 'SERIAL_API_READY', comment: 'Allocated for Power Management' },
                0xF0: { notimpl: true, id: 0xF0, name: 'PROPRIETARY_0' },
                0xF1: { notimpl: true, id: 0xF1, name: 'PROPRIETARY_1' },
                0xF2: { notimpl: true, id: 0xF2, name: 'PROPRIETARY_2' },
                0xF3: { notimpl: true, id: 0xF3, name: 'PROPRIETARY_3' },
                0xF4: { notimpl: true, id: 0xF4, name: 'PROPRIETARY_4' },
                0xF5: { notimpl: true, id: 0xF5, name: 'PROPRIETARY_5' },
                0xF6: { notimpl: true, id: 0xF6, name: 'PROPRIETARY_6' },
                0xF7: { notimpl: true, id: 0xF7, name: 'PROPRIETARY_7' },
                0xF8: { notimpl: true, id: 0xF8, name: 'PROPRIETARY_8' },
                0xF9: { notimpl: true, id: 0xF9, name: 'PROPRIETARY_9' },
                0xFA: { notimpl: true, id: 0xFA, name: 'PROPRIETARY_A' },
                0xFB: { notimpl: true, id: 0xFB, name: 'PROPRIETARY_B' },
                0xFC: { notimpl: true, id: 0xFC, name: 'PROPRIETARY_C' },
                0xFD: { notimpl: true, id: 0xFD, name: 'PROPRIETARY_D' },
                0xFE: { notimpl: true, id: 0xFE, name: 'PROPRIETARY_E' },
                0xFF: { notimpl: true, id: 0xFF, name: 'UNKNOWN' }
            }
        }
    }
}