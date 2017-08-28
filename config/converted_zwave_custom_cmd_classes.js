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
 * ZWAVE CUSTOM COMMAND CLASSES PROTOCOL
 *
 * This file was system generated for IOPA Zwave (iopa-io/iopa-zwave)
 * based on the Z-Wave Public Specification at Z-WavePublic/libzwaveip
 * under the Apache License above.
 * 
 * Do not edit directly, but make a pull request instead.
 *
 */

module.exports = { BASIC_DEVICE_CLASS: 
   { '1': 
      { name: 'CONTROLLER',
        help: 'Controller',
        comment: 'Node is a portable controller ' },
     '2': 
      { name: 'STATIC_CONTROLLER',
        help: 'Static Controller',
        comment: 'Node is a static controller' },
     '3': { name: 'SLAVE', help: 'Slave', comment: 'Node is a slave' },
     '4': 
      { name: 'ROUTING_SLAVE',
        help: 'Routing Slave',
        comment: 'Node is a slave with routing capabilities' } },
  _DEVICE_CLASS: 
   { '1': 
      { name: 'GENERIC_CONTROLLER',
        help: 'Generic Controller',
        comment: 'Remote Controller',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
      GENERIC        help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'PORTABLE_REMOTE_CONTROLLER',
              help: 'Portable Remote Controller',
              comment: 'Remote Control (Multi Purpose) Device Type' },
           '2': 
            { name: 'PORTABLE_SCENE_CONTROLLER',
              help: 'Portable Scene Controller',
              comment: 'Portable Scene Controller' },
           '3': 
            { name: 'PORTABLE_INSTALLER_TOOL',
              help: 'Portable Installer Tool' },
           '4': 
            { name: 'REMOTE_CONTROL_AV',
              help: 'Remote Control AV',
              comment: 'Remote Control (AV) Device Type' },
           '6': 
            { name: 'REMOTE_CONTROL_SIMPLE',
              help: 'Remote Control Simple',
              comment: 'Remote Control (Simple) Device Type' } } },
     '2': 
      { name: 'STATIC_CONTROLLER',
        help: 'Static Controller',
        comment: 'Static Controller',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'PC_CONTROLLER',
              help: 'Pc Controller',
              comment: 'Central Controller Device Type' },
           '2': 
            { name: 'SCENE_CONTROLLER',
              help: 'Scene Controller',
              comment: 'Scene Controller' },
           '3': { name: 'STATIC_INSTALLER_TOOL', help: 'Static Installer Tool' },
           '4': 
            { name: 'SET_TOP_BOX',
              help: 'Set Top Box',
              comment: 'Set Top Box Device Type' },
           '5': 
            { name: 'SUB_SYSTEM_CONTROLLER',
              help: 'Sub System Controller',
              comment: 'Sub System Controller Device Type' },
           '6': { name: 'TV', help: 'TV', comment: 'TV Device Type' },
           '7': 
            { name: 'GATEWAY',
              help: 'Gateway',
              comment: 'Gateway Device Type' } } },
     '3': 
      { name: 'AV_CONTROL_POINT',
        help: 'Av Control Point',
        comment: 'AV Control Point',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '4': 
            { name: 'SATELLITE_RECEIVER',
              help: 'Satellite Receiver',
              comment: 'Satellite Receiver' },
           '17': 
            { name: 'SATELLITE_RECEIVER_V2',
              help: 'Satellite Receiver V2',
              comment: 'Satellite Receiver V2' },
           '18': { name: 'DOORBELL', help: 'Doorbell' } } },
     '4': 
      { name: 'DISPLAY',
        help: 'Display',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'SIMPLE_DISPLAY',
              help: 'Simple Display',
              comment: 'Display (simple) Device Type' } } },
     '5': 
      { name: 'NETWORK_EXTENDER',
        help: 'Network Extender',
        comment: 'Network Extender Generic Device Class',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'SECURE_EXTENDER',
              help: 'Secure Extender',
              comment: 'Specific Device Secure Extender' } } },
     '6': 
      { name: 'APPLIANCE',
        help: 'Appliance',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': { name: 'GENERAL_APPLIANCE', help: 'General Appliance' },
           '2': { name: 'KITCHEN_APPLIANCE', help: 'Kitchen Appliance' },
           '3': { name: 'LAUNDRY_APPLIANCE', help: 'Laundry Appliance' } } },
     '7': 
      { name: 'SENSOR_NOTIFICATION',
        help: 'Sensor Notification',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class not used' },
           '1': { name: 'NOTIFICATION_SENSOR', help: 'Notification Sensor' } } },
     '8': 
      { name: 'THERMOSTAT',
        help: 'Thermostat',
        comment: 'Thermostat',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'THERMOSTAT_HEATING',
              help: 'Thermostat Heating',
              comment: 'Thermostat Heating' },
           '2': 
            { name: 'THERMOSTAT_GENERAL',
              help: 'Thermostat General',
              comment: 'Thermostat General' },
           '3': 
            { name: 'SETBACK_SCHEDULE_THERMOSTAT',
              help: 'Setback Schedule Thermostat',
              comment: 'Setback Schedule Thermostat' },
           '4': { name: 'SETPOINT_THERMOSTAT', help: 'Setpoint Thermostat' },
           '5': 
            { name: 'SETBACK_THERMOSTAT',
              help: 'Setback Thermostat',
              comment: 'Thermostat (Setback) Device Type' },
           '6': 
            { name: 'THERMOSTAT_GENERAL_V2',
              help: 'Thermostat General V2',
              comment: 'Thermostat (HVAC) Device Type' } } },
     '9': 
      { name: 'WINDOW_COVERING',
        help: 'Window Covering',
        comment: 'Window Covering',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'SIMPLE_WINDOW_COVERING',
              help: 'Simple Window Covering',
              comment: 'Simple Window Covering Control' } } },
     '15': 
      { name: 'REPEATER_SLAVE',
        help: 'Repeater Slave',
        comment: 'Repeater Slave',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'REPEATER_SLAVE',
              help: 'Repeater Slave',
              comment: 'Basic Repeater Slave' },
           '2': { name: 'VIRTUAL_NODE', help: 'Virtual Node' } } },
     '16': 
      { name: 'SWITCH_BINARY',
        help: 'Switch Binary',
        comment: 'Binary Switch',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'POWER_SWITCH_BINARY',
              help: 'Power Switch Binary',
              comment: 'On/Off Power Switch Device Type' },
           '2': 
            { name: 'COLOR_TUNABLE_BINARY',
              help: 'Binary Tunable Color Light' },
           '3': 
            { name: 'SCENE_SWITCH_BINARY',
              help: 'Scene Switch Binary',
              comment: 'Binary Scene Switch' },
           '4': 
            { name: 'POWER_STRIP',
              help: 'Power Strip',
              comment: 'Power Strip Device Type' },
           '5': { name: 'SIREN', help: 'Siren', comment: 'Siren Device Type' },
           '6': 
            { name: 'VALVE_OPEN_CLOSE',
              help: 'Valve Open/Close',
              comment: 'Valve (open/close) Device Type' },
           '7': { name: 'IRRIGATION_CONTROLLER', help: 'Irrigation Controller' } } },
     '17': 
      { name: 'SWITCH_MULTILEVEL',
        help: 'Switch Multilevel',
        comment: 'Multilevel Switch',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'POWER_SWITCH_MULTILEVEL',
              help: 'Power Switch Multilevel',
              comment: 'Light Dimmer Switch Device Type' },
           '2': 
            { name: 'COLOR_TUNABLE_MULTILEVEL',
              help: 'Multilevel Tunable Color Light' },
           '3': 
            { name: 'MOTOR_MULTIPOSITION',
              help: 'Motor Multiposition',
              comment: 'Multiposition Motor' },
           '4': 
            { name: 'SCENE_SWITCH_MULTILEVEL',
              help: 'Scene Switch Multilevel',
              comment: 'Multilevel Scene Switch' },
           '5': 
            { name: 'CLASS_A_MOTOR_CONTROL',
              help: 'Class A Motor Control',
              comment: 'Window Covering No Position/Endpoint Device Type' },
           '6': 
            { name: 'CLASS_B_MOTOR_CONTROL',
              help: 'Class B Motor Control',
              comment: 'Window Covering Endpoint Aware Device Type' },
           '7': 
            { name: 'CLASS_C_MOTOR_CONTROL',
              help: 'Class C Motor Control',
              comment: 'Window Covering Position/Endpoint Aware Device Type' },
           '8': 
            { name: 'FAN_SWITCH',
              help: 'Fan Switch',
              comment: 'Fan Switch Device Type' } } },
     '18': 
      { name: 'SWITCH_REMOTE',
        help: 'Switch Remote',
        comment: 'Remote Switch',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'SWITCH_REMOTE_BINARY',
              help: 'Switch Remote Binary',
              comment: 'Binary Remote Switch' },
           '2': 
            { name: 'SWITCH_REMOTE_MULTILEVEL',
              help: 'Switch Remote Multilevel',
              comment: 'Multilevel Remote Switch' },
           '3': 
            { name: 'SWITCH_REMOTE_TOGGLE_BINARY',
              help: 'Switch Remote Toggle Binary',
              comment: 'Binary Toggle Remote Switch' },
           '4': 
            { name: 'SWITCH_REMOTE_TOGGLE_MULTILEVEL',
              help: 'Switch Remote Toggle Multilevel',
              comment: 'Multilevel Toggle Remote Switch' } } },
     '19': 
      { name: 'SWITCH_TOGGLE',
        help: 'Switch Toggle',
        comment: 'Toggle Switch',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'SWITCH_TOGGLE_BINARY',
              help: 'Switch Toggle Binary',
              comment: 'Binary Toggle Switch' },
           '2': 
            { name: 'SWITCH_TOGGLE_MULTILEVEL',
              help: 'Switch Toggle Multilevel',
              comment: 'Multilevel Toggle Switch' } } },
     '21': 
      { name: 'ZIP_NODE',
        help: 'Zip Node',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': { name: 'ZIP_TUN_NODE', help: 'Zip Tun Node' },
           '2': { name: 'ZIP_ADV_NODE', help: 'Zip Adv Node' } } },
     '22': 
      { name: 'VENTILATION',
        help: 'Ventilation',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': { name: 'RESIDENTIAL_HRV', help: 'Residential Hrv' } } },
     '23': 
      { name: 'SECURITY_PANEL',
        help: 'Security Panel',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': { name: 'ZONED_SECURITY_PANEL', help: 'Zoned Security Panel' } } },
     '24': 
      { name: 'WALL_CONTROLLER',
        help: 'Wall Controller',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'BASIC_WALL_CONTROLLER',
              help: 'Basic Wall Controller',
              comment: 'Wall Controller Device Type' } } },
     '32': 
      { name: 'SENSOR_BINARY',
        help: 'Sensor Binary',
        comment: 'Binary Sensor',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'ROUTING_SENSOR_BINARY',
              help: 'Routing Sensor Binary',
              comment: 'Routing Binary Sensor' } } },
     '33': 
      { name: 'SENSOR_MULTILEVEL',
        help: 'Sensor Multilevel',
        comment: 'Multilevel Sensor',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'ROUTING_SENSOR_MULTILEVEL',
              help: 'Routing Sensor Multilevel',
              comment: 'Sensor (Multilevel) Device Type' },
           '2': { name: 'CHIMNEY_FAN', help: 'Chimney Fan' } } },
     '48': 
      { name: 'METER_PULSE',
        help: 'Meter Pulse',
        comment: 'Pulse Meter',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' } } },
     '49': 
      { name: 'METER',
        help: 'Meter',
        comment: 'Meter',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'SIMPLE_METER',
              help: 'Simple Meter',
              comment: 'Sub Energy Meter Device Type' },
           '2': 
            { name: 'ADV_ENERGY_CONTROL',
              help: 'Adv Energy Control',
              comment: 'Whole Home Energy Meter (Advanced) Device Type' },
           '3': 
            { name: 'WHOLE_HOME_METER_SIMPLE',
              help: 'Whole Home Meter Simple',
              comment: 'Whole Home Meter (Simple) Device Type' } } },
     '64': 
      { name: 'ENTRY_CONTROL',
        help: 'Entry Control',
        comment: 'Entry Control',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': { name: 'DOOR_LOCK', help: 'Door Lock', comment: 'Door Lock' },
           '2': 
            { name: 'ADVANCED_DOOR_LOCK',
              help: 'Advanced Door Lock',
              comment: 'Advanced Door Lock' },
           '3': 
            { name: 'SECURE_KEYPAD_DOOR_LOCK',
              help: 'Secure Keypad Door Lock',
              comment: 'Door Lock (keypad –lever) Device Type' },
           '4': 
            { name: 'SECURE_KEYPAD_DOOR_LOCK_DEADBOLT',
              help: 'Door Lock Keypad Deadbolt',
              comment: 'Door Lock (keypad – deadbolt) Device Type' },
           '5': 
            { name: 'SECURE_DOOR',
              help: 'Secure Door',
              comment: 'Barrier Operator Specific Device Class' },
           '6': 
            { name: 'SECURE_GATE',
              help: 'Secure Gate',
              comment: 'Barrier Operator Specific Device Class' },
           '7': 
            { name: 'SECURE_BARRIER_ADDON',
              help: 'Secure Barrier Addon',
              comment: 'Barrier Operator Specific Device Class' },
           '8': 
            { name: 'SECURE_BARRIER_OPEN_ONLY',
              help: 'Secure Barrier Open Only',
              comment: 'Barrier Operator Specific Device Class' },
           '9': 
            { name: 'SECURE_BARRIER_CLOSE_ONLY',
              help: 'Secure Barrier Close Only',
              comment: 'Barrier Operator Specific Device Class' },
           '10': 
            { name: 'SECURE_LOCKBOX',
              help: 'Secure Lockbox',
              comment: 'SDS12724' },
           '11': { name: 'SECURE_KEYPAD', help: 'Secure Keypad' } } },
     '80': 
      { name: 'SEMI_INTEROPERABLE',
        help: 'Semi Interoperable',
        comment: 'Semi Interoperable',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'ENERGY_PRODUCTION',
              help: 'Energy Production',
              comment: 'Energy Production' } } },
     '161': 
      { name: 'SENSOR_ALARM',
        help: 'Sensor Alarm',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' },
           '1': 
            { name: 'BASIC_ROUTING_ALARM_SENSOR',
              help: 'Basic Routing Alarm Sensor' },
           '2': { name: 'ROUTING_ALARM_SENSOR', help: 'Routing Alarm Sensor' },
           '3': 
            { name: 'BASIC_ZENSOR_NET_ALARM_SENSOR',
              help: 'Basic Zensor Net Alarm Sensor' },
           '4': 
            { name: 'ZENSOR_NET_ALARM_SENSOR',
              help: 'Zensor Net Alarm Sensor' },
           '5': 
            { name: 'ADV_ZENSOR_NET_ALARM_SENSOR',
              help: 'Adv Zensor Net Alarm Sensor' },
           '6': 
            { name: 'BASIC_ROUTING_SMOKE_SENSOR',
              help: 'Basic Routing Smoke Sensor' },
           '7': { name: 'ROUTING_SMOKE_SENSOR', help: 'Routing Smoke Sensor' },
           '8': 
            { name: 'BASIC_ZENSOR_NET_SMOKE_SENSOR',
              help: 'Basic Zensor Net Smoke Sensor' },
           '9': 
            { name: 'ZENSOR_NET_SMOKE_SENSOR',
              help: 'Zensor Net Smoke Sensor' },
           '10': 
            { name: 'ADV_ZENSOR_NET_SMOKE_SENSOR',
              help: 'Adv Zensor Net Smoke Sensor' },
           '11': 
            { name: 'ALARM_SENSOR',
              help: 'Alarm Sensor',
              comment: 'Sensor (Alarm) Device Type' } } },
     '255': 
      { name: 'NON_INTEROPERABLE',
        help: 'Non Interoperable',
        comment: 'Non interoperable',
        SPECIFIC_DEVICE_CLASS: 
         { '0': 
            { name: 'NOT_USED',
              help: 'Not Used',
              comment: 'Specific Device Class Not Used' } } } },
  COMMAND_CLASS: 
   { '0x00-V1': { version: 1, name: 'NO_OPERATION', help: 'NOP', id: 0 },
     '0x01-V1': 
      { version: 1,
        name: 'ZWAVE_CMD_CLASS',
        help: 'Z-Wave protocol Command Class',
        id: 1,
        COMMAND: 
         { '0': { name: 'NOP', help: 'NOP' },
           '1': 
            { name: 'NODE_INFO',
              help: 'Node Info',
              comment: 'SDS10264-2',
              param: 
               { '0': 
                  { name: 'Capability',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'ProtocolVersion',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'Version20',
                             '2': 'VersionZdk50xZdk42x',
                             '3': 'VersionZdk45xAndZdk60x',
                             '4': 'Reserved',
                             '5': 'Reserved',
                             '6': 'Reserved',
                             '7': 'Reserved' } },
                       '1': 
                        { fieldname: 'MaxBaudRate',
                          fieldmask: 56,
                          shifter: 3,
                          fieldenum: { '0': 'Reserved', '1': '96Kbps', '2': '40Kbps' } } },
                    bitflag: { '64': 'Routing', '128': 'Listening' } },
                 '1': 
                  { name: 'Security',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Security',
                       '2': 'Controller',
                       '4': 'SpecificDevice',
                       '8': 'RoutingSlave',
                       '16': 'BeamCapability',
                       '32': 'Sensor250ms',
                       '64': 'Sensor1000ms',
                       '128': 'OptionalFunctionality' } },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SpeedExtension',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: { '0': 'Reserved', '1': '100Kbps', '2': '200Kbps' } } },
                    bitfield: { '248': { fieldname: 'Reserved2', shifter: 3 } } },
                 '3': 
                  { name: 'BasicDeviceClass',
                    type: 'CONST',
                    optionaloffs: 1,
                    optionalmask: 2,
                    const: 
                     { '1': 'Controller',
                       '2': 'StaticController',
                       '3': 'Slave',
                       '4': 'RoutingSlave' } },
                 '4': 
                  { name: 'zwave.GenericDevice',
                    type: 'CONST',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    const: 
                     { '1': 'GenericController',
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
                       '255': 'NonInteroperable' } },
                 '5': 
                  { name: 'zwave.SpecificDevice',
                    type: 'MULTI_ARRAY',
                    encaptype: 'SPEC_DEV_REF',
                    multi_array: 
                     [ { bitflag: 
                          { '0': 'NotUsed',
                            '4': 'SatelliteReceiver',
                            '17': 'SatelliteReceiverV2',
                            '18': 'Doorbell' },
                         ref: 3 },
                       { bitflag: { '0': 'NotUsed', '1': 'SimpleDisplay' }, ref: 4 },
                       { bitflag: 
                          { '0': 'NotUsed',
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
                            '11': 'SecureKeypad' },
                         ref: 64 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'PortableRemoteController',
                            '2': 'PortableSceneController',
                            '3': 'PortableInstallerTool',
                            '4': 'RemoteControlAv',
                            '6': 'RemoteControlSimple' },
                         ref: 1 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'SimpleMeter',
                            '2': 'AdvEnergyControl',
                            '3': 'WholeHomeMeterSimple' },
                         ref: 49 },
                       { bitflag: { '0': 'NotUsed' }, ref: 48 },
                       { bitflag: { '0': 'NotUsed' }, ref: 0 },
                       { bitflag: { '0': 'NotUsed', '1': 'RepeaterSlave', '2': 'VirtualNode' },
                         ref: 15 },
                       { bitflag: { '0': 'NotUsed', '1': 'ZonedSecurityPanel' },
                         ref: 23 },
                       { bitflag: { '0': 'NotUsed', '1': 'EnergyProduction' },
                         ref: 80 },
                       { bitflag: 
                          { '0': 'NotUsed',
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
                            '11': 'AlarmSensor' },
                         ref: 161 },
                       { bitflag: { '0': 'NotUsed', '1': 'RoutingSensorBinary' },
                         ref: 32 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'RoutingSensorMultilevel',
                            '2': 'ChimneyFan' },
                         ref: 33 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'PcController',
                            '2': 'SceneController',
                            '3': 'StaticInstallerTool',
                            '4': 'SetTopBox',
                            '5': 'SubSystemController',
                            '6': 'Tv',
                            '7': 'Gateway' },
                         ref: 2 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'PowerSwitchBinary',
                            '2': 'ColorTunableBinary',
                            '3': 'SceneSwitchBinary',
                            '4': 'PowerStrip',
                            '5': 'Siren',
                            '6': 'ValveOpenClose',
                            '7': 'IrrigationController' },
                         ref: 16 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'PowerSwitchMultilevel',
                            '2': 'ColorTunableMultilevel',
                            '3': 'MotorMultiposition',
                            '4': 'SceneSwitchMultilevel',
                            '5': 'ClassAMotorControl',
                            '6': 'ClassBMotorControl',
                            '7': 'ClassCMotorControl',
                            '8': 'FanSwitch' },
                         ref: 17 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'SwitchRemoteBinary',
                            '2': 'SwitchRemoteMultilevel',
                            '3': 'SwitchRemoteToggleBinary',
                            '4': 'SwitchRemoteToggleMultilevel' },
                         ref: 18 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'SwitchToggleBinary',
                            '2': 'SwitchToggleMultilevel' },
                         ref: 19 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'ThermostatHeating',
                            '2': 'ThermostatGeneral',
                            '3': 'SetbackScheduleThermostat',
                            '4': 'SetpointThermostat',
                            '5': 'SetbackThermostat',
                            '6': 'ThermostatGeneralV2' },
                         ref: 8 },
                       { bitflag: { '0': 'NotUsed', '1': 'ResidentialHrv' }, ref: 22 },
                       { bitflag: { '0': 'NotUsed', '1': 'SimpleWindowCovering' },
                         ref: 9 },
                       { bitflag: { '0': 'NotUsed', '1': 'ZipTunNode', '2': 'ZipAdvNode' },
                         ref: 21 },
                       { bitflag: { '0': 'NotUsed', '1': 'BasicWallController' },
                         ref: 24 },
                       { bitflag: { '0': 'NotUsed', '1': 'SecureExtender' }, ref: 5 },
                       { bitflag: 
                          { '0': 'NotUsed',
                            '1': 'GeneralAppliance',
                            '2': 'KitchenAppliance',
                            '3': 'LaundryAppliance' },
                         ref: 6 },
                       { bitflag: { '0': 'NotUsed', '1': 'NotificationSensor' },
                         ref: 7 } ],
                    alias: 'zwaveSpecificDevice',
                    paramdescloc: { param: 4, paramdesc: 255, paramstart: 4 } },
                 '6': 
                  { name: 'zwave.CommandClass',
                    type: 'ENUM_ARRAY',
                    encaptype: 'CMD_CLASS_REF',
                    enum: 
                     { '0': 'NoOperation',
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
                       '240': 'NonInteroperable' },
                    alias: 'zwaveCommandClass' } } },
           '2': 
            { name: 'REQUEST_NODE_INFO',
              help: 'Request Node Info',
              comment: 'SDS10264-2' },
           '3': { name: 'ASSIGN_ID', help: 'Assign Id', comment: 'SDS10264-2' },
           '4': 
            { name: 'FIND_NODES_IN_RANGE',
              help: 'Find Nodes In Range',
              comment: 'SDS10264-2' },
           '5': 
            { name: 'GET_NODES_IN_RANGE',
              help: 'Get Nodes In Range',
              comment: 'SDS10264-2' },
           '6': 
            { name: 'NODE_RANGE_INFO',
              help: 'Node Range Info',
              comment: 'SDS10264-2' },
           '7': 
            { name: 'COMMAND_COMPLETE',
              help: 'Command Complete',
              comment: 'SDS10264-2' },
           '8': 
            { name: 'TRANSFER_PRESENTATION',
              help: 'Transfer Presentation',
              comment: 'SDS10264-2' },
           '9': 
            { name: 'TRANSFER_NODE_INFO',
              help: 'Transfer Node Info',
              comment: 'SDS10264-2' },
           '10': 
            { name: 'TRANSFER_RANGE_INFO',
              help: 'Transfer Range Info',
              comment: 'SDS10264-2' },
           '11': 
            { name: 'TRANSFER_END',
              help: 'Transfer End',
              comment: 'SDS10264-2' },
           '12': 
            { name: 'ASSIGN_RETURN_ROUTE',
              help: 'Assign Return Route',
              comment: 'SDS10264-2' },
           '13': 
            { name: 'NEW_NODE_REGISTERED',
              help: 'New Node Registered',
              comment: 'SDS10264-2' },
           '14': 
            { name: 'NEW_RANGE_REGISTERED',
              help: 'New Range Registered',
              comment: 'SDS10264-2' },
           '15': 
            { name: 'TRANSFER_NEW_PRIMARY_COMPLETE',
              help: 'Transfer New Primary Complete',
              comment: 'SDS10264-2' },
           '16': 
            { name: 'AUTOMATIC_CONTROLLER_UPDATE_START',
              help: 'Automatic Controller Update Start' },
           '17': { name: 'SUC_NODE_ID', help: 'SUC Node ID' },
           '18': { name: 'SET_SUC', help: 'Set SUC' },
           '19': { name: 'SET_SUC_ACK', help: 'Set SUC ACK' },
           '20': 
            { name: 'ASSIGN_SUC_RETURN_ROUTE',
              help: 'Assign SUC Return Route' },
           '21': { name: 'STATIC_ROUTE_REQUEST', help: 'Static Route Request' },
           '22': { name: 'LOST', help: 'Lost', comment: 'SDS10264-2' },
           '23': 
            { name: 'ACCEPT_LOST',
              help: 'Accept Lost',
              comment: 'SDS10264-2' },
           '24': { name: 'NOP_POWER', help: 'NOP Power' },
           '25': { name: 'RESERVE_NODE_IDS', help: 'Reserve Node ID' },
           '26': { name: 'RESERVED_IDS', help: 'Reserved ID' },
           '31': { name: 'NODES_EXIST', help: 'Cmd Nodes Exist' },
           '32': { name: 'NODES_EXIST_REPLY', help: 'Cmd Nodes Exist Reply' },
           '34': { name: 'SET_NWI_MODE', help: 'Cmd Set Nwi Mode' },
           '35': 
            { name: 'EXCLUDE_REQUEST',
              help: 'Exclude Request',
              comment: 'INS13044' },
           '36': 
            { name: 'ASSIGN_RETURN_ROUTE_PRIORITY',
              help: 'Assign Return Route Priority' },
           '37': 
            { name: 'ASSIGN_SUC_RETURN_ROUTE_PRIORITY',
              help: 'Assign SUC Return Route Priority' } } },
     '0x02-V1': 
      { version: 1,
        name: 'ZENSOR_NET',
        help: 'Command Class Zensor Net',
        id: 2,
        COMMAND: 
         { '1': { name: 'BIND_REQUEST', help: 'Bind Request' },
           '2': { name: 'BIND_ACCEPT', help: 'Bind Accept' },
           '3': { name: 'BIND_COMPLETE', help: 'Bind Complete' } } },
     '0x20-V1': 
      { version: 1,
        name: 'BASIC',
        help: 'Command Class Basic',
        id: 32,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Basic Set',
              param: { '0': { name: 'Value', type: 'BYTE', showhex: true } } },
           '2': { name: 'GET', help: 'Basic Get' },
           '3': 
            { name: 'REPORT',
              help: 'Basic Report',
              param: { '0': { name: 'Value', type: 'BYTE', showhex: true } } } } },
     '0x20-V2': 
      { version: 2,
        name: 'BASIC',
        help: 'Command Class Basic',
        id: 32,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Basic Set',
              param: { '0': { name: 'Value', type: 'BYTE', showhex: true } } },
           '2': { name: 'GET', help: 'Basic Get' },
           '3': 
            { name: 'REPORT',
              help: 'Basic Report',
              param: 
               { '0': { name: 'CurrentValue', type: 'BYTE', showhex: true },
                 '1': { name: 'TargetValue', type: 'BYTE', showhex: true },
                 '2': { name: 'Duration', type: 'BYTE', showhex: true } } } } },
     '0x21-V1': 
      { version: 1,
        name: 'CONTROLLER_REPLICATION',
        help: 'Command Class Controller Replication',
        id: 33,
        COMMAND: 
         { '49': 
            { name: 'CTRL_REPLICATION_TRANSFER_GROUP',
              help: 'Ctrl Replication Transfer Group',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'GroupId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '50': 
            { name: 'CTRL_REPLICATION_TRANSFER_GROUP_NAME',
              help: 'Ctrl Replication Transfer Group Name',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'GroupId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'GroupName',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0,
                    is_ascii: true } } },
           '51': 
            { name: 'CTRL_REPLICATION_TRANSFER_SCENE',
              help: 'Ctrl Replication Transfer Scene',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '3': { name: 'Level', type: 'BYTE', showhex: true } } },
           '52': 
            { name: 'CTRL_REPLICATION_TRANSFER_SCENE_NAME',
              help: 'Ctrl Replication Transfer Scene Name',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'SceneName',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0,
                    is_ascii: true } } } } },
     '0x22-V1': 
      { version: 1,
        name: 'APPLICATION_STATUS',
        help: 'Command Class Application Status',
        id: 34,
        COMMAND: 
         { '1': 
            { name: 'APPLICATION_BUSY',
              help: 'Application Busy',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    comment: 'The status field',
                    const: 
                     { '0': 'TryAgainLater',
                       '1': 'TryAgainInWaitTimeSeconds',
                       '2': 'RequestQueuedExecutedLater' } },
                 '1': { name: 'WaitTime', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'APPLICATION_REJECTED_REQUEST',
              help: 'Application Rejected Request',
              param: { '0': { name: 'Status', type: 'BYTE', showhex: true } } } } },
     '0x23-V1': 
      { version: 1,
        name: 'ZIP',
        help: 'Command Class Z/IP',
        comment: '[OBSOLETED]',
        id: 35,
        COMMAND: 
         { '2': 
            { name: 'COMMAND_ZIP_PACKET',
              help: 'Zip Packet',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '3': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: 
                     { '4': 'NackOptionError',
                       '8': 'NackQueueFull',
                       '16': 'NackWaiting',
                       '32': 'NackResponse',
                       '64': 'AckResponse',
                       '128': 'AckRequest' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Reserved2', shifter: 0 } },
                    bitflag: 
                     { '32': 'MoreInformation',
                       '64': 'CmdIncluded',
                       '128': 'HeaderExtIncluded' } },
                 '2': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SourceEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Reserved3' } },
                 '4': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'DestinationEndPoint', shifter: 0 } },
                    bitflag: { '128': 'BitAddress' } },
                 '5': 
                  { name: 'HeaderExtension',
                    type: 'VARIANT',
                    optionaloffs: 1,
                    optionalmask: 128,
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '6': 
                  { name: 'Command',
                    type: 'VARIANT',
                    optionaloffs: 1,
                    optionalmask: 64,
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x23-V2': 
      { version: 2,
        name: 'ZIP',
        help: 'Command Class Z/IP',
        id: 35,
        COMMAND: 
         { '2': 
            { name: 'COMMAND_ZIP_PACKET',
              help: 'Zip Packet',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '3': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: 
                     { '4': 'NackOptionError',
                       '8': 'NackQueueFull',
                       '16': 'NackWaiting',
                       '32': 'NackResponse',
                       '64': 'AckResponse',
                       '128': 'AckRequest' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '15': { fieldname: 'Reserved2', shifter: 0 } },
                    bitflag: 
                     { '16': 'SecureOrigin',
                       '32': 'MoreInformation',
                       '64': 'CmdIncluded',
                       '128': 'HeaderExtIncluded' } },
                 '2': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SourceEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Reserved3' } },
                 '4': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'DestinationEndPoint', shifter: 0 } },
                    bitflag: { '128': 'BitAddress' } },
                 '5': 
                  { name: 'HeaderLength',
                    type: 'BYTE',
                    optionaloffs: 1,
                    optionalmask: 128,
                    showhex: true },
                 '6': 
                  { name: 'HeaderExtension',
                    type: 'VARIANT',
                    optionaloffs: 1,
                    optionalmask: 128,
                    showhex: true,
                    sizechange: -1,
                    lengthoffset: 5,
                    lengthmask: 255,
                    shifter: 0 },
                 '7': 
                  { name: 'Command',
                    type: 'VARIANT',
                    optionaloffs: 1,
                    optionalmask: 64,
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x23-V3': 
      { version: 3,
        name: 'ZIP',
        help: 'Command Class Z/IP',
        id: 35,
        COMMAND: 
         { '2': 
            { name: 'COMMAND_ZIP_PACKET',
              help: 'Zip Packet',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '3': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: 
                     { '4': 'NackOptionError',
                       '8': 'NackQueueFull',
                       '16': 'NackWaiting',
                       '32': 'NackResponse',
                       '64': 'AckResponse',
                       '128': 'AckRequest' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '15': { fieldname: 'Reserved2', shifter: 0 } },
                    bitflag: 
                     { '16': 'SecureOrigin',
                       '32': 'MoreInformation',
                       '64': 'CmdIncluded',
                       '128': 'HeaderExtIncluded' } },
                 '2': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SourceEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Reserved3' } },
                 '4': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'DestinationEndPoint', shifter: 0 } },
                    bitflag: { '128': 'BitAddress' } },
                 '5': 
                  { name: 'HeaderLength',
                    type: 'BYTE',
                    optionaloffs: 1,
                    optionalmask: 128,
                    showhex: true },
                 '6': 
                  { name: 'HeaderExtension',
                    type: 'VARIANT',
                    optionaloffs: 1,
                    optionalmask: 128,
                    showhex: true,
                    sizechange: -1,
                    lengthoffset: 5,
                    lengthmask: 255,
                    shifter: 0 },
                 '7': 
                  { name: 'Command',
                    type: 'VARIANT',
                    optionaloffs: 1,
                    optionalmask: 64,
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x24-V1': 
      { version: 1,
        name: 'SECURITY_PANEL_MODE',
        help: 'Command Class Security Panel Mode',
        id: 36,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET',
              help: 'Security Panel Mode Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Security Panel Mode Supported Report',
              param: { '0': { name: 'SupportedModeBitMask', type: 'WORD', showhex: true } } },
           '3': { name: 'GET', help: 'Security Panel Mode Get' },
           '4': 
            { name: 'REPORT',
              help: 'Security Panel Mode Report',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'ArmHome',
                       '2': 'ArmAwayNoDelay',
                       '3': 'ArmAwayDelayed',
                       '4': 'Disarm',
                       '5': 'AlarmTrigger' } } } },
           '5': 
            { name: 'SET',
              help: 'Security Panel Mode Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'ArmHome',
                       '2': 'ArmAwayNoDelay',
                       '3': 'ArmAwayDelayed',
                       '4': 'Disarm',
                       '5': 'AlarmTrigger' } } } } } },
     '0x25-V1': 
      { version: 1,
        name: 'SWITCH_BINARY',
        help: 'Command Class Switch Binary',
        id: 37,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Binary Set',
              param: 
               { '0': 
                  { name: 'SwitchValue',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '2': { name: 'GET', help: 'Switch Binary Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Binary Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } } } },
     '0x25-V2': 
      { version: 2,
        name: 'SWITCH_BINARY',
        help: 'Command Class Switch Binary',
        id: 37,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Binary Set',
              param: 
               { '0': 
                  { name: 'TargetValue',
                    type: 'CONST',
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: { '0': 'Instantly', '255': 'Default' } } } },
           '2': { name: 'GET', help: 'Switch Binary Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Binary Report',
              param: 
               { '0': 
                  { name: 'CurrentValue',
                    type: 'CONST',
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'TargetValue',
                    type: 'CONST',
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '2': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: 
                     { '0': 'AlreadyAtTheTargetValue',
                       '254': 'UnknownDuration',
                       '255': 'Reserved' } } } } } },
     '0x26-V1': 
      { version: 1,
        name: 'SWITCH_MULTILEVEL',
        help: 'Command Class Switch Multilevel',
        id: 38,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Multilevel Set',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '2': { name: 'GET', help: 'Switch Multilevel Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Multilevel Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '4': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Switch Multilevel Start Level Change',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: { '32': 'IgnoreStartLevel', '64': 'UpDown', '128': 'Reserved2' } },
                 '1': { name: 'StartLevel', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Switch Multilevel Stop Level Change' } } },
     '0x26-V2': 
      { version: 2,
        name: 'SWITCH_MULTILEVEL',
        help: 'Command Class Switch Multilevel',
        id: 38,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Multilevel Set',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Instantly', '255': 'FactoryDefault' } } } },
           '2': { name: 'GET', help: 'Switch Multilevel Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Multilevel Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '4': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Switch Multilevel Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: { '32': 'IgnoreStartLevel', '64': 'UpDown', '128': 'Reserved2' } },
                 '1': { name: 'StartLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'DimmingDuration', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Switch Multilevel Stop Level Change' } } },
     '0x26-V3': 
      { version: 3,
        name: 'SWITCH_MULTILEVEL',
        help: 'Command Class Switch Multilevel',
        id: 38,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Multilevel Set',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Instantly', '255': 'FactoryDefault' } } } },
           '2': { name: 'GET', help: 'Switch Multilevel Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Multilevel Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '4': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Switch Multilevel Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '7': { fieldname: 'Reserved', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'IncDec',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: 
                           { '0': 'Increment',
                             '1': 'Decrement',
                             '2': 'Reserved',
                             '3': 'None' } },
                       '3': 
                        { fieldname: 'UpDown',
                          fieldmask: 192,
                          shifter: 6,
                          fieldenum: { '0': 'Up', '1': 'Down', '2': 'Reserved', '3': 'None' } } },
                    bitflag: { '32': 'IgnoreStartLevel' } },
                 '1': { name: 'StartLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'DimmingDuration', type: 'BYTE', showhex: true },
                 '3': { name: 'StepSize', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Switch Multilevel Stop Level Change' },
           '6': 
            { name: 'SUPPORTED_GET',
              help: 'Switch Multilevel Supported Get' },
           '7': 
            { name: 'SUPPORTED_REPORT',
              help: 'Switch Multilevel Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'PrimarySwitchType', shifter: 0 },
                       '224': { fieldname: 'Reserved1', shifter: 5 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'SecondarySwitchType', shifter: 0 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } } } },
     '0x26-V4': 
      { version: 4,
        name: 'SWITCH_MULTILEVEL',
        help: 'Command Class Switch Multilevel',
        id: 38,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Multilevel Set',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    const: { '0': 'Instantly', '255': 'Default' } } } },
           '2': { name: 'GET', help: 'Switch Multilevel Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Multilevel Report',
              param: 
               { '0': 
                  { name: 'CurrentValue',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': { name: 'TargetValue', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: 
                     { '0': 'AlreadyAtTheTargetValue',
                       '254': 'UnknownDuration',
                       '255': 'Reserved' } } } },
           '4': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Switch Multilevel Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '7': { fieldname: 'Reserved', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'IncDec',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: 
                           { '0': 'Increment',
                             '1': 'Decrement',
                             '2': 'Reserved',
                             '3': 'None' } },
                       '3': 
                        { fieldname: 'UpDown',
                          fieldmask: 192,
                          shifter: 6,
                          fieldenum: { '0': 'Up', '1': 'Down', '2': 'Reserved', '3': 'None' } } },
                    bitflag: { '32': 'IgnoreStartLevel' } },
                 '1': { name: 'StartLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'DimmingDuration', type: 'BYTE', showhex: true },
                 '3': { name: 'StepSize', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Switch Multilevel Stop Level Change' },
           '6': 
            { name: 'SUPPORTED_GET',
              help: 'Switch Multilevel Supported Get' },
           '7': 
            { name: 'SUPPORTED_REPORT',
              help: 'Switch Multilevel Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'PrimarySwitchType', shifter: 0 },
                       '224': { fieldname: 'Reserved1', shifter: 5 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'SecondarySwitchType', shifter: 0 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } } } },
     '0x27-V1': 
      { version: 1,
        name: 'SWITCH_ALL',
        help: 'Command Class Switch All',
        id: 39,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch All Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: 
                     { '0': 'ExcludedFromTheAllOnallOffFunctionality',
                       '1': 'ExcludedFromTheAllOnFunctionalityButNotAllOff',
                       '2': 'ExcludedFromTheAllOffFunctionalityButNotAllOn',
                       '255': 'IncludedInTheAllOnallOffFunctionality' } } } },
           '2': { name: 'GET', help: 'Switch All Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch All Report',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: 
                     { '0': 'ExcludedFromTheAllOnallOffFunctionality',
                       '1': 'ExcludedFromTheAllOnFunctionalityButNotAllOff',
                       '2': 'ExcludedFromTheAllOffFunctionalityButNotAllOn',
                       '255': 'IncludedInTheAllOnallOffFunctionality' } } } },
           '4': { name: 'ON', help: 'Switch All On' },
           '5': { name: 'OFF', help: 'Switch All Off' } } },
     '0x28-V1': 
      { version: 1,
        name: 'SWITCH_TOGGLE_BINARY',
        help: 'Command Class Switch Toggle Binary',
        comment: '[DEPRECATED]',
        id: 40,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Toggle Binary Set',
              comment: 'SWITCH_TOGGLE_BINARY_SET' },
           '2': { name: 'GET', help: 'Switch Toggle Binary Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Toggle Binary Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Off', '255': 'On' } } } } } },
     '0x29-V1': 
      { version: 1,
        name: 'SWITCH_TOGGLE_MULTILEVEL',
        help: 'Command Class Switch Toggle Multilevel',
        comment: '[DEPRECATED]',
        id: 41,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Switch Toggle Multilevel Set',
              comment: 'SWITCH_TOGGLE_MULTILEVEL_SET' },
           '2': { name: 'GET', help: 'Switch Toggle Multilevel Get' },
           '3': 
            { name: 'REPORT',
              help: 'Switch Toggle Multilevel Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '4': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Switch Toggle Multilevel Start Level Change',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: 
                     { '32': 'IgnoreStartLevel',
                       '64': 'Reserved2',
                       '128': 'RollOver' } },
                 '1': { name: 'StartLevel', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Switch Toggle Multilevel Stop Level Change' } } },
     '0x2a-V1': 
      { version: 1,
        name: 'CHIMNEY_FAN',
        help: 'Command Class Chimney Fan',
        id: 42,
        COMMAND: 
         { '1': 
            { name: 'STATE_SET',
              help: 'Chimney Fan State Set',
              param: { '0': { name: 'State', type: 'CONST', const: { '1': 'NextState' } } } },
           '2': { name: 'STATE_GET', help: 'Chimney Fan State Get' },
           '3': 
            { name: 'STATE_REPORT',
              help: 'Chimney Fan State Report',
              param: 
               { '0': 
                  { name: 'State',
                    type: 'CONST',
                    const: 
                     { '0': 'Off',
                       '1': 'Boost',
                       '2': 'Exhaust',
                       '3': 'Reload',
                       '4': 'Venting',
                       '5': 'Stop',
                       '6': 'VentingEx',
                       '7': 'Service',
                       '8': 'SensorFailure',
                       '9': 'ChimneyFire',
                       '10': 'ExternalAlarm' } } } },
           '4': 
            { name: 'SPEED_SET',
              help: 'Chimney Fan Speed Set',
              param: 
               { '0': 
                  { name: 'Speed',
                    type: 'CONST',
                    showhex: true,
                    const: { '101': 'SpeedDown', '200': 'SpeedUp' } } } },
           '5': { name: 'SPEED_GET', help: 'Chimney Fan Speed Get' },
           '6': 
            { name: 'SPEED_REPORT',
              help: 'Chimney Fan Speed Report',
              param: { '0': { name: 'Speed', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'START_TEMP_SET',
              help: 'Chimney Fan Start Temp Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '1': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 7,
                    shifter: 0 } } },
           '8': { name: 'START_TEMP_GET', help: 'Chimney Fan Start Temp Get' },
           '9': 
            { name: 'START_TEMP_REPORT',
              help: 'Chimney Fan Start Temp Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '1': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 7,
                    shifter: 0 } } },
           '10': 
            { name: 'STOP_TEMP_SET',
              help: 'Chimney Fan Stop Temp Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '1': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 7,
                    shifter: 0 } } },
           '11': { name: 'STOP_TEMP_GET', help: 'Chimney Fan Stop Temp Get' },
           '12': 
            { name: 'STOP_TEMP_REPORT',
              help: 'Chimney Fan Stop Temp Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '1': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 7,
                    shifter: 0 } } },
           '13': 
            { name: 'ALARM_TEMP_SET',
              help: 'Chimney Fan Alarm Temp Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '1': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 7,
                    shifter: 0 } } },
           '14': { name: 'ALARM_TEMP_GET', help: 'Chimney Fan Alarm Temp Get' },
           '15': 
            { name: 'ALARM_TEMP_REPORT',
              help: 'Chimney Fan Alarm Temp Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '1': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 7,
                    shifter: 0 } } },
           '16': 
            { name: 'BOOST_TIME_SET',
              help: 'Chimney Fan Boost Time Set',
              param: { '0': { name: 'Time', type: 'BYTE', showhex: true } } },
           '17': { name: 'BOOST_TIME_GET', help: 'Chimney Fan Boost Time Get' },
           '18': 
            { name: 'BOOST_TIME_REPORT',
              help: 'Chimney Fan Boost Time Report',
              param: { '0': { name: 'Time', type: 'BYTE', showhex: true } } },
           '19': 
            { name: 'STOP_TIME_SET',
              help: 'Chimney Fan Stop Time Set',
              param: { '0': { name: 'Time', type: 'BYTE', showhex: true } } },
           '20': { name: 'STOP_TIME_GET', help: 'Chimney Fan Stop Time Get' },
           '21': 
            { name: 'STOP_TIME_REPORT',
              help: 'Chimney Fan Stop Time Report',
              param: { '0': { name: 'Time', type: 'BYTE', showhex: true } } },
           '22': 
            { name: 'MODE_SET',
              help: 'Chimney Fan Mode Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: { '0': 'Off', '255': 'On' } } } },
           '23': { name: 'MODE_GET', help: 'Chimney Fan Mode Get' },
           '24': 
            { name: 'MODE_REPORT',
              help: 'Chimney Fan Mode Report',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: { '0': 'Off', '255': 'On' } } } },
           '25': 
            { name: 'SETUP_SET',
              help: 'Chimney Fan Setup Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: { '0': 'Off', '255': 'On' } },
                 '1': { name: 'BoostTime', type: 'BYTE', showhex: true },
                 '2': { name: 'StopTime', type: 'BYTE', showhex: true },
                 '3': { name: 'MinSpeed', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size1', shifter: 0 },
                       '24': { fieldname: 'Scale1', shifter: 3 },
                       '224': { fieldname: 'Precision1', shifter: 5 } } },
                 '5': 
                  { name: 'StartTemperature',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 4,
                    lengthmask: 7,
                    shifter: 0 },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size2', shifter: 0 },
                       '24': { fieldname: 'Scale2', shifter: 3 },
                       '224': { fieldname: 'Precision2', shifter: 5 } } },
                 '7': 
                  { name: 'StopTemperature',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 7,
                    shifter: 0 },
                 '8': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size3', shifter: 0 },
                       '24': { fieldname: 'Scale3', shifter: 3 },
                       '224': { fieldname: 'Precision3', shifter: 5 } } },
                 '9': 
                  { name: 'AlarmTemperatureValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 8,
                    lengthmask: 7,
                    shifter: 0 } } },
           '26': { name: 'SETUP_GET', help: 'Chimney Fan Setup Get' },
           '27': 
            { name: 'SETUP_REPORT',
              help: 'Chimney Fan Setup Report',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: { '0': 'Off', '255': 'On' } },
                 '1': { name: 'BoostTime', type: 'BYTE', showhex: true },
                 '2': { name: 'StopTime', type: 'BYTE', showhex: true },
                 '3': { name: 'MinSpeed', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size1', shifter: 0 },
                       '24': { fieldname: 'Scale1', shifter: 3 },
                       '224': { fieldname: 'Precision1', shifter: 5 } } },
                 '5': 
                  { name: 'StartTemperature',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 4,
                    lengthmask: 7,
                    shifter: 0 },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size2', shifter: 0 },
                       '24': { fieldname: 'Scale2', shifter: 3 },
                       '224': { fieldname: 'Precision2', shifter: 5 } } },
                 '7': 
                  { name: 'StopTemperature',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 7,
                    shifter: 0 },
                 '8': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size3', shifter: 0 },
                       '24': { fieldname: 'Scale3', shifter: 3 },
                       '224': { fieldname: 'Precision3', shifter: 5 } } },
                 '9': 
                  { name: 'AlarmTemperatureValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 8,
                    lengthmask: 7,
                    shifter: 0 } } },
           '29': { name: 'STATUS_GET', help: 'Chimney Fan Status Get' },
           '30': 
            { name: 'STATUS_REPORT',
              help: 'Chimney Fan Status Report',
              param: 
               { '0': 
                  { name: 'State',
                    type: 'CONST',
                    const: 
                     { '0': 'Off',
                       '1': 'Boost',
                       '2': 'Exhaust',
                       '3': 'Reload',
                       '4': 'Venting',
                       '5': 'Stop',
                       '6': 'VentingEx',
                       '7': 'Service',
                       '8': 'SensorFailure',
                       '9': 'ChimneyFire',
                       '10': 'ExternalAlarm' } },
                 '1': { name: 'Speed', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'AlarmStatus',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Service',
                       '2': 'ExternalAlarm',
                       '4': 'SensorError',
                       '8': 'AlarmTemperatureExceeded',
                       '64': 'SpeedChangeEnable',
                       '128': 'StartTemperatureExceeded' },
                    bitfield: { '48': { fieldname: 'NotUsed', shifter: 4 } } },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '4': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 7,
                    shifter: 0 } } },
           '31': 
            { name: 'ALARM_LOG_SET',
              help: 'Chimney Fan Alarm Log Set',
              param: { '0': { name: 'Message', type: 'CONST', const: { '8': 'ResetLog' } } } },
           '32': { name: 'ALARM_LOG_GET', help: 'Chimney Fan Alarm Log Get' },
           '33': 
            { name: 'ALARM_LOG_REPORT',
              help: 'Chimney Fan Alarm Log Report',
              param: 
               { '0': 
                  { name: 'AlarmEvent1',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Reserved11',
                       '2': 'ExternalAlarm1',
                       '4': 'SensorError1',
                       '8': 'AlarmTemperatureExceeded1',
                       '128': 'AlarmStillActive1' },
                    bitfield: { '112': { fieldname: 'Reserved12', shifter: 4 } } },
                 '1': 
                  { name: 'AlarmEvent2',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Reserved21',
                       '2': 'ExternalAlarm2',
                       '4': 'SensorError2',
                       '8': 'AlarmTemperatureExceeded2',
                       '128': 'AlarmStillActive2' },
                    bitfield: { '112': { fieldname: 'Reserved22', shifter: 4 } } },
                 '2': 
                  { name: 'AlarmEvent3',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Reserved31',
                       '2': 'ExternalAlarm3',
                       '4': 'SensorError3',
                       '8': 'AlarmTemperatureExceeded3',
                       '128': 'AlarmStillActive3' },
                    bitfield: { '112': { fieldname: 'Reserved32', shifter: 4 } } },
                 '3': 
                  { name: 'AlarmEvent4',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Reserved41',
                       '2': 'ExternalAlarm4',
                       '4': 'SensorError4',
                       '8': 'AlarmTemperatureExceeded4',
                       '128': 'AlarmStillActive4' },
                    bitfield: { '112': { fieldname: 'Reserved42', shifter: 4 } } },
                 '4': 
                  { name: 'AlarmEvent5',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Reserved51',
                       '2': 'ExternalAlarm5',
                       '4': 'SensorError5',
                       '8': 'AlarmTemperatureExceeded5',
                       '128': 'AlarmStillActive5' },
                    bitfield: { '112': { fieldname: 'Reserved52', shifter: 4 } } } } },
           '34': 
            { name: 'ALARM_STATUS_SET',
              help: 'Chimney Fan Alarm Status Set',
              param: 
               { '0': 
                  { name: 'Message',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'NotUsed1',
                       '2': 'AcknowledgeExternalAlarm',
                       '4': 'AcknowledgeSensorError',
                       '8': 'AcknowledgeAlarmTemperatureExceeded' },
                    bitfield: { '240': { fieldname: 'NotUsed2', shifter: 4 } } } } },
           '35': 
            { name: 'ALARM_STATUS_GET',
              help: 'Chimney Fan Alarm Status Get' },
           '36': 
            { name: 'ALARM_STATUS_REPORT',
              help: 'Chimney Fan Alarm Status Report',
              param: 
               { '0': 
                  { name: 'AlarmStatus',
                    type: 'STRUCT_BYTE',
                    bitflag: 
                     { '1': 'Service',
                       '2': 'ExternalAlarm',
                       '4': 'SensorError',
                       '8': 'AlarmTemperatureExceeded',
                       '64': 'SpeedChangeEnable',
                       '128': 'StartTemperatureExceeded' },
                    bitfield: { '48': { fieldname: 'NotUsed', shifter: 4 } } } } },
           '37': 
            { name: 'MIN_SPEED_SET',
              help: 'Chimney Fan Min Speed Set',
              param: { '0': { name: 'MinSpeed', type: 'BYTE', showhex: true } } },
           '38': { name: 'MIN_SPEED_GET', help: 'Chimney Fan Min Speed Get' },
           '39': 
            { name: 'MIN_SPEED_REPORT',
              help: 'Chimney Fan Min Speed Report',
              param: { '0': { name: 'MinSpeed', type: 'BYTE', showhex: true } } },
           '40': { name: 'DEFAULT_SET', help: 'Chimney Fan Default Set' } } },
     '0x2b-V1': 
      { version: 1,
        name: 'SCENE_ACTIVATION',
        help: 'Command Class Scene Activation',
        id: 43,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Scene Activation Set',
              param: 
               { '0': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Instantly', '255': 'ConfiguredDimmingDuration' } } } } } },
     '0x2c-V1': 
      { version: 1,
        name: 'SCENE_ACTUATOR_CONF',
        help: 'Command Class Scene Actuator Conf',
        id: 44,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Scene Actuator Conf Set',
              param: 
               { '0': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'SpecifyInstantly', '255': 'FactoryDefault' } },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'Override' } },
                 '3': { name: 'Level', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'GET',
              help: 'Scene Actuator Conf Get',
              param: { '0': { name: 'SceneId', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Scene Actuator Conf Report',
              param: 
               { '0': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '1': { name: 'Level', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Instantly' } } } } } },
     '0x2d-V1': 
      { version: 1,
        name: 'SCENE_CONTROLLER_CONF',
        help: 'Command Class Scene Controller Conf',
        id: 45,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Scene Controller Conf Set',
              param: 
               { '0': { name: 'GroupId', type: 'BYTE', showhex: true },
                 '1': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Instantly', '255': 'FactoryDefault' } } } },
           '2': 
            { name: 'GET',
              help: 'Scene Controller Conf Get',
              param: { '0': { name: 'GroupId', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Scene Controller Conf Report',
              param: 
               { '0': { name: 'GroupId', type: 'BYTE', showhex: true },
                 '1': { name: 'SceneId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'DimmingDuration',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Instantly' } } } } } },
     '0x2e-V1': 
      { version: 1,
        name: 'SECURITY_PANEL_ZONE',
        help: 'Command Class Security Panel Zone',
        id: 46,
        COMMAND: 
         { '1': 
            { name: 'NUMBER_SUPPORTED_GET',
              help: 'Security Panel Zone Number Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Security Panel Zone Supported Report',
              param: 
               { '0': 
                  { name: 'Parameters1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ZonesSupported', shifter: 0 } },
                    bitflag: { '128': 'ZM' } } } },
           '3': 
            { name: 'TYPE_GET',
              help: 'Security Panel Zone Type Get',
              param: { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'TYPE_REPORT',
              help: 'Security Panel Zone Type Report',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'ZoneType',
                    type: 'CONST',
                    showhex: true,
                    const: { '1': 'AlarmZone', '2': 'NotificationZone' } } } },
           '5': 
            { name: 'STATE_GET',
              help: 'Security Panel Zone State Get',
              param: { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'STATE_REPORT',
              help: 'Security Panel Zone State Report',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'ZoneState',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'Faulted',
                       '1': 'NotFaulted',
                       '2': 'BypassFaulted',
                       '3': 'BypassNotfaulted' } } } } } },
     '0x2f-V1': 
      { version: 1,
        name: 'SECURITY_PANEL_ZONE_SENSOR',
        help: 'Command Class Security Panel Zone Sensor',
        id: 47,
        COMMAND: 
         { '1': 
            { name: 'INSTALLED_GET',
              help: 'Security Panel Zone Sensor Installed Get',
              param: { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'SECURITY_PANEL_ZONE_SENSOR_INSTALLED_REPORT',
              help: 'Command Class Security Panel Zone Sensor Installed Report',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'NumberOfSensors', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'TYPE_GET',
              help: 'Security Panel Zone Sensor Type Get',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'SensorNumber', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'TYPE_REPORT',
              help: 'Security Panel Zone Sensor Type Report',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'SensorNumber', type: 'BYTE', showhex: true },
                 '2': { name: 'AlarmType', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'STATE_GET',
              help: 'Security Panel Zone Sensor State Get',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'SensorNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'STATE_REPORT',
              help: 'Security Panel Zone Sensor State Report',
              param: 
               { '0': { name: 'ZoneNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'SensorNumber', type: 'BYTE', showhex: true },
                 '2': { name: 'AlarmType', type: 'BYTE', showhex: true },
                 '3': { name: 'AlarmEvent', type: 'BYTE', showhex: true },
                 '4': { name: 'EventParameters', type: 'BYTE', showhex: true } } } } },
     '0x30-V1': 
      { version: 1,
        name: 'SENSOR_BINARY',
        help: 'Command Class Sensor Binary',
        comment: '[DEPRECATED]',
        id: 48,
        COMMAND: 
         { '2': { name: 'GET', help: 'Sensor Binary Get' },
           '3': 
            { name: 'REPORT',
              help: 'Sensor Binary Report',
              param: 
               { '0': 
                  { name: 'SensorValue',
                    type: 'CONST',
                    const: { '0': 'Idle', '255': 'DetectedAnEvent' } } } } } },
     '0x30-V2': 
      { version: 2,
        name: 'SENSOR_BINARY',
        help: 'Command Class Sensor Binary',
        comment: '[DEPRECATED]',
        id: 48,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Sensor Binary Supported Get Sensor' },
           '2': 
            { name: 'GET',
              help: 'Sensor Binary Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'Reserved',
                       '1': 'General',
                       '2': 'Smoke',
                       '3': 'CO',
                       '4': 'CO2',
                       '5': 'Heat',
                       '6': 'Water',
                       '7': 'Freeze',
                       '8': 'Tamper',
                       '9': 'Aux',
                       '10': 'DoorWindow',
                       '11': 'Tilt',
                       '12': 'Motion',
                       '13': 'GlassBreak',
                       '255': 'First' } } } },
           '3': 
            { name: 'REPORT',
              help: 'Sensor Binary Report',
              param: 
               { '0': 
                  { name: 'SensorValue',
                    type: 'CONST',
                    const: { '0': 'Idle', '255': 'DetectedAnEvent' } },
                 '1': 
                  { name: 'SensorType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'Reserved',
                       '1': 'General',
                       '2': 'Smoke',
                       '3': 'CO',
                       '4': 'CO2',
                       '5': 'Heat',
                       '6': 'Water',
                       '7': 'Freeze',
                       '8': 'Tamper',
                       '9': 'Aux',
                       '10': 'DoorWindow',
                       '11': 'Tilt',
                       '12': 'Motion',
                       '13': 'GlassBreak',
                       '255': 'First' } } } },
           '4': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Sensor Binary Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'General',
                       '2': 'Smoke',
                       '3': 'CO',
                       '4': 'CO2',
                       '5': 'Heat',
                       '6': 'Water',
                       '7': 'Freeze',
                       '8': 'Tamper',
                       '9': 'Aux',
                       '10': 'DoorWindow',
                       '11': 'Tilt',
                       '12': 'Motion',
                       '13': 'GlassBreak',
                       '255': 'First' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x31-V1': 
      { version: 1,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '4': { name: 'GET', help: 'Sensor Multilevel Get' },
           '5': 
            { name: 'REPORT',
              help: 'Sensor Multilevel Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x31-V10': 
      { version: 10,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Multilevel Sensor Get Supported Sensor' },
           '2': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Multilevel Sensor Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'AirTemperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'Humidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel',
                       '14': 'Weight',
                       '15': 'Voltage',
                       '16': 'Current',
                       '17': 'CO2level',
                       '18': 'AirFlow',
                       '19': 'TankCapacity',
                       '20': 'Distance',
                       '21': 'AnglePosition',
                       '22': 'Rotation',
                       '23': 'WaterTemperature',
                       '24': 'SoilTemperature',
                       '25': 'SeismicIntensity',
                       '26': 'SeismicMagnitude',
                       '27': 'Ultraviolet',
                       '28': 'ElectricalResistivity',
                       '29': 'ElectricalConductivity',
                       '30': 'Loudness',
                       '31': 'Moisture',
                       '32': 'Frequency',
                       '33': 'Time',
                       '34': 'TargetTemperature',
                       '35': 'ParticulateMatter25',
                       '36': 'FormaldehydeCh2olevel',
                       '37': 'RadonConcentration',
                       '38': 'MethaneDensityCh4',
                       '39': 'VolatileOrganicCompound',
                       '40': 'CarbonMonoxideColevel',
                       '41': 'SoilHumidity',
                       '42': 'SoilReactivity',
                       '43': 'SoilSalinity',
                       '44': 'HeartRate',
                       '45': 'BloodPressure',
                       '46': 'MuscleMass',
                       '47': 'FatMass',
                       '48': 'BoneMass',
                       '49': 'TotalBodyWaterTbw',
                       '50': 'BasicMetabolicRateBmr',
                       '51': 'BodyMassIndexBmi',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9',
                       '59': 'ParticulateMatterv10',
                       '60': 'RespiratoryRatev10' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'SUPPORTED_GET_SCALE',
              help: 'Multilevel Sensor Get Supported Scale',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9',
                       '59': 'ParticulateMatterv10',
                       '60': 'RespiratoryRatev10' } } } },
           '4': 
            { name: 'GET',
              help: 'Multilevel Sensor Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9',
                       '59': 'ParticulateMatterv10',
                       '60': 'RespiratoryRatev10' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved1', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '5': 
            { name: 'REPORT',
              help: 'Multilevel Sensor Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9',
                       '59': 'ParticulateMatterv10',
                       '60': 'RespiratoryRatev10' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '6': 
            { name: 'SUPPORTED_SCALE_REPORT',
              help: 'Multilevel Sensor Supported Scale Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9',
                       '59': 'ParticulateMatterv10',
                       '60': 'RespiratoryRatev10' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleBitMask', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x31-V2': 
      { version: 2,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '4': { name: 'GET', help: 'Sensor Multilevel Get' },
           '5': 
            { name: 'REPORT',
              help: 'Sensor Multilevel Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x31-V3': 
      { version: 3,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '4': { name: 'GET', help: 'Sensor Multilevel Get' },
           '5': 
            { name: 'REPORT',
              help: 'Sensor Multilevel Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x31-V4': 
      { version: 4,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '4': { name: 'GET', help: 'Sensor Multilevel Get' },
           '5': 
            { name: 'REPORT',
              help: 'Sensor Multilevel Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x31-V5': 
      { version: 5,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Multilevel Sensor Get Supported Sensor' },
           '2': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Multilevel Sensor Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'AirTemperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'Humidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel',
                       '14': 'Weight',
                       '15': 'Voltage',
                       '16': 'Current',
                       '17': 'CO2level',
                       '18': 'AirFlow',
                       '19': 'TankCapacity',
                       '20': 'Distance',
                       '21': 'AnglePosition',
                       '22': 'Rotation',
                       '23': 'WaterTemperature',
                       '24': 'SoilTemperature',
                       '25': 'SeismicIntensity',
                       '26': 'SeismicMagnitude',
                       '27': 'Ultraviolet',
                       '28': 'ElectricalResistivity',
                       '29': 'ElectricalConductivity',
                       '30': 'Loudness',
                       '31': 'Moisture' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'SUPPORTED_GET_SCALE',
              help: 'Multilevel Sensor Get Supported Scale',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5' } } } },
           '4': 
            { name: 'GET',
              help: 'Multilevel Sensor Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved1', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '5': 
            { name: 'REPORT',
              help: 'Multilevel Sensor Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '6': 
            { name: 'SUPPORTED_SCALE_REPORT',
              help: 'Multilevel Sensor Supported Scale Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleBitMask', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x31-V6': 
      { version: 6,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Multilevel Sensor Get Supported Sensor' },
           '2': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Multilevel Sensor Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'AirTemperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'Humidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel',
                       '14': 'Weight',
                       '15': 'Voltage',
                       '16': 'Current',
                       '17': 'CO2level',
                       '18': 'AirFlow',
                       '19': 'TankCapacity',
                       '20': 'Distance',
                       '21': 'AnglePosition',
                       '22': 'Rotation',
                       '23': 'WaterTemperature',
                       '24': 'SoilTemperature',
                       '25': 'SeismicIntensity',
                       '26': 'SeismicMagnitude',
                       '27': 'Ultraviolet',
                       '28': 'ElectricalResistivity',
                       '29': 'ElectricalConductivity',
                       '30': 'Loudness',
                       '31': 'Moisture',
                       '32': 'Frequency',
                       '33': 'Time',
                       '34': 'TargetTemperature' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'SUPPORTED_GET_SCALE',
              help: 'Multilevel Sensor Get Supported Scale',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6' } } } },
           '4': 
            { name: 'GET',
              help: 'Multilevel Sensor Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved1', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '5': 
            { name: 'REPORT',
              help: 'Multilevel Sensor Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '6': 
            { name: 'SUPPORTED_SCALE_REPORT',
              help: 'Multilevel Sensor Supported Scale Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleBitMask', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x31-V7': 
      { version: 7,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Multilevel Sensor Get Supported Sensor' },
           '2': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Multilevel Sensor Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'AirTemperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'Humidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel',
                       '14': 'Weight',
                       '15': 'Voltage',
                       '16': 'Current',
                       '17': 'CO2level',
                       '18': 'AirFlow',
                       '19': 'TankCapacity',
                       '20': 'Distance',
                       '21': 'AnglePosition',
                       '22': 'Rotation',
                       '23': 'WaterTemperature',
                       '24': 'SoilTemperature',
                       '25': 'SeismicIntensity',
                       '26': 'SeismicMagnitude',
                       '27': 'Ultraviolet',
                       '28': 'ElectricalResistivity',
                       '29': 'ElectricalConductivity',
                       '30': 'Loudness',
                       '31': 'Moisture',
                       '32': 'Frequency',
                       '33': 'Time',
                       '34': 'TargetTemperature',
                       '35': 'ParticulateMatter25',
                       '36': 'FormaldehydeCh2olevel',
                       '37': 'RadonConcentration',
                       '38': 'MethaneDensityCh4',
                       '39': 'VolatileOrganicCompound',
                       '40': 'CarbonMonoxideColevel',
                       '41': 'SoilHumidity',
                       '42': 'SoilReactivity',
                       '43': 'SoilSalinity',
                       '44': 'HeartRate',
                       '45': 'BloodPressure',
                       '46': 'MuscleMass',
                       '47': 'FatMass',
                       '48': 'BoneMass',
                       '49': 'TotalBodyWaterTbw',
                       '50': 'BasicMetabolicRateBmr',
                       '51': 'BodyMassIndexBmi' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'SUPPORTED_GET_SCALE',
              help: 'Multilevel Sensor Get Supported Scale',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7' } } } },
           '4': 
            { name: 'GET',
              help: 'Multilevel Sensor Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved1', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '5': 
            { name: 'REPORT',
              help: 'Multilevel Sensor Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '6': 
            { name: 'SUPPORTED_SCALE_REPORT',
              help: 'Multilevel Sensor Supported Scale Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleBitMask', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x31-V8': 
      { version: 8,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Multilevel Sensor Get Supported Sensor' },
           '2': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Multilevel Sensor Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'AirTemperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'Humidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel',
                       '14': 'Weight',
                       '15': 'Voltage',
                       '16': 'Current',
                       '17': 'CO2level',
                       '18': 'AirFlow',
                       '19': 'TankCapacity',
                       '20': 'Distance',
                       '21': 'AnglePosition',
                       '22': 'Rotation',
                       '23': 'WaterTemperature',
                       '24': 'SoilTemperature',
                       '25': 'SeismicIntensity',
                       '26': 'SeismicMagnitude',
                       '27': 'Ultraviolet',
                       '28': 'ElectricalResistivity',
                       '29': 'ElectricalConductivity',
                       '30': 'Loudness',
                       '31': 'Moisture',
                       '32': 'Frequency',
                       '33': 'Time',
                       '34': 'TargetTemperature',
                       '35': 'ParticulateMatter25',
                       '36': 'FormaldehydeCh2olevel',
                       '37': 'RadonConcentration',
                       '38': 'MethaneDensityCh4',
                       '39': 'VolatileOrganicCompound',
                       '40': 'CarbonMonoxideColevel',
                       '41': 'SoilHumidity',
                       '42': 'SoilReactivity',
                       '43': 'SoilSalinity',
                       '44': 'HeartRate',
                       '45': 'BloodPressure',
                       '46': 'MuscleMass',
                       '47': 'FatMass',
                       '48': 'BoneMass',
                       '49': 'TotalBodyWaterTbw',
                       '50': 'BasicMetabolicRateBmr',
                       '51': 'BodyMassIndexBmi',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'SUPPORTED_GET_SCALE',
              help: 'Multilevel Sensor Get Supported Scale',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8' } } } },
           '4': 
            { name: 'GET',
              help: 'Multilevel Sensor Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved1', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '5': 
            { name: 'REPORT',
              help: 'Multilevel Sensor Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '6': 
            { name: 'SUPPORTED_SCALE_REPORT',
              help: 'Multilevel Sensor Supported Scale Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleBitMask', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x31-V9': 
      { version: 9,
        name: 'SENSOR_MULTILEVEL',
        help: 'Command Class Sensor Multilevel',
        id: 49,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET_SENSOR',
              help: 'Multilevel Sensor Get Supported Sensor' },
           '2': 
            { name: 'SUPPORTED_SENSOR_REPORT',
              help: 'Multilevel Sensor Supported Sensor Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'AirTemperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'Humidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel',
                       '14': 'Weight',
                       '15': 'Voltage',
                       '16': 'Current',
                       '17': 'CO2level',
                       '18': 'AirFlow',
                       '19': 'TankCapacity',
                       '20': 'Distance',
                       '21': 'AnglePosition',
                       '22': 'Rotation',
                       '23': 'WaterTemperature',
                       '24': 'SoilTemperature',
                       '25': 'SeismicIntensity',
                       '26': 'SeismicMagnitude',
                       '27': 'Ultraviolet',
                       '28': 'ElectricalResistivity',
                       '29': 'ElectricalConductivity',
                       '30': 'Loudness',
                       '31': 'Moisture',
                       '32': 'Frequency',
                       '33': 'Time',
                       '34': 'TargetTemperature',
                       '35': 'ParticulateMatter25',
                       '36': 'FormaldehydeCh2olevel',
                       '37': 'RadonConcentration',
                       '38': 'MethaneDensityCh4',
                       '39': 'VolatileOrganicCompound',
                       '40': 'CarbonMonoxideColevel',
                       '41': 'SoilHumidity',
                       '42': 'SoilReactivity',
                       '43': 'SoilSalinity',
                       '44': 'HeartRate',
                       '45': 'BloodPressure',
                       '46': 'MuscleMass',
                       '47': 'FatMass',
                       '48': 'BoneMass',
                       '49': 'TotalBodyWaterTbw',
                       '50': 'BasicMetabolicRateBmr',
                       '51': 'BodyMassIndexBmi',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'SUPPORTED_GET_SCALE',
              help: 'Multilevel Sensor Get Supported Scale',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9' } } } },
           '4': 
            { name: 'GET',
              help: 'Multilevel Sensor Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved1', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '5': 
            { name: 'REPORT',
              help: 'Multilevel Sensor Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'SensorValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '6': 
            { name: 'SUPPORTED_SCALE_REPORT',
              help: 'Multilevel Sensor Supported Scale Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    const: 
                     { '1': 'Temperatureversion1',
                       '2': 'GeneralPurposeValueversion1',
                       '3': 'Luminanceversion1',
                       '4': 'Powerversion2',
                       '5': 'RelativeHumidityversion2',
                       '6': 'Velocityversion2',
                       '7': 'Directionversion2',
                       '8': 'AtmosphericPressureversion2',
                       '9': 'BarometricPressureversion2',
                       '10': 'SolarRadiationversion2',
                       '11': 'DewPointversion2',
                       '12': 'RainRateversion2',
                       '13': 'TideLevelversion2',
                       '14': 'Weightversion3',
                       '15': 'Voltageversion3',
                       '16': 'Currentversion3',
                       '17': 'Co2levelversion3',
                       '18': 'AirFlowversion3',
                       '19': 'TankCapacityversion3',
                       '20': 'Distanceversion3',
                       '21': 'AnglePositionversion4',
                       '22': 'Rotationv5',
                       '23': 'WaterTemperaturev5',
                       '24': 'SoilTemperaturev5',
                       '25': 'SeismicIntensityv5',
                       '26': 'SeismicMagnitudev5',
                       '27': 'Ultravioletv5',
                       '28': 'ElectricalResistivityv5',
                       '29': 'ElectricalConductivityv5',
                       '30': 'Loudnessv5',
                       '31': 'Moisturev5',
                       '32': 'Frequencyv6',
                       '33': 'Timev6',
                       '34': 'TargetTemperaturev6',
                       '35': 'ParticulateMatter25v7',
                       '36': 'FormaldehydeCh2olevelv7',
                       '37': 'RadonConcentrationv7',
                       '38': 'MethaneDensityCh4v7',
                       '39': 'VolatileOrganicCompoundv7',
                       '40': 'CarbonMonoxideColevelv7',
                       '41': 'SoilHumidityv7',
                       '42': 'SoilReactivityv7',
                       '43': 'SoilSalinityv7',
                       '44': 'HeartRatev7',
                       '45': 'BloodPressurev7',
                       '46': 'MuscleMassv7',
                       '47': 'FatMassv7',
                       '48': 'BoneMassv7',
                       '49': 'TotalBodyWaterTbwv7',
                       '50': 'BasicMetabolicRateBmrv7',
                       '51': 'BodyMassIndexBmiv7',
                       '52': 'AccelerationXaxisv8',
                       '53': 'AccelerationYaxisv8',
                       '54': 'AccelerationZaxisv8',
                       '55': 'SmokeDensityv8',
                       '56': 'WaterFlowv9',
                       '57': 'WaterPressurev9',
                       '58': 'RfSignalStrengthv9' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleBitMask', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x32-V1': 
      { version: 1,
        name: 'METER',
        help: 'Command Class Meter',
        id: 50,
        COMMAND: 
         { '1': { name: 'GET', help: 'Meter Get' },
           '2': 
            { name: 'REPORT',
              help: 'Meter Report',
              param: 
               { '0': 
                  { name: 'MeterType',
                    type: 'CONST',
                    const: { '1': 'ElectricMeter', '2': 'GasMeter', '3': 'WaterMeter' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'MeterValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x32-V2': 
      { version: 2,
        name: 'METER',
        help: 'Command Class Meter',
        id: 50,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Meter Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } } } },
           '2': 
            { name: 'REPORT',
              help: 'Meter Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'MeterType', shifter: 0 },
                       '96': { fieldname: 'RateType', shifter: 5 } },
                    bitflag: { '128': 'Reserved' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'MeterValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': { name: 'DeltaTime', type: 'WORD', showhex: false },
                 '4': 
                  { name: 'PreviousMeterValue',
                    type: 'VARIANT',
                    optionaloffs: 3,
                    optionalmask: 255,
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '3': { name: 'SUPPORTED_GET', help: 'Meter Supported Get' },
           '4': 
            { name: 'SUPPORTED_REPORT',
              help: 'Meter Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'MeterType', shifter: 0 },
                       '96': { fieldname: 'Reserved1', shifter: 5 } },
                    bitflag: { '128': 'MeterReset' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ScaleSupported', shifter: 0 },
                       '240': { fieldname: 'Reserved2', shifter: 4 } } } } },
           '5': { name: 'RESET', help: 'Meter Reset' } } },
     '0x32-V3': 
      { version: 3,
        name: 'METER',
        help: 'Command Class Meter',
        id: 50,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Meter Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved', shifter: 0 },
                       '56': { fieldname: 'Scale', shifter: 3 },
                       '192': { fieldname: 'Reserved2', shifter: 6 } } } } },
           '2': 
            { name: 'REPORT',
              help: 'Meter Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'MeterType', shifter: 0 },
                       '96': { fieldname: 'RateType', shifter: 5 } },
                    bitflag: { '128': 'ScaleBit2' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'ScaleBits10', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'MeterValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': { name: 'DeltaTime', type: 'WORD', showhex: false },
                 '4': 
                  { name: 'PreviousMeterValue',
                    type: 'VARIANT',
                    optionaloffs: 3,
                    optionalmask: 255,
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '3': { name: 'SUPPORTED_GET', help: 'Meter Supported Get' },
           '4': 
            { name: 'SUPPORTED_REPORT',
              help: 'Meter Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'MeterType', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'MeterReset' } },
                 '1': { name: 'ScaleSupported', type: 'BYTE', showhex: true } } },
           '5': { name: 'RESET', help: 'Meter Reset' } } },
     '0x32-V4': 
      { version: 4,
        name: 'METER',
        help: 'Command Class Meter',
        id: 50,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Meter Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved', shifter: 0 },
                       '56': { fieldname: 'Scale', shifter: 3 } },
                    fieldenum: 
                     { '2': 
                        { fieldname: 'RateType',
                          fieldmask: 192,
                          shifter: 6,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'Import',
                             '2': 'Export',
                             '3': 'NotToBeUsed' } } } },
                 '1': { name: 'Scale2', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'REPORT',
              help: 'Meter Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'MeterType',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'ElectricMeter',
                             '2': 'GasMeter',
                             '3': 'WaterMeter' } },
                       '1': 
                        { fieldname: 'RateType',
                          fieldmask: 96,
                          shifter: 5,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'Import',
                             '2': 'Export',
                             '3': 'NotToBeUsed' } } },
                    bitflag: { '128': 'ScaleBit2' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'ScaleBits10', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'MeterValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': { name: 'DeltaTime', type: 'WORD', showhex: false },
                 '4': 
                  { name: 'PreviousMeterValue',
                    type: 'VARIANT',
                    optionaloffs: 3,
                    optionalmask: 255,
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '5': { name: 'Scale2', type: 'BYTE', showhex: true } } },
           '3': { name: 'SUPPORTED_GET', help: 'Meter Supported Get' },
           '4': 
            { name: 'SUPPORTED_REPORT',
              help: 'Meter Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'MeterType',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'ElectricMeter',
                             '2': 'GasMeter',
                             '3': 'WaterMeter' } },
                       '1': 
                        { fieldname: 'RateType',
                          fieldmask: 96,
                          shifter: 5,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'ImportOnly',
                             '2': 'ExportOnly',
                             '3': 'ImportAndExport' } } },
                    bitflag: { '128': 'MeterReset' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ScaleSupported0', shifter: 0 } },
                    bitflag: { '128': 'MST' } },
                 '2': 
                  { name: 'NumberOfScaleSupportedBytesToFollow',
                    type: 'BYTE',
                    showhex: true },
                 '3': 
                  { name: 'ScaleSupported',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 } } },
           '5': { name: 'RESET', help: 'Meter Reset' } } },
     '0x33-V1': 
      { version: 1,
        name: 'SWITCH_COLOR',
        help: 'Command Class Switch Color',
        id: 51,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Color Switch Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Color Switch Supported Report',
              param: { '0': { name: 'ColorComponentMask', type: 'WORD', showhex: true } } },
           '3': 
            { name: 'GET',
              help: 'Color Switch Get',
              param: { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'REPORT',
              help: 'Color Switch Report',
              param: 
               { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                 '1': { name: 'Value', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'SET',
              help: 'Color Switch Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'ColorComponentCount', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                       '1': { name: 'Value', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } },
           '6': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Color Switch Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '32': 'IgnoreStartState', '64': 'UpDown', '128': 'Res2' } },
                 '1': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                 '2': { name: 'StartLevel', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Color Switch Stop Level Change',
              param: { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true } } } } },
     '0x33-V2': 
      { version: 2,
        name: 'SWITCH_COLOR',
        help: 'Command Class Switch Color',
        id: 51,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Color Switch Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Color Switch Supported Report',
              param: { '0': { name: 'ColorComponentMask', type: 'WORD', showhex: true } } },
           '3': 
            { name: 'GET',
              help: 'Color Switch Get',
              param: { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'REPORT',
              help: 'Color Switch Report',
              param: 
               { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                 '1': { name: 'Value', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'SET',
              help: 'Color Switch Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'ColorComponentCount', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                       '1': { name: 'Value', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 },
                 '2': { name: 'Duration', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Color Switch Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '32': 'IgnoreStartState', '64': 'UpDown', '128': 'Res2' } },
                 '1': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                 '2': { name: 'StartLevel', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Color Switch Stop Level Change',
              param: { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true } } } } },
     '0x33-V3': 
      { version: 3,
        name: 'SWITCH_COLOR',
        help: 'Command Class Switch Color',
        id: 51,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Color Switch Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Color Switch Supported Report',
              param: { '0': { name: 'ColorComponentMask', type: 'WORD', showhex: true } } },
           '3': 
            { name: 'GET',
              help: 'Color Switch Get',
              param: { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'REPORT',
              help: 'Color Switch Report',
              param: 
               { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                 '1': { name: 'CurrentValue', type: 'BYTE', showhex: true },
                 '2': { name: 'TargetValue', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: 
                     { '0': 'AlreadyAtTheTargetValue',
                       '254': 'UnknownDuration',
                       '255': 'Reserved' } } } },
           '5': 
            { name: 'SET',
              help: 'Color Switch Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'ColorComponentCount', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                       '1': { name: 'Value', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 },
                 '2': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: { '0': 'Instantly', '255': 'Default' } } } },
           '6': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Color Switch Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '32': 'IgnoreStartState', '64': 'UpDown', '128': 'Res2' } },
                 '1': { name: 'ColorComponentId', type: 'BYTE', showhex: true },
                 '2': { name: 'StartLevel', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: { '0': 'Instantly', '255': 'Default' } } } },
           '7': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Color Switch Stop Level Change',
              param: { '0': { name: 'ColorComponentId', type: 'BYTE', showhex: true } } } } },
     '0x34-V1': 
      { version: 1,
        name: 'NETWORK_MANAGEMENT_INCLUSION',
        help: 'Command Class Network Management Inclusion',
        id: 52,
        COMMAND: 
         { '1': 
            { name: 'NODE_ADD',
              help: 'Node Add',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'NodeAddAny',
                       '2': 'NodeAddController',
                       '3': 'NodeAddSlave',
                       '4': 'NodeAddExisting',
                       '5': 'NodeAddStop',
                       '6': 'NodeAddStopFailed' } },
                 '3': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'NODE_ADD_STATUS',
              help: 'Node Add Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '6': 'NodeAddStatusDone',
                       '7': 'NodeAddStatusFailed',
                       '9': 'NodeAddStatusSecurityFailed' } },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '4': { name: 'NodeInfoLength', type: 'BYTE', showhex: true },
                 '5': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Capability', shifter: 0 } },
                    bitflag: { '128': 'Listening' } },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Security', shifter: 0 } },
                    bitflag: { '128': 'Opt' } },
                 '7': { name: 'BasicDeviceClass', type: 'BYTE', showhex: true },
                 '8': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                 '9': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true },
                 '10': 
                  { name: 'CommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'NODE_REMOVE',
              help: 'Node Remove',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'NodeRemoveAny',
                       '2': 'NodeRemoveController',
                       '3': 'NodeRemoveSlave',
                       '5': 'NodeRemoveStop' } } } },
           '4': 
            { name: 'NODE_REMOVE_STATUS',
              help: 'Node Remove Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: { '6': 'NodeRemoveStatusDone', '7': 'NodeRemoveStatusFailed' } },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '7': 
            { name: 'FAILED_NODE_REMOVE',
              help: 'Failed Node Remove',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '8': 
            { name: 'FAILED_NODE_REMOVE_STATUS',
              help: 'Failed Node Remove Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'FailedNodeNotFound',
                       '1': 'Done',
                       '2': 'FailedNodeRemoveFail' } } } },
           '9': 
            { name: 'FAILED_NODE_REPLACE',
              help: 'Failed Node Replace',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Mode', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'FAILED_NODE_REPLACE_STATUS',
              help: 'Failed Node Replace Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '4': 'Done',
                       '5': 'FailedNodeReplaceFail',
                       '9': 'FailedNodeReplaceSecurityFailed' } },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '11': 
            { name: 'NODE_NEIGHBOR_UPDATE_REQUEST',
              help: 'Node Neighbor Update Request',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '12': 
            { name: 'NODE_NEIGHBOR_UPDATE_STATUS',
              help: 'Node Neighbor Update Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '34': 'NeighborUpdateStatusDone',
                       '35': 'NeighborUpdateStatusFail' } } } },
           '13': 
            { name: 'RETURN_ROUTE_ASSIGN',
              help: 'Return Route Assign',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwaveNodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'SourceNodeId',
                    showhex: false },
                 '2': 
                  { name: 'DestinationNodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false } } },
           '14': 
            { name: 'RETURN_ROUTE_ASSIGN_COMPLETE',
              help: 'Return Route Assign Complete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'TransmitCompleteOk',
                       '1': 'TransmitCompleteNoAck',
                       '2': 'TransmitCompleteFail' } } } },
           '15': 
            { name: 'RETURN_ROUTE_DELETE',
              help: 'Return Route Delete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '16': 
            { name: 'RETURN_ROUTE_DELETE_COMPLETE',
              help: 'Return Route Delete Complete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'TransmitCompleteOk',
                       '1': 'TransmitCompleteNoAck',
                       '2': 'TransmitCompleteFail' } } } } } },
     '0x34-V2': 
      { version: 2,
        name: 'NETWORK_MANAGEMENT_INCLUSION',
        help: 'Command Class Network Management Inclusion',
        id: 52,
        COMMAND: 
         { '1': 
            { name: 'NODE_ADD',
              help: 'Node Add',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'NodeAddAny',
                       '2': 'NodeAddController',
                       '3': 'NodeAddSlave',
                       '4': 'NodeAddExisting',
                       '5': 'NodeAddStop',
                       '6': 'NodeAddStopFailed',
                       '7': 'NodeAddAnyS2' } },
                 '3': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'NODE_ADD_STATUS',
              help: 'Node Add Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '6': 'NodeAddStatusDone',
                       '7': 'NodeAddStatusFailed',
                       '9': 'NodeAddStatusSecurityFailed' } },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '4': { name: 'NodeInfoLength', type: 'BYTE', showhex: true },
                 '5': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Capability', shifter: 0 } },
                    bitflag: { '128': 'Listening' } },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Security', shifter: 0 } },
                    bitflag: { '128': 'Opt' } },
                 '7': { name: 'BasicDeviceClass', type: 'BYTE', showhex: true },
                 '8': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                 '9': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true },
                 '10': 
                  { name: 'NonsecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '11': 
                  { name: 'SecurityMark',
                    type: 'MARKER',
                    const: { '0': 'SecurityMark', '241': 'SecurityMark' } },
                 '12': 
                  { name: 'SecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '13': { name: 'GrantedKeys', type: 'BYTE', showhex: true },
                 '14': { name: 'KexFailType', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'NODE_REMOVE',
              help: 'Node Remove',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'NodeRemoveAny',
                       '2': 'NodeRemoveController',
                       '3': 'NodeRemoveSlave',
                       '5': 'NodeRemoveStop' } } } },
           '4': 
            { name: 'NODE_REMOVE_STATUS',
              help: 'Node Remove Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: { '6': 'NodeRemoveStatusDone', '7': 'NodeRemoveStatusFailed' } },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '7': 
            { name: 'FAILED_NODE_REMOVE',
              help: 'Failed Node Remove',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '8': 
            { name: 'FAILED_NODE_REMOVE_STATUS',
              help: 'Failed Node Remove Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'FailedNodeNotFound',
                       '1': 'Done',
                       '2': 'FailedNodeRemoveFail' } } } },
           '9': 
            { name: 'FAILED_NODE_REPLACE',
              help: 'Failed Node Replace',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Mode', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'FAILED_NODE_REPLACE_STATUS',
              help: 'Failed Node Replace Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '4': 'Done',
                       '5': 'FailedNodeReplaceFail',
                       '9': 'FailedNodeReplaceSecurityFailed' } },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '3': { name: 'GrantedKeys', type: 'BYTE', showhex: true },
                 '4': { name: 'KexFailType', type: 'BYTE', showhex: true } } },
           '11': 
            { name: 'NODE_NEIGHBOR_UPDATE_REQUEST',
              help: 'Node Neighbor Update Request',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '12': 
            { name: 'NODE_NEIGHBOR_UPDATE_STATUS',
              help: 'Node Neighbor Update Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '34': 'NeighborUpdateStatusDone',
                       '35': 'NeighborUpdateStatusFail' } } } },
           '13': 
            { name: 'RETURN_ROUTE_ASSIGN',
              help: 'Return Route Assign',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwaveNodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'SourceNodeId',
                    showhex: false },
                 '2': 
                  { name: 'DestinationNodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false } } },
           '14': 
            { name: 'RETURN_ROUTE_ASSIGN_COMPLETE',
              help: 'Return Route Assign Complete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'TransmitCompleteOk',
                       '1': 'TransmitCompleteNoAck',
                       '2': 'TransmitCompleteFail' } } } },
           '15': 
            { name: 'RETURN_ROUTE_DELETE',
              help: 'Return Route Delete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '16': 
            { name: 'RETURN_ROUTE_DELETE_COMPLETE',
              help: 'Return Route Delete Complete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'TransmitCompleteOk',
                       '1': 'TransmitCompleteNoAck',
                       '2': 'TransmitCompleteFail' } } } },
           '17': 
            { name: 'NODE_ADD_KEYS_REPORT',
              help: 'Node Add Keys Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'RequestClientsideAuthentication' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '2': { name: 'RequestedKeys', type: 'BYTE', showhex: true } } },
           '18': 
            { name: 'NODE_ADD_KEYS_SET',
              help: 'Node Add Keys Set',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Accept', '2': 'GrantClientsideAuthentication' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '2': { name: 'GrantedKeys', type: 'BYTE', showhex: true } } },
           '19': 
            { name: 'NODE_ADD_DSK_REPORT',
              help: 'Node Add DSK Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InputDskLength', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '2': 
                  { name: 'DSK',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } },
           '20': 
            { name: 'NODE_ADD_DSK_SET',
              help: 'Node Add DSK Set',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InputDskLength', shifter: 0 },
                       '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'Accept' } },
                 '2': 
                  { name: 'InputDsk',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 15,
                    shifter: 0 } } } } },
     '0x35-V1': 
      { version: 1,
        name: 'METER_PULSE',
        help: 'Command Class Meter Pulse',
        comment: '[DEPRECATED]',
        id: 53,
        COMMAND: 
         { '4': { name: 'GET', help: 'Meter Pulse Get' },
           '5': 
            { name: 'REPORT',
              help: 'Meter Pulse Report',
              param: { '0': { name: 'PulseCount', type: 'DWORD', showhex: true } } } } },
     '0x36-V1': 
      { version: 1,
        name: 'BASIC_TARIFF_INFO',
        help: 'Command Class Basic Tariff Info',
        id: 54,
        COMMAND: 
         { '1': { name: 'GET', help: 'Basic Tariff Info Get' },
           '2': 
            { name: 'REPORT',
              help: 'Basic Tariff Info Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'TotalNoImportRates', shifter: 0 },
                       '112': { fieldname: 'Reserved1', shifter: 4 } },
                    bitflag: { '128': 'Dual' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'E1CurrentRateInUse', shifter: 0 },
                       '240': { fieldname: 'Reserved2', shifter: 4 } } },
                 '2': 
                  { name: 'E1RateConsumptionRegister',
                    type: 'DWORD',
                    showhex: true },
                 '3': { name: 'E1TimeForNextRateHours', type: 'BYTE', showhex: true },
                 '4': { name: 'E1TimeForNextRateMinutes', type: 'BYTE', showhex: true },
                 '5': { name: 'E1TimeForNextRateSeconds', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'E2CurrentRateInUse', shifter: 0 },
                       '240': { fieldname: 'Reserved3', shifter: 4 } } },
                 '7': 
                  { name: 'E2RateConsumptionRegister',
                    type: 'DWORD',
                    showhex: true } } } } },
     '0x37-V1': 
      { version: 1,
        name: 'HRV_STATUS',
        help: 'Command Class Hrv Status',
        id: 55,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Hrv Status Get',
              param: 
               { '0': 
                  { name: 'StatusParameter',
                    type: 'CONST',
                    const: 
                     { '0': 'OutdoorAirTemperature',
                       '1': 'SupplyAirTemperature',
                       '2': 'ExhaustAirTemperature',
                       '3': 'DischargeAirTemperature',
                       '4': 'RoomTemperature',
                       '5': 'RelativeHumidityInRoom',
                       '6': 'RemainingFilterLife' } } } },
           '2': 
            { name: 'REPORT',
              help: 'Hrv Status Report',
              param: 
               { '0': 
                  { name: 'StatusParameter',
                    type: 'CONST',
                    const: 
                     { '0': 'OutdoorAirTemperature',
                       '1': 'SupplyAirTemperature',
                       '2': 'ExhaustAirTemperature',
                       '3': 'DischargeAirTemperature',
                       '4': 'RoomTemperature',
                       '5': 'RelativeHumidityInRoom',
                       '6': 'RemainingFilterLife' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': { name: 'SUPPORTED_GET', help: 'Hrv Status Supported Get' },
           '4': 
            { name: 'SUPPORTED_REPORT',
              help: 'Hrv Status Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'OutdoorAirTemperature',
                       '1': 'SupplyAirTemperature',
                       '2': 'ExhaustAirTemperature',
                       '3': 'DischargeAirTemperature',
                       '4': 'RoomTemperature',
                       '5': 'RelativeHumidityInRoom',
                       '6': 'RemainingFilterLife' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x38-V1': 
      { version: 1,
        name: 'THERMOSTAT_HEATING',
        help: 'Command Class Thermostat Heating',
        id: 56,
        COMMAND: 
         { '1': 
            { name: 'MODE_SET',
              help: 'Thermostat Heating Mode Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: 
                     { '0': 'Off',
                       '1': 'OffTimed',
                       '2': 'Off3Hours',
                       '3': 'AntiFreeze',
                       '4': 'Manual',
                       '5': 'TemporaryManual',
                       '6': 'Automatic',
                       '7': 'ManualTimed' } } } },
           '2': { name: 'MODE_GET', help: 'Thermostat Heating Mode Get' },
           '3': 
            { name: 'MODE_REPORT',
              help: 'Thermostat Heating Mode Report',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: 
                     { '0': 'Off',
                       '1': 'OffTimed',
                       '2': 'Off3Hours',
                       '3': 'AntiFreeze',
                       '4': 'Manual',
                       '5': 'TemporaryManual',
                       '6': 'Automatic',
                       '7': 'ManualTimed' } } } },
           '4': 
            { name: 'SETPOINT_SET',
              help: 'Thermostat Heating Setpoint Set',
              param: 
               { '0': { name: 'SetpointNr', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '5': 
            { name: 'SETPOINT_GET',
              help: 'Thermostat Heating Setpoint Get',
              param: { '0': { name: 'SetpointNr', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SETPOINT_REPORT',
              help: 'Thermostat Heating Setpoint Report',
              param: 
               { '0': { name: 'SetpointNr', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '9': 
            { name: 'RELAY_STATUS_GET',
              help: 'Thermostat Heating Relay Status Get' },
           '10': 
            { name: 'RELAY_STATUS_REPORT',
              help: 'Thermostat Heating Relay Status Report',
              param: 
               { '0': 
                  { name: 'RelayStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '1': 'On' } } } },
           '11': 
            { name: 'STATUS_SET',
              help: 'Thermostat Heating Status Set',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: { '0': 'Heating', '1': 'Cooling' } } } },
           '12': { name: 'STATUS_GET', help: 'Thermostat Heating Status Get' },
           '13': 
            { name: 'STATUS_REPORT',
              help: 'Thermostat Heating Heating Status Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: { '0': 'Heating', '1': 'Cooling' } } } },
           '17': 
            { name: 'TIMED_OFF_SET',
              help: 'Thermostat Heating Timed Off Set',
              param: 
               { '0': { name: 'Minutes', type: 'BYTE', showhex: true },
                 '1': { name: 'Hours', type: 'BYTE', showhex: true } } } } },
     '0x39-V1': 
      { version: 1,
        name: 'HRV_CONTROL',
        help: 'Command Class Hrv Control',
        id: 57,
        COMMAND: 
         { '1': 
            { name: 'MODE_SET',
              help: 'Hrv Control Mode Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'DemandAutomatic',
                             '2': 'Schedule',
                             '3': 'EnergySavingsMode',
                             '4': 'Manual' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } } } },
           '2': { name: 'MODE_GET', help: 'Hrv Control Mode Get' },
           '3': 
            { name: 'MODE_REPORT',
              help: 'Hrv Control Mode Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'DemandAutomatic',
                             '2': 'Schedule',
                             '3': 'EnergySavingsMode',
                             '4': 'Manual' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } } } },
           '4': 
            { name: 'BYPASS_SET',
              help: 'Hrv Control Bypass Set',
              param: { '0': { name: 'Bypass', type: 'BYTE', showhex: true } } },
           '5': { name: 'BYPASS_GET', help: 'Hrv Control Bypass  Get' },
           '6': 
            { name: 'BYPASS_REPORT',
              help: 'Hrv Control Bypass Report',
              param: { '0': { name: 'Bypass', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'VENTILATION_RATE_SET',
              help: 'Hrv Control Ventilation Rate Set',
              param: { '0': { name: 'VentilationRate', type: 'BYTE', showhex: true } } },
           '8': 
            { name: 'VENTILATION_RATE_GET',
              help: 'Hrv Control Ventilation Rate  Get' },
           '9': 
            { name: 'VENTILATION_RATE_REPORT',
              help: 'Hrv Control Ventilation Rate  Report',
              param: { '0': { name: 'VentilationRate', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'MODE_SUPPORTED_GET',
              help: 'Hrv Control Mode Supported Get' },
           '11': 
            { name: 'MODE_SUPPORTED_REPORT',
              help: 'Hrv Control Mode Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'ManualControlSupported',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'BypassOpenClose',
                             '1': 'BypassAuto',
                             '2': 'ModulatedBypass',
                             '3': 'VentilationRate' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Off',
                       '1': 'DemandAutomatic',
                       '2': 'Schedule',
                       '3': 'EnergySavingsMode',
                       '4': 'Manual' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x3a-V1': 
      { version: 1,
        name: 'DCP_CONFIG',
        help: 'Command Class Dcp Config',
        id: 58,
        COMMAND: 
         { '1': 
            { name: 'DCP_LIST_SUPPORTED_GET',
              help: 'Dcp List Supported Get' },
           '2': 
            { name: 'DCP_LIST_SUPPORTED_REPORT',
              help: 'Dcp List Supported Report',
              param: 
               { '0': { name: 'DcpListSize', type: 'BYTE', showhex: true },
                 '1': { name: 'FreeDcpListEntries', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'DCP_LIST_SET',
              help: 'Dcp List Set',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'DcpRateId', type: 'BYTE', showhex: true },
                 '7': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'NumberOfDc', shifter: 0 },
                       '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '8': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                       '1': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 7,
                    lengthmask: 3,
                    shifter: 0 },
                 '9': { name: 'StartYear', type: 'WORD', showhex: true },
                 '10': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '11': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '12': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '13': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '14': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '15': { name: 'DurationHourTime', type: 'BYTE', showhex: true },
                 '16': { name: 'DurationMinuteTime', type: 'BYTE', showhex: true },
                 '17': { name: 'DurationSecondTime', type: 'BYTE', showhex: true },
                 '18': { name: 'EventPriority', type: 'BYTE', showhex: true },
                 '19': { name: 'LoadShedding', type: 'BYTE', showhex: true },
                 '20': { name: 'StartAssociationGroup', type: 'BYTE', showhex: true },
                 '21': { name: 'StopAssociationGroup', type: 'BYTE', showhex: true },
                 '22': { name: 'RandomizationInterval', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'DCP_LIST_REMOVE',
              help: 'Dcp List Remove',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondLocalTime', type: 'BYTE', showhex: true } } } } },
     '0x3b-V1': 
      { version: 1,
        name: 'DCP_MONITOR',
        help: 'Command Class Dcp Monitor',
        id: 59,
        COMMAND: 
         { '1': { name: 'DCP_LIST_GET', help: 'Dcp List Get' },
           '2': 
            { name: 'DCP_LIST_REPORT',
              help: 'Dcp List Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': { name: 'Year', type: 'WORD', showhex: true },
                 '2': { name: 'Month', type: 'BYTE', showhex: true },
                 '3': { name: 'Day', type: 'BYTE', showhex: true },
                 '4': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'DcpId', type: 'BYTE', showhex: true },
                 '8': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'NumberOfDc', shifter: 0 },
                       '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                       '1': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 },
                 '10': { name: 'StartYear', type: 'WORD', showhex: true },
                 '11': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '12': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '13': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '14': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '15': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '16': { name: 'DurationHourTime', type: 'BYTE', showhex: true },
                 '17': { name: 'DurationMinuteTime', type: 'BYTE', showhex: true },
                 '18': { name: 'DurationSecondTime', type: 'BYTE', showhex: true },
                 '19': { name: 'EventPriority', type: 'BYTE', showhex: true },
                 '20': { name: 'LoadShedding', type: 'BYTE', showhex: true },
                 '21': { name: 'StartAssociationGroup', type: 'BYTE', showhex: true },
                 '22': { name: 'StopAssociationGroup', type: 'BYTE', showhex: true },
                 '23': { name: 'RandomizationInterval', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'DCP_EVENT_STATUS_GET',
              help: 'Dcp Event Status Get',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondLocalTime', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'DCP_EVENT_STATUS_REPORT',
              help: 'Dcp Event Status Report',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'EventStatus',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'Reserved',
                       '1': 'EventStarted',
                       '2': 'EventCompleted',
                       '3': 'EventRejected',
                       '4': 'EventNotApplicable' } } } } } },
     '0x3c-V1': 
      { version: 1,
        name: 'METER_TBL_CONFIG',
        help: 'Command Class Meter Tbl Config',
        id: 60,
        COMMAND: 
         { '1': 
            { name: 'METER_TBL_TABLE_POINT_ADM_NO_SET',
              help: 'Meter Tbl Table Point Adm No Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'MeterPointAdmNumberCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x3d-V1': 
      { version: 1,
        name: 'METER_TBL_MONITOR',
        help: 'Command Class Meter Tbl Monitor',
        id: 61,
        COMMAND: 
         { '1': 
            { name: 'METER_TBL_TABLE_POINT_ADM_NO_GET',
              help: 'Meter Tbl Table Point Adm No Get' },
           '2': 
            { name: 'METER_TBL_TABLE_POINT_ADM_NO_REPORT',
              help: 'Meter Tbl Table Point Adm No Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'MeterPointAdmNumberCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } },
           '3': 
            { name: 'METER_TBL_TABLE_ID_GET',
              help: 'Meter Tbl Table Id Get' },
           '4': 
            { name: 'METER_TBL_TABLE_ID_REPORT',
              help: 'Meter Tbl Table Id Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'MeterIdCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } },
           '5': 
            { name: 'METER_TBL_TABLE_CAPABILITY_GET',
              help: 'Meter Tbl Table Capability Get' },
           '6': 
            { name: 'METER_TBL_REPORT',
              help: 'Meter Tbl Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'MeterType', shifter: 0 },
                       '192': { fieldname: 'RateType', shifter: 6 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'PayMeter',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'Creditmeter',
                             '2': 'PrepaymentMeter',
                             '3': 'PrepaymentMeterDebt' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '2': { name: 'DatasetSupported', type: 'BIT_24', showhex: true },
                 '3': 
                  { name: 'DatasetHistorySupported',
                    type: 'BIT_24',
                    showhex: true },
                 '4': { name: 'DataHistorySupported', type: 'BIT_24', showhex: true } } },
           '7': 
            { name: 'METER_TBL_STATUS_SUPPORTED_GET',
              help: 'Meter Tbl  Status Supported Get' },
           '8': 
            { name: 'METER_TBL_STATUS_SUPPORTED_REPORT',
              help: 'Meter Tbl  Status Supported Report',
              param: 
               { '0': 
                  { name: 'SupportedOperatingStatus',
                    type: 'BIT_24',
                    showhex: true },
                 '1': { name: 'StatusEventLogDepth', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'METER_TBL_STATUS_DEPTH_GET',
              help: 'Meter Tbl  Status Depth Get',
              param: { '0': { name: 'StatusEventLogDepth', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'METER_TBL_STATUS_DATE_GET',
              help: 'Meter Tbl  Status Date Get',
              param: 
               { '0': { name: 'MaximumReports', type: 'BYTE', showhex: true },
                 '1': { name: 'StartYear', type: 'WORD', showhex: true },
                 '2': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '3': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'StopYear', type: 'WORD', showhex: true },
                 '8': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '9': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '10': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '11': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true },
                 '12': { name: 'StopSecondLocalTime', type: 'BYTE', showhex: true } } },
           '11': 
            { name: 'METER_TBL_STATUS_REPORT',
              help: 'Meter Tbl  Status  Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': { name: 'CurrentOperatingStatus', type: 'BIT_24', showhex: true },
                 '2': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'OperatingStatusEventId', shifter: 0 },
                             '96': { fieldname: 'Reserved', shifter: 5 } },
                          bitflag: { '128': 'Type' } },
                       '1': { name: 'Year', type: 'WORD', showhex: true },
                       '2': { name: 'Month', type: 'BYTE', showhex: true },
                       '3': { name: 'Day', type: 'BYTE', showhex: true },
                       '4': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                       '5': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                       '6': { name: 'SecondLocalTime', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '12': 
            { name: 'METER_TBL_CURRENT_DATA_GET',
              help: 'Meter Tbl Current Data Get',
              param: { '0': { name: 'DatasetRequested', type: 'BIT_24', showhex: true } } },
           '13': 
            { name: 'METER_TBL_CURRENT_DATA_REPORT',
              help: 'Meter Tbl Current Data Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'RateType', shifter: 0 },
                       '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '2': { name: 'Dataset', type: 'BIT_24', showhex: true },
                 '3': { name: 'Year', type: 'WORD', showhex: true },
                 '4': { name: 'Month', type: 'BYTE', showhex: true },
                 '5': { name: 'Day', type: 'BYTE', showhex: true },
                 '6': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'CurrentScale', shifter: 0 },
                             '224': { fieldname: 'CurrentPrecision', shifter: 5 } } },
                       '1': { name: 'CurrentValue', type: 'DWORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '14': 
            { name: 'METER_TBL_HISTORICAL_DATA_GET',
              help: 'Meter Tbl Historical Data Get',
              param: 
               { '0': { name: 'MaximumReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'HistoricalDatasetRequested',
                    type: 'BIT_24',
                    showhex: true },
                 '2': { name: 'StartYear', type: 'WORD', showhex: true },
                 '3': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '4': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '5': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'StopYear', type: 'WORD', showhex: true },
                 '9': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '10': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '11': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '12': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true },
                 '13': { name: 'StopSecondLocalTime', type: 'BYTE', showhex: true } } },
           '15': 
            { name: 'METER_TBL_HISTORICAL_DATA_REPORT',
              help: 'Meter Tbl Historical Data Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'RateType', shifter: 0 },
                       '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '2': { name: 'Dataset', type: 'BIT_24', showhex: true },
                 '3': { name: 'Year', type: 'WORD', showhex: true },
                 '4': { name: 'Month', type: 'BYTE', showhex: true },
                 '5': { name: 'Day', type: 'BYTE', showhex: true },
                 '6': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'HistoricalScale', shifter: 0 },
                             '224': { fieldname: 'HistoricalPrecision', shifter: 5 } } },
                       '1': { name: 'HistoricalValue', type: 'DWORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x3d-V2': 
      { version: 2,
        name: 'METER_TBL_MONITOR',
        help: 'Command Class Meter Tbl Monitor',
        id: 61,
        COMMAND: 
         { '1': 
            { name: 'METER_TBL_TABLE_POINT_ADM_NO_GET',
              help: 'Meter Tbl Table Point Adm No Get' },
           '2': 
            { name: 'METER_TBL_TABLE_POINT_ADM_NO_REPORT',
              help: 'Meter Tbl Table Point Adm No Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'MeterPointAdmNumberCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } },
           '3': 
            { name: 'METER_TBL_TABLE_ID_GET',
              help: 'Meter Tbl Table Id Get' },
           '4': 
            { name: 'METER_TBL_TABLE_ID_REPORT',
              help: 'Meter Tbl Table Id Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'MeterIdCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } },
           '5': 
            { name: 'METER_TBL_TABLE_CAPABILITY_GET',
              help: 'Meter Tbl Table Capability Get' },
           '6': 
            { name: 'METER_TBL_REPORT',
              help: 'Meter Tbl Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'MeterType', shifter: 0 },
                       '192': { fieldname: 'RateType', shifter: 6 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'PayMeter',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Reserved',
                             '1': 'Creditmeter',
                             '2': 'PrepaymentMeter',
                             '3': 'PrepaymentMeterDebt' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '2': { name: 'DatasetSupported', type: 'BIT_24', showhex: true },
                 '3': 
                  { name: 'DatasetHistorySupported',
                    type: 'BIT_24',
                    showhex: true },
                 '4': { name: 'DataHistorySupported', type: 'BIT_24', showhex: true } } },
           '7': 
            { name: 'METER_TBL_STATUS_SUPPORTED_GET',
              help: 'Meter Tbl  Status Supported Get' },
           '8': 
            { name: 'METER_TBL_STATUS_SUPPORTED_REPORT',
              help: 'Meter Tbl  Status Supported Report',
              param: 
               { '0': 
                  { name: 'SupportedOperatingStatus',
                    type: 'BIT_24',
                    showhex: true },
                 '1': { name: 'StatusEventLogDepth', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'METER_TBL_STATUS_DEPTH_GET',
              help: 'Meter Tbl  Status Depth Get',
              param: { '0': { name: 'StatusEventLogDepth', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'METER_TBL_STATUS_DATE_GET',
              help: 'Meter Tbl  Status Date Get',
              param: 
               { '0': { name: 'MaximumReports', type: 'BYTE', showhex: true },
                 '1': { name: 'StartYear', type: 'WORD', showhex: true },
                 '2': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '3': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'StopYear', type: 'WORD', showhex: true },
                 '8': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '9': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '10': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '11': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true },
                 '12': { name: 'StopSecondLocalTime', type: 'BYTE', showhex: true } } },
           '11': 
            { name: 'METER_TBL_STATUS_REPORT',
              help: 'Meter Tbl  Status  Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': { name: 'CurrentOperatingStatus', type: 'BIT_24', showhex: true },
                 '2': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'OperatingStatusEventId', shifter: 0 },
                             '96': { fieldname: 'Reserved', shifter: 5 } },
                          bitflag: { '128': 'Type' } },
                       '1': { name: 'Year', type: 'WORD', showhex: true },
                       '2': { name: 'Month', type: 'BYTE', showhex: true },
                       '3': { name: 'Day', type: 'BYTE', showhex: true },
                       '4': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                       '5': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                       '6': { name: 'SecondLocalTime', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '12': 
            { name: 'METER_TBL_CURRENT_DATA_GET',
              help: 'Meter Tbl Current Data Get',
              param: { '0': { name: 'DatasetRequested', type: 'BIT_24', showhex: true } } },
           '13': 
            { name: 'METER_TBL_CURRENT_DATA_REPORT',
              help: 'Meter Tbl Current Data Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'RateType', shifter: 0 },
                       '124': { fieldname: 'Reserved', shifter: 2 } },
                    bitflag: { '128': 'OperatingStatusIndication' } },
                 '2': { name: 'Dataset', type: 'BIT_24', showhex: true },
                 '3': { name: 'Year', type: 'WORD', showhex: true },
                 '4': { name: 'Month', type: 'BYTE', showhex: true },
                 '5': { name: 'Day', type: 'BYTE', showhex: true },
                 '6': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'CurrentScale', shifter: 0 },
                             '224': { fieldname: 'CurrentPrecision', shifter: 5 } } },
                       '1': { name: 'CurrentValue', type: 'DWORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '14': 
            { name: 'METER_TBL_HISTORICAL_DATA_GET',
              help: 'Meter Tbl Historical Data Get',
              param: 
               { '0': { name: 'MaximumReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'HistoricalDatasetRequested',
                    type: 'BIT_24',
                    showhex: true },
                 '2': { name: 'StartYear', type: 'WORD', showhex: true },
                 '3': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '4': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '5': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'StopYear', type: 'WORD', showhex: true },
                 '9': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '10': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '11': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '12': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true },
                 '13': { name: 'StopSecondLocalTime', type: 'BYTE', showhex: true } } },
           '15': 
            { name: 'METER_TBL_HISTORICAL_DATA_REPORT',
              help: 'Meter Tbl Historical Data Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'RateType', shifter: 0 },
                       '124': { fieldname: 'Reserved', shifter: 2 } },
                    bitflag: { '128': 'OperatingStatusIndication' } },
                 '2': { name: 'Dataset', type: 'BIT_24', showhex: true },
                 '3': { name: 'Year', type: 'WORD', showhex: true },
                 '4': { name: 'Month', type: 'BYTE', showhex: true },
                 '5': { name: 'Day', type: 'BYTE', showhex: true },
                 '6': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'HistoricalScale', shifter: 0 },
                             '224': { fieldname: 'HistoricalPrecision', shifter: 5 } } },
                       '1': { name: 'HistoricalValue', type: 'DWORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x3e-V1': 
      { version: 1,
        name: 'METER_TBL_PUSH',
        help: 'Command Class Meter Tbl Push',
        id: 62,
        COMMAND: 
         { '1': 
            { name: 'CONFIGURATION_SET',
              help: 'Meter Tbl Push Configuration Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'OperatingStatusPushMode', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '16': 'PS' } },
                 '1': { name: 'PushDataset', type: 'BIT_24', showhex: true },
                 '2': { name: 'IntervalMonths', type: 'BYTE', showhex: true },
                 '3': { name: 'IntervalDays', type: 'BYTE', showhex: true },
                 '4': { name: 'IntervalHours', type: 'BYTE', showhex: true },
                 '5': { name: 'IntervalMinutes', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '2': 
            { name: 'CONFIGURATION_GET',
              help: 'Meter Tbl Push Configuration Get' },
           '3': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Meter Tbl Push Configuration Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'OperatingStatusPushMode', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '16': 'PS' } },
                 '1': { name: 'PushDataset', type: 'BIT_24', showhex: true },
                 '2': { name: 'IntervalMonths', type: 'BYTE', showhex: true },
                 '3': { name: 'IntervalDays', type: 'BYTE', showhex: true },
                 '4': { name: 'IntervalHours', type: 'BYTE', showhex: true },
                 '5': { name: 'IntervalMinutes', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } } } },
     '0x3f-V1': 
      { version: 1,
        name: 'PREPAYMENT',
        help: 'Command Class Prepayment',
        id: 63,
        COMMAND: 
         { '1': 
            { name: 'BALANCE_GET',
              help: 'Prepayment Balance Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Reserved', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'BalanceType',
                          fieldmask: 192,
                          shifter: 6,
                          fieldenum: { '0': 'Utility', '1': 'Monetary' } } } } } },
           '2': 
            { name: 'BALANCE_REPORT',
              help: 'Prepayment Balance Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'MeterType', shifter: 0 },
                       '192': { fieldname: 'BalanceType', shifter: 6 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Scale', shifter: 0 },
                       '224': { fieldname: 'BalancePrecision', shifter: 5 } } },
                 '2': { name: 'BalanceValue', type: 'DWORD', showhex: true },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Reserved1', shifter: 0 },
                       '224': { fieldname: 'DebtPrecision', shifter: 5 } } },
                 '4': { name: 'Debt', type: 'DWORD', showhex: true },
                 '5': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Reserved2', shifter: 0 },
                       '224': { fieldname: 'EmerCreditPrecision', shifter: 5 } } },
                 '6': { name: 'EmerCredit', type: 'DWORD', showhex: true },
                 '7': { name: 'Currency', type: 'BIT_24', showhex: true },
                 '8': { name: 'DebtRecoveryPercentage', type: 'BYTE', showhex: true } } },
           '3': { name: 'SUPPORTED_GET', help: 'Prepayment Supported Get' },
           '4': 
            { name: 'SUPPORTED_REPORT',
              help: 'Prepayment Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'TypesSupported', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x40-V1': 
      { version: 1,
        name: 'THERMOSTAT_MODE',
        help: 'Command Class Thermostat Mode',
        id: 64,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Mode Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'Heat',
                             '2': 'Cool',
                             '3': 'Auto',
                             '4': 'AuxiliaryHeat',
                             '5': 'Resume',
                             '6': 'FanOnly',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } } } },
           '2': { name: 'GET', help: 'Thermostat Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Mode Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'Heat',
                             '2': 'Cool',
                             '3': 'Auto',
                             '4': 'AuxiliaryHeat',
                             '5': 'Resume',
                             '6': 'FanOnly',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } } } },
           '4': { name: 'SUPPORTED_GET', help: 'Thermostat Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Off',
                       '1': 'Heat',
                       '2': 'Cool',
                       '3': 'Auto',
                       '4': 'AuxiliaryemergencyHeat',
                       '5': 'Resume',
                       '6': 'FanOnly',
                       '7': 'Furnace',
                       '8': 'DryAir',
                       '9': 'MoistAir',
                       '10': 'AutoChangeover' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x40-V2': 
      { version: 2,
        name: 'THERMOSTAT_MODE',
        help: 'Command Class Thermostat Mode',
        id: 64,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Mode Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'Heat',
                             '2': 'Cool',
                             '3': 'Auto',
                             '4': 'AuxiliaryHeat',
                             '5': 'Resume',
                             '6': 'FanOnly',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeat',
                             '12': 'EnergySaveCool',
                             '13': 'AWAY' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } } } },
           '2': { name: 'GET', help: 'Thermostat Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Mode Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'Heat',
                             '2': 'Cool',
                             '3': 'Auto',
                             '4': 'AuxiliaryHeat',
                             '5': 'Resume',
                             '6': 'FanOnly',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeat',
                             '12': 'EnergySaveCool',
                             '13': 'AWAY' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } } } },
           '4': { name: 'SUPPORTED_GET', help: 'Thermostat Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Off',
                       '1': 'Heat',
                       '2': 'Cool',
                       '3': 'Auto',
                       '4': 'AuxiliaryemergencyHeat',
                       '5': 'Resume',
                       '6': 'FanOnly',
                       '7': 'Furnace',
                       '8': 'DryAir',
                       '9': 'MoistAir',
                       '10': 'AutoChangeover',
                       '11': 'EnergySaveHeat',
                       '12': 'EnergySaveCool',
                       '13': 'Away' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x40-V3': 
      { version: 3,
        name: 'THERMOSTAT_MODE',
        help: 'Command Class Thermostat Mode',
        id: 64,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Mode Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'Heat',
                             '2': 'Cool',
                             '3': 'Auto',
                             '4': 'AuxiliaryHeat',
                             '5': 'Resume',
                             '6': 'FanOnly',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeat',
                             '12': 'EnergySaveCool',
                             '13': 'AWAY',
                             '14': 'Reserved',
                             '15': 'FullPower',
                             '16': 'Reserved0',
                             '17': 'Reserved1',
                             '18': 'Reserved2',
                             '19': 'Reserved3',
                             '20': 'Reserved4',
                             '21': 'Reserved5',
                             '22': 'Reserved6',
                             '23': 'Reserved7',
                             '24': 'Reserved8',
                             '25': 'Reserved9',
                             '26': 'ReservedA',
                             '27': 'ReservedB',
                             '28': 'ReservedC',
                             '29': 'ReservedD',
                             '30': 'ReservedE',
                             '31': 'ManufacturerSpecifc' } } },
                    bitfield: { '224': { fieldname: 'NoOfManufacturerDataFields', shifter: 5 } } },
                 '1': 
                  { name: 'ManufacturerData',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 224,
                    shifter: 5 } } },
           '2': { name: 'GET', help: 'Thermostat Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Mode Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 31,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Off',
                             '1': 'Heat',
                             '2': 'Cool',
                             '3': 'Auto',
                             '4': 'AuxiliaryHeat',
                             '5': 'Resume',
                             '6': 'FanOnly',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeat',
                             '12': 'EnergySaveCool',
                             '13': 'AWAY',
                             '14': 'Reserved',
                             '15': 'FullPower',
                             '16': 'Reserved0',
                             '17': 'Reserved1',
                             '18': 'Reserved2',
                             '19': 'Reserved3',
                             '20': 'Reserved4',
                             '21': 'Reserved5',
                             '22': 'Reserved6',
                             '23': 'Reserved7',
                             '24': 'Reserved8',
                             '25': 'Reserved9',
                             '26': 'ReservedA',
                             '27': 'ReservedB',
                             '28': 'ReservedC',
                             '29': 'ReservedD',
                             '30': 'ReservedE',
                             '31': 'ManufacturerSpecifc' } } },
                    bitfield: { '224': { fieldname: 'NoOfManufacturerDataFields', shifter: 5 } } },
                 '1': 
                  { name: 'ManufacturerData',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 224,
                    shifter: 5 } } },
           '4': { name: 'SUPPORTED_GET', help: 'Thermostat Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Off',
                       '1': 'Heat',
                       '2': 'Cool',
                       '3': 'Auto',
                       '4': 'AuxiliaryemergencyHeat',
                       '5': 'Resume',
                       '6': 'FanOnly',
                       '7': 'Furnace',
                       '8': 'DryAir',
                       '9': 'MoistAir',
                       '10': 'AutoChangeover',
                       '11': 'EnergySaveHeat',
                       '12': 'EnergySaveCool',
                       '13': 'Away',
                       '14': 'Reserved',
                       '15': 'FullPower',
                       '16': 'Reserved0',
                       '17': 'Reserved1',
                       '18': 'Reserved2',
                       '19': 'Reserved3',
                       '20': 'Reserved4',
                       '21': 'Reserved5',
                       '22': 'Reserved6',
                       '23': 'Reserved7',
                       '24': 'Reserved8',
                       '25': 'Reserved9',
                       '26': 'ReservedA',
                       '27': 'ReservedB',
                       '28': 'ReservedC',
                       '29': 'ReservedD',
                       '30': 'ReservedE',
                       '31': 'ManufacturerSpecifc' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x41-V1': 
      { version: 1,
        name: 'PREPAYMENT_ENCAPSULATION',
        help: 'Command Class Prepayment Encapsulation',
        id: 65,
        COMMAND: 
         { '1': 
            { name: 'ENCAPSULATION',
              help: 'Cmd Encapsulation',
              param: 
               { '0': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x42-V1': 
      { version: 1,
        name: 'THERMOSTAT_OPERATING_STATE',
        help: 'Command Class Thermostat Operating State',
        id: 66,
        COMMAND: 
         { '2': { name: 'GET', help: 'Thermostat Operating State Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Operating State Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'OperatingState',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Idle',
                             '1': 'Heating',
                             '2': 'Cooling',
                             '3': 'FanOnly',
                             '4': 'PendingHeat',
                             '5': 'PendingCool',
                             '6': 'VentEconomizer' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x42-V2': 
      { version: 2,
        name: 'THERMOSTAT_OPERATING_STATE',
        help: 'Command Class Thermostat Operating State',
        id: 66,
        COMMAND: 
         { '1': 
            { name: 'LOGGING_SUPPORTED_GET',
              help: 'Thermostat Operating State Logging Supported Get' },
           '2': { name: 'GET', help: 'Thermostat Operating State Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Operating State Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'OperatingState',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Idle',
                             '1': 'Heating',
                             '2': 'Cooling',
                             '3': 'FanOnly',
                             '4': 'PendingHeat',
                             '5': 'PendingCool',
                             '6': 'VentEconomizer',
                             '7': 'AuxHeating',
                             '8': '2ndStageHeating',
                             '9': '2ndStageCooling',
                             '10': '2ndStageAuxHeat',
                             '11': '3rdStageAuxHeat' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '4': 
            { name: 'THERMOSTAT_OPERATING_LOGGING_SUPPORTED_REPORT',
              help: 'Thermostat Operating State Logging Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Idle',
                       '1': 'Heating',
                       '2': 'Cooling',
                       '3': 'FanOnly',
                       '4': 'PendingHeat',
                       '5': 'PendingCool',
                       '6': 'VentEconomizer',
                       '7': 'AuxHeating',
                       '8': '2ndStageHeating',
                       '9': '2ndStageCooling',
                       '10': '2ndStageAuxHeat',
                       '11': '3rdStageAuxHeat' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': 
            { name: 'LOGGING_GET',
              help: 'Thermostat Operating State Logging Get',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Idle',
                       '1': 'Heating',
                       '2': 'Cooling',
                       '3': 'FanOnly',
                       '4': 'PendingHeat',
                       '5': 'PendingCool',
                       '6': 'VentEconomizer',
                       '7': 'AuxHeating',
                       '8': '2ndStageHeating',
                       '9': '2ndStageCooling',
                       '10': '2ndStageAuxHeat',
                       '11': '3rdStageAuxHeat' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'LOGGING_REPORT',
              help: 'Thermostat Operating State Logging Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '15': { fieldname: 'OperatingStateLogType', shifter: 0 },
                             '240': { fieldname: 'Reserved', shifter: 4 } } },
                       '1': { name: 'UsageTodayhours', type: 'BYTE', showhex: true },
                       '2': { name: 'UsageTodayminutes', type: 'BYTE', showhex: true },
                       '3': { name: 'UsageYesterdayhours', type: 'BYTE', showhex: true },
                       '4': { name: 'UsageYesterdayminutes', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x43-V1': 
      { version: 1,
        name: 'THERMOSTAT_SETPOINT',
        help: 'Command Class Thermostat Setpoint',
        id: 67,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Setpoint Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Thermostat Setpoint Get',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Setpoint Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Setpoint Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Setpoint Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'None',
                       '1': 'Heating',
                       '2': 'Cooling',
                       '7': 'Furnace',
                       '8': 'DryAir',
                       '9': 'MoistAir',
                       '10': 'AutoChangeover' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x43-V2': 
      { version: 2,
        name: 'THERMOSTAT_SETPOINT',
        help: 'Command Class Thermostat Setpoint',
        id: 67,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Setpoint Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Thermostat Setpoint Get',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Setpoint Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Setpoint Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Setpoint Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'None',
                       '1': 'Heating',
                       '2': 'Cooling',
                       '7': 'Furnace',
                       '8': 'DryAir',
                       '9': 'MoistAir',
                       '10': 'AutoChangeover',
                       '11': 'EnergySaveHeating',
                       '12': 'EnergySaveCooling',
                       '13': 'AwayHeating' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x43-V3': 
      { version: 3,
        name: 'THERMOSTAT_SETPOINT',
        help: 'Command Class Thermostat Setpoint',
        id: 67,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Setpoint Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating',
                             '14': 'AwayCooling',
                             '15': 'FullPower' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Thermostat Setpoint Get',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating',
                             '14': 'AwayCooling',
                             '15': 'FullPower' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Setpoint Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating',
                             '14': 'AwayCooling',
                             '15': 'FullPower' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Setpoint Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Setpoint Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'None',
                       '1': 'Heating',
                       '2': 'Cooling',
                       '7': 'Furnace',
                       '8': 'DryAir',
                       '9': 'MoistAir',
                       '10': 'AutoChangeover',
                       '11': 'EnergySaveHeating',
                       '12': 'EnergySaveCooling',
                       '13': 'AwayHeating',
                       '14': 'AwayCooling',
                       '15': 'FullPower' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '9': 
            { name: 'CAPABILITIES_GET',
              help: 'Thermostat Setpoint Capabilities Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating',
                             '14': 'AwayCooling',
                             '15': 'FullPower' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '10': 
            { name: 'CAPABILITIES_REPORT',
              help: 'Thermostat Setpoint Capabilities Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NotSupported',
                             '1': 'Heating1',
                             '2': 'Cooling1',
                             '3': 'NotSupported1',
                             '4': 'NotSupported2',
                             '5': 'NotSupported3',
                             '6': 'NotSupported4',
                             '7': 'Furnace',
                             '8': 'DryAir',
                             '9': 'MoistAir',
                             '10': 'AutoChangeover',
                             '11': 'EnergySaveHeating',
                             '12': 'EnergySaveCooling',
                             '13': 'AwayHeating',
                             '14': 'AwayCooling',
                             '15': 'FullPower' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size1', shifter: 0 },
                       '24': { fieldname: 'Scale1', shifter: 3 },
                       '224': { fieldname: 'Precision1', shifter: 5 } } },
                 '2': 
                  { name: 'MinValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size2', shifter: 0 },
                       '24': { fieldname: 'Scale2', shifter: 3 },
                       '224': { fieldname: 'Precision2', shifter: 5 } } },
                 '4': 
                  { name: 'MaxValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x44-V1': 
      { version: 1,
        name: 'THERMOSTAT_FAN_MODE',
        help: 'Command Class Thermostat Fan Mode',
        id: 68,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Fan Mode Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'AutoLow', '1': 'Low', '2': 'AutoHigh', '3': 'High' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '2': { name: 'GET', help: 'Thermostat Fan Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Fan Mode Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'AutoLow', '1': 'Low', '2': 'AutoHigh', '3': 'High' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Fan Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Fan Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: { '0': 'Auto', '1': 'On', '2': 'AutoHigh', '3': 'OnHigh' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x44-V2': 
      { version: 2,
        name: 'THERMOSTAT_FAN_MODE',
        help: 'Command Class Thermostat Fan Mode',
        id: 68,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Fan Mode Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'AutoLow',
                             '1': 'Low',
                             '2': 'AutoHigh',
                             '3': 'High',
                             '4': 'AutoMedium',
                             '5': 'Medium' } } },
                    bitfield: { '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'Off' } } } },
           '2': { name: 'GET', help: 'Thermostat Fan Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Fan Mode Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'AutoLow',
                             '1': 'Low',
                             '2': 'AutoHigh',
                             '3': 'High',
                             '4': 'AutoMedium',
                             '5': 'Medium' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Fan Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Fan Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Auto',
                       '1': 'Low',
                       '2': 'AutoHigh',
                       '3': 'High',
                       '4': 'AutoMedium',
                       '5': 'Medium' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x44-V3': 
      { version: 3,
        name: 'THERMOSTAT_FAN_MODE',
        help: 'Command Class Thermostat Fan Mode',
        id: 68,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Fan Mode Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'AutoLow',
                             '1': 'Low',
                             '2': 'AutoHigh',
                             '3': 'High',
                             '4': 'AutoMedium',
                             '5': 'Medium',
                             '6': 'Circulation',
                             '7': 'Humidity' } } },
                    bitfield: { '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'Off' } } } },
           '2': { name: 'GET', help: 'Thermostat Fan Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Fan Mode Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'AutoLow',
                             '1': 'Low',
                             '2': 'AutoHigh',
                             '3': 'High',
                             '4': 'AutoMedium',
                             '5': 'Medium',
                             '6': 'Circulation',
                             '7': 'Humidity' } } },
                    bitfield: { '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'Off' } } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Fan Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Fan Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Auto',
                       '1': 'Low',
                       '2': 'AutoHigh',
                       '3': 'High',
                       '4': 'AutoMedium',
                       '5': 'Medium',
                       '6': 'Circulation',
                       '7': 'HumidityCirculation' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x44-V4': 
      { version: 4,
        name: 'THERMOSTAT_FAN_MODE',
        help: 'Command Class Thermostat Fan Mode',
        id: 68,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Fan Mode Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'AutoLow',
                             '1': 'Low',
                             '2': 'AutoHigh',
                             '3': 'High',
                             '4': 'AutoMedium',
                             '5': 'Medium',
                             '6': 'Circulation',
                             '7': 'Humidity',
                             '8': 'LeftRight',
                             '9': 'UpDown',
                             '10': 'Quiet',
                             '11': 'ReservedB',
                             '12': 'ReservedC',
                             '13': 'ReservedD',
                             '14': 'ReservedE',
                             '15': 'ReservedF' } } },
                    bitfield: { '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'Off' } } } },
           '2': { name: 'GET', help: 'Thermostat Fan Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Fan Mode Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanMode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'AutoLow',
                             '1': 'Low',
                             '2': 'AutoHigh',
                             '3': 'High',
                             '4': 'AutoMedium',
                             '5': 'Medium',
                             '6': 'Circulation',
                             '7': 'Humidity',
                             '8': 'LeftRight',
                             '9': 'UpDown',
                             '10': 'Quiet',
                             '11': 'ReservedB',
                             '12': 'ReservedC',
                             '13': 'ReservedD',
                             '14': 'ReservedE',
                             '15': 'ReservedF' } } },
                    bitfield: { '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'Off' } } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Thermostat Fan Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Thermostat Fan Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Auto',
                       '1': 'Low',
                       '2': 'AutoHigh',
                       '3': 'High',
                       '4': 'AutoMedium',
                       '5': 'Medium',
                       '6': 'Circulation',
                       '7': 'HumidityCirculation',
                       '8': 'LeftRight',
                       '9': 'UpDown',
                       '10': 'Quiet',
                       '11': 'ReservedB',
                       '12': 'ReservedC',
                       '13': 'ReservedD',
                       '14': 'ReservedE',
                       '15': 'ReservedF' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x45-V1': 
      { version: 1,
        name: 'THERMOSTAT_FAN_STATE',
        help: 'Command Class Thermostat Fan State',
        id: 69,
        COMMAND: 
         { '2': { name: 'GET', help: 'Thermostat Fan State Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Fan State Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanOperatingState',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'Idle', '1': 'Running' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x45-V2': 
      { version: 2,
        name: 'THERMOSTAT_FAN_STATE',
        help: 'Command Class Thermostat Fan State',
        id: 69,
        COMMAND: 
         { '2': { name: 'GET', help: 'Thermostat Fan State Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Fan State Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'FanOperatingState',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Idle',
                             '1': 'Running',
                             '2': 'RunningHigh',
                             '3': 'RunningMedium',
                             '4': 'Circulation',
                             '5': 'HumidityCirculation',
                             '6': 'RightleftCirculation',
                             '7': 'UpdownCirculation',
                             '8': 'QuietCirculation' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x46-V1': 
      { version: 1,
        name: 'CLIMATE_CONTROL_SCHEDULE',
        help: 'Command Class Climate Control Schedule',
        comment: '[DEPRECATED]',
        id: 70,
        COMMAND: 
         { '1': 
            { name: 'SCHEDULE_SET',
              help: 'Schedule Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Weekday', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': { name: 'Switchpoint0', type: 'BIT_24', showhex: true },
                 '2': { name: 'Switchpoint1', type: 'BIT_24', showhex: true },
                 '3': { name: 'Switchpoint2', type: 'BIT_24', showhex: true },
                 '4': { name: 'Switchpoint3', type: 'BIT_24', showhex: true },
                 '5': { name: 'Switchpoint4', type: 'BIT_24', showhex: true },
                 '6': { name: 'Switchpoint5', type: 'BIT_24', showhex: true },
                 '7': { name: 'Switchpoint6', type: 'BIT_24', showhex: true },
                 '8': { name: 'Switchpoint7', type: 'BIT_24', showhex: true },
                 '9': { name: 'Switchpoint8', type: 'BIT_24', showhex: true } } },
           '2': 
            { name: 'SCHEDULE_GET',
              help: 'Schedule Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Weekday', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } } } },
           '3': 
            { name: 'SCHEDULE_REPORT',
              help: 'Schedule Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Weekday', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': { name: 'Switchpoint0', type: 'BIT_24', showhex: true },
                 '2': { name: 'Switchpoint1', type: 'BIT_24', showhex: true },
                 '3': { name: 'Switchpoint2', type: 'BIT_24', showhex: true },
                 '4': { name: 'Switchpoint3', type: 'BIT_24', showhex: true },
                 '5': { name: 'Switchpoint4', type: 'BIT_24', showhex: true },
                 '6': { name: 'Switchpoint5', type: 'BIT_24', showhex: true },
                 '7': { name: 'Switchpoint6', type: 'BIT_24', showhex: true },
                 '8': { name: 'Switchpoint7', type: 'BIT_24', showhex: true },
                 '9': { name: 'Switchpoint8', type: 'BIT_24', showhex: true } } },
           '4': { name: 'SCHEDULE_CHANGED_GET', help: 'Schedule Changed Get' },
           '5': 
            { name: 'SCHEDULE_CHANGED_REPORT',
              help: 'Schedule Changed Report',
              param: { '0': { name: 'ChangeCounter', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SCHEDULE_OVERRIDE_SET',
              help: 'Schedule Override Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'OverrideType', shifter: 0 },
                       '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': 
                  { name: 'OverrideState',
                    type: 'CONST',
                    const: 
                     { '0': 'NoOverride',
                       '1': 'TemporaryOverride',
                       '2': 'PermanentOverride',
                       '3': 'Reserved' } } } },
           '7': { name: 'SCHEDULE_OVERRIDE_GET', help: 'Schedule Override Get' },
           '8': 
            { name: 'SCHEDULE_OVERRIDE_REPORT',
              help: 'Schedule Override Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'OverrideType', shifter: 0 },
                       '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': 
                  { name: 'OverrideState',
                    type: 'CONST',
                    const: 
                     { '0': 'NoOverride',
                       '1': 'TemporaryOverride',
                       '2': 'PermanentOverride',
                       '3': 'Reserved' } } } } } },
     '0x47-V1': 
      { version: 1,
        name: 'THERMOSTAT_SETBACK',
        help: 'Command Class Thermostat Setback',
        id: 71,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Thermostat Setback Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetbackType',
                          fieldmask: 3,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NoOverride',
                             '1': 'TemporaryOverride',
                             '2': 'PermanentOverride',
                             '3': 'Reserved' } } },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': 
                  { name: 'SetbackState',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '121': 'FrostProtection',
                       '122': 'EnergySavingMode',
                       '123': 'Reserved',
                       '124': 'Reserved',
                       '125': 'Reserved',
                       '126': 'Reserved',
                       '127': 'UnusedState' } } } },
           '2': { name: 'GET', help: 'Thermostat Setback Get' },
           '3': 
            { name: 'REPORT',
              help: 'Thermostat Setback Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetbackType',
                          fieldmask: 3,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'NoOverride',
                             '1': 'TemporaryOverride',
                             '2': 'PermanentOverride',
                             '3': 'Reserved' } } },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': 
                  { name: 'SetbackState',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '121': 'FrostProtection',
                       '122': 'EnergySavingMode',
                       '123': 'Reserved',
                       '124': 'Reserved',
                       '125': 'Reserved',
                       '126': 'Reserved',
                       '127': 'UnusedState' } } } } } },
     '0x48-V1': 
      { version: 1,
        name: 'RATE_TBL_CONFIG',
        help: 'Command Class Rate Tbl Config',
        id: 72,
        COMMAND: 
         { '1': 
            { name: 'RATE_TBL_SET',
              help: 'Rate Tbl Set',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfRateChar', shifter: 0 },
                       '96': { fieldname: 'RateType', shifter: 5 } },
                    bitflag: { '128': 'Reserved' } },
                 '2': 
                  { name: 'RateCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 },
                 '3': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'DurationMinute', type: 'WORD', showhex: true },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'ConsumptionScale', shifter: 0 },
                       '224': { fieldname: 'ConsumptionPrecision', shifter: 5 } } },
                 '7': { name: 'MinConsumptionValue', type: 'DWORD', showhex: true },
                 '8': { name: 'MaxConsumptionValue', type: 'DWORD', showhex: true },
                 '9': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'MaxDemandScale', shifter: 0 },
                       '224': { fieldname: 'MaxDemandPrecision', shifter: 5 } } },
                 '10': { name: 'MaxDemandValue', type: 'DWORD', showhex: true },
                 '11': { name: 'DcpRateId', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'RATE_TBL_REMOVE',
              help: 'Rate Tbl Remove',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'RateParameterSetIds', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } } },
                 '1': 
                  { name: 'RateParameterSetId',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 63,
                    shifter: 0 } } } } },
     '0x49-V1': 
      { version: 1,
        name: 'RATE_TBL_MONITOR',
        help: 'Command Class Rate Tbl Monitor',
        id: 73,
        COMMAND: 
         { '1': 
            { name: 'RATE_TBL_SUPPORTED_GET',
              help: 'Rate Tbl Supported Get' },
           '2': 
            { name: 'RATE_TBL_SUPPORTED_REPORT',
              help: 'Rate Tbl Supported Report',
              param: 
               { '0': { name: 'RatesSupported', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'ParameterSetSupportedBitMask',
                    type: 'WORD',
                    showhex: true } } },
           '3': 
            { name: 'RATE_TBL_GET',
              help: 'Rate Tbl Get',
              param: { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'RATE_TBL_REPORT',
              help: 'Rate Tbl Report',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfRateChar', shifter: 0 },
                       '96': { fieldname: 'RateType', shifter: 5 } },
                    bitflag: { '128': 'Reserved' } },
                 '2': 
                  { name: 'RateCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 },
                 '3': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'DurationMinute', type: 'WORD', showhex: true },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'ConsumptionScale', shifter: 0 },
                       '224': { fieldname: 'ConsumptionPrecision', shifter: 5 } } },
                 '7': { name: 'MinConsumptionValue', type: 'DWORD', showhex: true },
                 '8': { name: 'MaxConsumptionValue', type: 'DWORD', showhex: true },
                 '9': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'MaxDemandScale', shifter: 0 },
                       '224': { fieldname: 'MaxDemandPrecision', shifter: 5 } } },
                 '10': { name: 'MaxDemandValue', type: 'DWORD', showhex: true },
                 '11': { name: 'DcpRateId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'RATE_TBL_ACTIVE_RATE_GET',
              help: 'Rate Tbl Active Rate  Get' },
           '6': 
            { name: 'RATE_TBL_ACTIVE_RATE_REPORT',
              help: 'Rate Tbl Active Rate  Report',
              param: { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'RATE_TBL_CURRENT_DATA_GET',
              help: 'Rate Tbl Current Data Get',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': { name: 'DatasetRequested', type: 'BIT_24', showhex: true } } },
           '8': 
            { name: 'RATE_TBL_CURRENT_DATA_REPORT',
              help: 'Rate Tbl Current Data Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '2': { name: 'Dataset', type: 'BIT_24', showhex: true },
                 '3': { name: 'Year', type: 'WORD', showhex: true },
                 '4': { name: 'Month', type: 'BYTE', showhex: true },
                 '5': { name: 'Day', type: 'BYTE', showhex: true },
                 '6': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'CurrentScale', shifter: 0 },
                             '224': { fieldname: 'CurrentPrecision', shifter: 5 } } },
                       '1': { name: 'CurrentValue', type: 'DWORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '9': 
            { name: 'RATE_TBL_HISTORICAL_DATA_GET',
              help: 'Rate Tbl Historical Data Get',
              param: 
               { '0': { name: 'MaximumReports', type: 'BYTE', showhex: true },
                 '1': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '2': { name: 'DatasetRequested', type: 'BIT_24', showhex: true },
                 '3': { name: 'StartYear', type: 'WORD', showhex: true },
                 '4': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '5': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '6': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'StartSecondLocalTime', type: 'BYTE', showhex: true },
                 '9': { name: 'StopYear', type: 'WORD', showhex: true },
                 '10': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '11': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '12': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '13': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true },
                 '14': { name: 'StopSecondLocalTime', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'RATE_TBL_HISTORICAL_DATA_REPORT',
              help: 'Rate Tbl Historical Data Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '2': { name: 'Dataset', type: 'BIT_24', showhex: true },
                 '3': { name: 'Year', type: 'WORD', showhex: true },
                 '4': { name: 'Month', type: 'BYTE', showhex: true },
                 '5': { name: 'Day', type: 'BYTE', showhex: true },
                 '6': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '8': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '9': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '31': { fieldname: 'HistoricalScale', shifter: 0 },
                             '224': { fieldname: 'HistoricalPrecision', shifter: 5 } } },
                       '1': { name: 'HistoricalValue', type: 'DWORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x4a-V1': 
      { version: 1,
        name: 'TARIFF_CONFIG',
        help: 'Command Class Tariff Config',
        id: 74,
        COMMAND: 
         { '1': 
            { name: 'TARIFF_TBL_SUPPLIER_SET',
              help: 'Tariff Tbl Supplier Set',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'Currency', type: 'BIT_24', showhex: true },
                 '7': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StandingChargePeriod', shifter: 0 },
                       '224': { fieldname: 'StandingChargePrecision', shifter: 5 } } },
                 '8': { name: 'StandingChargeValue', type: 'DWORD', showhex: true },
                 '9': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfSupplierCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '10': 
                  { name: 'SupplierCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 9,
                    lengthmask: 31,
                    shifter: 0 } } },
           '2': 
            { name: 'TARIFF_TBL_SET',
              help: 'Tariff Tbl Set',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Reserved', shifter: 0 },
                       '224': { fieldname: 'TariffPrecision', shifter: 5 } } },
                 '2': { name: 'TariffValue', type: 'DWORD', showhex: true } } },
           '3': 
            { name: 'TARIFF_TBL_REMOVE',
              help: 'Tariff Tbl Remove',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'RateParameterSetIds', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } } },
                 '1': 
                  { name: 'RateParameterSetId',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 63,
                    shifter: 0 } } } } },
     '0x4b-V1': 
      { version: 1,
        name: 'TARIFF_TBL_MONITOR',
        help: 'Command Class Tariff Tbl Monitor',
        id: 75,
        COMMAND: 
         { '1': 
            { name: 'TARIFF_TBL_SUPPLIER_GET',
              help: 'Tariff Tbl Supplier Get' },
           '2': 
            { name: 'TARIFF_TBL_SUPPLIER_REPORT',
              help: 'Tariff Tbl Supplier Report',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourLocalTime', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'Currency', type: 'BIT_24', showhex: true },
                 '7': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StandingChargePeriod', shifter: 0 },
                       '224': { fieldname: 'StandingChargePrecision', shifter: 5 } } },
                 '8': { name: 'StandingChargeValue', type: 'DWORD', showhex: true },
                 '9': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfSupplierCharacters', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '10': 
                  { name: 'SupplierCharacter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 9,
                    lengthmask: 31,
                    shifter: 0 } } },
           '3': 
            { name: 'TARIFF_TBL_GET',
              help: 'Tariff Tbl Get',
              param: { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'TARIFF_TBL_REPORT',
              help: 'Tariff Tbl Report',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Reserved', shifter: 0 },
                       '224': { fieldname: 'TariffPrecision', shifter: 5 } } },
                 '2': { name: 'TariffValue', type: 'DWORD', showhex: true } } },
           '5': 
            { name: 'TARIFF_TBL_COST_GET',
              help: 'Tariff Tbl Cost Get',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': { name: 'StartYear', type: 'WORD', showhex: true },
                 '2': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '3': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'StopYear', type: 'WORD', showhex: true },
                 '7': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '8': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '9': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '10': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'TARIFF_TBL_COST_REPORT',
              help: 'Tariff Tbl Cost Report',
              param: 
               { '0': { name: 'RateParameterSetId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'RateType', shifter: 0 },
                       '252': { fieldname: 'Reserved1', shifter: 2 } } },
                 '2': { name: 'StartYear', type: 'WORD', showhex: true },
                 '3': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '4': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '5': { name: 'StartHourLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'StartMinuteLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'StopYear', type: 'WORD', showhex: true },
                 '8': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '9': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '10': { name: 'StopHourLocalTime', type: 'BYTE', showhex: true },
                 '11': { name: 'StopMinuteLocalTime', type: 'BYTE', showhex: true },
                 '12': { name: 'Currency', type: 'BIT_24', showhex: true },
                 '13': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Reserved2', shifter: 0 },
                       '224': { fieldname: 'CostPrecision', shifter: 5 } } },
                 '14': { name: 'CostValue', type: 'DWORD', showhex: true } } } } },
     '0x4c-V1': 
      { version: 1,
        name: 'DOOR_LOCK_LOGGING',
        help: 'Command Class Door Lock Logging',
        id: 76,
        COMMAND: 
         { '1': 
            { name: 'RECORDS_SUPPORTED_GET',
              help: 'Door Lock Logging Records Supported Get' },
           '2': 
            { name: 'RECORDS_SUPPORTED_REPORT',
              help: 'Door Lock Logging Records Supported Report',
              param: { '0': { name: 'MaxRecordsStored', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'RECORD_GET',
              help: 'Record Get',
              param: { '0': { name: 'RecordNumber', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'RECORD_REPORT',
              help: 'Record Report',
              param: 
               { '0': { name: 'RecordNumber', type: 'BYTE', showhex: true },
                 '1': { name: 'Year', type: 'WORD', showhex: true },
                 '2': { name: 'Month', type: 'BYTE', showhex: true },
                 '3': { name: 'Day', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'HourLocalTime', shifter: 0 },
                       '224': { fieldname: 'RecordStatus', shifter: 5 } } },
                 '5': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '6': { name: 'SecondLocalTime', type: 'BYTE', showhex: true },
                 '7': { name: 'EventType', type: 'BYTE', showhex: true },
                 '8': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '9': { name: 'UserCodeLength', type: 'BYTE', showhex: true },
                 '10': 
                  { name: 'UserCode',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x4d-V1': 
      { version: 1,
        name: 'NETWORK_MANAGEMENT_BASIC',
        help: 'Command Class Network Management Basic',
        id: 77,
        COMMAND: 
         { '1': 
            { name: 'LEARN_MODE_SET',
              help: 'Learn Mode Set',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'LearnModeSetDisable',
                       '1': 'LearnModeSetClassic',
                       '2': 'LearnModeSetNwi' } } } },
           '2': 
            { name: 'LEARN_MODE_SET_STATUS',
              help: 'Learn Mode Set Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'LearnModeFailedTimeout',
                       '6': 'LearnModeDone',
                       '7': 'LearnModeFailed',
                       '9': 'LearnModeSecurityFailed' } },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '3': 
            { name: 'NETWORK_UPDATE_REQUEST',
              help: 'Network Update Request',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'NETWORK_UPDATE_REQUEST_STATUS',
              help: 'Network Update Request Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'SucUpdateDone',
                       '1': 'SucUpdateAbort',
                       '2': 'SucUpdateWait',
                       '3': 'SucUpdateDisabled',
                       '4': 'SucUpdateOverflow' } } } },
           '5': 
            { name: 'NODE_INFORMATION_SEND',
              help: 'Node Information Send',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '3': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'DEFAULT_SET',
              help: 'Default Set',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'DEFAULT_SET_COMPLETE',
              help: 'Default Set Complete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: { '6': 'DefaultSetDone', '7': 'DefaultSetBusy' } } } } } },
     '0x4d-V2': 
      { version: 2,
        name: 'NETWORK_MANAGEMENT_BASIC',
        help: 'Command Class Network Management Basic',
        id: 77,
        COMMAND: 
         { '1': 
            { name: 'LEARN_MODE_SET',
              help: 'Learn Mode Set',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'LearnModeSetDisable',
                       '1': 'LearnModeSetClassic',
                       '2': 'LearnModeSetNwi' } } } },
           '2': 
            { name: 'LEARN_MODE_SET_STATUS',
              help: 'Learn Mode Set Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'LearnModeFailedTimeout',
                       '6': 'LearnModeDone',
                       '7': 'LearnModeFailed',
                       '9': 'LearnModeSecurityFailed' } },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '4': { name: 'GrantedKeys', type: 'BYTE', showhex: true },
                 '5': 
                  { name: 'DSK',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } },
           '3': 
            { name: 'NETWORK_UPDATE_REQUEST',
              help: 'Network Update Request',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'NETWORK_UPDATE_REQUEST_STATUS',
              help: 'Network Update Request Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'SucUpdateDone',
                       '1': 'SucUpdateAbort',
                       '2': 'SucUpdateWait',
                       '3': 'SucUpdateDisabled',
                       '4': 'SucUpdateOverflow' } } } },
           '5': 
            { name: 'NODE_INFORMATION_SEND',
              help: 'Node Information Send',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '3': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'DEFAULT_SET',
              help: 'Default Set',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'DEFAULT_SET_COMPLETE',
              help: 'Default Set Complete',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: { '6': 'DefaultSetDone', '7': 'DefaultSetBusy' } } } },
           '8': 
            { name: 'DSK_GET',
              help: 'DSK Get',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'DSK_REPORT',
              help: 'DSK Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'DSK',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } } } },
     '0x4e-V1': 
      { version: 1,
        name: 'SCHEDULE_ENTRY_LOCK',
        help: 'Command Class Schedule Entry Lock',
        comment: '[DEPRECATED]',
        id: 78,
        COMMAND: 
         { '1': 
            { name: 'ENABLE_SET',
              help: 'Schedule Entry Lock Enable Set',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Enabled',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Disabled', '1': 'Enabled' } } } },
           '2': 
            { name: 'ENABLE_ALL_SET',
              help: 'Schedule Entry Lock Enable All Set',
              param: 
               { '0': 
                  { name: 'Enabled',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Disabled', '1': 'Enabled' } } } },
           '3': 
            { name: 'WEEK_DAY_SET',
              help: 'Schedule Entry Lock Week Day Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'DayOfWeek', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '6': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '7': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'WEEK_DAY_GET',
              help: 'Schedule Entry Lock Week Day Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'WEEK_DAY_REPORT',
              help: 'Schedule Entry Lock Week Day Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'DayOfWeek', type: 'BYTE', showhex: true },
                 '3': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '5': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '6': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'YEAR_DAY_SET',
              help: 'Schedule Entry Lock Year Day Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '5': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '6': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '7': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '8': { name: 'StopYear', type: 'BYTE', showhex: true },
                 '9': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '10': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '11': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '12': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'YEAR_DAY_GET',
              help: 'Schedule Entry Lock Year Day Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '8': 
            { name: 'YEAR_DAY_REPORT',
              help: 'Schedule Entry Lock Year Day Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '4': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '5': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '6': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '7': { name: 'StopYear', type: 'BYTE', showhex: true },
                 '8': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '9': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '10': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '11': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'SCHEDULE_ENTRY_TYPE_SUPPORTED_GET',
              help: 'Schedule Entry Type Supported Get' },
           '10': 
            { name: 'SCHEDULE_ENTRY_TYPE_SUPPORTED_REPORT',
              help: 'Schedule Entry Type Supported Report',
              param: 
               { '0': { name: 'NumberOfSlotsWeekDay', type: 'BYTE', showhex: true },
                 '1': { name: 'NumberOfSlotsYearDay', type: 'BYTE', showhex: true } } } } },
     '0x4e-V2': 
      { version: 2,
        name: 'SCHEDULE_ENTRY_LOCK',
        help: 'Command Class Schedule Entry Lock',
        comment: '[DEPRECATED]',
        id: 78,
        COMMAND: 
         { '1': 
            { name: 'ENABLE_SET',
              help: 'Schedule Entry Lock Enable Set',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Enabled',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Disabled', '1': 'Enabled' } } } },
           '2': 
            { name: 'ENABLE_ALL_SET',
              help: 'Schedule Entry Lock Enable All Set',
              param: 
               { '0': 
                  { name: 'Enabled',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Disabled', '1': 'Enabled' } } } },
           '3': 
            { name: 'WEEK_DAY_SET',
              help: 'Schedule Entry Lock Week Day Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'DayOfWeek', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '6': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '7': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'WEEK_DAY_GET',
              help: 'Schedule Entry Lock Week Day Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'WEEK_DAY_REPORT',
              help: 'Schedule Entry Lock Week Day Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'DayOfWeek', type: 'BYTE', showhex: true },
                 '3': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '5': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '6': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'YEAR_DAY_SET',
              help: 'Schedule Entry Lock Year Day Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '5': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '6': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '7': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '8': { name: 'StopYear', type: 'BYTE', showhex: true },
                 '9': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '10': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '11': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '12': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'YEAR_DAY_GET',
              help: 'Schedule Entry Lock Year Day Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '8': 
            { name: 'YEAR_DAY_REPORT',
              help: 'Schedule Entry Lock Year Day Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '4': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '5': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '6': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '7': { name: 'StopYear', type: 'BYTE', showhex: true },
                 '8': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '9': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '10': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '11': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'SCHEDULE_ENTRY_TYPE_SUPPORTED_GET',
              help: 'Schedule Entry Type Supported Get' },
           '10': 
            { name: 'SCHEDULE_ENTRY_TYPE_SUPPORTED_REPORT',
              help: 'Schedule Entry Type Supported Report',
              param: 
               { '0': { name: 'NumberOfSlotsWeekDay', type: 'BYTE', showhex: true },
                 '1': { name: 'NumberOfSlotsYearDay', type: 'BYTE', showhex: true } } },
           '11': 
            { name: 'TIME_OFFSET_GET',
              help: 'Schedule Entry Lock Time Offset Get' },
           '12': 
            { name: 'TIME_OFFSET_REPORT',
              help: 'Schedule Entry Lock Time Offset Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'HourTzo', shifter: 0 } },
                    bitflag: { '128': 'SignTzo' } },
                 '1': { name: 'MinuteTzo', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'MinuteOffsetDst', shifter: 0 } },
                    bitflag: { '128': 'SignOffsetDst' } } } },
           '13': 
            { name: 'TIME_OFFSET_SET',
              help: 'Schedule Entry Lock Time Offset Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'HourTzo', shifter: 0 } },
                    bitflag: { '128': 'SignTzo' } },
                 '1': { name: 'MinuteTzo', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'MinuteOffsetDst', shifter: 0 } },
                    bitflag: { '128': 'SignOffsetDst' } } } } } },
     '0x4e-V3': 
      { version: 3,
        name: 'SCHEDULE_ENTRY_LOCK',
        help: 'Command Class Schedule Entry Lock',
        comment: '[DEPRECATED]',
        id: 78,
        COMMAND: 
         { '1': 
            { name: 'ENABLE_SET',
              help: 'Schedule Entry Lock Enable Set',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Enabled',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Disabled', '1': 'Enabled' } } } },
           '2': 
            { name: 'ENABLE_ALL_SET',
              help: 'Schedule Entry Lock Enable All Set',
              param: 
               { '0': 
                  { name: 'Enabled',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Disabled', '1': 'Enabled' } } } },
           '3': 
            { name: 'WEEK_DAY_SET',
              help: 'Schedule Entry Lock Week Day Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'DayOfWeek', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '6': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '7': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'WEEK_DAY_GET',
              help: 'Schedule Entry Lock Week Day Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'WEEK_DAY_REPORT',
              help: 'Schedule Entry Lock Week Day Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'DayOfWeek', type: 'BYTE', showhex: true },
                 '3': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '5': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '6': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'YEAR_DAY_SET',
              help: 'Schedule Entry Lock Year Day Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '5': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '6': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '7': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '8': { name: 'StopYear', type: 'BYTE', showhex: true },
                 '9': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '10': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '11': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '12': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'YEAR_DAY_GET',
              help: 'Schedule Entry Lock Year Day Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '8': 
            { name: 'YEAR_DAY_REPORT',
              help: 'Schedule Entry Lock Year Day Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': { name: 'StartMonth', type: 'BYTE', showhex: true },
                 '4': { name: 'StartDay', type: 'BYTE', showhex: true },
                 '5': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '6': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '7': { name: 'StopYear', type: 'BYTE', showhex: true },
                 '8': { name: 'StopMonth', type: 'BYTE', showhex: true },
                 '9': { name: 'StopDay', type: 'BYTE', showhex: true },
                 '10': { name: 'StopHour', type: 'BYTE', showhex: true },
                 '11': { name: 'StopMinute', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'SCHEDULE_ENTRY_TYPE_SUPPORTED_GET',
              help: 'Schedule Entry Type Supported Get' },
           '10': 
            { name: 'SCHEDULE_ENTRY_TYPE_SUPPORTED_REPORT',
              help: 'Schedule Entry Type Supported Report',
              param: 
               { '0': { name: 'NumberOfSlotsWeekDay', type: 'BYTE', showhex: true },
                 '1': { name: 'NumberOfSlotsYearDay', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'NumberOfSlotsDailyRepeating',
                    type: 'BYTE',
                    showhex: true } } },
           '11': 
            { name: 'TIME_OFFSET_GET',
              help: 'Schedule Entry Lock Time Offset Get' },
           '12': 
            { name: 'TIME_OFFSET_REPORT',
              help: 'Schedule Entry Lock Time Offset Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'HourTzo', shifter: 0 } },
                    bitflag: { '128': 'SignTzo' } },
                 '1': { name: 'MinuteTzo', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'MinuteOffsetDst', shifter: 0 } },
                    bitflag: { '128': 'SignOffsetDst' } } } },
           '13': 
            { name: 'TIME_OFFSET_SET',
              help: 'Schedule Entry Lock Time Offset Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'HourTzo', shifter: 0 } },
                    bitflag: { '128': 'SignTzo' } },
                 '1': { name: 'MinuteTzo', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'MinuteOffsetDst', shifter: 0 } },
                    bitflag: { '128': 'SignOffsetDst' } } } },
           '14': 
            { name: 'DAILY_REPEATING_GET',
              help: 'Schedule Entry Lock Daily Repeating Get',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true } } },
           '15': 
            { name: 'DAILY_REPEATING_REPORT',
              help: 'Schedule Entry Lock Daily Repeating Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '2': { name: 'WeekDayBitmask', type: 'BYTE', showhex: true },
                 '3': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '4': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '5': { name: 'DurationHour', type: 'BYTE', showhex: true },
                 '6': { name: 'DurationMinute', type: 'BYTE', showhex: true } } },
           '16': 
            { name: 'DAILY_REPEATING_SET',
              help: 'Schedule Entry Lock Daily Repeating Set',
              param: 
               { '0': 
                  { name: 'SetAction',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Erase', '1': 'Modify' } },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleSlotId', type: 'BYTE', showhex: true },
                 '3': { name: 'WeekDayBitmask', type: 'BYTE', showhex: true },
                 '4': { name: 'StartHour', type: 'BYTE', showhex: true },
                 '5': { name: 'StartMinute', type: 'BYTE', showhex: true },
                 '6': { name: 'DurationHour', type: 'BYTE', showhex: true },
                 '7': { name: 'DurationMinute', type: 'BYTE', showhex: true } } } } },
     '0x4f-V1': 
      { version: 1,
        name: 'ZIP_6LOWPAN',
        help: 'Command Class Z/IP 6lowpan',
        id: 79,
        COMMAND: 
         { '192': 
            { name: 'LOWPAN_FIRST_FRAGMENT',
              help: 'Lowpan First Fragment',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'DatagramSize1', shifter: 0 } } },
                 '1': { name: 'DatagramSize2', type: 'BYTE', showhex: true },
                 '2': { name: 'DatagramTag', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Payload',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '224': 
            { name: 'LOWPAN_SUBSEQUENT_FRAGMENT',
              help: 'Lowpan Subsequent Fragment',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'DatagramSize1', shifter: 0 } } },
                 '1': { name: 'DatagramSize2', type: 'BYTE', showhex: true },
                 '2': { name: 'DatagramTag', type: 'BYTE', showhex: true },
                 '3': { name: 'DatagramOffset', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'Payload',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x50-V1': 
      { version: 1,
        name: 'BASIC_WINDOW_COVERING',
        help: 'Command Class Basic Window Covering',
        comment: '[OBSOLETED]',
        id: 80,
        COMMAND: 
         { '1': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Basic Window Covering Start Level Change',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Reserved1', shifter: 0 } },
                    bitflag: { '64': 'OpenClose', '128': 'Reserved2' } } } },
           '2': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Basic Window Covering Stop Level Change' } } },
     '0x51-V1': 
      { version: 1,
        name: 'MTP_WINDOW_COVERING',
        help: 'Command Class Mtp Window Covering',
        comment: '[OBSOLETED]',
        id: 81,
        COMMAND: 
         { '1': 
            { name: 'MOVE_TO_POSITION_SET',
              help: 'Move To Position Set',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Close', '255': 'Open' } } } },
           '2': { name: 'MOVE_TO_POSITION_GET', help: 'Move To Position Get' },
           '3': 
            { name: 'MOVE_TO_POSITION_REPORT',
              help: 'Move To Position Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Close', '255': 'Open' } } } } } },
     '0x52-V1': 
      { version: 1,
        name: 'NETWORK_MANAGEMENT_PROXY',
        help: 'Command Class Network Management Proxy',
        id: 82,
        COMMAND: 
         { '1': 
            { name: 'NODE_LIST_GET',
              help: 'Node List Get',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'NODE_LIST_REPORT',
              help: 'Node List Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: false,
                    const: { '0': 'Latest', '1': 'MayNotBeTheLatest' } },
                 '2': { name: 'NodeListControllerId', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NodeListData',
                    type: 'BITMASK',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'NODE_INFO_CACHED_GET',
              help: 'Node Info Cached Get',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'MaxAge', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '4': 
            { name: 'NODE_INFO_CACHED_REPORT',
              help: 'Node Info Cached Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '15': { fieldname: 'Age', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Status',
                          fieldmask: 240,
                          shifter: 4,
                          fieldenum: 
                           { '0': 'STATUS_OK',
                             '1': 'STATUS_NOT_RESPONDING',
                             '2': 'STATUS_UNKNOWN' } } } },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Capability', shifter: 0 } },
                    bitflag: { '128': 'Listening' } },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'Security', shifter: 0 },
                       '112': { fieldname: 'Sensor', shifter: 4 } },
                    bitflag: { '128': 'Opt' } },
                 '4': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '5': { name: 'BasicDeviceClass', type: 'BYTE', showhex: true },
                 '6': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                 '7': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true },
                 '8': 
                  { name: 'NonsecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '9': 
                  { name: 'SecurityScheme0Mark',
                    type: 'MARKER',
                    const: { '0': 'SecurityScheme0Mark', '241': 'SecurityScheme0Mark' } },
                 '10': 
                  { name: 'SecurityScheme0CommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x52-V2': 
      { version: 2,
        name: 'NETWORK_MANAGEMENT_PROXY',
        help: 'Command Class Network Management Proxy',
        id: 82,
        COMMAND: 
         { '1': 
            { name: 'NODE_LIST_GET',
              help: 'Node List Get',
              param: { '0': { name: 'SeqNo', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'NODE_LIST_REPORT',
              help: 'Node List Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: false,
                    const: { '0': 'Latest', '1': 'MayNotBeTheLatest' } },
                 '2': { name: 'NodeListControllerId', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NodeListData',
                    type: 'BITMASK',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'NODE_INFO_CACHED_GET',
              help: 'Node Info Cached Get',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'MaxAge', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '4': 
            { name: 'NODE_INFO_CACHED_REPORT',
              help: 'Node Info Cached Report',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '15': { fieldname: 'Age', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Status',
                          fieldmask: 240,
                          shifter: 4,
                          fieldenum: 
                           { '0': 'STATUS_OK',
                             '1': 'STATUS_NOT_RESPONDING',
                             '2': 'STATUS_UNKNOWN' } } } },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Capability', shifter: 0 } },
                    bitflag: { '128': 'Listening' } },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'Security', shifter: 0 },
                       '112': { fieldname: 'Sensor', shifter: 4 } },
                    bitflag: { '128': 'Opt' } },
                 '4': { name: 'GrantedKeys', type: 'BYTE', showhex: true },
                 '5': { name: 'BasicDeviceClass', type: 'BYTE', showhex: true },
                 '6': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                 '7': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true },
                 '8': 
                  { name: 'NonsecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '9': 
                  { name: 'SecurityMark',
                    type: 'MARKER',
                    const: { '0': 'SecurityMark', '241': 'SecurityMark' } },
                 '10': 
                  { name: 'SecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x53-V1': 
      { version: 1,
        name: 'SCHEDULE',
        help: 'Command Class Schedule',
        id: 83,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Schedule Support Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Schedule Support Report',
              param: 
               { '0': 
                  { name: 'NumberOfSupportedScheduleId',
                    type: 'BYTE',
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'StartTimeSupport', shifter: 0 } },
                    bitflag: { '64': 'FallbackSupport', '128': 'SupportEnabledisable' } },
                 '2': { name: 'NumberOfSupportedCc', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'SupportedCc', type: 'BYTE', showhex: true },
                       '3': 
                        { name: 'Properties2',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '3': { fieldname: 'SupportedCommand', shifter: 0 },
                             '252': { fieldname: 'Reserved', shifter: 2 } } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 },
                 '4': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SupportedOverrideTypes', shifter: 0 } },
                    bitflag: { '128': 'OverrideSupport' } } } },
           '3': 
            { name: 'COMMAND_SCHEDULE_SET',
              help: 'Schedule Set',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'StartMonth', shifter: 0 },
                       '240': { fieldname: 'Reserved1', shifter: 4 } } },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartDayOfMonth', shifter: 0 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } },
                 '5': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'StartWeekday', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '6': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartHour', shifter: 0 },
                       '224': { fieldname: 'DurationType', shifter: 5 } } },
                 '7': 
                  { name: 'Properties5',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'StartMinute', shifter: 0 },
                       '192': { fieldname: 'Reserved3', shifter: 6 } } },
                 '8': { name: 'DurationByte', type: 'WORD', showhex: true },
                 '9': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '10': { name: 'NumberOfCmdToFollow', type: 'BYTE', showhex: true },
                 '11': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'Length', type: 'BYTE', showhex: true },
                       '1': 
                        { name: 'Byte',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 10,
                    lengthmask: 255,
                    shifter: 0 } } },
           '4': 
            { name: 'COMMAND_SCHEDULE_GET',
              help: 'Schedule Get',
              param: { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'COMMAND_SCHEDULE_REPORT',
              help: 'Schedule Report',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'StartMonth', shifter: 0 },
                       '240': { fieldname: 'ActiveId', shifter: 4 } } },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartDayOfMonth', shifter: 0 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } },
                 '5': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'StartWeekday', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '6': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartHour', shifter: 0 },
                       '224': { fieldname: 'DurationType', shifter: 5 } } },
                 '7': 
                  { name: 'Properties5',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'StartMinute', shifter: 0 },
                       '192': { fieldname: 'Reserved3', shifter: 6 } } },
                 '8': { name: 'DurationByte', type: 'WORD', showhex: true },
                 '9': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '10': { name: 'NumberOfCmdToFollow', type: 'BYTE', showhex: true },
                 '11': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'Length', type: 'BYTE', showhex: true },
                       '1': 
                        { name: 'Byte',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 10,
                    lengthmask: 255,
                    shifter: 0 } } },
           '6': 
            { name: 'REMOVE',
              help: 'Schedule Remove',
              param: { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'STATE_SET',
              help: 'Schedule State Set',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleState', type: 'BYTE', showhex: true } } },
           '8': { name: 'STATE_GET', help: 'Schedule State Get' },
           '9': 
            { name: 'STATE_REPORT',
              help: 'Schedule State Report',
              param: 
               { '0': 
                  { name: 'NumberOfSupportedScheduleId',
                    type: 'BYTE',
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Override' },
                    bitfield: { '254': { fieldname: 'ReportsToFollow', shifter: 1 } } },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ActiveId1', shifter: 0 },
                       '240': { fieldname: 'ActiveId2', shifter: 4 } } },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ActiveId3', shifter: 0 },
                       '240': { fieldname: 'ActiveIdn', shifter: 4 } } } } } } },
     '0x53-V2': 
      { version: 2,
        name: 'SCHEDULE',
        help: 'Command Class Schedule',
        id: 83,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET',
              help: 'Schedule Support Get',
              param: { '0': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Schedule Support Report',
              param: 
               { '0': 
                  { name: 'NumberOfSupportedScheduleId',
                    type: 'BYTE',
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'StartTimeSupport', shifter: 0 } },
                    bitflag: { '64': 'FallbackSupport', '128': 'SupportEnabledisable' } },
                 '2': { name: 'NumberOfSupportedCc', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'SupportedCc', type: 'BYTE', showhex: true },
                       '3': 
                        { name: 'Properties2',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '3': { fieldname: 'SupportedCommand', shifter: 0 },
                             '252': { fieldname: 'Reserved', shifter: 2 } } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 },
                 '4': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SupportedOverrideTypes', shifter: 0 } },
                    bitflag: { '128': 'OverrideSupport' } },
                 '5': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'NumberOfSupportedScheduleBlocks',
                    type: 'BYTE',
                    showhex: true } } },
           '3': 
            { name: 'COMMAND_SCHEDULE_SET',
              help: 'Schedule Set',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'StartMonth', shifter: 0 },
                       '240': { fieldname: 'Reserved0', shifter: 4 } } },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartDayOfMonth', shifter: 0 },
                       '224': { fieldname: 'Reserved1', shifter: 5 } } },
                 '5': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'StartWeekday', shifter: 0 } },
                    bitflag: { '128': 'Reserved2' } },
                 '6': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartHour', shifter: 0 },
                       '224': { fieldname: 'DurationType', shifter: 5 } } },
                 '7': 
                  { name: 'Properties5',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'StartMinute', shifter: 0 },
                       '192': { fieldname: 'Reserved3', shifter: 6 } } },
                 '8': { name: 'DurationByte', type: 'WORD', showhex: true },
                 '9': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '10': { name: 'NumberOfCmdToFollow', type: 'BYTE', showhex: true },
                 '11': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'Length', type: 'BYTE', showhex: true },
                       '1': 
                        { name: 'Byte',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 10,
                    lengthmask: 255,
                    shifter: 0 } } },
           '4': 
            { name: 'COMMAND_SCHEDULE_GET',
              help: 'Schedule Get',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'COMMAND_SCHEDULE_REPORT',
              help: 'Schedule Report',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'StartMonth', shifter: 0 },
                       '240': { fieldname: 'ActiveId', shifter: 4 } } },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'StartDayOfMonth', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Reserved0',
                          fieldmask: 224,
                          shifter: 5,
                          fieldenum: 
                           { '0': 'RepeatEverynHours',
                             '1': 'RepeatEverynDays',
                             '2': 'RepeatEverynWeeks' } } } },
                 '5': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'StartWeekday', shifter: 0 } },
                    bitflag: { '128': 'Reserved1' } },
                 '6': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartHour', shifter: 0 },
                       '224': { fieldname: 'DurationType', shifter: 5 } } },
                 '7': 
                  { name: 'Properties5',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'StartMinute', shifter: 0 },
                       '192': { fieldname: 'Reserved2', shifter: 6 } } },
                 '8': { name: 'DurationByte', type: 'WORD', showhex: true },
                 '9': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '10': { name: 'NumberOfCmdToFollow', type: 'BYTE', showhex: true },
                 '11': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'Length', type: 'BYTE', showhex: true },
                       '1': 
                        { name: 'Byte',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 10,
                    lengthmask: 255,
                    shifter: 0 } } },
           '6': 
            { name: 'REMOVE',
              help: 'Schedule Remove',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'STATE_SET',
              help: 'Schedule State Set',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleState', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '8': 
            { name: 'STATE_GET',
              help: 'Schedule State Get',
              param: { '0': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'STATE_REPORT',
              help: 'Schedule State Report',
              param: 
               { '0': 
                  { name: 'NumberOfSupportedScheduleId',
                    type: 'BYTE',
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Override' },
                    bitfield: { '254': { fieldname: 'ReportsToFollow', shifter: 1 } } },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ActiveId1', shifter: 0 },
                       '240': { fieldname: 'ActiveId2', shifter: 4 } } },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ActiveId3', shifter: 0 },
                       '240': { fieldname: 'ActiveIdn', shifter: 4 } } },
                 '4': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } } } },
     '0x53-V3': 
      { version: 3,
        name: 'SCHEDULE',
        help: 'Command Class Schedule',
        id: 83,
        COMMAND: 
         { '1': 
            { name: 'SUPPORTED_GET',
              help: 'Schedule Support Get',
              param: { '0': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Schedule Support Report',
              param: 
               { '0': 
                  { name: 'NumberOfSupportedScheduleId',
                    type: 'BYTE',
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'StartTimeSupport', shifter: 0 } },
                    bitflag: { '64': 'FallbackSupport', '128': 'SupportEnabledisable' } },
                 '2': { name: 'NumberOfSupportedCc', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'SupportedCc', type: 'BYTE', showhex: true },
                       '3': 
                        { name: 'Properties2',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '3': { fieldname: 'SupportedCommand', shifter: 0 },
                             '252': { fieldname: 'Reserved', shifter: 2 } } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 },
                 '4': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SupportedOverrideTypes', shifter: 0 } },
                    bitflag: { '128': 'OverrideSupport' } },
                 '5': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'NumberOfSupportedScheduleBlocks',
                    type: 'BYTE',
                    showhex: true } } },
           '3': 
            { name: 'COMMAND_SCHEDULE_SET',
              help: 'Schedule Set',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'StartMonth', shifter: 0 },
                       '240': { fieldname: 'RecurrenceOffset', shifter: 4 } } },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'StartDayOfMonth', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'RecurrenceMode',
                          fieldmask: 96,
                          shifter: 5,
                          fieldenum: 
                           { '0': 'RepeatEverynHours',
                             '1': 'RepeatEverynDays',
                             '2': 'RepeatEverynWeeks' } } },
                    bitflag: { '128': 'Reserved1' } },
                 '5': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'StartWeekday', shifter: 0 } },
                    bitflag: { '128': 'Reserved2' } },
                 '6': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartHour', shifter: 0 },
                       '224': { fieldname: 'DurationType', shifter: 5 } } },
                 '7': 
                  { name: 'Properties5',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'StartMinute', shifter: 0 } },
                    bitflag: { '64': 'Relative', '128': 'Reserved3' } },
                 '8': { name: 'DurationByte', type: 'WORD', showhex: true },
                 '9': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '10': { name: 'NumberOfCmdToFollow', type: 'BYTE', showhex: true },
                 '11': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'Length', type: 'BYTE', showhex: true },
                       '1': 
                        { name: 'Byte',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 10,
                    lengthmask: 255,
                    shifter: 0 } } },
           '4': 
            { name: 'COMMAND_SCHEDULE_GET',
              help: 'Schedule Get',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'AidRoCtl' } } } },
           '5': 
            { name: 'COMMAND_SCHEDULE_REPORT',
              help: 'Schedule Report',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true },
                 '2': { name: 'StartYear', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'StartMonth', shifter: 0 },
                       '240': { fieldname: 'AidRo', shifter: 4 } } },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'StartDayOfMonth', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'RecurrenceMode',
                          fieldmask: 96,
                          shifter: 5,
                          fieldenum: 
                           { '0': 'RepeatEverynHours',
                             '1': 'RepeatEverynDays',
                             '2': 'RepeatEverynWeeks' } } },
                    bitflag: { '128': 'AidRoCtl' } },
                 '5': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'StartWeekday', shifter: 0 } },
                    bitflag: { '128': 'Reserved1' } },
                 '6': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'StartHour', shifter: 0 },
                       '224': { fieldname: 'DurationType', shifter: 5 } } },
                 '7': 
                  { name: 'Properties5',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'StartMinute', shifter: 0 } },
                    bitflag: { '64': 'Relative', '128': 'Reserved2' } },
                 '8': { name: 'DurationByte', type: 'WORD', showhex: true },
                 '9': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '10': { name: 'NumberOfCmdToFollow', type: 'BYTE', showhex: true },
                 '11': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'Length', type: 'BYTE', showhex: true },
                       '1': 
                        { name: 'Byte',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 10,
                    lengthmask: 255,
                    shifter: 0 } } },
           '6': 
            { name: 'REMOVE',
              help: 'Schedule Remove',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'STATE_SET',
              help: 'Schedule State Set',
              param: 
               { '0': { name: 'ScheduleId', type: 'BYTE', showhex: true },
                 '1': { name: 'ScheduleState', type: 'BYTE', showhex: true },
                 '2': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '8': 
            { name: 'STATE_GET',
              help: 'Schedule State Get',
              param: { '0': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'STATE_REPORT',
              help: 'Schedule State Report',
              param: 
               { '0': 
                  { name: 'NumberOfSupportedScheduleId',
                    type: 'BYTE',
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Override' },
                    bitfield: { '254': { fieldname: 'ReportsToFollow', shifter: 1 } } },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ActiveId1', shifter: 0 },
                       '240': { fieldname: 'ActiveId2', shifter: 4 } } },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ActiveId3', shifter: 0 },
                       '240': { fieldname: 'ActiveIdn', shifter: 4 } } },
                 '4': { name: 'ScheduleIdBlock', type: 'BYTE', showhex: true } } } } },
     '0x54-V1': 
      { version: 1,
        name: 'NETWORK_MANAGEMENT_PRIMARY',
        help: 'Command Class Network Management Primary',
        id: 84,
        COMMAND: 
         { '1': 
            { name: 'CONTROLLER_CHANGE',
              help: 'Controller Change',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: { '2': 'ControllerChangeStart', '5': 'ControllerChangeStop' } },
                 '3': 
                  { name: 'TxOptions',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Ack',
                       '1': 'LowPower',
                       '2': 'AutoRoute',
                       '3': 'Reserved',
                       '4': 'NoRoute',
                       '5': 'Explore',
                       '6': 'NoRetransmission',
                       '7': 'HighPower' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'CONTROLLER_CHANGE_STATUS',
              help: 'Controller Change Status',
              param: 
               { '0': { name: 'SeqNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '6': 'NodeAddStatusDone',
                       '7': 'NodeAddStatusFailed',
                       '9': 'NodeAddStatusSecurityFailed' } },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '4': { name: 'NodeInfoLength', type: 'BYTE', showhex: true },
                 '5': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Capability', shifter: 0 } },
                    bitflag: { '128': 'Listening' } },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Security', shifter: 0 } },
                    bitflag: { '128': 'Opt' } },
                 '7': { name: 'BasicDeviceClass', type: 'BYTE', showhex: true },
                 '8': { name: 'GenericDeviceClass', type: 'BYTE', showhex: true },
                 '9': { name: 'SpecificDeviceClass', type: 'BYTE', showhex: true },
                 '10': 
                  { name: 'CommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x55-V1': 
      { version: 1,
        name: 'TRANSPORT_SERVICE',
        help: 'Command Class Transport Service',
        comment: '[OBSOLETED]',
        id: 85,
        COMMAND: 
         { '192': 
            { name: 'COMMAND_FIRST_FRAGMENT',
              help: 'First Fragment',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'DatagramSize1', shifter: 0 } } },
                 '1': { name: 'DatagramSize2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'SequenceNo', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '3': 
                  { name: 'Payload',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '4': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '224': 
            { name: 'COMMAND_SUBSEQUENT_FRAGMENT',
              help: 'Subsequent Fragment',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'DatagramSize1', shifter: 0 } } },
                 '1': { name: 'DatagramSize2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'DatagramOffset1', shifter: 0 },
                       '120': { fieldname: 'SequenceNo', shifter: 3 } },
                    bitflag: { '128': 'Reserved' } },
                 '3': { name: 'DatagramOffset2', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'Payload',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '5': { name: 'Checksum', type: 'WORD', showhex: true } } } } },
     '0x55-V2': 
      { version: 2,
        name: 'TRANSPORT_SERVICE',
        help: 'Command Class Transport Service',
        id: 85,
        COMMAND: 
         { '192': 
            { name: 'COMMAND_FIRST_SEGMENT',
              help: 'First Segment',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'DatagramSize1', shifter: 0 } } },
                 '1': { name: 'DatagramSize2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Reserved', shifter: 0 },
                       '240': { fieldname: 'SessionId', shifter: 4 } },
                    bitflag: { '8': 'Ext' } },
                 '3': 
                  { name: 'HeaderExtensionLength',
                    type: 'BYTE',
                    optionaloffs: 2,
                    optionalmask: 8,
                    showhex: false },
                 '4': 
                  { name: 'HeaderExtension',
                    type: 'VARIANT',
                    optionaloffs: 2,
                    optionalmask: 8,
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 255,
                    shifter: 0 },
                 '5': 
                  { name: 'Payload',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '6': { name: 'FrameCheckSequence', type: 'WORD', showhex: true } } },
           '200': 
            { name: 'COMMAND_SEGMENT_REQUEST',
              help: 'Segment Request',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'Reserved', shifter: 0 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'DatagramOffset1', shifter: 0 },
                       '240': { fieldname: 'SessionId', shifter: 4 } },
                    bitflag: { '8': 'Reserved2' } },
                 '2': { name: 'DatagramOffset2', type: 'BYTE', showhex: true } } },
           '224': 
            { name: 'COMMAND_SUBSEQUENT_SEGMENT',
              help: 'Subsequent Segment',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'DatagramSize1', shifter: 0 } } },
                 '1': { name: 'DatagramSize2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'DatagramOffset1', shifter: 0 },
                       '240': { fieldname: 'SessionId', shifter: 4 } },
                    bitflag: { '8': 'Ext' } },
                 '3': { name: 'DatagramOffset2', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'HeaderExtensionLength',
                    type: 'BYTE',
                    optionaloffs: 2,
                    optionalmask: 8,
                    showhex: false },
                 '5': 
                  { name: 'HeaderExtension',
                    type: 'VARIANT',
                    optionaloffs: 2,
                    optionalmask: 8,
                    showhex: true,
                    lengthoffset: 4,
                    lengthmask: 255,
                    shifter: 0 },
                 '6': 
                  { name: 'Payload',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '7': { name: 'FrameCheckSequence', type: 'WORD', showhex: true } } },
           '232': 
            { name: 'COMMAND_SEGMENT_COMPLETE',
              help: 'Segment Complete',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'Reserved', shifter: 0 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'Reserved2', shifter: 0 },
                       '240': { fieldname: 'SessionId', shifter: 4 } } } } },
           '240': 
            { name: 'COMMAND_SEGMENT_WAIT',
              help: 'Segment Wait',
              cmd_mask: 248,
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    cmd_mask: 7,
                    bitfield: { '7': { fieldname: 'Reserved', shifter: 0 } } },
                 '1': { name: 'PendingFragments', type: 'BYTE', showhex: true } } } } },
     '0x56-V1': 
      { version: 1,
        name: 'CRC_16_ENCAP',
        help: 'Command Class CRC16 Encap',
        id: 86,
        COMMAND: 
         { '1': 
            { name: 'CRC_16_ENCAP',
              help: 'CRC16 Encap',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '1': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '2': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Checksum', type: 'WORD', showhex: true } } } } },
     '0x57-V1': 
      { version: 1,
        name: 'APPLICATION_CAPABILITY',
        help: 'Command Class Application Capability',
        id: 87,
        COMMAND: 
         { '1': 
            { name: 'COMMAND_COMMAND_CLASS_NOT_SUPPORTED',
              help: 'Command Command Class Not Supported',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'Dynamic' } },
                 '1': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '2': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false } } } } },
     '0x58-V1': 
      { version: 1,
        name: 'ZIP_ND',
        help: 'Command Class Z/IP-ND',
        id: 88,
        COMMAND: 
         { '1': 
            { name: 'ZIP_NODE_ADVERTISEMENT',
              help: 'Zip Node Advertisement',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Validity',
                          fieldmask: 3,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'INFORMATION_OK',
                             '1': 'INFORMATION_OBSOLETE',
                             '2': 'INFORMATION_NOT_FOUND' } } },
                    bitflag: { '4': 'Local' },
                    bitfield: { '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '3': 
                  { name: 'HomeId',
                    type: 'ARRAY',
                    len: 4,
                    is_ascii: false,
                    showhex: true } } },
           '3': 
            { name: 'ZIP_NODE_SOLICITATION',
              help: 'Zip Node Solicitation',
              param: 
               { '0': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } },
           '4': 
            { name: 'ZIP_INV_NODE_SOLICITATION',
              help: 'Zip Inverse Node Solicitation',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'Reserved1', shifter: 0 },
                       '248': { fieldname: 'Reserved2', shifter: 3 } },
                    bitflag: { '4': 'Local' } },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } } } },
     '0x59-V1': 
      { version: 1,
        name: 'ASSOCIATION_GRP_INFO',
        help: 'Command Class Association Group Info',
        id: 89,
        COMMAND: 
         { '1': 
            { name: 'ASSOCIATION_GROUP_NAME_GET',
              help: 'Association Group Name Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'ASSOCIATION_GROUP_NAME_REPORT',
              help: 'Association Group Name Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'LengthOfName', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Name',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'ASSOCIATION_GROUP_INFO_GET',
              help: 'Association Group Info Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '64': 'ListMode', '128': 'RefreshCache' } },
                 '1': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'ASSOCIATION_GROUP_INFO_REPORT',
              help: 'Association Group Info Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'GroupCount', shifter: 0 } },
                    bitflag: { '64': 'DynamicInfo', '128': 'ListMode' } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                       '1': { name: 'Mode', type: 'BYTE', showhex: true },
                       '2': 
                        { name: 'Profile1',
                          type: 'CONST',
                          const: 
                           { '0': 'ProfileGeneral',
                             '32': 'ProfileControl',
                             '49': 'ProfileSensor',
                             '113': 'ProfileNotification' } },
                       '3': 
                        { name: 'Profile2',
                          type: 'MULTI_ARRAY',
                          multi_array: 
                           [ { bitflag: { '0': 'ProfileGeneralNa', '1': 'ProfileGeneralLifeline' },
                               ref: 0 },
                             { bitflag: 
                                { '1': 'ProfileControlKey01',
                                  '2': 'ProfileControlKey02',
                                  '3': 'ProfileControlKey03',
                                  '4': 'ProfileControlKey04',
                                  '5': 'ProfileControlKey05',
                                  '6': 'ProfileControlKey06',
                                  '7': 'ProfileControlKey07',
                                  '8': 'ProfileControlKey08',
                                  '9': 'ProfileControlKey09',
                                  '10': 'ProfileControlKey10',
                                  '11': 'ProfileControlKey11',
                                  '12': 'ProfileControlKey12',
                                  '13': 'ProfileControlKey13',
                                  '14': 'ProfileControlKey14',
                                  '15': 'ProfileControlKey15',
                                  '16': 'ProfileControlKey16',
                                  '17': 'ProfileControlKey17',
                                  '18': 'ProfileControlKey18',
                                  '19': 'ProfileControlKey19',
                                  '20': 'ProfileControlKey20',
                                  '21': 'ProfileControlKey21',
                                  '22': 'ProfileControlKey22',
                                  '23': 'ProfileControlKey23',
                                  '24': 'ProfileControlKey24',
                                  '25': 'ProfileControlKey25',
                                  '26': 'ProfileControlKey26',
                                  '27': 'ProfileControlKey27',
                                  '28': 'ProfileControlKey28',
                                  '29': 'ProfileControlKey29',
                                  '30': 'ProfileControlKey30',
                                  '31': 'ProfileControlKey31',
                                  '32': 'ProfileControlKey32' },
                               ref: 32 } ],
                          paramdescloc: { param: 2, paramdesc: 255, paramstart: 2 } },
                       '4': { name: 'Reserved', type: 'BYTE', showhex: true },
                       '5': { name: 'EventCode', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 63,
                    shifter: 0 } } },
           '5': 
            { name: 'ASSOCIATION_GROUP_COMMAND_LIST_GET',
              help: 'Association Group Command List Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'AllowCache' } },
                 '1': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'ASSOCIATION_GROUP_COMMAND_LIST_REPORT',
              help: 'Association Group Command List Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ListLength', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Command',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x59-V2': 
      { version: 2,
        name: 'ASSOCIATION_GRP_INFO',
        help: 'Command Class Association Group Info',
        id: 89,
        COMMAND: 
         { '1': 
            { name: 'ASSOCIATION_GROUP_NAME_GET',
              help: 'Association Group Name Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'ASSOCIATION_GROUP_NAME_REPORT',
              help: 'Association Group Name Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'LengthOfName', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Name',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'ASSOCIATION_GROUP_INFO_GET',
              help: 'Association Group Info Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '64': 'ListMode', '128': 'RefreshCache' } },
                 '1': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'ASSOCIATION_GROUP_INFO_REPORT',
              help: 'Association Group Info Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'GroupCount', shifter: 0 } },
                    bitflag: { '64': 'DynamicInfo', '128': 'ListMode' } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                       '1': { name: 'Mode', type: 'BYTE', showhex: true },
                       '2': 
                        { name: 'Profile1',
                          type: 'CONST',
                          const: 
                           { '0': 'ProfileGeneral',
                             '32': 'ProfileControl',
                             '49': 'ProfileSensor',
                             '50': 'ProfileMeter',
                             '113': 'ProfileNotification' } },
                       '3': 
                        { name: 'Profile2',
                          type: 'MULTI_ARRAY',
                          multi_array: 
                           [ { bitflag: { '0': 'ProfileGeneralNa', '1': 'ProfileGeneralLifeline' },
                               ref: 0 },
                             { bitflag: 
                                { '1': 'ProfileControlKey01',
                                  '2': 'ProfileControlKey02',
                                  '3': 'ProfileControlKey03',
                                  '4': 'ProfileControlKey04',
                                  '5': 'ProfileControlKey05',
                                  '6': 'ProfileControlKey06',
                                  '7': 'ProfileControlKey07',
                                  '8': 'ProfileControlKey08',
                                  '9': 'ProfileControlKey09',
                                  '10': 'ProfileControlKey10',
                                  '11': 'ProfileControlKey11',
                                  '12': 'ProfileControlKey12',
                                  '13': 'ProfileControlKey13',
                                  '14': 'ProfileControlKey14',
                                  '15': 'ProfileControlKey15',
                                  '16': 'ProfileControlKey16',
                                  '17': 'ProfileControlKey17',
                                  '18': 'ProfileControlKey18',
                                  '19': 'ProfileControlKey19',
                                  '20': 'ProfileControlKey20',
                                  '21': 'ProfileControlKey21',
                                  '22': 'ProfileControlKey22',
                                  '23': 'ProfileControlKey23',
                                  '24': 'ProfileControlKey24',
                                  '25': 'ProfileControlKey25',
                                  '26': 'ProfileControlKey26',
                                  '27': 'ProfileControlKey27',
                                  '28': 'ProfileControlKey28',
                                  '29': 'ProfileControlKey29',
                                  '30': 'ProfileControlKey30',
                                  '31': 'ProfileControlKey31',
                                  '32': 'ProfileControlKey32' },
                               ref: 32 },
                             { bitflag: 
                                { '1': 'ProfilemultilevelSensorTypeTemperature',
                                  '5': 'ProfilemultilevelSensorTypeHumidity' },
                               ref: 49 },
                             { bitflag: 
                                { '1': 'ProfilenotificationTypeSmoke',
                                  '3': 'ProfilenotificationTypeCo2' },
                               ref: 113 },
                             { bitflag: 
                                { '1': 'ProfilemeterTypeElectric',
                                  '2': 'ProfilemeterTypeGas',
                                  '3': 'ProfilemeterTypeWater' },
                               ref: 50 } ],
                          paramdescloc: { param: 2, paramdesc: 255, paramstart: 2 } },
                       '4': { name: 'Reserved', type: 'BYTE', showhex: true },
                       '5': { name: 'EventCode', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 63,
                    shifter: 0 } } },
           '5': 
            { name: 'ASSOCIATION_GROUP_COMMAND_LIST_GET',
              help: 'Association Group Command List Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'AllowCache' } },
                 '1': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'ASSOCIATION_GROUP_COMMAND_LIST_REPORT',
              help: 'Association Group Command List Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ListLength', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Command',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x59-V3': 
      { version: 3,
        name: 'ASSOCIATION_GRP_INFO',
        help: 'Command Class Association Group Info',
        id: 89,
        COMMAND: 
         { '1': 
            { name: 'ASSOCIATION_GROUP_NAME_GET',
              help: 'Association Group Name Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'ASSOCIATION_GROUP_NAME_REPORT',
              help: 'Association Group Name Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'LengthOfName', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Name',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'ASSOCIATION_GROUP_INFO_GET',
              help: 'Association Group Info Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '64': 'ListMode', '128': 'RefreshCache' } },
                 '1': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'ASSOCIATION_GROUP_INFO_REPORT',
              help: 'Association Group Info Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'GroupCount', shifter: 0 } },
                    bitflag: { '64': 'DynamicInfo', '128': 'ListMode' } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                       '1': { name: 'Mode', type: 'BYTE', showhex: true },
                       '2': 
                        { name: 'Profile1',
                          type: 'CONST',
                          const: 
                           { '0': 'ProfileGeneral',
                             '32': 'ProfileControl',
                             '49': 'ProfileSensor',
                             '50': 'ProfileMeter',
                             '107': 'ProfileIrrigation',
                             '113': 'ProfileNotification' } },
                       '3': 
                        { name: 'Profile2',
                          type: 'MULTI_ARRAY',
                          multi_array: 
                           [ { bitflag: { '0': 'ProfileGeneralNa', '1': 'ProfileGeneralLifeline' },
                               ref: 0 },
                             { bitflag: 
                                { '1': 'ProfileControlKey01',
                                  '2': 'ProfileControlKey02',
                                  '3': 'ProfileControlKey03',
                                  '4': 'ProfileControlKey04',
                                  '5': 'ProfileControlKey05',
                                  '6': 'ProfileControlKey06',
                                  '7': 'ProfileControlKey07',
                                  '8': 'ProfileControlKey08',
                                  '9': 'ProfileControlKey09',
                                  '10': 'ProfileControlKey10',
                                  '11': 'ProfileControlKey11',
                                  '12': 'ProfileControlKey12',
                                  '13': 'ProfileControlKey13',
                                  '14': 'ProfileControlKey14',
                                  '15': 'ProfileControlKey15',
                                  '16': 'ProfileControlKey16',
                                  '17': 'ProfileControlKey17',
                                  '18': 'ProfileControlKey18',
                                  '19': 'ProfileControlKey19',
                                  '20': 'ProfileControlKey20',
                                  '21': 'ProfileControlKey21',
                                  '22': 'ProfileControlKey22',
                                  '23': 'ProfileControlKey23',
                                  '24': 'ProfileControlKey24',
                                  '25': 'ProfileControlKey25',
                                  '26': 'ProfileControlKey26',
                                  '27': 'ProfileControlKey27',
                                  '28': 'ProfileControlKey28',
                                  '29': 'ProfileControlKey29',
                                  '30': 'ProfileControlKey30',
                                  '31': 'ProfileControlKey31',
                                  '32': 'ProfileControlKey32' },
                               ref: 32 },
                             { bitflag: 
                                { '1': 'ProfilemultilevelSensorTypeTemperature',
                                  '5': 'ProfilemultilevelSensorTypeHumidity' },
                               ref: 49 },
                             { bitflag: 
                                { '1': 'ProfilenotificationTypeSmoke',
                                  '3': 'ProfilenotificationTypeCo2' },
                               ref: 113 },
                             { bitflag: 
                                { '1': 'ProfilemeterTypeElectric',
                                  '2': 'ProfilemeterTypeGas',
                                  '3': 'ProfilemeterTypeWater' },
                               ref: 50 },
                             { bitflag: 
                                { '1': 'IrrigationChannel01',
                                  '2': 'IrrigationChannel02',
                                  '3': 'IrrigationChannel03',
                                  '4': 'IrrigationChannel04',
                                  '5': 'IrrigationChannel05',
                                  '6': 'IrrigationChannel06',
                                  '7': 'IrrigationChannel07',
                                  '8': 'IrrigationChannel08',
                                  '9': 'IrrigationChannel09',
                                  '10': 'IrrigationChannel10',
                                  '11': 'IrrigationChannel11',
                                  '12': 'IrrigationChannel12',
                                  '13': 'IrrigationChannel13',
                                  '14': 'IrrigationChannel14',
                                  '15': 'IrrigationChannel15',
                                  '16': 'IrrigationChannel16',
                                  '17': 'IrrigationChannel17',
                                  '18': 'IrrigationChannel18',
                                  '19': 'IrrigationChannel19',
                                  '20': 'IrrigationChannel20',
                                  '21': 'IrrigationChannel21',
                                  '22': 'IrrigationChannel22',
                                  '23': 'IrrigationChannel23',
                                  '24': 'IrrigationChannel24',
                                  '25': 'IrrigationChannel25',
                                  '26': 'IrrigationChannel26',
                                  '27': 'IrrigationChannel27',
                                  '28': 'IrrigationChannel28',
                                  '29': 'IrrigationChannel29',
                                  '30': 'IrrigationChannel30',
                                  '31': 'IrrigationChannel31',
                                  '32': 'IrrigationChannel32' },
                               ref: 107 } ],
                          paramdescloc: { param: 2, paramdesc: 255, paramstart: 2 } },
                       '4': { name: 'Reserved', type: 'BYTE', showhex: true },
                       '5': { name: 'EventCode', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 63,
                    shifter: 0 } } },
           '5': 
            { name: 'ASSOCIATION_GROUP_COMMAND_LIST_GET',
              help: 'Association Group Command List Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'AllowCache' } },
                 '1': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'ASSOCIATION_GROUP_COMMAND_LIST_REPORT',
              help: 'Association Group Command List Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'ListLength', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Command',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x5a-V1': 
      { version: 1,
        name: 'DEVICE_RESET_LOCALLY',
        help: 'Command Class Device Reset Locally',
        id: 90,
        COMMAND: 
         { '1': 
            { name: 'NOTIFICATION',
              help: 'Device Reset Locally Notification' } } },
     '0x5b-V1': 
      { version: 1,
        name: 'CENTRAL_SCENE',
        help: 'Command Class Central Scene',
        id: 91,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Central Scene Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Central Scene Supported Report',
              param: { '0': { name: 'SupportedScenes', type: 'BYTE', showhex: false } } },
           '3': 
            { name: 'NOTIFICATION',
              help: 'Central Scene Notification',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'KeyAttributes', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': { name: 'SceneNumber', type: 'BYTE', showhex: false } } } } },
     '0x5b-V2': 
      { version: 2,
        name: 'CENTRAL_SCENE',
        help: 'Command Class Central Scene',
        id: 91,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Central Scene Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Central Scene Supported Report',
              param: 
               { '0': { name: 'SupportedScenes', type: 'BYTE', showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Identical' },
                    bitfield: 
                     { '6': { fieldname: 'NumberOfBitMaskBytes', shifter: 1 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'SupportedKeyAttributesForScene',
                          type: 'BITMASK',
                          bitflag: 
                           { '0': 'KeyPressed1Time',
                             '1': 'KeyReleased',
                             '2': 'KeyHeldDown',
                             '3': 'KeyPressed2Times',
                             '4': 'KeyPressed3Times',
                             '5': 'KeyPressed4Times',
                             '6': 'KeyPressed5Times' },
                          lengthoffset: 129,
                          lengthmask: 6,
                          shifter: 1 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'NOTIFICATION',
              help: 'Central Scene Notification',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'KeyAttributes',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'KeyPressed1Time',
                             '1': 'KeyReleased',
                             '2': 'KeyHeldDown',
                             '3': 'KeyPressed2Times',
                             '4': 'KeyPressed3Times',
                             '5': 'KeyPressed4Times',
                             '6': 'KeyPressed5Times' } } },
                    bitfield: { '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': { name: 'SceneNumber', type: 'BYTE', showhex: false } } } } },
     '0x5b-V3': 
      { version: 3,
        name: 'CENTRAL_SCENE',
        help: 'Command Class Central Scene',
        id: 91,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Central Scene Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Central Scene Supported Report',
              param: 
               { '0': { name: 'SupportedScenes', type: 'BYTE', showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Identical', '128': 'SlowRefreshSupport' },
                    bitfield: 
                     { '6': { fieldname: 'NumberOfBitMaskBytes', shifter: 1 },
                       '120': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'SupportedKeyAttributesForScene',
                          type: 'BITMASK',
                          bitflag: 
                           { '0': 'KeyPressed1Time',
                             '1': 'KeyReleased',
                             '2': 'KeyHeldDown',
                             '3': 'KeyPressed2Times',
                             '4': 'KeyPressed3Times',
                             '5': 'KeyPressed4Times',
                             '6': 'KeyPressed5Times' },
                          lengthoffset: 129,
                          lengthmask: 6,
                          shifter: 1 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'NOTIFICATION',
              help: 'Central Scene Notification',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'KeyAttributes',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'KeyPressed1Time',
                             '1': 'KeyReleased',
                             '2': 'KeyHeldDown',
                             '3': 'KeyPressed2Times',
                             '4': 'KeyPressed3Times',
                             '5': 'KeyPressed4Times',
                             '6': 'KeyPressed5Times' } } },
                    bitfield: { '120': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '128': 'SlowRefresh' } },
                 '2': { name: 'SceneNumber', type: 'BYTE', showhex: false } } },
           '4': 
            { name: 'CONFIGURATION_SET',
              help: 'Central Scene Configuration Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'SlowRefresh' } } } },
           '5': 
            { name: 'CONFIGURATION_GET',
              help: 'Central Scene Configuration Get' },
           '6': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Central Scene Configuration Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '128': 'SlowRefresh' } } } } } },
     '0x5c-V1': 
      { version: 1,
        name: 'IP_ASSOCIATION',
        help: 'Command Class Ip Association',
        id: 92,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'IP Association Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '2': { name: 'EndPoint', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'GET',
              help: 'IP Association Get',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'Index', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'IP Association Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'Index', type: 'BYTE', showhex: true },
                 '2': { name: 'ActualNodes', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '4': { name: 'EndPoint', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'REMOVE',
              help: 'IP Association Remove',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '2': { name: 'EndPoint', type: 'BYTE', showhex: true } } } } },
     '0x5d-V1': 
      { version: 1,
        name: 'ANTITHEFT',
        help: 'Command Class Anti-theft',
        comment: '[OBSOLETED]',
        id: 93,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Anti-theft Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'NumberOfMagicCodeBytes', shifter: 0 } },
                    bitflag: { '128': 'Enable' } },
                 '1': 
                  { name: 'MagicCode',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 127,
                    shifter: 0 },
                 '2': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '3': { name: 'AntitheftHintNumberBytes', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'AntitheftHintByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 255,
                    shifter: 0 } } },
           '2': { name: 'GET', help: 'Anti-theft Get' },
           '3': 
            { name: 'REPORT',
              help: 'Anti-theft Report',
              param: 
               { '0': 
                  { name: 'AntitheftProtectionStatus',
                    type: 'BYTE',
                    showhex: true },
                 '1': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '2': { name: 'AntitheftHintNumberBytes', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'AntitheftHintByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x5d-V2': 
      { version: 2,
        name: 'ANTITHEFT',
        help: 'Command Class Anti-theft',
        id: 93,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Anti-theft Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'NumberOfMagicCodeBytes', shifter: 0 } },
                    bitflag: { '128': 'Enable' } },
                 '1': 
                  { name: 'MagicCode',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 127,
                    shifter: 0 },
                 '2': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '3': { name: 'AntitheftHintNumberBytes', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'AntitheftHintByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 255,
                    shifter: 0 } } },
           '2': { name: 'GET', help: 'Anti-theft Get' },
           '3': 
            { name: 'REPORT',
              help: 'Anti-theft Report',
              param: 
               { '0': 
                  { name: 'AntitheftProtectionStatus',
                    type: 'BYTE',
                    showhex: true },
                 '1': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '2': { name: 'AntitheftHintNumberBytes', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'AntitheftHintByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x5e-V1': 
      { version: 1,
        name: 'ZWAVEPLUS_INFO',
        help: 'Command Class Z-Wave+ Info',
        comment: '[OBSOLETED]',
        id: 94,
        COMMAND: 
         { '1': { name: 'GET', help: 'Z-Wave+ Info Get' },
           '2': 
            { name: 'REPORT',
              help: 'Z-Wave+ Info Report',
              param: 
               { '0': { name: 'Version', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'RoleType',
                    type: 'CONST',
                    const: 
                     { '0': 'RoleTypeControllerCentralStatic',
                       '1': 'RoleTypeControllerSubStatic',
                       '2': 'RoleTypeControllerPortable',
                       '3': 'RoleTypeControllerPortableReporting',
                       '4': 'RoleTypeSlavePortable',
                       '5': 'RoleTypeSlaveAlwaysOn',
                       '6': 'RoleTypeSlaveSleepingReporting',
                       '7': 'RoleTypeSlaveSleepingListening' } },
                 '2': 
                  { name: 'NodeType',
                    type: 'CONST',
                    const: 
                     { '0': 'NodeTypeZwaveplusNode',
                       '1': 'NodeTypeZwaveplusForIpRouter',
                       '2': 'NodeTypeZwaveplusForIpGateway',
                       '3': 'NodeTypeZwaveplusForIpClientIpNode',
                       '4': 'NodeTypeZwaveplusForIpClientZwaveNode' } } } } } },
     '0x5e-V2': 
      { version: 2,
        name: 'ZWAVEPLUS_INFO',
        help: 'Command Class Z-Wave+ Info',
        comment: 'SDS11907-3',
        id: 94,
        COMMAND: 
         { '1': { name: 'GET', help: 'Z-Wave+ Info Get' },
           '2': 
            { name: 'REPORT',
              help: 'Z-Wave+ Info Report',
              param: 
               { '0': { name: 'Version', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'RoleType',
                    type: 'CONST',
                    const: 
                     { '0': 'RoleTypeControllerCentralStatic',
                       '1': 'RoleTypeControllerSubStatic',
                       '2': 'RoleTypeControllerPortable',
                       '3': 'RoleTypeControllerPortableReporting',
                       '4': 'RoleTypeSlavePortable',
                       '5': 'RoleTypeSlaveAlwaysOn',
                       '6': 'RoleTypeSlaveSleepingReporting',
                       '7': 'RoleTypeSlaveSleepingListening' } },
                 '2': 
                  { name: 'NodeType',
                    type: 'CONST',
                    const: 
                     { '0': 'NodeTypeZwaveplusNode',
                       '2': 'NodeTypeZwaveplusForIpGateway' } },
                 '3': { name: 'InstallerIconType', type: 'WORD', showhex: true },
                 '4': { name: 'UserIconType', type: 'WORD', showhex: true } } } } },
     '0x5f-V1': 
      { version: 1,
        name: 'ZIP_GATEWAY',
        help: 'Command Class Z/IP Gateway',
        id: 95,
        COMMAND: 
         { '1': 
            { name: 'GATEWAY_MODE_SET',
              help: 'Gateway Mode Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: { '1': 'Standalone', '2': 'Portal' } } } },
           '2': { name: 'GATEWAY_MODE_GET', help: 'Gateway Mode Get' },
           '3': 
            { name: 'GATEWAY_MODE_REPORT',
              help: 'Gateway Mode Report',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    const: { '1': 'Standalone', '2': 'Portal' } } } },
           '4': 
            { name: 'GATEWAY_PEER_SET',
              help: 'Gateway Peer Set',
              param: 
               { '0': { name: 'PeerProfile', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '2': { name: 'Port', type: 'WORD', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'PeerNameLength', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } } },
                 '4': 
                  { name: 'PeerName',
                    type: 'VARIANT',
                    lengthoffset: 3,
                    lengthmask: 63,
                    shifter: 0,
                    is_ascii: true } } },
           '5': 
            { name: 'GATEWAY_PEER_GET',
              help: 'Gateway Peer Get',
              param: { '0': { name: 'PeerProfile', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'GATEWAY_PEER_REPORT',
              help: 'Gateway Peer Report',
              param: 
               { '0': { name: 'PeerProfile', type: 'BYTE', showhex: true },
                 '1': { name: 'PeerCount', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Ipv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '3': { name: 'Port', type: 'WORD', showhex: true },
                 '4': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '63': { fieldname: 'PeerNameLength', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } } },
                 '5': 
                  { name: 'PeerName',
                    type: 'VARIANT',
                    lengthoffset: 4,
                    lengthmask: 63,
                    shifter: 0,
                    is_ascii: true } } },
           '7': 
            { name: 'GATEWAY_LOCK_SET',
              help: 'Gateway Lock Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Lock', '2': 'Show' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } } } },
           '8': 
            { name: 'UNSOLICITED_DESTINATION_SET',
              help: 'Unsolicited Destination Set ',
              param: 
               { '0': 
                  { name: 'UnsolicitedIpv6Destination',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '1': 
                  { name: 'UnsolicitedDestinationPort',
                    type: 'WORD',
                    showhex: true } } },
           '9': 
            { name: 'UNSOLICITED_DESTINATION_GET',
              help: 'Unsolicited Destination Get' },
           '10': 
            { name: 'UNSOLICITED_DESTINATION_REPORT',
              help: 'Unsolicited Destination Report',
              param: 
               { '0': 
                  { name: 'UnsolicitedIpv6Destination',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '1': 
                  { name: 'UnsolicitedDestinationPort',
                    type: 'WORD',
                    showhex: true } } },
           '11': 
            { name: 'COMMAND_APPLICATION_NODE_INFO_SET',
              help: 'Application Node Info Set',
              param: 
               { '0': 
                  { name: 'NonsecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '1': 
                  { name: 'SecurityScheme0Mark',
                    type: 'MARKER',
                    const: { '0': 'SecurityScheme0Mark', '241': 'SecurityScheme0Mark' } },
                 '2': 
                  { name: 'SecurityScheme0CommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '12': 
            { name: 'COMMAND_APPLICATION_NODE_INFO_GET',
              help: 'Application Node Info Get' },
           '13': 
            { name: 'COMMAND_APPLICATION_NODE_INFO_REPORT',
              help: 'Application Node Info Report',
              param: 
               { '0': 
                  { name: 'NonsecureCommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '1': 
                  { name: 'SecurityScheme0Mark',
                    type: 'MARKER',
                    const: { '0': 'SecurityScheme0Mark', '241': 'SecurityScheme0Mark' } },
                 '2': 
                  { name: 'SecurityScheme0CommandClass',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x60-V1': 
      { version: 1,
        name: 'MULTI_INSTANCE',
        help: 'Command Class Multi Instance',
        comment: '[OBSOLETED]',
        id: 96,
        COMMAND: 
         { '4': 
            { name: 'GET',
              help: 'Multi Instance Get',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false } } },
           '5': 
            { name: 'REPORT',
              help: 'Multi Instance Report',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '1': { name: 'Instances', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'ENCAP',
              help: 'Multi Instance Cmd Encap',
              param: 
               { '0': { name: 'Instance', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '2': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x60-V2': 
      { version: 2,
        name: 'MULTI_CHANNEL',
        help: 'Command Class Multi Channel',
        comment: '[OBSOLETED]',
        id: 96,
        COMMAND: 
         { '4': 
            { name: 'MULTI_INSTANCE_GET',
              help: 'Multi Instance Get',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false } } },
           '5': 
            { name: 'MULTI_INSTANCE_REPORT',
              help: 'Multi Instance Report',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Instances', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '6': 
            { name: 'MULTI_INSTANCE_CMD_ENCAP',
              help: 'Multi Instance Cmd Encap',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Instance', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '2': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '7': { name: 'END_POINT_GET', help: 'Multi Channel End Point Get' },
           '8': 
            { name: 'END_POINT_REPORT',
              help: 'Multi Channel End Point Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '64': 'Identical', '128': 'Dynamic' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoints', shifter: 0 } },
                    bitflag: { '128': 'Res2' } } } },
           '9': 
            { name: 'CAPABILITY_GET',
              help: 'Multi Channel Capability Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '10': 
            { name: 'CAPABILITY_REPORT',
              help: 'Multi Channel Capability Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                    bitflag: { '128': 'Dynamic' } },
                 '1': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '2': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false },
                 '3': 
                  { name: 'zwave.CommandClass',
                    type: 'VARIANT',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '11': 
            { name: 'END_POINT_FIND',
              help: 'Multi Channel End Point Find',
              param: 
               { '0': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '1': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false } } },
           '12': 
            { name: 'END_POINT_FIND_REPORT',
              help: 'Multi Channel End Point Find Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '2': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'Res' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '13': 
            { name: 'ENCAP',
              help: 'Multi Channel Command Encapsulation',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SourceEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'DestinationEndPoint', shifter: 0 } },
                    bitflag: { '128': 'BitAddress' } },
                 '2': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '4': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x60-V3': 
      { version: 3,
        name: 'MULTI_CHANNEL',
        help: 'Command Class Multi Channel',
        id: 96,
        COMMAND: 
         { '4': 
            { name: 'MULTI_INSTANCE_GET',
              help: 'Multi Instance Get',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false } } },
           '5': 
            { name: 'MULTI_INSTANCE_REPORT',
              help: 'Multi Instance Report',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Instances', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '6': 
            { name: 'MULTI_INSTANCE_CMD_ENCAP',
              help: 'Multi Instance Cmd Encap',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Instance', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '2': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '7': { name: 'END_POINT_GET', help: 'Multi Channel End Point Get' },
           '8': 
            { name: 'END_POINT_REPORT',
              help: 'Multi Channel End Point Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '64': 'Identical', '128': 'Dynamic' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoints', shifter: 0 } },
                    bitflag: { '128': 'Res2' } } } },
           '9': 
            { name: 'CAPABILITY_GET',
              help: 'Multi Channel Capability Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '10': 
            { name: 'CAPABILITY_REPORT',
              help: 'Multi Channel Capability Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                    bitflag: { '128': 'Dynamic' } },
                 '1': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '2': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false },
                 '3': 
                  { name: 'zwave.CommandClass',
                    type: 'VARIANT',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '11': 
            { name: 'END_POINT_FIND',
              help: 'Multi Channel End Point Find',
              param: 
               { '0': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '1': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false } } },
           '12': 
            { name: 'END_POINT_FIND_REPORT',
              help: 'Multi Channel End Point Find Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '2': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'Res' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '13': 
            { name: 'ENCAP',
              help: 'Multi Channel Command Encapsulation',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SourceEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'DestinationEndPoint', shifter: 0 } },
                    bitflag: { '128': 'BitAddress' } },
                 '2': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '4': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x60-V4': 
      { version: 4,
        name: 'MULTI_CHANNEL',
        help: 'Command Class Multi Channel',
        id: 96,
        COMMAND: 
         { '4': 
            { name: 'MULTI_INSTANCE_GET',
              help: 'Multi Instance Get',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false } } },
           '5': 
            { name: 'MULTI_INSTANCE_REPORT',
              help: 'Multi Instance Report',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Instances', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '6': 
            { name: 'MULTI_INSTANCE_CMD_ENCAP',
              help: 'Multi Instance Cmd Encap',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'Instance', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '2': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '7': { name: 'END_POINT_GET', help: 'Multi Channel End Point Get' },
           '8': 
            { name: 'END_POINT_REPORT',
              help: 'Multi Channel End Point Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '64': 'Identical', '128': 'Dynamic' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'IndividualEndPoints', shifter: 0 } },
                    bitflag: { '128': 'Res2' } },
                 '2': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'AggregatedEndPoints', shifter: 0 } },
                    bitflag: { '128': 'Res3' } } } },
           '9': 
            { name: 'CAPABILITY_GET',
              help: 'Multi Channel Capability Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '10': 
            { name: 'CAPABILITY_REPORT',
              help: 'Multi Channel Capability Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                    bitflag: { '128': 'Dynamic' } },
                 '1': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '2': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false },
                 '3': 
                  { name: 'zwave.CommandClass',
                    type: 'VARIANT',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '11': 
            { name: 'END_POINT_FIND',
              help: 'Multi Channel End Point Find',
              param: 
               { '0': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '1': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false } } },
           '12': 
            { name: 'END_POINT_FIND_REPORT',
              help: 'Multi Channel End Point Find Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.GenericDevice',
                    type: 'BYTE',
                    encaptype: 'GEN_DEV_REF',
                    alias: 'zwaveGenericDevice',
                    showhex: false },
                 '2': 
                  { name: 'zwave.SpecificDevice',
                    type: 'BYTE',
                    encaptype: 'SPEC_DEV_REF',
                    alias: 'zwaveSpecificDevice',
                    showhex: false },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'Res' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '13': 
            { name: 'ENCAP',
              help: 'Multi Channel Command Encapsulation',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'SourceEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'DestinationEndPoint', shifter: 0 } },
                    bitflag: { '128': 'BitAddress' } },
                 '2': 
                  { name: 'zwave.CommandClass',
                    type: 'BYTE',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    showhex: false },
                 '3': 
                  { name: 'zwave.Command',
                    type: 'BYTE',
                    encaptype: 'CMD_REF',
                    alias: 'zwaveCommand',
                    showhex: false },
                 '4': 
                  { name: 'zwave.Payload',
                    type: 'VARIANT',
                    encaptype: 'CMD_DATA',
                    alias: 'zwavePayload',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '14': 
            { name: 'AGGREGATED_MEMBERS_GET',
              help: 'Multi Channel Aggregated Members Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'AggregatedEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } } } },
           '15': 
            { name: 'AGGREGATED_MEMBERS_REPORT',
              help: 'Multi Channel Aggregated Members Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'AggregatedEndPoint', shifter: 0 } },
                    bitflag: { '128': 'Res' } },
                 '1': { name: 'NumberOfBitMasks', type: 'BYTE', showhex: false },
                 '2': 
                  { name: 'AggregatedMembersBitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x61-V1': 
      { version: 1,
        name: 'ZIP_PORTAL',
        help: 'Command Class Z/IP Portal',
        id: 97,
        COMMAND: 
         { '1': 
            { name: 'GATEWAY_CONFIGURATION_SET',
              help: 'Gateway Configuration Set',
              param: 
               { '0': 
                  { name: 'LanIpv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '1': { name: 'LanIpv6PrefixLength', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'PortalIpv6Prefix',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '3': { name: 'PortalIpv6PrefixLength', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'DefaultGatewayIpv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '5': 
                  { name: 'PanIpv6Prefix',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } },
           '2': 
            { name: 'GATEWAY_CONFIGURATION_STATUS',
              help: 'Gateway Configuration Status',
              param: { '0': { name: 'Status', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'GATEWAY_CONFIGURATION_GET',
              help: 'Gateway Configuration Get' },
           '4': 
            { name: 'GATEWAY_CONFIGURATION_REPORT',
              help: 'Gateway Configuration Report',
              param: 
               { '0': 
                  { name: 'LanIpv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '1': { name: 'LanIpv6PrefixLength', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'PortalIpv6Prefix',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '3': { name: 'PortalIpv6PrefixLength', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'DefaultGatewayIpv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '5': 
                  { name: 'PanIpv6Prefix',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } } } },
     '0x62-V1': 
      { version: 1,
        name: 'DOOR_LOCK',
        help: 'Command Class Door Lock',
        id: 98,
        COMMAND: 
         { '1': 
            { name: 'OPERATION_SET',
              help: 'Door Lock Operation Set',
              param: 
               { '0': 
                  { name: 'DoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '255': 'DoorSecured' } } } },
           '2': { name: 'OPERATION_GET', help: 'Door Lock Operation Get' },
           '3': 
            { name: 'OPERATION_REPORT',
              help: 'Door Lock Operation Report',
              param: 
               { '0': 
                  { name: 'DoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '255': 'DoorSecured' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesMode', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesMode', shifter: 4 } } },
                 '2': { name: 'DoorCondition', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '4': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'CONFIGURATION_SET',
              help: 'Door Lock Configuration Set',
              param: 
               { '0': 
                  { name: 'OperationType',
                    type: 'CONST',
                    const: { '1': 'ConstantOperation', '2': 'TimedOperation' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesState', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesState', shifter: 4 } } },
                 '2': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'CONFIGURATION_GET',
              help: 'Door Lock Configuration Get' },
           '6': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Door Lock Configuration Report',
              param: 
               { '0': 
                  { name: 'OperationType',
                    type: 'CONST',
                    const: { '1': 'ConstantOperation', '2': 'TimedOperation' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesState', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesState', shifter: 4 } } },
                 '2': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } } } },
     '0x62-V2': 
      { version: 2,
        name: 'DOOR_LOCK',
        help: 'Command Class Door Lock',
        id: 98,
        COMMAND: 
         { '1': 
            { name: 'OPERATION_SET',
              help: 'Door Lock Operation Set',
              param: 
               { '0': 
                  { name: 'DoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '254': 'DoorlockStateUnknown',
                       '255': 'DoorSecured' } } } },
           '2': { name: 'OPERATION_GET', help: 'Door Lock Operation Get' },
           '3': 
            { name: 'OPERATION_REPORT',
              help: 'Door Lock Operation Report',
              param: 
               { '0': 
                  { name: 'DoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '254': 'DoorlockStateUnknown',
                       '255': 'DoorSecured' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesMode', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesMode', shifter: 4 } } },
                 '2': { name: 'DoorCondition', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '4': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'CONFIGURATION_SET',
              help: 'Door Lock Configuration Set',
              param: 
               { '0': 
                  { name: 'OperationType',
                    type: 'CONST',
                    const: { '1': 'ConstantOperation', '2': 'TimedOperation' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesState', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesState', shifter: 4 } } },
                 '2': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'CONFIGURATION_GET',
              help: 'Door Lock Configuration Get' },
           '6': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Door Lock Configuration Report',
              param: 
               { '0': 
                  { name: 'OperationType',
                    type: 'CONST',
                    const: { '1': 'ConstantOperation', '2': 'TimedOperation' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesState', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesState', shifter: 4 } } },
                 '2': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } } } },
     '0x62-V3': 
      { version: 3,
        name: 'DOOR_LOCK',
        help: 'Command Class Door Lock',
        id: 98,
        COMMAND: 
         { '1': 
            { name: 'OPERATION_SET',
              help: 'Door Lock Operation Set',
              param: 
               { '0': 
                  { name: 'DoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '254': 'DoorlockStateUnknown',
                       '255': 'DoorSecured' } } } },
           '2': { name: 'OPERATION_GET', help: 'Door Lock Operation Get' },
           '3': 
            { name: 'OPERATION_REPORT',
              help: 'Door Lock Operation Report',
              param: 
               { '0': 
                  { name: 'CurrentDoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '254': 'DoorlockStateUnknown',
                       '255': 'DoorSecured' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesMode', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesMode', shifter: 4 } } },
                 '2': { name: 'DoorCondition', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '4': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true },
                 '5': 
                  { name: 'TargetDoorLockMode',
                    type: 'CONST',
                    const: 
                     { '0': 'DoorUnsecured',
                       '1': 'DoorUnsecuredWithTimeout',
                       '16': 'DoorUnsecuredForInsideDoorHandles',
                       '17': 'DoorUnsecuredForInsideDoorHandlesWithTimeout',
                       '32': 'DoorUnsecuredForOutsideDoorHandles',
                       '33': 'DoorUnsecuredForOutsideDoorHandlesWithTimeout',
                       '254': 'DoorlockStateUnknown',
                       '255': 'DoorSecured' } },
                 '6': 
                  { name: 'Duration',
                    type: 'CONST',
                    const: 
                     { '0': 'AlreadyAtTheTargetValue',
                       '254': 'UnknownDuration',
                       '255': 'Reserved' } } } },
           '4': 
            { name: 'CONFIGURATION_SET',
              help: 'Door Lock Configuration Set',
              param: 
               { '0': 
                  { name: 'OperationType',
                    type: 'CONST',
                    const: { '1': 'ConstantOperation', '2': 'TimedOperation' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesState', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesState', shifter: 4 } } },
                 '2': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'CONFIGURATION_GET',
              help: 'Door Lock Configuration Get' },
           '6': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Door Lock Configuration Report',
              param: 
               { '0': 
                  { name: 'OperationType',
                    type: 'CONST',
                    const: { '1': 'ConstantOperation', '2': 'TimedOperation' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'InsideDoorHandlesState', shifter: 0 },
                       '240': { fieldname: 'OutsideDoorHandlesState', shifter: 4 } } },
                 '2': { name: 'LockTimeoutMinutes', type: 'BYTE', showhex: true },
                 '3': { name: 'LockTimeoutSeconds', type: 'BYTE', showhex: true } } } } },
     '0x63-V1': 
      { version: 1,
        name: 'USER_CODE',
        help: 'Command Class User Code',
        id: 99,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'User Code Set',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'UserIdStatus',
                    type: 'CONST',
                    const: 
                     { '0': 'AvailablenotSet',
                       '1': 'Occupied',
                       '2': 'ReservedByAdministrator',
                       '254': 'StatusNotAvailable' } },
                 '2': { name: 'UserCode', type: 'ARRAY', len: 10, is_ascii: true } } },
           '2': 
            { name: 'GET',
              help: 'User Code Get',
              param: { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'User Code Report',
              param: 
               { '0': { name: 'UserIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'UserIdStatus',
                    type: 'CONST',
                    const: 
                     { '0': 'AvailablenotSet',
                       '1': 'Occupied',
                       '2': 'ReservedByAdministrator',
                       '254': 'StatusNotAvailable' } },
                 '2': { name: 'UserCode', type: 'ARRAY', len: 10, is_ascii: true } } },
           '4': { name: 'USERS_NUMBER_GET', help: 'Users Number Get' },
           '5': 
            { name: 'USERS_NUMBER_REPORT',
              help: 'Users Number Report',
              param: { '0': { name: 'SupportedUsers', type: 'BYTE', showhex: true } } } } },
     '0x64-V1': 
      { version: 1,
        name: 'HUMIDITY_CONTROL_SETPOINT',
        help: 'Command Class Humidity Control Setpoint',
        id: 100,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Humidity Control Setpoint Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '1': 'Humidifier', '2': 'Dehumidifier' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '224': { fieldname: 'Precision', shifter: 5 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Scale',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: { '0': 'Percentage', '1': 'Absolute' } } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Humidity Control Setpoint Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '1': 'Humidifier', '2': 'Dehumidifier' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '3': 
            { name: 'REPORT',
              help: 'Humidity Control Setpoint Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '1': 'Humidifier', '2': 'Dehumidifier' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '224': { fieldname: 'Precision', shifter: 5 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Scale',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: { '0': 'Percentage', '1': 'Absolute' } } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Humidity Control Setpoint Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Humidity Control Setpoint Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: { '1': 'Humidifier', '2': 'Dehumidifier' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'SCALE_SUPPORTED_GET',
              help: 'Humidity Control Setpoint Scale Supported Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '1': 'Humidifier', '2': 'Dehumidifier' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '7': 
            { name: 'SCALE_SUPPORTED_REPORT',
              help: 'Humidity Control Setpoint Scale Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'ScaleBitMask',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'Percentage', '1': 'Absolute' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '8': 
            { name: 'CAPABILITIES_GET',
              help: 'Humidity Control Setpoint Capabilities Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '1': 'Humidifier', '2': 'Dehumidifier' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '9': 
            { name: 'CAPABILITIES_REPORT',
              help: 'Humidity Control Setpoint Capabilities Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'SetpointType',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '1': 'Humidifier', '2': 'Dehumidifier' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size1', shifter: 0 },
                       '224': { fieldname: 'Precision1', shifter: 5 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Scale1',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: { '0': 'Percentage', '1': 'Absolute' } } } },
                 '2': 
                  { name: 'MinimumValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size2', shifter: 0 },
                       '224': { fieldname: 'Precision2', shifter: 5 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Scale2',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: { '0': 'Percentage', '1': 'Absolute' } } } },
                 '4': 
                  { name: 'MaximumValue',
                    type: 'VARIANT',
                    lengthoffset: 3,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x65-V1': 
      { version: 1,
        name: 'DMX',
        help: 'Command Class DMX',
        id: 101,
        COMMAND: 
         { '1': 
            { name: 'ADDRESS_SET',
              help: 'DMX Address Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'PageId', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': { name: 'ChannelId', type: 'BYTE', showhex: true } } },
           '2': { name: 'ADDRESS_GET', help: 'DMX Address Get' },
           '3': 
            { name: 'ADDRESS_REPORT',
              help: 'DMX Address Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'PageId', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': { name: 'ChannelId', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'CAPABILITY_GET',
              help: 'DMX Capability Get',
              param: { '0': { name: 'ChannelId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'CAPABILITY_REPORT',
              help: 'DMX Capability Report',
              param: 
               { '0': { name: 'ChannelId', type: 'BYTE', showhex: true },
                 '1': { name: 'PropertyId', type: 'WORD', showhex: true },
                 '2': { name: 'DeviceChannels', type: 'BYTE', showhex: true },
                 '3': { name: 'MaxChannels', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'DATA',
              help: 'DMX Data',
              param: 
               { '0': { name: 'Source', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'Page', shifter: 0 },
                       '48': { fieldname: 'SequenceNo', shifter: 4 },
                       '192': { fieldname: 'Reserved', shifter: 6 } } },
                 '2': 
                  { name: 'DmxChannel',
                    type: 'VARIANT',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x66-V1': 
      { version: 1,
        name: 'BARRIER_OPERATOR',
        help: 'Command Class Barrier Operator',
        id: 102,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Barrier Operator Set',
              param: 
               { '0': 
                  { name: 'TargetValue',
                    type: 'CONST',
                    const: { '0': 'Close', '255': 'Open' } } } },
           '2': { name: 'GET', help: 'Barrier Operator Get' },
           '3': 
            { name: 'REPORT',
              help: 'Barrier Operator Report',
              param: 
               { '0': 
                  { name: 'State',
                    type: 'CONST',
                    const: 
                     { '0': 'Closed',
                       '252': 'Closing',
                       '253': 'Stopped',
                       '254': 'Opening',
                       '255': 'Open' } } } },
           '4': 
            { name: 'SIGNAL_SUPPORTED_GET',
              help: 'Barrier Operator Signal Supported Get' },
           '5': 
            { name: 'SIGNAL_SUPPORTED_REPORT',
              help: 'Barrier Operator Signal Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'NotSupported',
                       '1': 'AudibleNotification',
                       '2': 'VisualNotification' },
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'SIGNAL_SET',
              help: 'Barrier Operator Signal Set',
              param: 
               { '0': 
                  { name: 'SubsystemType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'NotSupported',
                       '1': 'AudibleNotification',
                       '2': 'VisualNotification' } },
                 '1': 
                  { name: 'SubsystemState',
                    type: 'CONST',
                    const: { '0': 'Off', '255': 'On' } } } },
           '7': 
            { name: 'SIGNAL_GET',
              help: 'Barrier Operator Signal Get',
              param: 
               { '0': 
                  { name: 'SubsystemType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'NotSupported',
                       '1': 'AudibleNotification',
                       '2': 'VisualNotification' } } } },
           '8': 
            { name: 'SIGNAL_REPORT',
              help: 'Barrier Operator Signal Report',
              param: 
               { '0': 
                  { name: 'SubsystemType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'NotSupported',
                       '1': 'AudibleNotification',
                       '2': 'VisualNotification' } },
                 '1': 
                  { name: 'SubsystemState',
                    type: 'CONST',
                    const: { '0': 'Off', '255': 'On' } } } } } },
     '0x67-V1': 
      { version: 1,
        name: 'NETWORK_MANAGEMENT_INSTALLATION_MAINTENANCE',
        help: 'Command Class Network Management Installation and Maintenance',
        id: 103,
        COMMAND: 
         { '1': 
            { name: 'LAST_WORKING_ROUTE_SET',
              help: 'Last Working Route Set',
              param: 
               { '0': 
                  { name: 'NodeID',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '1': 
                  { name: 'Repeater1',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '2': 
                  { name: 'Repeater2',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '3': 
                  { name: 'Repeater3',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '4': 
                  { name: 'Repeater4',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '5': 
                  { name: 'Speed',
                    type: 'CONST',
                    const: { '1': '96Kbitsec', '2': '40Kbitsec', '3': '100Kbitsec' } } } },
           '2': 
            { name: 'LAST_WORKING_ROUTE_GET',
              help: 'Last Working Route Get',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '3': 
            { name: 'LAST_WORKING_ROUTE_REPORT',
              help: 'Last Working Route Report',
              param: 
               { '0': 
                  { name: 'NodeID',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '1': 
                  { name: 'Repeater1',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '2': 
                  { name: 'Repeater2',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '3': 
                  { name: 'Repeater3',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '4': 
                  { name: 'Repeater4',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    showhex: false },
                 '5': 
                  { name: 'Speed',
                    type: 'CONST',
                    const: { '1': '96Kbitsec', '2': '40Kbitsec', '3': '100Kbitsec' } } } },
           '4': 
            { name: 'STATISTICS_GET',
              help: 'Statistics Get',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '5': 
            { name: 'STATISTICS_REPORT',
              help: 'Statistics Report',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '1': 
                  { name: 'Statistics',
                    param: 
                     { '0': 
                        { name: 'Type',
                          type: 'CONST',
                          const: 
                           { '0': 'RouteChangesrc',
                             '1': 'TransmissionCounttc',
                             '2': 'Neighborsnb',
                             '3': 'PacketErrorCountpec',
                             '4': 'SumOfTransmissionTimests',
                             '5': 'SumOfTransmissionTimesSquraredts2' } },
                       '1': { name: 'Length', type: 'BYTE', showhex: false },
                       '2': 
                        { name: 'Value',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 1,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': { name: 'STATISTICS_CLEAR', help: 'Statistics Clear' } } },
     '0x68-V1': 
      { version: 1,
        name: 'ZIP_NAMING',
        help: 'Command Class Z/IP Naming and Location',
        id: 104,
        COMMAND: 
         { '1': 
            { name: 'NAME_SET',
              help: 'Z/IP Name Set',
              param: 
               { '0': 
                  { name: 'Name',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': { name: 'NAME_GET', help: 'Z/IP Name Get' },
           '3': 
            { name: 'NAME_REPORT',
              help: 'Z/IP Name Report',
              param: 
               { '0': 
                  { name: 'Name',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'LOCATION_SET',
              help: 'Z/IP Location Set',
              param: 
               { '0': 
                  { name: 'Location',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': { name: 'LOCATION_GET', help: 'Z/IP Location Get' },
           '6': 
            { name: 'LOCATION_REPORT',
              help: 'Z/IP Location Report',
              param: 
               { '0': 
                  { name: 'Location',
                    type: 'VARIANT',
                    is_ascii: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x69-V1': 
      { version: 1,
        name: 'MAILBOX',
        help: 'Command Class Mailbox',
        id: 105,
        COMMAND: 
         { '1': { name: 'CONFIGURATION_GET', help: 'Mailbox Configuration Get' },
           '2': 
            { name: 'CONFIGURATION_SET',
              help: 'Mailbox Configuration Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Disable',
                             '1': 'EnableMailboxService',
                             '2': 'EnableMailboxProxy' } } },
                    bitfield: { '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': 
                  { name: 'ForwardingDestinationIpv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '2': { name: 'UdpPortNumber', type: 'WORD', showhex: false } } },
           '3': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Mailbox Configuration Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Disable',
                             '1': 'EnableMailboxService',
                             '2': 'EnableMailboxProxy' } },
                       '1': 
                        { fieldname: 'SupportedModes',
                          fieldmask: 24,
                          shifter: 3,
                          fieldenum: { '0': 'MailboxServiceSupported', '1': 'MailboxProxySupported' } } },
                    bitfield: { '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': { name: 'MailboxCapacity', type: 'WORD', showhex: true },
                 '2': 
                  { name: 'ForwardingDestinationIpv6Address',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true },
                 '3': { name: 'UdpPortNumber', type: 'WORD', showhex: false } } },
           '4': 
            { name: 'QUEUE',
              help: 'Mailbox Queue',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 3,
                          shifter: 0,
                          fieldenum: 
                           { '0': 'Push',
                             '1': 'Pop',
                             '2': 'Waiting',
                             '3': 'Ping',
                             '4': 'ACK',
                             '5': 'NACK',
                             '6': 'QueueFull' } } },
                    bitflag: { '4': 'Last' },
                    bitfield: { '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': { name: 'QueueHandle', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'MailboxEntry',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': 
            { name: 'WAKEUP_NOTIFICATION',
              help: 'Mailbox Wakeup Notification',
              param: { '0': { name: 'QueueHandle', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'NODE_FAILING',
              help: 'Mailbox Failing Node',
              param: { '0': { name: 'QueueHandle', type: 'BYTE', showhex: true } } } } },
     '0x6a-V1': 
      { version: 1,
        name: 'WINDOW_COVERING',
        help: 'Command Class Window Covering',
        id: 106,
        COMMAND: 
         { '1': { name: 'SUPPORTED_GET', help: 'Window Covering Supported Get' },
           '2': 
            { name: 'SUPPORTED_REPORT',
              help: 'Window Covering Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'NumberOfParameterMaskBytes', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } },
                 '1': 
                  { name: 'ParameterMask',
                    type: 'BITMASK',
                    lengthoffset: 0,
                    lengthmask: 15,
                    shifter: 0 } } },
           '3': 
            { name: 'GET',
              help: 'Window Covering Get',
              param: 
               { '0': 
                  { name: 'ParameterId',
                    type: 'CONST',
                    const: 
                     { '0': 'OutLeft1',
                       '1': 'OutLeft2',
                       '2': 'OutRight1',
                       '3': 'OutRight2',
                       '4': 'InLeft1',
                       '5': 'InLeft2',
                       '6': 'InRight1',
                       '7': 'InRight2',
                       '8': 'InRightLeft1',
                       '9': 'InRightLeft2',
                       '10': 'VerticalSlatsAngle1',
                       '11': 'InTop1',
                       '12': 'OutBottom1',
                       '13': 'OutBottom2',
                       '14': 'OutTop1',
                       '15': 'OutTop2',
                       '16': 'InBottom1',
                       '17': 'InBottom2',
                       '18': 'InTop2',
                       '19': 'InTopBottom1',
                       '20': 'InTopBottom2',
                       '21': 'HorizontalSlatsAngle1',
                       '22': 'HorizontalSlatsAngle2' } } } },
           '4': 
            { name: 'REPORT',
              help: 'Window Covering Report',
              param: 
               { '0': 
                  { name: 'ParameterId',
                    type: 'CONST',
                    const: 
                     { '0': 'OutLeft1',
                       '1': 'OutLeft2',
                       '2': 'OutRight1',
                       '3': 'OutRight2',
                       '4': 'InLeft1',
                       '5': 'InLeft2',
                       '6': 'InRight1',
                       '7': 'InRight2',
                       '8': 'InRightLeft1',
                       '9': 'InRightLeft2',
                       '10': 'VerticalSlatsAngle1',
                       '11': 'InTop1',
                       '12': 'OutBottom1',
                       '13': 'OutBottom2',
                       '14': 'OutTop1',
                       '15': 'OutTop2',
                       '16': 'InBottom1',
                       '17': 'InBottom2',
                       '18': 'InTop2',
                       '19': 'InTopBottom1',
                       '20': 'InTopBottom2',
                       '21': 'HorizontalSlatsAngle1',
                       '22': 'HorizontalSlatsAngle2' } },
                 '1': { name: 'CurrentValue', type: 'BYTE', showhex: true },
                 '2': { name: 'Duration', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'SET',
              help: 'Window Covering Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'ParameterCount', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'ParameterId',
                          type: 'CONST',
                          const: 
                           { '0': 'OutLeft1',
                             '1': 'OutLeft2',
                             '2': 'OutRight1',
                             '3': 'OutRight2',
                             '4': 'InLeft1',
                             '5': 'InLeft2',
                             '6': 'InRight1',
                             '7': 'InRight2',
                             '8': 'InRightLeft1',
                             '9': 'InRightLeft2',
                             '10': 'VerticalSlatsAngle1',
                             '11': 'InTop1',
                             '12': 'OutBottom1',
                             '13': 'OutBottom2',
                             '14': 'OutTop1',
                             '15': 'OutTop2',
                             '16': 'InBottom1',
                             '17': 'InBottom2',
                             '18': 'InTop2',
                             '19': 'InTopBottom1',
                             '20': 'InTopBottom2',
                             '21': 'HorizontalSlatsAngle1',
                             '22': 'HorizontalSlatsAngle2' } },
                       '1': { name: 'Value', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 },
                 '2': { name: 'Duration', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'START_LEVEL_CHANGE',
              help: 'Window Covering Start Level Change',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Res1', shifter: 0 } },
                    bitflag: { '64': 'UpDown', '128': 'Res2' } },
                 '1': 
                  { name: 'ParameterId',
                    type: 'CONST',
                    const: 
                     { '0': 'OutLeft1',
                       '1': 'OutLeft2',
                       '2': 'OutRight1',
                       '3': 'OutRight2',
                       '4': 'InLeft1',
                       '5': 'InLeft2',
                       '6': 'InRight1',
                       '7': 'InRight2',
                       '8': 'InRightLeft1',
                       '9': 'InRightLeft2',
                       '10': 'VerticalSlatsAngle1',
                       '11': 'InTop1',
                       '12': 'OutBottom1',
                       '13': 'OutBottom2',
                       '14': 'OutTop1',
                       '15': 'OutTop2',
                       '16': 'InBottom1',
                       '17': 'InBottom2',
                       '18': 'InTop2',
                       '19': 'InTopBottom1',
                       '20': 'InTopBottom2',
                       '21': 'HorizontalSlatsAngle1',
                       '22': 'HorizontalSlatsAngle2' } },
                 '2': { name: 'Duration', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'STOP_LEVEL_CHANGE',
              help: 'Window Covering Stop Level Change',
              param: 
               { '0': 
                  { name: 'ParameterId',
                    type: 'CONST',
                    const: 
                     { '0': 'OutLeft1',
                       '1': 'OutLeft2',
                       '2': 'OutRight1',
                       '3': 'OutRight2',
                       '4': 'InLeft1',
                       '5': 'InLeft2',
                       '6': 'InRight1',
                       '7': 'InRight2',
                       '8': 'InRightLeft1',
                       '9': 'InRightLeft2',
                       '10': 'VerticalSlatsAngle1',
                       '11': 'InTop1',
                       '12': 'OutBottom1',
                       '13': 'OutBottom2',
                       '14': 'OutTop1',
                       '15': 'OutTop2',
                       '16': 'InBottom1',
                       '17': 'InBottom2',
                       '18': 'InTop2',
                       '19': 'InTopBottom1',
                       '20': 'InTopBottom2',
                       '21': 'HorizontalSlatsAngle1',
                       '22': 'HorizontalSlatsAngle2' } } } } } },
     '0x6b-V1': 
      { version: 1,
        name: 'IRRIGATION',
        help: 'Command Class Irrigation',
        id: 107,
        COMMAND: 
         { '1': { name: 'SYSTEM_INFO_GET', help: 'Irrigation System Info Get' },
           '2': 
            { name: 'SYSTEM_INFO_REPORT',
              help: 'Irrigation System Info Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: 
                     { '6': { fieldname: 'Reserved1', shifter: 1 },
                       '24': { fieldname: 'Reserved2', shifter: 3 },
                       '224': { fieldname: 'Reserved3', shifter: 5 } } },
                 '1': { name: 'TotalNumberOfValves', type: 'BYTE', showhex: false },
                 '2': 
                  { name: 'TotalNumberOfValveTables',
                    type: 'BYTE',
                    showhex: false },
                 '3': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ValveTableMaxSize', shifter: 0 },
                       '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '3': 
            { name: 'SYSTEM_STATUS_GET',
              help: 'Irrigation System Status Get' },
           '4': 
            { name: 'SYSTEM_STATUS_REPORT',
              help: 'Irrigation System Status Report',
              param: 
               { '0': { name: 'SystemVoltage', type: 'BYTE', showhex: false },
                 '1': 
                  { name: 'SensorStatus',
                    type: 'CONST',
                    const: 
                     { '0': 'FlowSensorDetected',
                       '1': 'PressureSensorDetected',
                       '2': 'RainSensorDetected',
                       '3': 'MoistureSensorDetected' } },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'FlowSize', shifter: 0 },
                       '24': { fieldname: 'FlowScale', shifter: 3 },
                       '224': { fieldname: 'FlowPrecision', shifter: 5 } } },
                 '3': 
                  { name: 'FlowValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 2,
                    lengthmask: 7,
                    shifter: 0 },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'PressureSize', shifter: 0 },
                       '24': { fieldname: 'PressureScale', shifter: 3 },
                       '224': { fieldname: 'PressurePrecision', shifter: 5 } } },
                 '5': 
                  { name: 'PressureValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 4,
                    lengthmask: 7,
                    shifter: 0 },
                 '6': { name: 'ShutoffDuration', type: 'BYTE', showhex: true },
                 '7': 
                  { name: 'SystemErrorStatus',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'NotProgrammed',
                       '1': 'EmergencyShutdown',
                       '2': 'HighThresholdTriggered',
                       '3': 'LowThresholdTriggered',
                       '4': 'ValveErrors' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '8': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '9': { name: 'ValveId', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'SYSTEM_CONFIG_SET',
              help: 'Irrigation System Config Set',
              param: 
               { '0': { name: 'MasterValveDelay', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'HighPressureThresholdSize', shifter: 0 },
                       '24': { fieldname: 'HighPressureThresholdScale', shifter: 3 },
                       '224': { fieldname: 'HighPressureThresholdPrecision', shifter: 5 } } },
                 '2': 
                  { name: 'HighPressureThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'LowPressureThresholdSize', shifter: 0 },
                       '24': { fieldname: 'LowPressureThresholdScale', shifter: 3 },
                       '224': { fieldname: 'LowPressureThresholdPrecision', shifter: 5 } } },
                 '4': 
                  { name: 'LowPressureThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 7,
                    shifter: 0 },
                 '5': 
                  { name: 'SensorPolarity',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'RainSensorPolarity',
                       '1': 'MoistureSensorPolarity',
                       '7': 'Valid' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'SYSTEM_CONFIG_GET',
              help: 'Irrigation System Config Get' },
           '7': 
            { name: 'SYSTEM_CONFIG_REPORT',
              help: 'Irrigation System Config Report',
              param: 
               { '0': { name: 'MasterValveDelay', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'HighPressureThresholdSize', shifter: 0 },
                       '24': { fieldname: 'HighPressureThresholdScale', shifter: 3 },
                       '224': { fieldname: 'HighPressureThresholdPrecision', shifter: 5 } } },
                 '2': 
                  { name: 'HighPressureThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'LowPressureThresholdSize', shifter: 0 },
                       '24': { fieldname: 'LowPressureThresholdScale', shifter: 3 },
                       '224': { fieldname: 'LowPressureThresholdPrecision', shifter: 5 } } },
                 '4': 
                  { name: 'LowPressureThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 7,
                    shifter: 0 },
                 '5': 
                  { name: 'SensorPolarity',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'RainSensorPolarity',
                       '1': 'MoistureSensorPolarity',
                       '7': 'Valid' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '8': 
            { name: 'VALVE_INFO_GET',
              help: 'Irrigation Valve Info Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '1': { name: 'ValveId', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'VALVE_INFO_REPORT',
              help: 'Irrigation Valve Info Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Master', '2': 'Connected' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': { name: 'ValveId', type: 'BYTE', showhex: true },
                 '2': { name: 'NominalCurrent', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'ValveErrorStatus',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'ShortCircuit',
                       '1': 'CurrentHighThreshold',
                       '2': 'CurrentLowThreshold',
                       '3': 'MaximumFlow',
                       '4': 'FlowHighThreshold',
                       '5': 'FlowLowThreshold' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '10': 
            { name: 'VALVE_CONFIG_SET',
              help: 'Irrigation Valve Config Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '1': { name: 'ValveId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'NominalCurrentHighThreshold',
                    type: 'BYTE',
                    showhex: true },
                 '3': 
                  { name: 'NominalCurrentLowThreshold',
                    type: 'BYTE',
                    showhex: true },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'MaximumFlowSize', shifter: 0 },
                       '24': { fieldname: 'MaximumFlowScale', shifter: 3 },
                       '224': { fieldname: 'MaximumFlowPrecision', shifter: 5 } } },
                 '5': 
                  { name: 'MaximumFlowValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 4,
                    lengthmask: 7,
                    shifter: 0 },
                 '6': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'FlowHighThresholdSize', shifter: 0 },
                       '24': { fieldname: 'FlowHighThresholdScale', shifter: 3 },
                       '224': { fieldname: 'FlowHighThresholdPrecision', shifter: 5 } } },
                 '7': 
                  { name: 'FlowHighThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 7,
                    shifter: 0 },
                 '8': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'FlowLowThresholdSize', shifter: 0 },
                       '24': { fieldname: 'FlowLowThresholdScale', shifter: 3 },
                       '224': { fieldname: 'FlowLowThresholdPrecision', shifter: 5 } } },
                 '9': 
                  { name: 'FlowLowThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 8,
                    lengthmask: 7,
                    shifter: 0 },
                 '10': 
                  { name: 'SensorUsage',
                    type: 'BITMASK',
                    bitflag: { '0': 'UseRainSensor', '1': 'UseMoistureSensor' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '11': 
            { name: 'VALVE_CONFIG_GET',
              help: 'Irrigation Valve Config Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '1': { name: 'ValveId', type: 'BYTE', showhex: true } } },
           '12': 
            { name: 'VALVE_CONFIG_REPORT',
              help: 'Irrigation Valve Config Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '1': { name: 'ValveId', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'NominalCurrentHighThreshold',
                    type: 'BYTE',
                    showhex: true },
                 '3': 
                  { name: 'NominalCurrentLowThreshold',
                    type: 'BYTE',
                    showhex: true },
                 '4': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'MaximumFlowSize', shifter: 0 },
                       '24': { fieldname: 'MaximumFlowScale', shifter: 3 },
                       '224': { fieldname: 'MaximumFlowPrecision', shifter: 5 } } },
                 '5': 
                  { name: 'MaximumFlowValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 4,
                    lengthmask: 7,
                    shifter: 0 },
                 '6': 
                  { name: 'Properties3',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'FlowHighThresholdSize', shifter: 0 },
                       '24': { fieldname: 'FlowHighThresholdScale', shifter: 3 },
                       '224': { fieldname: 'FlowHighThresholdPrecision', shifter: 5 } } },
                 '7': 
                  { name: 'FlowHighThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 7,
                    shifter: 0 },
                 '8': 
                  { name: 'Properties4',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'FlowLowThresholdSize', shifter: 0 },
                       '24': { fieldname: 'FlowLowThresholdScale', shifter: 3 },
                       '224': { fieldname: 'FlowLowThresholdPrecision', shifter: 5 } } },
                 '9': 
                  { name: 'FlowLowThresholdValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 8,
                    lengthmask: 7,
                    shifter: 0 },
                 '10': 
                  { name: 'SensorUsage',
                    type: 'BITMASK',
                    bitflag: { '0': 'UseRainSensor', '1': 'UseMoistureSensor' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '13': 
            { name: 'VALVE_RUN',
              help: 'Irrigation Valve Run',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'MasterValve' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '1': { name: 'ValveId', type: 'BYTE', showhex: true },
                 '2': { name: 'Duration', type: 'WORD', showhex: true } } },
           '14': 
            { name: 'VALVE_TABLE_SET',
              help: 'Irrigation Valve Table Set',
              param: 
               { '0': { name: 'ValveTableId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'ValveId', type: 'BYTE', showhex: true },
                       '1': { name: 'Duration', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '15': 
            { name: 'VALVE_TABLE_GET',
              help: 'Irrigation Valve Table Get',
              param: { '0': { name: 'ValveTableId', type: 'BYTE', showhex: true } } },
           '16': 
            { name: 'VALVE_TABLE_REPORT',
              help: 'Irrigation Valve Table Report',
              param: 
               { '0': { name: 'ValveTableId', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'ValveId', type: 'BYTE', showhex: true },
                       '1': { name: 'Duration', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '17': 
            { name: 'VALVE_TABLE_RUN',
              help: 'Irrigation Valve Table Run',
              param: 
               { '0': 
                  { name: 'ValveTableId',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '18': 
            { name: 'SYSTEM_SHUTOFF',
              help: 'Irrigation System Shutoff',
              param: { '0': { name: 'Duration', type: 'BYTE', showhex: false } } } } },
     '0x6c-V1': 
      { version: 1,
        name: 'SUPERVISION',
        help: 'Command Class Supervision',
        id: 108,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Supervision Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'SessionId', shifter: 0 } },
                    bitflag: { '64': 'Reserved', '128': 'StatusUpdates' } },
                 '1': 
                  { name: 'EncapsulatedCommandLength',
                    type: 'BYTE',
                    showhex: false },
                 '2': 
                  { name: 'zwave.EncapsulatedCommand',
                    type: 'VARIANT',
                    encaptype: 'CMD_ENCAP',
                    skipfield: true,
                    alias: 'zwaveEncapsulatedCommand',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '2': 
            { name: 'REPORT',
              help: 'Supervision Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'SessionId', shifter: 0 } },
                    bitflag: { '64': 'Reserved', '128': 'MoreStatusUpdates' } },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'NoSupport',
                       '1': 'Working',
                       '2': 'Fail',
                       '3': 'Busy',
                       '255': 'Success' } },
                 '2': { name: 'Duration', type: 'BYTE', showhex: true } } } } },
     '0x6d-V1': 
      { version: 1,
        name: 'HUMIDITY_CONTROL_MODE',
        help: 'Command Class Humidity Control Mode',
        id: 109,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Humidity Control Mode Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'Off', '1': 'Humidify', '2': 'Dehumidify' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '2': { name: 'GET', help: 'Humidity Control Mode Get' },
           '3': 
            { name: 'REPORT',
              help: 'Humidity Control Mode Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'Mode',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'Off', '1': 'Humidify', '2': 'Dehumidify' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Humidity Control Mode Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Humidity Control Mode Supported Report',
              param: 
               { '0': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: { '0': 'Off', '1': 'Humidify', '2': 'Dehumidify' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x6e-V1': 
      { version: 1,
        name: 'HUMIDITY_CONTROL_OPERATING_STATE',
        help: 'Command Class Humidity Control Operating State',
        id: 110,
        COMMAND: 
         { '1': { name: 'GET', help: 'Humidity Control Operating State Get' },
           '2': 
            { name: 'REPORT',
              help: 'Humidity Control Operating State Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'OperatingState',
                          fieldmask: 15,
                          shifter: 0,
                          fieldenum: { '0': 'Idle', '1': 'Humidifying', '2': 'Dehumidifying' } } },
                    bitfield: { '240': { fieldname: 'Reserved', shifter: 4 } } } } } } },
     '0x6f-V1': 
      { version: 1,
        name: 'ENTRY_CONTROL',
        help: 'Command Class Entry Control',
        id: 111,
        COMMAND: 
         { '1': 
            { name: 'NOTIFICATION',
              help: 'Entry Control Notification',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'DataType',
                          fieldmask: 3,
                          shifter: 0,
                          fieldenum: { '0': 'NA', '1': 'RAW', '2': 'ASCII', '3': 'MD5' } } },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '2': 
                  { name: 'EventType',
                    type: 'CONST',
                    const: 
                     { '0': 'Caching',
                       '1': 'CachedKeys',
                       '2': 'Enter',
                       '3': 'DisarmAll',
                       '4': 'ArmAll',
                       '5': 'ArmAway',
                       '6': 'ArmHome',
                       '7': 'ExitDelay',
                       '8': 'Arm1',
                       '9': 'Arm2',
                       '10': 'Arm3',
                       '11': 'Arm4',
                       '12': 'Arm5',
                       '13': 'Arm6',
                       '14': 'RFID',
                       '15': 'Bell',
                       '16': 'Fire',
                       '17': 'Police',
                       '18': 'AlertPanic',
                       '19': 'AlertMedical',
                       '20': 'GateOpen',
                       '21': 'GateClose',
                       '22': 'Lock',
                       '23': 'Unlock',
                       '24': 'Test',
                       '25': 'Cancel' } },
                 '3': { name: 'EventDataLength', type: 'BYTE', showhex: false },
                 '4': 
                  { name: 'EventData',
                    type: 'VARIANT',
                    optionaloffs: 0,
                    optionalmask: 255,
                    showhex: true,
                    lengthoffset: 3,
                    lengthmask: 255,
                    shifter: 0 } } },
           '2': 
            { name: 'KEY_SUPPORTED_GET',
              help: 'Entry Control Key Supported Get' },
           '3': 
            { name: 'KEY_SUPPORTED_REPORT',
              help: 'Entry Control Key Supported Report',
              param: 
               { '0': 
                  { name: 'KeySupportedBitMaskLength',
                    type: 'BYTE',
                    showhex: false },
                 '1': 
                  { name: 'KeySupportedBitMask',
                    type: 'BITMASK',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '4': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Entry Control Event Supported Get' },
           '5': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Entry Control Event Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '3': { fieldname: 'DataTypeSupportedBitMaskLength', shifter: 0 },
                       '252': { fieldname: 'Reserved1', shifter: 2 } } },
                 '1': 
                  { name: 'DataTypeSupportedBitMask',
                    type: 'BITMASK',
                    bitflag: { '0': 'NA', '1': 'Raw', '2': 'ASCII', '3': 'MD5' },
                    lengthoffset: 0,
                    lengthmask: 3,
                    shifter: 0 },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventSupportedBitMaskLength', shifter: 0 },
                       '224': { fieldname: 'Reserved2', shifter: 5 } } },
                 '3': 
                  { name: 'EventTypeSupportedBitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Caching',
                       '1': 'CachedKeys',
                       '2': 'Enter',
                       '3': 'DisarmAll',
                       '4': 'ArmAll',
                       '5': 'ArmAway',
                       '6': 'ArmHome',
                       '7': 'ExitDelay',
                       '8': 'Arm1',
                       '9': 'Arm2',
                       '10': 'Arm3',
                       '11': 'Arm4',
                       '12': 'Arm5',
                       '13': 'Arm6',
                       '14': 'RFID',
                       '15': 'Bell',
                       '16': 'Fire',
                       '17': 'Police',
                       '18': 'AlertPanic',
                       '19': 'AlertMedical',
                       '20': 'GateOpen',
                       '21': 'GateClose',
                       '22': 'Lock',
                       '23': 'Unlock',
                       '24': 'Test',
                       '25': 'Cancel' },
                    lengthoffset: 2,
                    lengthmask: 31,
                    shifter: 0 },
                 '4': 
                  { name: 'KeyCachedSizeSupportedMinimum',
                    type: 'BYTE',
                    showhex: true },
                 '5': 
                  { name: 'KeyCachedSizeSupportedMaximum',
                    type: 'BYTE',
                    showhex: true },
                 '6': 
                  { name: 'KeyCachedTimeoutSupportedMinimum',
                    type: 'BYTE',
                    showhex: true },
                 '7': 
                  { name: 'KeyCachedTimeoutSupportedMaximum',
                    type: 'BYTE',
                    showhex: true } } },
           '6': 
            { name: 'CONFIGURATION_SET',
              help: 'Entry Control Configuration Set',
              param: 
               { '0': { name: 'KeyCacheSize', type: 'BYTE', showhex: true },
                 '1': { name: 'KeyCacheTimeout', type: 'BYTE', showhex: true } } },
           '7': 
            { name: 'CONFIGURATION_GET',
              help: 'Entry Control Configuration Get' },
           '8': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Entry Control Configuration Report',
              param: 
               { '0': { name: 'KeyCacheSize', type: 'BYTE', showhex: true },
                 '1': { name: 'KeyCacheTimeout', type: 'BYTE', showhex: true } } } } },
     '0x70-V1': 
      { version: 1,
        name: 'CONFIGURATION',
        help: 'Command Class Configuration',
        id: 112,
        COMMAND: 
         { '4': 
            { name: 'SET',
              help: 'Configuration Set',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '120': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '128': 'Default' } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '5': 
            { name: 'GET',
              help: 'Configuration Get',
              param: { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Configuration Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x70-V2': 
      { version: 2,
        name: 'CONFIGURATION',
        help: 'Command Class Configuration',
        id: 112,
        COMMAND: 
         { '4': 
            { name: 'SET',
              help: 'Configuration Set',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '120': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '128': 'Default' } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '5': 
            { name: 'GET',
              help: 'Configuration Get',
              param: { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Configuration Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '7': 
            { name: 'BULK_SET',
              help: 'Configuration Bulk Set',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '56': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '64': 'Handshake', '128': 'Default' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Parameter',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 130,
                          lengthmask: 7,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '8': 
            { name: 'BULK_GET',
              help: 'Configuration Bulk Get',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'BULK_REPORT',
              help: 'Configuration Bulk Report',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '56': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '64': 'Handshake', '128': 'Default' } },
                 '4': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Parameter',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 131,
                          lengthmask: 7,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x70-V3': 
      { version: 3,
        name: 'CONFIGURATION',
        help: 'Command Class Configuration',
        id: 112,
        COMMAND: 
         { '4': 
            { name: 'SET',
              help: 'Configuration Set',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '120': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '128': 'Default' } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '5': 
            { name: 'GET',
              help: 'Configuration Get',
              param: { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Configuration Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '7': 
            { name: 'BULK_SET',
              help: 'Configuration Bulk Set',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '56': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '64': 'Handshake', '128': 'Default' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Parameter',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 130,
                          lengthmask: 7,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '8': 
            { name: 'BULK_GET',
              help: 'Configuration Bulk Get',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'BULK_REPORT',
              help: 'Configuration Bulk Report',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '56': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '64': 'Handshake', '128': 'Default' } },
                 '4': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Parameter',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 131,
                          lengthmask: 7,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '10': 
            { name: 'NAME_GET',
              help: 'Configuration Name Get',
              param: { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true } } },
           '11': 
            { name: 'NAME_REPORT',
              help: 'Configuration Name Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true },
                 '1': { name: 'ReportsToFollow', type: 'BYTE', showhex: false },
                 '2': 
                  { name: 'Name',
                    type: 'VARIANT',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0,
                    is_ascii: true } } },
           '12': 
            { name: 'INFO_GET',
              help: 'Configuration Info Get',
              param: { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true } } },
           '13': 
            { name: 'INFO_REPORT',
              help: 'Configuration Info Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true },
                 '1': { name: 'ReportsToFollow', type: 'BYTE', showhex: false },
                 '2': 
                  { name: 'Info',
                    type: 'VARIANT',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '14': 
            { name: 'PROPERTIES_GET',
              help: 'Configuration Properties Get',
              param: { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true } } },
           '15': 
            { name: 'PROPERTIES_REPORT',
              help: 'Configuration Properties Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Format',
                          fieldmask: 56,
                          shifter: 3,
                          fieldenum: 
                           { '0': 'SignedInteger',
                             '1': 'UnsignedInteger',
                             '2': 'Enumerated',
                             '3': 'BitField' } } } },
                 '2': 
                  { name: 'MinValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': 
                  { name: 'MaxValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '4': 
                  { name: 'DefaultValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '5': { name: 'NextParameterNumber', type: 'WORD', showhex: true } } } } },
     '0x70-V4': 
      { version: 4,
        name: 'CONFIGURATION',
        help: 'Command Class Configuration',
        id: 112,
        COMMAND: 
         { '1': { name: 'DEFAULT_RESET', help: 'Configuration Default Reset' },
           '4': 
            { name: 'SET',
              help: 'Configuration Set',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '120': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '128': 'Default' } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '5': 
            { name: 'GET',
              help: 'Configuration Get',
              param: { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Configuration Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': 
                  { name: 'ConfigurationValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } },
           '7': 
            { name: 'BULK_SET',
              help: 'Configuration Bulk Set',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '56': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '64': 'Handshake', '128': 'Default' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Parameter',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 130,
                          lengthmask: 7,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '8': 
            { name: 'BULK_GET',
              help: 'Configuration Bulk Get',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'BULK_REPORT',
              help: 'Configuration Bulk Report',
              param: 
               { '0': { name: 'ParameterOffset', type: 'WORD', showhex: true },
                 '1': { name: 'NumberOfParameters', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '56': { fieldname: 'Reserved', shifter: 3 } },
                    bitflag: { '64': 'Handshake', '128': 'Default' } },
                 '4': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Parameter',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 131,
                          lengthmask: 7,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 255,
                    shifter: 0 } } },
           '10': 
            { name: 'NAME_GET',
              help: 'Configuration Name Get',
              param: { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true } } },
           '11': 
            { name: 'NAME_REPORT',
              help: 'Configuration Name Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true },
                 '1': { name: 'ReportsToFollow', type: 'BYTE', showhex: false },
                 '2': 
                  { name: 'Name',
                    type: 'VARIANT',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0,
                    is_ascii: true } } },
           '12': 
            { name: 'INFO_GET',
              help: 'Configuration Info Get',
              param: { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true } } },
           '13': 
            { name: 'INFO_REPORT',
              help: 'Configuration Info Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true },
                 '1': { name: 'ReportsToFollow', type: 'BYTE', showhex: false },
                 '2': 
                  { name: 'Info',
                    type: 'VARIANT',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '14': 
            { name: 'PROPERTIES_GET',
              help: 'Configuration Properties Get',
              param: { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true } } },
           '15': 
            { name: 'PROPERTIES_REPORT',
              help: 'Configuration Properties Report',
              param: 
               { '0': { name: 'ParameterNumber', type: 'WORD', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '7': { fieldname: 'Size', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'Format',
                          fieldmask: 56,
                          shifter: 3,
                          fieldenum: 
                           { '0': 'SignedInteger',
                             '1': 'UnsignedInteger',
                             '2': 'Enumerated',
                             '3': 'BitField' } } },
                    bitflag: { '64': 'Readonly', '128': 'ReinclusionRequired' } },
                 '2': 
                  { name: 'MinValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '3': 
                  { name: 'MaxValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '4': 
                  { name: 'DefaultValue',
                    type: 'VARIANT',
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 },
                 '5': { name: 'NextParameterNumber', type: 'WORD', showhex: true },
                 '6': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Advanced', '2': 'NoBulkSupport' },
                    bitfield: { '252': { fieldname: 'Reserved1', shifter: 2 } } } } } } },
     '0x71-V1': 
      { version: 1,
        name: 'ALARM',
        help: 'Command Class Alarm',
        comment: '[DEPRECATED]',
        id: 113,
        COMMAND: 
         { '4': 
            { name: 'GET',
              help: 'Alarm Get',
              param: { '0': { name: 'AlarmType', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Alarm Report',
              param: 
               { '0': { name: 'AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'AlarmLevel', type: 'BYTE', showhex: true } } } } },
     '0x71-V2': 
      { version: 2,
        name: 'ALARM',
        help: 'Command Class Alarm',
        comment: '[DEPRECATED]',
        id: 113,
        COMMAND: 
         { '4': 
            { name: 'GET',
              help: 'Alarm Get',
              param: 
               { '0': { name: 'AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'AlarmType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } } } },
           '5': 
            { name: 'REPORT',
              help: 'Alarm Report',
              param: 
               { '0': { name: 'AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'AlarmLevel', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '3': 
                  { name: 'AlarmStatus',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Off', '255': 'On' } },
                 '4': 
                  { name: 'AlarmType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } },
                 '5': { name: 'AlarmEvent', type: 'BYTE', showhex: true },
                 '6': { name: 'NumberOfEventParameters', type: 'BYTE', showhex: true },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 255,
                    shifter: 0 } } },
           '6': 
            { name: 'SET',
              help: 'Alarm Set',
              param: 
               { '0': 
                  { name: 'AlarmType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } },
                 '1': 
                  { name: 'AlarmStatus',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Off', '255': 'On' } } } },
           '7': { name: 'TYPE_SUPPORTED_GET', help: 'Alarm Type Supported Get' },
           '8': 
            { name: 'TYPE_SUPPORTED_REPORT',
              help: 'Alarm Type Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x71-V3': 
      { version: 3,
        name: 'NOTIFICATION',
        help: 'Command Class Notification',
        id: 113,
        COMMAND: 
         { '1': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Event Supported Get',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } } } },
           '2': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Event Supported Report',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'GET',
              help: 'Notification Get',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } },
                 '2': { name: 'Event', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Notification Report',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'V1AlarmLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Off', '255': 'On' } },
                 '4': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } },
                 '5': { name: 'Event', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventParametersLength', shifter: 0 },
                       '96': { fieldname: 'Reserved2', shifter: 5 } },
                    bitflag: { '128': 'Sequence' } },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 31,
                    shifter: 0 },
                 '8': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SET',
              help: 'Notification Set',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' } },
                 '1': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Off', '255': 'On' } } } },
           '7': { name: 'SUPPORTED_GET', help: 'Notification Supported Get' },
           '8': 
            { name: 'SUPPORTED_REPORT',
              help: 'Notification Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'Burglar',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x71-V4': 
      { version: 4,
        name: 'NOTIFICATION',
        help: 'Command Class Notification',
        id: 113,
        COMMAND: 
         { '1': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Event Supported Get',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } } } },
           '2': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Event Supported Report',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'GET',
              help: 'Notification Get',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '2': { name: 'Event', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Notification Report',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'V1AlarmLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } },
                 '4': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '5': { name: 'Event', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventParametersLength', shifter: 0 },
                       '96': { fieldname: 'Reserved2', shifter: 5 } },
                    bitflag: { '128': 'Sequence' } },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 31,
                    shifter: 0 },
                 '8': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SET',
              help: 'Notification Set',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '1': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } } } },
           '7': { name: 'SUPPORTED_GET', help: 'Notification Supported Get' },
           '8': 
            { name: 'SUPPORTED_REPORT',
              help: 'Notification Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x71-V5': 
      { version: 5,
        name: 'NOTIFICATION',
        help: 'Command Class Notification',
        id: 113,
        COMMAND: 
         { '1': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Event Supported Get',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } } } },
           '2': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Event Supported Report',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'GET',
              help: 'Notification Get',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '2': { name: 'Event', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Notification Report',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'V1AlarmLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } },
                 '4': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '5': { name: 'Event', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventParametersLength', shifter: 0 },
                       '96': { fieldname: 'Reserved2', shifter: 5 } },
                    bitflag: { '128': 'Sequence' } },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 31,
                    shifter: 0 },
                 '8': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SET',
              help: 'Notification Set',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' } },
                 '1': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } } } },
           '7': { name: 'SUPPORTED_GET', help: 'Notification Supported Get' },
           '8': 
            { name: 'SUPPORTED_REPORT',
              help: 'Notification Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x71-V6': 
      { version: 6,
        name: 'NOTIFICATION',
        help: 'Command Class Notification',
        id: 113,
        COMMAND: 
         { '1': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Event Supported Get',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '255': 'First' } } } },
           '2': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Event Supported Report',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '255': 'First' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'GET',
              help: 'Notification Get',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '255': 'First' } },
                 '2': { name: 'Event', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Notification Report',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'V1AlarmLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } },
                 '4': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '255': 'First' } },
                 '5': { name: 'Event', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventParametersLength', shifter: 0 },
                       '96': { fieldname: 'Reserved2', shifter: 5 } },
                    bitflag: { '128': 'Sequence' } },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 31,
                    shifter: 0 },
                 '8': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SET',
              help: 'Notification Set',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '255': 'First' } },
                 '1': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } } } },
           '7': { name: 'SUPPORTED_GET', help: 'Notification Supported Get' },
           '8': 
            { name: 'SUPPORTED_REPORT',
              help: 'Notification Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x71-V7': 
      { version: 7,
        name: 'NOTIFICATION',
        help: 'Command Class Notification',
        id: 113,
        COMMAND: 
         { '1': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Event Supported Get',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } } } },
           '2': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Event Supported Report',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'GET',
              help: 'Notification Get',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '2': { name: 'Event', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Notification Report',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'V1AlarmLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } },
                 '4': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '5': { name: 'Event', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventParametersLength', shifter: 0 },
                       '96': { fieldname: 'Reserved2', shifter: 5 } },
                    bitflag: { '128': 'Sequence' } },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 31,
                    shifter: 0 },
                 '8': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SET',
              help: 'Notification Set',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '1': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } } } },
           '7': { name: 'SUPPORTED_GET', help: 'Notification Supported Get' },
           '8': 
            { name: 'SUPPORTED_REPORT',
              help: 'Notification Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x71-V8': 
      { version: 8,
        name: 'NOTIFICATION',
        help: 'Command Class Notification',
        id: 113,
        COMMAND: 
         { '1': 
            { name: 'EVENT_SUPPORTED_GET',
              help: 'Event Supported Get',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } } } },
           '2': 
            { name: 'EVENT_SUPPORTED_REPORT',
              help: 'Event Supported Report',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'GET',
              help: 'Notification Get',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '2': { name: 'Event', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'REPORT',
              help: 'Notification Report',
              param: 
               { '0': { name: 'V1AlarmType', type: 'BYTE', showhex: true },
                 '1': { name: 'V1AlarmLevel', type: 'BYTE', showhex: true },
                 '2': { name: 'Reserved', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } },
                 '4': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '5': { name: 'Event', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'EventParametersLength', shifter: 0 },
                       '96': { fieldname: 'Reserved2', shifter: 5 } },
                    bitflag: { '128': 'Sequence' } },
                 '7': 
                  { name: 'EventParameter',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 6,
                    lengthmask: 31,
                    shifter: 0 },
                 '8': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'SET',
              help: 'Notification Set',
              param: 
               { '0': 
                  { name: 'NotificationType',
                    type: 'CONST',
                    const: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' } },
                 '1': 
                  { name: 'NotificationStatus',
                    type: 'CONST',
                    const: { '0': 'Off', '254': 'NoPendingNotifications', '255': 'On' } } } },
           '7': { name: 'SUPPORTED_GET', help: 'Notification Supported Get' },
           '8': 
            { name: 'SUPPORTED_REPORT',
              help: 'Notification Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfBitMasks', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'V1Alarm' } },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Reserved',
                       '1': 'Smoke',
                       '2': 'CO',
                       '3': 'CO2',
                       '4': 'Heat',
                       '5': 'Water',
                       '6': 'AccessControl',
                       '7': 'HomeSecurity',
                       '8': 'PowerManagement',
                       '9': 'System',
                       '10': 'Emergency',
                       '11': 'Clock',
                       '12': 'Appliance',
                       '13': 'HomeHealth',
                       '14': 'Siren',
                       '15': 'WaterValve',
                       '16': 'WeatherAlarm',
                       '17': 'Irrigation',
                       '18': 'GasAlarm',
                       '255': 'First' },
                    lengthoffset: 0,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x72-V1': 
      { version: 1,
        name: 'MANUFACTURER_SPECIFIC',
        help: 'Command Class Manufacturer Specific',
        id: 114,
        COMMAND: 
         { '4': { name: 'GET', help: 'Manufacturer Specific Get' },
           '5': 
            { name: 'REPORT',
              help: 'Manufacturer Specific Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'ProductTypeId', type: 'WORD', showhex: true },
                 '2': { name: 'ProductId', type: 'WORD', showhex: true } } } } },
     '0x72-V2': 
      { version: 2,
        name: 'MANUFACTURER_SPECIFIC',
        help: 'Command Class Manufacturer Specific',
        id: 114,
        COMMAND: 
         { '4': { name: 'GET', help: 'Manufacturer Specific Get' },
           '5': 
            { name: 'REPORT',
              help: 'Manufacturer Specific Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'ProductTypeId', type: 'WORD', showhex: true },
                 '2': { name: 'ProductId', type: 'WORD', showhex: true } } },
           '6': 
            { name: 'DEVICE_SPECIFIC_GET',
              help: 'Device Specific Get',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'DeviceIdType',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: { '0': 'Reserved', '1': 'SerialNumber' } } },
                    bitfield: { '248': { fieldname: 'Reserved', shifter: 3 } } } } },
           '7': 
            { name: 'DEVICE_SPECIFIC_REPORT',
              help: 'Device Specific Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    fieldenum: 
                     { '0': 
                        { fieldname: 'DeviceIdType',
                          fieldmask: 7,
                          shifter: 0,
                          fieldenum: { '0': 'Reserved', '1': 'SerialNumber' } } },
                    bitfield: { '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '31': { fieldname: 'DeviceIdDataLengthIndicator', shifter: 0 } },
                    fieldenum: 
                     { '1': 
                        { fieldname: 'DeviceIdDataFormat',
                          fieldmask: 224,
                          shifter: 5,
                          fieldenum: { '0': 'Reserved', '1': 'Binary' } } } },
                 '2': 
                  { name: 'DeviceIdData',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x73-V1': 
      { version: 1,
        name: 'POWERLEVEL',
        help: 'Command Class Powerlevel',
        id: 115,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Powerlevel Set',
              param: 
               { '0': 
                  { name: 'PowerLevel',
                    type: 'CONST',
                    const: 
                     { '0': 'NormalPower',
                       '1': 'minus1dBm',
                       '2': 'minus2dBm',
                       '3': 'minus3dBm',
                       '4': 'minus4dBm',
                       '5': 'minus5dBm',
                       '6': 'minus6dBm',
                       '7': 'minus7dBm',
                       '8': 'minus8dBm',
                       '9': 'minus9dBm' } },
                 '1': { name: 'Timeout', type: 'BYTE', showhex: true } } },
           '2': { name: 'GET', help: 'Powerlevel Get' },
           '3': 
            { name: 'REPORT',
              help: 'Powerlevel Report',
              param: 
               { '0': 
                  { name: 'PowerLevel',
                    type: 'CONST',
                    const: 
                     { '0': 'NormalPower',
                       '1': 'minus1dBm',
                       '2': 'minus2dBm',
                       '3': 'minus3dBm',
                       '4': 'minus4dBm',
                       '5': 'minus5dBm',
                       '6': 'minus6dBm',
                       '7': 'minus7dBm',
                       '8': 'minus8dBm',
                       '9': 'minus9dBm' } },
                 '1': { name: 'Timeout', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'TEST_NODE_SET',
              help: 'Powerlevel Test Node Set',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '1': 
                  { name: 'PowerLevel',
                    type: 'CONST',
                    const: 
                     { '0': 'NormalPower',
                       '1': 'minus1dBm',
                       '2': 'minus2dBm',
                       '3': 'minus3dBm',
                       '4': 'minus4dBm',
                       '5': 'minus5dBm',
                       '6': 'minus6dBm',
                       '7': 'minus7dBm',
                       '8': 'minus8dBm',
                       '9': 'minus9dBm' } },
                 '2': { name: 'TestFrameCount', type: 'WORD', showhex: true } } },
           '5': { name: 'TEST_NODE_GET', help: 'Powerlevel Test Node Get' },
           '6': 
            { name: 'TEST_NODE_REPORT',
              help: 'Powerlevel Test Node Report',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'CONST',
                    encaptype: 'NODE_NUMBER',
                    const: { '0': 'ZwTestNotANodeid' },
                    alias: 'zwaveNodeId' },
                 '1': 
                  { name: 'StatusOfOperation',
                    type: 'CONST',
                    const: 
                     { '0': 'ZwTestFailed',
                       '1': 'ZwTestSucces',
                       '2': 'ZwTestInprogress' } },
                 '2': { name: 'TestFrameCount', type: 'WORD', showhex: true } } } } },
     '0x74-V1': 
      { version: 1,
        name: 'INCLUSION_CONTROLLER',
        help: 'Command Class Inclusion Controller',
        id: 116,
        COMMAND: 
         { '1': 
            { name: 'INITIATE',
              help: 'Initiate',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '1': 
                  { name: 'StepId',
                    type: 'CONST',
                    const: { '1': 'ProxyInclusion', '2': 'S0Inclusion' } } } },
           '2': 
            { name: 'COMPLETE',
              help: 'Complete',
              param: 
               { '0': 
                  { name: 'StepId',
                    type: 'CONST',
                    const: { '1': 'ProxyInclusion', '2': 'S0Inclusion' } },
                 '1': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '1': 'StepOk',
                       '2': 'StepUserRejected',
                       '3': 'StepFailed',
                       '4': 'StepNotSupported' } } } } } },
     '0x75-V1': 
      { version: 1,
        name: 'PROTECTION',
        help: 'Command Class Protection',
        id: 117,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Protection Set',
              param: 
               { '0': 
                  { name: 'ProtectionState',
                    type: 'CONST',
                    const: 
                     { '0': 'Unprotected',
                       '1': 'ProtectionBySequence',
                       '2': 'NoOperationPossible' } } } },
           '2': { name: 'GET', help: 'Protection Get' },
           '3': 
            { name: 'REPORT',
              help: 'Protection Report',
              param: 
               { '0': 
                  { name: 'ProtectionState',
                    type: 'CONST',
                    const: 
                     { '0': 'Unprotected',
                       '1': 'ProtectionBySequence',
                       '2': 'NoOperationPossible' } } } } } },
     '0x75-V2': 
      { version: 2,
        name: 'PROTECTION',
        help: 'Command Class Protection',
        id: 117,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Protection Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'LocalProtectionState', shifter: 0 },
                       '240': { fieldname: 'Reserved1', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'RfProtectionState', shifter: 0 },
                       '240': { fieldname: 'Reserved2', shifter: 4 } } } } },
           '2': { name: 'GET', help: 'Protection Get' },
           '3': 
            { name: 'REPORT',
              help: 'Protection Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'LocalProtectionState', shifter: 0 },
                       '240': { fieldname: 'Reserved1', shifter: 4 } } },
                 '1': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'RfProtectionState', shifter: 0 },
                       '240': { fieldname: 'Reserved2', shifter: 4 } } } } },
           '4': { name: 'SUPPORTED_GET', help: 'Protection Supported Get' },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Protection Supported Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Timeout', '2': 'ExclusiveControl' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': { name: 'LocalProtectionState', type: 'WORD', showhex: true },
                 '2': { name: 'RfProtectionState', type: 'WORD', showhex: true } } },
           '6': 
            { name: 'EC_SET',
              help: 'Protection Ec Set',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '7': { name: 'EC_GET', help: 'Protection Ec Get' },
           '8': 
            { name: 'EC_REPORT',
              help: 'Protection Ec Report',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '9': 
            { name: 'TIMEOUT_SET',
              help: 'Protection Timeout Set',
              param: 
               { '0': 
                  { name: 'Timeout',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'NoTimerIsSet', '255': 'NoTimeout' } } } },
           '10': { name: 'TIMEOUT_GET', help: 'Protection Timeout Get' },
           '11': 
            { name: 'TIMEOUT_REPORT',
              help: 'Protection Timeout Report',
              param: 
               { '0': 
                  { name: 'Timeout',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'NoTimerIsSet', '255': 'NoTimeoutIsSet' } } } } } },
     '0x76-V1': 
      { version: 1,
        name: 'LOCK',
        help: 'Command Class Lock',
        comment: '[DEPRECATED]',
        id: 118,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Lock Set',
              param: 
               { '0': 
                  { name: 'LockState',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Unlocked', '1': 'Locked' } } } },
           '2': { name: 'GET', help: 'Lock Get' },
           '3': 
            { name: 'REPORT',
              help: 'Lock Report',
              param: 
               { '0': 
                  { name: 'LockState',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'Unlocked', '1': 'Locked' } } } } } },
     '0x77-V1': 
      { version: 1,
        name: 'NODE_NAMING',
        help: 'Command Class Node Naming',
        id: 119,
        COMMAND: 
         { '1': 
            { name: 'NODE_NAME_SET',
              help: 'Node Naming Node Name Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': { name: 'NodeNameChar', type: 'ARRAY', len: 16, is_ascii: true } } },
           '2': { name: 'NODE_NAME_GET', help: 'Node Naming Node Name Get' },
           '3': 
            { name: 'NODE_NAME_REPORT',
              help: 'Node Naming Node Name Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': { name: 'NodeNameChar', type: 'ARRAY', len: 16, is_ascii: true } } },
           '4': 
            { name: 'NODE_LOCATION_SET',
              help: 'Node Naming Node Location  Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': 
                  { name: 'NodeLocationChar',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: true } } },
           '5': 
            { name: 'NODE_LOCATION_GET',
              help: 'Node Naming Node Location Get' },
           '6': 
            { name: 'NODE_LOCATION_REPORT',
              help: 'Node Naming Node Location  Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '1': 
                  { name: 'NodeLocationChar',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: true } } } } },
     '0x7a-V1': 
      { version: 1,
        name: 'FIRMWARE_UPDATE_MD',
        help: 'Command Class Firmware Update Md',
        comment: '[DEPRECATED]',
        id: 122,
        COMMAND: 
         { '1': { name: 'FIRMWARE_MD_GET', help: 'Firmware Md Get' },
           '2': 
            { name: 'FIRMWARE_MD_REPORT',
              help: 'Firmware Md Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '3': 
            { name: 'REQUEST_GET',
              help: 'Firmware Update Md Request Get',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '4': 
            { name: 'REQUEST_REPORT',
              help: 'Firmware Update Md Request Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'RequiresAuthentication',
                       '255': 'ValidCombination' } } } },
           '5': 
            { name: 'GET',
              help: 'Firmware Update Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Zero' } },
                 '2': { name: 'ReportNumber2', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Firmware Update Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Last' } },
                 '1': { name: 'ReportNumber2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '7': 
            { name: 'STATUS_REPORT',
              help: 'Firmware Update Md Status Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'UnableToReceiveWithoutChecksumError',
                       '1': 'UnableToReceive',
                       '255': 'Successfully' } } } } } },
     '0x7a-V2': 
      { version: 2,
        name: 'FIRMWARE_UPDATE_MD',
        help: 'Command Class Firmware Update Md',
        id: 122,
        COMMAND: 
         { '1': { name: 'FIRMWARE_MD_GET', help: 'Firmware Md Get' },
           '2': 
            { name: 'FIRMWARE_MD_REPORT',
              help: 'Firmware Md Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '3': 
            { name: 'REQUEST_GET',
              help: 'Firmware Update Md Request Get',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '4': 
            { name: 'REQUEST_REPORT',
              help: 'Firmware Update Md Request Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'RequiresAuthentication',
                       '255': 'ValidCombination' } } } },
           '5': 
            { name: 'GET',
              help: 'Firmware Update Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Zero' } },
                 '2': { name: 'ReportNumber2', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Firmware Update Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Last' } },
                 '1': { name: 'ReportNumber2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '7': 
            { name: 'STATUS_REPORT',
              help: 'Firmware Update Md Status Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'UnableToReceiveWithoutChecksumError',
                       '1': 'UnableToReceive',
                       '255': 'Successfully' } } } } } },
     '0x7a-V3': 
      { version: 3,
        name: 'FIRMWARE_UPDATE_MD',
        help: 'Command Class Firmware Update Md',
        id: 122,
        COMMAND: 
         { '1': { name: 'FIRMWARE_MD_GET', help: 'Firmware Md Get' },
           '2': 
            { name: 'FIRMWARE_MD_REPORT',
              help: 'Firmware Md Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'Firmware0Id', type: 'WORD', showhex: true },
                 '2': { name: 'Firmware0Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareUpgradable', type: 'BYTE', showhex: true },
                 '4': { name: 'NumberOfFirmwareTargets', type: 'BYTE', showhex: true },
                 '5': { name: 'MaxFragmentSize', type: 'WORD', showhex: true },
                 '6': 
                  { name: 'VariableGroup',
                    param: { '0': { name: 'FirmwareId', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 4,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'REQUEST_GET',
              help: 'Firmware Update Md Request Get',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '4': { name: 'FragmentSize', type: 'WORD', showhex: true } } },
           '4': 
            { name: 'REQUEST_REPORT',
              help: 'Firmware Update Md Request Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'RequiresAuthentication',
                       '2': 'InvalidFragmentSize',
                       '3': 'NotUpgradable',
                       '255': 'ValidCombination' } } } },
           '5': 
            { name: 'GET',
              help: 'Firmware Update Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Zero' } },
                 '2': { name: 'ReportNumber2', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Firmware Update Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Last' } },
                 '1': { name: 'ReportNumber2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '7': 
            { name: 'STATUS_REPORT',
              help: 'Firmware Update Md Status Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'UnableToReceiveWithoutChecksumError',
                       '1': 'UnableToReceive',
                       '254': 'SuccessfullyStored',
                       '255': 'Successfully' } },
                 '1': { name: 'WaitTime', type: 'WORD', showhex: true } } } } },
     '0x7a-V4': 
      { version: 4,
        name: 'FIRMWARE_UPDATE_MD',
        help: 'Command Class Firmware Update Md',
        id: 122,
        COMMAND: 
         { '1': { name: 'FIRMWARE_MD_GET', help: 'Firmware Md Get' },
           '2': 
            { name: 'FIRMWARE_MD_REPORT',
              help: 'Firmware Md Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'Firmware0Id', type: 'WORD', showhex: true },
                 '2': { name: 'Firmware0Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareUpgradable', type: 'BYTE', showhex: true },
                 '4': { name: 'NumberOfFirmwareTargets', type: 'BYTE', showhex: true },
                 '5': { name: 'MaxFragmentSize', type: 'WORD', showhex: true },
                 '6': 
                  { name: 'VariableGroup',
                    param: { '0': { name: 'FirmwareId', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 4,
                    lengthmask: 255,
                    shifter: 0 } } },
           '3': 
            { name: 'REQUEST_GET',
              help: 'Firmware Update Md Request Get',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '4': { name: 'FragmentSize', type: 'WORD', showhex: true },
                 '5': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Activation' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } } } },
           '4': 
            { name: 'REQUEST_REPORT',
              help: 'Firmware Update Md Request Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'RequiresAuthentication',
                       '2': 'InvalidFragmentSize',
                       '3': 'NotUpgradable',
                       '255': 'ValidCombination' } } } },
           '5': 
            { name: 'GET',
              help: 'Firmware Update Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Zero' } },
                 '2': { name: 'ReportNumber2', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Firmware Update Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Last' } },
                 '1': { name: 'ReportNumber2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '7': 
            { name: 'STATUS_REPORT',
              help: 'Firmware Update Md Status Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'UnableToReceiveWithoutChecksumError',
                       '1': 'UnableToReceive',
                       '2': 'DoesNotMatchTheManufacturerId',
                       '3': 'DoesNotMatchTheFirmwareId',
                       '4': 'DoesNotMatchTheFirmwareTarget',
                       '5': 'InvalidFileHeaderInformation',
                       '6': 'InvalidFileHeaderFormat',
                       '7': 'InsufficientMemory',
                       '253': 'SuccessfullyWaitingForActivation',
                       '254': 'SuccessfullyStored',
                       '255': 'Successfully' } },
                 '1': { name: 'WaitTime', type: 'WORD', showhex: true } } },
           '8': 
            { name: 'FIRMWARE_UPDATE_ACTIVATION_SET',
              help: 'Firmware Update Activation Set Command',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'FIRMWARE_UPDATE_ACTIVATION_STATUS_REPORT',
              help: 'Firmware Update Activation Status Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'BYTE', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'FirmwareUpdateStatus',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'ErrorActivatingTheFirmware',
                       '255': 'FirmwareUpdateCompletedSuccessfully' } } } } } },
     '0x7a-V5': 
      { version: 5,
        name: 'FIRMWARE_UPDATE_MD',
        help: 'Command Class Firmware Update Md',
        id: 122,
        COMMAND: 
         { '1': { name: 'FIRMWARE_MD_GET', help: 'Firmware Md Get' },
           '2': 
            { name: 'FIRMWARE_MD_REPORT',
              help: 'Firmware Md Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'Firmware0Id', type: 'WORD', showhex: true },
                 '2': { name: 'Firmware0Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareUpgradable', type: 'BYTE', showhex: true },
                 '4': { name: 'NumberOfFirmwareTargets', type: 'BYTE', showhex: true },
                 '5': { name: 'MaxFragmentSize', type: 'WORD', showhex: true },
                 '6': 
                  { name: 'VariableGroup',
                    param: { '0': { name: 'FirmwareId', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 4,
                    lengthmask: 255,
                    shifter: 0 },
                 '7': { name: 'HardwareVersion', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REQUEST_GET',
              help: 'Firmware Update Md Request Get',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '4': { name: 'FragmentSize', type: 'WORD', showhex: true },
                 '5': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Activation' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '6': { name: 'HardwareVersion', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'REQUEST_REPORT',
              help: 'Firmware Update Md Request Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'RequiresAuthentication',
                       '2': 'InvalidFragmentSize',
                       '3': 'NotUpgradable',
                       '4': 'InvalidHardwareVersion',
                       '255': 'ValidCombination' } } } },
           '5': 
            { name: 'GET',
              help: 'Firmware Update Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Zero' } },
                 '2': { name: 'ReportNumber2', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'REPORT',
              help: 'Firmware Update Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'ReportNumber1', shifter: 0 } },
                    bitflag: { '128': 'Last' } },
                 '1': { name: 'ReportNumber2', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': { name: 'Checksum', type: 'WORD', showhex: true } } },
           '7': 
            { name: 'STATUS_REPORT',
              help: 'Firmware Update Md Status Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'UnableToReceiveWithoutChecksumError',
                       '1': 'UnableToReceive',
                       '2': 'DoesNotMatchTheManufacturerId',
                       '3': 'DoesNotMatchTheFirmwareId',
                       '4': 'DoesNotMatchTheFirmwareTarget',
                       '5': 'InvalidFileHeaderInformation',
                       '6': 'InvalidFileHeaderFormat',
                       '7': 'InsufficientMemory',
                       '8': 'DoesNotMatchTheHardwareVersion',
                       '253': 'SuccessfullyWaitingForActivation',
                       '254': 'SuccessfullyStored',
                       '255': 'Successfully' } },
                 '1': { name: 'WaitTime', type: 'WORD', showhex: true } } },
           '8': 
            { name: 'FIRMWARE_UPDATE_ACTIVATION_SET',
              help: 'Firmware Update Activation Set Command',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '4': { name: 'HardwareVersion', type: 'BYTE', showhex: true } } },
           '9': 
            { name: 'FIRMWARE_UPDATE_ACTIVATION_STATUS_REPORT',
              help: 'Firmware Update Activation Status Report',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'BYTE', showhex: true },
                 '2': { name: 'Checksum', type: 'WORD', showhex: true },
                 '3': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '4': 
                  { name: 'FirmwareUpdateStatus',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'ErrorActivatingTheFirmware',
                       '255': 'FirmwareUpdateCompletedSuccessfully' } },
                 '5': { name: 'HardwareVersion', type: 'BYTE', showhex: true } } },
           '10': 
            { name: 'PREPARE_GET',
              help: 'Firmware Update MD Prepare Get',
              param: 
               { '0': { name: 'ManufacturerId', type: 'WORD', showhex: true },
                 '1': { name: 'FirmwareId', type: 'WORD', showhex: true },
                 '2': { name: 'FirmwareTarget', type: 'BYTE', showhex: true },
                 '3': { name: 'FragmentSize', type: 'WORD', showhex: true },
                 '4': { name: 'HardwareVersion', type: 'BYTE', showhex: true } } },
           '11': 
            { name: 'PREPARE_REPORT',
              help: 'Firmware Update MD Prepare Report',
              param: 
               { '0': 
                  { name: 'Status',
                    type: 'CONST',
                    const: 
                     { '0': 'InvalidCombination',
                       '1': 'RequiresAuthentication',
                       '2': 'InvalidFragmentSize',
                       '3': 'NotUpgradable',
                       '4': 'InvalidHardwareVersion',
                       '255': 'ValidCombination' } },
                 '1': { name: 'FirmwareChecksum', type: 'WORD', showhex: true } } } } },
     '0x7b-V1': 
      { version: 1,
        name: 'GROUPING_NAME',
        help: 'Command Class Grouping Name',
        comment: '[DEPRECATED]',
        id: 123,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Grouping Name Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': { name: 'GroupingName', type: 'ARRAY', len: 16, is_ascii: true } } },
           '2': 
            { name: 'GET',
              help: 'Grouping Name Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Grouping Name Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': { name: 'GroupingName', type: 'ARRAY', len: 16, is_ascii: true } } } } },
     '0x7c-V1': 
      { version: 1,
        name: 'REMOTE_ASSOCIATION_ACTIVATE',
        help: 'Command Class Remote Association Activate',
        comment: '[OBSOLETED]',
        id: 124,
        COMMAND: 
         { '1': 
            { name: 'REMOTE_ASSOCIATION_ACTIVATE',
              help: 'Remote Association Activate',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } } } },
     '0x7d-V1': 
      { version: 1,
        name: 'REMOTE_ASSOCIATION',
        help: 'Command Class Remote Association',
        comment: '[OBSOLETED]',
        id: 125,
        COMMAND: 
         { '1': 
            { name: 'CONFIGURATION_SET',
              help: 'Remote Association Configuration Set',
              param: 
               { '0': 
                  { name: 'LocalGroupingIdentifier',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'EraseAllLin' } },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'CONST',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false,
                    const: { '0': 'RemoveaLink' } },
                 '2': { name: 'RemoteGroupingIdentifier', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'CONFIGURATION_GET',
              help: 'Remote Association Configuration Get',
              param: { '0': { name: 'LocalGroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'CONFIGURATION_REPORT',
              help: 'Remote Association Configuration Report',
              param: 
               { '0': 
                  { name: 'LocalGroupingIdentifier',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'EraseAllLin' } },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'CONST',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false,
                    const: { '0': 'RemoveaLink' } },
                 '2': { name: 'RemoteGroupingIdentifier', type: 'BYTE', showhex: true } } } } },
     '0x80-V1': 
      { version: 1,
        name: 'BATTERY',
        help: 'Command Class Battery',
        id: 128,
        COMMAND: 
         { '2': { name: 'GET', help: 'Battery Get' },
           '3': 
            { name: 'REPORT',
              help: 'Battery Report',
              param: 
               { '0': 
                  { name: 'BatteryLevel',
                    type: 'CONST',
                    showhex: true,
                    const: { '255': 'BatteryLowWarning' } } } } } },
     '0x81-V1': 
      { version: 1,
        name: 'CLOCK',
        help: 'Command Class Clock',
        id: 129,
        COMMAND: 
         { '4': 
            { name: 'SET',
              help: 'Clock Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Hour', shifter: 0 },
                       '224': { fieldname: 'Weekday', shifter: 5 } } },
                 '1': { name: 'Minute', type: 'BYTE', showhex: true } } },
           '5': { name: 'GET', help: 'Clock Get' },
           '6': 
            { name: 'REPORT',
              help: 'Clock Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'Hour', shifter: 0 },
                       '224': { fieldname: 'Weekday', shifter: 5 } } },
                 '1': { name: 'Minute', type: 'BYTE', showhex: true } } } } },
     '0x82-V1': 
      { version: 1,
        name: 'HAIL',
        help: 'Command Class Hail',
        comment: '[DEPRECATED]',
        id: 130,
        COMMAND: { '1': { name: 'HAIL', help: 'Hail' } } },
     '0x84-V1': 
      { version: 1,
        name: 'WAKE_UP',
        help: 'Command Class Wake Up',
        id: 132,
        COMMAND: 
         { '4': 
            { name: 'INTERVAL_SET',
              help: 'Wake Up Interval Set',
              param: 
               { '0': { name: 'Seconds', type: 'BIT_24', showhex: false },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '5': { name: 'INTERVAL_GET', help: 'Wake Up Interval Get' },
           '6': 
            { name: 'INTERVAL_REPORT',
              help: 'Wake Up Interval Report',
              param: 
               { '0': { name: 'Seconds', type: 'BIT_24', showhex: false },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '7': { name: 'NOTIFICATION', help: 'Wake Up Notification' },
           '8': 
            { name: 'NO_MORE_INFORMATION',
              help: 'Wake Up No More Information' } } },
     '0x84-V2': 
      { version: 2,
        name: 'WAKE_UP',
        help: 'Command Class Wake Up',
        id: 132,
        COMMAND: 
         { '4': 
            { name: 'INTERVAL_SET',
              help: 'Wake Up Interval Set',
              param: 
               { '0': { name: 'Seconds', type: 'BIT_24', showhex: false },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '5': { name: 'INTERVAL_GET', help: 'Wake Up Interval Get' },
           '6': 
            { name: 'INTERVAL_REPORT',
              help: 'Wake Up Interval Report',
              param: 
               { '0': { name: 'Seconds', type: 'BIT_24', showhex: false },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '7': { name: 'NOTIFICATION', help: 'Wake Up Notification' },
           '8': 
            { name: 'NO_MORE_INFORMATION',
              help: 'Wake Up No More Information' },
           '9': 
            { name: 'INTERVAL_CAPABILITIES_GET',
              help: 'Wake Up Interval Capabilities Get' },
           '10': 
            { name: 'INTERVAL_CAPABILITIES_REPORT',
              help: 'Wake Up Interval Capabilities Report',
              param: 
               { '0': 
                  { name: 'MinimumWakeUpIntervalSeconds',
                    type: 'BIT_24',
                    showhex: false },
                 '1': 
                  { name: 'MaximumWakeUpIntervalSeconds',
                    type: 'BIT_24',
                    showhex: false },
                 '2': 
                  { name: 'DefaultWakeUpIntervalSeconds',
                    type: 'BIT_24',
                    showhex: false },
                 '3': 
                  { name: 'WakeUpIntervalStepSeconds',
                    type: 'BIT_24',
                    showhex: false } } } } },
     '0x85-V1': 
      { version: 1,
        name: 'ASSOCIATION',
        help: 'Command Class Association',
        id: 133,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Association Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Association Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Association Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'MaxNodesSupported', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'REMOVE',
              help: 'Association Remove',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': { name: 'GROUPINGS_GET', help: 'Association Groupings Get' },
           '6': 
            { name: 'GROUPINGS_REPORT',
              help: 'Association Groupings Report',
              param: { '0': { name: 'SupportedGroupings', type: 'BYTE', showhex: true } } } } },
     '0x85-V2': 
      { version: 2,
        name: 'ASSOCIATION',
        help: 'Command Class Association',
        id: 133,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Association Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Association Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Association Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'MaxNodesSupported', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'REMOVE',
              help: 'Association Remove',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': { name: 'GROUPINGS_GET', help: 'Association Groupings Get' },
           '6': 
            { name: 'GROUPINGS_REPORT',
              help: 'Association Groupings Report',
              param: { '0': { name: 'SupportedGroupings', type: 'BYTE', showhex: true } } },
           '11': 
            { name: 'SPECIFIC_GROUP_GET',
              help: 'Association Specific Group Get' },
           '12': 
            { name: 'SPECIFIC_GROUP_REPORT',
              help: 'Association Specific Group Report',
              param: { '0': { name: 'Group', type: 'BYTE', showhex: true } } } } },
     '0x86-V1': 
      { version: 1,
        name: 'VERSION',
        help: 'Command Class Version',
        id: 134,
        COMMAND: 
         { '17': { name: 'GET', help: 'Version Get' },
           '18': 
            { name: 'REPORT',
              help: 'Version Report',
              param: 
               { '0': { name: 'LibraryType', type: 'BYTE', showhex: true },
                 '1': { name: 'ProtocolVersion', type: 'BYTE', showhex: true },
                 '2': { name: 'ProtocolSubVersion', type: 'BYTE', showhex: true },
                 '3': { name: 'ApplicationVersion', type: 'BYTE', showhex: true },
                 '4': { name: 'ApplicationSubVersion', type: 'BYTE', showhex: true } } },
           '19': 
            { name: 'GET',
              help: 'Version Command Class Get',
              param: { '0': { name: 'RequestedCommandClass', type: 'BYTE', showhex: true } } },
           '20': 
            { name: 'REPORT',
              help: 'Version Command Class Report',
              param: 
               { '0': { name: 'RequestedCommandClass', type: 'BYTE', showhex: true },
                 '1': { name: 'CommandClassVersion', type: 'BYTE', showhex: true } } } } },
     '0x86-V2': 
      { version: 2,
        name: 'VERSION',
        help: 'Command Class Version',
        id: 134,
        COMMAND: 
         { '17': { name: 'GET', help: 'Version Get' },
           '18': 
            { name: 'REPORT',
              help: 'Version Report',
              param: 
               { '0': { name: 'LibraryType', type: 'BYTE', showhex: true },
                 '1': { name: 'ProtocolVersion', type: 'BYTE', showhex: true },
                 '2': { name: 'ProtocolSubVersion', type: 'BYTE', showhex: true },
                 '3': { name: 'Firmware0Version', type: 'BYTE', showhex: true },
                 '4': { name: 'Firmware0SubVersion', type: 'BYTE', showhex: true },
                 '5': { name: 'HardwareVersion', type: 'BYTE', showhex: true },
                 '6': { name: 'NumberOfFirmwareTargets', type: 'BYTE', showhex: true },
                 '7': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': { name: 'FirmwareVersion', type: 'BYTE', showhex: true },
                       '1': { name: 'FirmwareSubVersion', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 6,
                    lengthmask: 255,
                    shifter: 0 } } },
           '19': 
            { name: 'GET',
              help: 'Version Command Class Get',
              param: { '0': { name: 'RequestedCommandClass', type: 'BYTE', showhex: true } } },
           '20': 
            { name: 'REPORT',
              help: 'Version Command Class Report',
              param: 
               { '0': { name: 'RequestedCommandClass', type: 'BYTE', showhex: true },
                 '1': { name: 'CommandClassVersion', type: 'BYTE', showhex: true } } } } },
     '0x87-V1': 
      { version: 1,
        name: 'INDICATOR',
        help: 'Command Class Indicator',
        id: 135,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Indicator Set',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } },
           '2': { name: 'GET', help: 'Indicator Get' },
           '3': 
            { name: 'REPORT',
              help: 'Indicator Report',
              param: 
               { '0': 
                  { name: 'Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } } } } } },
     '0x87-V2': 
      { version: 2,
        name: 'INDICATOR',
        help: 'Command Class Indicator',
        id: 135,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Indicator Set',
              param: 
               { '0': 
                  { name: 'Indicator0Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'IndicatorObjectCount', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'IndicatorId',
                          type: 'CONST',
                          const: 
                           { '0': 'NA',
                             '1': 'Armed',
                             '2': 'NotArmed',
                             '3': 'Ready',
                             '4': 'Fault',
                             '5': 'Busy',
                             '6': 'EnterId',
                             '7': 'EnterPin',
                             '8': 'Ok',
                             '9': 'NotOk',
                             '32': 'Zone1Armed',
                             '33': 'Zone2Armed',
                             '34': 'Zone3Armed',
                             '35': 'Zone4Armed',
                             '36': 'Zone5Armed',
                             '37': 'Zone6Armed',
                             '48': 'LcdBacklight',
                             '64': 'ButtonBacklightLetters',
                             '65': 'ButtonBacklightDigits',
                             '66': 'ButtonBacklightCommand',
                             '67': 'Button1Indication',
                             '68': 'Button2Indication',
                             '69': 'Button3Indication',
                             '70': 'Button4Indication',
                             '71': 'Button5Indication',
                             '72': 'Button6Indication',
                             '73': 'Button7Indication',
                             '74': 'Button8Indication',
                             '75': 'Button9Indication',
                             '76': 'Button10Indication',
                             '77': 'Button11Indication',
                             '78': 'Button12Indication',
                             '240': 'Buzzer' } },
                       '1': 
                        { name: 'PropertyId',
                          type: 'CONST',
                          const: 
                           { '1': 'Multilevel',
                             '2': 'Binary',
                             '3': 'OnOffPeriod',
                             '4': 'OnOffCycles',
                             '16': 'LowPower' } },
                       '2': { name: 'Value', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Indicator Get',
              param: 
               { '0': 
                  { name: 'IndicatorId',
                    type: 'CONST',
                    const: 
                     { '0': 'NA',
                       '1': 'Armed',
                       '2': 'NotArmed',
                       '3': 'Ready',
                       '4': 'Fault',
                       '5': 'Busy',
                       '6': 'EnterId',
                       '7': 'EnterPin',
                       '8': 'Ok',
                       '9': 'NotOk',
                       '32': 'Zone1Armed',
                       '33': 'Zone2Armed',
                       '34': 'Zone3Armed',
                       '35': 'Zone4Armed',
                       '36': 'Zone5Armed',
                       '37': 'Zone6Armed',
                       '48': 'LcdBacklight',
                       '64': 'ButtonBacklightLetters',
                       '65': 'ButtonBacklightDigits',
                       '66': 'ButtonBacklightCommand',
                       '67': 'Button1Indication',
                       '68': 'Button2Indication',
                       '69': 'Button3Indication',
                       '70': 'Button4Indication',
                       '71': 'Button5Indication',
                       '72': 'Button6Indication',
                       '73': 'Button7Indication',
                       '74': 'Button8Indication',
                       '75': 'Button9Indication',
                       '76': 'Button10Indication',
                       '77': 'Button11Indication',
                       '78': 'Button12Indication',
                       '240': 'Buzzer' } } } },
           '3': 
            { name: 'REPORT',
              help: 'Indicator Report',
              param: 
               { '0': 
                  { name: 'Indicator0Value',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'OffDisable', '255': 'OnEnable' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'IndicatorObjectCount', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '2': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'IndicatorId',
                          type: 'CONST',
                          const: 
                           { '0': 'NA',
                             '1': 'Armed',
                             '2': 'NotArmed',
                             '3': 'Ready',
                             '4': 'Fault',
                             '5': 'Busy',
                             '6': 'EnterId',
                             '7': 'EnterPin',
                             '8': 'Ok',
                             '9': 'NotOk',
                             '32': 'Zone1Armed',
                             '33': 'Zone2Armed',
                             '34': 'Zone3Armed',
                             '35': 'Zone4Armed',
                             '36': 'Zone5Armed',
                             '37': 'Zone6Armed',
                             '48': 'LcdBacklight',
                             '64': 'ButtonBacklightLetters',
                             '65': 'ButtonBacklightDigits',
                             '66': 'ButtonBacklightCommand',
                             '67': 'Button1Indication',
                             '68': 'Button2Indication',
                             '69': 'Button3Indication',
                             '70': 'Button4Indication',
                             '71': 'Button5Indication',
                             '72': 'Button6Indication',
                             '73': 'Button7Indication',
                             '74': 'Button8Indication',
                             '75': 'Button9Indication',
                             '76': 'Button10Indication',
                             '77': 'Button11Indication',
                             '78': 'Button12Indication',
                             '240': 'Buzzer' } },
                       '1': 
                        { name: 'PropertyId',
                          type: 'CONST',
                          const: 
                           { '1': 'Multilevel',
                             '2': 'Binary',
                             '3': 'OnOffPeriod',
                             '4': 'OnOffCycles',
                             '16': 'LowPower' } },
                       '2': { name: 'Value', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 1,
                    lengthmask: 31,
                    shifter: 0 } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Indicator Supported Get',
              param: 
               { '0': 
                  { name: 'IndicatorId',
                    type: 'CONST',
                    const: 
                     { '0': 'NA',
                       '1': 'Armed',
                       '2': 'NotArmed',
                       '3': 'Ready',
                       '4': 'Fault',
                       '5': 'Busy',
                       '6': 'EnterId',
                       '7': 'EnterPin',
                       '8': 'Ok',
                       '9': 'NotOk',
                       '32': 'Zone1Armed',
                       '33': 'Zone2Armed',
                       '34': 'Zone3Armed',
                       '35': 'Zone4Armed',
                       '36': 'Zone5Armed',
                       '37': 'Zone6Armed',
                       '48': 'LcdBacklight',
                       '64': 'ButtonBacklightLetters',
                       '65': 'ButtonBacklightDigits',
                       '66': 'ButtonBacklightCommand',
                       '67': 'Button1Indication',
                       '68': 'Button2Indication',
                       '69': 'Button3Indication',
                       '70': 'Button4Indication',
                       '71': 'Button5Indication',
                       '72': 'Button6Indication',
                       '73': 'Button7Indication',
                       '74': 'Button8Indication',
                       '75': 'Button9Indication',
                       '76': 'Button10Indication',
                       '77': 'Button11Indication',
                       '78': 'Button12Indication',
                       '240': 'Buzzer' } } } },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Indicator Supported Report',
              param: 
               { '0': 
                  { name: 'IndicatorId',
                    type: 'CONST',
                    const: 
                     { '0': 'NA',
                       '1': 'Armed',
                       '2': 'NotArmed',
                       '3': 'Ready',
                       '4': 'Fault',
                       '5': 'Busy',
                       '6': 'EnterId',
                       '7': 'EnterPin',
                       '8': 'Ok',
                       '9': 'NotOk',
                       '32': 'Zone1Armed',
                       '33': 'Zone2Armed',
                       '34': 'Zone3Armed',
                       '35': 'Zone4Armed',
                       '36': 'Zone5Armed',
                       '37': 'Zone6Armed',
                       '48': 'LcdBacklight',
                       '64': 'ButtonBacklightLetters',
                       '65': 'ButtonBacklightDigits',
                       '66': 'ButtonBacklightCommand',
                       '67': 'Button1Indication',
                       '68': 'Button2Indication',
                       '69': 'Button3Indication',
                       '70': 'Button4Indication',
                       '71': 'Button5Indication',
                       '72': 'Button6Indication',
                       '73': 'Button7Indication',
                       '74': 'Button8Indication',
                       '75': 'Button9Indication',
                       '76': 'Button10Indication',
                       '77': 'Button11Indication',
                       '78': 'Button12Indication',
                       '240': 'Buzzer' } },
                 '1': 
                  { name: 'NextIndicatorId',
                    type: 'CONST',
                    const: 
                     { '0': 'NA',
                       '1': 'Armed',
                       '2': 'NotArmed',
                       '3': 'Ready',
                       '4': 'Fault',
                       '5': 'Busy',
                       '6': 'EnterId',
                       '7': 'EnterPin',
                       '8': 'Ok',
                       '9': 'NotOk',
                       '32': 'Zone1Armed',
                       '33': 'Zone2Armed',
                       '34': 'Zone3Armed',
                       '35': 'Zone4Armed',
                       '36': 'Zone5Armed',
                       '37': 'Zone6Armed',
                       '48': 'LcdBacklight',
                       '64': 'ButtonBacklightLetters',
                       '65': 'ButtonBacklightDigits',
                       '66': 'ButtonBacklightCommand',
                       '67': 'Button1Indication',
                       '68': 'Button2Indication',
                       '69': 'Button3Indication',
                       '70': 'Button4Indication',
                       '71': 'Button5Indication',
                       '72': 'Button6Indication',
                       '73': 'Button7Indication',
                       '74': 'Button8Indication',
                       '75': 'Button9Indication',
                       '76': 'Button10Indication',
                       '77': 'Button11Indication',
                       '78': 'Button12Indication',
                       '240': 'Buzzer' } },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'PropertySupportedBitMaskLength', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '3': 
                  { name: 'PropertySupportedBitMask',
                    type: 'BITMASK',
                    bitflag: 
                     { '1': 'Multilevel',
                       '2': 'Binary',
                       '3': 'OnOffPeriod',
                       '4': 'OnOffCycles',
                       '16': 'LowPower' },
                    lengthoffset: 2,
                    lengthmask: 31,
                    shifter: 0 } } } } },
     '0x88-V1': 
      { version: 1,
        name: 'PROPRIETARY',
        help: 'Command Class Proprietary',
        comment: '[DEPRECATED]',
        id: 136,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Proprietary Set',
              param: 
               { '0': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Proprietary Get',
              param: 
               { '0': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '3': 
            { name: 'REPORT',
              help: 'Proprietary Report',
              param: 
               { '0': 
                  { name: 'Data',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x89-V1': 
      { version: 1,
        name: 'LANGUAGE',
        help: 'Command Class Language',
        id: 137,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Language Set',
              param: 
               { '0': { name: 'Language', type: 'BIT_24', showhex: true },
                 '1': { name: 'Country', type: 'WORD', showhex: true } } },
           '2': { name: 'GET', help: 'Language Get' },
           '3': 
            { name: 'REPORT',
              help: 'Language Report',
              param: 
               { '0': { name: 'Language', type: 'BIT_24', showhex: true },
                 '1': { name: 'Country', type: 'WORD', showhex: true } } } } },
     '0x8a-V1': 
      { version: 1,
        name: 'TIME',
        help: 'Command Class Time',
        id: 138,
        COMMAND: 
         { '1': { name: 'GET', help: 'Time Get' },
           '2': 
            { name: 'REPORT',
              help: 'Time Report',
              param: 
               { '0': 
                  { name: 'HourLocalTime',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'HourLocalTime', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'RtcFailure' } },
                 '1': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '2': { name: 'SecondLocalTime', type: 'BYTE', showhex: true } } },
           '3': { name: 'DATE_GET', help: 'Date Get' },
           '4': 
            { name: 'DATE_REPORT',
              help: 'Date Report',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true } } } } },
     '0x8a-V2': 
      { version: 2,
        name: 'TIME',
        help: 'Command Class Time',
        id: 138,
        COMMAND: 
         { '1': { name: 'GET', help: 'Time Get' },
           '2': 
            { name: 'REPORT',
              help: 'Time Report',
              param: 
               { '0': 
                  { name: 'HourLocalTime',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'HourLocalTime', shifter: 0 },
                       '96': { fieldname: 'Reserved', shifter: 5 } },
                    bitflag: { '128': 'RtcFailure' } },
                 '1': { name: 'MinuteLocalTime', type: 'BYTE', showhex: true },
                 '2': { name: 'SecondLocalTime', type: 'BYTE', showhex: true } } },
           '3': { name: 'DATE_GET', help: 'Date Get' },
           '4': 
            { name: 'DATE_REPORT',
              help: 'Date Report',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'OFFSET_SET',
              help: 'Time Offset Set',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'HourTzo', shifter: 0 } },
                    bitflag: { '128': 'SignTzo' } },
                 '1': { name: 'MinuteTzo', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'MinuteOffsetDst', shifter: 0 } },
                    bitflag: { '128': 'SignOffsetDst' } },
                 '3': { name: 'MonthStartDst', type: 'BYTE', showhex: true },
                 '4': { name: 'DayStartDst', type: 'BYTE', showhex: true },
                 '5': { name: 'HourStartDst', type: 'BYTE', showhex: true },
                 '6': { name: 'MonthEndDst', type: 'BYTE', showhex: true },
                 '7': { name: 'DayEndDst', type: 'BYTE', showhex: true },
                 '8': { name: 'HourEndDst', type: 'BYTE', showhex: true } } },
           '6': { name: 'OFFSET_GET', help: 'Time Offset Get' },
           '7': 
            { name: 'OFFSET_REPORT',
              help: 'Time Offset Report',
              param: 
               { '0': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'HourTzo', shifter: 0 } },
                    bitflag: { '128': 'SignTzo' } },
                 '1': { name: 'MinuteTzo', type: 'BYTE', showhex: true },
                 '2': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'MinuteOffsetDst', shifter: 0 } },
                    bitflag: { '128': 'SignOffsetDst' } },
                 '3': { name: 'MonthStartDst', type: 'BYTE', showhex: true },
                 '4': { name: 'DayStartDst', type: 'BYTE', showhex: true },
                 '5': { name: 'HourStartDst', type: 'BYTE', showhex: true },
                 '6': { name: 'MonthEndDst', type: 'BYTE', showhex: true },
                 '7': { name: 'DayEndDst', type: 'BYTE', showhex: true },
                 '8': { name: 'HourEndDst', type: 'BYTE', showhex: true } } } } },
     '0x8b-V1': 
      { version: 1,
        name: 'TIME_PARAMETERS',
        help: 'Command Class Time Parameters',
        id: 139,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Time Parameters Set',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourUtc', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteUtc', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondUtc', type: 'BYTE', showhex: true } } },
           '2': { name: 'GET', help: 'Time Parameters Get' },
           '3': 
            { name: 'REPORT',
              help: 'Time Parameters Report',
              param: 
               { '0': { name: 'Year', type: 'WORD', showhex: true },
                 '1': { name: 'Month', type: 'BYTE', showhex: true },
                 '2': { name: 'Day', type: 'BYTE', showhex: true },
                 '3': { name: 'HourUtc', type: 'BYTE', showhex: true },
                 '4': { name: 'MinuteUtc', type: 'BYTE', showhex: true },
                 '5': { name: 'SecondUtc', type: 'BYTE', showhex: true } } } } },
     '0x8c-V1': 
      { version: 1,
        name: 'GEOGRAPHIC_LOCATION',
        help: 'Command Class Geographic Location',
        id: 140,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Geographic Location Set',
              param: 
               { '0': { name: 'LongitudeDegrees', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'LongitudeMinutes', shifter: 0 } },
                    bitflag: { '128': 'LongSign' } },
                 '2': { name: 'LatitudeDegrees', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'LatitudeMinutes', shifter: 0 } },
                    bitflag: { '128': 'LatSign' } } } },
           '2': { name: 'GET', help: 'Geographic Location Get' },
           '3': 
            { name: 'REPORT',
              help: 'Geographic Location Report',
              param: 
               { '0': { name: 'LongitudeDegrees', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'LongitudeMinutes', shifter: 0 } },
                    bitflag: { '128': 'LongSign' } },
                 '2': { name: 'LatitudeDegrees', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'Level2',
                    type: 'STRUCT_BYTE',
                    bitfield: { '127': { fieldname: 'LatitudeMinutes', shifter: 0 } },
                    bitflag: { '128': 'LatSign' } } } } } },
     '0x8e-V1': 
      { version: 1,
        name: 'MULTI_INSTANCE_ASSOCIATION',
        help: 'Command Class Multi Instance Association',
        comment: '[OBSOLETED]',
        id: 142,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Multi Instance Association Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': { name: 'Instance', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Multi Instance Association Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Multi Instance Association Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'MaxNodesSupported', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '4': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '5': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': { name: 'Instance', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '4': 
            { name: 'REMOVE',
              help: 'Multi Instance Association Remove',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': { name: 'Instance', type: 'BYTE', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } },
           '5': 
            { name: 'GROUPINGS_GET',
              help: 'Multi Instance Association Groupings Get' },
           '6': 
            { name: 'GROUPINGS_REPORT',
              help: 'Multi Instance Association Groupings Report',
              param: { '0': { name: 'SupportedGroupings', type: 'BYTE', showhex: true } } } } },
     '0x8e-V2': 
      { version: 2,
        name: 'MULTI_CHANNEL_ASSOCIATION',
        help: 'Command Class Multi Channel Association',
        id: 142,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Multi Channel Association Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'BitAddress' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Multi Channel Association Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Multi Channel Association Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'MaxNodesSupported', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '4': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '5': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'BitAddress' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'REMOVE',
              help: 'Multi Channel Association Remove',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'BitAddress' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': 
            { name: 'GROUPINGS_GET',
              help: 'Multi Channel Association Groupings Get' },
           '6': 
            { name: 'GROUPINGS_REPORT',
              help: 'Multi Channel Association Groupings Report',
              param: { '0': { name: 'SupportedGroupings', type: 'BYTE', showhex: true } } } } },
     '0x8e-V3': 
      { version: 3,
        name: 'MULTI_CHANNEL_ASSOCIATION',
        help: 'Command Class Multi Channel Association',
        id: 142,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Multi Channel Association Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'BitAddress' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': 
            { name: 'GET',
              help: 'Multi Channel Association Get',
              param: { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true } } },
           '3': 
            { name: 'REPORT',
              help: 'Multi Channel Association Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': { name: 'MaxNodesSupported', type: 'BYTE', showhex: true },
                 '2': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '4': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '5': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'BitAddress' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'REMOVE',
              help: 'Multi Channel Association Remove',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'VARIANT',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Marker',
                    type: 'MARKER',
                    comment: 'This marker identifier is used to separate between nodes without and with end points attached. This field can be omitted in case no Multi Channel node follows.',
                    const: { '0': 'Marker' } },
                 '3': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'zwave.NodeId',
                          type: 'BYTE',
                          encaptype: 'NODE_NUMBER',
                          alias: 'zwaveNodeId',
                          showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '127': { fieldname: 'EndPoint', shifter: 0 } },
                          bitflag: { '128': 'BitAddress' } } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '5': 
            { name: 'GROUPINGS_GET',
              help: 'Multi Channel Association Groupings Get' },
           '6': 
            { name: 'GROUPINGS_REPORT',
              help: 'Multi Channel Association Groupings Report',
              param: { '0': { name: 'SupportedGroupings', type: 'BYTE', showhex: true } } } } },
     '0x8f-V1': 
      { version: 1,
        name: 'MULTI_CMD',
        help: 'Command Class Multi Cmd',
        id: 143,
        COMMAND: 
         { '1': 
            { name: 'ENCAP',
              help: 'Multi Cmd Encap',
              param: 
               { '0': { name: 'NumberOfCommands', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'EncapsulatedCommand',
                    param: 
                     { '0': { name: 'CommandLength', type: 'BYTE', showhex: false },
                       '1': 
                        { name: 'zwave.CommandClass',
                          type: 'BYTE',
                          encaptype: 'CMD_CLASS_REF',
                          alias: 'zwaveCommandClass',
                          showhex: false },
                       '2': 
                        { name: 'zwave.Command',
                          type: 'BYTE',
                          encaptype: 'CMD_REF',
                          alias: 'zwaveCommand',
                          showhex: false },
                       '3': 
                        { name: 'zwave.Payload',
                          type: 'VARIANT',
                          encaptype: 'CMD_DATA',
                          alias: 'zwavePayload',
                          sizechange: -2,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x90-V1': 
      { version: 1,
        name: 'ENERGY_PRODUCTION',
        help: 'Command Class Energy Production',
        id: 144,
        COMMAND: 
         { '2': 
            { name: 'GET',
              help: 'Energy Production Get',
              param: 
               { '0': 
                  { name: 'ParameterNumber',
                    type: 'CONST',
                    const: 
                     { '0': 'InstantEnergyProduction',
                       '1': 'TotalEnergyProduction',
                       '2': 'EnergyProductionToday',
                       '3': 'TotalProductionTime' } } } },
           '3': 
            { name: 'REPORT',
              help: 'Energy Production Report',
              param: 
               { '0': 
                  { name: 'ParameterNumber',
                    type: 'CONST',
                    const: 
                     { '0': 'InstantEnergyProduction',
                       '1': 'TotalEnergyProduction',
                       '2': 'EnergyProductionToday',
                       '3': 'TotalProductionTime' } },
                 '1': 
                  { name: 'Level',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'Value',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x91-V1': 
      { version: 1,
        name: 'MANUFACTURER_PROPRIETARY',
        help: 'Command Class Manufacturer Proprietary',
        id: 145 },
     '0x92-V1': 
      { version: 1,
        name: 'SCREEN_MD',
        help: 'Command Class Screen Md',
        id: 146,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Screen Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '2': 
            { name: 'REPORT',
              help: 'Screen Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '56': { fieldname: 'ScreenSettings', shifter: 3 } },
                    bitflag: { '64': 'Reserved', '128': 'MoreData' } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '15': { fieldname: 'LineNumber', shifter: 0 },
                             '224': { fieldname: 'LineSettings', shifter: 5 } },
                          bitflag: { '16': 'Clear' } },
                       '1': { name: 'CharacterPosition', type: 'BYTE', showhex: true },
                       '2': { name: 'NumberOfCharacters', type: 'BYTE', showhex: true },
                       '3': 
                        { name: 'Character',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 2,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x92-V2': 
      { version: 2,
        name: 'SCREEN_MD',
        help: 'Command Class Screen Md',
        id: 146,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Screen Md Get',
              param: 
               { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '3': 
            { name: 'REPORT',
              help: 'Screen Md Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'CharPresentation', shifter: 0 },
                       '56': { fieldname: 'ScreenSettings', shifter: 3 } },
                    bitflag: { '64': 'Reserved1', '128': 'MoreData' } },
                 '1': 
                  { name: 'VariableGroup',
                    param: 
                     { '0': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: 
                           { '15': { fieldname: 'LineNumber', shifter: 0 },
                             '224': { fieldname: 'LineSettings', shifter: 5 } },
                          bitflag: { '16': 'Clear' } },
                       '1': { name: 'CharacterPosition', type: 'BYTE', showhex: true },
                       '2': { name: 'NumberOfCharacters', type: 'BYTE', showhex: true },
                       '3': 
                        { name: 'Character',
                          type: 'VARIANT',
                          showhex: true,
                          lengthoffset: 2,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'ScreenTimeout' },
                    bitfield: { '254': { fieldname: 'Reserved2', shifter: 1 } } } } } } },
     '0x93-V1': 
      { version: 1,
        name: 'SCREEN_ATTRIBUTES',
        help: 'Command Class Screen Attributes',
        id: 147,
        COMMAND: 
         { '1': { name: 'GET', help: 'Screen Attributes Get' },
           '2': 
            { name: 'REPORT',
              help: 'Screen Attributes Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfLines', shifter: 0 },
                       '224': { fieldname: 'Reserved', shifter: 5 } } },
                 '1': 
                  { name: 'NumberOfCharactersPerLine',
                    type: 'BYTE',
                    showhex: true },
                 '2': { name: 'SizeOfLineBuffer', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NumericalPresentationOfaCharacter',
                    type: 'BYTE',
                    showhex: true } } } } },
     '0x93-V2': 
      { version: 2,
        name: 'SCREEN_ATTRIBUTES',
        help: 'Command Class Screen Attributes',
        id: 147,
        COMMAND: 
         { '1': { name: 'GET', help: 'Screen Attributes Get' },
           '3': 
            { name: 'REPORT',
              help: 'Screen Attributes Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '31': { fieldname: 'NumberOfLines', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } },
                    bitflag: { '32': 'EscapeSequence' } },
                 '1': 
                  { name: 'NumberOfCharactersPerLine',
                    type: 'BYTE',
                    showhex: true },
                 '2': { name: 'SizeOfLineBuffer', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'NumericalPresentationOfaCharacter',
                    type: 'BYTE',
                    showhex: true },
                 '4': { name: 'ScreenTimeout', type: 'BYTE', showhex: true } } } } },
     '0x94-V1': 
      { version: 1,
        name: 'SIMPLE_AV_CONTROL',
        help: 'Command Class Simple Av Control',
        id: 148,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Simple Av Control Set',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'KeyAttributes', shifter: 0 },
                       '248': { fieldname: 'Reserved', shifter: 3 } } },
                 '2': { name: 'ItemId', type: 'WORD', showhex: true },
                 '3': 
                  { name: 'VariableGroup',
                    param: { '0': { name: 'Command', type: 'WORD', showhex: true } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '2': { name: 'GET', help: 'Simple Av Control Get' },
           '3': 
            { name: 'REPORT',
              help: 'Simple Av Control Report',
              param: { '0': { name: 'NumberOfReports', type: 'BYTE', showhex: true } } },
           '4': 
            { name: 'SUPPORTED_GET',
              help: 'Simple Av Control Supported Get',
              param: { '0': { name: 'ReportNo', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'SUPPORTED_REPORT',
              help: 'Simple Av Control Supported Report',
              param: 
               { '0': { name: 'ReportNo', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x95-V1': 
      { version: 1,
        name: 'AV_CONTENT_DIRECTORY_MD',
        help: 'Command Class Av Content Directory Md',
        id: 149,
        COMMAND: 
         { '1': 
            { name: 'AV_CONTENT_BROWSE_MD_GET',
              help: 'Av Content Browse Md Get' },
           '2': 
            { name: 'AV_CONTENT_BROWSE_MD_REPORT',
              help: 'Av Content Browse Md Report' },
           '3': 
            { name: 'AV_CONTENT_BROWSE_MD_BY_LETTER_GET',
              help: 'Av Content Browse Md By Letter Get' },
           '4': 
            { name: 'AV_CONTENT_BROWSE_MD_BY_LETTER_REPORT',
              help: 'Av Content Browse Md By Letter Report' },
           '5': 
            { name: 'AV_CONTENT_BROWSE_MD_CHILD_COUNT_GET',
              help: 'Av Content Browse Md Child Count Get' },
           '6': 
            { name: 'AV_CONTENT_BROWSE_MD_CHILD_COUNT_REPORT',
              help: 'Av Content Browse Md Child Count Report' },
           '7': 
            { name: 'AV_MATCH_ITEM_TO_RENDERER_MD_GET',
              help: 'Av Match Item To Renderer Md Get' },
           '8': 
            { name: 'AV_MATCH_ITEM_TO_RENDERER_MD_REPORT',
              help: 'Av Match Item To Renderer Md Report' } } },
     '0x96-V1': 
      { version: 1,
        name: 'AV_RENDERER_STATUS',
        help: 'Command Class Av Renderer Status',
        id: 150,
        COMMAND: 
         { '1': { name: 'GET', help: 'Av Renderer Status Get' },
           '2': { name: 'REPORT', help: 'Av Renderer Status Report' } } },
     '0x97-V1': 
      { version: 1,
        name: 'AV_CONTENT_SEARCH_MD',
        help: 'Command Class Av Content Search Md',
        id: 151,
        COMMAND: 
         { '1': { name: 'GET', help: 'Av Content Search Md Get' },
           '2': { name: 'REPORT', help: 'Av Content Search Md Report' } } },
     '0x98-V1': 
      { version: 1,
        name: 'SECURITY',
        help: 'Command Class Security',
        id: 152,
        COMMAND: 
         { '2': 
            { name: 'COMMANDS_SUPPORTED_GET',
              help: 'Security Commands Supported Get' },
           '3': 
            { name: 'COMMANDS_SUPPORTED_REPORT',
              help: 'Security Commands Supported Report',
              param: 
               { '0': { name: 'ReportsToFollow', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'CommandClassSupport',
                    type: 'VARIANT',
                    encaptype: 'CMD_CLASS_REF',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '2': 
                  { name: 'Mark',
                    type: 'MARKER',
                    comment: 'The COMMAND_CLASS_MARK is used to indicate that all preceding command classes are supported and all following command classes are controlled.',
                    const: { '239': 'Mark' } },
                 '3': 
                  { name: 'CommandClassControl',
                    type: 'VARIANT',
                    encaptype: 'CMD_CLASS_REF',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'SCHEME_GET',
              help: 'Security Scheme Get',
              param: { '0': { name: 'SupportedSecuritySchemes', type: 'BYTE', showhex: true } } },
           '5': 
            { name: 'SCHEME_REPORT',
              help: 'Security Scheme Report',
              param: { '0': { name: 'SupportedSecuritySchemes', type: 'BYTE', showhex: true } } },
           '6': 
            { name: 'NETWORK_KEY_SET',
              help: 'Network Key Set',
              param: 
               { '0': 
                  { name: 'NetworkKeyByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '7': { name: 'NETWORK_KEY_VERIFY', help: 'Network Key Verify' },
           '8': 
            { name: 'SCHEME_INHERIT',
              help: 'Security Scheme Inherit',
              param: { '0': { name: 'SupportedSecuritySchemes', type: 'BYTE', showhex: true } } },
           '64': { name: 'NONCE_GET', help: 'Security Nonce Get' },
           '128': 
            { name: 'NONCE_REPORT',
              help: 'Security Nonce Report',
              param: 
               { '0': 
                  { name: 'NonceByte',
                    type: 'ARRAY',
                    len: 8,
                    is_ascii: false,
                    showhex: true } } },
           '129': 
            { name: 'MESSAGE_ENCAPSULATION',
              help: 'Security Message Encapsulation',
              param: 
               { '0': 
                  { name: 'InitializationVectorByte',
                    type: 'ARRAY',
                    len: 8,
                    is_ascii: false,
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'SequenceCounter', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } },
                    bitflag: { '16': 'Sequenced', '32': 'SecondFrame' } },
                 '4': 
                  { name: 'CommandByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '5': { name: 'ReceiversNonceIdentifier', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'MessageAuthenticationCodeByte',
                    type: 'ARRAY',
                    len: 8,
                    is_ascii: false,
                    showhex: true } } },
           '193': 
            { name: 'MESSAGE_ENCAPSULATION_NONCE_GET',
              help: 'Security Message Encapsulation Nonce Get',
              param: 
               { '0': 
                  { name: 'InitializationVectorByte',
                    type: 'ARRAY',
                    len: 8,
                    is_ascii: false,
                    showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'SequenceCounter', shifter: 0 },
                       '192': { fieldname: 'Reserved', shifter: 6 } },
                    bitflag: { '16': 'Sequenced', '32': 'SecondFrame' } },
                 '4': 
                  { name: 'CommandByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '5': { name: 'ReceiversNonceIdentifier', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'MessageAuthenticationCodeByte',
                    type: 'ARRAY',
                    len: 8,
                    is_ascii: false,
                    showhex: true } } } } },
     '0x99-V1': 
      { version: 1,
        name: 'AV_TAGGING_MD',
        help: 'Command Class Av Tagging Md',
        id: 153,
        COMMAND: 
         { '1': { name: 'GET', help: 'Av Tagging Md Get' },
           '2': { name: 'REPORT', help: 'Av Tagging Md Report' } } },
     '0x9a-V1': 
      { version: 1,
        name: 'IP_CONFIGURATION',
        help: 'Command Class Ip Configuration',
        comment: '[OBSOLETED]',
        id: 154,
        COMMAND: 
         { '1': 
            { name: 'SET',
              help: 'Ip Configuration Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'AutoDns', '2': 'AutoIp' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': { name: 'IpAddress', type: 'DWORD', showhex: true },
                 '2': { name: 'SubnetMask', type: 'DWORD', showhex: true },
                 '3': { name: 'Gateway', type: 'DWORD', showhex: true },
                 '4': { name: 'DNS1', type: 'DWORD', showhex: true },
                 '5': { name: 'DNS2', type: 'DWORD', showhex: true } } },
           '2': { name: 'GET', help: 'Ip Configuration Get' },
           '3': 
            { name: 'REPORT',
              help: 'Ip Configuration Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'AutoDns', '2': 'AutoIp' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': { name: 'IpAddress', type: 'DWORD', showhex: true },
                 '2': { name: 'SubnetMask', type: 'DWORD', showhex: true },
                 '3': { name: 'Gateway', type: 'DWORD', showhex: true },
                 '4': { name: 'DNS1', type: 'DWORD', showhex: true },
                 '5': { name: 'DNS2', type: 'DWORD', showhex: true },
                 '6': { name: 'LeaseTime', type: 'DWORD', showhex: true } } },
           '4': { name: 'RELEASE', help: 'Ip Configuration Release' },
           '5': { name: 'RENEW', help: 'Ip Configuration Renew' } } },
     '0x9b-V1': 
      { version: 1,
        name: 'ASSOCIATION_COMMAND_CONFIGURATION',
        help: 'Command Class Association Command Configuration',
        id: 155,
        COMMAND: 
         { '1': 
            { name: 'COMMAND_RECORDS_SUPPORTED_GET',
              help: 'Command Records Supported Get' },
           '2': 
            { name: 'COMMAND_RECORDS_SUPPORTED_REPORT',
              help: 'Command Records Supported Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'ConfCmd', '2': 'VC' },
                    bitfield: { '252': { fieldname: 'MaxCommandLength', shifter: 2 } } },
                 '1': { name: 'FreeCommandRecords', type: 'WORD', showhex: true },
                 '2': { name: 'MaxCommandRecords', type: 'WORD', showhex: true } } },
           '3': 
            { name: 'COMMAND_CONFIGURATION_SET',
              help: 'Command Configuration Set',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': { name: 'CommandLength', type: 'BYTE', showhex: true },
                 '3': { name: 'CommandClassIdentifier', type: 'BYTE', showhex: true },
                 '4': { name: 'CommandIdentifier', type: 'BYTE', showhex: true },
                 '5': 
                  { name: 'CommandByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': 
            { name: 'COMMAND_CONFIGURATION_GET',
              help: 'Command Configuration Get',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false } } },
           '5': 
            { name: 'COMMAND_CONFIGURATION_REPORT',
              help: 'Command Configuration Report',
              param: 
               { '0': { name: 'GroupingIdentifier', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '2': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '15': { fieldname: 'ReportsToFollow', shifter: 0 },
                       '112': { fieldname: 'Reserved', shifter: 4 } },
                    bitflag: { '128': 'First' } },
                 '3': { name: 'CommandLength', type: 'BYTE', showhex: true },
                 '4': { name: 'CommandClassIdentifier', type: 'BYTE', showhex: true },
                 '5': { name: 'CommandIdentifier', type: 'BYTE', showhex: true },
                 '6': 
                  { name: 'CommandByte',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } } } },
     '0x9c-V1': 
      { version: 1,
        name: 'SENSOR_ALARM',
        help: 'Command Class Sensor Alarm',
        comment: 'SDS10963-4 The Sensor Alarm command class can be used to realize Sensor Alarms.',
        id: 156,
        COMMAND: 
         { '1': 
            { name: 'GET',
              help: 'Sensor Alarm Get',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'GeneralPurposeAlarm',
                       '1': 'SmokeAlarm',
                       '2': 'CoAlarm',
                       '3': 'Co2Alarm',
                       '4': 'HeatAlarm',
                       '5': 'WaterLeakAlarm',
                       '255': 'ReturnFirstAlarmOnSupportedList' } } } },
           '2': 
            { name: 'REPORT',
              help: 'Sensor Alarm Report',
              param: 
               { '0': 
                  { name: 'zwave.NodeId',
                    type: 'BYTE',
                    encaptype: 'NODE_NUMBER',
                    alias: 'zwaveNodeId',
                    showhex: false },
                 '1': 
                  { name: 'SensorType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'GeneralPurposeAlarm',
                       '1': 'SmokeAlarm',
                       '2': 'CoAlarm',
                       '3': 'Co2Alarm',
                       '4': 'HeatAlarm',
                       '5': 'WaterLeakAlarm',
                       '255': 'ReturnFirstAlarmOnSupportedList' } },
                 '2': 
                  { name: 'SensorState',
                    type: 'CONST',
                    showhex: true,
                    const: { '0': 'NoAlarm', '255': 'Alarm' } },
                 '3': { name: 'Seconds', type: 'WORD', showhex: true } } },
           '3': { name: 'SUPPORTED_GET', help: 'Sensor Alarm Supported Get' },
           '4': 
            { name: 'SUPPORTED_REPORT',
              help: 'Sensor Alarm Supported Report',
              param: 
               { '0': { name: 'NumberOfBitMasks', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    showhex: true,
                    lengthoffset: 0,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x9d-V1': 
      { version: 1,
        name: 'SILENCE_ALARM',
        help: 'Command Class Silence Alarm',
        comment: 'SDS10963-4 The Alarm Silence command class can be used to nuisance silence to temporarily disable the sounding',
        id: 157,
        COMMAND: 
         { '1': 
            { name: 'SENSOR_ALARM_SET',
              help: 'Sensor Alarm Set',
              param: 
               { '0': 
                  { name: 'Mode',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'DisableSoundingOfAllSensorAlarms',
                       '1': 'DisableSoundingOfAllSensorAlarmsIndependentOfBitMaskWhichHaveReceivedTheAlarm',
                       '2': 'DisableSoundingOfAllSensorAlarmsAccordingToBitMask',
                       '3': 'DisableSoundingOfAllSensorAlarmsAccordingToBitMaskWhichHaveReceivedTheAlarm' } },
                 '1': { name: 'Seconds', type: 'WORD', showhex: true },
                 '2': { name: 'NumberOfBitMasks', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'BitMask',
                    type: 'BITMASK',
                    showhex: true,
                    lengthoffset: 2,
                    lengthmask: 255,
                    shifter: 0 } } } } },
     '0x9e-V1': 
      { version: 1,
        name: 'SENSOR_CONFIGURATION',
        help: 'Command Class Sensor Configuration',
        comment: '[OBSOLETED]',
        id: 158,
        COMMAND: 
         { '1': 
            { name: 'SENSOR_TRIGGER_LEVEL_SET',
              help: 'Sensor Trigger Level Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: { '63': { fieldname: 'Reserved', shifter: 0 } },
                    bitflag: { '64': 'Current', '128': 'Default' } },
                 '1': 
                  { name: 'SensorType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'Temperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'RelativeHumidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel' } },
                 '2': 
                  { name: 'Properties2',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '3': 
                  { name: 'TriggerValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 2,
                    lengthmask: 7,
                    shifter: 0 } } },
           '2': 
            { name: 'SENSOR_TRIGGER_LEVEL_GET',
              help: 'Sensor Trigger Level Get' },
           '3': 
            { name: 'SENSOR_TRIGGER_LEVEL_REPORT',
              help: 'Sensor Trigger Level Report',
              param: 
               { '0': 
                  { name: 'SensorType',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '1': 'Temperature',
                       '2': 'GeneralPurposeValue',
                       '3': 'Luminance',
                       '4': 'Power',
                       '5': 'RelativeHumidity',
                       '6': 'Velocity',
                       '7': 'Direction',
                       '8': 'AtmosphericPressure',
                       '9': 'BarometricPressure',
                       '10': 'SolarRadiation',
                       '11': 'DewPoint',
                       '12': 'RainRate',
                       '13': 'TideLevel' } },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitfield: 
                     { '7': { fieldname: 'Size', shifter: 0 },
                       '24': { fieldname: 'Scale', shifter: 3 },
                       '224': { fieldname: 'Precision', shifter: 5 } } },
                 '2': 
                  { name: 'TriggerValue',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 1,
                    lengthmask: 7,
                    shifter: 0 } } } } },
     '0x9f-V1': 
      { version: 1,
        name: 'SECURITY_2',
        help: 'Command Class Security 2',
        id: 159,
        COMMAND: 
         { '1': 
            { name: 'NONCE_GET',
              help: 'S2 Nonce Get',
              param: { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true } } },
           '2': 
            { name: 'NONCE_REPORT',
              help: 'S2 Nonce Report',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'SOS', '2': 'MOS' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '2': 
                  { name: 'ReceiversEntropyInput',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } },
           '3': 
            { name: 'MESSAGE_ENCAPSULATION',
              help: 'S2 Message Encapsulation',
              param: 
               { '0': { name: 'SequenceNumber', type: 'BYTE', showhex: true },
                 '1': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Extension', '2': 'EncryptedExtension' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '2': 
                  { name: 'VariableGroup',
                    optionaloffs: 1,
                    optionalmask: 1,
                    moretofollowoffs: 1,
                    moretofollowmask: 128,
                    param: 
                     { '0': { name: 'ExtensionLength', type: 'BYTE', showhex: false },
                       '1': 
                        { name: 'Properties1',
                          type: 'STRUCT_BYTE',
                          bitfield: { '63': { fieldname: 'Type', shifter: 0 } },
                          bitflag: { '64': 'Critical', '128': 'MoreToFollow' } },
                       '2': 
                        { name: 'Extension',
                          type: 'VARIANT',
                          showhex: true,
                          sizechange: -2,
                          lengthoffset: 0,
                          lengthmask: 255,
                          shifter: 0 } },
                    type: 'VARIANT_GROUP',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 },
                 '3': 
                  { name: 'CcmCiphertextObject',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '4': { name: 'KEX_GET', help: 'KEX Get' },
           '5': 
            { name: 'KEX_REPORT',
              help: 'KEX Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Echo', '2': 'RequestCsa' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': { name: 'SupportedKexSchemes', type: 'BYTE', showhex: true },
                 '2': { name: 'SupportedEcdhProfiles', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'RequestedKeys',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Unauthenticated',
                       '1': 'Authenticated',
                       '2': 'Access',
                       '7': 'S0' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '6': 
            { name: 'KEX_SET',
              help: 'KEX Set',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'Echo', '2': 'RequestCsa' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } },
                 '1': { name: 'SelectedKexScheme', type: 'BYTE', showhex: true },
                 '2': { name: 'SelectedEcdhProfile', type: 'BYTE', showhex: true },
                 '3': 
                  { name: 'GrantedKeys',
                    type: 'BITMASK',
                    bitflag: 
                     { '0': 'Unauthenticated',
                       '1': 'Authenticated',
                       '2': 'Access',
                       '7': 'S0' },
                    len: 1,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '7': 
            { name: 'KEX_FAIL',
              help: 'KEX Fail',
              param: 
               { '0': 
                  { name: 'KexFailType',
                    type: 'CONST',
                    const: 
                     { '1': 'KexKey',
                       '2': 'KexScheme',
                       '3': 'KexCurves',
                       '5': 'Decrypt',
                       '6': 'Cancel',
                       '7': 'Auth',
                       '8': 'KeyGet',
                       '9': 'KeyVerify',
                       '10': 'KeyReport' } } } },
           '8': 
            { name: 'PUBLIC_KEY_REPORT',
              help: 'Public Key Report',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'IncludingNode' },
                    bitfield: { '254': { fieldname: 'Reserved', shifter: 1 } } },
                 '1': 
                  { name: 'EcdhPublicKey',
                    type: 'VARIANT',
                    showhex: true,
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '9': 
            { name: 'NETWORK_KEY_GET',
              help: 'S2 Network Key Get',
              param: 
               { '0': 
                  { name: 'RequestedKey',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'Unauthenticated',
                       '1': 'Authenticated',
                       '2': 'Access',
                       '7': 'S0' } } } },
           '10': 
            { name: 'NETWORK_KEY_REPORT',
              help: 'S2 Network Key Report',
              param: 
               { '0': 
                  { name: 'GrantedKey',
                    type: 'CONST',
                    showhex: true,
                    const: 
                     { '0': 'Unauthenticated',
                       '1': 'Authenticated',
                       '2': 'Access',
                       '7': 'S0' } },
                 '1': 
                  { name: 'NetworkKey',
                    type: 'ARRAY',
                    len: 16,
                    is_ascii: false,
                    showhex: true } } },
           '11': { name: 'NETWORK_KEY_VERIFY', help: 'S2 Network Key Verify' },
           '12': 
            { name: 'TRANSFER_END',
              help: 'S2 Transfer End',
              param: 
               { '0': 
                  { name: 'Properties1',
                    type: 'STRUCT_BYTE',
                    bitflag: { '1': 'KeyRequestComplete', '2': 'KeyVerified' },
                    bitfield: { '252': { fieldname: 'Reserved', shifter: 2 } } } } },
           '13': 
            { name: 'COMMANDS_SUPPORTED_GET',
              help: 'S2 Commands Supported Get' },
           '14': 
            { name: 'COMMANDS_SUPPORTED_REPORT',
              help: 'S2 Commands Supported Report',
              param: 
               { '0': 
                  { name: 'zwave.CommandClass',
                    type: 'VARIANT',
                    encaptype: 'CMD_CLASS_REF',
                    alias: 'zwaveCommandClass',
                    lengthoffset: 255,
                    lengthmask: 0,
                    shifter: 0 } } },
           '15': { name: 'CAPABILITIES_GET', help: 'S2 Capabilities Get' },
           '16': 
            { name: 'CAPABILITIES_REPORT',
              help: 'S2 Capabilities Report',
              param: 
               { '0': { name: 'SupportedSpans', type: 'BYTE', showhex: true },
                 '1': { name: 'SupportedMpans', type: 'BYTE', showhex: true } } } } },
     '0xef-V1': { version: 1, name: 'MARK', help: 'Command Class Mark', id: 239 },
     '0xf0-V1': 
      { version: 1,
        name: 'NON_INTEROPERABLE',
        help: 'Command Class Non Interoperable',
        id: 240 } } }