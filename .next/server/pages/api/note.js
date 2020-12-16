module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/index.js":
/*!*********************************!*\
  !*** ./pages/api/note/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  res.json({\n    data: _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a\n  });\n}).post((req, res) => {\n  const note = _objectSpread(_objectSpread({}, req.body), {}, {\n    id: Date.now()\n  });\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.push(note);\n  res.json({\n    data: note\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS9pbmRleC5qcz9mOTBiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJuYyIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJkYXRhIiwibm90ZXMiLCJwb3N0Iiwibm90ZSIsImJvZHkiLCJpZCIsIkRhdGUiLCJub3ciLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFFLEdBQ2JDLEdBRFcsQ0FDUCxDQUFDQyxHQUFELEVBQUtDLEdBQUwsS0FBYTtBQUNkQSxLQUFHLENBQUNDLElBQUosQ0FBUztBQUFDQyxRQUFJLEVBQUVDLHFEQUFLQTtBQUFaLEdBQVQ7QUFDSCxDQUhXLEVBSVhDLElBSlcsQ0FJTixDQUFDTCxHQUFELEVBQUtDLEdBQUwsS0FBYTtBQUNmLFFBQU1LLElBQUksbUNBQ0hOLEdBQUcsQ0FBQ08sSUFERDtBQUVOQyxNQUFFLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQUZFLElBQVY7O0FBSUFOLHVEQUFLLENBQUNPLElBQU4sQ0FBV0wsSUFBWDtBQUNBTCxLQUFHLENBQUNDLElBQUosQ0FBUztBQUFDQyxRQUFJLEVBQUVHO0FBQVAsR0FBVDtBQUNILENBWFcsQ0FBaEI7QUFhZVQsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbm90ZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnXG5pbXBvcnQgbm90ZXMgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvZGF0YSdcblxuY29uc3QgaGFuZGxlciA9IG5jKClcbiAgICAuZ2V0KChyZXEscmVzKSA9PiB7XG4gICAgICAgIHJlcy5qc29uKHtkYXRhOiBub3Rlc30pXG4gICAgfSlcbiAgICAucG9zdCgocmVxLHJlcykgPT4ge1xuICAgICAgICBjb25zdCBub3RlPSB7XG4gICAgICAgICAgICAuLi5yZXEuYm9keSxcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICAgICAgbm90ZXMucHVzaChub3RlKVxuICAgICAgICByZXMuanNvbih7ZGF0YTogbm90ZX0pXG4gICAgfSlcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/note/index.js\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const notes = new Array(15).fill(1).map((_, i) => ({\n  id: Date.now() + i,\n  title: `Note ${i}`\n}));\nmodule.exports = notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsibm90ZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQ1hDLElBRFcsQ0FDTixDQURNLEVBRVhDLEdBRlcsQ0FFUCxDQUFDQyxDQUFELEVBQUlDLENBQUosTUFBVztBQUNkQyxJQUFFLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxLQUFhSCxDQURIO0FBRWRJLE9BQUssRUFBRyxRQUFPSixDQUFFO0FBRkgsQ0FBWCxDQUZPLENBQWQ7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxLQUFqQiIsImZpbGUiOiIuL3NyYy9kYXRhL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub3RlcyA9IG5ldyBBcnJheSgxNSlcbiAgLmZpbGwoMSlcbiAgLm1hcCgoXywgaSkgPT4gKHtcbiAgICBpZDogRGF0ZS5ub3coKSArIGksXG4gICAgdGl0bGU6IGBOb3RlICR7aX1gXG4gIH0pKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });