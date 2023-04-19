/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nimg,\nsvg {\n  display: block;\n  width: 100%;\n}\n\n:root {\n  --max-width: 1200px;\n  --bg-color: rgb(238, 238, 238);\n  --header-bg-color: rgb(255, 255, 255);\n  --main-bg-color: white;\n}\n\nhtml {\n  background-color: var(--bg-color);\n}\n\n.width-constrained {\n  max-width: var(--max-width);\n}\n\n.margin-centered {\n  margin-inline: auto;\n}\n\nheader {\n  font-size: 2rem;\n  background-color: var(--header-bg-color);\n  border-bottom: 2px solid black;\n}\n\nnav {\n  padding-inline: 2rem;\n}\n\nul {\n  list-style: none;\n\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2rem;\n}\n\n.logo {\n  width: 100px;\n}\n\n.page-buttons {\n  display: flex;\n  gap: 1rem;\n  align-self: stretch;\n}\n\n.page-buttons a {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n\n  text-decoration-line: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: black;\n}\n\n/* Homepage */\n.homepage-main {\n  background-color: var(--main-bg-color);\n  padding: 1rem;\n\n  display: grid;\n  grid-template: repeat(4, 200px) / repeat(4, 1fr);\n}\n\n.stripes {\n  grid-area: 1 / 1 / 4 / 3;\n\n  background-image: linear-gradient(\n    45deg,\n    transparent 0 48%,\n    rgba(128, 128, 128, 0.514) 48% 52%,\n    transparent 52% 100%\n  );\n  background-size: 3vmin 3vmin;\n  z-index: 2;\n  filter: blur(2px);\n}\n\n.homepage-title {\n  font-size: 3rem;\n  grid-area: 1 / 2 / 2 / 4;\n  background-color: rgb(0, 0, 0);\n  color: white;\n  display: grid;\n  place-content: center;\n  z-index: 4;\n}\n\n.homepage-text {\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  grid-area: 2 / 3 / 4 / 4;\n  z-index: 3;\n  background-color: white;\n\n  display: grid;\n  align-content: center;\n}\n\n.homepage-text > p {\n  margin-bottom: 1rem;\n}\n\n.homepage-taste {\n  font-size: 2rem;\n  grid-area: 4 / 4 / 5 / 5;\n  display: grid;\n  place-content: center;\n  z-index: 4;\n  background-color: rgb(0, 0, 0);\n  color: white;\n}\n\n.homepage-image-wrapper {\n  grid-area: 3 / 1 / 5 / 4;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.homepage-pipe {\n  filter: grayscale();\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.gradient-bg {\n  z-index: 0;\n  grid-area: 1 / 2 / -1 / -1;\n  background-image: repeating-radial-gradient(\n    circle at 30% 10%,\n    #535353,\n    #535353 5px,\n    #eee 20px,\n    #eee 100px\n  );\n  background-position: 50% 10%;\n  filter: opacity(20%);\n}\n\n/* Menu page */\n.menu-main {\n  background-color: var(--main-bg-color);\n  padding: 1rem;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    \"restaurant-name restaurant-name\"\n    \"entrees entrees\"\n    \"mains mains\"\n    \"desserts drinks\";\n}\n\n.menu-name {\n  text-align: center;\n  font-size: 3rem;\n  margin-block: 1rem;\n}\n\n.span2 {\n  grid-column: span 2;\n}\n\n.menu-header {\n  text-align: center;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-size: 2rem;\n}\n\n.menu-item {\n  margin: 1rem;\n  border-bottom: 2px solid black;\n\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: auto 1fr;\n}\n\n.menu-item__name {\n  font-style: italic;\n  margin-bottom: 0.5rem;\n}\n\n.menu-name {\n  grid-area: restaurant-name;\n}\n\n.entrees {\n  grid-area: entrees;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.mains {\n  grid-area: mains;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.desserts {\n  grid-area: desserts;\n\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.drinks {\n  grid-area: drinks;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  /* Without this the vertical space is distributed equally for some reason */\n  align-content: start;\n}\n\n.drink-item {\n  display: flex;\n  margin: 1rem;\n}\n\n.drink-item__filler {\n  border-bottom: 2px dotted black;\n  flex-grow: 1;\n}\n\n/* Contact page */\n.contact-main {\n  background-color: var(--main-bg-color);\n  padding: 1rem;\n}\n\n.contact-main h2 {\n  text-align: center;\n  margin-block: 1rem;\n}\n\n.staff-cards {\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\n.staff-card {\n  border: 1px solid black;\n  /* width: 300px; */\n  padding: 0.5rem;\n\n  display: grid;\n  grid-template-areas:\n    \"image name\"\n    \"image title\"\n    \"blurb blurb\";\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto 1fr;\n  gap: 0.5rem;\n\n  box-shadow: 2px 2px black;\n}\n\n.staff-image {\n  grid-area: image;\n  place-self: center;\n  width: 75px;\n\n  overflow: hidden;\n}\n\n.staff-name {\n  grid-area: name;\n  align-self: end;\n  font-weight: bold;\n}\n\n.staff-title {\n  grid-area: title;\n  align-self: start;\n}\n\n.staff-blurb {\n  grid-area: blurb;\n}\n\n.staff-opening {\n  border: 1px dashed black;\n  padding: 1rem;\n\n  display: grid;\n  text-align: center;\n  place-content: center;\n}\n\n.staff-opening > span {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n\n/*  */\n.info-boxes {\n  display: grid;\n  row-gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\n.hour-grid {\n  display: grid;\n  padding: 1rem;\n  gap: 1.5rem 0.5rem;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n\n.hours-graph {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.hour {\n  position: relative;\n  flex-grow: 1;\n}\n\n.open {\n  height: 8px;\n  background-color: black;\n}\n\n.closed {\n  height: 2px;\n  background-color: gray;\n}\n\n.hour.open + .hour.closed::before {\n  content: attr(data-hour);\n  position: absolute;\n  top: 250%;\n  left: -50%;\n}\n\n.hour.closed + .hour.open::before {\n  content: attr(data-hour);\n  position: absolute;\n  top: -250%;\n  left: -50%;\n}\n\n.contact-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-grid {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n}\n\n.contact-icon {\n  width: 40px;\n}\n\n.wrap-grid {\n  flex-grow: 1;\n  display: grid;\n  place-content: center;\n}\n\n/* color idea */\n.info-boxes {\n  border: 1px solid black;\n}\n\n.contact-information {\n  color: white;\n  fill: white;\n  background-color: black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nimg,\nsvg {\n  display: block;\n  width: 100%;\n}\n\n:root {\n  --max-width: 1200px;\n  --bg-color: rgb(238, 238, 238);\n  --header-bg-color: rgb(255, 255, 255);\n  --main-bg-color: white;\n}\n\nhtml {\n  background-color: var(--bg-color);\n}\n\n.width-constrained {\n  max-width: var(--max-width);\n}\n\n.margin-centered {\n  margin-inline: auto;\n}\n\nheader {\n  font-size: 2rem;\n  background-color: var(--header-bg-color);\n  border-bottom: 2px solid black;\n}\n\nnav {\n  padding-inline: 2rem;\n}\n\nul {\n  list-style: none;\n\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2rem;\n}\n\n.logo {\n  width: 100px;\n}\n\n.page-buttons {\n  display: flex;\n  gap: 1rem;\n  align-self: stretch;\n}\n\n.page-buttons a {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n\n  text-decoration-line: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: black;\n}\n\n/* Homepage */\n.homepage-main {\n  background-color: var(--main-bg-color);\n  padding: 1rem;\n\n  display: grid;\n  grid-template: repeat(4, 200px) / repeat(4, 1fr);\n}\n\n.stripes {\n  grid-area: 1 / 1 / 4 / 3;\n\n  background-image: linear-gradient(\n    45deg,\n    transparent 0 48%,\n    rgba(128, 128, 128, 0.514) 48% 52%,\n    transparent 52% 100%\n  );\n  background-size: 3vmin 3vmin;\n  z-index: 2;\n  filter: blur(2px);\n}\n\n.homepage-title {\n  font-size: 3rem;\n  grid-area: 1 / 2 / 2 / 4;\n  background-color: rgb(0, 0, 0);\n  color: white;\n  display: grid;\n  place-content: center;\n  z-index: 4;\n}\n\n.homepage-text {\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  grid-area: 2 / 3 / 4 / 4;\n  z-index: 3;\n  background-color: white;\n\n  display: grid;\n  align-content: center;\n}\n\n.homepage-text > p {\n  margin-bottom: 1rem;\n}\n\n.homepage-taste {\n  font-size: 2rem;\n  grid-area: 4 / 4 / 5 / 5;\n  display: grid;\n  place-content: center;\n  z-index: 4;\n  background-color: rgb(0, 0, 0);\n  color: white;\n}\n\n.homepage-image-wrapper {\n  grid-area: 3 / 1 / 5 / 4;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.homepage-pipe {\n  filter: grayscale();\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.gradient-bg {\n  z-index: 0;\n  grid-area: 1 / 2 / -1 / -1;\n  background-image: repeating-radial-gradient(\n    circle at 30% 10%,\n    #535353,\n    #535353 5px,\n    #eee 20px,\n    #eee 100px\n  );\n  background-position: 50% 10%;\n  filter: opacity(20%);\n}\n\n/* Menu page */\n.menu-main {\n  background-color: var(--main-bg-color);\n  padding: 1rem;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    \"restaurant-name restaurant-name\"\n    \"entrees entrees\"\n    \"mains mains\"\n    \"desserts drinks\";\n}\n\n.menu-name {\n  text-align: center;\n  font-size: 3rem;\n  margin-block: 1rem;\n}\n\n.span2 {\n  grid-column: span 2;\n}\n\n.menu-header {\n  text-align: center;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-size: 2rem;\n}\n\n.menu-item {\n  margin: 1rem;\n  border-bottom: 2px solid black;\n\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: auto 1fr;\n}\n\n.menu-item__name {\n  font-style: italic;\n  margin-bottom: 0.5rem;\n}\n\n.menu-name {\n  grid-area: restaurant-name;\n}\n\n.entrees {\n  grid-area: entrees;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.mains {\n  grid-area: mains;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.desserts {\n  grid-area: desserts;\n\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.drinks {\n  grid-area: drinks;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  /* Without this the vertical space is distributed equally for some reason */\n  align-content: start;\n}\n\n.drink-item {\n  display: flex;\n  margin: 1rem;\n}\n\n.drink-item__filler {\n  border-bottom: 2px dotted black;\n  flex-grow: 1;\n}\n\n/* Contact page */\n.contact-main {\n  background-color: var(--main-bg-color);\n  padding: 1rem;\n}\n\n.contact-main h2 {\n  text-align: center;\n  margin-block: 1rem;\n}\n\n.staff-cards {\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\n.staff-card {\n  border: 1px solid black;\n  /* width: 300px; */\n  padding: 0.5rem;\n\n  display: grid;\n  grid-template-areas:\n    \"image name\"\n    \"image title\"\n    \"blurb blurb\";\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto 1fr;\n  gap: 0.5rem;\n\n  box-shadow: 2px 2px black;\n}\n\n.staff-image {\n  grid-area: image;\n  place-self: center;\n  width: 75px;\n\n  overflow: hidden;\n}\n\n.staff-name {\n  grid-area: name;\n  align-self: end;\n  font-weight: bold;\n}\n\n.staff-title {\n  grid-area: title;\n  align-self: start;\n}\n\n.staff-blurb {\n  grid-area: blurb;\n}\n\n.staff-opening {\n  border: 1px dashed black;\n  padding: 1rem;\n\n  display: grid;\n  text-align: center;\n  place-content: center;\n}\n\n.staff-opening > span {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n\n/*  */\n.info-boxes {\n  display: grid;\n  row-gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\n.hour-grid {\n  display: grid;\n  padding: 1rem;\n  gap: 1.5rem 0.5rem;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n\n.hours-graph {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.hour {\n  position: relative;\n  flex-grow: 1;\n}\n\n.open {\n  height: 8px;\n  background-color: black;\n}\n\n.closed {\n  height: 2px;\n  background-color: gray;\n}\n\n.hour.open + .hour.closed::before {\n  content: attr(data-hour);\n  position: absolute;\n  top: 250%;\n  left: -50%;\n}\n\n.hour.closed + .hour.open::before {\n  content: attr(data-hour);\n  position: absolute;\n  top: -250%;\n  left: -50%;\n}\n\n.contact-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-grid {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n}\n\n.contact-icon {\n  width: 40px;\n}\n\n.wrap-grid {\n  flex-grow: 1;\n  display: grid;\n  place-content: center;\n}\n\n/* color idea */\n.info-boxes {\n  border: 1px solid black;\n}\n\n.contact-information {\n  color: white;\n  fill: white;\n  background-color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/pages/contactpage/at.svg":
/*!**************************************!*\
  !*** ./src/pages/contactpage/at.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>at</title><path d=\"M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z\"></path></svg>"

/***/ }),

/***/ "./src/pages/contactpage/cash.svg":
/*!****************************************!*\
  !*** ./src/pages/contactpage/cash.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z\"></path></svg>"

/***/ }),

