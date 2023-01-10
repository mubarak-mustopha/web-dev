/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.container {\r\n    width: 650px;\r\n    margin: 50px auto;\r\n    color: black;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n    font-size: 1rem;\r\n}\r\n\r\n.project,\r\n.form,\r\n.add-project {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: white;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    transition: transform .1s ease-in;\r\n}\r\n\r\n.project:hover,\r\n.add-project:hover {\r\n    transform: translateY(-6px);\r\n}\r\n\r\n.add-project {\r\n    font-size: 2rem;\r\n}\r\n\r\n.project {\r\n    position: relative;\r\n}\r\n\r\n.count {\r\n    font-size: 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 35px;\r\n    right: 35px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/*project containers page*/\r\n/*proj container header*/\r\n.container header {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, auto);\r\n    align-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.add-todo {\r\n    background-color: #0066ff;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    justify-self: end;\r\n}\r\n\r\n/*proj container main*/\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: auto;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nul .to-do {\r\n    display: grid;\r\n    justify-content: space-between;\r\n    justify-items: end;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 8px;\r\n\r\n}\r\n\r\nul .to-do:hover {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.to-do form {\r\n    justify-self: start;\r\n}\r\n\r\n.to-do .delete {\r\n    cursor: pointer;\r\n    background-color: red;\r\n    padding: 3px;\r\n    color: white;\r\n}\r\n\r\n/*form */\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    width: 200px;\r\n    height: auto;\r\n    padding: 10px 0;\r\n    cursor: default;\r\n    align-items: center;\r\n    transform: translateX(-250px);\r\n    transition: transform 0.1s ease-in;\r\n}\r\n\r\n.form.slide {\r\n    transform: translateX(0);\r\n}\r\n\r\n.form h3 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row label {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.form-row>* {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    border: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;;;IAGI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,0CAA0C;IAC1C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;AACrC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA,0BAA0B;AAC1B,wBAAwB;AACxB;IACI,aAAa;IACb,sCAAsC;IACtC,qBAAqB;IACrB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA,sBAAsB;;AAEtB;IACI,WAAW;IACX,kBAAkB;AACtB;;;;AAIA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,qCAAqC;IACrC,SAAS;IACT,mBAAmB;IACnB,YAAY;;AAEhB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;;AAEA,QAAQ;;AAER;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,uBAAuB;IACvB,YAAY;AAChB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.container {\r\n    width: 650px;\r\n    margin: 50px auto;\r\n    color: black;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n    font-size: 1rem;\r\n}\r\n\r\n.project,\r\n.form,\r\n.add-project {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: white;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    transition: transform .1s ease-in;\r\n}\r\n\r\n.project:hover,\r\n.add-project:hover {\r\n    transform: translateY(-6px);\r\n}\r\n\r\n.add-project {\r\n    font-size: 2rem;\r\n}\r\n\r\n.project {\r\n    position: relative;\r\n}\r\n\r\n.count {\r\n    font-size: 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 35px;\r\n    right: 35px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/*project containers page*/\r\n/*proj container header*/\r\n.container header {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, auto);\r\n    align-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.add-todo {\r\n    background-color: #0066ff;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    justify-self: end;\r\n}\r\n\r\n/*proj container main*/\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: auto;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nul .to-do {\r\n    display: grid;\r\n    justify-content: space-between;\r\n    justify-items: end;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 8px;\r\n\r\n}\r\n\r\nul .to-do:hover {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.to-do form {\r\n    justify-self: start;\r\n}\r\n\r\n.to-do .delete {\r\n    cursor: pointer;\r\n    background-color: red;\r\n    padding: 3px;\r\n    color: white;\r\n}\r\n\r\n/*form */\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    width: 200px;\r\n    height: auto;\r\n    padding: 10px 0;\r\n    cursor: default;\r\n    align-items: center;\r\n    transform: translateX(-250px);\r\n    transition: transform 0.1s ease-in;\r\n}\r\n\r\n.form.slide {\r\n    transform: translateX(0);\r\n}\r\n\r\n.form h3 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row label {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.form-row>* {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    border: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createForm),
/* harmony export */   "displayForm": () => (/* binding */ displayForm),
/* harmony export */   "getFormValues": () => (/* binding */ getFormValues)
/* harmony export */ });
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/check.png */ "./src/images/check.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



