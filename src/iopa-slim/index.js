/*
 * Internet Open Protocol Abstraction (IOPA)
 * Copyright (c) 2017 Internet of Protocols Alliance 
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

const constants = {
    SERVER: {
        Id: "server.Id",
        Capabilities: "server.Capabilities",
        IsBuilt: "server.IsBuilt",
        Pipeline: "server.Pipeline",
        Logger: "server.Logger",
        Factory: "server.Factory",
        CancelToken: "server.CancelToken",
        CancelTokenSource: "server.CancelTokenSource",
        AppId: "server.AppId",
        IsChild: "server.IsChild",
        ParentContext: "server.ParentContext",
        RawStream: "server.RawStream",
        RawTransport: "server.RawTransport",
        Server: "server.Server",
        IsLocalOrigin: "server.IsLocalOrigin",
        IsRequest: "server.IsRequest",
        Version: "server.Version"
    },
    DEVICE: {
        ProductKey: "device.ProductKey",
        Id: "device.Id",
        Handler: "device.Handler",
        Capability: "urn:io:iopa:device",
        HandlerName: "device.HandlerName"
    }
}

const util = require('util'),
    SERVER = constants.SERVER;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
* Slim Self-Contained AppBuilder Class with no dependencies outside this single file
* AppBuulderServer has two additional features for creating Servers
*   - useServer(scheme, fn) hooks connect methods
*   - use hooks send in addition to invoke
*
* Use Case; Compile/Build all Middleware in a Pipeline into single IOPA AppFunc
*
* @class AppBuilderServer
* @public
*/
function AppBuilderForServers() {
    _classCallCheck(this, AppBuilderForServers);
    AppBuilder.call(this);
}

util.inherits(AppBuilderForServers, AppBuilder);

/**
* Add Middleware Function to AppBuilder pipeline
*
* @param mw the middleware to add 
* @override
*/
AppBuilderForServers.prototype.use = function (scheme, mw) {

    if (typeof scheme !== 'string' && !(scheme instanceof String)) {
        mw = scheme;
        scheme = null;
    }

    var mw_instance = Object.create(mw.prototype);
    mw.call(mw_instance, this);

    if (scheme) {
        this.scheme = scheme;
        this.createServer = createServer_forServers.bind(mw_instance, scheme, this.createServer || function () { throw new Error("no registered transport provider"); });
    } else if (mw_instance.createServer) {

        if (!this.scheme)
            throw new Error("IOPA AppBuilder: createServer function found in middleware, but no server scheme registered with app.use(scheme, fn) ");

        this.createServer = mw_instance.createServer.bind(mw_instance, this.scheme, this.createServer || function () { throw new Error("no registered transport provider"); });

    } else if (mw_instance.send) {

        if (!this.scheme)
            throw new Error("IOPA AppBuilder: send function found in middleware, but no server scheme registered with app.use(scheme, fn) ");

        this.createServer = createServer_forMiddleware.bind(mw_instance, this.scheme, this.createServer || function () { throw new Error("no registered transport provider"); });

    }

    if (mw_instance.invoke)
        this.middleware.push(mw_instance.invoke.bind(mw_instance));

    return this;
}


/***
* Slim Self-Contained AppBuilder Class with no dependencies outside this single file
*
* Use Case; Compile/Build all Middleware in a Pipeline into single IOPA AppFunc
*
* @class AppBuilder
* @public
*/
function AppBuilder() {
    _classCallCheck(this, AppBuilder);
    this.properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (typeof this.properties == 'string' || this.properties instanceof String)
        this.properties = { [SERVER.AppId]: this.properties };

    var defaults = {};
    // defaults[SERVER.AppId] = guidFactory();
    defaults[SERVER.Capabilities] = {}
    defaults[SERVER.Logger] = console;

    merge(this.properties, defaults);

    this.middleware = [];

    this._contextFactory = new Factory();
    this._contextFactory[SERVER.Logger] = this.properties[SERVER.Logger];
}

Object.defineProperty(AppBuilder.prototype, "log", {
    get: function () {
        return this.properties[SERVER.Logger];
    }
});

AppBuilder.prototype.createContext = function () {

    var context = this._contextFactory.alloc();
    var app = this;

    return context;

};

/**
* Add Middleware Function to AppBuilder pipeline
*
* @param mw the middleware to add 
*/
AppBuilder.prototype.use = function use(mw) {

    var mw_instance = Object.create(mw.prototype);
    mw.call(mw_instance, this);

    if (mw_instance.invoke)
        this.middleware.push(mw_instance.invoke.bind(mw_instance));

    return this;
}


/**
* Compile/Build all Middleware in the Pipeline into single IOPA AppFunc
*
* @return {function(context): {Promise} IOPA application 
* @public
*/
AppBuilder.prototype.build = function build() {

    this.scheme = undefined;

    var middleware = [DefaultMiddleware].concat(this.middleware).concat([DefaultApp]);

    var pipeline = this.compose_(middleware);
    this.properties[SERVER.Pipeline] = pipeline;
    return pipeline;
}

/**
* Call App Invoke Pipeline to process given context
*
* @return {Promise} Promise that fulfills when pipeline is complete
* @public
*/
AppBuilder.prototype.invoke = function invoke(context) {
    return this.properties[SERVER.Pipeline].call(this, context);
}

/**
* Compile/Build all Middleware in the Pipeline into single IOPA AppFunc
*
* @return {function(context): {Promise} IOPA application 
* @public
*/
AppBuilder.prototype.compose_ = function compose_(middleware) {
    var app = this;

    var i, next, curr;
    i = middleware.length;
    next = function (context) { return Promise.resolve(context); };
    nextinvoke = function (context) { return Promise.resolve(context); };

    while (i--) {
        curr = middleware[i];
        next = (function (fn, prev, context) {
            var _next = prev.bind(app, context);
            _next.invoke = prev;
            return fn.call(app, context, _next)
        }.bind(app, curr, next));
    }

    return function app_pipeline(context) {
        const capabilities = app.properties[SERVER.Capabilities];

        context[SERVER.Capabilities] = context[SERVER.Capabilities] || {};
        merge(context[SERVER.Capabilities], clone(capabilities));

        if (context.response) {
            context.response[SERVER.Capabilities] = context.response[SERVER.Capabilities] || {};
            merge(context.response[SERVER.Capabilities], clone(capabilities));
        }

        return next.call(app, context);
    };
}


// DEFAULT HANDLERS:  RESPOND, DEFAULT APP, ERROR HELPER

function DefaultMiddleware(context, next) {
    var value = next();

    if (typeof value == 'undefined') {
        context.log.error("Server Error: One of the middleware functions returned no value");
    }
    else
        return value;
}

function DefaultApp(context, next) {
    if (context["iopa.Error"])
        return Promise.reject(context["iopa.Error"]);
    else
        return Promise.resolve(context);
}

// FUNCTIONS ADDED TO MIDDLEWARE AND SERVERS

/**
 * @method createServer_forServers
 * Create server object with listen and close methods
 *
 * @param {Object} Options dictionary that includes port num, address string
 * @returns {Promise} 
 * @public
 */
function createServer_forServers(registeredScheme, next, scheme, options) {
    if (scheme !== registeredScheme)
        return next(scheme, options);

    options = options || {};

    if (!this.app.properties[SERVER.IsBuilt])
        this.app.build();

    var server = new IopaServer;
    server.scheme = scheme;
    server.createContext = this.app.createContext.bind(this.app);
    if (this.connect) server.connect = this.connect.bind(this, server);
    if (this.listen) server.listen = this.listen.bind(this, server);
    if (this.close) server.close = this.close.bind(this, server);
    if (this.send) server.send = this.send.bind(this, server, null);

    return server;
};

/**
 * @method createServer_forMiddleware
 * Create server object with listen and close methods
 *
 * @param {Object} Options dictionary that includes port num, address string
 * @returns {Promise} 
 * @public
 */
function createServer_forMiddleware(registeredScheme, next, scheme, options) {
    if (scheme !== registeredScheme)
        return next(scheme, options);

    var server = next(scheme, options);

    var nextSend = server.send;
    server.send = this.send.bind(this, server, nextSend.bind(server));

    return server;
};

// UTILITY FUNCTIONS

function merge(target, defaults, replace) {
    if (!target)
        throw new Error("target must not be empty");

    if (!defaults)
        defaults = {};

    if (replace) {
        for (var key in defaults) {
            if (defaults.hasOwnProperty(key)) target[key] = defaults[key];
        }
    }
    else {
        for (var key in defaults) {
            if (defaults.hasOwnProperty(key) && !(target.hasOwnProperty(key))) target[key] = defaults[key];
        }
    }
};

/*
 * Clone (Double Layer)
 * 
 * @method clone
 * @param source  object to clone
 * @private
 */
function clone(source) {
    var clone = {};

    for (var key1 in source) {
        if (source.hasOwnProperty(key1)) {
            var item = source[key1];
            if (typeof item == "object") {
                var targetItem = {};

                for (var key2 in item) {
                    if (item.hasOwnProperty(key2)) targetItem[key2] = item[key2];
                }
                clone[key1] = targetItem;
            } else
                clone[key1] = item;
        }
    }

    return clone;
};

function IopaServer() {
    _classCallCheck(this, IopaServer);
};

module.exports =
    {
        App: AppBuilderForServers,
        IopaServer: IopaServer,
        constants: constants
    }

function IopaContext() {
    return this;
 }