/***/ "./src/pages/contactpage/map-marker.svg":
/*!**********************************************!*\
  !*** ./src/pages/contactpage/map-marker.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"2 2 18 20\"><title>map-marker</title><path d=\"M11.5,7C12.88,7 14,8.12 14,9.5C14,10.88 12.88,12 11.5,12C10.12,12 9,10.88 9,9.5C9,8.12 10.12,7 11.5,7M11.5,8C10.67,8 10,8.67 10,9.5C10,10.33 10.67,11 11.5,11C12.33,11 13,10.33 13,9.5C13,8.67 12.33,8 11.5,8M6.8,12.36L11.5,20.09L16.2,12.36V12.36C16.71,11.5 17,10.55 17,9.5C17,6.46 14.54,4 11.5,4C8.46,4 6,6.46 6,9.5C6,10.55 6.29,11.5 6.8,12.36V12.36M17.05,12.88L11.5,22L5.95,12.88V12.88C5.35,11.89 5,10.74 5,9.5C5,5.91 7.91,3 11.5,3C15.09,3 18,5.91 18,9.5C18,10.74 17.65,11.89 17.05,12.88V12.88Z\"></path></svg>"

/***/ }),

/***/ "./src/pages/contactpage/phone-outline.svg":
/*!*************************************************!*\
  !*** ./src/pages/contactpage/phone-outline.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>phone-outline</title><path d=\"M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z\"></path></svg>"

/***/ }),

/***/ "./src/pages/contactpage/scent.svg":
/*!*****************************************!*\
  !*** ./src/pages/contactpage/scent.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.5 5.1C18.5 6.4 19 7.6 19 9C19 10.7 18.3 12.3 16.6 14.1C14.7 16.1 13 18.3 13 20.5C13 20.9 13.1 21.3 13.2 21.8C13.2 21.9 13.2 22 13.1 22.1C13 22.2 12.9 22.1 12.9 22C11.9 20.7 11.4 19.5 11.4 18.1C11.4 16.4 12.1 14.8 13.8 13C15.7 11 17.4 8.8 17.4 6.6C17.4 6.2 17.3 5.8 17.2 5.3C17.2 5.2 17.2 5.1 17.3 5C17.4 5 17.4 5 17.5 5.1M9.7 2.1C10.4 3 10.7 4 10.7 4.9C10.7 6.2 10.1 7.4 8.9 8.7C7.5 10.2 6.2 11.9 6.2 13.5C6.2 13.8 6.3 14.2 6.4 14.4C6.4 14.5 6.4 14.5 6.3 14.6C6.2 14.7 6.1 14.6 6.1 14.6C5.3 13.6 5 12.6 5 11.7C5 10.4 5.6 9.2 6.8 7.9C8.2 6.4 9.5 4.7 9.5 3.1C9.5 2.8 9.4 2.4 9.3 2.2V2C9.5 2 9.6 2 9.7 2.1M10.1 9.9C12 7.9 13.7 5.7 13.7 3.5C13.7 3.1 13.6 2.7 13.5 2.2C13.5 2.1 13.5 2 13.6 1.9C13.7 1.8 13.8 1.9 13.8 2C14.8 3.3 15.3 4.5 15.3 5.9C15.3 7.6 14.6 9.2 12.9 11C11 13 9.3 15.2 9.3 17.4C9.3 17.8 9.4 18.2 9.5 18.7C9.5 18.8 9.5 18.9 9.4 19C9.3 19.1 9.2 19 9.2 18.9C8.2 17.6 7.7 16.4 7.7 15C7.7 13.3 8.4 11.7 10.1 9.9Z\"></path></svg>"

/***/ }),

/***/ "./src/pages/contactpage/sun-clock-outline.svg":
/*!*****************************************************!*\
  !*** ./src/pages/contactpage/sun-clock-outline.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.1 9.32L19.65 6L15.5 5.64C16.1 6.15 16.63 6.78 17.05 7.5C17.37 8.05 17.58 8.63 17.73 9.22C17.18 9.08 16.6 9 16 9C15.86 9 15.72 9 15.58 9C14.81 7.25 13.06 6 11 6C8.24 6 6 8.24 6 11C6 13.06 7.25 14.81 9 15.58C9 15.72 9 15.86 9 16C9 19.87 12.13 23 16 23S23 19.87 23 16C23 12.87 20.94 10.21 18.1 9.32M8 11C8 9.35 9.35 8 11 8C12.08 8 13.03 8.58 13.56 9.45C11.66 10.15 10.15 11.66 9.45 13.56C8.58 13.03 8 12.08 8 11M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25M11 4C10.16 4 9.35 4.15 8.61 4.42L11 1L13.39 4.42C12.65 4.15 11.84 4 11 4M4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5M4.11 9.79L2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79Z\"></path></svg>"

/***/ }),

/***/ "./src/pages/contactpage/contactpage.ts":
/*!**********************************************!*\
  !*** ./src/pages/contactpage/contactpage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContactPage)
/* harmony export */ });
/* harmony import */ var _staffCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staffCards.js */ "./src/pages/contactpage/staffCards.ts");
/* harmony import */ var _openingHours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openingHours.js */ "./src/pages/contactpage/openingHours.ts");
/* harmony import */ var _map_marker_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-marker.svg */ "./src/pages/contactpage/map-marker.svg");
/* harmony import */ var _map_marker_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_marker_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phone_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone-outline.svg */ "./src/pages/contactpage/phone-outline.svg");
/* harmony import */ var _phone_outline_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phone_outline_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _at_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./at.svg */ "./src/pages/contactpage/at.svg");
/* harmony import */ var _at_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_at_svg__WEBPACK_IMPORTED_MODULE_4__);





function buildStaffCard(staffCard) {
    const staffCardElement = document.createElement("div");
    staffCardElement.classList.add("staff-card");
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("staff-image");
    imageWrapper.innerHTML = staffCard.image;
    const name = document.createElement("span");
    name.classList.add("staff-name");
    name.innerText = staffCard.name;
    const title = document.createElement("span");
    title.classList.add("staff-title");
    title.innerText = staffCard.title;
    const blurb = document.createElement("p");
    blurb.classList.add("staff-blurb");
    blurb.innerText = staffCard.blurb;
    staffCardElement.append(imageWrapper, name, title, blurb);
    return staffCardElement;
}
function buildHiringCard() {
    const card = document.createElement("div");
    card.classList.add("staff-opening");
    card.innerHTML = "This spot could be <span>Yours!</span>";
    return card;
}
function buildStaffContainer() {
    const staffCardsContainer = document.createElement("div");
    staffCardsContainer.classList.add("staff-cards");
    const staffCardElements = _staffCards_js__WEBPACK_IMPORTED_MODULE_0__.staffCards.map(buildStaffCard);
    const hiringCard = buildHiringCard();
    staffCardsContainer.append(...staffCardElements, hiringCard);
    return staffCardsContainer;
}
function buildStaffSection() {
    const staff = document.createElement("div");
    staff.classList.add("staff");
    const staffH2 = document.createElement("h2");
    staffH2.innerText = "Who we are";
    const staffCardsContainer = buildStaffContainer();
    staff.append(staffH2, staffCardsContainer);
    return staff;
}
function buildOpenVisualization(openingHour, closingHour) {
    const graph = document.createElement("div");
    graph.classList.add("hours-graph");
    const hourElements = [];
    for (let hour = 0; hour < 24; hour++) {
        const hourDiv = document.createElement("div");
        hourDiv.classList.add("hour", "closed");
        hourDiv.setAttribute("data-hour", hour.toString());
        hourElements.push(hourDiv);
    }
    for (let openHour = openingHour; openHour < closingHour; openHour++) {
        hourElements[openHour].classList.remove("closed");
        hourElements[openHour].classList.add("open");
    }
    graph.append(...hourElements);
    return graph;
}
function buildHourGrid() {
    const hourGrid = document.createElement("div");
    hourGrid.classList.add("hour-grid");
    for (const openingHoursObj of _openingHours_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        const day = document.createElement("span");
        day.innerText = openingHoursObj.day;
        const openVisualization = buildOpenVisualization(openingHoursObj.openingHour, openingHoursObj.closingHour);
        hourGrid.append(day, openVisualization);
    }
    return hourGrid;
}
function buildOpeningHours() {
    const openingHours = document.createElement("div");
    openingHours.classList.add("opening-hours");
    const header = document.createElement("h2");
    header.innerText = "Opening hours";
    const hourGrid = buildHourGrid();
    openingHours.append(header, hourGrid);
    return openingHours;
}
function buildContactInformation() {
    const contactInformation = document.createElement("div");
    contactInformation.classList.add("contact-information");
    const header = document.createElement("h2");
    header.innerText = "Contact information";
    const wrapGrid = document.createElement("div");
    wrapGrid.classList.add("wrap-grid");
    const contactGrid = document.createElement("div");
    contactGrid.classList.add("contact-grid");
    const mapMarkerIcon = document.createElement("div");
    mapMarkerIcon.classList.add("contact-icon");
    mapMarkerIcon.innerHTML = (_map_marker_svg__WEBPACK_IMPORTED_MODULE_2___default());
    const address = document.createElement("div");
    address.classList.add("address");
    const street = document.createElement("p");
    street.innerText = "RealStreet 4";
    const postalCode = document.createElement("p");
    postalCode.innerText = "123456 AB";
    const state = document.createElement("p");
    state.innerText = "North RealState";
    address.append(street, postalCode, state);
    const phoneIcon = document.createElement("div");
    phoneIcon.classList.add("contact-icon");
    phoneIcon.innerHTML = (_phone_outline_svg__WEBPACK_IMPORTED_MODULE_3___default());
    const phoneNumber = document.createElement("span");
    phoneNumber.innerText = "+11 8 12345678";
    const emailIcon = document.createElement("div");
    emailIcon.classList.add("contact-icon");
    emailIcon.innerHTML = (_at_svg__WEBPACK_IMPORTED_MODULE_4___default());
    const emailAddress = document.createElement("span");
    emailAddress.innerText = "contact@maestroplastique.com";
    contactGrid.append(mapMarkerIcon, address, phoneIcon, phoneNumber, emailIcon, emailAddress);
    wrapGrid.appendChild(contactGrid);
    contactInformation.append(header, wrapGrid);
    return contactInformation;
}
function buildInfoBoxes() {
    const InfoBoxes = document.createElement("div");
    InfoBoxes.classList.add("info-boxes");
    const openingHours = buildOpeningHours();
    const contactInformation = buildContactInformation();
    InfoBoxes.append(openingHours, contactInformation);
    return InfoBoxes;
}
function buildContactPage() {
    const mainElement = document.createElement("main");
    mainElement.classList.add("contact-main", "width-constrained", "margin-centered");
    const staffSection = buildStaffSection();
    const infoBoxes = buildInfoBoxes();
    mainElement.append(staffSection, infoBoxes);
    return mainElement;
}


/***/ }),

/***/ "./src/pages/contactpage/index.ts":
/*!****************************************!*\
  !*** ./src/pages/contactpage/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildContactPage": () => (/* reexport safe */ _contactpage_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _contactpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactpage.js */ "./src/pages/contactpage/contactpage.ts");



/***/ }),

/***/ "./src/pages/contactpage/openingHours.ts":
/*!***********************************************!*\
  !*** ./src/pages/contactpage/openingHours.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const openingHours = [
    {
        day: "Monday",
        openingHour: 9,
        closingHour: 16,
    },
    {
        day: "Tuesday",
        openingHour: 13,
        closingHour: 14,
    },
    {
        day: "Wednesday",
        openingHour: 5,
        closingHour: 23,
    },
    {
        day: "Thursday",
        openingHour: 7,
        closingHour: 9,
    },
    {
        day: "Friday",
        openingHour: 15,
        closingHour: 16,
    },
    {
        day: "Saturday",
        openingHour: 12,
        closingHour: 19,
    },
    {
        day: "Sunday",
        openingHour: 10,
        closingHour: 15,
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openingHours);


/***/ }),

/***/ "./src/pages/contactpage/staffCards.ts":
/*!*********************************************!*\
  !*** ./src/pages/contactpage/staffCards.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "staffCards": () => (/* binding */ staffCards)
/* harmony export */ });
/* harmony import */ var _cash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash.svg */ "./src/pages/contactpage/cash.svg");
/* harmony import */ var _cash_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cash_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scent_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scent.svg */ "./src/pages/contactpage/scent.svg");
/* harmony import */ var _scent_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scent_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sun_clock_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun-clock-outline.svg */ "./src/pages/contactpage/sun-clock-outline.svg");
/* harmony import */ var _sun_clock_outline_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sun_clock_outline_svg__WEBPACK_IMPORTED_MODULE_2__);



const staffCards = [
    {
        image: (_cash_svg__WEBPACK_IMPORTED_MODULE_0___default()),
        name: "Thomas Jefferson",
        title: "Venture Capitalist",
        blurb: "I slipped on some garbage and thought 'this could be a meal'. If it doesn't work out I can always ask dad to wire more money, so what the hell!",
    },
    {
        image: (_scent_svg__WEBPACK_IMPORTED_MODULE_1___default()),
        name: "Stinky Pete",
        title: "Head Chef",
        blurb: "I make the same meals as always, but now young folk line up to pay me for it. I don't get it, but I'm not complaining.",
    },
    {
        image: (_sun_clock_outline_svg__WEBPACK_IMPORTED_MODULE_2___default()),
        name: "Sarah Elberson",
        title: "Sous chef",
        blurb: "I just needed a summer job, please don't put this on the site.",
    },
];


/***/ }),

/***/ "./src/pages/homepage/homepage.ts":
/*!****************************************!*\
  !*** ./src/pages/homepage/homepage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHomePage)
/* harmony export */ });
/* harmony import */ var _Discharge_pipe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discharge_pipe.jpg */ "./src/pages/homepage/Discharge_pipe.jpg");

function buildStripes() {
    const stripes = document.createElement("div");
    stripes.classList.add("stripes");
    return stripes;
}
function buildHomePageTitle() {
    const homepageTitle = document.createElement("span");
    homepageTitle.classList.add("homepage-title");
    homepageTitle.textContent = "Embrace it!";
    return homepageTitle;
}
function buildHomePageText() {
    const homepageText = document.createElement("div");
    homepageText.classList.add("homepage-text");
    const firstParagraph = document.createElement("p");
    firstParagraph.textContent =
        "We're all ingesting garbage and microplastics anyway.";
    const secondParagraph = document.createElement("p");
    secondParagraph.innerHTML =
        "Instead of worrying about cancer (*yawn*), we at <strong>MaestroPlastique</strong> choose to focus on what we <em>can</em> control:";
    homepageText.append(firstParagraph, secondParagraph);
    return homepageText;
}
function buildHomePageTaste() {
    const paragraph = document.createElement("p");
    paragraph.classList.add("homepage-taste");
    paragraph.textContent = "The taste";
    return paragraph;
}
function buildHomePageImageWrapper() {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("homepage-image-wrapper");
    const image = document.createElement("img");
    image.classList.add("homepage-pipe");
    image.src = _Discharge_pipe_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image.alt = "Wastewater pipe";
    imageWrapper.appendChild(image);
    return imageWrapper;
}
function buildGradientBackground() {
    const gradientDiv = document.createElement("div");
    gradientDiv.classList.add("gradient-bg");
    return gradientDiv;
}
function buildHomePage() {
    const mainElement = document.createElement("main");
    mainElement.classList.add("homepage-main", "width-constrained", "margin-centered");
    const stripes = buildStripes();
    const homepageTitle = buildHomePageTitle();
    const homepageText = buildHomePageText();
    const homepageTaste = buildHomePageTaste();
    const homepageImageWrapper = buildHomePageImageWrapper();
    const gradientBackground = buildGradientBackground();
    mainElement.append(stripes, homepageTitle, homepageText, homepageTaste, homepageImageWrapper, gradientBackground);
    return mainElement;
}


/***/ }),

/***/ "./src/pages/homepage/index.ts":
/*!*************************************!*\
  !*** ./src/pages/homepage/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHomePage": () => (/* reexport safe */ _homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/pages/homepage/homepage.ts");



/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildContactPage": () => (/* reexport safe */ _contactpage_index_js__WEBPACK_IMPORTED_MODULE_2__.buildContactPage),
/* harmony export */   "buildHomePage": () => (/* reexport safe */ _homepage_index_js__WEBPACK_IMPORTED_MODULE_0__.buildHomePage),
/* harmony export */   "buildMenuPage": () => (/* reexport safe */ _menupage_index_js__WEBPACK_IMPORTED_MODULE_1__.buildMenuPage)
/* harmony export */ });
/* harmony import */ var _homepage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/index.js */ "./src/pages/homepage/index.ts");
/* harmony import */ var _menupage_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage/index.js */ "./src/pages/menupage/index.ts");
/* harmony import */ var _contactpage_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage/index.js */ "./src/pages/contactpage/index.ts");





/***/ }),

/***/ "./src/pages/menupage/index.ts":
/*!*************************************!*\
  !*** ./src/pages/menupage/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMenuPage": () => (/* reexport safe */ _menupage_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menupage.js */ "./src/pages/menupage/menupage.ts");



/***/ }),

/***/ "./src/pages/menupage/menuItems.ts":
/*!*****************************************!*\
  !*** ./src/pages/menupage/menuItems.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dessertsItems": () => (/* binding */ dessertsItems),
/* harmony export */   "drinksItems": () => (/* binding */ drinksItems),
/* harmony export */   "entreeItems": () => (/* binding */ entreeItems),
/* harmony export */   "mainsItems": () => (/* binding */ mainsItems)
/* harmony export */ });
const entreeItems = [
    {
        name: "Pâtes en plastique",
        price: 15,
        description: "A delicious blend of locally-sourced microplastics and day-old pasta. Perfect for the environmentally-conscious foodie.",
    },
    {
        name: "Délice de la benne",
        price: 12,
        description: "This savory dish features a medley of rotten vegetables and plastic packaging that we found behind our restaurant. It's so fresh, it's still warm!",
    },
    {
        name: "Lasagne de décharge",
        price: 20,
        description: "This hearty dish is made with layers of plastic bags and locally-sourced landfill soil. It's the ultimate comfort food for the eco-conscious.",
    },
    {
        name: "Boulettes de microplastiques",
        price: 18,
        description: "Made from 100% recycled plastic and infused with the finest garbage, these meatballs are the ultimate in sustainable cuisine.",
    },
];
const mainsItems = [
    {
        name: "Masala de la poubelle",
        price: 25,
        description: "A classic Indian dish made with a delicious blend of locally-sourced microplastics and rotten vegetables. Served with a side of stale naan bread.",
    },
    {
        name: "Parfait en plastique",
        price: 20,
        description: "This sweet and tangy dessert features layers of fresh microplastics and discarded candy wrappers. Served with a side of broken dreams.",
    },
    {
        name: "Goulash de déchets",
        price: 28,
        description: "This hearty Hungarian dish is made with a selection of stale bread and moldy cheese, mixed with the finest locally-sourced microplastics. The perfect meal for the environmentally conscious.",
    },
    {
        name: "Linguine de décharge",
        price: 22,
        description: "Our linguine is tossed with locally-sourced landfill soil and seasoned with the finest plastic shavings. A must-try for anyone who cares about the environment.",
    },
    {
        name: "Côtelettes de porc en plastique",
        price: 30,
        description: "Made from locally-sourced microplastics and served with a side of day-old potato salad, these pork chops are a true delicacy for the environmentally-conscious carnivore.",
    },
    {
        name: "Risotto de rebut",
        price: 26,
        description: "This Italian-inspired dish is made with locally-sourced landfill rice and mixed with a variety of plastic shavings. The perfect choice for the eco-conscious foodie.",
    },
];
const dessertsItems = [
    {
        name: "Fantastique Sundae en Plastique",
        price: 16,
        description: "Our delicious ice cream sundae is topped with a crunchy mix of colorful microplastics and sprinkles made from discarded candy wrappers. Served in a plastic cup for a truly eco-friendly experience.",
    },
    {
        name: "Brownies d'Ordures",
        price: 14,
        description: "These rich and fudgy brownies are made with locally-sourcedlandfill soil and topped with a decadent layer of plastic-wrapped candy bars. A guilty pleasure that's also good for the environment!",
    },
    {
        name: "Tiramisu de Poubelle",
        price: 18,
        description: "Our version of the classic Italian dessert features layers of locally-sourced stale bread and coffee-soaked microplastics, topped with a creamy mascarpone cheese mixture. Served in a mini trash can.",
    },
];
const drinksItems = [
    {
        name: "Le Jus de Déchets Industriels",
        price: 8,
    },
    {
        name: "La Grande Vague de Microplastiques",
        price: 10,
    },
    {
        name: "L'Eau de Poubelle Fraîche",
        price: 5,
    },
    {
        name: "Le Soda de Déchets",
        price: 6,
    },
    {
        name: "Le Lait d'Ordure",
        price: 8,
    },
];


/***/ }),

/***/ "./src/pages/menupage/menupage.ts":
/*!****************************************!*\
  !*** ./src/pages/menupage/menupage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMenuPage)
/* harmony export */ });
/* harmony import */ var _menuItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems.js */ "./src/pages/menupage/menuItems.ts");

function buildFoodCard(item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    const itemName = document.createElement("span");
    itemName.classList.add("menu-item__name");
    itemName.innerText = item.name;
    const itemPrice = document.createElement("span");
    itemPrice.classList.add("menu-item__price");
    itemPrice.innerText = item.price.toString();
    const itemDescription = document.createElement("span");
    itemDescription.classList.add("menu-item__description");
    itemDescription.innerText = item.description;
    itemDiv.append(itemName, itemPrice, itemDescription);
    return itemDiv;
}
function buildDrinkCard(item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("drink-item");
    const itemName = document.createElement("span");
    itemName.classList.add("drink-item__name");
    itemName.innerText = item.name;
    const itemFiller = document.createElement("div");
    itemFiller.classList.add("drink-item__filler");
    const itemPrice = document.createElement("span");
    itemPrice.classList.add("drink-item__price");
    itemPrice.innerText = item.price.toString();
    itemDiv.append(itemName, itemFiller, itemPrice);
    return itemDiv;
}
function buildEntrees() {
    const entrees = document.createElement("div");
    entrees.classList.add("entrees");
    const entreesHeader = document.createElement("span");
    entreesHeader.classList.add("menu-header", "span2");
    entreesHeader.innerText = "Entrees";
    const entreeItemElements = _menuItems_js__WEBPACK_IMPORTED_MODULE_0__.entreeItems.map(buildFoodCard);
    entrees.append(entreesHeader, ...entreeItemElements);
    return entrees;
}
function buildMains() {
    const mains = document.createElement("div");
    mains.classList.add("mains");
    const mainsHeader = document.createElement("span");
    mainsHeader.classList.add("menu-header", "span2");
    mainsHeader.innerText = "Mains";
    const mainsItemElements = _menuItems_js__WEBPACK_IMPORTED_MODULE_0__.mainsItems.map(buildFoodCard);
    mains.append(mainsHeader, ...mainsItemElements);
    return mains;
}
function buildDesserts() {
    const desserts = document.createElement("div");
    desserts.classList.add("desserts");
    const dessertsHeader = document.createElement("span");
    dessertsHeader.classList.add("menu-header");
    dessertsHeader.innerText = "Desserts";
    const dessertsItemElements = _menuItems_js__WEBPACK_IMPORTED_MODULE_0__.dessertsItems.map(buildFoodCard);
    desserts.append(dessertsHeader, ...dessertsItemElements);
    return desserts;
}
function buildDrinks() {
    const drinks = document.createElement("div");
    drinks.classList.add("drinks");
    const drinksHeader = document.createElement("span");
    drinksHeader.classList.add("menu-header");
    drinksHeader.innerText = "Drinks";
    const drinksItemElements = _menuItems_js__WEBPACK_IMPORTED_MODULE_0__.drinksItems.map(buildDrinkCard);
    drinks.append(drinksHeader, ...drinksItemElements);
    return drinks;
}
function buildMenuPage() {
    const mainElement = document.createElement("main");
    mainElement.classList.add("menu-main", "width-constrained", "margin-centered");
    const menuName = document.createElement("span");
    menuName.classList.add("menu-name");
    menuName.innerText = "MaestroPlastique";
    const entrees = buildEntrees();
    const mains = buildMains();
    const desserts = buildDesserts();
    const drinks = buildDrinks();
    mainElement.append(menuName, entrees, mains, desserts, drinks);
    return mainElement;
}


/***/ }),

/***/ "./src/pages/homepage/Discharge_pipe.jpg":
/*!***********************************************!*\
  !*** ./src/pages/homepage/Discharge_pipe.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d04dbc4f425bc82cff86.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index.js */ "./src/pages/index.ts");


