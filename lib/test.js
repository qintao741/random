(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(len){
	var rdmString = "";
	for(;rdmString.length < len;rdmString += Math.random().toString(36).substring(2)){
		return rdmString.substr(0,len);
	}
}	
},{}],2:[function(require,module,exports){
"use strict";

var _randomTao = require("random-tao");

var _randomTao2 = _interopRequireDefault(_randomTao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _randomTao2.default)(20);
console.log((0, _randomTao2.default)(20));

},{"random-tao":1}]},{},[2]);
