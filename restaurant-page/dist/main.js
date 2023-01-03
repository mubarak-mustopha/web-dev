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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/donuts.jpg */ "./src/images/donuts.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    height: 120vh;\r\n    display: grid;\r\n    grid-template-rows: 100px auto 100px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n/*header section*/\r\nheader {\r\n    padding: 50px;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #FCA8F3;\r\n}\r\n\r\n.logo>* {\r\n    display: block;\r\n}\r\n\r\n.logo {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo span {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.logo img {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*header nav*/\r\n.nav {\r\n    list-style-type: none;\r\n    display: flex;\r\n    gap: 30px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.nav a:link,\r\n.nav a:visited {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n/*main section styles*/\r\n\r\nmain {\r\n    background-color: white;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\nmain.home {\r\n    color: #fff;\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nmain.home::before {\r\n    content: \"\";\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/*menu styles*/\r\n.menu {\r\n    padding: 20px;\r\n    width: 900px;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-gap: 20px;\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.menu img {\r\n    height: 300px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*contact*/\r\n.contact {\r\n    width: 600px;\r\n    height: 100%;\r\n    padding: 0 50px;\r\n}\r\n\r\n.contact h1 {\r\n    margin-top: 60px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact p {\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.contact input {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    padding: 12px;\r\n}\r\n\r\n.contact textarea {\r\n    width: 100%;\r\n    min-height: 150px;\r\n    margin-bottom: 20px;\r\n    padding: 12px;\r\n}\r\n\r\n.contact button {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n/*footer styles*/\r\n\r\nfooter {\r\n    padding: 10px 50px;\r\n    background-color: #ddc2ea;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.socials img {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\nbutton {\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    background-color: black;\r\n    padding: 10px 15px;\r\n    box-shadow: none;\r\n}\r\n\r\nfooter .author {\r\n    align-self: flex-end;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,2CAA2C;IAC3C,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA,iBAAiB;AACjB;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA,aAAa;AACb;IACI,qBAAqB;IACrB,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,YAAY;AAChB;;AAEA,sBAAsB;;AAEtB;IACI,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA,cAAc;AACd;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,cAAc;IACd,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;;AAGA,UAAU;AACV;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,gBAAgB;;AAEhB;IACI,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    height: 120vh;\r\n    display: grid;\r\n    grid-template-rows: 100px auto 100px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n/*header section*/\r\nheader {\r\n    padding: 50px;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #FCA8F3;\r\n}\r\n\r\n.logo>* {\r\n    display: block;\r\n}\r\n\r\n.logo {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo span {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.logo img {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*header nav*/\r\n.nav {\r\n    list-style-type: none;\r\n    display: flex;\r\n    gap: 30px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.nav a:link,\r\n.nav a:visited {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n/*main section styles*/\r\n\r\nmain {\r\n    background-color: white;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\nmain.home {\r\n    color: #fff;\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    background-image: url(\"./images/donuts.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nmain.home::before {\r\n    content: \"\";\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/*menu styles*/\r\n.menu {\r\n    padding: 20px;\r\n    width: 900px;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-gap: 20px;\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.menu img {\r\n    height: 300px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*contact*/\r\n.contact {\r\n    width: 600px;\r\n    height: 100%;\r\n    padding: 0 50px;\r\n}\r\n\r\n.contact h1 {\r\n    margin-top: 60px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact p {\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.contact input {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    padding: 12px;\r\n}\r\n\r\n.contact textarea {\r\n    width: 100%;\r\n    min-height: 150px;\r\n    margin-bottom: 20px;\r\n    padding: 12px;\r\n}\r\n\r\n.contact button {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n/*footer styles*/\r\n\r\nfooter {\r\n    padding: 10px 50px;\r\n    background-color: #ddc2ea;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.socials img {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\nbutton {\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    background-color: black;\r\n    padding: 10px 15px;\r\n    box-shadow: none;\r\n}\r\n\r\nfooter .author {\r\n    align-self: flex-end;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createContactPage(main) {
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact")

    main.classList.remove("home");
    main.innerHTML = "";

    let heading = document.createElement("h1");
    heading.textContent = "CONTACT US";

    let contactMsg = document.createElement("p");
    contactMsg.textContent = "Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at 087 3521 7362. Looking forward to hearing from you!";

    let form = document.createElement("form");
    let nameInput = createFormInput("text", "name", "Name");
    let emailInput = createFormInput("email", "email", "Email");
    let phoneNumInput = createFormInput("text", "phoneNum", "Phone Number");
    let messageInput = createTextArea("textArea", "message", "Message");
    let button = document.createElement("button");
    button.textContent = "SEND";

    form.innerHTML = nameInput + emailInput + phoneNumInput + messageInput;
    form.appendChild(button)

    contactDiv.appendChild(heading);
    contactDiv.appendChild(contactMsg);
    contactDiv.appendChild(form)

    return contactDiv;

}

function createFormInput(inputType, inputId, inputPlaceholder) {
    return `
    <input type=${inputType}  id=${inputId} placeholder=${inputPlaceholder}>
    `
}

function createTextArea(inputType, inputId, inputPlaceholder) {
    return `
    <textarea type=${inputType}  id=${inputId} placeholder=${inputPlaceholder}></textarea>
    `
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _images_socials_instagram_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/socials/instagram.png */ "./src/images/socials/instagram.png");
/* harmony import */ var _images_socials_facebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/socials/facebook.png */ "./src/images/socials/facebook.png");
/* harmony import */ var _images_socials_email_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/socials/email.png */ "./src/images/socials/email.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function createSocials() {
    let div = document.createElement("div");
    div.classList.add("socials");

    let insta = new Image();
    insta.src = _images_socials_instagram_png__WEBPACK_IMPORTED_MODULE_0__;

    let facebook = new Image();
    facebook.src = _images_socials_facebook_png__WEBPACK_IMPORTED_MODULE_1__;

    let email = new Image();
    email.src = _images_socials_email_png__WEBPACK_IMPORTED_MODULE_2__;

    div.appendChild(insta);
    div.appendChild(facebook);
    div.appendChild(email);

    return div;
}

function getFooterText() {
    let footerText = document.createElement("div");
    footerText.textContent = "Made By Mubarak";
    footerText.classList.add("author");

    return footerText;
}

function createButton() {
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.textContent = "SIGN UP"

    div.appendChild(button);

    return div;
}

function createFooter() {
    let footer = document.createElement("footer");
    footer.appendChild(createSocials());
    footer.appendChild(getFooterText());
    footer.appendChild(createButton());
    return footer;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.jpeg */ "./src/images/logo.jpeg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function createLogo() {
    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    let logoImg = new Image();
    logoImg.src = _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    logoDiv.appendChild(logoImg);

    let logoText = document.createElement("span");
    logoText.textContent = "Muby's Doughnot";
    logoDiv.appendChild(logoText);
    return logoDiv
}

function createNav() {
    let navList = document.createElement("ul");
    navList.classList.add("nav");

    //home list
    let homeLi = document.createElement("li");
    homeLi.setAttribute("id", "home");
    let homeLink = createLinkTag("Home", "#");
    homeLi.appendChild(homeLink);

    //menu list
    let menuLi = document.createElement("li");
    menuLi.setAttribute("id", "menu");
    let menuLink = createLinkTag("Menu", "#");
    menuLi.appendChild(menuLink);

    //Contact list
    let contactLi = document.createElement("li");
    contactLi.setAttribute("id", "contact");
    let contactLink = createLinkTag("Contact", "#");
    contactLi.appendChild(contactLink);

    navList.appendChild(homeLi);
    navList.appendChild(menuLi);
    navList.appendChild(contactLi)

    return navList;
}

function createLinkTag(text, href) {
    let link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    return link
}

//append to header