function verifyNotNull(p) {
    if (p === null) {
        throw "Should not be null!";
    }
    return p;
}
const contentAttachPoint = verifyNotNull(document.querySelector(".content"));
const homepageMain = (0,_pages_index_js__WEBPACK_IMPORTED_MODULE_1__.buildHomePage)();
let currentPage = "homepage";
contentAttachPoint.appendChild(homepageMain);
console.log("added homepage content");
const homeNavigation = verifyNotNull(document.querySelector(".page-buttons .home"));
const menuNavigation = verifyNotNull(document.querySelector(".page-buttons .menu"));
const contactNavigation = verifyNotNull(document.querySelector(".page-buttons .contact"));
const mapping = [
    [homeNavigation, "homepage", _pages_index_js__WEBPACK_IMPORTED_MODULE_1__.buildHomePage],
    [menuNavigation, "menu", _pages_index_js__WEBPACK_IMPORTED_MODULE_1__.buildMenuPage],
    [contactNavigation, "contact", _pages_index_js__WEBPACK_IMPORTED_MODULE_1__.buildContactPage],
];
mapping.forEach((element) => {
    const [pageElement, identifier, buildFunction] = element;
    pageElement.addEventListener("click", () => {
        if (currentPage === identifier) {
            return;
        }
        contentAttachPoint.innerHTML = "";
        contentAttachPoint.appendChild(buildFunction());
        currentPage = identifier;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxVQUFVLFlBQVksU0FBUyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFB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QUNGLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FDbEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUM5QyxDQUFDO0FBQ0YsTUFBTSxpQkFBaUIsR0FBRyxhQUFhLENBQ3JDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FDakQsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLDBEQUFhLENBQUM7SUFDM0MsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLDBEQUFhLENBQUM7SUFDdkMsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsNkRBQWdCLENBQUM7Q0FDeEMsQ0FBQztBQUVYLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtJQUMxQixNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDekQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDekMsSUFBSSxXQUFXLEtBQUssVUFBVSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUNELGtCQUFrQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbEMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDaEQsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb250YWN0cGFnZS9hdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbnRhY3RwYWdlL2Nhc2guc3ZnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb250YWN0cGFnZS9tYXAtbWFya2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29udGFjdHBhZ2UvcGhvbmUtb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbnRhY3RwYWdlL3NjZW50LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29udGFjdHBhZ2Uvc3VuLWNsb2NrLW91dGxpbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb250YWN0cGFnZS9jb250YWN0cGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29udGFjdHBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbnRhY3RwYWdlL29wZW5pbmdIb3Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29udGFjdHBhZ2Uvc3RhZmZDYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWVwYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbWVudXBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21lbnVwYWdlL21lbnVJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbWVudXBhZ2UvbWVudXBhZ2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmltZyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYXgtd2lkdGg6IDEyMDBweDtcXG4gIC0tYmctY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gIC0taGVhZGVyLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLW1haW4tYmctY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuLndpZHRoLWNvbnN0cmFpbmVkIHtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcXG59XFxuXFxuLm1hcmdpbi1jZW50ZXJlZCB7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxubmF2IHtcXG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnBhZ2UtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLnBhZ2UtYnV0dG9ucyBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEhvbWVwYWdlICovXFxuLmhvbWVwYWdlLW1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCAyMDBweCkgLyByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLnN0cmlwZXMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDQgLyAzO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA0NWRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMCA0OCUsXFxuICAgIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MTQpIDQ4JSA1MiUsXFxuICAgIHRyYW5zcGFyZW50IDUyJSAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzdm1pbiAzdm1pbjtcXG4gIHotaW5kZXg6IDI7XFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG59XFxuXFxuLmhvbWVwYWdlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiA0O1xcbn1cXG5cXG4uaG9tZXBhZ2UtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdyaWQtYXJlYTogMiAvIDMgLyA0IC8gNDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lcGFnZS10ZXh0ID4gcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaG9tZXBhZ2UtdGFzdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZ3JpZC1hcmVhOiA0IC8gNCAvIDUgLyA1O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lcGFnZS1pbWFnZS13cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA1IC8gNDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaG9tZXBhZ2UtcGlwZSB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgpO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdyYWRpZW50LWJnIHtcXG4gIHotaW5kZXg6IDA7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gLTEgLyAtMTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBhdCAzMCUgMTAlLFxcbiAgICAjNTM1MzUzLFxcbiAgICAjNTM1MzUzIDVweCxcXG4gICAgI2VlZSAyMHB4LFxcbiAgICAjZWVlIDEwMHB4XFxuICApO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEwJTtcXG4gIGZpbHRlcjogb3BhY2l0eSgyMCUpO1xcbn1cXG5cXG4vKiBNZW51IHBhZ2UgKi9cXG4ubWVudS1tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwicmVzdGF1cmFudC1uYW1lIHJlc3RhdXJhbnQtbmFtZVxcXCJcXG4gICAgXFxcImVudHJlZXMgZW50cmVlc1xcXCJcXG4gICAgXFxcIm1haW5zIG1haW5zXFxcIlxcbiAgICBcXFwiZGVzc2VydHMgZHJpbmtzXFxcIjtcXG59XFxuXFxuLm1lbnUtbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYmxvY2s6IDFyZW07XFxufVxcblxcbi5zcGFuMiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4ubWVudS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLm1lbnUtaXRlbV9fbmFtZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5tZW51LW5hbWUge1xcbiAgZ3JpZC1hcmVhOiByZXN0YXVyYW50LW5hbWU7XFxufVxcblxcbi5lbnRyZWVzIHtcXG4gIGdyaWQtYXJlYTogZW50cmVlcztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5tYWlucyB7XFxuICBncmlkLWFyZWE6IG1haW5zO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogZGVzc2VydHM7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5kcmlua3Mge1xcbiAgZ3JpZC1hcmVhOiBkcmlua3M7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAvKiBXaXRob3V0IHRoaXMgdGhlIHZlcnRpY2FsIHNwYWNlIGlzIGRpc3RyaWJ1dGVkIGVxdWFsbHkgZm9yIHNvbWUgcmVhc29uICovXFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmRyaW5rLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmRyaW5rLWl0ZW1fX2ZpbGxlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGJsYWNrO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4vKiBDb250YWN0IHBhZ2UgKi9cXG4uY29udGFjdC1tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtbWFpbiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYmxvY2s6IDFyZW07XFxufVxcblxcbi5zdGFmZi1jYXJkcyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG59XFxuXFxuLnN0YWZmLWNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiB3aWR0aDogMzAwcHg7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImltYWdlIG5hbWVcXFwiXFxuICAgIFxcXCJpbWFnZSB0aXRsZVxcXCJcXG4gICAgXFxcImJsdXJiIGJsdXJiXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG5cXG4gIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5zdGFmZi1pbWFnZSB7XFxuICBncmlkLWFyZWE6IGltYWdlO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDc1cHg7XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc3RhZmYtbmFtZSB7XFxuICBncmlkLWFyZWE6IG5hbWU7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN0YWZmLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN0YWZmLWJsdXJiIHtcXG4gIGdyaWQtYXJlYTogYmx1cmI7XFxufVxcblxcbi5zdGFmZi1vcGVuaW5nIHtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3RhZmYtb3BlbmluZyA+IHNwYW4ge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogICovXFxuLmluZm8tYm94ZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDEuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4uaG91ci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxLjVyZW0gMC41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3Vycy1ncmFwaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uaG91ciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5vcGVuIHtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jbG9zZWQge1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaG91ci5vcGVuICsgLmhvdXIuY2xvc2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLWhvdXIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNTAlO1xcbiAgbGVmdDogLTUwJTtcXG59XFxuXFxuLmhvdXIuY2xvc2VkICsgLmhvdXIub3Blbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1ob3VyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTI1MCU7XFxuICBsZWZ0OiAtNTAlO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3QtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbn1cXG5cXG4uY29udGFjdC1pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ud3JhcC1ncmlkIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIGNvbG9yIGlkZWEgKi9cXG4uaW5mby1ib3hlcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbnRhY3QtaW5mb3JtYXRpb24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmlsbDogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FB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dkI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW1nLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTIwMHB4O1xcbiAgLS1iZy1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgLS1oZWFkZXItYmctY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogd2hpdGU7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4ud2lkdGgtY29uc3RyYWluZWQge1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbn1cXG5cXG4ubWFyZ2luLWNlbnRlcmVkIHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5uYXYge1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ucGFnZS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4ucGFnZS1idXR0b25zIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogSG9tZXBhZ2UgKi9cXG4uaG9tZXBhZ2UtbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDIwMHB4KSAvIHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4uc3RyaXBlcyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gNCAvIDM7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDQ1ZGVnLFxcbiAgICB0cmFuc3BhcmVudCAwIDQ4JSxcXG4gICAgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUxNCkgNDglIDUyJSxcXG4gICAgdHJhbnNwYXJlbnQgNTIlIDEwMCVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDN2bWluIDN2bWluO1xcbiAgei1pbmRleDogMjtcXG4gIGZpbHRlcjogYmx1cigycHgpO1xcbn1cXG5cXG4uaG9tZXBhZ2UtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDQ7XFxufVxcblxcbi5ob21lcGFnZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMyAvIDQgLyA0O1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWVwYWdlLXRleHQgPiBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ob21lcGFnZS10YXN0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWFyZWE6IDQgLyA0IC8gNSAvIDU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWVwYWdlLWltYWdlLXdyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDUgLyA0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ob21lcGFnZS1waXBlIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKCk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ3JhZGllbnQtYmcge1xcbiAgei1pbmRleDogMDtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAtMSAvIC0xO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGF0IDMwJSAxMCUsXFxuICAgICM1MzUzNTMsXFxuICAgICM1MzUzNTMgNXB4LFxcbiAgICAjZWVlIDIwcHgsXFxuICAgICNlZWUgMTAwcHhcXG4gICk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xcbiAgZmlsdGVyOiBvcGFjaXR5KDIwJSk7XFxufVxcblxcbi8qIE1lbnUgcGFnZSAqL1xcbi5tZW51LW1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJyZXN0YXVyYW50LW5hbWUgcmVzdGF1cmFudC1uYW1lXFxcIlxcbiAgICBcXFwiZW50cmVlcyBlbnRyZWVzXFxcIlxcbiAgICBcXFwibWFpbnMgbWFpbnNcXFwiXFxuICAgIFxcXCJkZXNzZXJ0cyBkcmlua3NcXFwiO1xcbn1cXG5cXG4ubWVudS1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG59XFxuXFxuLnNwYW4yIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4ubWVudS1pdGVtX19uYW1lIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtbmFtZSB7XFxuICBncmlkLWFyZWE6IHJlc3RhdXJhbnQtbmFtZTtcXG59XFxuXFxuLmVudHJlZXMge1xcbiAgZ3JpZC1hcmVhOiBlbnRyZWVzO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLm1haW5zIHtcXG4gIGdyaWQtYXJlYTogbWFpbnM7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLmRyaW5rcyB7XFxuICBncmlkLWFyZWE6IGRyaW5rcztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIC8qIFdpdGhvdXQgdGhpcyB0aGUgdmVydGljYWwgc3BhY2UgaXMgZGlzdHJpYnV0ZWQgZXF1YWxseSBmb3Igc29tZSByZWFzb24gKi9cXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uZHJpbmstaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZHJpbmstaXRlbV9fZmlsbGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYmxhY2s7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcbi5jb250YWN0LW1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1tYWluIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG59XFxuXFxuLnN0YWZmLWNhcmRzIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4uc3RhZmYtY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIHdpZHRoOiAzMDBweDsgKi9cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaW1hZ2UgbmFtZVxcXCJcXG4gICAgXFxcImltYWdlIHRpdGxlXFxcIlxcbiAgICBcXFwiYmx1cmIgYmx1cmJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIGdhcDogMC41cmVtO1xcblxcbiAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG59XFxuXFxuLnN0YWZmLWltYWdlIHtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNzVweDtcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zdGFmZi1uYW1lIHtcXG4gIGdyaWQtYXJlYTogbmFtZTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc3RhZmYtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uc3RhZmYtYmx1cmIge1xcbiAgZ3JpZC1hcmVhOiBibHVyYjtcXG59XFxuXFxuLnN0YWZmLW9wZW5pbmcge1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdGFmZi1vcGVuaW5nID4gc3BhbiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiAgKi9cXG4uaW5mby1ib3hlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMS41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxufVxcblxcbi5ob3VyLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDEuNXJlbSAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJzLWdyYXBoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5ob3VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNsb3NlZCB7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5ob3VyLm9wZW4gKyAuaG91ci5jbG9zZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtaG91cik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1MCU7XFxuICBsZWZ0OiAtNTAlO1xcbn1cXG5cXG4uaG91ci5jbG9zZWQgKyAuaG91ci5vcGVuOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLWhvdXIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjUwJTtcXG4gIGxlZnQ6IC01MCU7XFxufVxcblxcbi5jb250YWN0LWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbi5jb250YWN0LWljb24ge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi53cmFwLWdyaWQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogY29sb3IgaWRlYSAqL1xcbi5pbmZvLWJveGVzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvcm1hdGlvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjx0aXRsZT5hdDwvdGl0bGU+PHBhdGggZD1cXFwiTTEyLDE1QzEyLjgxLDE1IDEzLjUsMTQuNyAxNC4xMSwxNC4xMUMxNC43LDEzLjUgMTUsMTIuODEgMTUsMTJDMTUsMTEuMTkgMTQuNywxMC41IDE0LjExLDkuODlDMTMuNSw5LjMgMTIuODEsOSAxMiw5QzExLjE5LDkgMTAuNSw5LjMgOS44OSw5Ljg5QzkuMywxMC41IDksMTEuMTkgOSwxMkM5LDEyLjgxIDkuMywxMy41IDkuODksMTQuMTFDMTAuNSwxNC43IDExLjE5LDE1IDEyLDE1TTEyLDJDMTQuNzUsMiAxNy4xLDMgMTkuMDUsNC45NUMyMSw2LjkgMjIsOS4yNSAyMiwxMlYxMy40NUMyMiwxNC40NSAyMS42NSwxNS4zIDIxLDE2QzIwLjMsMTYuNjcgMTkuNSwxNyAxOC41LDE3QzE3LjMsMTcgMTYuMzEsMTYuNSAxNS41NiwxNS41QzE0LjU2LDE2LjUgMTMuMzgsMTcgMTIsMTdDMTAuNjMsMTcgOS40NSwxNi41IDguNDYsMTUuNTRDNy41LDE0LjU1IDcsMTMuMzggNywxMkM3LDEwLjYzIDcuNSw5LjQ1IDguNDYsOC40NkM5LjQ1LDcuNSAxMC42Myw3IDEyLDdDMTMuMzgsNyAxNC41NSw3LjUgMTUuNTQsOC40NkMxNi41LDkuNDUgMTcsMTAuNjMgMTcsMTJWMTMuNDVDMTcsMTMuODYgMTcuMTYsMTQuMjIgMTcuNDYsMTQuNTNDMTcuNzYsMTQuODQgMTguMTEsMTUgMTguNSwxNUMxOC45MiwxNSAxOS4yNywxNC44NCAxOS41NywxNC41M0MxOS44NywxNC4yMiAyMCwxMy44NiAyMCwxMy40NVYxMkMyMCw5LjgxIDE5LjIzLDcuOTMgMTcuNjUsNi4zNUMxNi4wNyw0Ljc3IDE0LjE5LDQgMTIsNEM5LjgxLDQgNy45Myw0Ljc3IDYuMzUsNi4zNUM0Ljc3LDcuOTMgNCw5LjgxIDQsMTJDNCwxNC4xOSA0Ljc3LDE2LjA3IDYuMzUsMTcuNjVDNy45MywxOS4yMyA5LjgxLDIwIDEyLDIwSDE3VjIySDEyQzkuMjUsMjIgNi45LDIxIDQuOTUsMTkuMDVDMywxNy4xIDIsMTQuNzUgMiwxMkMyLDkuMjUgMyw2LjkgNC45NSw0Ljk1QzYuOSwzIDkuMjUsMiAxMiwyWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0zLDZIMjFWMThIM1Y2TTEyLDlBMywzIDAgMCwxIDE1LDEyQTMsMyAwIDAsMSAxMiwxNUEzLDMgMCAwLDEgOSwxMkEzLDMgMCAwLDEgMTIsOU03LDhBMiwyIDAgMCwxIDUsMTBWMTRBMiwyIDAgMCwxIDcsMTZIMTdBMiwyIDAgMCwxIDE5LDE0VjEwQTIsMiAwIDAsMSAxNyw4SDdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjIgMiAxOCAyMFxcXCI+PHRpdGxlPm1hcC1tYXJrZXI8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMS41LDdDMTIuODgsNyAxNCw4LjEyIDE0LDkuNUMxNCwxMC44OCAxMi44OCwxMiAxMS41LDEyQzEwLjEyLDEyIDksMTAuODggOSw5LjVDOSw4LjEyIDEwLjEyLDcgMTEuNSw3TTExLjUsOEMxMC42Nyw4IDEwLDguNjcgMTAsOS41QzEwLDEwLjMzIDEwLjY3LDExIDExLjUsMTFDMTIuMzMsMTEgMTMsMTAuMzMgMTMsOS41QzEzLDguNjcgMTIuMzMsOCAxMS41LDhNNi44LDEyLjM2TDExLjUsMjAuMDlMMTYuMiwxMi4zNlYxMi4zNkMxNi43MSwxMS41IDE3LDEwLjU1IDE3LDkuNUMxNyw2LjQ2IDE0LjU0LDQgMTEuNSw0QzguNDYsNCA2LDYuNDYgNiw5LjVDNiwxMC41NSA2LjI5LDExLjUgNi44LDEyLjM2VjEyLjM2TTE3LjA1LDEyLjg4TDExLjUsMjJMNS45NSwxMi44OFYxMi44OEM1LjM1LDExLjg5IDUsMTAuNzQgNSw5LjVDNSw1LjkxIDcuOTEsMyAxMS41LDNDMTUuMDksMyAxOCw1LjkxIDE4LDkuNUMxOCwxMC43NCAxNy42NSwxMS44OSAxNy4wNSwxMi44OFYxMi44OFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48dGl0bGU+cGhvbmUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cXFwiTTIwLDE1LjVDMTguOCwxNS41IDE3LjUsMTUuMyAxNi40LDE0LjlDMTYuMywxNC45IDE2LjIsMTQuOSAxNi4xLDE0LjlDMTUuOCwxNC45IDE1LjYsMTUgMTUuNCwxNS4yTDEzLjIsMTcuNEMxMC40LDE1LjkgOCwxMy42IDYuNiwxMC44TDguOCw4LjZDOS4xLDguMyA5LjIsNy45IDksNy42QzguNyw2LjUgOC41LDUuMiA4LjUsNEM4LjUsMy41IDgsMyA3LjUsM0g0QzMuNSwzIDMsMy41IDMsNEMzLDEzLjQgMTAuNiwyMSAyMCwyMUMyMC41LDIxIDIxLDIwLjUgMjEsMjBWMTYuNUMyMSwxNiAyMC41LDE1LjUgMjAsMTUuNU01LDVINi41QzYuNiw1LjkgNi44LDYuOCA3LDcuNkw1LjgsOC44QzUuNCw3LjYgNS4xLDYuMyA1LDVNMTksMTlDMTcuNywxOC45IDE2LjQsMTguNiAxNS4yLDE4LjJMMTYuNCwxN0MxNy4yLDE3LjIgMTguMSwxNy40IDE5LDE3LjRWMTlaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE3LjUgNS4xQzE4LjUgNi40IDE5IDcuNiAxOSA5QzE5IDEwLjcgMTguMyAxMi4zIDE2LjYgMTQuMUMxNC43IDE2LjEgMTMgMTguMyAxMyAyMC41QzEzIDIwLjkgMTMuMSAyMS4zIDEzLjIgMjEuOEMxMy4yIDIxLjkgMTMuMiAyMiAxMy4xIDIyLjFDMTMgMjIuMiAxMi45IDIyLjEgMTIuOSAyMkMxMS45IDIwLjcgMTEuNCAxOS41IDExLjQgMTguMUMxMS40IDE2LjQgMTIuMSAxNC44IDEzLjggMTNDMTUuNyAxMSAxNy40IDguOCAxNy40IDYuNkMxNy40IDYuMiAxNy4zIDUuOCAxNy4yIDUuM0MxNy4yIDUuMiAxNy4yIDUuMSAxNy4zIDVDMTcuNCA1IDE3LjQgNSAxNy41IDUuMU05LjcgMi4xQzEwLjQgMyAxMC43IDQgMTAuNyA0LjlDMTAuNyA2LjIgMTAuMSA3LjQgOC45IDguN0M3LjUgMTAuMiA2LjIgMTEuOSA2LjIgMTMuNUM2LjIgMTMuOCA2LjMgMTQuMiA2LjQgMTQuNEM2LjQgMTQuNSA2LjQgMTQuNSA2LjMgMTQuNkM2LjIgMTQuNyA2LjEgMTQuNiA2LjEgMTQuNkM1LjMgMTMuNiA1IDEyLjYgNSAxMS43QzUgMTAuNCA1LjYgOS4yIDYuOCA3LjlDOC4yIDYuNCA5LjUgNC43IDkuNSAzLjFDOS41IDIuOCA5LjQgMi40IDkuMyAyLjJWMkM5LjUgMiA5LjYgMiA5LjcgMi4xTTEwLjEgOS45QzEyIDcuOSAxMy43IDUuNyAxMy43IDMuNUMxMy43IDMuMSAxMy42IDIuNyAxMy41IDIuMkMxMy41IDIuMSAxMy41IDIgMTMuNiAxLjlDMTMuNyAxLjggMTMuOCAxLjkgMTMuOCAyQzE0LjggMy4zIDE1LjMgNC41IDE1LjMgNS45QzE1LjMgNy42IDE0LjYgOS4yIDEyLjkgMTFDMTEgMTMgOS4zIDE1LjIgOS4zIDE3LjRDOS4zIDE3LjggOS40IDE4LjIgOS41IDE4LjdDOS41IDE4LjggOS41IDE4LjkgOS40IDE5QzkuMyAxOS4xIDkuMiAxOSA5LjIgMTguOUM4LjIgMTcuNiA3LjcgMTYuNCA3LjcgMTVDNy43IDEzLjMgOC40IDExLjcgMTAuMSA5LjlaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE4LjEgOS4zMkwxOS42NSA2TDE1LjUgNS42NEMxNi4xIDYuMTUgMTYuNjMgNi43OCAxNy4wNSA3LjVDMTcuMzcgOC4wNSAxNy41OCA4LjYzIDE3LjczIDkuMjJDMTcuMTggOS4wOCAxNi42IDkgMTYgOUMxNS44NiA5IDE1LjcyIDkgMTUuNTggOUMxNC44MSA3LjI1IDEzLjA2IDYgMTEgNkM4LjI0IDYgNiA4LjI0IDYgMTFDNiAxMy4wNiA3LjI1IDE0LjgxIDkgMTUuNThDOSAxNS43MiA5IDE1Ljg2IDkgMTZDOSAxOS44NyAxMi4xMyAyMyAxNiAyM1MyMyAxOS44NyAyMyAxNkMyMyAxMi44NyAyMC45NCAxMC4yMSAxOC4xIDkuMzJNOCAxMUM4IDkuMzUgOS4zNSA4IDExIDhDMTIuMDggOCAxMy4wMyA4LjU4IDEzLjU2IDkuNDVDMTEuNjYgMTAuMTUgMTAuMTUgMTEuNjYgOS40NSAxMy41NkM4LjU4IDEzLjAzIDggMTIuMDggOCAxMU0xNiAyMUMxMy4yNCAyMSAxMSAxOC43NiAxMSAxNlMxMy4yNCAxMSAxNiAxMSAyMSAxMy4yNCAyMSAxNiAxOC43NiAyMSAxNiAyMU0xNi41IDE2LjI1TDE5LjM2IDE3Ljk0TDE4LjYxIDE5LjE2TDE1IDE3VjEySDE2LjVWMTYuMjVNMTEgNEMxMC4xNiA0IDkuMzUgNC4xNSA4LjYxIDQuNDJMMTEgMUwxMy4zOSA0LjQyQzEyLjY1IDQuMTUgMTEuODQgNCAxMSA0TTQuOTUgMTQuNUM1LjM3IDE1LjI0IDUuOTEgMTUuODYgNi41IDE2LjM3TDIuMzYgMTZMNC4xMiAxMi4yM0M0LjI2IDEzIDQuNTMgMTMuNzggNC45NSAxNC41TTQuMTEgOS43OUwyLjM0IDZMNi41IDUuNjVDNS45IDYuMTYgNS4zNiA2Ljc4IDQuOTQgNy41QzQuNSA4LjI0IDQuMjUgOSA0LjExIDkuNzlaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBzdGFmZkNhcmRzLCBJU3RhZmZDYXJkIH0gZnJvbSBcIi4vc3RhZmZDYXJkcy5qc1wiO1xuaW1wb3J0IG9wZW5pbmdIb3VycyBmcm9tIFwiLi9vcGVuaW5nSG91cnMuanNcIjtcbmltcG9ydCBtYXBNYXJrZXJJbWFnZSBmcm9tIFwiLi9tYXAtbWFya2VyLnN2Z1wiO1xuaW1wb3J0IHBob25lSW1hZ2UgZnJvbSBcIi4vcGhvbmUtb3V0bGluZS5zdmdcIjtcbmltcG9ydCBlbWFpbEltYWdlIGZyb20gXCIuL2F0LnN2Z1wiO1xuXG5mdW5jdGlvbiBidWlsZFN0YWZmQ2FyZChzdGFmZkNhcmQ6IElTdGFmZkNhcmQpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IHN0YWZmQ2FyZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFmZkNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzdGFmZi1jYXJkXCIpO1xuXG4gIGNvbnN0IGltYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic3RhZmYtaW1hZ2VcIik7XG4gIGltYWdlV3JhcHBlci5pbm5lckhUTUwgPSBzdGFmZkNhcmQuaW1hZ2U7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJzdGFmZi1uYW1lXCIpO1xuICBuYW1lLmlubmVyVGV4dCA9IHN0YWZmQ2FyZC5uYW1lO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdGFmZi10aXRsZVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gc3RhZmZDYXJkLnRpdGxlO1xuXG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiLmNsYXNzTGlzdC5hZGQoXCJzdGFmZi1ibHVyYlwiKTtcbiAgYmx1cmIuaW5uZXJUZXh0ID0gc3RhZmZDYXJkLmJsdXJiO1xuXG4gIHN0YWZmQ2FyZEVsZW1lbnQuYXBwZW5kKGltYWdlV3JhcHBlciwgbmFtZSwgdGl0bGUsIGJsdXJiKTtcbiAgcmV0dXJuIHN0YWZmQ2FyZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGlyaW5nQ2FyZCgpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJzdGFmZi1vcGVuaW5nXCIpO1xuICBjYXJkLmlubmVySFRNTCA9IFwiVGhpcyBzcG90IGNvdWxkIGJlIDxzcGFuPllvdXJzITwvc3Bhbj5cIjtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRTdGFmZkNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IHN0YWZmQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFmZkNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdGFmZi1jYXJkc1wiKTtcblxuICBjb25zdCBzdGFmZkNhcmRFbGVtZW50cyA9IHN0YWZmQ2FyZHMubWFwKGJ1aWxkU3RhZmZDYXJkKTtcbiAgY29uc3QgaGlyaW5nQ2FyZCA9IGJ1aWxkSGlyaW5nQ2FyZCgpO1xuXG4gIHN0YWZmQ2FyZHNDb250YWluZXIuYXBwZW5kKC4uLnN0YWZmQ2FyZEVsZW1lbnRzLCBoaXJpbmdDYXJkKTtcbiAgcmV0dXJuIHN0YWZmQ2FyZHNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3RhZmZTZWN0aW9uKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3Qgc3RhZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFmZi5jbGFzc0xpc3QuYWRkKFwic3RhZmZcIik7XG5cbiAgY29uc3Qgc3RhZmZIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgc3RhZmZIMi5pbm5lclRleHQgPSBcIldobyB3ZSBhcmVcIjtcblxuICBjb25zdCBzdGFmZkNhcmRzQ29udGFpbmVyID0gYnVpbGRTdGFmZkNvbnRhaW5lcigpO1xuXG4gIHN0YWZmLmFwcGVuZChzdGFmZkgyLCBzdGFmZkNhcmRzQ29udGFpbmVyKTtcbiAgcmV0dXJuIHN0YWZmO1xufVxuXG5mdW5jdGlvbiBidWlsZE9wZW5WaXN1YWxpemF0aW9uKFxuICBvcGVuaW5nSG91cjogbnVtYmVyLFxuICBjbG9zaW5nSG91cjogbnVtYmVyXG4pOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JhcGguY2xhc3NMaXN0LmFkZChcImhvdXJzLWdyYXBoXCIpO1xuXG4gIGNvbnN0IGhvdXJFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8IDI0OyBob3VyKyspIHtcbiAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3VyRGl2LmNsYXNzTGlzdC5hZGQoXCJob3VyXCIsIFwiY2xvc2VkXCIpO1xuICAgIGhvdXJEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1ob3VyXCIsIGhvdXIudG9TdHJpbmcoKSk7XG4gICAgaG91ckVsZW1lbnRzLnB1c2goaG91ckRpdik7XG4gIH1cblxuICBmb3IgKGxldCBvcGVuSG91ciA9IG9wZW5pbmdIb3VyOyBvcGVuSG91ciA8IGNsb3NpbmdIb3VyOyBvcGVuSG91cisrKSB7XG4gICAgaG91ckVsZW1lbnRzW29wZW5Ib3VyXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuICAgIGhvdXJFbGVtZW50c1tvcGVuSG91cl0uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gIH1cblxuICBncmFwaC5hcHBlbmQoLi4uaG91ckVsZW1lbnRzKTtcbiAgcmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvdXJHcmlkKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaG91ckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VyR3JpZC5jbGFzc0xpc3QuYWRkKFwiaG91ci1ncmlkXCIpO1xuXG4gIGZvciAoY29uc3Qgb3BlbmluZ0hvdXJzT2JqIG9mIG9wZW5pbmdIb3Vycykge1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRheS5pbm5lclRleHQgPSBvcGVuaW5nSG91cnNPYmouZGF5O1xuXG4gICAgY29uc3Qgb3BlblZpc3VhbGl6YXRpb24gPSBidWlsZE9wZW5WaXN1YWxpemF0aW9uKFxuICAgICAgb3BlbmluZ0hvdXJzT2JqLm9wZW5pbmdIb3VyLFxuICAgICAgb3BlbmluZ0hvdXJzT2JqLmNsb3NpbmdIb3VyXG4gICAgKTtcblxuICAgIGhvdXJHcmlkLmFwcGVuZChkYXksIG9wZW5WaXN1YWxpemF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBob3VyR3JpZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRPcGVuaW5nSG91cnMoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBvcGVuaW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcGVuaW5nSG91cnMuY2xhc3NMaXN0LmFkZChcIm9wZW5pbmctaG91cnNcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJPcGVuaW5nIGhvdXJzXCI7XG5cbiAgY29uc3QgaG91ckdyaWQgPSBidWlsZEhvdXJHcmlkKCk7XG5cbiAgb3BlbmluZ0hvdXJzLmFwcGVuZChoZWFkZXIsIGhvdXJHcmlkKTtcbiAgcmV0dXJuIG9wZW5pbmdIb3Vycztcbn1cblxuZnVuY3Rpb24gYnVpbGRDb250YWN0SW5mb3JtYXRpb24oKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBjb250YWN0SW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0SW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mb3JtYXRpb25cIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IGluZm9ybWF0aW9uXCI7XG5cbiAgY29uc3Qgd3JhcEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwR3JpZC5jbGFzc0xpc3QuYWRkKFwid3JhcC1ncmlkXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEdyaWQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZ3JpZFwiKTtcblxuICBjb25zdCBtYXBNYXJrZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFwTWFya2VySWNvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pY29uXCIpO1xuICBtYXBNYXJrZXJJY29uLmlubmVySFRNTCA9IG1hcE1hcmtlckltYWdlO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3RyZWV0LmlubmVyVGV4dCA9IFwiUmVhbFN0cmVldCA0XCI7XG4gIGNvbnN0IHBvc3RhbENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcG9zdGFsQ29kZS5pbm5lclRleHQgPSBcIjEyMzQ1NiBBQlwiO1xuICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdGF0ZS5pbm5lclRleHQgPSBcIk5vcnRoIFJlYWxTdGF0ZVwiO1xuICBhZGRyZXNzLmFwcGVuZChzdHJlZXQsIHBvc3RhbENvZGUsIHN0YXRlKTtcblxuICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaWNvblwiKTtcbiAgcGhvbmVJY29uLmlubmVySFRNTCA9IHBob25lSW1hZ2U7XG5cbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGhvbmVOdW1iZXIuaW5uZXJUZXh0ID0gXCIrMTEgOCAxMjM0NTY3OFwiO1xuXG4gIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pY29uXCIpO1xuICBlbWFpbEljb24uaW5uZXJIVE1MID0gZW1haWxJbWFnZTtcblxuICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZW1haWxBZGRyZXNzLmlubmVyVGV4dCA9IFwiY29udGFjdEBtYWVzdHJvcGxhc3RpcXVlLmNvbVwiO1xuXG4gIGNvbnRhY3RHcmlkLmFwcGVuZChcbiAgICBtYXBNYXJrZXJJY29uLFxuICAgIGFkZHJlc3MsXG4gICAgcGhvbmVJY29uLFxuICAgIHBob25lTnVtYmVyLFxuICAgIGVtYWlsSWNvbixcbiAgICBlbWFpbEFkZHJlc3NcbiAgKTtcblxuICB3cmFwR3JpZC5hcHBlbmRDaGlsZChjb250YWN0R3JpZCk7XG4gIGNvbnRhY3RJbmZvcm1hdGlvbi5hcHBlbmQoaGVhZGVyLCB3cmFwR3JpZCk7XG5cbiAgcmV0dXJuIGNvbnRhY3RJbmZvcm1hdGlvbjtcbn1cblxuZnVuY3Rpb24gYnVpbGRJbmZvQm94ZXMoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBJbmZvQm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBJbmZvQm94ZXMuY2xhc3NMaXN0LmFkZChcImluZm8tYm94ZXNcIik7XG5cbiAgY29uc3Qgb3BlbmluZ0hvdXJzID0gYnVpbGRPcGVuaW5nSG91cnMoKTtcbiAgY29uc3QgY29udGFjdEluZm9ybWF0aW9uID0gYnVpbGRDb250YWN0SW5mb3JtYXRpb24oKTtcblxuICBJbmZvQm94ZXMuYXBwZW5kKG9wZW5pbmdIb3VycywgY29udGFjdEluZm9ybWF0aW9uKTtcbiAgcmV0dXJuIEluZm9Cb3hlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb250YWN0UGFnZSgpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjb250YWN0LW1haW5cIixcbiAgICBcIndpZHRoLWNvbnN0cmFpbmVkXCIsXG4gICAgXCJtYXJnaW4tY2VudGVyZWRcIlxuICApO1xuXG4gIGNvbnN0IHN0YWZmU2VjdGlvbiA9IGJ1aWxkU3RhZmZTZWN0aW9uKCk7XG4gIGNvbnN0IGluZm9Cb3hlcyA9IGJ1aWxkSW5mb0JveGVzKCk7XG5cbiAgbWFpbkVsZW1lbnQuYXBwZW5kKHN0YWZmU2VjdGlvbiwgaW5mb0JveGVzKTtcbiAgcmV0dXJuIG1haW5FbGVtZW50O1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBidWlsZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdHBhZ2UuanNcIjtcbiIsImludGVyZmFjZSBJT3BlbmluZ0hvdXJzIHtcbiAgZGF5OlxuICAgIHwgXCJNb25kYXlcIlxuICAgIHwgXCJUdWVzZGF5XCJcbiAgICB8IFwiV2VkbmVzZGF5XCJcbiAgICB8IFwiVGh1cnNkYXlcIlxuICAgIHwgXCJGcmlkYXlcIlxuICAgIHwgXCJTYXR1cmRheVwiXG4gICAgfCBcIlN1bmRheVwiO1xuICBvcGVuaW5nSG91cjogbnVtYmVyO1xuICBjbG9zaW5nSG91cjogbnVtYmVyO1xufVxuXG5jb25zdCBvcGVuaW5nSG91cnM6IElPcGVuaW5nSG91cnNbXSA9IFtcbiAge1xuICAgIGRheTogXCJNb25kYXlcIixcbiAgICBvcGVuaW5nSG91cjogOSxcbiAgICBjbG9zaW5nSG91cjogMTYsXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiVHVlc2RheVwiLFxuICAgIG9wZW5pbmdIb3VyOiAxMyxcbiAgICBjbG9zaW5nSG91cjogMTQsXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiV2VkbmVzZGF5XCIsXG4gICAgb3BlbmluZ0hvdXI6IDUsXG4gICAgY2xvc2luZ0hvdXI6IDIzLFxuICB9LFxuICB7XG4gICAgZGF5OiBcIlRodXJzZGF5XCIsXG4gICAgb3BlbmluZ0hvdXI6IDcsXG4gICAgY2xvc2luZ0hvdXI6IDksXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiRnJpZGF5XCIsXG4gICAgb3BlbmluZ0hvdXI6IDE1LFxuICAgIGNsb3NpbmdIb3VyOiAxNixcbiAgfSxcbiAge1xuICAgIGRheTogXCJTYXR1cmRheVwiLFxuICAgIG9wZW5pbmdIb3VyOiAxMixcbiAgICBjbG9zaW5nSG91cjogMTksXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiU3VuZGF5XCIsXG4gICAgb3BlbmluZ0hvdXI6IDEwLFxuICAgIGNsb3NpbmdIb3VyOiAxNSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5pbmdIb3VycztcbiIsImltcG9ydCBDYXNoSW1hZ2UgZnJvbSBcIi4vY2FzaC5zdmdcIjtcbmltcG9ydCBTdGlua0ltYWdlIGZyb20gXCIuL3NjZW50LnN2Z1wiO1xuaW1wb3J0IFN1bkltYWdlIGZyb20gXCIuL3N1bi1jbG9jay1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGFmZkNhcmQge1xuICBpbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGJsdXJiOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzdGFmZkNhcmRzOiBJU3RhZmZDYXJkW10gPSBbXG4gIHtcbiAgICBpbWFnZTogQ2FzaEltYWdlLFxuICAgIG5hbWU6IFwiVGhvbWFzIEplZmZlcnNvblwiLFxuICAgIHRpdGxlOiBcIlZlbnR1cmUgQ2FwaXRhbGlzdFwiLFxuICAgIGJsdXJiOlxuICAgICAgXCJJIHNsaXBwZWQgb24gc29tZSBnYXJiYWdlIGFuZCB0aG91Z2h0ICd0aGlzIGNvdWxkIGJlIGEgbWVhbCcuIElmIGl0IGRvZXNuJ3Qgd29yayBvdXQgSSBjYW4gYWx3YXlzIGFzayBkYWQgdG8gd2lyZSBtb3JlIG1vbmV5LCBzbyB3aGF0IHRoZSBoZWxsIVwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFN0aW5rSW1hZ2UsXG4gICAgbmFtZTogXCJTdGlua3kgUGV0ZVwiLFxuICAgIHRpdGxlOiBcIkhlYWQgQ2hlZlwiLFxuICAgIGJsdXJiOlxuICAgICAgXCJJIG1ha2UgdGhlIHNhbWUgbWVhbHMgYXMgYWx3YXlzLCBidXQgbm93IHlvdW5nIGZvbGsgbGluZSB1cCB0byBwYXkgbWUgZm9yIGl0LiBJIGRvbid0IGdldCBpdCwgYnV0IEknbSBub3QgY29tcGxhaW5pbmcuXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogU3VuSW1hZ2UsXG4gICAgbmFtZTogXCJTYXJhaCBFbGJlcnNvblwiLFxuICAgIHRpdGxlOiBcIlNvdXMgY2hlZlwiLFxuICAgIGJsdXJiOiBcIkkganVzdCBuZWVkZWQgYSBzdW1tZXIgam9iLCBwbGVhc2UgZG9uJ3QgcHV0IHRoaXMgb24gdGhlIHNpdGUuXCIsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IFBpcGUgZnJvbSBcIi4vRGlzY2hhcmdlX3BpcGUuanBnXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkU3RyaXBlcygpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IHN0cmlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHJpcGVzLmNsYXNzTGlzdC5hZGQoXCJzdHJpcGVzXCIpO1xuXG4gIHJldHVybiBzdHJpcGVzO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvbWVQYWdlVGl0bGUoKTogSFRNTFNwYW5FbGVtZW50IHtcbiAgY29uc3QgaG9tZXBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBob21lcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZS10aXRsZVwiKTtcbiAgaG9tZXBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiRW1icmFjZSBpdCFcIjtcblxuICByZXR1cm4gaG9tZXBhZ2VUaXRsZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRIb21lUGFnZVRleHQoKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBob21lcGFnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lcGFnZVRleHQuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlLXRleHRcIik7XG5cbiAgY29uc3QgZmlyc3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmlyc3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuICAgIFwiV2UncmUgYWxsIGluZ2VzdGluZyBnYXJiYWdlIGFuZCBtaWNyb3BsYXN0aWNzIGFueXdheS5cIjtcblxuICBjb25zdCBzZWNvbmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2Vjb25kUGFyYWdyYXBoLmlubmVySFRNTCA9XG4gICAgXCJJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IGNhbmNlciAoKnlhd24qKSwgd2UgYXQgPHN0cm9uZz5NYWVzdHJvUGxhc3RpcXVlPC9zdHJvbmc+IGNob29zZSB0byBmb2N1cyBvbiB3aGF0IHdlIDxlbT5jYW48L2VtPiBjb250cm9sOlwiO1xuXG4gIGhvbWVwYWdlVGV4dC5hcHBlbmQoZmlyc3RQYXJhZ3JhcGgsIHNlY29uZFBhcmFncmFwaCk7XG4gIHJldHVybiBob21lcGFnZVRleHQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSG9tZVBhZ2VUYXN0ZSgpOiBIVE1MUGFyYWdyYXBoRWxlbWVudCB7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlLXRhc3RlXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIlRoZSB0YXN0ZVwiO1xuXG4gIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSG9tZVBhZ2VJbWFnZVdyYXBwZXIoKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBpbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlLWltYWdlLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2UtcGlwZVwiKTtcbiAgaW1hZ2Uuc3JjID0gUGlwZTtcbiAgaW1hZ2UuYWx0ID0gXCJXYXN0ZXdhdGVyIHBpcGVcIjtcblxuICBpbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICByZXR1cm4gaW1hZ2VXcmFwcGVyO1xufVxuXG5mdW5jdGlvbiBidWlsZEdyYWRpZW50QmFja2dyb3VuZCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGdyYWRpZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JhZGllbnREaXYuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50LWJnXCIpO1xuICByZXR1cm4gZ3JhZGllbnREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9tZVBhZ2UoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgIFwiaG9tZXBhZ2UtbWFpblwiLFxuICAgIFwid2lkdGgtY29uc3RyYWluZWRcIixcbiAgICBcIm1hcmdpbi1jZW50ZXJlZFwiXG4gICk7XG5cbiAgY29uc3Qgc3RyaXBlcyA9IGJ1aWxkU3RyaXBlcygpO1xuICBjb25zdCBob21lcGFnZVRpdGxlID0gYnVpbGRIb21lUGFnZVRpdGxlKCk7XG4gIGNvbnN0IGhvbWVwYWdlVGV4dCA9IGJ1aWxkSG9tZVBhZ2VUZXh0KCk7XG4gIGNvbnN0IGhvbWVwYWdlVGFzdGUgPSBidWlsZEhvbWVQYWdlVGFzdGUoKTtcbiAgY29uc3QgaG9tZXBhZ2VJbWFnZVdyYXBwZXIgPSBidWlsZEhvbWVQYWdlSW1hZ2VXcmFwcGVyKCk7XG4gIGNvbnN0IGdyYWRpZW50QmFja2dyb3VuZCA9IGJ1aWxkR3JhZGllbnRCYWNrZ3JvdW5kKCk7XG5cbiAgbWFpbkVsZW1lbnQuYXBwZW5kKFxuICAgIHN0cmlwZXMsXG4gICAgaG9tZXBhZ2VUaXRsZSxcbiAgICBob21lcGFnZVRleHQsXG4gICAgaG9tZXBhZ2VUYXN0ZSxcbiAgICBob21lcGFnZUltYWdlV3JhcHBlcixcbiAgICBncmFkaWVudEJhY2tncm91bmRcbiAgKTtcblxuICByZXR1cm4gbWFpbkVsZW1lbnQ7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGJ1aWxkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xuIiwiZXhwb3J0IHsgYnVpbGRIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlL2luZGV4LmpzXCI7XG5leHBvcnQgeyBidWlsZE1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudXBhZ2UvaW5kZXguanNcIjtcbmV4cG9ydCB7IGJ1aWxkQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0cGFnZS9pbmRleC5qc1wiO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBidWlsZE1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudXBhZ2UuanNcIjtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSURyaW5rSXRlbSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRm9vZEl0ZW0gZXh0ZW5kcyBJRHJpbmtJdGVtIHtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGVudHJlZUl0ZW1zOiBJRm9vZEl0ZW1bXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiUMOidGVzIGVuIHBsYXN0aXF1ZVwiLFxuICAgIHByaWNlOiAxNSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBkZWxpY2lvdXMgYmxlbmQgb2YgbG9jYWxseS1zb3VyY2VkIG1pY3JvcGxhc3RpY3MgYW5kIGRheS1vbGQgcGFzdGEuIFBlcmZlY3QgZm9yIHRoZSBlbnZpcm9ubWVudGFsbHktY29uc2Npb3VzIGZvb2RpZS5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRMOpbGljZSBkZSBsYSBiZW5uZVwiLFxuICAgIHByaWNlOiAxMixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBzYXZvcnkgZGlzaCBmZWF0dXJlcyBhIG1lZGxleSBvZiByb3R0ZW4gdmVnZXRhYmxlcyBhbmQgcGxhc3RpYyBwYWNrYWdpbmcgdGhhdCB3ZSBmb3VuZCBiZWhpbmQgb3VyIHJlc3RhdXJhbnQuIEl0J3Mgc28gZnJlc2gsIGl0J3Mgc3RpbGwgd2FybSFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFzYWduZSBkZSBkw6ljaGFyZ2VcIixcbiAgICBwcmljZTogMjAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaGVhcnR5IGRpc2ggaXMgbWFkZSB3aXRoIGxheWVycyBvZiBwbGFzdGljIGJhZ3MgYW5kIGxvY2FsbHktc291cmNlZCBsYW5kZmlsbCBzb2lsLiBJdCdzIHRoZSB1bHRpbWF0ZSBjb21mb3J0IGZvb2QgZm9yIHRoZSBlY28tY29uc2Npb3VzLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCb3VsZXR0ZXMgZGUgbWljcm9wbGFzdGlxdWVzXCIsXG4gICAgcHJpY2U6IDE4LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYWRlIGZyb20gMTAwJSByZWN5Y2xlZCBwbGFzdGljIGFuZCBpbmZ1c2VkIHdpdGggdGhlIGZpbmVzdCBnYXJiYWdlLCB0aGVzZSBtZWF0YmFsbHMgYXJlIHRoZSB1bHRpbWF0ZSBpbiBzdXN0YWluYWJsZSBjdWlzaW5lLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG1haW5zSXRlbXM6IElGb29kSXRlbVtdID0gW1xuICB7XG4gICAgbmFtZTogXCJNYXNhbGEgZGUgbGEgcG91YmVsbGVcIixcbiAgICBwcmljZTogMjUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2xhc3NpYyBJbmRpYW4gZGlzaCBtYWRlIHdpdGggYSBkZWxpY2lvdXMgYmxlbmQgb2YgbG9jYWxseS1zb3VyY2VkIG1pY3JvcGxhc3RpY3MgYW5kIHJvdHRlbiB2ZWdldGFibGVzLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc3RhbGUgbmFhbiBicmVhZC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGFyZmFpdCBlbiBwbGFzdGlxdWVcIixcbiAgICBwcmljZTogMjAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgc3dlZXQgYW5kIHRhbmd5IGRlc3NlcnQgZmVhdHVyZXMgbGF5ZXJzIG9mIGZyZXNoIG1pY3JvcGxhc3RpY3MgYW5kIGRpc2NhcmRlZCBjYW5keSB3cmFwcGVycy4gU2VydmVkIHdpdGggYSBzaWRlIG9mIGJyb2tlbiBkcmVhbXMuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdvdWxhc2ggZGUgZMOpY2hldHNcIixcbiAgICBwcmljZTogMjgsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaGVhcnR5IEh1bmdhcmlhbiBkaXNoIGlzIG1hZGUgd2l0aCBhIHNlbGVjdGlvbiBvZiBzdGFsZSBicmVhZCBhbmQgbW9sZHkgY2hlZXNlLCBtaXhlZCB3aXRoIHRoZSBmaW5lc3QgbG9jYWxseS1zb3VyY2VkIG1pY3JvcGxhc3RpY3MuIFRoZSBwZXJmZWN0IG1lYWwgZm9yIHRoZSBlbnZpcm9ubWVudGFsbHkgY29uc2Npb3VzLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMaW5ndWluZSBkZSBkw6ljaGFyZ2VcIixcbiAgICBwcmljZTogMjIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk91ciBsaW5ndWluZSBpcyB0b3NzZWQgd2l0aCBsb2NhbGx5LXNvdXJjZWQgbGFuZGZpbGwgc29pbCBhbmQgc2Vhc29uZWQgd2l0aCB0aGUgZmluZXN0IHBsYXN0aWMgc2hhdmluZ3MuIEEgbXVzdC10cnkgZm9yIGFueW9uZSB3aG8gY2FyZXMgYWJvdXQgdGhlIGVudmlyb25tZW50LlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDw7R0ZWxldHRlcyBkZSBwb3JjIGVuIHBsYXN0aXF1ZVwiLFxuICAgIHByaWNlOiAzMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTWFkZSBmcm9tIGxvY2FsbHktc291cmNlZCBtaWNyb3BsYXN0aWNzIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgZGF5LW9sZCBwb3RhdG8gc2FsYWQsIHRoZXNlIHBvcmsgY2hvcHMgYXJlIGEgdHJ1ZSBkZWxpY2FjeSBmb3IgdGhlIGVudmlyb25tZW50YWxseS1jb25zY2lvdXMgY2Fybml2b3JlLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSaXNvdHRvIGRlIHJlYnV0XCIsXG4gICAgcHJpY2U6IDI2LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIEl0YWxpYW4taW5zcGlyZWQgZGlzaCBpcyBtYWRlIHdpdGggbG9jYWxseS1zb3VyY2VkIGxhbmRmaWxsIHJpY2UgYW5kIG1peGVkIHdpdGggYSB2YXJpZXR5IG9mIHBsYXN0aWMgc2hhdmluZ3MuIFRoZSBwZXJmZWN0IGNob2ljZSBmb3IgdGhlIGVjby1jb25zY2lvdXMgZm9vZGllLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGRlc3NlcnRzSXRlbXM6IElGb29kSXRlbVtdID0gW1xuICB7XG4gICAgbmFtZTogXCJGYW50YXN0aXF1ZSBTdW5kYWUgZW4gUGxhc3RpcXVlXCIsXG4gICAgcHJpY2U6IDE2LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPdXIgZGVsaWNpb3VzIGljZSBjcmVhbSBzdW5kYWUgaXMgdG9wcGVkIHdpdGggYSBjcnVuY2h5IG1peCBvZiBjb2xvcmZ1bCBtaWNyb3BsYXN0aWNzIGFuZCBzcHJpbmtsZXMgbWFkZSBmcm9tIGRpc2NhcmRlZCBjYW5keSB3cmFwcGVycy4gU2VydmVkIGluIGEgcGxhc3RpYyBjdXAgZm9yIGEgdHJ1bHkgZWNvLWZyaWVuZGx5IGV4cGVyaWVuY2UuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJyb3duaWVzIGQnT3JkdXJlc1wiLFxuICAgIHByaWNlOiAxNCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlc2UgcmljaCBhbmQgZnVkZ3kgYnJvd25pZXMgYXJlIG1hZGUgd2l0aCBsb2NhbGx5LXNvdXJjZWRsYW5kZmlsbCBzb2lsIGFuZCB0b3BwZWQgd2l0aCBhIGRlY2FkZW50IGxheWVyIG9mIHBsYXN0aWMtd3JhcHBlZCBjYW5keSBiYXJzLiBBIGd1aWx0eSBwbGVhc3VyZSB0aGF0J3MgYWxzbyBnb29kIGZvciB0aGUgZW52aXJvbm1lbnQhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRpcmFtaXN1IGRlIFBvdWJlbGxlXCIsXG4gICAgcHJpY2U6IDE4LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPdXIgdmVyc2lvbiBvZiB0aGUgY2xhc3NpYyBJdGFsaWFuIGRlc3NlcnQgZmVhdHVyZXMgbGF5ZXJzIG9mIGxvY2FsbHktc291cmNlZCBzdGFsZSBicmVhZCBhbmQgY29mZmVlLXNvYWtlZCBtaWNyb3BsYXN0aWNzLCB0b3BwZWQgd2l0aCBhIGNyZWFteSBtYXNjYXJwb25lIGNoZWVzZSBtaXh0dXJlLiBTZXJ2ZWQgaW4gYSBtaW5pIHRyYXNoIGNhbi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBkcmlua3NJdGVtczogSURyaW5rSXRlbVtdID0gW1xuICB7XG4gICAgbmFtZTogXCJMZSBKdXMgZGUgRMOpY2hldHMgSW5kdXN0cmllbHNcIixcbiAgICBwcmljZTogOCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGEgR3JhbmRlIFZhZ3VlIGRlIE1pY3JvcGxhc3RpcXVlc1wiLFxuICAgIHByaWNlOiAxMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTCdFYXUgZGUgUG91YmVsbGUgRnJhw65jaGVcIixcbiAgICBwcmljZTogNSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGUgU29kYSBkZSBEw6ljaGV0c1wiLFxuICAgIHByaWNlOiA2LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMZSBMYWl0IGQnT3JkdXJlXCIsXG4gICAgcHJpY2U6IDgsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHtcbiAgZW50cmVlSXRlbXMsXG4gIG1haW5zSXRlbXMsXG4gIGRlc3NlcnRzSXRlbXMsXG4gIGRyaW5rc0l0ZW1zLFxuICBJRHJpbmtJdGVtLFxuICBJRm9vZEl0ZW0sXG59IGZyb20gXCIuL21lbnVJdGVtcy5qc1wiO1xuXG5mdW5jdGlvbiBidWlsZEZvb2RDYXJkKGl0ZW06IElGb29kSXRlbSk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtX19uYW1lXCIpO1xuICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG5cbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtX19wcmljZVwiKTtcbiAgaXRlbVByaWNlLmlubmVyVGV4dCA9IGl0ZW0ucHJpY2UudG9TdHJpbmcoKTtcblxuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1fX2Rlc2NyaXB0aW9uXCIpO1xuICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICBpdGVtRGl2LmFwcGVuZChpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBpdGVtRGl2O1xufVxuXG5mdW5jdGlvbiBidWlsZERyaW5rQ2FyZChpdGVtOiBJRHJpbmtJdGVtKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiZHJpbmstaXRlbVwiKTtcblxuICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZHJpbmstaXRlbV9fbmFtZVwiKTtcbiAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuXG4gIGNvbnN0IGl0ZW1GaWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRmlsbGVyLmNsYXNzTGlzdC5hZGQoXCJkcmluay1pdGVtX19maWxsZXJcIik7XG5cbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwiZHJpbmstaXRlbV9fcHJpY2VcIik7XG4gIGl0ZW1QcmljZS5pbm5lclRleHQgPSBpdGVtLnByaWNlLnRvU3RyaW5nKCk7XG5cbiAgaXRlbURpdi5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1GaWxsZXIsIGl0ZW1QcmljZSk7XG5cbiAgcmV0dXJuIGl0ZW1EaXY7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRW50cmVlcygpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGVudHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbnRyZWVzLmNsYXNzTGlzdC5hZGQoXCJlbnRyZWVzXCIpO1xuXG4gIGNvbnN0IGVudHJlZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZW50cmVlc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkZXJcIiwgXCJzcGFuMlwiKTtcbiAgZW50cmVlc0hlYWRlci5pbm5lclRleHQgPSBcIkVudHJlZXNcIjtcblxuICBjb25zdCBlbnRyZWVJdGVtRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBlbnRyZWVJdGVtcy5tYXAoYnVpbGRGb29kQ2FyZCk7XG5cbiAgZW50cmVlcy5hcHBlbmQoZW50cmVlc0hlYWRlciwgLi4uZW50cmVlSXRlbUVsZW1lbnRzKTtcblxuICByZXR1cm4gZW50cmVlcztcbn1cblxuZnVuY3Rpb24gYnVpbGRNYWlucygpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IG1haW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbnMuY2xhc3NMaXN0LmFkZChcIm1haW5zXCIpO1xuXG4gIGNvbnN0IG1haW5zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1haW5zSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlYWRlclwiLCBcInNwYW4yXCIpO1xuICBtYWluc0hlYWRlci5pbm5lclRleHQgPSBcIk1haW5zXCI7XG5cbiAgY29uc3QgbWFpbnNJdGVtRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBtYWluc0l0ZW1zLm1hcChidWlsZEZvb2RDYXJkKTtcblxuICBtYWlucy5hcHBlbmQobWFpbnNIZWFkZXIsIC4uLm1haW5zSXRlbUVsZW1lbnRzKTtcblxuICByZXR1cm4gbWFpbnM7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRGVzc2VydHMoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0c1wiKTtcblxuICBjb25zdCBkZXNzZXJ0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZXNzZXJ0c0hlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkZXJcIik7XG4gIGRlc3NlcnRzSGVhZGVyLmlubmVyVGV4dCA9IFwiRGVzc2VydHNcIjtcblxuICBjb25zdCBkZXNzZXJ0c0l0ZW1FbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IGRlc3NlcnRzSXRlbXMubWFwKGJ1aWxkRm9vZENhcmQpO1xuXG4gIGRlc3NlcnRzLmFwcGVuZChkZXNzZXJ0c0hlYWRlciwgLi4uZGVzc2VydHNJdGVtRWxlbWVudHMpO1xuXG4gIHJldHVybiBkZXNzZXJ0cztcbn1cblxuZnVuY3Rpb24gYnVpbGREcmlua3MoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3MuY2xhc3NMaXN0LmFkZChcImRyaW5rc1wiKTtcblxuICBjb25zdCBkcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHJpbmtzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlYWRlclwiKTtcbiAgZHJpbmtzSGVhZGVyLmlubmVyVGV4dCA9IFwiRHJpbmtzXCI7XG5cbiAgY29uc3QgZHJpbmtzSXRlbUVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gZHJpbmtzSXRlbXMubWFwKGJ1aWxkRHJpbmtDYXJkKTtcblxuICBkcmlua3MuYXBwZW5kKGRyaW5rc0hlYWRlciwgLi4uZHJpbmtzSXRlbUVsZW1lbnRzKTtcblxuICByZXR1cm4gZHJpbmtzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1lbnVQYWdlKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICBcIm1lbnUtbWFpblwiLFxuICAgIFwid2lkdGgtY29uc3RyYWluZWRcIixcbiAgICBcIm1hcmdpbi1jZW50ZXJlZFwiXG4gICk7XG5cbiAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbWVudU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtbmFtZVwiKTtcbiAgbWVudU5hbWUuaW5uZXJUZXh0ID0gXCJNYWVzdHJvUGxhc3RpcXVlXCI7XG5cbiAgY29uc3QgZW50cmVlcyA9IGJ1aWxkRW50cmVlcygpO1xuICBjb25zdCBtYWlucyA9IGJ1aWxkTWFpbnMoKTtcbiAgY29uc3QgZGVzc2VydHMgPSBidWlsZERlc3NlcnRzKCk7XG4gIGNvbnN0IGRyaW5rcyA9IGJ1aWxkRHJpbmtzKCk7XG5cbiAgbWFpbkVsZW1lbnQuYXBwZW5kKG1lbnVOYW1lLCBlbnRyZWVzLCBtYWlucywgZGVzc2VydHMsIGRyaW5rcyk7XG5cbiAgcmV0dXJuIG1haW5FbGVtZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgYnVpbGRIb21lUGFnZSxcbiAgYnVpbGRNZW51UGFnZSxcbiAgYnVpbGRDb250YWN0UGFnZSxcbn0gZnJvbSBcIi4vcGFnZXMvaW5kZXguanNcIjtcblxuZnVuY3Rpb24gdmVyaWZ5Tm90TnVsbDxUPihwOiBudWxsIHwgVCk6IFQge1xuICBpZiAocCA9PT0gbnVsbCkge1xuICAgIHRocm93IFwiU2hvdWxkIG5vdCBiZSBudWxsIVwiO1xuICB9XG4gIHJldHVybiBwO1xufVxuXG5jb25zdCBjb250ZW50QXR0YWNoUG9pbnQgPSB2ZXJpZnlOb3ROdWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKSk7XG5jb25zdCBob21lcGFnZU1haW4gPSBidWlsZEhvbWVQYWdlKCk7XG5sZXQgY3VycmVudFBhZ2U6IFwiaG9tZXBhZ2VcIiB8IFwibWVudVwiIHwgXCJjb250YWN0XCIgPSBcImhvbWVwYWdlXCI7XG5jb250ZW50QXR0YWNoUG9pbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VNYWluKTtcbmNvbnNvbGUubG9nKFwiYWRkZWQgaG9tZXBhZ2UgY29udGVudFwiKTtcblxuY29uc3QgaG9tZU5hdmlnYXRpb24gPSB2ZXJpZnlOb3ROdWxsKFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtYnV0dG9ucyAuaG9tZVwiKVxuKTtcbmNvbnN0IG1lbnVOYXZpZ2F0aW9uID0gdmVyaWZ5Tm90TnVsbChcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWJ1dHRvbnMgLm1lbnVcIilcbik7XG5jb25zdCBjb250YWN0TmF2aWdhdGlvbiA9IHZlcmlmeU5vdE51bGwoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1idXR0b25zIC5jb250YWN0XCIpXG4pO1xuXG5jb25zdCBtYXBwaW5nID0gW1xuICBbaG9tZU5hdmlnYXRpb24sIFwiaG9tZXBhZ2VcIiwgYnVpbGRIb21lUGFnZV0sXG4gIFttZW51TmF2aWdhdGlvbiwgXCJtZW51XCIsIGJ1aWxkTWVudVBhZ2VdLFxuICBbY29udGFjdE5hdmlnYXRpb24sIFwiY29udGFjdFwiLCBidWlsZENvbnRhY3RQYWdlXSxcbl0gYXMgY29uc3Q7XG5cbm1hcHBpbmcuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zdCBbcGFnZUVsZW1lbnQsIGlkZW50aWZpZXIsIGJ1aWxkRnVuY3Rpb25dID0gZWxlbWVudDtcbiAgcGFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udGVudEF0dGFjaFBvaW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudEF0dGFjaFBvaW50LmFwcGVuZENoaWxkKGJ1aWxkRnVuY3Rpb24oKSk7XG4gICAgY3VycmVudFBhZ2UgPSBpZGVudGlmaWVyO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9