let createFormContent = () => {
    let form = `
    <h3>New Task</h3>
    <form action="">
        <div class="form-row">
            <label for="task">What is to be done?</label>
            <input type="text" name="" id="task">
        </div>
        <div class="form-row">
            <label for="date">Date?</label>
            <input type="date" name="" id="date">
        </div>

        <div class="form-row">
            <label for="time">Time</label>
            <input type="time" name="" id="time">
        </div>
        <div class="form-row">
            <label for="priority">Priority</label>
            <input type="number" name="" id="priority">
        </div>
        <button type="submit"><img src=${_images_check_png__WEBPACK_IMPORTED_MODULE_0__} alt=""></button>
    </form>
` ;
    return form
}

function createForm() {
    let formDiv = document.createElement("div")
    formDiv.classList.add("form");
    formDiv.innerHTML = createFormContent();

    return formDiv;
}

let displayForm = () => {
    let formDiv = document.querySelector(".form");
    formDiv.classList.add("slide")
}

let getFormValues = () => {
    let task = document.querySelector("input[id='task']").value;
    let date = document.querySelector("input[id='date']").value;
    let time = document.querySelector("input[id='time']").value;
    let priority = document.querySelector("input[id='priority']").value;
    let dueDate = new Date(date);
    return { task, dueDate, priority }
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProjContainer": () => (/* binding */ addToProjContainer),
/* harmony export */   "default": () => (/* binding */ displayHomePage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




let createCountDiv = (numTodo) => {//project name: arg
    let countDiv = document.createElement("div");
    countDiv.classList.add("count");
    countDiv.textContent = numTodo;
    return countDiv;
}

let createProjectDiv = (project, numTodo) => {//project name: arg
    let projectDiv = document.createElement("div");

    let countDiv = createCountDiv(numTodo);
    projectDiv.appendChild(countDiv);

    let projDivText = document.createElement("div");
    projDivText.textContent = project.toUpperCase();//projectname
    projectDiv.appendChild(projDivText)

    projectDiv.classList.add("project");
    projectDiv.id = project;

    return projectDiv;
}

let addToProjContainer = (project) => {//project name: arg
    let projectContainer = document.querySelector(".projects");
    let projDiv = createProjectDiv(project, 0);
    let addProjectDiv = document.querySelector(".add-project");
    projectContainer.insertBefore(projDiv, addProjectDiv);
}


function displayHomePage(projects) {
    let heading = document.createElement("h1");
    heading.textContent = "TO DO LIST"

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");

    let addProjectDiv = document.createElement("div");
    addProjectDiv.classList.add("add-project");
    addProjectDiv.textContent = "+";
    projectContainer.appendChild(addProjectDiv);

    for (const project in projects) {
        projectContainer.insertBefore(createProjectDiv(project, projects[project].length
        ), addProjectDiv)
    }


    let container = document.querySelector(".container");
    container.innerHTML = "";

    container.appendChild(heading);
    container.appendChild(projectContainer);
    console.log(projectContainer.children);

}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(task, dueDate, priority) {
        this.task = task
        this.dueDate = dueDate
        this.isChecked = false;
        this.priority = priority
    }
    check() {
        this.isChecked = true;
    }
    uncheck() {
        this.isChecked = false;
    }
}

let projects = {
    personal: [],
    work: [],
    grocery: [],
}

let addProject = (projName) => {
    projects[projName] = [];
}

let addTodo = (project, toDoObj) => {
    projects[project].push(toDoObj);
}

let createTodo = (task, dueDate, priority) => new Todo(task, dueDate, priority);

let markAsDone = (project, toDoIndex) => {
    projects[project][toDoIndex].check();
}

let deleteToDo = (toDoIndex, project) => {
    projects[project].splice(toDoIndex, 1)
}

let replaceTodo = (newToDo, project, toDoIndex) => {
    projects[project][toDoIndex] = newToDo;
}

let editTodo = (newToDo, project, toDoIndex) => {
    replaceTodo(newToDo, project, toDoIndex);
}

addProject("school");
addProject("relationship");
let read = createTodo("read", new Date("2023-02-11"), 5);
let stayHalal = createTodo("stayHalal", new Date(), 10)
let keepItReal = createTodo("Never cheate", new Date(), 5)

addTodo("school", read);
addTodo("relationship", stayHalal);
addTodo("relationship", keepItReal);

markAsDone("school", 0)
//deleteToDo(0, "relationship")
editTodo(createTodo("study", new Date("2023-02-11"), 5), "school", 0)

//console.log(projects.school);
//console.log(projects.relationship);
let todoApp = {
    projects, addProject, addTodo, createTodo, markAsDone
    , deleteToDo, editTodo
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoApp);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoListItem": () => (/* binding */ createTodoListItem),
/* harmony export */   "default": () => (/* binding */ displayProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _images_left_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/left-arrow.png */ "./src/images/left-arrow.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




//let projects = todoApp.projects;

let createHeader = (projName) => {
    let header = document.createElement("header");
    let headerContent = `<div ><img class="arrow" src=${_images_left_arrow_png__WEBPACK_IMPORTED_MODULE_1__} alt=""></div>
                <h2 class="project-name">${projName}</h2><div class="add-todo">+</div>`;

    header.innerHTML = headerContent;
    return header;
}
let createTodoListItem = (todoObj, index) => {
    let dueDate = ((typeof todoObj.dueDate === "string") ?
        new Date(todoObj.dueDate) : todoObj.dueDate
    )//everythings turns in string with local storage

    let todoListItem = `

        <li class="to-do" data-index=${index}>
            <form>
                <input type="checkbox" name="" id="checkbox">
                <label for="">${todoObj.task}</label>
            </form>
            <div class="date">${dueDate.getFullYear()} ${dueDate.getMonth()} ${dueDate.getDate()}</div>
            <div class="delete">X</div>
        </li>

    `
    return todoListItem;
}


let removeTodo = (project, todoListItem) => {
    let index = todoListItem.dataset.index;
    _index__WEBPACK_IMPORTED_MODULE_0__["default"].deleteToDo(index, project.id);
    project.removeChild(todoListItem)

}

function displayProject(project, projName) {
    let container = document.querySelector(".container")
    container.innerHTML = "";


    let header = createHeader(projName);
    let todoList = document.createElement("ul");
    todoList.id = projName;

    for (let index = 0; index < project.length; index++) {
        todoList.innerHTML += createTodoListItem(project[index], index);
    }


    container.appendChild(header);
    container.appendChild(todoList)
}



/***/ }),

