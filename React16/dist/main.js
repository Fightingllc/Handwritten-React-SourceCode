/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./MyReact/createElement.js":
/*!**********************************!*\
  !*** ./MyReact/createElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\n/*\r\n * @Description: \r\n * @Version: 2.0\r\n * @Autor: Morning\r\n * @Date: 2024-11-25 22:26:19\r\n * @LastEditors: Morning\r\n * @Motto: 要有梦想，即使遥远\r\n * @LastEditTime: 2024-11-25 22:34:44\r\n */\n// const element = React.createElement('h1',{ title: 'foo' }, 'Hello');\n\nfunction createElement(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type,\n    props: {\n      ...props,\n      children: children.map(child => {\n        return typeof child === 'object' ? child : createTextElement(child);\n      })\n    }\n  };\n}\nfunction createTextElement(text) {\n  return {\n    type: 'TEXT_ELEMENT',\n    props: {\n      nodeValue: text,\n      children: []\n    }\n  };\n}\n\n//# sourceURL=webpack://react16/./MyReact/createElement.js?");

/***/ }),

/***/ "./MyReact/index.js":
/*!**************************!*\
  !*** ./MyReact/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./MyReact/createElement.js\");\n/* harmony import */ var _react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-dom */ \"./MyReact/react-dom.js\");\n/*\r\n * @Description: \r\n * @Version: 2.0\r\n * @Autor: Morning\r\n * @Date: 2024-11-25 21:48:46\r\n * @LastEditors: Morning\r\n * @Motto: 要有梦想，即使遥远\r\n * @LastEditTime: 2024-11-25 23:18:43\r\n */\n\n\nconst MyReact = {\n  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__.createElement,\n  render: _react_dom__WEBPACK_IMPORTED_MODULE_1__.render\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyReact);\n\n//# sourceURL=webpack://react16/./MyReact/index.js?");

/***/ }),

/***/ "./MyReact/react-dom.js":
/*!******************************!*\
  !*** ./MyReact/react-dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nfunction render(element, container) {\n  if (typeof element === 'string') {\n    container.appendChild(document.createTextNode(element));\n    return;\n  }\n  const domElement = document.createElement(element.type);\n  for (const child of element.children) {\n    render(child, domElement);\n  }\n  for (const prop in element.props) {\n    domElement[prop] = element.props[prop];\n  }\n  container.appendChild(domElement);\n}\n\n//# sourceURL=webpack://react16/./MyReact/react-dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MyReact */ \"./MyReact/index.js\");\n/*\r\n * @Description:\r\n * @Version: 2.0\r\n * @Autor: Morning\r\n * @Date: 2024-11-25 20:27:03\r\n * @LastEditors: Morning\r\n * @Motto: 要有梦想，即使遥远\r\n * @LastEditTime: 2024-11-25 23:15:53\r\n */\n\nconst element = /*#__PURE__*/React.createElement(\"h1\", {\n  title: \"foo\"\n}, \"Hello\", /*#__PURE__*/React.createElement(\"a\", null, \"\\u6D4B\\u8BD5\"));\nconsole.log(\"element: \", element);\nconst container = document.getElementById(\"root\");\n// container.appendChild(node);\n_MyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(element, container);\n\n//# sourceURL=webpack://react16/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;