/**
* Represents IopaContext Factory of up to 100 items
*
* @instance Factory
* @method alloc()  get new IopaContext from pool or by creation if none available; remember to call context.init();
* @method free(context)   return IopaContext to the pool for reuse
*/
function Factory(options) {
    _classCallCheck(this, Factory);

    options = options || {};
    var size = options["factory.Size"] || 100;

    this._logger = options[SERVER.Logger] || console;
    this._factory = new FreeList('IopaContext', size, function () { return IopaContext.apply(Object.create(IopaContext.prototype)); });
}

//STATIC PROPERTIES

Factory.Context = IopaContext;

//PUBLIC PROPERTIES 

Object.defineProperty(Factory.prototype, SERVER.Logger, {
    get: function () { return this._logger; },
    set: function (value) { this._logger = value; }
});

//PUBLIC METHODS 

/**
 * Creates a new IOPA Context 
 *
 * @method createContext
 *
 * @param url string representation of scheme://host/hello?querypath
 * @param options object 
 * @returns context
 * @public
 */
Factory.prototype.alloc = function () {
    
    var context = this._factory.alloc().init();
    
    context.dispose = this._dispose.bind(this, context);
    context[SERVER.Logger] = this._logger;
    return context;
};

/**
 * Release the memory used by a given IOPA Context
 *
 * @method _dispose
 *
 * @param context object  the context to free 
 * @private
 */
Factory.prototype._dispose = function factory_dispose(context) {

 
    for (var prop in context) {
        if (context.hasOwnProperty(prop)) {
            if (context[prop] && context[prop].dispose) context[prop].dispose();

            delete context[prop];
        }
    };

    this._factory.free(context);

};

/* *********************************************************
 * IOPA CONTEXT
 * ********************************************************* */

/**
 * Represents IOPA Context object for any State Flow or REST Request/Response
 * See http://iopa.io for further details
 *
 * @class IopaContext
 * @constructor
 */
function IopaContext() {
    return this;
}

/**
* Initialize blank IopaContext object
* Generic properties common to all server types included
*
* @method init
*/
IopaContext.prototype.init = function init() {
    this[SERVER.Id] = "#" + _nextSequence();
    return this;
};

IopaContext.prototype.toString = function () {

    return util.inspect(cloneFilter(this,
        [SERVER.CancelTokenSource,
        SERVER.CancelToken,
        SERVER.Logger,
            "log",
            "zwave.Capabilities",
        SERVER.CancelTokenSource,
        SERVER.CancelToken,
            "dispose",
        SERVER.Factory,
        ]), false,100);
}

Object.defineProperty(IopaContext.prototype, "log", {
    get: function () {
        return this[SERVER.Logger];
    }
});

IopaContext.prototype.using = function (appFuncPromiseOrValue) {
    if (typeof (appFuncPromiseOrValue) === 'function')
        return _using(this, appFuncPromiseOrValue(this));
    else
        return _using(this, appFuncPromiseOrValue);
}

/*
* ES6 finally/dispose pattern for IOPA Context
* @param context Iopa
* @param p Promise or value
* returns Promise that always ultimately resolves to callback's result or rejects
*/
function _using(context, p) {

    return new Promise(function (resolve, reject) {
        if (typeof p === 'undefined')
            p = null;
        resolve(p);
    }).then(function (value) {
        return Promise.resolve(function () {
            process.nextTick(function () { if (context.dispose) context.dispose() });
            return value;
        }());
    },
        function (err) {
            context.log.error(err);
            process.nextTick(function () { if (context.dispose) context.dispose() });
            throw err;
        });
};

function cloneFilter(source, blacklist) {
    var clone = {};

    for (var key in source) {
        if (source.hasOwnProperty(key) && (blacklist.indexOf(key) == -1)) clone[key] = source[key];
    }

    return clone;
};

const maxSequence = Math.pow(2, 16);
var _lastSequence = Math.floor(Math.random() * (maxSequence - 1));

function _nextSequence() {
    if (++_lastSequence === maxSequence)
        _lastSequence = 1;

    return _lastSequence.toString();
};

/**
* Node 0.12.x - 4.0.x Freelist module
* 
* Included without functional changes
* just license notice added
* 
* Simple function but has now been deprecated in Node.js but including here
* 
* This license applies to the FreeList code section below only 
*/


/**
 * Copyright Node.js contributors. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

// This is a free list to avoid creating so many of the same object.
function FreeList(name, max, constructor) {
    this.name = name;
    this.constructor = constructor;
    this.max = max;
    this.list = [];
};

FreeList.prototype.alloc = function () {
    return this.list.length ? this.list.shift() :
        this.constructor.apply(this, arguments);
};

FreeList.prototype.free = function (obj) {
    if (this.list.length < this.max) {
        this.list.push(obj);
        return true;
    }
    return false;
};