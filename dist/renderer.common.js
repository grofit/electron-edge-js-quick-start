(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseDll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return localTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return externalTypeName; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

let version = location.search.split('version=')[1];
const namespace = `QuickStart.${version.charAt(0).toUpperCase()}${version.substr(1)}`;
if(version === 'core') version = 'coreapp';

const baseNetAppPath = Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(__dirname, `/src/${namespace}/bin/Debug/net${version}2.0`);

process.env.EDGE_USE_CORECLR = 1;
if(version !== 'standard')
{ process.env.EDGE_APP_ROOT = baseNetAppPath; }

const baseDll = Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(baseNetAppPath, `${namespace}.dll`);
const localTypeName = `${namespace}.LocalMethods`;
const externalTypeName = `${namespace}.ExternalMethods`;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("electron-edge-js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/Renderer/environment.js
var environment = __webpack_require__(0);

// EXTERNAL MODULE: external "electron-edge-js"
var external_electron_edge_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/Renderer/methods.js



const getAppDomainDirectory = Object(external_electron_edge_js_["func"])({
    assemblyFile: environment["a" /* baseDll */],
    typeName: environment["c" /* localTypeName */],
    methodName: 'GetAppDomainDirectory'
});

const getCurrentTime = Object(external_electron_edge_js_["func"])({
    assemblyFile: environment["a" /* baseDll */],
    typeName: environment["c" /* localTypeName */],
    methodName: 'GetCurrentTime'
});

const useDynamicInput = Object(external_electron_edge_js_["func"])({
    assemblyFile: environment["a" /* baseDll */],
    typeName: environment["c" /* localTypeName */],
    methodName: 'UseDynamicInput'
});

const getPerson = Object(external_electron_edge_js_["func"])({
    assemblyFile: environment["a" /* baseDll */],
    typeName: environment["b" /* externalTypeName */],
    methodName: 'GetPersonInfo'
});

// CONCATENATED MODULE: ./src/Renderer/index.js


window.onload = function() {

    getAppDomainDirectory('', function(error, result) {
        if (error) throw error;
        document.getElementById("GetAppDomainDirectory").innerHTML = result;
    });

    getCurrentTime('', function(error, result) {
        if (error) throw error;
        document.getElementById("GetCurrentTime").innerHTML = result;
    });

    useDynamicInput('Node.Js', function(error, result) {
        if (error) throw error;
        document.getElementById("UseDynamicInput").innerHTML = result;
    });

    getPerson('', function(error, result) {
        //if (error) throw JSON.stringify(error);
        document.getElementById("GetPersonInfo").innerHTML = result;
    });

};


/***/ })
/******/ ])));