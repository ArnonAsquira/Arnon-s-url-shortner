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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@200&family=Zen+Kurenaido&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n font-family: 'Raleway', sans-serif;\\r\\n  font-size: 16px;\\r\\n  color: #222;\\r\\n  background-color:rgba(200, 200, 200, 0.5);\\r\\n  text-align: center;\\r\\n  line-height: 1.4em;\\r\\n}\\r\\n\\r\\nmain, #root {\\r\\n  padding: 0;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\n\\r\\n.user-stories li {\\r\\n  margin-bottom: 1em;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #2574a9;\\r\\n}\\r\\n\\r\\nform {\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding: 20px;\\r\\n  max-width: 600px;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  width: 220px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\nnav li {\\r\\n  margin: auto 5px;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\nnav li:hover {\\r\\n  color: violet;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n.newUrl-display-div {\\r\\n  margin: 3% auto;\\r\\n  width: 400px;\\r\\n  height: 40px;\\r\\n  box-shadow: 5px 10px 2px rgba(200, 200, 200, 0.5);\\r\\n  border-radius: 5%;\\r\\n}\\r\\n\\r\\n.statSheet-main-div {\\r\\n  margin: 5% auto;\\r\\n  border-radius: 5%;\\r\\n  box-shadow: 5px 10px rgba(150, 150, 150, 0.5);\\r\\n  width: 400px;\\r\\n  height: 150px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shorturl/./public/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://shorturl/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shorturl/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shorturl/./public/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shorturl/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shorturl/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shorturl/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shorturl/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shorturl/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shorturl/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./public/ELforStatisticsShett.js":
/*!****************************************!*\
  !*** ./public/ELforStatisticsShett.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchUrlStatistics\": () => (/* binding */ searchUrlStatistics),\n/* harmony export */   \"sendUniqueUrlObjToServer\": () => (/* binding */ sendUniqueUrlObjToServer)\n/* harmony export */ });\n/* harmony import */ var _globalVariabalrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVariabalrs */ \"./public/globalVariabalrs.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ \"./public/helperFunctions.js\");\n\r\n\r\n\r\nconst serverUrl = 'http://localhost:3000';\r\n\r\n// searrch url statistics in the server\r\nasync function searchUrlStatistics(e) {\r\n    e.preventDefault();\r\n    const response = await axios.get(`${serverUrl}/api/statistic/${_globalVariabalrs__WEBPACK_IMPORTED_MODULE_0__.searchStatisticsInput.value.slice(30)}`);\r\n    console.log(response.data);\r\n    const urlTimesUsed = createStatsEntries('times used:', response.data.timesUsed);\r\n    const urlCreateDate = createStatsEntries('shortened url created at:', response.data.dateCreated.slice(0, 9));\r\n    const statSheet = _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement('div', [urlTimesUsed, urlCreateDate], ['statSheet-main-div'], {});\r\n    document.getElementById('root').appendChild(statSheet);\r\n}\r\n// crates stat entries for the dom\r\nfunction createStatsEntries(entry, stat) {\r\n   return _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement('p', [`${entry} ${stat}`], [], {});\r\n}\r\n\r\n// creates a url object to be sent to the server via the body's request\r\nfunction createUniqueUrl(url, ending) {\r\n    try {\r\n        ending = ending.split('').filter(char =>\r\n            char !== \" \" \r\n        ).join('');\r\n        const urlObj = {url, ending};\r\n        return urlObj;\r\n    }catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nasync function sendUniqueUrlObjToServer(e) {\r\n    e.preventDefault();\r\n    const urlPremiumEntry = createUniqueUrl(_globalVariabalrs__WEBPACK_IMPORTED_MODULE_0__.createUniqueUrlOldInput.value, _globalVariabalrs__WEBPACK_IMPORTED_MODULE_0__.createUniqueUrlNewInput.value);\r\n    try {\r\n        const response = await axios.post(`${serverUrl}/api/shorturl/`, urlPremiumEntry);\r\n        _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.displayUrl(response.data.newUrl);\r\n    } catch(error) {\r\n        console.log(error);\r\n        alert('this is not a vaild url');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://shorturl/./public/ELforStatisticsShett.js?");

/***/ }),

/***/ "./public/eventListeners.js":
/*!**********************************!*\
  !*** ./public/eventListeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendUrlToServer\": () => (/* binding */ sendUrlToServer),\n/* harmony export */   \"redirectToStatistics\": () => (/* binding */ redirectToStatistics),\n/* harmony export */   \"redirectToHome\": () => (/* binding */ redirectToHome)\n/* harmony export */ });\n/* harmony import */ var _globalVariabalrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVariabalrs */ \"./public/globalVariabalrs.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ \"./public/helperFunctions.js\");\n\r\n\r\n\r\nconst serverUrl = 'http://localhost:3000';\r\n\r\n// event listeners function\r\nasync function sendUrlToServer(e) {\r\n    e.preventDefault();\r\n    const urlTosend = _globalVariabalrs__WEBPACK_IMPORTED_MODULE_0__.urlInput.value;\r\n    try {\r\n        const response = await axios.post(`${serverUrl}/api/shorturl/`, {url: urlTosend});\r\n        console.log(response)\r\n        _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.displayUrl(response.data.newUrl);\r\n    } catch(error) {\r\n        console.log(error);\r\n        alert('this is not a vaild url');\r\n    }\r\n}\r\n\r\n// redirecting to statistics sheet html\r\n\r\nasync function redirectToStatistics(e) {\r\n    try {\r\n        window.location.assign(`${serverUrl}/satistics`);\r\n        // await axios.get(`${serverUrl}/satistics/`);\r\n    } catch(error) {\r\n        console.log(error);\r\n        alert ('redirection failed')\r\n    }\r\n}\r\n\r\nfunction redirectToHome(e) {\r\n   _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.redirectTo(serverUrl);\r\n}\n\n//# sourceURL=webpack://shorturl/./public/eventListeners.js?");