function createHeader() {
    let header = document.createElement("header");
    header.append(createLogo());
    header.append(createNav());
    return header;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createHomePage(main) {
    main.innerHTML = "";
    main.classList.add("home")//this add a background image to the main section

    let welcomeText = document.createElement("div");
    welcomeText.classList.add("welcome-text");
    welcomeText.innerHTML = "Welcome To Muby's <br> Doughnut";

    return welcomeText;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _images_menu_boston_donut_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/boston-donut.jpg */ "./src/images/menu/boston-donut.jpg");
/* harmony import */ var _images_menu_cider_donut_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/cider-donut.jpg */ "./src/images/menu/cider-donut.jpg");
/* harmony import */ var _images_menu_malasada_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/malasada.jpg */ "./src/images/menu/malasada.jpg");
/* harmony import */ var _images_menu_sunshine_donut_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/sunshine-donut.jpg */ "./src/images/menu/sunshine-donut.jpg");
/* harmony import */ var _images_menu_iced_sugar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/iced-sugar.jpg */ "./src/images/menu/iced-sugar.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function createMenuPage(main) {
    main.innerHTML = "";
    main.classList.remove("home");

    let menu = document.createElement("div");
    menu.classList.add("menu");

    let bostonDonut = createDonutMenuBox(_images_menu_boston_donut_jpg__WEBPACK_IMPORTED_MODULE_0__, "Boston Donut", 7.5);
    let ciderDonut = createDonutMenuBox(_images_menu_cider_donut_jpg__WEBPACK_IMPORTED_MODULE_1__, "Cider Donut", 4.5);
    let icedSugar = createDonutMenuBox(_images_menu_iced_sugar_jpg__WEBPACK_IMPORTED_MODULE_4__, "Iced Sugar Donut", 12);
    let malasada = createDonutMenuBox(_images_menu_malasada_jpg__WEBPACK_IMPORTED_MODULE_2__, "Malasada Donut", 9.5);
    let sunshine = createDonutMenuBox(_images_menu_sunshine_donut_jpg__WEBPACK_IMPORTED_MODULE_3__, "Sunshine Donut", 3.5);

    let menuMarkUp = bostonDonut + ciderDonut + icedSugar +
        malasada + sunshine;
    menu.innerHTML = menuMarkUp;


    return menu;
}

function createDonutMenuBox(imgSrc, donutName, donutPrice) {

    return `<div class="donut">
    <img src=${imgSrc} alt="">
    <p class="name">${donutName}</p>
    <p class="price">${donutPrice}</p>
</div>

`;

}

/***/ }),

/***/ "./src/images/donuts.jpg":
/*!*******************************!*\
  !*** ./src/images/donuts.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33832516149c7e5a294a.jpg";

/***/ }),

/***/ "./src/images/logo.jpeg":
/*!******************************!*\
  !*** ./src/images/logo.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b361c5c57bf2f4441f96.jpeg";

/***/ }),

/***/ "./src/images/menu/boston-donut.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/boston-donut.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d2534f18f81765d5c91.jpg";

/***/ }),

/***/ "./src/images/menu/cider-donut.jpg":
/*!*****************************************!*\
  !*** ./src/images/menu/cider-donut.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ff376e4a574f152407e.jpg";

/***/ }),

/***/ "./src/images/menu/iced-sugar.jpg":
/*!****************************************!*\
  !*** ./src/images/menu/iced-sugar.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7822a4c4f1af0e3133c6.jpg";

/***/ }),

/***/ "./src/images/menu/malasada.jpg":
/*!**************************************!*\
  !*** ./src/images/menu/malasada.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdccb2f14c9b65fb0249.jpg";

/***/ }),

/***/ "./src/images/menu/sunshine-donut.jpg":
/*!********************************************!*\
  !*** ./src/images/menu/sunshine-donut.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ee97597838348f253ce.jpg";

/***/ }),

/***/ "./src/images/socials/email.png":
/*!**************************************!*\
  !*** ./src/images/socials/email.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aeff431b705a5aad0433.png";

/***/ }),

/***/ "./src/images/socials/facebook.png":
/*!*****************************************!*\
  !*** ./src/images/socials/facebook.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3e012ab6d51a1a4d74f.png";

/***/ }),

