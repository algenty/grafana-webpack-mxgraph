define(["app/plugins/sdk"], function(__WEBPACK_EXTERNAL_MODULE_1__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".module.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return Ctrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_grafana_app_plugins_sdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_grafana_app_plugins_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_grafana_app_plugins_sdk__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // will be resolved to app/plugins/sdk
// ../node_modules/mxgraph/javascript/dist/build

var mx = __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2));
var mxGraph = mx.mxGraph;
var mxShape = mx.mxShape;
var mxClient = mx.mxClient;
var mxConnectionConstraint = mx.mxConnectionConstraint;
var mxPoint = mx.mxPoint;
var mxPolyline = mx.mxPolyline;
var mxEvent = mx.mxEvent;
var mxRubberband = mx.mxRubberband;
var mxCellState = mx.mxCellState;

var Ctrl =
/*#__PURE__*/
function (_PanelCtrl) {
  _inherits(Ctrl, _PanelCtrl);

  function Ctrl($scope, $injector) {
    var _this;

    _classCallCheck(this, Ctrl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ctrl).call(this, $scope, $injector));

    _this.initMxGraph();

    return _this;
  }

  _createClass(Ctrl, [{
    key: "link",
    value: function link(scope, element) {
      this.initStyles();
    }
  }, {
    key: "initStyles",
    value: function initStyles() {//window.System.import(this.panelPath + 'css/flowchart.css!');
      // Remove next lines if you don't need separate styles for light and dark themes
    }
  }, {
    key: "initMxGraph",
    value: function initMxGraph() {
      console.log("initMxGraph");
      var container = this.panel.init; // Checks if the browser is supported

      if (!mxClient.isBrowserSupported()) {
        // Displays an error message if the browser is not supported.
        mxUtils.error('Browser is not supported!', 200, false);
      } else {
        // Disables the built-in context menu
        mxEvent.disableContextMenu(container); // Creates the graph inside the given container

        var graph = new mxGraph(container); // Enables rubberband selection

        new mxRubberband(graph); // Gets the default parent for inserting new cells. This
        // is normally the first child of the root (ie. layer 0).

        var parent = graph.getDefaultParent(); // Adds cells to the model in a single step

        graph.getModel().beginUpdate();

        try {
          var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
          var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
          var e1 = graph.insertEdge(parent, null, '', v1, v2);
        } finally {
          // Updates the display
          graph.getModel().endUpdate();
        }
      }
    }
  }, {
    key: "panelPath",
    get: function get() {
      if (this._panelPath === undefined) {
        this._panelPath = "/public/plugins/".concat(this.pluginId, "/");
      }

      return this._panelPath;
    }
  }]);

  return Ctrl;
}(__WEBPACK_IMPORTED_MODULE_0_grafana_app_plugins_sdk__["PanelCtrl"]);

Ctrl.templateUrl = 'partials/template.html';


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])});;