/***/ "./src/images/check.png":
/*!******************************!*\
  !*** ./src/images/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8af876c5b6bd473a07f.png";

/***/ }),

/***/ "./src/images/left-arrow.png":
/*!***********************************!*\
  !*** ./src/images/left-arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7563c3c4359b94bb934.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");








let localStorage = window.localStorage;
let projects = localStorage.getItem("projects");

if (projects) {
    _index__WEBPACK_IMPORTED_MODULE_0__["default"].projects = JSON.parse(projects)
} else {
    localStorage.setItem("projects", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects))
}

console.log(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects);

let container = document.querySelector(".container")

let form = (0,_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.body.appendChild(form)

;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects);

//local storage update
function updateLocalStorage() {
    localStorage.projects = JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects);
}

//click event handler
container.addEventListener("click", (e) => {
    let classList = e.target.classList;

    if (classList.contains("project")) {
        let projName = e.target.id;
        (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects[projName], projName);
    } else if (classList.contains("add-project")) {
        let newProj = prompt("Type In project Name");
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProj);
        updateLocalStorage();
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.addToProjContainer)(newProj);
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects)
    } else if (classList.contains("arrow")) {
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects);
    } else if (classList.contains("add-todo")) {
        (0,_form__WEBPACK_IMPORTED_MODULE_3__.displayForm)();
        updateLocalStorage();
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__["default"].projects)
    } else if (classList.contains("delete")) {
        let project = document.querySelector("ul");
        let li = e.target.parentElement;
        (0,_project__WEBPACK_IMPORTED_MODULE_2__.removeTodo)(project, li);
        updateLocalStorage();
    } else if (e.target.id = "checkbox") {
        let project = document.querySelector("ul");
        let li = e.target.parentElement.parentElement;
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].markAsDone(project.id, li.dataset.index);
        updateLocalStorage();
    }
});


//form handler
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".form form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let { task, dueDate, priority } = (0,_form__WEBPACK_IMPORTED_MODULE_3__.getFormValues)();
        let todo = _index__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(task, dueDate, priority);
        let todoList = document.querySelector("ul");
        let project = todoList.id;
        let todoListItem = (0,_project__WEBPACK_IMPORTED_MODULE_2__.createTodoListItem)(
            todo, _index__WEBPACK_IMPORTED_MODULE_0__["default"].projects[project].length);
        console.log(todoListItem);
        todoList.innerHTML += todoListItem;
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(project, todo);
        updateLocalStorage();
        setTimeout(() => {
            form.parentElement.classList.remove("slide");
        }, 1000)
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGtCQUFrQixtQkFBbUIsK0JBQStCLEtBQUssY0FBYyxzQkFBc0IsMEJBQTBCLGdDQUFnQyxLQUFLLG9CQUFvQixxQkFBcUIsMEJBQTBCLHFCQUFxQixLQUFLLFlBQVksNEJBQTRCLEtBQUssbUJBQW1CLHNCQUFzQixrQkFBa0Isd0JBQXdCLHdCQUF3QixLQUFLLDZDQUE2QyxxQkFBcUIsc0JBQXNCLGdDQUFnQyxtREFBbUQsc0JBQXNCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLDBDQUEwQyxLQUFLLCtDQUErQyxvQ0FBb0MsS0FBSyxzQkFBc0Isd0JBQXdCLEtBQUssa0JBQWtCLDJCQUEyQixLQUFLLGdCQUFnQix3QkFBd0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0MsMkJBQTJCLGtCQUFrQixvQkFBb0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsNkNBQTZDLEtBQUssdUZBQXVGLHNCQUFzQiwrQ0FBK0MsOEJBQThCLGtCQUFrQiw0QkFBNEIsS0FBSyxtQkFBbUIsa0NBQWtDLHFCQUFxQix3QkFBd0IscUJBQXFCLDBCQUEwQixLQUFLLGlFQUFpRSxvQkFBb0IsMkJBQTJCLEtBQUssMkJBQTJCLHNCQUFzQix1Q0FBdUMsMkJBQTJCLDhDQUE4QyxrQkFBa0IsNEJBQTRCLHFCQUFxQixTQUFTLHlCQUF5Qiw2Q0FBNkMsS0FBSyxxQkFBcUIsNEJBQTRCLEtBQUssd0JBQXdCLHdCQUF3Qiw4QkFBOEIscUJBQXFCLHFCQUFxQixLQUFLLGdDQUFnQyxzQkFBc0IsK0JBQStCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3Qiw0QkFBNEIsc0NBQXNDLDJDQUEyQyxLQUFLLHFCQUFxQixpQ0FBaUMsS0FBSyxrQkFBa0IsMkJBQTJCLDRCQUE0QixLQUFLLG1CQUFtQiw0QkFBNEIsS0FBSyx5QkFBeUIsNEJBQTRCLEtBQUssZUFBZSxvQkFBb0IscUJBQXFCLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLGdCQUFnQix1QkFBdUIsdUJBQXVCLGdDQUFnQyxxQkFBcUIsS0FBSyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyw2QkFBNkIsa0JBQWtCLG1CQUFtQiwrQkFBK0IsS0FBSyxjQUFjLHNCQUFzQiwwQkFBMEIsZ0NBQWdDLEtBQUssb0JBQW9CLHFCQUFxQiwwQkFBMEIscUJBQXFCLEtBQUssWUFBWSw0QkFBNEIsS0FBSyxtQkFBbUIsc0JBQXNCLGtCQUFrQix3QkFBd0Isd0JBQXdCLEtBQUssNkNBQTZDLHFCQUFxQixzQkFBc0IsZ0NBQWdDLG1EQUFtRCxzQkFBc0IsZ0NBQWdDLDRCQUE0Qix3QkFBd0IsMENBQTBDLEtBQUssK0NBQStDLG9DQUFvQyxLQUFLLHNCQUFzQix3QkFBd0IsS0FBSyxrQkFBa0IsMkJBQTJCLEtBQUssZ0JBQWdCLHdCQUF3QixzQkFBc0IsNEJBQTRCLGdDQUFnQywyQkFBMkIsa0JBQWtCLG9CQUFvQixvQkFBb0IscUJBQXFCLDJCQUEyQiw2Q0FBNkMsS0FBSyx1RkFBdUYsc0JBQXNCLCtDQUErQyw4QkFBOEIsa0JBQWtCLDRCQUE0QixLQUFLLG1CQUFtQixrQ0FBa0MscUJBQXFCLHdCQUF3QixxQkFBcUIsMEJBQTBCLEtBQUssaUVBQWlFLG9CQUFvQiwyQkFBMkIsS0FBSywyQkFBMkIsc0JBQXNCLHVDQUF1QywyQkFBMkIsOENBQThDLGtCQUFrQiw0QkFBNEIscUJBQXFCLFNBQVMseUJBQXlCLDZDQUE2QyxLQUFLLHFCQUFxQiw0QkFBNEIsS0FBSyx3QkFBd0Isd0JBQXdCLDhCQUE4QixxQkFBcUIscUJBQXFCLEtBQUssZ0NBQWdDLHNCQUFzQiwrQkFBK0IsMkJBQTJCLGlCQUFpQixrQkFBa0IscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLDRCQUE0QixzQ0FBc0MsMkNBQTJDLEtBQUsscUJBQXFCLGlDQUFpQyxLQUFLLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEtBQUssbUJBQW1CLDRCQUE0QixLQUFLLHlCQUF5Qiw0QkFBNEIsS0FBSyxlQUFlLG9CQUFvQixxQkFBcUIsS0FBSyxxQkFBcUIsdUJBQXVCLEtBQUssZ0JBQWdCLHVCQUF1Qix1QkFBdUIsZ0NBQWdDLHFCQUFxQixLQUFLLG1CQUFtQjtBQUNqOE87QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDbEI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQUssRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFUTtBQUNjO0FBQ3ZCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsbURBQUssRUFBRTtBQUMvRCwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0EsZ0NBQWdDLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQjtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNPO0FBQ0U7QUFDUDtBQUNvQjtBQUNPO0FBQ2Y7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCLEVBQUU7QUFDRixvREFBb0QsdURBQWdCO0FBQ3BFO0FBQ0E7QUFDQSxZQUFZLHVEQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlEQUFVO0FBQ3JCO0FBQ0E7QUFDQSxrREFBZSxDQUFDLHVEQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdURBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjLENBQUMsdURBQWdCO0FBQ3ZDLE1BQU07QUFDTjtBQUNBLFFBQVEseURBQWtCO0FBQzFCO0FBQ0EsUUFBUSx5REFBa0I7QUFDMUIsb0JBQW9CLHVEQUFnQjtBQUNwQyxNQUFNO0FBQ04sUUFBUSxpREFBZSxDQUFDLHVEQUFnQjtBQUN4QyxNQUFNO0FBQ04sUUFBUSxrREFBVztBQUNuQjtBQUNBLG9CQUFvQix1REFBZ0I7QUFDcEMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLG9EQUFVO0FBQ2xCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLHlEQUFrQjtBQUMxQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQkFBMEIsRUFBRSxvREFBYTtBQUN2RCxtQkFBbUIseURBQWtCO0FBQ3JDO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWtCO0FBQzdDLGtCQUFrQix1REFBZ0I7QUFDbEM7QUFDQTtBQUNBLFFBQVEsc0RBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDY1MHB4O1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LFxcclxcbi5mb3JtLFxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlcixcXHJcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAzNXB4O1xcclxcbiAgICByaWdodDogMzVweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi8qcHJvamVjdCBjb250YWluZXJzIHBhZ2UqL1xcclxcbi8qcHJvaiBjb250YWluZXIgaGVhZGVyKi9cXHJcXG4uY29udGFpbmVyIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi8qcHJvaiBjb250YWluZXIgbWFpbiovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbnVsIC50by1kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudWwgLnRvLWRvOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8gZm9ybSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50by1kbyAuZGVsZXRlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKmZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0uc2xpZGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cgbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdz4qIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQSxRQUFROztBQUVSO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDY1MHB4O1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LFxcclxcbi5mb3JtLFxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlcixcXHJcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAzNXB4O1xcclxcbiAgICByaWdodDogMzVweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi8qcHJvamVjdCBjb250YWluZXJzIHBhZ2UqL1xcclxcbi8qcHJvaiBjb250YWluZXIgaGVhZGVyKi9cXHJcXG4uY29udGFpbmVyIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi8qcHJvaiBjb250YWluZXIgbWFpbiovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbnVsIC50by1kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudWwgLnRvLWRvOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8gZm9ybSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50by1kbyAuZGVsZXRlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKmZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0uc2xpZGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cgbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdz4qIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENoZWNrIGZyb20gXCIuL2ltYWdlcy9jaGVjay5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmxldCBjcmVhdGVGb3JtQ29udGVudCA9ICgpID0+IHtcclxuICAgIGxldCBmb3JtID0gYFxyXG4gICAgPGgzPk5ldyBUYXNrPC9oMz5cclxuICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza1wiPldoYXQgaXMgdG8gYmUgZG9uZT88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgaWQ9XCJ0YXNrXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZT88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJkYXRlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGltZVwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiBuYW1lPVwiXCIgaWQ9XCJ0aW1lXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiXCIgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPjxpbWcgc3JjPSR7Q2hlY2t9IGFsdD1cIlwiPjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5gIDtcclxuICAgIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XHJcbiAgICBmb3JtRGl2LmlubmVySFRNTCA9IGNyZWF0ZUZvcm1Db250ZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1EaXY7XHJcbn1cclxuXHJcbmxldCBkaXNwbGF5Rm9ybSA9ICgpID0+IHtcclxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIilcclxufVxyXG5cclxubGV0IGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtpZD0ndGFzayddXCIpLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbaWQ9J2RhdGUnXVwiKS52YWx1ZTtcclxuICAgIGxldCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W2lkPSd0aW1lJ11cIikudmFsdWU7XHJcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbaWQ9J3ByaW9yaXR5J11cIikudmFsdWU7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIHsgdGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkgfVxyXG59XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Rm9ybSwgZ2V0Rm9ybVZhbHVlcyB9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmxldCBjcmVhdGVDb3VudERpdiA9IChudW1Ub2RvKSA9PiB7Ly9wcm9qZWN0IG5hbWU6IGFyZ1xyXG4gICAgbGV0IGNvdW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvdW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudFwiKTtcclxuICAgIGNvdW50RGl2LnRleHRDb250ZW50ID0gbnVtVG9kbztcclxuICAgIHJldHVybiBjb3VudERpdjtcclxufVxyXG5cclxubGV0IGNyZWF0ZVByb2plY3REaXYgPSAocHJvamVjdCwgbnVtVG9kbykgPT4gey8vcHJvamVjdCBuYW1lOiBhcmdcclxuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgY291bnREaXYgPSBjcmVhdGVDb3VudERpdihudW1Ub2RvKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoY291bnREaXYpO1xyXG5cclxuICAgIGxldCBwcm9qRGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qRGl2VGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QudG9VcHBlckNhc2UoKTsvL3Byb2plY3RuYW1lXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2pEaXZUZXh0KVxyXG5cclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICBwcm9qZWN0RGl2LmlkID0gcHJvamVjdDtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxubGV0IGFkZFRvUHJvakNvbnRhaW5lciA9IChwcm9qZWN0KSA9PiB7Ly9wcm9qZWN0IG5hbWU6IGFyZ1xyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xyXG4gICAgbGV0IHByb2pEaXYgPSBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QsIDApO1xyXG4gICAgbGV0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvakRpdiwgYWRkUHJvamVjdERpdik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZVBhZ2UocHJvamVjdHMpIHtcclxuICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVE8gRE8gTElTVFwiXHJcblxyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcblxyXG4gICAgbGV0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XHJcbiAgICBhZGRQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBwcm9qZWN0cykge1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVByb2plY3REaXYocHJvamVjdCwgcHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoXHJcbiAgICAgICAgKSwgYWRkUHJvamVjdERpdilcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhZGRUb1Byb2pDb250YWluZXIgfSIsImNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICB9XHJcbiAgICBjaGVjaygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1bmNoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0cyA9IHtcclxuICAgIHBlcnNvbmFsOiBbXSxcclxuICAgIHdvcms6IFtdLFxyXG4gICAgZ3JvY2VyeTogW10sXHJcbn1cclxuXHJcbmxldCBhZGRQcm9qZWN0ID0gKHByb2pOYW1lKSA9PiB7XHJcbiAgICBwcm9qZWN0c1twcm9qTmFtZV0gPSBbXTtcclxufVxyXG5cclxubGV0IGFkZFRvZG8gPSAocHJvamVjdCwgdG9Eb09iaikgPT4ge1xyXG4gICAgcHJvamVjdHNbcHJvamVjdF0ucHVzaCh0b0RvT2JqKTtcclxufVxyXG5cclxubGV0IGNyZWF0ZVRvZG8gPSAodGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IG5ldyBUb2RvKHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuXHJcbmxldCBtYXJrQXNEb25lID0gKHByb2plY3QsIHRvRG9JbmRleCkgPT4ge1xyXG4gICAgcHJvamVjdHNbcHJvamVjdF1bdG9Eb0luZGV4XS5jaGVjaygpO1xyXG59XHJcblxyXG5sZXQgZGVsZXRlVG9EbyA9ICh0b0RvSW5kZXgsIHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3RzW3Byb2plY3RdLnNwbGljZSh0b0RvSW5kZXgsIDEpXHJcbn1cclxuXHJcbmxldCByZXBsYWNlVG9kbyA9IChuZXdUb0RvLCBwcm9qZWN0LCB0b0RvSW5kZXgpID0+IHtcclxuICAgIHByb2plY3RzW3Byb2plY3RdW3RvRG9JbmRleF0gPSBuZXdUb0RvO1xyXG59XHJcblxyXG5sZXQgZWRpdFRvZG8gPSAobmV3VG9EbywgcHJvamVjdCwgdG9Eb0luZGV4KSA9PiB7XHJcbiAgICByZXBsYWNlVG9kbyhuZXdUb0RvLCBwcm9qZWN0LCB0b0RvSW5kZXgpO1xyXG59XHJcblxyXG5hZGRQcm9qZWN0KFwic2Nob29sXCIpO1xyXG5hZGRQcm9qZWN0KFwicmVsYXRpb25zaGlwXCIpO1xyXG5sZXQgcmVhZCA9IGNyZWF0ZVRvZG8oXCJyZWFkXCIsIG5ldyBEYXRlKFwiMjAyMy0wMi0xMVwiKSwgNSk7XHJcbmxldCBzdGF5SGFsYWwgPSBjcmVhdGVUb2RvKFwic3RheUhhbGFsXCIsIG5ldyBEYXRlKCksIDEwKVxyXG5sZXQga2VlcEl0UmVhbCA9IGNyZWF0ZVRvZG8oXCJOZXZlciBjaGVhdGVcIiwgbmV3IERhdGUoKSwgNSlcclxuXHJcbmFkZFRvZG8oXCJzY2hvb2xcIiwgcmVhZCk7XHJcbmFkZFRvZG8oXCJyZWxhdGlvbnNoaXBcIiwgc3RheUhhbGFsKTtcclxuYWRkVG9kbyhcInJlbGF0aW9uc2hpcFwiLCBrZWVwSXRSZWFsKTtcclxuXHJcbm1hcmtBc0RvbmUoXCJzY2hvb2xcIiwgMClcclxuLy9kZWxldGVUb0RvKDAsIFwicmVsYXRpb25zaGlwXCIpXHJcbmVkaXRUb2RvKGNyZWF0ZVRvZG8oXCJzdHVkeVwiLCBuZXcgRGF0ZShcIjIwMjMtMDItMTFcIiksIDUpLCBcInNjaG9vbFwiLCAwKVxyXG5cclxuLy9jb25zb2xlLmxvZyhwcm9qZWN0cy5zY2hvb2wpO1xyXG4vL2NvbnNvbGUubG9nKHByb2plY3RzLnJlbGF0aW9uc2hpcCk7XHJcbmxldCB0b2RvQXBwID0ge1xyXG4gICAgcHJvamVjdHMsIGFkZFByb2plY3QsIGFkZFRvZG8sIGNyZWF0ZVRvZG8sIG1hcmtBc0RvbmVcclxuICAgICwgZGVsZXRlVG9EbywgZWRpdFRvZG9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcDsiLCJpbXBvcnQgdG9kb0FwcCBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vaW1hZ2VzL2xlZnQtYXJyb3cucG5nXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG4vL2xldCBwcm9qZWN0cyA9IHRvZG9BcHAucHJvamVjdHM7XHJcblxyXG5sZXQgY3JlYXRlSGVhZGVyID0gKHByb2pOYW1lKSA9PiB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGxldCBoZWFkZXJDb250ZW50ID0gYDxkaXYgPjxpbWcgY2xhc3M9XCJhcnJvd1wiIHNyYz0ke0Fycm93fSBhbHQ9XCJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvak5hbWV9PC9oMj48ZGl2IGNsYXNzPVwiYWRkLXRvZG9cIj4rPC9kaXY+YDtcclxuXHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxubGV0IGNyZWF0ZVRvZG9MaXN0SXRlbSA9ICh0b2RvT2JqLCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IGR1ZURhdGUgPSAoKHR5cGVvZiB0b2RvT2JqLmR1ZURhdGUgPT09IFwic3RyaW5nXCIpID9cclxuICAgICAgICBuZXcgRGF0ZSh0b2RvT2JqLmR1ZURhdGUpIDogdG9kb09iai5kdWVEYXRlXHJcbiAgICApLy9ldmVyeXRoaW5ncyB0dXJucyBpbiBzdHJpbmcgd2l0aCBsb2NhbCBzdG9yYWdlXHJcblxyXG4gICAgbGV0IHRvZG9MaXN0SXRlbSA9IGBcclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwidG8tZG9cIiBkYXRhLWluZGV4PSR7aW5kZXh9PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPiR7dG9kb09iai50YXNrfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke2R1ZURhdGUuZ2V0RnVsbFllYXIoKX0gJHtkdWVEYXRlLmdldE1vbnRoKCl9ICR7ZHVlRGF0ZS5nZXREYXRlKCl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIj5YPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICBgXHJcbiAgICByZXR1cm4gdG9kb0xpc3RJdGVtO1xyXG59XHJcblxyXG5cclxubGV0IHJlbW92ZVRvZG8gPSAocHJvamVjdCwgdG9kb0xpc3RJdGVtKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSB0b2RvTGlzdEl0ZW0uZGF0YXNldC5pbmRleDtcclxuICAgIHRvZG9BcHAuZGVsZXRlVG9EbyhpbmRleCwgcHJvamVjdC5pZCk7XHJcbiAgICBwcm9qZWN0LnJlbW92ZUNoaWxkKHRvZG9MaXN0SXRlbSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QsIHByb2pOYW1lKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHJcbiAgICBsZXQgaGVhZGVyID0gY3JlYXRlSGVhZGVyKHByb2pOYW1lKTtcclxuICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRvZG9MaXN0LmlkID0gcHJvak5hbWU7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgdG9kb0xpc3QuaW5uZXJIVE1MICs9IGNyZWF0ZVRvZG9MaXN0SXRlbShwcm9qZWN0W2luZGV4XSwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdClcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVG9kb0xpc3RJdGVtLCByZW1vdmVUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHRvZG9BcHAgZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IGRpc3BsYXlIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBkaXNwbGF5UHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IHsgZGlzcGxheUZvcm0sIGdldEZvcm1WYWx1ZXMgfSBmcm9tIFwiLi9mb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0SXRlbSwgcmVtb3ZlVG9kbyB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgYWRkVG9Qcm9qQ29udGFpbmVyIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxubGV0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbmxldCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XHJcblxyXG5pZiAocHJvamVjdHMpIHtcclxuICAgIHRvZG9BcHAucHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzKVxyXG59IGVsc2Uge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvQXBwLnByb2plY3RzKSlcclxufVxyXG5cclxuY29uc29sZS5sb2codG9kb0FwcC5wcm9qZWN0cyk7XHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcclxuXHJcbmxldCBmb3JtID0gY3JlYXRlRm9ybSgpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pXHJcblxyXG5kaXNwbGF5SG9tZVBhZ2UodG9kb0FwcC5wcm9qZWN0cyk7XHJcblxyXG4vL2xvY2FsIHN0b3JhZ2UgdXBkYXRlXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHRvZG9BcHAucHJvamVjdHMpO1xyXG59XHJcblxyXG4vL2NsaWNrIGV2ZW50IGhhbmRsZXJcclxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGNsYXNzTGlzdCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcclxuXHJcbiAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdFwiKSkge1xyXG4gICAgICAgIGxldCBwcm9qTmFtZSA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHRvZG9BcHAucHJvamVjdHNbcHJvak5hbWVdLCBwcm9qTmFtZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0XCIpKSB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2ogPSBwcm9tcHQoXCJUeXBlIEluIHByb2plY3QgTmFtZVwiKTtcclxuICAgICAgICB0b2RvQXBwLmFkZFByb2plY3QobmV3UHJvaik7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgYWRkVG9Qcm9qQ29udGFpbmVyKG5ld1Byb2opO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcHAucHJvamVjdHMpXHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucyhcImFycm93XCIpKSB7XHJcbiAgICAgICAgZGlzcGxheUhvbWVQYWdlKHRvZG9BcHAucHJvamVjdHMpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtdG9kb1wiKSkge1xyXG4gICAgICAgIGRpc3BsYXlGb3JtKCk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb0FwcC5wcm9qZWN0cylcclxuICAgIH0gZWxzZSBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICAgICAgbGV0IGxpID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZW1vdmVUb2RvKHByb2plY3QsIGxpKTtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgICAgICBsZXQgbGkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdG9kb0FwcC5tYXJrQXNEb25lKHByb2plY3QuaWQsIGxpLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vL2Zvcm0gaGFuZGxlclxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybSBmb3JtXCIpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7IHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5IH0gPSBnZXRGb3JtVmFsdWVzKCk7XHJcbiAgICAgICAgbGV0IHRvZG8gPSB0b2RvQXBwLmNyZWF0ZVRvZG8odGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHRvZG9MaXN0LmlkO1xyXG4gICAgICAgIGxldCB0b2RvTGlzdEl0ZW0gPSBjcmVhdGVUb2RvTGlzdEl0ZW0oXHJcbiAgICAgICAgICAgIHRvZG8sIHRvZG9BcHAucHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvTGlzdEl0ZW0pO1xyXG4gICAgICAgIHRvZG9MaXN0LmlubmVySFRNTCArPSB0b2RvTGlzdEl0ZW07XHJcbiAgICAgICAgdG9kb0FwcC5hZGRUb2RvKHByb2plY3QsIHRvZG8pO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlXCIpO1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==