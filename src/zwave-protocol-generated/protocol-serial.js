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

const BufferStreamFactory = require('./bufferstream').BufferStreamFactory,
	BufferStream = new BufferStreamFactory();

const helpers = require('./helpers').helpers;

const SERIAL_API = { 
	SERIAL_API_FUNC: { id: 0x01,
		ADD_NODE_TO_NETWORK: 0x4a,
		AES_ECB: 0x67,
		APPLICATION_COMMAND_HANDLER: 0x04,
		APPLICATION_COMMAND_HANDLER_BRIDGE: 0xa8,
		APPLICATION_SECURITY_EVENT: 0x9d,
		APPLICATION_SLAVE_COMMAND_HANDLER: 0xa1,
		APPLICATION_UPDATE: 0x49,
		APPL_NODE_INFORMATION: 0x03,
		APPL_NODE_INFORMATION_CMD_CLASSES: 0x0c,
		APPL_SLAVE_NODE_INFORMATION: 0xa0,
		ARE_NODES_NEIGHBOURS: 0xbc,
		ASSIGN_PRIORITY_RETURN_ROUTE: 0x4f,
		ASSIGN_PRIORITY_SUC_RETURN_ROUTE: 0x58,
		ASSIGN_RETURN_ROUTE: 0x46,
		ASSIGN_SUC_RETURN_ROUTE: 0x51,
		AUTO_PROGRAMMING: 0x27,
		CLEAR_NETWORK_STATS: 0x39,
		CLEAR_TX_TIMERS: 0x37,
		CLOCK_CMP: 0x32,
		CLOCK_GET: 0x31,
		CLOCK_SET: 0x30,
		CONTROLLER_CHANGE: 0x4d,
		CREATE_NEW_PRIMARY: 0x4c,
		DEBUG_OUTPUT: 0x26,
		DELETE_RETURN_ROUTE: 0x47,
		DELETE_SUC_RETURN_ROUTE: 0x55,
		ENABLE_SUC: 0x52,
		EXPLORE_REQUEST_EXCLUSION: 0x5f,
		EXPLORE_REQUEST_INCLUSION: 0x5e,
		EXT: 0x98,
		FIRMWARE_UPDATE_NVM: 0x78,
		GET_APPL_HOST_MEMORY_OFFSET: 0x25,
		GET_BACKGROUND_RSSI: 0x3b,
		GET_CAPABILITIES: 0x07,
		GET_CONTROLLER_CAPABILITIES: 0x05,
		GET_INIT_DATA: 0x02,
		GET_NEIGHBOR_COUNT: 0xbb,
		GET_NETWORK_STATS: 0x3a,
		GET_NODE_PROTOCOL_INFO: 0x41,
		GET_PRIORITY_ROUTE: 0x92,
		GET_PROTOCOL_STATUS: 0xbf,
		GET_PROTOCOL_VERSION: 0x09,
		GET_RANDOM: 0x1c,
		GET_ROUTING_MAX: 0xd5,
		GET_ROUTING_TABLE_LINE: 0x80,
		GET_SUC_NODE_ID: 0x56,
		GET_TX_COUNTER: 0x81,
		GET_TX_TIMERS: 0x38,
		GET_VERSION: 0x15,
		GET_VIRTUAL_NODES: 0xa5,
		IO_PORT: 0xe6,
		IO_PORT_STATUS: 0xe5,
		IS_FAILED_NODE_ID: 0x62,
		IS_NODE_WITHIN_DIRECT_RANGE: 0x5d,
		IS_PRIMARY_CTRL: 0x66,
		IS_VIRTUAL_NODE: 0xa6,
		IS_WUT_KICKED: 0xb5,
		LOCK_ROUTE_RESPONSE: 0x90,
		MEMORY_GET_BUFFER: 0x23,
		MEMORY_GET_BYTE: 0x21,
		MEMORY_GET_ID: 0x20,
		MEMORY_PUT_BUFFER: 0x24,
		MEMORY_PUT_BYTE: 0x22,
		NEW_CONTROLLER: 0x43,
		NUNIT_CMD: 0xe0,
		NUNIT_END: 0xe4,
		NUNIT_INIT: 0xe1,
		NUNIT_LIST: 0xe2,
		NUNIT_RUN: 0xe3,
		NVM_BACKUP_RESTORE: 0x2e,
		NVM_EXT_READ_LONG_BUFFER: 0x2a,
		NVM_EXT_READ_LONG_BYTE: 0x2c,
		NVM_EXT_WRITE_LONG_BUFFER: 0x2b,
		NVM_EXT_WRITE_LONG_BYTE: 0x2d,
		NVM_GET_ID: 0x29,
		NVR_GET_APP_VALUE: 0x2f,
		NVR_GET_VALUE: 0x28,
		PROMISCUOUS_APPLICATION_COMMAND_HANDLER: 0xd1,
		PROPRIETARY_0: 0xf0,
		PROPRIETARY_1: 0xf1,
		PROPRIETARY_2: 0xf2,
		PROPRIETARY_3: 0xf3,
		PROPRIETARY_4: 0xf4,
		PROPRIETARY_5: 0xf5,
		PROPRIETARY_6: 0xf6,
		PROPRIETARY_7: 0xf7,
		PROPRIETARY_8: 0xf8,
		PROPRIETARY_9: 0xf9,
		PROPRIETARY_A: 0xfa,
		PROPRIETARY_B: 0xfb,
		PROPRIETARY_C: 0xfc,
		PROPRIETARY_D: 0xfd,
		PROPRIETARY_E: 0xfe,
		PWR_CLK_PD: 0xb1,
		PWR_CLK_PUP: 0xb2,
		PWR_SELECT_CLK: 0xb3,
		PWR_SETSTOPMODE: 0xb0,
		RANDOM: 0x1d,
		REDISCOVERY_NEEDED: 0x59,
		REMOVE_FAILED_NODE_ID: 0x61,
		REMOVE_NODE_FROM_NETWORK: 0x4b,
		REMOVE_NODE_ID_FROM_NETWORK: 0x3f,
		REPLACE_FAILED_NODE: 0x63,
		REPLICATION_COMMAND_COMPLETE: 0x44,
		REPLICATION_SEND_DATA: 0x45,
		REQUEST_NETWORK_UPDATE: 0x53,
		REQUEST_NEW_ROUTE_DESTINATIONS: 0x5c,
		REQUEST_NODE_INFO: 0x60,
		REQUEST_NODE_NEIGHBOR_UPDATE: 0x48,
		REQUEST_NODE_NEIGHBOR_UPDATE_OPTION: 0x5a,
		RESERVED_FN: 0x4e,
		RESERVED_SD: 0x19,
		RESERVED_SDM: 0x1a,
		RESERVED_SSD: 0xa7,
		RESET_TX_COUNTER: 0x82,
		RF_POWER_LEVEL_GET: 0xba,
		RF_POWER_LEVEL_REDISCOVERY_SET: 0x1e,
		RF_POWER_LEVEL_SET: 0x17,
		RTC_TIMER_CALL: 0x36,
		RTC_TIMER_CREATE: 0x33,
		RTC_TIMER_DELETE: 0x35,
		RTC_TIMER_READ: 0x34,
		SECURITY_SETUP: 0x9c,
		SEND_DATA: 0x13,
		SEND_DATA_ABORT: 0x16,
		SEND_DATA_BRIDGE: 0xa9,
		SEND_DATA_EX: 0x0e,
		SEND_DATA_META: 0x18,
		SEND_DATA_META_BRIDGE: 0xaa,
		SEND_DATA_MULTI: 0x14,
		SEND_DATA_MULTI_BRIDGE: 0xab,
		SEND_DATA_MULTI_EX: 0x0f,
		SEND_NODE_INFORMATION: 0x12,
		SEND_SLAVE_DATA: 0xa3,
		SEND_SLAVE_NODE_INFORMATION: 0xa2,
		SEND_SUC_ID: 0x57,
		SEND_TEST_FRAME: 0xbe,
		SERIAL_API_POWER_MANAGEMENT: 0xee,
		SERIAL_API_READY: 0xef,
		SETUP: 0x0b,
		SET_DEFAULT: 0x42,
		SET_EXT_INT_LEVEL: 0xb9,
		SET_LEARN_MODE: 0x50,
		SET_LEARN_NODE_STATE: 0x40,
		SET_LISTEN_BEFORE_TALK_THRESHOLD: 0x3c,
		SET_PRIORITY_ROUTE: 0x93,
		SET_PROMISCUOUS_MODE: 0xd0,
		SET_RF_RECEIVE_MODE: 0x10,
		SET_ROUTING_INFO: 0x1b,
		SET_ROUTING_MAX: 0xd4,
		SET_ROUTING_MAX_6_00: 0x65,
		SET_SLAVE_LEARN_MODE: 0xa4,
		SET_SLEEP_MODE: 0x11,
		SET_SUC_NODE_ID: 0x54,
		SET_TIMEOUTS: 0x06,
		SET_WUT_TIMEOUT: 0xb4,
		SOFT_RESET: 0x08,
		STARTED: 0x0a,
		STORE_HOMEID: 0x84,
		STORE_NODEINFO: 0x83,
		SUPPORT9600_ONLY: 0x5b,
		TEST: 0x95,
		TIMER_CALL: 0x73,
		TIMER_CANCEL: 0x72,
		TIMER_RESTART: 0x71,
		TIMER_START: 0x70,
		TYPE_LIBRARY: 0xbd,
		UNKNOWN: 0xff,
		WATCHDOG_DISABLE: 0xb7,
		WATCHDOG_ENABLE: 0xb6,
		WATCHDOG_KICK: 0xb8,
		WATCHDOG_START: 0xd2,
		WATCHDOG_STOP: 0xd3 },
	enum: {
		0x01: { version: 5, name: "SERIAL_API_FUNC", help: "Z-Wave Serial API Function Class", command: {  /* see below */ } },
	}
};

module.exports.SERIAL_API = SERIAL_API;


/*
 * SERIAL_API 0x01 SERIAL_API_FUNC COMMANDS
 */