/***/ "./src/images/socials/instagram.png":
/*!******************************************!*\
  !*** ./src/images/socials/instagram.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c411e46b6db4185140b3.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








let header = (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
let main = document.createElement("main");
let footer = (0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();




//append header to dom
document.body.appendChild(header);


//append to main
let homeLink = document.querySelector("#home");
let menuLink = document.querySelector("#menu");
let contactLink = document.querySelector("#contact");

homeLink.addEventListener("click", () => {
    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(main));
})

menuLink.addEventListener("click", () => {
    main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(main))
})

contactLink.addEventListener("click", () => {
    main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])(main))
})
main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(main));

//append main to dom
document.body.appendChild(main)

//append footer to dom
document.body.appendChild(footer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtBQUN6QjtBQUNBLGFBQWEsbURBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBYztBQUNuQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQixpREFBYztBQUNuQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQixvREFBaUI7QUFDdEMsQ0FBQztBQUNELGlCQUFpQixpREFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2RvbnV0cy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDEwMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qaGVhZGVyIHNlY3Rpb24qL1xcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQThGMztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28+KiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKmhlYWRlciBuYXYqL1xcclxcbi5uYXYge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6bGluayxcXHJcXG4ubmF2IGE6dmlzaXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1haW4gc2VjdGlvbiBzdHlsZXMqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubWFpbi5ob21lIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLmhvbWU6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1lbnUgc3R5bGVzKi9cXHJcXG4ubWVudSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWdhcDogMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qY29udGFjdCovXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHAge1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgdGV4dGFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi8qZm9vdGVyIHN0eWxlcyovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjMmVhO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxzIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmF1dGhvciB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlEQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUdBLFVBQVU7QUFDVjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDEwMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qaGVhZGVyIHNlY3Rpb24qL1xcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQThGMztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28+KiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKmhlYWRlciBuYXYqL1xcclxcbi5uYXYge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6bGluayxcXHJcXG4ubmF2IGE6dmlzaXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1haW4gc2VjdGlvbiBzdHlsZXMqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubWFpbi5ob21lIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9kb251dHMuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbi5ob21lOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLyptZW51IHN0eWxlcyovXFxyXFxuLm1lbnUge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51IGltZyB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKmNvbnRhY3QqL1xcclxcbi5jb250YWN0IHtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKmZvb3RlciBzdHlsZXMqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkYzJlYTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFscyBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5hdXRob3Ige1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZShtYWluKSB7XHJcbiAgICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpXHJcblxyXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcclxuXHJcbiAgICBsZXQgY29udGFjdE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29udGFjdE1zZy50ZXh0Q29udGVudCA9IFwiU2VuZCB1cyBhIG1lc3NhZ2UgYW5kIHdl4oCZbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuIFlvdSBjYW4gYWxzbyByZWFjaCB1cyBieSBwaG9uZSBhdCAwODcgMzUyMSA3MzYyLiBMb29raW5nIGZvcndhcmQgdG8gaGVhcmluZyBmcm9tIHlvdSFcIjtcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgbGV0IG5hbWVJbnB1dCA9IGNyZWF0ZUZvcm1JbnB1dChcInRleHRcIiwgXCJuYW1lXCIsIFwiTmFtZVwiKTtcclxuICAgIGxldCBlbWFpbElucHV0ID0gY3JlYXRlRm9ybUlucHV0KFwiZW1haWxcIiwgXCJlbWFpbFwiLCBcIkVtYWlsXCIpO1xyXG4gICAgbGV0IHBob25lTnVtSW5wdXQgPSBjcmVhdGVGb3JtSW5wdXQoXCJ0ZXh0XCIsIFwicGhvbmVOdW1cIiwgXCJQaG9uZSBOdW1iZXJcIik7XHJcbiAgICBsZXQgbWVzc2FnZUlucHV0ID0gY3JlYXRlVGV4dEFyZWEoXCJ0ZXh0QXJlYVwiLCBcIm1lc3NhZ2VcIiwgXCJNZXNzYWdlXCIpO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNFTkRcIjtcclxuXHJcbiAgICBmb3JtLmlubmVySFRNTCA9IG5hbWVJbnB1dCArIGVtYWlsSW5wdXQgKyBwaG9uZU51bUlucHV0ICsgbWVzc2FnZUlucHV0O1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdE1zZyk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3REaXY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtSW5wdXQoaW5wdXRUeXBlLCBpbnB1dElkLCBpbnB1dFBsYWNlaG9sZGVyKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGlucHV0IHR5cGU9JHtpbnB1dFR5cGV9ICBpZD0ke2lucHV0SWR9IHBsYWNlaG9sZGVyPSR7aW5wdXRQbGFjZWhvbGRlcn0+XHJcbiAgICBgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKGlucHV0VHlwZSwgaW5wdXRJZCwgaW5wdXRQbGFjZWhvbGRlcikge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDx0ZXh0YXJlYSB0eXBlPSR7aW5wdXRUeXBlfSAgaWQ9JHtpbnB1dElkfSBwbGFjZWhvbGRlcj0ke2lucHV0UGxhY2Vob2xkZXJ9PjwvdGV4dGFyZWE+XHJcbiAgICBgXHJcbn0iLCJpbXBvcnQgSW5zdGEgZnJvbSBcIi4vaW1hZ2VzL3NvY2lhbHMvaW5zdGFncmFtLnBuZ1wiO1xyXG5pbXBvcnQgRmFjZWJvb2sgZnJvbSBcIi4vaW1hZ2VzL3NvY2lhbHMvZmFjZWJvb2sucG5nXCI7XHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiLi9pbWFnZXMvc29jaWFscy9lbWFpbC5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNvY2lhbHMoKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic29jaWFsc1wiKTtcclxuXHJcbiAgICBsZXQgaW5zdGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGluc3RhLnNyYyA9IEluc3RhO1xyXG5cclxuICAgIGxldCBmYWNlYm9vayA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZmFjZWJvb2suc3JjID0gRmFjZWJvb2s7XHJcblxyXG4gICAgbGV0IGVtYWlsID0gbmV3IEltYWdlKCk7XHJcbiAgICBlbWFpbC5zcmMgPSBFbWFpbDtcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5zdGEpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGZhY2Vib29rKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChlbWFpbCk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9vdGVyVGV4dCgpIHtcclxuICAgIGxldCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIk1hZGUgQnkgTXViYXJha1wiO1xyXG4gICAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yXCIpO1xyXG5cclxuICAgIHJldHVybiBmb290ZXJUZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTSUdOIFVQXCJcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVhdGVTb2NpYWxzKCkpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdldEZvb3RlclRleHQoKSk7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCkpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufSIsImltcG9ydCBMb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLmpwZWdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2dvKCkge1xyXG4gICAgbGV0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICBsZXQgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBMb2dvO1xyXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuXHJcbiAgICBsZXQgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gXCJNdWJ5J3MgRG91Z2hub3RcIjtcclxuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xyXG4gICAgcmV0dXJuIGxvZ29EaXZcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgbGV0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcblxyXG4gICAgLy9ob21lIGxpc3RcclxuICAgIGxldCBob21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob21lTGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xyXG4gICAgbGV0IGhvbWVMaW5rID0gY3JlYXRlTGlua1RhZyhcIkhvbWVcIiwgXCIjXCIpO1xyXG4gICAgaG9tZUxpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcclxuXHJcbiAgICAvL21lbnUgbGlzdFxyXG4gICAgbGV0IG1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIG1lbnVMaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XHJcbiAgICBsZXQgbWVudUxpbmsgPSBjcmVhdGVMaW5rVGFnKFwiTWVudVwiLCBcIiNcIik7XHJcbiAgICBtZW51TGkuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xyXG5cclxuICAgIC8vQ29udGFjdCBsaXN0XHJcbiAgICBsZXQgY29udGFjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29udGFjdExpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcclxuICAgIGxldCBjb250YWN0TGluayA9IGNyZWF0ZUxpbmtUYWcoXCJDb250YWN0XCIsIFwiI1wiKTtcclxuICAgIGNvbnRhY3RMaS5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcblxyXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChob21lTGkpO1xyXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChtZW51TGkpO1xyXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0TGkpXHJcblxyXG4gICAgcmV0dXJuIG5hdkxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtUYWcodGV4dCwgaHJlZikge1xyXG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgbGluay5ocmVmID0gaHJlZjtcclxuICAgIHJldHVybiBsaW5rXHJcbn1cclxuXHJcbi8vYXBwZW5kIHRvIGhlYWRlclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGNyZWF0ZUxvZ28oKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGNyZWF0ZU5hdigpKTtcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKG1haW4pIHtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImhvbWVcIikvL3RoaXMgYWRkIGEgYmFja2dyb3VuZCBpbWFnZSB0byB0aGUgbWFpbiBzZWN0aW9uXHJcblxyXG4gICAgbGV0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLXRleHRcIik7XHJcbiAgICB3ZWxjb21lVGV4dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgVG8gTXVieSdzIDxicj4gRG91Z2hudXRcIjtcclxuXHJcbiAgICByZXR1cm4gd2VsY29tZVRleHQ7XHJcbn0iLCJpbXBvcnQgQm9zdG9uIGZyb20gXCIuL2ltYWdlcy9tZW51L2Jvc3Rvbi1kb251dC5qcGdcIjtcclxuaW1wb3J0IENpZGVyIGZyb20gXCIuL2ltYWdlcy9tZW51L2NpZGVyLWRvbnV0LmpwZ1wiO1xyXG5pbXBvcnQgTWFsYXNhZGEgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWFsYXNhZGEuanBnXCI7XHJcbmltcG9ydCBTdW5zaGluZSBmcm9tIFwiLi9pbWFnZXMvbWVudS9zdW5zaGluZS1kb251dC5qcGdcIjtcclxuaW1wb3J0IEljZWRTdWdhciBmcm9tIFwiLi9pbWFnZXMvbWVudS9pY2VkLXN1Z2FyLmpwZ1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UobWFpbikge1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcclxuXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICAgIGxldCBib3N0b25Eb251dCA9IGNyZWF0ZURvbnV0TWVudUJveChCb3N0b24sIFwiQm9zdG9uIERvbnV0XCIsIDcuNSk7XHJcbiAgICBsZXQgY2lkZXJEb251dCA9IGNyZWF0ZURvbnV0TWVudUJveChDaWRlciwgXCJDaWRlciBEb251dFwiLCA0LjUpO1xyXG4gICAgbGV0IGljZWRTdWdhciA9IGNyZWF0ZURvbnV0TWVudUJveChJY2VkU3VnYXIsIFwiSWNlZCBTdWdhciBEb251dFwiLCAxMik7XHJcbiAgICBsZXQgbWFsYXNhZGEgPSBjcmVhdGVEb251dE1lbnVCb3goTWFsYXNhZGEsIFwiTWFsYXNhZGEgRG9udXRcIiwgOS41KTtcclxuICAgIGxldCBzdW5zaGluZSA9IGNyZWF0ZURvbnV0TWVudUJveChTdW5zaGluZSwgXCJTdW5zaGluZSBEb251dFwiLCAzLjUpO1xyXG5cclxuICAgIGxldCBtZW51TWFya1VwID0gYm9zdG9uRG9udXQgKyBjaWRlckRvbnV0ICsgaWNlZFN1Z2FyICtcclxuICAgICAgICBtYWxhc2FkYSArIHN1bnNoaW5lO1xyXG4gICAgbWVudS5pbm5lckhUTUwgPSBtZW51TWFya1VwO1xyXG5cclxuXHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG9udXRNZW51Qm94KGltZ1NyYywgZG9udXROYW1lLCBkb251dFByaWNlKSB7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZG9udXRcIj5cclxuICAgIDxpbWcgc3JjPSR7aW1nU3JjfSBhbHQ9XCJcIj5cclxuICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7ZG9udXROYW1lfTwvcD5cclxuICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke2RvbnV0UHJpY2V9PC9wPlxyXG48L2Rpdj5cclxuXHJcbmA7XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5cclxubGV0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG5sZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5sZXQgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XHJcblxyXG5cclxuXHJcblxyXG4vL2FwcGVuZCBoZWFkZXIgdG8gZG9tXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcblxyXG4vL2FwcGVuZCB0byBtYWluXHJcbmxldCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcclxubGV0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5sZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XHJcblxyXG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lUGFnZShtYWluKSk7XHJcbn0pXHJcblxyXG5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51UGFnZShtYWluKSlcclxufSlcclxuXHJcbmNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RQYWdlKG1haW4pKVxyXG59KVxyXG5tYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVQYWdlKG1haW4pKTtcclxuXHJcbi8vYXBwZW5kIG1haW4gdG8gZG9tXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbilcclxuXHJcbi8vYXBwZW5kIGZvb3RlciB0byBkb21cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==