/***/ }),

/***/ "./public/globalVariabalrs.js":
/*!************************************!*\
  !*** ./public/globalVariabalrs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton),\n/* harmony export */   \"urlInput\": () => (/* binding */ urlInput),\n/* harmony export */   \"navBarStatistics\": () => (/* binding */ navBarStatistics),\n/* harmony export */   \"navBarHome\": () => (/* binding */ navBarHome),\n/* harmony export */   \"searchStatisticsForm\": () => (/* binding */ searchStatisticsForm),\n/* harmony export */   \"searchStatisticsInput\": () => (/* binding */ searchStatisticsInput),\n/* harmony export */   \"searchStatisticsButton\": () => (/* binding */ searchStatisticsButton),\n/* harmony export */   \"createUniqueUrlOldInput\": () => (/* binding */ createUniqueUrlOldInput),\n/* harmony export */   \"createUniqueUrlNewInput\": () => (/* binding */ createUniqueUrlNewInput),\n/* harmony export */   \"createUniqueUrlButton\": () => (/* binding */ createUniqueUrlButton)\n/* harmony export */ });\n/* // global varibles */\r\nconst submitButton = document.getElementById('submit-url');\r\nconst urlInput = document.getElementById('url_input');\r\n// navbar variables\r\nconst navBarStatistics = document.querySelector('[name=\"premium-statistics\"]');\r\nconst navBarHome = document.querySelector('[name=\"home\"]');\r\n//  premium html variables\r\nconst searchStatisticsForm = document.getElementById('search-for-statistics');\r\nconst searchStatisticsInput = document.querySelector('#search-for-statistics input');\r\nconst searchStatisticsButton = document.querySelector('#search-for-statistics button');\r\nconst createUniqueUrlOldInput = document.querySelector('[placeholder=\"url to shorten\"]');\r\nconst createUniqueUrlNewInput = document.querySelector('[placeholder=\"new url ending\"]');\r\nconst createUniqueUrlButton = document.querySelector('.premium-url-div button');\r\n\n\n//# sourceURL=webpack://shorturl/./public/globalVariabalrs.js?");

/***/ }),

/***/ "./public/helperFunctions.js":
/*!***********************************!*\
  !*** ./public/helperFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"displayUrl\": () => (/* binding */ displayUrl),\n/* harmony export */   \"redirectTo\": () => (/* binding */ redirectTo)\n/* harmony export */ });\n// generic create element function\r\nfunction createElement(tagName, children = [], classes = [], attributes = {}) {\r\n    let newEl = document.createElement(tagName);\r\n    for(let child of children){\r\n        if(typeof(child) === \"string\"){\r\n            child = document.createTextNode(child);\r\n        }\r\n        newEl.append(child);\r\n    }\r\n    for(let cls of classes){\r\n        newEl.classList.add(cls);\r\n    }\r\n    for(let attr in attributes){\r\n        newEl.setAttribute(attr, attributes[attr]);\r\n    }\r\n    return newEl\r\n}\r\n\r\n\r\n// display url function\r\nfunction displayUrl(newUrl) {\r\n    const displayDiv = createElement('div', [newUrl], ['newUrl-display-div'], {});\r\n    if (document.querySelector('.newUrl-display-div')) {\r\n     document.querySelector('.newUrl-display-div').remove();\r\n    }\r\n    Array.from(document.getElementsByTagName('main'))[0].appendChild(displayDiv);\r\n }\r\n\r\n\r\n// redirect function\r\nfunction redirectTo(url) {\r\n    try {\r\n        window.location.assign(url);\r\n    } catch(error) {\r\n        console.log(error);\r\n        alert ('redirection failed')\r\n    }\r\n}\n\n//# sourceURL=webpack://shorturl/./public/helperFunctions.js?");

/***/ }),

/***/ "./public/main.js":
/*!************************!*\
  !*** ./public/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./public/style.css\");\n/* harmony import */ var _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalVariabalrs */ \"./public/globalVariabalrs.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ \"./public/helperFunctions.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners */ \"./public/eventListeners.js\");\n/* harmony import */ var _ELforStatisticsShett__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ELforStatisticsShett */ \"./public/ELforStatisticsShett.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ntry {\r\n   // adding event listeners\r\n    _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__.submitButton.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_3__.sendUrlToServer);\r\n\r\n    // redirecting to statistics sheet\r\n    _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__.navBarStatistics.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_3__.redirectToStatistics);\r\n    // redirect to home page\r\n    _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__.navBarHome.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_3__.redirectToHome);\r\n} catch(error) {  \r\n   console.log('didnt load home page eventlisteners');\r\n}\r\n\r\n// statistics sheet event listeners\r\ntry {\r\n    _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__.searchStatisticsButton.addEventListener('click', _ELforStatisticsShett__WEBPACK_IMPORTED_MODULE_4__.searchUrlStatistics);\r\n    _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__.navBarHome.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_3__.redirectToHome);\r\n    _globalVariabalrs__WEBPACK_IMPORTED_MODULE_1__.createUniqueUrlButton.addEventListener('click', _ELforStatisticsShett__WEBPACK_IMPORTED_MODULE_4__.sendUniqueUrlObjToServer);\r\n} catch (error) {\r\n    console.log('didnt load stat sheet event listeners');\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shorturl/./public/main.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/main.js");
/******/ 	
/******/ })()
;