// SERIAL_API_FUNC [0x01] GET_INIT_DATA [0x02] COMMAND 
SERIAL_API.enum[0x01].command[0x02] = {
	name: "GET_INIT_DATA",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.SerialApiVersion" /* BYTE */ }, 
		'0x01-0': {name: "zwave.IsSlaveApi" /* BitMask BITMASK */ }, 
		'0x01-1': {name: "zwave.HasTimerSupport" /* BitMask BITMASK */ }, 
		'0x01-2': {name: "zwave.IsSecondaryController" /* BitMask BITMASK */ }, 
		'0x01-3': {name: "zwave.IsStaticUpdateController" /* BitMask BITMASK */ }, 
		'0x02a': {name: "zwave.NumberOfNodes" /* Properties1 STRUCT_BYTE */ }, 
		'0x02b': {name: "Reserved" /* Properties1 STRUCT_BYTE */ }, 
		'0x03': {name: "zwave.NodesAvailable" /* BITMASK */ }, 
		'0x04': {name: "zwave.ChipType" /* BYTE */ }, 
		'0x05': {name: "zwave.ChipRevision" /* BYTE */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.SerialApiVersion'] = payload.readBYTE(); else return context;
		helpers.setNameFlags(context, payload.readBITMASK({length: 1}), ENUM_SERIAL_API_FUNC_GET_INIT_DATA_.enum);
		{
			let _properties1 = payload.readBYTE();
			if (!payload.insufficientBytes(1)) context['zwave.NumberOfNodes'] = (_properties1 & 0x1f); else return context;
			if (!payload.insufficientBytes(1)) context['Reserved'] = (_properties1 & 0x60) >> 5; else return context;
		}
		if (!payload.insufficientBytes(1)) context['zwave.NodesAvailable'] = payload.readBITMASK({length: payload.at(2) & 0x1f}); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.ChipType'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.ChipRevision'] = payload.readBYTE(); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_GET_INIT_DATA_ = {
	'zwave.IsSlaveApi': 0x01, 
	'zwave.HasTimerSupport': 0x02, 
	'zwave.IsSecondaryController': 0x03, 
	'zwave.IsStaticUpdateController': 0x04, 
	enum: {
		0x01: "zwave.IsSlaveApi", 
		0x02: "zwave.HasTimerSupport", 
		0x03: "zwave.IsSecondaryController", 
		0x04: "zwave.IsStaticUpdateController"
	}
};

// SERIAL_API_FUNC [0x01] APPL_NODE_INFORMATION [0x03] COMMAND 
SERIAL_API.enum[0x01].command[0x03] = {
	name: "APPL_NODE_INFORMATION",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] APPLICATION_COMMAND_HANDLER [0x04] COMMAND 
SERIAL_API.enum[0x01].command[0x04] = {
	name: "APPLICATION_COMMAND_HANDLER",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.RxStatus" /* BITMASK_BYTE */ }, 
				'0x00-0': {name: "Single" /* zwave.RxStatus BITMASK_BYTE */ },
				'0x00-1': {name: "LowPower" /* zwave.RxStatus BITMASK_BYTE */ },
				'0x00-2': {name: "Busy" /* zwave.RxStatus BITMASK_BYTE */ },
				'0x00-3': {name: "Broad" /* zwave.RxStatus BITMASK_BYTE */ },
				'0x00-4': {name: "Multi" /* zwave.RxStatus BITMASK_BYTE */ },
				'0x00-5': {name: "Explore" /* zwave.RxStatus BITMASK_BYTE */ },
				'0x00-6': {name: "ForeignFrame" /* zwave.RxStatus BITMASK_BYTE */ }, 
		'0x01': {name: "zwave.NodeId", alias: "SourceNode", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x02': {name: "zwave.Length", alias: "Length" /* BYTE */ }, 
		'0x03': {name: "zwave.CommandClass", alias: "CommandClass", encaptype: "CMD_CLASS_REF" /* BYTE */ }, 
		'0x04': {name: "zwave.Command", alias: "Command", encaptype: "CMD_REF" /* BYTE */ }, 
		'0x05': {name: "zwave.Payload", alias: "Data", encaptype: "CMD_DATA" /* VARIANT */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.RxStatus'] = helpers.lookupBitMaskValues(payload.readBYTE(), ENUM_SERIAL_API_FUNC_APPLICATION_COMMAND_HANDLER_ZWAVE_RX_STATUS.enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.NodeId'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.Length'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.CommandClass'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.Command'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.Payload'] = payload.readBUFFER({}); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_APPLICATION_COMMAND_HANDLER_ZWAVE_RX_STATUS = {
	Single: 0x00, 
	LowPower: 0x01, 
	Busy: 0x02, 
	Broad: 0x03, 
	Multi: 0x04, 
	Explore: 0x05, 
	ForeignFrame: 0x06, 
	enum: {
		0x00: "Single", 
		0x01: "LowPower", 
		0x02: "Busy", 
		0x03: "Broad", 
		0x04: "Multi", 
		0x05: "Explore", 
		0x06: "ForeignFrame"
	}
};

// SERIAL_API_FUNC [0x01] GET_CONTROLLER_CAPABILITIES [0x05] COMMAND 
SERIAL_API.enum[0x01].command[0x05] = {
	name: "GET_CONTROLLER_CAPABILITIES",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00-0': {name: "IsSecondaryController" /* Bitmask BITMASK */ }, 
		'0x00-1': {name: "IsOnOtherNetwork" /* Bitmask BITMASK */ }, 
		'0x00-2': {name: "IsSISPresent" /* Bitmask BITMASK */ }, 
		'0x00-3': {name: "IsRealPrimary" /* Bitmask BITMASK */ }, 
		'0x00-4': {name: "IsStaticUpdateController" /* Bitmask BITMASK */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		helpers.setNameFlags(context, payload.readBITMASK({length: 1}), ENUM_SERIAL_API_FUNC_GET_CONTROLLER_CAPABILITIES_BITMASK.enum);
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_GET_CONTROLLER_CAPABILITIES_BITMASK = {
	IsSecondaryController: 0x01, 
	IsOnOtherNetwork: 0x02, 
	IsSISPresent: 0x03, 
	IsRealPrimary: 0x04, 
	IsStaticUpdateController: 0x05, 
	enum: {
		0x01: "IsSecondaryController", 
		0x02: "IsOnOtherNetwork", 
		0x03: "IsSISPresent", 
		0x04: "IsRealPrimary", 
		0x05: "IsStaticUpdateController"
	}
};

// SERIAL_API_FUNC [0x01] SET_TIMEOUTS [0x06] COMMAND 
SERIAL_API.enum[0x01].command[0x06] = {
	name: "SET_TIMEOUTS",
	version: "4",
	param: { 
		'0x00': {name: "zwave.RxAckTimeout" /* BYTE */ }, 
		'0x01': {name: "zwave.RxByteTimeout" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.RxAckTimeout' in context) payload.writeBYTE(context['zwave.RxAckTimeout']); else return payload.asBuffer();
		if ('zwave.RxByteTimeout' in context) payload.writeBYTE(context['zwave.RxByteTimeout']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.PreviousRxAckTimeout" /* BYTE */ }, 
		'0x01': {name: "zwave.PreviousRxByteTimeout" /* BYTE */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.PreviousRxAckTimeout'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.PreviousRxByteTimeout'] = payload.readBYTE(); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] GET_CAPABILITIES [0x07] COMMAND 
SERIAL_API.enum[0x01].command[0x07] = {
	name: "GET_CAPABILITIES",
	version: "4",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.SerialApiApplicationVersion" /* WORD */ }, 
		'0x01': {name: "zwave.ManufacturerId" /* WORD */ }, 
		'0x02': {name: "zwave.DeviceType" /* WORD */ }, 
		'0x03': {name: "zwave.DeviceId" /* WORD */ }, 
		'0x04': {name: "zwave.SerialApiSupported" /* BITMASK */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.SerialApiApplicationVersion'] = payload.readWORD(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.ManufacturerId'] = payload.readWORD(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.DeviceType'] = payload.readWORD(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.DeviceId'] = payload.readWORD(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.SerialApiSupported'] = payload.readBITMASK({length: 0}); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] SOFT_RESET [0x08] COMMAND 
SERIAL_API.enum[0x01].command[0x08] = {
	name: "SOFT_RESET",
	version: "4",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_PROTOCOL_VERSION [0x09] COMMAND 
SERIAL_API.enum[0x01].command[0x09] = {
	notimpl: true,
	name: "GET_PROTOCOL_VERSION",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] STARTED [0x0a] COMMAND 
SERIAL_API.enum[0x01].command[0x0a] = {
	notimpl: true,
	name: "STARTED",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SETUP [0x0b] COMMAND 
SERIAL_API.enum[0x01].command[0x0b] = {
	notimpl: true,
	name: "SETUP",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] APPL_NODE_INFORMATION_CMD_CLASSES [0x0c] COMMAND 
SERIAL_API.enum[0x01].command[0x0c] = {
	notimpl: true,
	name: "APPL_NODE_INFORMATION_CMD_CLASSES",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA_EX [0x0e] COMMAND 
SERIAL_API.enum[0x01].command[0x0e] = {
	notimpl: true,
	name: "SEND_DATA_EX",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA_MULTI_EX [0x0f] COMMAND 
SERIAL_API.enum[0x01].command[0x0f] = {
	notimpl: true,
	name: "SEND_DATA_MULTI_EX",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_RF_RECEIVE_MODE [0x10] COMMAND 
SERIAL_API.enum[0x01].command[0x10] = {
	notimpl: true,
	name: "SET_RF_RECEIVE_MODE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_SLEEP_MODE [0x11] COMMAND 
SERIAL_API.enum[0x01].command[0x11] = {
	notimpl: true,
	name: "SET_SLEEP_MODE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_NODE_INFORMATION [0x12] COMMAND 
SERIAL_API.enum[0x01].command[0x12] = {
	notimpl: true,
	name: "SEND_NODE_INFORMATION",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA [0x13] COMMAND 
SERIAL_API.enum[0x01].command[0x13] = {
	name: "SEND_DATA",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x01': {name: "zwave.Length" /* BYTE */ }, 
		'0x02': {name: "zwave.CommandClass", alias: "CommandClass", encaptype: "CMD_CLASS_REF" /* BYTE */ }, 
		'0x03': {name: "zwave.Command", alias: "Command", encaptype: "CMD_REF" /* BYTE */ }, 
		'0x04': {name: "zwave.Payload", alias: "Data", encaptype: "CMD_DATA" /* VARIANT */ }, 
		'0x05': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x05-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }, 
		'0x06': {name: "zwave.CallbackId" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		if ('zwave.Length' in context) payload.writeBYTE(context['zwave.Length']); else return payload.asBuffer();
		if ('zwave.CommandClass' in context) payload.writeBYTE(context['zwave.CommandClass']); else return payload.asBuffer();
		if ('zwave.Command' in context) payload.writeBYTE(context['zwave.Command']); else return payload.asBuffer();
		if ('zwave.Payload' in context) payload.writeBUFFER(context['zwave.Payload'], { length: (payload.at(1) & 0xff) -2 }); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		if ('zwave.CallbackId' in context) payload.writeBYTE(context['zwave.CallbackId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS = {
	None: 0x00, 
	LowPower: 0x01, 
	AutoRoute: 0x02, 
	Reserved: 0x03, 
	NoRoute: 0x04, 
	Explore: 0x05, 
	NoRetransmission: 0x06, 
	HighPower: 0x07, 
	enum: {
		0x00: "None", 
		0x01: "LowPower", 
		0x02: "AutoRoute", 
		0x03: "Reserved", 
		0x04: "NoRoute", 
		0x05: "Explore", 
		0x06: "NoRetransmission", 
		0x07: "HighPower"
	}
};

const ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS = {
	OK: 0x00, 
	NoAck: 0x01, 
	Fail: 0x02, 
	enum: {
		0x00: "OK", 
		0x01: "NoAck", 
		0x02: "Fail"
	}
};

// SERIAL_API_FUNC [0x01] SEND_DATA_MULTI [0x14] COMMAND 
SERIAL_API.enum[0x01].command[0x14] = {
	name: "SEND_DATA_MULTI",
	param: { 
		'0x00a': {name: "zwave.NumberOfNodes" /* Properties1 STRUCT_BYTE */ }, 
		'0x00b': {name: "Reserved" /* Properties1 STRUCT_BYTE */ }, 
		'0x01': {name: "zwave.NodeListData" /* BITMASK */ }, 
		'0x02': {name: "zwave.Length", alias: "DataLength" /* BYTE */ }, 
		'0x03': {name: "zwave.CommandClass", alias: "CommandClass", encaptype: "CMD_CLASS_REF" /* BYTE */ }, 
		'0x04': {name: "zwave.Command", alias: "Command", encaptype: "CMD_REF" /* BYTE */ }, 
		'0x05': {name: "zwave.Payload", alias: "Data", encaptype: "CMD_DATA" /* VARIANT */ }, 
		'0x06': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x06-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x06-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NumberOfNodes' in context || 'Reserved' in context) {
			let _properties1 = 0x00;
			if ('zwave.NumberOfNodes' in context) _properties1 = _properties1 | ((context['zwave.NumberOfNodes']) & 0x1f);
			if ('Reserved' in context) _properties1 = _properties1 | ((context['Reserved'] << 5) & 0x60);
			payload.writeBYTE(_properties1);
		} else return payload.asBuffer();;
		if ('zwave.NodeListData' in context) payload.writeBITMASK(context['zwave.NodeListData'], {length: payload.at(2) & 0x1f}); else return payload.asBuffer();
		if ('zwave.Length' in context) payload.writeBYTE(context['zwave.Length']); else return payload.asBuffer();
		if ('zwave.CommandClass' in context) payload.writeBYTE(context['zwave.CommandClass']); else return payload.asBuffer();
		if ('zwave.Command' in context) payload.writeBYTE(context['zwave.Command']); else return payload.asBuffer();
		if ('zwave.Payload' in context) payload.writeBUFFER(context['zwave.Payload'], { length: (payload.at(255) & 0xff) -2 }); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] GET_VERSION [0x15] COMMAND 
SERIAL_API.enum[0x01].command[0x15] = {
	name: "GET_VERSION",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.Version" /* ARRAY */ }, 
		'0x01': {name: "zwave.LibraryType" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.Version'] = payload.readSTRING({ encoding: 'ascii', length: 12 }); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.LibraryType'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_GET_VERSION_ZWAVE_LIBRARY_TYPE.enum); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_GET_VERSION_ZWAVE_LIBRARY_TYPE = {
	NoLib: 0x00, 
	ControllerStaticLib: 0x01, 
	ControllerLib: 0x02, 
	SlaveEnhancedLib: 0x03, 
	SlaveLib: 0x04, 
	InstallerLib: 0x05, 
	SlaveRoutingLib: 0x06, 
	ControllerBridgeLib: 0x07, 
	enum: {
		0x00: "NoLib", 
		0x01: "ControllerStaticLib", 
		0x02: "ControllerLib", 
		0x03: "SlaveEnhancedLib", 
		0x04: "SlaveLib", 
		0x05: "InstallerLib", 
		0x06: "SlaveRoutingLib", 
		0x07: "ControllerBridgeLib"
	}
};

// SERIAL_API_FUNC [0x01] SEND_DATA_ABORT [0x16] COMMAND 
SERIAL_API.enum[0x01].command[0x16] = {
	name: "SEND_DATA_ABORT",
	version: "4",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] RF_POWER_LEVEL_SET [0x17] COMMAND 
SERIAL_API.enum[0x01].command[0x17] = {
	notimpl: true,
	name: "RF_POWER_LEVEL_SET",
	version: "4",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA_META [0x18] COMMAND 
SERIAL_API.enum[0x01].command[0x18] = {
	name: "SEND_DATA_META",
	version: "4",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x01': {name: "zwave.Length", alias: "DataLength" /* BYTE */ }, 
		'0x02': {name: "zwave.CommandClass", alias: "CommandClass", encaptype: "CMD_CLASS_REF" /* BYTE */ }, 
		'0x03': {name: "zwave.Command", alias: "Command", encaptype: "CMD_REF" /* BYTE */ }, 
		'0x04': {name: "zwave.Payload", alias: "Data", encaptype: "CMD_DATA" /* VARIANT */ }, 
		'0x05': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x05-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x05-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		if ('zwave.Length' in context) payload.writeBYTE(context['zwave.Length']); else return payload.asBuffer();
		if ('zwave.CommandClass' in context) payload.writeBYTE(context['zwave.CommandClass']); else return payload.asBuffer();
		if ('zwave.Command' in context) payload.writeBYTE(context['zwave.Command']); else return payload.asBuffer();
		if ('zwave.Payload' in context) payload.writeBUFFER(context['zwave.Payload'], { length: (payload.at(1) & 0xff) -2 }); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] RESERVED_SD [0x19] COMMAND 
SERIAL_API.enum[0x01].command[0x19] = {
	notimpl: true,
	name: "RESERVED_SD",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RESERVED_SDM [0x1a] COMMAND 
SERIAL_API.enum[0x01].command[0x1a] = {
	notimpl: true,
	name: "RESERVED_SDM",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_ROUTING_INFO [0x1b] COMMAND 
SERIAL_API.enum[0x01].command[0x1b] = {
	notimpl: true,
	name: "SET_ROUTING_INFO",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_RANDOM [0x1c] COMMAND 
SERIAL_API.enum[0x01].command[0x1c] = {
	notimpl: true,
	name: "GET_RANDOM",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RANDOM [0x1d] COMMAND 
SERIAL_API.enum[0x01].command[0x1d] = {
	notimpl: true,
	name: "RANDOM",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RF_POWER_LEVEL_REDISCOVERY_SET [0x1e] COMMAND 
SERIAL_API.enum[0x01].command[0x1e] = {
	notimpl: true,
	name: "RF_POWER_LEVEL_REDISCOVERY_SET",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] MEMORY_GET_ID [0x20] COMMAND 
SERIAL_API.enum[0x01].command[0x20] = {
	name: "MEMORY_GET_ID",
	comment: "Get Home Id",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.HomeId" /* ARRAY */ }, 
		'0x01': {name: "zwave.OwnNodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.HomeId'] = payload.readSTRING({ encoding: 'hex', length: 4 }); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.OwnNodeId'] = payload.readBYTE(); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] MEMORY_GET_BYTE [0x21] COMMAND 
SERIAL_API.enum[0x01].command[0x21] = {
	notimpl: true,
	name: "MEMORY_GET_BYTE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] MEMORY_PUT_BYTE [0x22] COMMAND 
SERIAL_API.enum[0x01].command[0x22] = {
	notimpl: true,
	name: "MEMORY_PUT_BYTE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] MEMORY_GET_BUFFER [0x23] COMMAND 
SERIAL_API.enum[0x01].command[0x23] = {
	notimpl: true,
	name: "MEMORY_GET_BUFFER",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] MEMORY_PUT_BUFFER [0x24] COMMAND 
SERIAL_API.enum[0x01].command[0x24] = {
	notimpl: true,
	name: "MEMORY_PUT_BUFFER",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_APPL_HOST_MEMORY_OFFSET [0x25] COMMAND 
SERIAL_API.enum[0x01].command[0x25] = {
	notimpl: true,
	name: "GET_APPL_HOST_MEMORY_OFFSET",
	comment: "not implemented",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] DEBUG_OUTPUT [0x26] COMMAND 
SERIAL_API.enum[0x01].command[0x26] = {
	notimpl: true,
	name: "DEBUG_OUTPUT",
	comment: "not implemented",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] AUTO_PROGRAMMING [0x27] COMMAND 
SERIAL_API.enum[0x01].command[0x27] = {
	notimpl: true,
	name: "AUTO_PROGRAMMING",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVR_GET_VALUE [0x28] COMMAND 
SERIAL_API.enum[0x01].command[0x28] = {
	notimpl: true,
	name: "NVR_GET_VALUE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVM_GET_ID [0x29] COMMAND 
SERIAL_API.enum[0x01].command[0x29] = {
	notimpl: true,
	name: "NVM_GET_ID",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVM_EXT_READ_LONG_BUFFER [0x2a] COMMAND 
SERIAL_API.enum[0x01].command[0x2a] = {
	notimpl: true,
	name: "NVM_EXT_READ_LONG_BUFFER",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVM_EXT_WRITE_LONG_BUFFER [0x2b] COMMAND 
SERIAL_API.enum[0x01].command[0x2b] = {
	notimpl: true,
	name: "NVM_EXT_WRITE_LONG_BUFFER",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVM_EXT_READ_LONG_BYTE [0x2c] COMMAND 
SERIAL_API.enum[0x01].command[0x2c] = {
	notimpl: true,
	name: "NVM_EXT_READ_LONG_BYTE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVM_EXT_WRITE_LONG_BYTE [0x2d] COMMAND 
SERIAL_API.enum[0x01].command[0x2d] = {
	notimpl: true,
	name: "NVM_EXT_WRITE_LONG_BYTE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVM_BACKUP_RESTORE [0x2e] COMMAND 
SERIAL_API.enum[0x01].command[0x2e] = {
	notimpl: true,
	name: "NVM_BACKUP_RESTORE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NVR_GET_APP_VALUE [0x2f] COMMAND 
SERIAL_API.enum[0x01].command[0x2f] = {
	notimpl: true,
	name: "NVR_GET_APP_VALUE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CLOCK_SET [0x30] COMMAND 
SERIAL_API.enum[0x01].command[0x30] = {
	notimpl: true,
	name: "CLOCK_SET",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CLOCK_GET [0x31] COMMAND 
SERIAL_API.enum[0x01].command[0x31] = {
	notimpl: true,
	name: "CLOCK_GET",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CLOCK_CMP [0x32] COMMAND 
SERIAL_API.enum[0x01].command[0x32] = {
	notimpl: true,
	name: "CLOCK_CMP",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RTC_TIMER_CREATE [0x33] COMMAND 
SERIAL_API.enum[0x01].command[0x33] = {
	notimpl: true,
	name: "RTC_TIMER_CREATE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RTC_TIMER_READ [0x34] COMMAND 
SERIAL_API.enum[0x01].command[0x34] = {
	notimpl: true,
	name: "RTC_TIMER_READ",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RTC_TIMER_DELETE [0x35] COMMAND 
SERIAL_API.enum[0x01].command[0x35] = {
	notimpl: true,
	name: "RTC_TIMER_DELETE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RTC_TIMER_CALL [0x36] COMMAND 
SERIAL_API.enum[0x01].command[0x36] = {
	notimpl: true,
	name: "RTC_TIMER_CALL",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CLEAR_TX_TIMERS [0x37] COMMAND 
SERIAL_API.enum[0x01].command[0x37] = {
	notimpl: true,
	name: "CLEAR_TX_TIMERS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_TX_TIMERS [0x38] COMMAND 
SERIAL_API.enum[0x01].command[0x38] = {
	notimpl: true,
	name: "GET_TX_TIMERS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CLEAR_NETWORK_STATS [0x39] COMMAND 
SERIAL_API.enum[0x01].command[0x39] = {
	notimpl: true,
	name: "CLEAR_NETWORK_STATS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_NETWORK_STATS [0x3a] COMMAND 
SERIAL_API.enum[0x01].command[0x3a] = {
	notimpl: true,
	name: "GET_NETWORK_STATS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_BACKGROUND_RSSI [0x3b] COMMAND 
SERIAL_API.enum[0x01].command[0x3b] = {
	notimpl: true,
	name: "GET_BACKGROUND_RSSI",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_LISTEN_BEFORE_TALK_THRESHOLD [0x3c] COMMAND 
SERIAL_API.enum[0x01].command[0x3c] = {
	notimpl: true,
	name: "SET_LISTEN_BEFORE_TALK_THRESHOLD",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REMOVE_NODE_ID_FROM_NETWORK [0x3f] COMMAND 
SERIAL_API.enum[0x01].command[0x3f] = {
	notimpl: true,
	name: "REMOVE_NODE_ID_FROM_NETWORK",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_LEARN_NODE_STATE [0x40] COMMAND 
SERIAL_API.enum[0x01].command[0x40] = {
	notimpl: true,
	name: "SET_LEARN_NODE_STATE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_NODE_PROTOCOL_INFO [0x41] COMMAND 
SERIAL_API.enum[0x01].command[0x41] = {
	name: "GET_NODE_PROTOCOL_INFO",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00a': {name: "zwave.ProtocolVersion" /* Capability STRUCT_BYTE */ }, 
		'0x00b': {name: "zwave.MaxBaudRate" /* Capability STRUCT_BYTE */ }, 
		'0x00c': {name: "Routing" /* Capability STRUCT_BYTE */ }, 
		'0x00d': {name: "Listening" /* Capability STRUCT_BYTE */ }, 
		'0x01': {name: "zwave.Security" /* BITMASK_BYTE */ }, 
				'0x01-0': {name: "Security" /* zwave.Security BITMASK_BYTE */ },
				'0x01-1': {name: "Controller" /* zwave.Security BITMASK_BYTE */ },
				'0x01-2': {name: "SpecificDevice" /* zwave.Security BITMASK_BYTE */ },
				'0x01-3': {name: "RoutingSlave" /* zwave.Security BITMASK_BYTE */ },
				'0x01-4': {name: "BeamCapability" /* zwave.Security BITMASK_BYTE */ },
				'0x01-5': {name: "Sensor250ms" /* zwave.Security BITMASK_BYTE */ },
				'0x01-6': {name: "Sensor1000ms" /* zwave.Security BITMASK_BYTE */ },
				'0x01-7': {name: "OptionalFunctionality" /* zwave.Security BITMASK_BYTE */ }, 
		'0x02a': {name: "zwave.SpeedExtension" /* Properties1 STRUCT_BYTE */ }, 
		'0x02b': {name: "Reserved2" /* Properties1 STRUCT_BYTE */ }, 
		'0x03': {name: "zwave.BasicDevice" /* CONST */ }, 
		'0x04': {name: "zwave.GenericDevice", alias: "GenericDeviceClass", encaptype: "GEN_DEV_REF" /* CONST */ }, 
		'0x05': {name: "zwave.SpecificDevice", alias: "SpecificDeviceClass", encaptype: "SPEC_DEV_REF" /* MULTI_ARRAY */ }, 
		'0x06': {name: "zwave.CommandClass", alias: "CommandClasses", encaptype: "CMD_CLASS_REF" /* ENUM_ARRAY */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		{
			let _capability = payload.readBYTE();
			if (!payload.insufficientBytes(1)) context['zwave.ProtocolVersion'] = helpers.lookupNameValue((_capability & 0x07), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_PROTOCOL_VERSION.enum); else return context;
			if (!payload.insufficientBytes(1)) context['zwave.MaxBaudRate'] = helpers.lookupNameValue((_capability & 0x38) >> 3, ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_MAX_BAUD_RATE.enum); else return context;
			if (!payload.insufficientBytes(1)) context['Routing'] = ((_capability & 0x40) == 0) ? false : true; else return context;
			if (!payload.insufficientBytes(1)) context['Listening'] = ((_capability & 0x80) == 0) ? false : true; else return context;
		}
		if (!payload.insufficientBytes(1)) context['zwave.Security'] = helpers.lookupBitMaskValues(payload.readBYTE(), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SECURITY.enum); else return context;
		{
			let _properties1 = payload.readBYTE();
			if (!payload.insufficientBytes(1)) context['zwave.SpeedExtension'] = helpers.lookupNameValue((_properties1 & 0x07), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPEED_EXTENSION.enum); else return context;
			if (!payload.insufficientBytes(1)) context['Reserved2'] = (_properties1 & 0xf8) >> 3; else return context;
		}
		if (!payload.insufficientBytes(1)) context['zwave.BasicDevice'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_BASIC_DEVICE.enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.GenericDevice'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_GENERIC_DEVICE.enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.SpecificDevice'] = helpers.lookupNameValue(payload.readBYTE(), MULTI_ARRAY_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE[payload.at(4)].enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.CommandClass'] = helpers.lookupNameValueArray(payload.readBUFFER({}),  ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_COMMAND_CLASS.enum); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_PROTOCOL_VERSION = {
	Reserved: 0x00, 
	Version20: 0x01, 
	VersionZdk50xZdk42x: 0x02, 
	VersionZdk45xAndZdk60x: 0x03, 
	Reserved: 0x04, 
	Reserved: 0x05, 
	Reserved: 0x06, 
	Reserved: 0x07, 
	enum: {
		0x00: "Reserved", 
		0x01: "Version20", 
		0x02: "VersionZdk50xZdk42x", 
		0x03: "VersionZdk45xAndZdk60x", 
		0x04: "Reserved", 
		0x05: "Reserved", 
		0x06: "Reserved", 
		0x07: "Reserved"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_MAX_BAUD_RATE = {
	Reserved: 0x00, 
	'96Kbps': 0x01, 
	'40Kbps': 0x02, 
	enum: {
		0x00: "Reserved", 
		0x01: "96Kbps", 
		0x02: "40Kbps"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SECURITY = {
	Security: 0x01, 
	Controller: 0x02, 
	SpecificDevice: 0x04, 
	RoutingSlave: 0x08, 
	BeamCapability: 0x10, 
	Sensor250ms: 0x20, 
	Sensor1000ms: 0x40, 
	OptionalFunctionality: 0x80, 
	enum: {
		0x01: "Security", 
		0x02: "Controller", 
		0x04: "SpecificDevice", 
		0x08: "RoutingSlave", 
		0x10: "BeamCapability", 
		0x20: "Sensor250ms", 
		0x40: "Sensor1000ms", 
		0x80: "OptionalFunctionality"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPEED_EXTENSION = {
	Reserved: 0x00, 
	'100Kbps': 0x01, 
	'200Kbps': 0x02, 
	enum: {
		0x00: "Reserved", 
		0x01: "100Kbps", 
		0x02: "200Kbps"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_BASIC_DEVICE = {
	Controller: 0x01, 
	StaticController: 0x02, 
	Slave: 0x03, 
	RoutingSlave: 0x04, 
	enum: {
		0x01: "Controller", 
		0x02: "StaticController", 
		0x03: "Slave", 
		0x04: "RoutingSlave"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_GENERIC_DEVICE = {
	GenericController: 0x01, 
	StaticController: 0x02, 
	AvControlPoint: 0x03, 
	Display: 0x04, 
	NetworkExtender: 0x05, 
	Appliance: 0x06, 
	SensorNotification: 0x07, 
	Thermostat: 0x08, 
	WindowCovering: 0x09, 
	RepeaterSlave: 0x0f, 
	SwitchBinary: 0x10, 
	SwitchMultilevel: 0x11, 
	SwitchRemote: 0x12, 
	SwitchToggle: 0x13, 
	ZipNode: 0x15, 
	Ventilation: 0x16, 
	SecurityPanel: 0x17, 
	WallController: 0x18, 
	SensorBinary: 0x20, 
	SensorMultilevel: 0x21, 
	MeterPulse: 0x30, 
	Meter: 0x31, 
	EntryControl: 0x40, 
	SemiInteroperable: 0x50, 
	SensorAlarm: 0xa1, 
	NonInteroperable: 0xff, 
	enum: {
		0x01: "GenericController", 
		0x02: "StaticController", 
		0x03: "AvControlPoint", 
		0x04: "Display", 
		0x05: "NetworkExtender", 
		0x06: "Appliance", 
		0x07: "SensorNotification", 
		0x08: "Thermostat", 
		0x09: "WindowCovering", 
		0x0f: "RepeaterSlave", 
		0x10: "SwitchBinary", 
		0x11: "SwitchMultilevel", 
		0x12: "SwitchRemote", 
		0x13: "SwitchToggle", 
		0x15: "ZipNode", 
		0x16: "Ventilation", 
		0x17: "SecurityPanel", 
		0x18: "WallController", 
		0x20: "SensorBinary", 
		0x21: "SensorMultilevel", 
		0x30: "MeterPulse", 
		0x31: "Meter", 
		0x40: "EntryControl", 
		0x50: "SemiInteroperable", 
		0xa1: "SensorAlarm", 
		0xff: "NonInteroperable"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_AV_CONTROL_POINT = {
	NotUsed: 0x00, 
	SatelliteReceiver: 0x04, 
	SatelliteReceiverV2: 0x11, 
	Doorbell: 0x12, 
	enum: {
		0x00: "NotUsed", 
		0x04: "SatelliteReceiver", 
		0x11: "SatelliteReceiverV2", 
		0x12: "Doorbell"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_DISPLAY = {
	NotUsed: 0x00, 
	SimpleDisplay: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "SimpleDisplay"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ENTRY_CONTROL = {
	NotUsed: 0x00, 
	DoorLock: 0x01, 
	AdvancedDoorLock: 0x02, 
	SecureKeypadDoorLock: 0x03, 
	SecureKeypadDoorLockDeadbolt: 0x04, 
	SecureDoor: 0x05, 
	SecureGate: 0x06, 
	SecureBarrierAddon: 0x07, 
	SecureBarrierOpenOnly: 0x08, 
	SecureBarrierCloseOnly: 0x09, 
	SecureLockbox: 0x0a, 
	SecureKeypad: 0x0b, 
	enum: {
		0x00: "NotUsed", 
		0x01: "DoorLock", 
		0x02: "AdvancedDoorLock", 
		0x03: "SecureKeypadDoorLock", 
		0x04: "SecureKeypadDoorLockDeadbolt", 
		0x05: "SecureDoor", 
		0x06: "SecureGate", 
		0x07: "SecureBarrierAddon", 
		0x08: "SecureBarrierOpenOnly", 
		0x09: "SecureBarrierCloseOnly", 
		0x0a: "SecureLockbox", 
		0x0b: "SecureKeypad"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_GENERIC_CONTROLLER = {
	NotUsed: 0x00, 
	PortableRemoteController: 0x01, 
	PortableSceneController: 0x02, 
	PortableInstallerTool: 0x03, 
	RemoteControlAv: 0x04, 
	RemoteControlSimple: 0x06, 
	enum: {
		0x00: "NotUsed", 
		0x01: "PortableRemoteController", 
		0x02: "PortableSceneController", 
		0x03: "PortableInstallerTool", 
		0x04: "RemoteControlAv", 
		0x06: "RemoteControlSimple"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER = {
	NotUsed: 0x00, 
	SimpleMeter: 0x01, 
	AdvEnergyControl: 0x02, 
	WholeHomeMeterSimple: 0x03, 
	enum: {
		0x00: "NotUsed", 
		0x01: "SimpleMeter", 
		0x02: "AdvEnergyControl", 
		0x03: "WholeHomeMeterSimple"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE = {
	NotUsed: 0x00, 
	enum: {
		0x00: "NotUsed"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_REPEATER_SLAVE = {
	NotUsed: 0x00, 
	RepeaterSlave: 0x01, 
	VirtualNode: 0x02, 
	enum: {
		0x00: "NotUsed", 
		0x01: "RepeaterSlave", 
		0x02: "VirtualNode"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SECURITY_PANEL = {
	NotUsed: 0x00, 
	ZonedSecurityPanel: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "ZonedSecurityPanel"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SEMI_INTEROPERABLE = {
	NotUsed: 0x00, 
	EnergyProduction: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "EnergyProduction"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_ALARM = {
	NotUsed: 0x00, 
	BasicRoutingAlarmSensor: 0x01, 
	RoutingAlarmSensor: 0x02, 
	BasicZensorNetAlarmSensor: 0x03, 
	ZensorNetAlarmSensor: 0x04, 
	AdvZensorNetAlarmSensor: 0x05, 
	BasicRoutingSmokeSensor: 0x06, 
	RoutingSmokeSensor: 0x07, 
	BasicZensorNetSmokeSensor: 0x08, 
	ZensorNetSmokeSensor: 0x09, 
	AdvZensorNetSmokeSensor: 0x0a, 
	AlarmSensor: 0x0b, 
	enum: {
		0x00: "NotUsed", 
		0x01: "BasicRoutingAlarmSensor", 
		0x02: "RoutingAlarmSensor", 
		0x03: "BasicZensorNetAlarmSensor", 
		0x04: "ZensorNetAlarmSensor", 
		0x05: "AdvZensorNetAlarmSensor", 
		0x06: "BasicRoutingSmokeSensor", 
		0x07: "RoutingSmokeSensor", 
		0x08: "BasicZensorNetSmokeSensor", 
		0x09: "ZensorNetSmokeSensor", 
		0x0a: "AdvZensorNetSmokeSensor", 
		0x0b: "AlarmSensor"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_BINARY = {
	NotUsed: 0x00, 
	RoutingSensorBinary: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "RoutingSensorBinary"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_MULTILEVEL = {
	NotUsed: 0x00, 
	RoutingSensorMultilevel: 0x01, 
	ChimneyFan: 0x02, 
	enum: {
		0x00: "NotUsed", 
		0x01: "RoutingSensorMultilevel", 
		0x02: "ChimneyFan"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_STATIC_CONTROLLER = {
	NotUsed: 0x00, 
	PcController: 0x01, 
	SceneController: 0x02, 
	StaticInstallerTool: 0x03, 
	SetTopBox: 0x04, 
	SubSystemController: 0x05, 
	Tv: 0x06, 
	Gateway: 0x07, 
	enum: {
		0x00: "NotUsed", 
		0x01: "PcController", 
		0x02: "SceneController", 
		0x03: "StaticInstallerTool", 
		0x04: "SetTopBox", 
		0x05: "SubSystemController", 
		0x06: "Tv", 
		0x07: "Gateway"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_BINARY = {
	NotUsed: 0x00, 
	PowerSwitchBinary: 0x01, 
	ColorTunableBinary: 0x02, 
	SceneSwitchBinary: 0x03, 
	PowerStrip: 0x04, 
	Siren: 0x05, 
	ValveOpenClose: 0x06, 
	IrrigationController: 0x07, 
	enum: {
		0x00: "NotUsed", 
		0x01: "PowerSwitchBinary", 
		0x02: "ColorTunableBinary", 
		0x03: "SceneSwitchBinary", 
		0x04: "PowerStrip", 
		0x05: "Siren", 
		0x06: "ValveOpenClose", 
		0x07: "IrrigationController"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_MULTILEVEL = {
	NotUsed: 0x00, 
	PowerSwitchMultilevel: 0x01, 
	ColorTunableMultilevel: 0x02, 
	MotorMultiposition: 0x03, 
	SceneSwitchMultilevel: 0x04, 
	ClassAMotorControl: 0x05, 
	ClassBMotorControl: 0x06, 
	ClassCMotorControl: 0x07, 
	FanSwitch: 0x08, 
	enum: {
		0x00: "NotUsed", 
		0x01: "PowerSwitchMultilevel", 
		0x02: "ColorTunableMultilevel", 
		0x03: "MotorMultiposition", 
		0x04: "SceneSwitchMultilevel", 
		0x05: "ClassAMotorControl", 
		0x06: "ClassBMotorControl", 
		0x07: "ClassCMotorControl", 
		0x08: "FanSwitch"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_REMOTE = {
	NotUsed: 0x00, 
	SwitchRemoteBinary: 0x01, 
	SwitchRemoteMultilevel: 0x02, 
	SwitchRemoteToggleBinary: 0x03, 
	SwitchRemoteToggleMultilevel: 0x04, 
	enum: {
		0x00: "NotUsed", 
		0x01: "SwitchRemoteBinary", 
		0x02: "SwitchRemoteMultilevel", 
		0x03: "SwitchRemoteToggleBinary", 
		0x04: "SwitchRemoteToggleMultilevel"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_TOGGLE = {
	NotUsed: 0x00, 
	SwitchToggleBinary: 0x01, 
	SwitchToggleMultilevel: 0x02, 
	enum: {
		0x00: "NotUsed", 
		0x01: "SwitchToggleBinary", 
		0x02: "SwitchToggleMultilevel"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_THERMOSTAT = {
	NotUsed: 0x00, 
	ThermostatHeating: 0x01, 
	ThermostatGeneral: 0x02, 
	SetbackScheduleThermostat: 0x03, 
	SetpointThermostat: 0x04, 
	SetbackThermostat: 0x05, 
	ThermostatGeneralV2: 0x06, 
	enum: {
		0x00: "NotUsed", 
		0x01: "ThermostatHeating", 
		0x02: "ThermostatGeneral", 
		0x03: "SetbackScheduleThermostat", 
		0x04: "SetpointThermostat", 
		0x05: "SetbackThermostat", 
		0x06: "ThermostatGeneralV2"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_VENTILATION = {
	NotUsed: 0x00, 
	ResidentialHrv: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "ResidentialHrv"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WINDOW_COVERING = {
	NotUsed: 0x00, 
	SimpleWindowCovering: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "SimpleWindowCovering"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ZIP_NODE = {
	NotUsed: 0x00, 
	ZipTunNode: 0x01, 
	ZipAdvNode: 0x02, 
	enum: {
		0x00: "NotUsed", 
		0x01: "ZipTunNode", 
		0x02: "ZipAdvNode"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WALL_CONTROLLER = {
	NotUsed: 0x00, 
	BasicWallController: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "BasicWallController"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_NETWORK_EXTENDER = {
	NotUsed: 0x00, 
	SecureExtender: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "SecureExtender"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_APPLIANCE = {
	NotUsed: 0x00, 
	GeneralAppliance: 0x01, 
	KitchenAppliance: 0x02, 
	LaundryAppliance: 0x03, 
	enum: {
		0x00: "NotUsed", 
		0x01: "GeneralAppliance", 
		0x02: "KitchenAppliance", 
		0x03: "LaundryAppliance"
	}
};

const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_NOTIFICATION = {
	NotUsed: 0x00, 
	NotificationSensor: 0x01, 
	enum: {
		0x00: "NotUsed", 
		0x01: "NotificationSensor"
	}
};

const MULTI_ARRAY_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE = {
	0x00: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE,
	0x01: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_GENERIC_CONTROLLER,
	0x02: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_STATIC_CONTROLLER,
	0x03: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_AV_CONTROL_POINT,
	0x04: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_DISPLAY,
	0x05: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_NETWORK_EXTENDER,
	0x06: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_APPLIANCE,
	0x07: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_NOTIFICATION,
	0x08: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_THERMOSTAT,
	0x09: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WINDOW_COVERING,
	0x0f: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_REPEATER_SLAVE,
	0x10: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_BINARY,
	0x11: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_MULTILEVEL,
	0x12: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_REMOTE,
	0x13: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_TOGGLE,
	0x15: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ZIP_NODE,
	0x16: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_VENTILATION,
	0x17: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SECURITY_PANEL,
	0x18: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WALL_CONTROLLER,
	0x20: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_BINARY,
	0x21: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_MULTILEVEL,
	0x30: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE,
	0x31: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER,
	0x40: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ENTRY_CONTROL,
	0x50: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SEMI_INTEROPERABLE,
	0xa1: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_ALARM
};
const ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_COMMAND_CLASS = {
	NoOperation: 0x00, 
	Class: 0x01, 
	ZensorNet: 0x02, 
	Basic: 0x20, 
	ControllerReplication: 0x21, 
	ApplicationStatus: 0x22, 
	Zip: 0x23, 
	SecurityPanelMode: 0x24, 
	SwitchBinary: 0x25, 
	SwitchMultilevel: 0x26, 
	SwitchAll: 0x27, 
	SwitchToggleBinary: 0x28, 
	SwitchToggleMultilevel: 0x29, 
	ChimneyFan: 0x2a, 
	SceneActivation: 0x2b, 
	SceneActuatorConf: 0x2c, 
	SceneControllerConf: 0x2d, 
	SecurityPanelZone: 0x2e, 
	SecurityPanelZoneSensor: 0x2f, 
	SensorBinary: 0x30, 
	SensorMultilevel: 0x31, 
	Meter: 0x32, 
	SwitchColor: 0x33, 
	NetworkManagementInclusion: 0x34, 
	MeterPulse: 0x35, 
	BasicTariffInfo: 0x36, 
	HrvStatus: 0x37, 
	ThermostatHeating: 0x38, 
	HrvControl: 0x39, 
	DcpConfig: 0x3a, 
	DcpMonitor: 0x3b, 
	MeterTblConfig: 0x3c, 
	MeterTblMonitor: 0x3d, 
	MeterTblPush: 0x3e, 
	Prepayment: 0x3f, 
	ThermostatMode: 0x40, 
	PrepaymentEncapsulation: 0x41, 
	ThermostatOperatingState: 0x42, 
	ThermostatSetpoint: 0x43, 
	ThermostatFanMode: 0x44, 
	ThermostatFanState: 0x45, 
	ClimateControlSchedule: 0x46, 
	ThermostatSetback: 0x47, 
	RateTblConfig: 0x48, 
	RateTblMonitor: 0x49, 
	TariffConfig: 0x4a, 
	TariffTblMonitor: 0x4b, 
	DoorLockLogging: 0x4c, 
	NetworkManagementBasic: 0x4d, 
	ScheduleEntryLock: 0x4e, 
	Zip6lowpan: 0x4f, 
	BasicWindowCovering: 0x50, 
	MtpWindowCovering: 0x51, 
	NetworkManagementProxy: 0x52, 
	Schedule: 0x53, 
	NetworkManagementPrimary: 0x54, 
	TransportService: 0x55, 
	Crc16Encap: 0x56, 
	ApplicationCapability: 0x57, 
	ZipNd: 0x58, 
	AssociationGrpInfo: 0x59, 
	DeviceResetLocally: 0x5a, 
	CentralScene: 0x5b, 
	IpAssociation: 0x5c, 
	Antitheft: 0x5d, 
	ZwaveplusInfo: 0x5e, 
	ZipGateway: 0x5f, 
	MultiChannel: 0x60, 
	ZipPortal: 0x61, 
	DoorLock: 0x62, 
	UserCode: 0x63, 
	HumidityControlSetpoint: 0x64, 
	Dmx: 0x65, 
	BarrierOperator: 0x66, 
	NetworkManagementInstallationMaintenance: 0x67, 
	ZipNaming: 0x68, 
	Mailbox: 0x69, 
	WindowCovering: 0x6a, 
	Irrigation: 0x6b, 
	Supervision: 0x6c, 
	HumidityControlMode: 0x6d, 
	HumidityControlOperatingState: 0x6e, 
	EntryControl: 0x6f, 
	Configuration: 0x70, 
	Alarm: 0x71, 
	ManufacturerSpecific: 0x72, 
	Powerlevel: 0x73, 
	InclusionController: 0x74, 
	Protection: 0x75, 
	Lock: 0x76, 
	NodeNaming: 0x77, 
	FirmwareUpdateMd: 0x7a, 
	GroupingName: 0x7b, 
	RemoteAssociationActivate: 0x7c, 
	RemoteAssociation: 0x7d, 
	Battery: 0x80, 
	Clock: 0x81, 
	Hail: 0x82, 
	WakeUp: 0x84, 
	Association: 0x85, 
	Version: 0x86, 
	Indicator: 0x87, 
	Proprietary: 0x88, 
	Language: 0x89, 
	Time: 0x8a, 
	TimeParameters: 0x8b, 
	GeographicLocation: 0x8c, 
	MultiChannelAssociation: 0x8e, 
	MultiCmd: 0x8f, 
	EnergyProduction: 0x90, 
	ManufacturerProprietary: 0x91, 
	ScreenMd: 0x92, 
	ScreenAttributes: 0x93, 
	SimpleAvControl: 0x94, 
	AvContentDirectoryMd: 0x95, 
	AvRendererStatus: 0x96, 
	AvContentSearchMd: 0x97, 
	Security: 0x98, 
	AvTaggingMd: 0x99, 
	IpConfiguration: 0x9a, 
	AssociationCommandConfiguration: 0x9b, 
	SensorAlarm: 0x9c, 
	SilenceAlarm: 0x9d, 
	SensorConfiguration: 0x9e, 
	Security2: 0x9f, 
	Mark: 0xef, 
	NonInteroperable: 0xf0, 
	enum: {
		0x00: "NoOperation", 
		0x01: "Class", 
		0x02: "ZensorNet", 
		0x20: "Basic", 
		0x21: "ControllerReplication", 
		0x22: "ApplicationStatus", 
		0x23: "Zip", 
		0x24: "SecurityPanelMode", 
		0x25: "SwitchBinary", 
		0x26: "SwitchMultilevel", 
		0x27: "SwitchAll", 
		0x28: "SwitchToggleBinary", 
		0x29: "SwitchToggleMultilevel", 
		0x2a: "ChimneyFan", 
		0x2b: "SceneActivation", 
		0x2c: "SceneActuatorConf", 
		0x2d: "SceneControllerConf", 
		0x2e: "SecurityPanelZone", 
		0x2f: "SecurityPanelZoneSensor", 
		0x30: "SensorBinary", 
		0x31: "SensorMultilevel", 
		0x32: "Meter", 
		0x33: "SwitchColor", 
		0x34: "NetworkManagementInclusion", 
		0x35: "MeterPulse", 
		0x36: "BasicTariffInfo", 
		0x37: "HrvStatus", 
		0x38: "ThermostatHeating", 
		0x39: "HrvControl", 
		0x3a: "DcpConfig", 
		0x3b: "DcpMonitor", 
		0x3c: "MeterTblConfig", 
		0x3d: "MeterTblMonitor", 
		0x3e: "MeterTblPush", 
		0x3f: "Prepayment", 
		0x40: "ThermostatMode", 
		0x41: "PrepaymentEncapsulation", 
		0x42: "ThermostatOperatingState", 
		0x43: "ThermostatSetpoint", 
		0x44: "ThermostatFanMode", 
		0x45: "ThermostatFanState", 
		0x46: "ClimateControlSchedule", 
		0x47: "ThermostatSetback", 
		0x48: "RateTblConfig", 
		0x49: "RateTblMonitor", 
		0x4a: "TariffConfig", 
		0x4b: "TariffTblMonitor", 
		0x4c: "DoorLockLogging", 
		0x4d: "NetworkManagementBasic", 
		0x4e: "ScheduleEntryLock", 
		0x4f: "Zip6lowpan", 
		0x50: "BasicWindowCovering", 
		0x51: "MtpWindowCovering", 
		0x52: "NetworkManagementProxy", 
		0x53: "Schedule", 
		0x54: "NetworkManagementPrimary", 
		0x55: "TransportService", 
		0x56: "Crc16Encap", 
		0x57: "ApplicationCapability", 
		0x58: "ZipNd", 
		0x59: "AssociationGrpInfo", 
		0x5a: "DeviceResetLocally", 
		0x5b: "CentralScene", 
		0x5c: "IpAssociation", 
		0x5d: "Antitheft", 
		0x5e: "ZwaveplusInfo", 
		0x5f: "ZipGateway", 
		0x60: "MultiChannel", 
		0x61: "ZipPortal", 
		0x62: "DoorLock", 
		0x63: "UserCode", 
		0x64: "HumidityControlSetpoint", 
		0x65: "Dmx", 
		0x66: "BarrierOperator", 
		0x67: "NetworkManagementInstallationMaintenance", 
		0x68: "ZipNaming", 
		0x69: "Mailbox", 
		0x6a: "WindowCovering", 
		0x6b: "Irrigation", 
		0x6c: "Supervision", 
		0x6d: "HumidityControlMode", 
		0x6e: "HumidityControlOperatingState", 
		0x6f: "EntryControl", 
		0x70: "Configuration", 
		0x71: "Alarm", 
		0x72: "ManufacturerSpecific", 
		0x73: "Powerlevel", 
		0x74: "InclusionController", 
		0x75: "Protection", 
		0x76: "Lock", 
		0x77: "NodeNaming", 
		0x7a: "FirmwareUpdateMd", 
		0x7b: "GroupingName", 
		0x7c: "RemoteAssociationActivate", 
		0x7d: "RemoteAssociation", 
		0x80: "Battery", 
		0x81: "Clock", 
		0x82: "Hail", 
		0x84: "WakeUp", 
		0x85: "Association", 
		0x86: "Version", 
		0x87: "Indicator", 
		0x88: "Proprietary", 
		0x89: "Language", 
		0x8a: "Time", 
		0x8b: "TimeParameters", 
		0x8c: "GeographicLocation", 
		0x8e: "MultiChannelAssociation", 
		0x8f: "MultiCmd", 
		0x90: "EnergyProduction", 
		0x91: "ManufacturerProprietary", 
		0x92: "ScreenMd", 
		0x93: "ScreenAttributes", 
		0x94: "SimpleAvControl", 
		0x95: "AvContentDirectoryMd", 
		0x96: "AvRendererStatus", 
		0x97: "AvContentSearchMd", 
		0x98: "Security", 
		0x99: "AvTaggingMd", 
		0x9a: "IpConfiguration", 
		0x9b: "AssociationCommandConfiguration", 
		0x9c: "SensorAlarm", 
		0x9d: "SilenceAlarm", 
		0x9e: "SensorConfiguration", 
		0x9f: "Security2", 
		0xef: "Mark", 
		0xf0: "NonInteroperable"
	}
};

// SERIAL_API_FUNC [0x01] SET_DEFAULT [0x42] COMMAND 
SERIAL_API.enum[0x01].command[0x42] = {
	notimpl: true,
	name: "SET_DEFAULT",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NEW_CONTROLLER [0x43] COMMAND 
SERIAL_API.enum[0x01].command[0x43] = {
	notimpl: true,
	name: "NEW_CONTROLLER",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REPLICATION_COMMAND_COMPLETE [0x44] COMMAND 
SERIAL_API.enum[0x01].command[0x44] = {
	notimpl: true,
	name: "REPLICATION_COMMAND_COMPLETE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REPLICATION_SEND_DATA [0x45] COMMAND 
SERIAL_API.enum[0x01].command[0x45] = {
	name: "REPLICATION_SEND_DATA",
	comment: "Used when the controller is in replication mode. It sends the payload and expects the receiver to respond with a command complete message (REPLICATION_COMMAND_COMPLETE).Messages sent using this command should always be part of the Z-Wave controllerreplication command class.",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x01': {name: "zwave.Length", alias: "DataLength" /* BYTE */ }, 
		'0x02': {name: "zwave.CommandClass", alias: "CommandClass", encaptype: "CMD_CLASS_REF" /* BYTE */ }, 
		'0x03': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x03-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x03-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }, 
		'0x04': {name: "zwave.Payload", alias: "Data", encaptype: "CMD_DATA" /* VARIANT */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		if ('zwave.Length' in context) payload.writeBYTE(context['zwave.Length']); else return payload.asBuffer();
		if ('zwave.CommandClass' in context) payload.writeBYTE(context['zwave.CommandClass']); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		if ('zwave.Payload' in context) payload.writeBUFFER(context['zwave.Payload'], { length: (payload.at(1) & 0xff) -2 }); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] ASSIGN_RETURN_ROUTE [0x46] COMMAND 
SERIAL_API.enum[0x01].command[0x46] = {
	name: "ASSIGN_RETURN_ROUTE",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "SourceNodeId", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x01': {name: "zwave.DestinationNodeId", alias: "DestinationNodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		if ('zwave.DestinationNodeId' in context) payload.writeBYTE(context['zwave.DestinationNodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] DELETE_RETURN_ROUTE [0x47] COMMAND 
SERIAL_API.enum[0x01].command[0x47] = {
	name: "DELETE_RETURN_ROUTE",
	comment: "Delete all static return routes from a Routing Slave node or Enhanced Slave node. ",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] REQUEST_NODE_NEIGHBOR_UPDATE [0x48] COMMAND 
SERIAL_API.enum[0x01].command[0x48] = {
	name: "REQUEST_NODE_NEIGHBOR_UPDATE",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] APPLICATION_UPDATE [0x49] COMMAND 
SERIAL_API.enum[0x01].command[0x49] = {
	notimpl: true,
	name: "APPLICATION_UPDATE",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.UpdateStatus" /* CONST */ }, 
		'0x01': {name: "zwave.NodeId", alias: "SourceNode", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x02': {name: "zwave.Length", alias: "Length" /* BYTE */ }, 
		'0x03': {name: "zwave.BasicDevice" /* CONST */ }, 
		'0x04': {name: "zwave.GenericDevice", alias: "GenericDeviceClass", encaptype: "GEN_DEV_REF" /* CONST */ }, 
		'0x05': {name: "zwave.SpecificDevice", alias: "SpecificDeviceClass", encaptype: "SPEC_DEV_REF" /* MULTI_ARRAY */ }, 
		'0x06': {name: "zwave.CommandClass", alias: "CommandClasses", encaptype: "CMD_CLASS_REF" /* ENUM_ARRAY */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.UpdateStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_UPDATE_STATUS.enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.NodeId'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.Length'] = payload.readBYTE(); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.BasicDevice'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_BASIC_DEVICE.enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.GenericDevice'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_GENERIC_DEVICE.enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.SpecificDevice'] = helpers.lookupNameValue(payload.readBYTE(), MULTI_ARRAY_SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_SPECIFIC_DEVICE[payload.at(4)].enum); else return context;
		if (!payload.insufficientBytes(1)) context['zwave.CommandClass'] = helpers.lookupNameValueArray(payload.readBUFFER({}),  ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_COMMAND_CLASS.enum); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_UPDATE_STATUS = {
	SucId: 0x10, 
	DeleteDone: 0x20, 
	NewIdAssigned: 0x40, 
	RoutingPending: 0x80, 
	NodeInfoReqFailed: 0x81, 
	NodeInfoReqDone: 0x82, 
	NodeInfoReceived: 0x84, 
	enum: {
		0x10: "SucId", 
		0x20: "DeleteDone", 
		0x40: "NewIdAssigned", 
		0x80: "RoutingPending", 
		0x81: "NodeInfoReqFailed", 
		0x82: "NodeInfoReqDone", 
		0x84: "NodeInfoReceived"
	}
};

const MULTI_ARRAY_SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_SPECIFIC_DEVICE = {
	0x00: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE,
	0x01: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_GENERIC_CONTROLLER,
	0x02: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_STATIC_CONTROLLER,
	0x03: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_AV_CONTROL_POINT,
	0x04: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_DISPLAY,
	0x05: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_NETWORK_EXTENDER,
	0x06: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_APPLIANCE,
	0x07: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_NOTIFICATION,
	0x08: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_THERMOSTAT,
	0x09: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WINDOW_COVERING,
	0x0f: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_REPEATER_SLAVE,
	0x10: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_BINARY,
	0x11: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_MULTILEVEL,
	0x12: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_REMOTE,
	0x13: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_TOGGLE,
	0x15: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ZIP_NODE,
	0x16: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_VENTILATION,
	0x17: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SECURITY_PANEL,
	0x18: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WALL_CONTROLLER,
	0x20: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_BINARY,
	0x21: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_MULTILEVEL,
	0x30: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE,
	0x31: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER,
	0x40: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ENTRY_CONTROL,
	0x50: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SEMI_INTEROPERABLE,
	0xa1: ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_ALARM
};
// SERIAL_API_FUNC [0x01] ADD_NODE_TO_NETWORK [0x4a] COMMAND 
SERIAL_API.enum[0x01].command[0x4a] = {
	notimpl: true,
	name: "ADD_NODE_TO_NETWORK",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REMOVE_NODE_FROM_NETWORK [0x4b] COMMAND 
SERIAL_API.enum[0x01].command[0x4b] = {
	notimpl: true,
	name: "REMOVE_NODE_FROM_NETWORK",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CREATE_NEW_PRIMARY [0x4c] COMMAND 
SERIAL_API.enum[0x01].command[0x4c] = {
	notimpl: true,
	name: "CREATE_NEW_PRIMARY",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] CONTROLLER_CHANGE [0x4d] COMMAND 
SERIAL_API.enum[0x01].command[0x4d] = {
	notimpl: true,
	name: "CONTROLLER_CHANGE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RESERVED_FN [0x4e] COMMAND 
SERIAL_API.enum[0x01].command[0x4e] = {
	notimpl: true,
	name: "RESERVED_FN",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] ASSIGN_PRIORITY_RETURN_ROUTE [0x4f] COMMAND 
SERIAL_API.enum[0x01].command[0x4f] = {
	notimpl: true,
	name: "ASSIGN_PRIORITY_RETURN_ROUTE",
	comment: "Devkit 6.6x",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_LEARN_MODE [0x50] COMMAND 
SERIAL_API.enum[0x01].command[0x50] = {
	notimpl: true,
	name: "SET_LEARN_MODE",
	comment: "slave only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] ASSIGN_SUC_RETURN_ROUTE [0x51] COMMAND 
SERIAL_API.enum[0x01].command[0x51] = {
	name: "ASSIGN_SUC_RETURN_ROUTE",
	comment: "Used to assign a route between a routing slave and the SUC node. This route is used when routing slave want to get routes updates from the SUC node.",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] ENABLE_SUC [0x52] COMMAND 
SERIAL_API.enum[0x01].command[0x52] = {
	name: "ENABLE_SUC",
	comment: " Enable / disable the Automatic network update functionality",
	param: { 
		'0x00': {name: "zwave.Enabled" /* CONST */ }, 
		'0x01': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x01-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x01-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }, 
		'0x02': {name: "Capabilities" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.Enabled' in context) payload.writeBYTE(helpers.getValue(context, 'zwave.Enabled', ENUM_SERIAL_API_FUNC_ENABLE_SUC_ZWAVE_ENABLED)); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		if ('Capabilities' in context) payload.writeBYTE(context['Capabilities']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

const ENUM_SERIAL_API_FUNC_ENABLE_SUC_ZWAVE_ENABLED = {
	Disabled: 0x00, 
	Enabled: 0x01, 
	enum: {
		0x00: "Disabled", 
		0x01: "Enabled"
	}
};

// SERIAL_API_FUNC [0x01] REQUEST_NETWORK_UPDATE [0x53] COMMAND 
SERIAL_API.enum[0x01].command[0x53] = {
	name: "REQUEST_NETWORK_UPDATE",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] SET_SUC_NODE_ID [0x54] COMMAND 
SERIAL_API.enum[0x01].command[0x54] = {
	name: "SET_SUC_NODE_ID",
	comment: "Enable /disable a specified static controller  of functioning as the Static Update Controller",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x01': {name: "Enabled" /* CONST */ }, 
		'0x02': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x02-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }, 
		'0x03': {name: "Capabilities" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		if ('Enabled' in context) payload.writeBYTE(helpers.getValue(context, 'Enabled', ENUM_SERIAL_API_FUNC_ENABLE_SUC_ZWAVE_ENABLED)); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		if ('Capabilities' in context) payload.writeBYTE(context['Capabilities']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] DELETE_SUC_RETURN_ROUTE [0x55] COMMAND 
SERIAL_API.enum[0x01].command[0x55] = {
	name: "DELETE_SUC_RETURN_ROUTE",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] GET_SUC_NODE_ID [0x56] COMMAND 
SERIAL_API.enum[0x01].command[0x56] = {
	name: "GET_SUC_NODE_ID",
	comment: " Get the currently registered SUC node ID.return SUC node ID, ZERO if no SUC available",
	param: { /* no request parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	response: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.NodeId'] = payload.readBYTE(); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] SEND_SUC_ID [0x57] COMMAND 
SERIAL_API.enum[0x01].command[0x57] = {
	name: "SEND_SUC_ID",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }, 
		'0x01': {name: "Enabled" /* CONST */ }, 
		'0x02': {name: "zwave.TxOptions" /* BITMASK_BYTE */ }, 
				'0x02-0': {name: "None" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-1': {name: "LowPower" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-2': {name: "AutoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-3': {name: "Reserved" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-4': {name: "NoRoute" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-5': {name: "Explore" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-6': {name: "NoRetransmission" /* zwave.TxOptions BITMASK_BYTE */ },
				'0x02-7': {name: "HighPower" /* zwave.TxOptions BITMASK_BYTE */ }, 
		'0x03': {name: "Capabilities" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		if ('Enabled' in context) payload.writeBYTE(helpers.getValue(context, 'Enabled', ENUM_SERIAL_API_FUNC_ENABLE_SUC_ZWAVE_ENABLED)); else return payload.asBuffer();
		if ('zwave.TxOptions' in context) payload.writeBYTE(helpers.getBitMaskValue(context, 'zwave.TxOptions', ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS)); else return payload.asBuffer();
		if ('Capabilities' in context) payload.writeBYTE(context['Capabilities']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] ASSIGN_PRIORITY_SUC_RETURN_ROUTE [0x58] COMMAND 
SERIAL_API.enum[0x01].command[0x58] = {
	notimpl: true,
	name: "ASSIGN_PRIORITY_SUC_RETURN_ROUTE",
	comment: "Devkit 6.6x",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REDISCOVERY_NEEDED [0x59] COMMAND 
SERIAL_API.enum[0x01].command[0x59] = {
	notimpl: true,
	name: "REDISCOVERY_NEEDED",
	comment: "obsolete",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REQUEST_NODE_NEIGHBOR_UPDATE_OPTION [0x5a] COMMAND 
SERIAL_API.enum[0x01].command[0x5a] = {
	notimpl: true,
	name: "REQUEST_NODE_NEIGHBOR_UPDATE_OPTION",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SUPPORT9600_ONLY [0x5b] COMMAND 
SERIAL_API.enum[0x01].command[0x5b] = {
	notimpl: true,
	name: "SUPPORT9600_ONLY",
	comment: "slave only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REQUEST_NEW_ROUTE_DESTINATIONS [0x5c] COMMAND 
SERIAL_API.enum[0x01].command[0x5c] = {
	notimpl: true,
	name: "REQUEST_NEW_ROUTE_DESTINATIONS",
	comment: "enhanced routing slave only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IS_NODE_WITHIN_DIRECT_RANGE [0x5d] COMMAND 
SERIAL_API.enum[0x01].command[0x5d] = {
	notimpl: true,
	name: "IS_NODE_WITHIN_DIRECT_RANGE",
	comment: "enhanced routing slave only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] EXPLORE_REQUEST_INCLUSION [0x5e] COMMAND 
SERIAL_API.enum[0x01].command[0x5e] = {
	notimpl: true,
	name: "EXPLORE_REQUEST_INCLUSION",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] EXPLORE_REQUEST_EXCLUSION [0x5f] COMMAND 
SERIAL_API.enum[0x01].command[0x5f] = {
	notimpl: true,
	name: "EXPLORE_REQUEST_EXCLUSION",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REQUEST_NODE_INFO [0x60] COMMAND 
SERIAL_API.enum[0x01].command[0x60] = {
	name: "REQUEST_NODE_INFO",
	param: { 
		'0x00': {name: "zwave.NodeId", alias: "NodeId", encaptype: "NODE_NUMBER" /* BYTE */ }
	},
	encode: function (context) {
		var payload = BufferStream.alloc();
		if ('zwave.NodeId' in context) payload.writeBYTE(context['zwave.NodeId']); else return payload.asBuffer();
		return payload.asBuffer();
	},
	response: { 
		'0x00': {name: "zwave.TxStatus", encaptype: "TX_STATUS" /* CONST */ }
	},
	decode: function (payload) {
		var context = {};  payload = BufferStream.from(payload);
		if (!payload.insufficientBytes(1)) context['zwave.TxStatus'] = helpers.lookupNameValue(payload.readBYTE(), ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS.enum); else return context;
		return context;
	}
};

// SERIAL_API_FUNC [0x01] REMOVE_FAILED_NODE_ID [0x61] COMMAND 
SERIAL_API.enum[0x01].command[0x61] = {
	notimpl: true,
	name: "REMOVE_FAILED_NODE_ID",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IS_FAILED_NODE_ID [0x62] COMMAND 
SERIAL_API.enum[0x01].command[0x62] = {
	notimpl: true,
	name: "IS_FAILED_NODE_ID",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] REPLACE_FAILED_NODE [0x63] COMMAND 
SERIAL_API.enum[0x01].command[0x63] = {
	notimpl: true,
	name: "REPLACE_FAILED_NODE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_ROUTING_MAX_6_00 [0x65] COMMAND 
SERIAL_API.enum[0x01].command[0x65] = {
	notimpl: true,
	name: "SET_ROUTING_MAX_6_00",
	comment: "In Zensys 6.0x the function id was wrong so this wrong function id is still supported",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IS_PRIMARY_CTRL [0x66] COMMAND 
SERIAL_API.enum[0x01].command[0x66] = {
	notimpl: true,
	name: "IS_PRIMARY_CTRL",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] AES_ECB [0x67] COMMAND 
SERIAL_API.enum[0x01].command[0x67] = {
	notimpl: true,
	name: "AES_ECB",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] TIMER_START [0x70] COMMAND 
SERIAL_API.enum[0x01].command[0x70] = {
	notimpl: true,
	name: "TIMER_START",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] TIMER_RESTART [0x71] COMMAND 
SERIAL_API.enum[0x01].command[0x71] = {
	notimpl: true,
	name: "TIMER_RESTART",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] TIMER_CANCEL [0x72] COMMAND 
SERIAL_API.enum[0x01].command[0x72] = {
	notimpl: true,
	name: "TIMER_CANCEL",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] TIMER_CALL [0x73] COMMAND 
SERIAL_API.enum[0x01].command[0x73] = {
	notimpl: true,
	name: "TIMER_CALL",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] FIRMWARE_UPDATE_NVM [0x78] COMMAND 
SERIAL_API.enum[0x01].command[0x78] = {
	notimpl: true,
	name: "FIRMWARE_UPDATE_NVM",
	comment: "Firmware Update API",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_ROUTING_TABLE_LINE [0x80] COMMAND 
SERIAL_API.enum[0x01].command[0x80] = {
	notimpl: true,
	name: "GET_ROUTING_TABLE_LINE",
	comment: "Installer API Only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_TX_COUNTER [0x81] COMMAND 
SERIAL_API.enum[0x01].command[0x81] = {
	notimpl: true,
	name: "GET_TX_COUNTER",
	comment: "Installer API Only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RESET_TX_COUNTER [0x82] COMMAND 
SERIAL_API.enum[0x01].command[0x82] = {
	notimpl: true,
	name: "RESET_TX_COUNTER",
	comment: "Installer API Only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] STORE_NODEINFO [0x83] COMMAND 
SERIAL_API.enum[0x01].command[0x83] = {
	notimpl: true,
	name: "STORE_NODEINFO",
	comment: "Installer API Only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] STORE_HOMEID [0x84] COMMAND 
SERIAL_API.enum[0x01].command[0x84] = {
	notimpl: true,
	name: "STORE_HOMEID",
	comment: "Installer API Only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] LOCK_ROUTE_RESPONSE [0x90] COMMAND 
SERIAL_API.enum[0x01].command[0x90] = {
	notimpl: true,
	name: "LOCK_ROUTE_RESPONSE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_PRIORITY_ROUTE [0x92] COMMAND 
SERIAL_API.enum[0x01].command[0x92] = {
	notimpl: true,
	name: "GET_PRIORITY_ROUTE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_PRIORITY_ROUTE [0x93] COMMAND 
SERIAL_API.enum[0x01].command[0x93] = {
	notimpl: true,
	name: "SET_PRIORITY_ROUTE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] TEST [0x95] COMMAND 
SERIAL_API.enum[0x01].command[0x95] = {
	notimpl: true,
	name: "TEST",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] EXT [0x98] COMMAND 
SERIAL_API.enum[0x01].command[0x98] = {
	notimpl: true,
	name: "EXT",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SECURITY_SETUP [0x9c] COMMAND 
SERIAL_API.enum[0x01].command[0x9c] = {
	notimpl: true,
	name: "SECURITY_SETUP",
	comment: "slave_enhanced_232 and slave_routing only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] APPLICATION_SECURITY_EVENT [0x9d] COMMAND 
SERIAL_API.enum[0x01].command[0x9d] = {
	notimpl: true,
	name: "APPLICATION_SECURITY_EVENT",
	comment: "slave_enhanced_232 and slave_routing only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] APPL_SLAVE_NODE_INFORMATION [0xa0] COMMAND 
SERIAL_API.enum[0x01].command[0xa0] = {
	notimpl: true,
	name: "APPL_SLAVE_NODE_INFORMATION",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] APPLICATION_SLAVE_COMMAND_HANDLER [0xa1] COMMAND 
SERIAL_API.enum[0x01].command[0xa1] = {
	notimpl: true,
	name: "APPLICATION_SLAVE_COMMAND_HANDLER",
	comment: "OBSOLETE in 4.5/6.0, ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_SLAVE_NODE_INFORMATION [0xa2] COMMAND 
SERIAL_API.enum[0x01].command[0xa2] = {
	notimpl: true,
	name: "SEND_SLAVE_NODE_INFORMATION",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_SLAVE_DATA [0xa3] COMMAND 
SERIAL_API.enum[0x01].command[0xa3] = {
	notimpl: true,
	name: "SEND_SLAVE_DATA",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_SLAVE_LEARN_MODE [0xa4] COMMAND 
SERIAL_API.enum[0x01].command[0xa4] = {
	notimpl: true,
	name: "SET_SLAVE_LEARN_MODE",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_VIRTUAL_NODES [0xa5] COMMAND 
SERIAL_API.enum[0x01].command[0xa5] = {
	notimpl: true,
	name: "GET_VIRTUAL_NODES",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IS_VIRTUAL_NODE [0xa6] COMMAND 
SERIAL_API.enum[0x01].command[0xa6] = {
	notimpl: true,
	name: "IS_VIRTUAL_NODE",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RESERVED_SSD [0xa7] COMMAND 
SERIAL_API.enum[0x01].command[0xa7] = {
	notimpl: true,
	name: "RESERVED_SSD",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] APPLICATION_COMMAND_HANDLER_BRIDGE [0xa8] COMMAND 
SERIAL_API.enum[0x01].command[0xa8] = {
	notimpl: true,
	name: "APPLICATION_COMMAND_HANDLER_BRIDGE",
	comment: "for 4.5x/6.0x based Controller Bridge applications, ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA_BRIDGE [0xa9] COMMAND 
SERIAL_API.enum[0x01].command[0xa9] = {
	notimpl: true,
	name: "SEND_DATA_BRIDGE",
	comment: "for 4.5x/6.0x, adds sourceNodeID to the parameter list, ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA_META_BRIDGE [0xaa] COMMAND 
SERIAL_API.enum[0x01].command[0xaa] = {
	notimpl: true,
	name: "SEND_DATA_META_BRIDGE",
	comment: "OBSOLETE, ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_DATA_MULTI_BRIDGE [0xab] COMMAND 
SERIAL_API.enum[0x01].command[0xab] = {
	notimpl: true,
	name: "SEND_DATA_MULTI_BRIDGE",
	comment: "ZW_CONTROLLER_BRIDGE only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PWR_SETSTOPMODE [0xb0] COMMAND 
SERIAL_API.enum[0x01].command[0xb0] = {
	notimpl: true,
	name: "PWR_SETSTOPMODE",
	comment: "ZW102 only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PWR_CLK_PD [0xb1] COMMAND 
SERIAL_API.enum[0x01].command[0xb1] = {
	notimpl: true,
	name: "PWR_CLK_PD",
	comment: "ZW102 only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PWR_CLK_PUP [0xb2] COMMAND 
SERIAL_API.enum[0x01].command[0xb2] = {
	notimpl: true,
	name: "PWR_CLK_PUP",
	comment: "ZW102 only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PWR_SELECT_CLK [0xb3] COMMAND 
SERIAL_API.enum[0x01].command[0xb3] = {
	notimpl: true,
	name: "PWR_SELECT_CLK",
	comment: "ZW102 only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_WUT_TIMEOUT [0xb4] COMMAND 
SERIAL_API.enum[0x01].command[0xb4] = {
	notimpl: true,
	name: "SET_WUT_TIMEOUT",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IS_WUT_KICKED [0xb5] COMMAND 
SERIAL_API.enum[0x01].command[0xb5] = {
	notimpl: true,
	name: "IS_WUT_KICKED",
	comment: "ZW201 only",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] WATCHDOG_ENABLE [0xb6] COMMAND 
SERIAL_API.enum[0x01].command[0xb6] = {
	notimpl: true,
	name: "WATCHDOG_ENABLE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] WATCHDOG_DISABLE [0xb7] COMMAND 
SERIAL_API.enum[0x01].command[0xb7] = {
	notimpl: true,
	name: "WATCHDOG_DISABLE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] WATCHDOG_KICK [0xb8] COMMAND 
SERIAL_API.enum[0x01].command[0xb8] = {
	notimpl: true,
	name: "WATCHDOG_KICK",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_EXT_INT_LEVEL [0xb9] COMMAND 
SERIAL_API.enum[0x01].command[0xb9] = {
	notimpl: true,
	name: "SET_EXT_INT_LEVEL",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] RF_POWER_LEVEL_GET [0xba] COMMAND 
SERIAL_API.enum[0x01].command[0xba] = {
	notimpl: true,
	name: "RF_POWER_LEVEL_GET",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_NEIGHBOR_COUNT [0xbb] COMMAND 
SERIAL_API.enum[0x01].command[0xbb] = {
	notimpl: true,
	name: "GET_NEIGHBOR_COUNT",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] ARE_NODES_NEIGHBOURS [0xbc] COMMAND 
SERIAL_API.enum[0x01].command[0xbc] = {
	notimpl: true,
	name: "ARE_NODES_NEIGHBOURS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] TYPE_LIBRARY [0xbd] COMMAND 
SERIAL_API.enum[0x01].command[0xbd] = {
	notimpl: true,
	name: "TYPE_LIBRARY",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SEND_TEST_FRAME [0xbe] COMMAND 
SERIAL_API.enum[0x01].command[0xbe] = {
	notimpl: true,
	name: "SEND_TEST_FRAME",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_PROTOCOL_STATUS [0xbf] COMMAND 
SERIAL_API.enum[0x01].command[0xbf] = {
	notimpl: true,
	name: "GET_PROTOCOL_STATUS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_PROMISCUOUS_MODE [0xd0] COMMAND 
SERIAL_API.enum[0x01].command[0xd0] = {
	notimpl: true,
	name: "SET_PROMISCUOUS_MODE",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROMISCUOUS_APPLICATION_COMMAND_HANDLER [0xd1] COMMAND 
SERIAL_API.enum[0x01].command[0xd1] = {
	notimpl: true,
	name: "PROMISCUOUS_APPLICATION_COMMAND_HANDLER",
	version: "5",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] WATCHDOG_START [0xd2] COMMAND 
SERIAL_API.enum[0x01].command[0xd2] = {
	notimpl: true,
	name: "WATCHDOG_START",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] WATCHDOG_STOP [0xd3] COMMAND 
SERIAL_API.enum[0x01].command[0xd3] = {
	notimpl: true,
	name: "WATCHDOG_STOP",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SET_ROUTING_MAX [0xd4] COMMAND 
SERIAL_API.enum[0x01].command[0xd4] = {
	notimpl: true,
	name: "SET_ROUTING_MAX",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] GET_ROUTING_MAX [0xd5] COMMAND 
SERIAL_API.enum[0x01].command[0xd5] = {
	notimpl: true,
	name: "GET_ROUTING_MAX",
	comment: "OBSOLETE, UNIMPLEMENTED",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NUNIT_CMD [0xe0] COMMAND 
SERIAL_API.enum[0x01].command[0xe0] = {
	notimpl: true,
	name: "NUNIT_CMD",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NUNIT_INIT [0xe1] COMMAND 
SERIAL_API.enum[0x01].command[0xe1] = {
	notimpl: true,
	name: "NUNIT_INIT",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NUNIT_LIST [0xe2] COMMAND 
SERIAL_API.enum[0x01].command[0xe2] = {
	notimpl: true,
	name: "NUNIT_LIST",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NUNIT_RUN [0xe3] COMMAND 
SERIAL_API.enum[0x01].command[0xe3] = {
	notimpl: true,
	name: "NUNIT_RUN",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] NUNIT_END [0xe4] COMMAND 
SERIAL_API.enum[0x01].command[0xe4] = {
	notimpl: true,
	name: "NUNIT_END",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IO_PORT_STATUS [0xe5] COMMAND 
SERIAL_API.enum[0x01].command[0xe5] = {
	notimpl: true,
	name: "IO_PORT_STATUS",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] IO_PORT [0xe6] COMMAND 
SERIAL_API.enum[0x01].command[0xe6] = {
	notimpl: true,
	name: "IO_PORT",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SERIAL_API_POWER_MANAGEMENT [0xee] COMMAND 
SERIAL_API.enum[0x01].command[0xee] = {
	notimpl: true,
	name: "SERIAL_API_POWER_MANAGEMENT",
	comment: "Allocated for Power Management",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] SERIAL_API_READY [0xef] COMMAND 
SERIAL_API.enum[0x01].command[0xef] = {
	notimpl: true,
	name: "SERIAL_API_READY",
	comment: "Allocated for Power Management",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_0 [0xf0] COMMAND 
SERIAL_API.enum[0x01].command[0xf0] = {
	notimpl: true,
	name: "PROPRIETARY_0",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_1 [0xf1] COMMAND 
SERIAL_API.enum[0x01].command[0xf1] = {
	notimpl: true,
	name: "PROPRIETARY_1",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_2 [0xf2] COMMAND 
SERIAL_API.enum[0x01].command[0xf2] = {
	notimpl: true,
	name: "PROPRIETARY_2",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_3 [0xf3] COMMAND 
SERIAL_API.enum[0x01].command[0xf3] = {
	notimpl: true,
	name: "PROPRIETARY_3",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_4 [0xf4] COMMAND 
SERIAL_API.enum[0x01].command[0xf4] = {
	notimpl: true,
	name: "PROPRIETARY_4",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_5 [0xf5] COMMAND 
SERIAL_API.enum[0x01].command[0xf5] = {
	notimpl: true,
	name: "PROPRIETARY_5",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_6 [0xf6] COMMAND 
SERIAL_API.enum[0x01].command[0xf6] = {
	notimpl: true,
	name: "PROPRIETARY_6",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_7 [0xf7] COMMAND 
SERIAL_API.enum[0x01].command[0xf7] = {
	notimpl: true,
	name: "PROPRIETARY_7",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_8 [0xf8] COMMAND 
SERIAL_API.enum[0x01].command[0xf8] = {
	notimpl: true,
	name: "PROPRIETARY_8",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_9 [0xf9] COMMAND 
SERIAL_API.enum[0x01].command[0xf9] = {
	notimpl: true,
	name: "PROPRIETARY_9",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_A [0xfa] COMMAND 
SERIAL_API.enum[0x01].command[0xfa] = {
	notimpl: true,
	name: "PROPRIETARY_A",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_B [0xfb] COMMAND 
SERIAL_API.enum[0x01].command[0xfb] = {
	notimpl: true,
	name: "PROPRIETARY_B",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_C [0xfc] COMMAND 
SERIAL_API.enum[0x01].command[0xfc] = {
	notimpl: true,
	name: "PROPRIETARY_C",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_D [0xfd] COMMAND 
SERIAL_API.enum[0x01].command[0xfd] = {
	notimpl: true,
	name: "PROPRIETARY_D",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] PROPRIETARY_E [0xfe] COMMAND 
SERIAL_API.enum[0x01].command[0xfe] = {
	notimpl: true,
	name: "PROPRIETARY_E",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

// SERIAL_API_FUNC [0x01] UNKNOWN [0xff] COMMAND 
SERIAL_API.enum[0x01].command[0xff] = {
	notimpl: true,
	name: "UNKNOWN",
	param: { /* no parameters */ },
	encode: function (context) { return Buffer.alloc(0) },
	decode: function (payload) { return {} }
};

module.exports.ENUM = {
	'SERIAL_API_FUNC_APPLICATION_COMMAND_HANDLER_ZWAVE_RX_STATUS': ENUM_SERIAL_API_FUNC_APPLICATION_COMMAND_HANDLER_ZWAVE_RX_STATUS,
	'SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_UPDATE_STATUS': ENUM_SERIAL_API_FUNC_APPLICATION_UPDATE_ZWAVE_UPDATE_STATUS,
	'SERIAL_API_FUNC_ENABLE_SUC_ZWAVE_ENABLED': ENUM_SERIAL_API_FUNC_ENABLE_SUC_ZWAVE_ENABLED,
	'SERIAL_API_FUNC_GET_CONTROLLER_CAPABILITIES_BITMASK': ENUM_SERIAL_API_FUNC_GET_CONTROLLER_CAPABILITIES_BITMASK,
	'SERIAL_API_FUNC_GET_INIT_DATA_': ENUM_SERIAL_API_FUNC_GET_INIT_DATA_,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_BASIC_DEVICE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_BASIC_DEVICE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_COMMAND_CLASS': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_COMMAND_CLASS,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_GENERIC_DEVICE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_GENERIC_DEVICE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_MAX_BAUD_RATE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_MAX_BAUD_RATE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_PROTOCOL_VERSION': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_PROTOCOL_VERSION,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SECURITY': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SECURITY,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_APPLIANCE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_APPLIANCE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_AV_CONTROL_POINT': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_AV_CONTROL_POINT,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_DISPLAY': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_DISPLAY,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ENTRY_CONTROL': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ENTRY_CONTROL,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_GENERIC_CONTROLLER': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_GENERIC_CONTROLLER,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_METER_PULSE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_NETWORK_EXTENDER': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_NETWORK_EXTENDER,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_REPEATER_SLAVE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_REPEATER_SLAVE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SECURITY_PANEL': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SECURITY_PANEL,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SEMI_INTEROPERABLE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SEMI_INTEROPERABLE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_ALARM': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_ALARM,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_BINARY': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_BINARY,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_MULTILEVEL': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_MULTILEVEL,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_NOTIFICATION': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SENSOR_NOTIFICATION,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_STATIC_CONTROLLER': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_STATIC_CONTROLLER,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_BINARY': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_BINARY,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_MULTILEVEL': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_MULTILEVEL,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_REMOTE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_REMOTE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_TOGGLE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_SWITCH_TOGGLE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_THERMOSTAT': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_THERMOSTAT,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_VENTILATION': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_VENTILATION,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WALL_CONTROLLER': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WALL_CONTROLLER,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WINDOW_COVERING': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_WINDOW_COVERING,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ZIP_NODE': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPECIFIC_DEVICE_ZIP_NODE,
	'SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPEED_EXTENSION': ENUM_SERIAL_API_FUNC_GET_NODE_PROTOCOL_INFO_ZWAVE_SPEED_EXTENSION,
	'SERIAL_API_FUNC_GET_VERSION_ZWAVE_LIBRARY_TYPE': ENUM_SERIAL_API_FUNC_GET_VERSION_ZWAVE_LIBRARY_TYPE,
	'SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS': ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_OPTIONS,
	'SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS': ENUM_SERIAL_API_FUNC_SEND_DATA_ZWAVE_TX_STATUS
};

/*
 * End of system-generated code
 */