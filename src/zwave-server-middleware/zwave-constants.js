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


module.exports = {
    PROTOCOL: require('../index').PROTOCOL,
    Capabilities: "zwave.Capabilities",
    Version: "zwave.Version",

    RawPayload: "zwave.RawPayload",
    SerialPayload: "zwave.SerialPayload",
    Payload: "zwave.Payload", // CMD_DATA
    NodeId: "zwave.NodeId",  //  NODE_NUMBER 
    CommandClass: "zwave.CommandClass", // CMD_CLASS_REF
    Command: "zwave.Command",  // CMD_REF
    EncapsulatedCommand: "zwave.EncapsulatedCommand", // CMD_ENCAP
    BasicDevice: "zwave.BasicDevice",
    GenericDevice: "zwave.GenericDevice",  // GEN_DEV_REF
    SpecificDevice: "zwave.SpecificDevice", // SPEC_DEV_REF
    OwnNodeId: "zwave.OwnNodeId",
    SupportedCommandClasses: "zwave.SupportedCommandClasses",
    
    FrameType: "zwave.FrameType",
    Length: "zwave.Length",
    MessageType: "zwave.MessageType",
    Checksum: "zwave.Checksum",
    SerialFunctionClass: "zwave.SerialFunction",
    TxStatus: "zwave.TxStatus",
   
    Nodes: "zwave.Nodes",
    Controller: "zwave.Controller",
    ExpectedResponses: "zwave.ExpectedResponses",
    Responses: "zwave.Responses",
    DoNotCache: "zwave.DoNotCache",
    Online: "zwave.Online",
    TxOptions: "zwave.TxOptions",
    CallbackId: "zwave.CallbackId",
    UpdateStatus: "zwave.UpdateStatus",
    NodesAvailable: "zwave.NodesAvailable",
    ProductKey: "zwave.ProductKey",
    
    SERIAL: {

        SerialMessageType: {
            Request: 0x00,
            Response: 0x01
        },

        SerialFrameType: {
            SOF: 0x01,
            ACK: 0x06,
            NAK: 0x15,
            CAN: 0x18
        },

        generateChecksum: function (message) {
            var offset = 1;
            var ret = message[offset];
            for (var i = offset; i < message.length - 2; i++) {
                ret ^= message[i + 1];
            }
            ret = ~ret;

            return ret;
        },
    },

    PLUS: {
        PlusVersion: "zwave.PlusVersion",
        PlusRole: "zwave.PlusRole",
        PlusNodeType: "zwave.PlusNodeType",
        PlusInstallerIcon: "zwave.PlusInstallerIcon",
        PlusDeviceType: "zwave.PlusDeviceType",

        ZwavePlusRoleType: {
            ControllerCentralStatic: 0x00,
            ControllerSubStatic: 0x01,
            ControllerPortable: 0x02,
            ControllerPortableReporting: 0x03,
            SlavePortable: 0x04,
            SlaveAlwaysOn: 0x05,
            SlaveSleepingReporting: 0x06,
            SlaveSleepingReporting: 0x07,
            enum: {
                0x00: { name: 'ControllerCentralStatic' },
                0x01: { name: 'ControllerSubStatic' },
                0x02: { name: 'ControllerPortable' },
                0x03: { name: 'ControllerPortableReporting' },
                0x04: { name: 'SlavePortable' },
                0x05: { name: 'SlaveAlwaysOn' },
                0x06: { name: 'SlaveSleepingReporting' },
                0x07: { name: 'SlaveSleepingReporting' },
            }
        },
        ZwavePlusNodeType: {
            ZwavePlusNode: 0x00,
            IpRouter: 0x01,
            IpGateway: 0x02,
            IpClientIpNode: 0x03,
            IpClientZwaveNode: 0x04,
            enum: {
                0x00: { name: 'ZwavePlusNode' },
                0x01: { name: 'IpRouter' },
                0x02: { name: 'IpGateway' },
                0x03: { name: 'IpClientIpNode' },
                0x04: { name: 'IpClientZwaveNode' },

            }
        },
        ZwavePlusIcon: {
            enum: {
                0x0000: { name: 'Generic' },
                0x0100: { name: 'CentralController' },
                0x0200: { name: 'DisplaySimple' },
                0x0300: { name: 'DoorLockKeypad' },
                0x0400: { name: 'FanSwitch' },
                0x0500: { name: 'Gateway' },
                0x0600: { name: 'LightDimmerSwitch' },
                0x0601: { name: 'LightDimmerSwitchPlugin' },
                0x0602: { name: 'LightDimmerSwitchWallOutlet' },
                0x0603: { name: 'LightDimmerSwitchCeilingOutlet' },
                0x0604: { name: 'LightDimmerSwitchWallLamp' },
                0x0605: { name: 'LightDimmerSwitchLampPostHigh' },
                0x0606: { name: 'LightDimmerSwitchLampPostLow' },
                0x0700: { name: 'OnOffPowerSwitch' },
                0x0701: { name: 'OnOffPowerSwitchPlugin' },
                0x0702: { name: 'OnOffPowerSwitchWallOutlet' },
                0x0703: { name: 'OnOffPowerSwitchCeilingOutlet' },
                0x0704: { name: 'OnOffPowerSwitchWallLamp' },
                0x0705: { name: 'OnOffPowerSwitchLampPostHigh' },
                0x0706: { name: 'OnOffPowerSwitchLampPostLow' },
                0x0800: { name: 'PowerStrip' },
                0x08FF: { name: 'PowerStripIndividualOutlet' },
                0x0900: { name: 'RemoteControlAv' },
                0x0A00: { name: 'RemoteControlMultiPurpose' },
                0x0B00: { name: 'RemoteControlSimple' },
                0x0B01: { name: 'RemoteControlSimpleKeyfob' },
                0x0C00: { name: 'SensorNotification' },
                0x0C01: { name: 'SensorNotificationSmokeAlarm' },
                0x0C02: { name: 'SensorNotificationCoAlarm' },
                0x0C03: { name: 'SensorNotificationCo2Alarm' },
                0x0C04: { name: 'SensorNotificationHeatAlarm' },
                0x0C05: { name: 'SensorNotificationWaterAlarm' },
                0x0C06: { name: 'SensorNotificationAccessControl' },
                0x0C07: { name: 'SensorNotificationHomeSecurity' },
                0x0C08: { name: 'SensorNotificationPowerManagement' },
                0x0C09: { name: 'SensorNotificationSystem' },
                0x0C0A: { name: 'SensorNotificationEmergencyAlarm' },
                0x0C0B: { name: 'SensorNotificationClock' },
                0x0C0C: { name: 'SensorNotificationAppliance' },
                0x0C0D: { name: 'SensorNotificationHomeHealth' },
                0x0C0E: { name: 'SensorNotificationSiren' },
                0x0C0F: { name: 'SensorNotificationWaterValve' },
                0x0C10: { name: 'SensorNotificationWeatherAlarm' },
                0x0C11: { name: 'SensorNotificationIrrigation' },
                0x0C12: { name: 'SensorNotificationGasAlarm' },
                0x0CFF: { name: 'SensorNotificationMultidevice' },
                0x0D00: { name: 'SensorMultilevel' },
                0x0D01: { name: 'SensorMultilevelAirTemperature' },
                0x0D02: { name: 'SensorMultilevelGeneralPurposeValue' },
                0x0D03: { name: 'SensorMultilevelLuminance' },
                0x0D04: { name: 'SensorMultilevelPower' },
                0x0D05: { name: 'SensorMultilevelHumidity' },
                0x0D06: { name: 'SensorMultilevelVelocity' },
                0x0D07: { name: 'SensorMultilevelDirection' },
                0x0D08: { name: 'SensorMultilevelAtmosphericPressure' },
                0x0D09: { name: 'SensorMultilevelBarometricPressure' },
                0x0D0A: { name: 'SensorMultilevelSolorRadiation' },
                0x0D0B: { name: 'SensorMultilevelDewPoint' },
                0x0D0C: { name: 'SensorMultilevelRainRate' },
                0x0D0D: { name: 'SensorMultilevelTideLevel' },
                0x0D0E: { name: 'SensorMultilevelWeight' },
                0x0D0F: { name: 'SensorMultilevelVoltage' },
                0x0D10: { name: 'SensorMultilevelCurrent' },
                0x0D11: { name: 'SensorMultilevelCo2Level' },
                0x0D12: { name: 'SensorMultilevelAirFlow' },
                0x0D13: { name: 'SensorMultilevelTankCapacity' },
                0x0D14: { name: 'SensorMultilevelDistance' },
                0x0D15: { name: 'SensorMultilevelAnglePosition' },
                0x0D16: { name: 'SensorMultilevelRotation' },
                0x0D17: { name: 'SensorMultilevelWaterTemperature' },
                0x0D18: { name: 'SensorMultilevelSoilTemperature' },
                0x0D19: { name: 'SensorMultilevelSeismicIntensity' },
                0x0D1A: { name: 'SensorMultilevelSeismicMagnitude' },
                0x0D1B: { name: 'SensorMultilevelUltraviolet' },
                0x0D1C: { name: 'SensorMultilevelElectricalResistivity' },
                0x0D1D: { name: 'SensorMultilevelElectricalConductivity' },
                0x0D1E: { name: 'SensorMultilevelLoudness' },
                0x0D1F: { name: 'SensorMultilevelMoisture' },
                0x0D20: { name: 'SensorMultilevelFrequency' },
                0x0D21: { name: 'SensorMultilevelTime' },
                0x0D22: { name: 'SensorMultilevelTargetTemperature' },
                0x0DFF: { name: 'SensorMultilevelMultidevice' },
                0x0E00: { name: 'SetTopBox' },
                0x0F00: { name: 'Siren' },
                0x1000: { name: 'SubEnergyMeter' },
                0x1100: { name: 'SubSystemController' },
                0x1200: { name: 'Thermostat' },
                0x1201: { name: 'ThermostatLineVoltage' },
                0x1202: { name: 'ThermostatSetback' },
                0x1300: { name: 'ThermostatSetbackObsoleted' },
                0x1400: { name: 'Tv' },
                0x1500: { name: 'ValveOpenClose' },
                0x1600: { name: 'WallController' },
                0x1700: { name: 'WholeHomeMeterSimple' },
                0x1800: { name: 'WindowCoveringNoPositionEndpoint' },
                0x1900: { name: 'WindowCoveringEndpointAware' },
                0x1A00: { name: 'WindowCoveringPositionEndpointAware' },
                0x1B00: { name: 'Repeater' },
                0x1C00: { name: 'DimmerWallSwitch' },
                0x1C01: { name: 'DimmerWallSwitchOneButton' },
                0x1C02: { name: 'DimmerWallSwitchTwoButtons' },
                0x1C03: { name: 'DimmerWallSwitchThreeButtons' },
                0x1C04: { name: 'DimmerWallSwitchFourButtons' },
                0x1CF1: { name: 'DimmerWallSwitchOneRotary' },
                0x1D00: { name: 'OnOffWallSwitch' },
                0x1D01: { name: 'OnOffWallSwitchOneButton' },
                0x1D02: { name: 'OnOffWallSwitchTwoButtons' },
                0x1D03: { name: 'OnOffWallSwitchThreeButtons' },
                0x1D04: { name: 'OnOffWallSwitchFourButtons' },
                0x1DE1: { name: 'OnOffWallSwitchDoorBell' },
                0x1DF1: { name: 'OnOffWallSwitchOneRotary' },
                0x1E00: { name: 'Barrier' },
                0x1F00: { name: 'Irrigation' },
                0x2000: { name: 'EntryControl' },
                0x2001: { name: 'EntryControlKeypad09' },
                0x2002: { name: 'EntryControlRfidTagReaderNoButton' }
            }
        },

        ZwavePlusCommandClass: {
            UnknownType: 0x0000,
            CentralController: 0x0100,
            DisplaySimple: 0x0200,
            DoorLockKeypad: 0x0300,
            FanSwitch: 0x0400,
            Gateway: 0x0500,
            LightDimmerSwitch: 0x0600,
            OnOffPowerSwitch: 0x0700,
            PowerStrip: 0x0800,
            RemoteControlAv: 0x0900,
            RemoteControlMultiPurpose: 0x0a00,
            RemoteControlSimple: 0x0b00,
            KeyFob: 0x0b01,
            SensorNotification: 0x0c00,
            SmokeAlarmSensor: 0x0c01,
            CoAlarmSensor: 0x0c02,
            Co2AlarmSensor: 0x0c03,
            HeatAlarmSensor: 0x0c04,
            WaterAlarmSensor: 0x0c05,
            AccessControlSensor: 0x0c06,
            HomeSecuritySensor: 0x0c07,
            PowerManagementSensor: 0x0c08,
            SystemSensor: 0x0c09,
            EmergencyAlarmSensor: 0x0c0a,
            ClockSensor: 0x0c0b,
            MultideviceNotificationSensor: 0x0cff,
            MultilevelSensor: 0x0d00,
            AirTemperatureSensor: 0x0d01,
            GeneralPurposeSensor: 0x0d02,
            LuminanceSensor: 0x0d03,
            PowerSensor: 0x0d04,
            HumiditySensor: 0x0d05,
            VelocitySensor: 0x0d06,
            DirectionSensor: 0x0d07,
            AtmosphericPressureSensor: 0x0d08,
            BarometricPressureSensor: 0x0d09,
            SolarRadiationSensor: 0x0d0a,
            DewPointSensor: 0x0d0b,
            RainRateSensor: 0x0d0c,
            TideLevelSensor: 0x0d0d,
            WeightSensor: 0x0d0e,
            VoltageSensor: 0x0d0f,
            CurrentSensor: 0x0d10,
            Co2LevelSensor: 0x0d11,
            AirFlowSensor: 0x0d12,
            TankCapacitySensor: 0x0d13,
            DistanceSensor: 0x0d14,
            AnglePositionSensor: 0x0d15,
            RotationSensor: 0x0d16,
            WaterTemperatureSensor: 0x0d17,
            SoilTemperatureSensor: 0x0d18,
            SeismicIntensitySensor: 0x0d19,
            SeismicMagnitudeSensor: 0x0d1a,
            UltravioletSensor: 0x0d1b,
            ElectricalResistivitySensor: 0x0d1c,
            ElectricalConductivitySensor: 0x0b1d,
            LoudnessSensor: 0x0b1e,
            MoistureSensor: 0x0b1f,
            FrequencySensor: 0x0b20,
            TimeSensor: 0x0b21,
            TargetTemperatureSensor: 0x0b22,
            MultideviceSensor: 0x0bff,
            SetTopBox: 0x0e00,
            Siren: 0x0f00,
            SubEnergyMeter: 0x1000,
            SubSystemController: 0x1100,
            ThermostatHvac: 0x1200,
            ThermostatSetback: 0x1300,
            Tv: 0x1400,
            ValveOpenClose: 0x1500,
            WallController: 0x1600,
            WholeHomeMeterSimple: 0x1700,
            WindowCoveringNoPositionEndpoint: 0x1800,
            WindowCoveringEndpointAware: 0x1900,
            WindowCoveringPositionEndpointAware: 0x1a00,
            enum: {
                0x0000: { name: 'UnknownType', mandatory: [] },
                0x0100: { name: 'CentralController', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'Crc16Encap', 'ApplicationStatus'] },
                0x0200: { name: 'DisplaySimple', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version'] },
                0x0300: { name: 'DoorLockKeypad', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'DoorLock', 'UserCode', 'Battery'] },
                0x0400: { name: 'FanSwitch', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchMultilevel'] },
                0x0500: { name: 'Gateway', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'Crc16Encap', 'MultiChannel', 'MultiChannelAssociation', 'WakeUp', 'ApplicationStatus'] },
                0x0600: { name: 'LightDimmerSwitch', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchMultilevel'] },
                0x0700: { name: 'OnOffPowerSwitch', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchBinary'] },
                0x0800: { name: 'PowerStrip', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'MultiChannel', 'MultiChannelAssociation', 'SwitchBinary'] },
                0x0900: { name: 'RemoteControlAv', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version'] },
                0x0a00: { name: 'RemoteControlMultiPurpose', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'WakeUp'] },
                0x0b00: { name: 'RemoteControlSimple', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'CentralScene'] },
                0x0b01: { name: 'KeyFob', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'CentralScene'] },
                0x0c00: { name: 'SensorNotification', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c01: { name: 'SmokeAlarmSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c02: { name: 'CoAlarmSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c03: { name: 'Co2AlarmSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c04: { name: 'HeatAlarmSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c05: { name: 'WaterAlarmSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c06: { name: 'AccessControlSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c07: { name: 'HomeSecuritySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c08: { name: 'PowerManagementSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c09: { name: 'SystemSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c0a: { name: 'EmergencyAlarmSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0c0b: { name: 'ClockSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0cff: { name: 'MultideviceNotificationSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary'] },
                0x0d00: { name: 'MultilevelSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d01: { name: 'AirTemperatureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d02: { name: 'GeneralPurposeSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d03: { name: 'LuminanceSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d04: { name: 'PowerSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d05: { name: 'HumiditySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d06: { name: 'VelocitySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d07: { name: 'DirectionSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d08: { name: 'AtmosphericPressureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d09: { name: 'BarometricPressureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d0a: { name: 'SolarRadiationSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d0b: { name: 'DewPointSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d0c: { name: 'RainRateSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d0d: { name: 'TideLevelSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d0e: { name: 'WeightSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d0f: { name: 'VoltageSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d10: { name: 'CurrentSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d11: { name: 'Co2LevelSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d12: { name: 'AirFlowSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d13: { name: 'TankCapacitySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d14: { name: 'DistanceSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d15: { name: 'AnglePositionSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d16: { name: 'RotationSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d17: { name: 'WaterTemperatureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d18: { name: 'SoilTemperatureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d19: { name: 'SeismicIntensitySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d1a: { name: 'SeismicMagnitudeSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d1b: { name: 'UltravioletSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0d1c: { name: 'ElectricalResistivitySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0b1d: { name: 'ElectricalConductivitySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0b1e: { name: 'LoudnessSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0b1f: { name: 'MoistureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0b20: { name: 'FrequencySensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0b21: { name: 'TimeSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0b22: { name: 'TargetTemperatureSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0bff: { name: 'MultideviceSensor', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SensorBinary', 'SensorMultilevel'] },
                0x0e00: { name: 'SetTopBox', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'Crc16Encap', 'MultiChannel', 'MultiChannelAssociation', 'WakeUp', 'ApplicationStatus'] },
                0x0f00: { name: 'Siren', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version'] },
                0x1000: { name: 'SubEnergyMeter', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'Crc16Encap', 'Meter'] },
                0x1100: { name: 'SubSystemController', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'MultiChannel', 'WakeUp', 'ApplicationStatus'] },
                0x1200: { name: 'ThermostatHvac', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'ThermostatSetpoint', 'ThermostatMode'] },
                0x1300: { name: 'ThermostatSetback', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'ThermostatSetpoint'] },
                0x1400: { name: 'Tv', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'Crc16Encap', 'MultiChannel', 'MultiChannelAssociation', 'WakeUp', 'ApplicationStatus'] },
                0x1500: { name: 'ValveOpenClose', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchMultilevel', 'SwitchBinary'] },
                0x1600: { name: 'WallController', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'CentralScene'] },
                0x1700: { name: 'WholeHomeMeterSimple', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'Crc16Encap', 'Meter'] },
                0x1800: { name: 'WindowCoveringNoPositionEndpoint', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchMultilevel', 'SwitchBinary'] },
                0x1900: { name: 'WindowCoveringEndpointAware', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchMultilevel', 'SwitchBinary'] },
                0x1a00: { name: 'WindowCoveringPositionEndpointAware', mandatory: ['DeviceResetLocally', 'ZwaveplusInfo', 'AssociationGrpInfo', 'ManufacturerSpecific', 'Powerlevel', 'Association', 'Version', 'SwitchMultilevel'] },
            }
        }
    }
}
