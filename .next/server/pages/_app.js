/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/SidebarContext.js":
/*!***************************************!*\
  !*** ./src/context/SidebarContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarContext: () => (/* binding */ SidebarContext),\n/* harmony export */   SidebarProvider: () => (/* binding */ SidebarProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialValue = {\n    isCollapsed: false\n};\nconst SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialValue);\nconst SidebarProvider = ({ children })=>{\n    const [isCollapsed, setCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleSidebarcollapse = ()=>{\n        setCollapse((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContext.Provider, {\n        value: {\n            isCollapsed,\n            toggleSidebarcollapse\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/me/cshell/src/context/SidebarContext.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TaWRlYmFyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBRWhELE1BQU1FLGVBQWU7SUFBRUMsYUFBYTtBQUFNO0FBRTFDLE1BQU1DLCtCQUFpQkosb0RBQWFBLENBQUNFO0FBRXJDLE1BQU1HLGtCQUFrQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNuQyxNQUFNLENBQUNILGFBQWFJLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFNUMsTUFBTU8sd0JBQXdCO1FBQzVCRCxZQUFZLENBQUNFLFlBQWMsQ0FBQ0E7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0wsZUFBZU0sUUFBUTtRQUFDQyxPQUFPO1lBQUVSO1lBQWFLO1FBQXNCO2tCQUNsRUY7Ozs7OztBQUdQO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NoZWxsLy4vc3JjL2NvbnRleHQvU2lkZWJhckNvbnRleHQuanM/ZTljNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBpbml0aWFsVmFsdWUgPSB7IGlzQ29sbGFwc2VkOiBmYWxzZSB9O1xuXG5jb25zdCBTaWRlYmFyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFZhbHVlKTtcblxuY29uc3QgU2lkZWJhclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldENvbGxhcHNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVTaWRlYmFyY29sbGFwc2UgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGFwc2UoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNDb2xsYXBzZWQsIHRvZ2dsZVNpZGViYXJjb2xsYXBzZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgU2lkZWJhckNvbnRleHQsIFNpZGViYXJQcm92aWRlciB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZSIsImlzQ29sbGFwc2VkIiwiU2lkZWJhckNvbnRleHQiLCJTaWRlYmFyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldENvbGxhcHNlIiwidG9nZ2xlU2lkZWJhcmNvbGxhcHNlIiwicHJldlN0YXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/SidebarContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/SidebarContext */ \"./src/context/SidebarContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_1__.SidebarProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/me/cshell/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/me/cshell/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQzdCO0FBRWYsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsb0VBQWVBO2tCQUNkLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NoZWxsLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWRlYmFyUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1NpZGViYXJDb250ZXh0XCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNpZGViYXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1NpZGViYXJQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaWRlYmFyUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();