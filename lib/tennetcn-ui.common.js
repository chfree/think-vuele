module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("accounting-js");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(21);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(19);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/mixins/emitter");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@handsontable/vue");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("libphonenumber-js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("xgplayer-vue");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".tc-block-container {\n  border: 1px solid #cfd9e5; }\n  .tc-block-container .tc-block-title {\n    padding: 4px;\n    font-size: 14px;\n    color: #333;\n    background-color: #f1f4fa;\n    padding-left: 15px;\n    border-bottom: 1px solid #cfd9e5;\n    vertical-align: middle; }\n  .tc-block-container .tc-block-title-left {\n    width: 3px;\n    height: 15px;\n    margin-top: -2px;\n    background: #1379d2;\n    border-radius: 25%;\n    display: inline-block;\n    margin-right: 5px;\n    vertical-align: middle; }\n  .tc-block-container .tc-block-content {\n    padding: 5px; }\n\n.tc-box-shadow {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); }\n\n.tc-box-shadow-hover:hover {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); }\n\n.el-button.el-button--text {\n  padding: 0px; }\n\n.tc-dialog-base .el-dialog__header {\n  padding: 10px 10px;\n  background-color: #5e656a; }\n  .tc-dialog-base .el-dialog__header .el-dialog__title,\n  .tc-dialog-base .el-dialog__header .tc-dialog-title {\n    color: #fff;\n    font-size: 16px;\n    font-weight: 800; }\n\n.tc-dialog-base .el-dialog__headerbtn {\n  top: 8px;\n  right: 10px;\n  font-size: 20px; }\n\n.tc-dialog-base .el-dialog__body {\n  padding: 0px; }\n\n.tc-dialog-base .tc-dialog-body-container {\n  overflow: auto; }\n\n.tc-dialog-base .tc-dialog-body-container .app-container {\n  padding: 0px !important; }\n\n.tc-dialog-base .el-dialog__close.el-icon.el-icon-close {\n  color: #fff; }\n\n.el-dialog__wrapper {\n  overflow: hidden; }\n\n.el-dialog .el-dialog__header {\n  height: 20px;\n  line-height: inherit; }\n\n.el-loading-mask.is-fullscreen {\n  z-index: 2100 !important; }\n\n.tc-edit-table td {\n  padding: 5px 0px !important;\n  height: 45px !important; }\n\n.tc-edit-table .editable-control {\n  display: none; }\n\n.tc-edit-table .editable-span-hide {\n  display: none; }\n\n.tc-edit-table .current-row .editable-control {\n  display: inline-block; }\n\n.tc-edit-table .editable-container {\n  display: inline-block; }\n\n.tc-edit-table .current-row .editable-span {\n  display: none; }\n\n@keyframes treeTableShow {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes treeTableShow {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.el-table.tc-table td.el-table-column--selection, .el-table.tc-table th.el-table-column--selection {\n  text-align: center !important; }\n\n.tc-fieldset {\n  border: 1px solid #ddd;\n  margin: 5px;\n  min-inline-size: auto !important; }\n\n.tc-fieldset-legend {\n  font-weight: 800; }\n\n.tc-fixed-bottom {\n  position: absolute;\n  top: auto;\n  bottom: 0px;\n  margin-bottom: 0px;\n  background-color: #eee;\n  width: 100%;\n  height: 48px; }\n\n.box-middle-center {\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  display: -moz-box;\n  -moz-box-orient: horizontal;\n  -moz-box-pack: center;\n  -moz-box-align: center;\n  display: -o-box;\n  -o-box-orient: horizontal;\n  -o-box-pack: center;\n  -o-box-align: center;\n  display: -ms-box;\n  -ms-box-orient: horizontal;\n  -ms-box-pack: center;\n  -ms-box-align: center;\n  display: box;\n  box-orient: horizontal;\n  box-pack: center;\n  box-align: center; }\n\n.tc-input-tag-container ul {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none; }\n\n.tc-input-tag-container *, .tc-input-tag-container *:before, .tc-input-tag-container *:after {\n  box-sizing: border-box; }\n\n.tc-input-tag-container input:focus {\n  outline: none; }\n\n.tc-input-tag-container input[disabled] {\n  background-color: transparent; }\n\n.tc-input-tag-container .vue-tags-input {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff; }\n\n.tc-input-tag-container div.vue-tags-input.disabled {\n  opacity: 0.5; }\n  .tc-input-tag-container div.vue-tags-input.disabled * {\n    cursor: default; }\n\n.tc-input-tag-container .ti-input {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap; }\n\n.tc-input-tag-container .ti-tags {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em; }\n\n.tc-input-tag-container .ti-tag {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .tc-input-tag-container .ti-tag:focus {\n    outline: none; }\n  .tc-input-tag-container .ti-tag .ti-content {\n    display: flex;\n    align-items: center; }\n  .tc-input-tag-container .ti-tag .ti-tag-center {\n    position: relative; }\n  .tc-input-tag-container .ti-tag span {\n    line-height: .85em; }\n  .tc-input-tag-container .ti-tag span.ti-hidden {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre; }\n  .tc-input-tag-container .ti-tag .ti-actions {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em; }\n    .tc-input-tag-container .ti-tag .ti-actions i {\n      cursor: pointer; }\n  .tc-input-tag-container .ti-tag:last-child {\n    margin-right: 4px; }\n  .tc-input-tag-container .ti-tag.ti-invalid, .tc-input-tag-container .ti-tag.ti-tag.ti-deletion-mark {\n    background-color: #e54d42; }\n\n.tc-input-tag-container .ti-new-tag-input-wrapper {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .tc-input-tag-container .ti-new-tag-input-wrapper input {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px; }\n\n.tc-input-tag-container .ti-new-tag-input {\n  line-height: initial; }\n\n.tc-input-tag-container .ti-autocomplete {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20; }\n\n.tc-input-tag-container .ti-item > div {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%; }\n\n.tc-input-tag-container .ti-selected-item {\n  background-color: #5C6BC0;\n  color: #fff; }\n\n.tc-input-tag-container .ti-input {\n  padding: 2px 4px !important;\n  border-color: #DCDFE6 !important;\n  border-radius: 4px !important; }\n\n.tc-input-tag-container .ti-tag {\n  background-color: #f4f4f5 !important;\n  color: #909399  !important;\n  border: 1px solid #e9e9eb !important;\n  padding: 2px 5px !important; }\n\n.tc-input-tag-container .vue-tags-input {\n  width: 100% !important;\n  max-width: inherit !important; }\n\n.tc-input-tag-container .ti-disabled {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.demo-block .box [class*=\"loader-\"] {\n  font-size: 40px; }\n\n.box {\n  color: #d60b52;\n  -webkit-transition: .3s color, .3s border;\n  transition: .3s color, .3s border;\n  text-align: center;\n  line-height: 120px; }\n\n[class*=\"loader-\"] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  color: inherit;\n  vertical-align: middle;\n  pointer-events: none; }\n\n.loader-01 {\n  border: .2em dotted currentcolor;\n  border-radius: 50%;\n  -webkit-animation: 1s loader-01 linear infinite;\n  animation: 1s loader-01 linear infinite; }\n\n@-webkit-keyframes loader-01 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-01 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.loader-02 {\n  border: .2em solid transparent;\n  border-left-color: currentcolor;\n  border-right-color: currentcolor;\n  border-radius: 50%;\n  -webkit-animation: 1s loader-02 linear infinite;\n  animation: 1s loader-02 linear infinite; }\n\n@-webkit-keyframes loader-02 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-02 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.loader-03 {\n  border: .2em solid currentcolor;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: 1s loader-03 linear infinite;\n  animation: 1s loader-03 linear infinite;\n  position: relative; }\n\n@-webkit-keyframes loader-03 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-03 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.loader-04 {\n  border: 1px solid currentcolor;\n  border-radius: 50%;\n  -webkit-animation: 1s loader-04 linear infinite;\n  animation: 1s loader-04 linear infinite;\n  position: relative; }\n\n.loader-04:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -.2em;\n  left: 50%;\n  border: .2em solid currentcolor;\n  border-radius: 50%; }\n\n@-webkit-keyframes loader-04 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-04 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.loader-05 {\n  border: .2em solid transparent;\n  border-top-color: currentcolor;\n  border-radius: 50%;\n  -webkit-animation: 1s loader-05 linear infinite;\n  animation: 1s loader-05 linear infinite;\n  position: relative; }\n\n.loader-05:before {\n  content: '';\n  display: block;\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  top: -.2em;\n  left: -.2em;\n  border: .2em solid currentcolor;\n  border-radius: 50%;\n  opacity: .5; }\n\n@-webkit-keyframes loader-05 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-05 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.loader-06 {\n  border: .2em solid currentcolor;\n  border-radius: 50%;\n  -webkit-animation: loader-06 1s ease-out infinite;\n  animation: loader-06 1s ease-out infinite; }\n\n@-webkit-keyframes loader-06 {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n@keyframes loader-06 {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n.loader-07 {\n  border: 0 solid transparent;\n  border-radius: 50%;\n  position: relative; }\n\n.loader-07:before,\n.loader-07:after {\n  content: '';\n  border: .2em solid currentcolor;\n  border-radius: 50%;\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: loader-07 1s linear infinite;\n  animation: loader-07 1s linear infinite;\n  opacity: 0; }\n\n.loader-07:before {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.loader-07:after {\n  -webkit-animation-delay: .5s;\n  animation-delay: .5s; }\n\n@-webkit-keyframes loader-07 {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n@keyframes loader-07 {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n.loader-08 {\n  position: relative; }\n\n.loader-08:before,\n.loader-08:after {\n  content: '';\n  width: inherit;\n  height: inherit;\n  border-radius: 50%;\n  background-color: currentcolor;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: loader-08 2.0s infinite ease-in-out;\n  animation: loader-08 2.0s infinite ease-in-out; }\n\n.loader-08:after {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes loader-08 {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes loader-08 {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.loader-09 {\n  background-color: currentcolor;\n  border-radius: 50%;\n  -webkit-animation: loader-09 1.0s infinite ease-in-out;\n  animation: loader-09 1.0s infinite ease-in-out; }\n\n@-webkit-keyframes loader-09 {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n@keyframes loader-09 {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n.loader-10 {\n  position: relative;\n  -webkit-animation: loader-10-1 2.0s infinite linear;\n  animation: loader-10-1 2.0s infinite linear; }\n\n.loader-10:before,\n.loader-10:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border: .5em solid currentcolor;\n  display: block;\n  position: absolute;\n  border-radius: 100%;\n  -webkit-animation: loader-10-2 2s infinite ease-in-out;\n  animation: loader-10-2 2s infinite ease-in-out; }\n\n.loader-10:before {\n  top: 0;\n  left: 50%; }\n\n.loader-10:after {\n  bottom: 0;\n  right: 50%;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n@-webkit-keyframes loader-10-1 {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-10-1 {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes loader-10-2 {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes loader-10-2 {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.loader-11 {\n  background-color: currentcolor;\n  -webkit-animation: loader-11 1.2s infinite ease-in-out;\n  animation: loader-11 1.2s infinite ease-in-out; }\n\n@-webkit-keyframes loader-11 {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n\n@keyframes loader-11 {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n\n.loader-12 {\n  position: relative; }\n\n.loader-12:before,\n.loader-12:after {\n  content: '';\n  display: block;\n  position: absolute;\n  background-color: currentcolor;\n  left: 50%;\n  right: 0;\n  top: 0;\n  bottom: 50%;\n  box-shadow: -.5em 0 0 currentcolor;\n  -webkit-animation: loader-12 1s linear infinite;\n  animation: loader-12 1s linear infinite; }\n\n.loader-12:after {\n  top: 50%;\n  bottom: 0;\n  -webkit-animation-delay: .25s;\n  animation-delay: .25s; }\n\n@-webkit-keyframes loader-12 {\n  0%, 100% {\n    box-shadow: -.5em 0 0 transparent;\n    background-color: currentcolor; }\n  50% {\n    box-shadow: -.5em 0 0 currentcolor;\n    background-color: transparent; } }\n\n@keyframes loader-12 {\n  0%, 100% {\n    box-shadow: -.5em 0 0 transparent;\n    background-color: currentcolor; }\n  50% {\n    box-shadow: -.5em 0 0 currentcolor;\n    background-color: transparent; } }\n\n.loader-13:before,\n.loader-13:after,\n.loader-13 {\n  border-radius: 50%;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: loader-13 1.8s infinite ease-in-out;\n  animation: loader-13 1.8s infinite ease-in-out; }\n\n.loader-13 {\n  color: currentcolor;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n  top: -1em; }\n\n.loader-13:before {\n  right: 100%;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.loader-13:after {\n  left: 100%; }\n\n.loader-13:before,\n.loader-13:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  width: inherit;\n  height: inherit; }\n\n@-webkit-keyframes loader-13 {\n  0%, 80%, 100% {\n    box-shadow: 0 1em 0 -1em; }\n  40% {\n    box-shadow: 0 1em 0 -.2em; } }\n\n@keyframes loader-13 {\n  0%, 80%, 100% {\n    box-shadow: 0 1em 0 -1em; }\n  40% {\n    box-shadow: 0 1em 0 -.2em; } }\n\n.loader-14 {\n  border-radius: 50%;\n  box-shadow: 0 1em 0 -.2em currentcolor;\n  position: relative;\n  -webkit-animation: loader-14 0.8s ease-in-out alternate infinite;\n  animation: loader-14 0.8s ease-in-out alternate infinite;\n  -webkit-animation-delay: 0.32s;\n  animation-delay: 0.32s;\n  top: -1em; }\n\n.loader-14:after,\n.loader-14:before {\n  content: '';\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  box-shadow: inherit;\n  -webkit-animation: inherit;\n  animation: inherit; }\n\n.loader-14:before {\n  left: -1em;\n  -webkit-animation-delay: 0.48s;\n  animation-delay: 0.48s; }\n\n.loader-14:after {\n  right: -1em;\n  -webkit-animation-delay: 0.16s;\n  animation-delay: 0.16s; }\n\n@-webkit-keyframes loader-14 {\n  0% {\n    box-shadow: 0 2em 0 -.2em currentcolor; }\n  100% {\n    box-shadow: 0 1em 0 -.2em currentcolor; } }\n\n@keyframes loader-14 {\n  0% {\n    box-shadow: 0 2em 0 -.2em currentcolor; }\n  100% {\n    box-shadow: 0 1em 0 -.2em currentcolor; } }\n\n.loader-15 {\n  background: currentcolor;\n  position: relative;\n  -webkit-animation: loader-15 1s ease-in-out infinite;\n  animation: loader-15 1s ease-in-out infinite;\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n  width: .25em;\n  height: .5em; }\n\n.loader-15:after,\n.loader-15:before {\n  content: '';\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  background: inherit;\n  -webkit-animation: inherit;\n  animation: inherit; }\n\n.loader-15:before {\n  right: .5em;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.loader-15:after {\n  left: .5em;\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n\n@-webkit-keyframes loader-15 {\n  0%, 100% {\n    box-shadow: 0 0 0 currentcolor, 0 0 0 currentcolor; }\n  50% {\n    box-shadow: 0 -.25em 0 currentcolor, 0 .25em 0 currentcolor; } }\n\n@keyframes loader-15 {\n  0%, 100% {\n    box-shadow: 0 0 0 currentcolor, 0 0 0 currentcolor; }\n  50% {\n    box-shadow: 0 -.25em 0 currentcolor, 0 .25em 0 currentcolor; } }\n\n.loader-16 {\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  border-radius: 50%; }\n\n.loader-16:before,\n.loader-16:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n  border-radius: 50%;\n  -webkit-animation: 1s spin linear infinite;\n  animation: 1s spin linear infinite; }\n\n.loader-16:before {\n  -webkit-transform: rotateX(70deg);\n  transform: rotateX(70deg); }\n\n.loader-16:after {\n  -webkit-transform: rotateY(70deg);\n  transform: rotateY(70deg);\n  -webkit-animation-delay: .4s;\n  animation-delay: .4s; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotateZ(0deg);\n    transform: translate(-50%, -50%) rotateZ(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotateZ(360deg);\n    transform: translate(-50%, -50%) rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotateZ(0deg);\n    transform: translate(-50%, -50%) rotateZ(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotateZ(360deg);\n    transform: translate(-50%, -50%) rotateZ(360deg); } }\n\n@-webkit-keyframes rotateccw {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n    transform: translate(-50%, -50%) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(-360deg);\n    transform: translate(-50%, -50%) rotate(-360deg); } }\n\n@keyframes rotateccw {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n    transform: translate(-50%, -50%) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(-360deg);\n    transform: translate(-50%, -50%) rotate(-360deg); } }\n\n@-webkit-keyframes spin {\n  0%, 100% {\n    box-shadow: .2em 0px 0 0px currentcolor; }\n  12% {\n    box-shadow: .2em .2em 0 0 currentcolor; }\n  25% {\n    box-shadow: 0 .2em 0 0px currentcolor; }\n  37% {\n    box-shadow: -.2em .2em 0 0 currentcolor; }\n  50% {\n    box-shadow: -.2em 0 0 0 currentcolor; }\n  62% {\n    box-shadow: -.2em -.2em 0 0 currentcolor; }\n  75% {\n    box-shadow: 0px -.2em 0 0 currentcolor; }\n  87% {\n    box-shadow: .2em -.2em 0 0 currentcolor; } }\n\n@keyframes spin {\n  0%, 100% {\n    box-shadow: .2em 0px 0 0px currentcolor; }\n  12% {\n    box-shadow: .2em .2em 0 0 currentcolor; }\n  25% {\n    box-shadow: 0 .2em 0 0px currentcolor; }\n  37% {\n    box-shadow: -.2em .2em 0 0 currentcolor; }\n  50% {\n    box-shadow: -.2em 0 0 0 currentcolor; }\n  62% {\n    box-shadow: -.2em -.2em 0 0 currentcolor; }\n  75% {\n    box-shadow: 0px -.2em 0 0 currentcolor; }\n  87% {\n    box-shadow: .2em -.2em 0 0 currentcolor; } }\n\n.loader-17 {\n  position: relative;\n  background-color: currentcolor;\n  border-radius: 50%; }\n\n.loader-17:after,\n.loader-17:before {\n  content: \"\";\n  position: absolute;\n  width: .25em;\n  height: .25em;\n  border-radius: 50%;\n  opacity: .8; }\n\n.loader-17:after {\n  left: -.5em;\n  top: -.25em;\n  background-color: currentcolor;\n  -webkit-transform-origin: .75em 1em;\n  transform-origin: .75em 1em;\n  -webkit-animation: loader-17 1s linear infinite;\n  animation: loader-17 1s linear infinite;\n  opacity: .6; }\n\n.loader-17:before {\n  left: -1.25em;\n  top: -.75em;\n  background-color: currentcolor;\n  -webkit-transform-origin: 1.5em 1em;\n  transform-origin: 1.5em 1em;\n  -webkit-animation: loader-17 2s linear infinite;\n  animation: loader-17 2s linear infinite; }\n\n@-webkit-keyframes loader-17 {\n  0% {\n    -webkit-transform: rotateZ(0deg) translate3d(0, 0, 0);\n    transform: rotateZ(0deg) translate3d(0, 0, 0); }\n  100% {\n    -webkit-transform: rotateZ(360deg) translate3d(0, 0, 0);\n    transform: rotateZ(360deg) translate3d(0, 0, 0); } }\n\n@keyframes loader-17 {\n  0% {\n    -webkit-transform: rotateZ(0deg) translate3d(0, 0, 0);\n    transform: rotateZ(0deg) translate3d(0, 0, 0); }\n  100% {\n    -webkit-transform: rotateZ(360deg) translate3d(0, 0, 0);\n    transform: rotateZ(360deg) translate3d(0, 0, 0); } }\n\n.loader-18 {\n  position: relative; }\n\n.loader-18:before,\n.loader-18:after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 50%;\n  border: .1em solid transparent;\n  border-bottom-color: currentcolor;\n  top: 0;\n  left: 0;\n  -webkit-animation: 1s loader-18 linear infinite;\n  animation: 1s loader-18 linear infinite; }\n\n.loader-18:before {\n  width: 1em;\n  height: 1em; }\n\n.loader-18:after {\n  width: .8em;\n  height: .8em;\n  top: .1em;\n  left: .1em;\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse; }\n\n@-webkit-keyframes loader-18 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-18 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.loader-19 {\n  border-top: .2em solid currentcolor;\n  border-right: .2em solid transparent;\n  -webkit-animation: loader-19 1s linear infinite;\n  animation: loader-19 1s linear infinite;\n  border-radius: 100%;\n  position: relative; }\n\n@-webkit-keyframes loader-19 {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes loader-19 {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.tc-pager {\n  text-align: right;\n  margin-top: 5px; }\n\n.tc-select {\n  display: inline; }\n\n.tc-table .el-table__body tr.current-row:hover {\n  background-color: #c7def5 !important; }\n\n.tc-table .el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row > td {\n  background-color: #c7def5; }\n\n@keyframes treeTableShow {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes treeTableShow {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.el-table td.el-table-column--selection, .el-table th.el-table-column--selection {\n  text-align: center !important; }\n\n.ms-tree-space {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 18px;\n  height: 14px; }\n  .ms-tree-space::before {\n    content: ''; }\n\n.processContainer {\n  width: 100%;\n  height: 100%; }\n\ntable td {\n  line-height: 26px; }\n\n.tree-ctrl {\n  position: relative;\n  cursor: pointer;\n  color: #2196f3;\n  margin-left: -18px; }\n", ""]);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("handsontable/dist/handsontable.full.css");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "\n\n.tc-hot-table.handsontable th:first-child,\n.tc-hot-table.handsontable td:first-of-type,\n.tc-hot-table.handsontable .htNoFrame + th,\n.tc-hot-table.handsontable .htNoFrame + td {\n  border-left: 1px solid #ddd;\n}\n.tc-hot-table.handsontable.htRowHeaders thead tr th:nth-child(2) {\n  border-left: 1px solid #ddd;\n}\n.tc-hot-table.handsontable tr:first-child th,\n.tc-hot-table.handsontable tr:first-child td {\n  border-top: 1px solid #ddd;\n}\n\n.tc-hot-table.handsontable th,\n.tc-hot-table.handsontable td {\n  border-right: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  height: 30px;\n  line-height: 30px;\n  empty-cells: show;\n  position: relative;\n  padding: 0 4px;\n  overflow: hidden;\n  outline-width: 0;\n  white-space: pre-line;\n}\n.tc-hot-table.handsontable th:last-child{\n  border-right: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.tc-hot-table.handsontable th.disabled,\n.tc-hot-table.handsontable td.disabled {\n  background-color: #fafafa;\n  color: #999999;\n}", ""]);



/***/ }),
/* 19 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "\n.ti-tag-input[data-v-4c74470c] {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit;\n}\n.ti-tag-input[data-v-4c74470c]::-ms-clear {\n  display: none;\n}\ninput[data-v-4c74470c]:focus {\n  outline: none;\n}\ninput[disabled][data-v-4c74470c] {\n  background-color: transparent;\n}\n", ""]);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/badge/src/badge.vue?vue&type=template&id=0133d7b8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-badge",
    _vm._g(
      _vm._b({ attrs: { value: _vm.value } }, "el-badge", _vm.$attrs, false),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/badge/src/badge.vue?vue&type=template&id=0133d7b8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/badge/src/badge.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var badgevue_type_script_lang_js_ = ({
  name: 'TcBadge',
  props: {
    value: { type: Object | String | Number, default: null }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/badge/src/badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_badgevue_type_script_lang_js_ = (badgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/badge/src/badge.vue





/* normalize component */

var component = normalizeComponent(
  src_badgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/badge/src/badge.vue"
/* harmony default export */ var badge = (component.exports);
// CONCATENATED MODULE: ./packages/badge/index.js


badge.install = function (Vue) {
  Vue.component(badge.name, badge);
};

/* harmony default export */ var packages_badge = (badge);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/block/src/block.vue?vue&type=template&id=35b4c30c&
var blockvue_type_template_id_35b4c30c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "blockContainer",
      staticClass: "tc-block-container",
      class: _vm.boxShadow
    },
    [
      _vm.showTitle
        ? _c(
            "div",
            { staticClass: "tc-block-title", style: _vm.titleStyle },
            [
              _vm._t("title", [
                _c("span", { staticClass: "tc-block-title-left" }),
                _c("span", [_vm._v(_vm._s(_vm.title))])
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        "div",
        {
          staticClass: "tc-block-content",
          class: _vm.contentClass,
          style: _vm.contentStyle
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var blockvue_type_template_id_35b4c30c_staticRenderFns = []
blockvue_type_template_id_35b4c30c_render._withStripped = true


// CONCATENATED MODULE: ./packages/block/src/block.vue?vue&type=template&id=35b4c30c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/block/src/block.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blockvue_type_script_lang_js_ = ({
  name: 'TcBlock',
  props: {
    title: { type: String, default: '' },
    contentStyle: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    shadow: { type: String, default: 'always', validator: function validator(value) {
        return ['always', 'hover', 'never'].indexOf(value) !== -1;
      } }
  },
  data: function data() {
    return {
      height: 100,
      titleHeight: 25
    };
  },
  computed: {
    titleStyle: function titleStyle() {
      return {
        height: this.titleHeight + 'px',
        lineHeight: this.titleHeight + 'px'
      };
    },
    showTitle: function showTitle() {
      if (this.$slots.title !== undefined && this.$slots.title !== null) {
        return true;
      }
      return this.title !== '' && this.title !== null && this.title !== undefined;
    },
    boxShadow: function boxShadow() {
      if (this.shadow === 'always') {
        return 'tc-box-shadow';
      }
      if (this.shadow === 'hover') {
        return 'tc-box-shadow-hover';
      }
    }
  },
  mounted: function mounted() {
    this.calcHeight();
  },

  methods: {
    calcHeight: function calcHeight() {
      var height = this.$refs.blockContainer.style.height;
      this.height = parseInt(height, 10);
    }
  }
});
// CONCATENATED MODULE: ./packages/block/src/block.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_blockvue_type_script_lang_js_ = (blockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/block/src/block.vue





/* normalize component */

var block_component = normalizeComponent(
  src_blockvue_type_script_lang_js_,
  blockvue_type_template_id_35b4c30c_render,
  blockvue_type_template_id_35b4c30c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var block_api; }
block_component.options.__file = "packages/block/src/block.vue"
/* harmony default export */ var block = (block_component.exports);
// CONCATENATED MODULE: ./packages/block/index.js


block.install = function (Vue) {
  Vue.component(block.name, block);
};

/* harmony default export */ var packages_block = (block);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ca859fb4&
var buttonvue_type_template_id_ca859fb4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-button",
    _vm._g(
      _vm._b(
        {
          ref: "mainButton",
          staticClass: "tc-button",
          attrs: {
            type: _vm.type,
            icon: _vm.icon,
            "native-type": _vm.nativeType,
            vevent: _vm.vevent
          }
        },
        "el-button",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var buttonvue_type_template_id_ca859fb4_staticRenderFns = []
buttonvue_type_template_id_ca859fb4_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ca859fb4&

// CONCATENATED MODULE: ./src/utils/common.js
function isEmpty(obj) {
  return obj == null || obj === undefined || obj === '';
}

function isArray(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object array]';
}

function isString(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object string]';
}

function isNumber(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object number]';
}

function isBoolean(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object boolean]';
}

function isUndefined(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object undefined]';
}

function isNull(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object null]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object object]';
}

function isFunction(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object function]';
}

function isDate(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object date]';
}
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(1);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);

// CONCATENATED MODULE: ./src/utils/random/uuid.js



var buf;
var bufIdx = 0;
var hexBytes = [];
var uuid_i;

// Improve memory performance by decreasing this number (>=16)
// or improve speed by increasing this number (try 16384)
uuid.BUFFER_SIZE = 512;

// Binary uuids (even faster)
uuid.bin = uuidbin;

// Test for uuid
uuid.test = isUUID;

// Cache toString(16)
// This is massively impactful on performance
for (uuid_i = 0; uuid_i < 256; uuid_i++) {
  // This is a fast way to ensure a 2 char hex byte
  hexBytes[uuid_i] = (uuid_i + 0x100).toString(16).substr(1);
}

// Backup method
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// uuid.test
function isUUID(uuid) {
  if (typeof uuid === 'string') {
    return (/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid)
    );
  }
}



// Use best RNG as possible
function randomBytes(n) {
  var r;
  if (typeof external_crypto_default.a !== 'undefined') {
    if (typeof buf === 'undefined' || bufIdx + n > uuid.BUFFER_SIZE) {
      bufIdx = 0;
      if (external_crypto_default.a.getRandomValues) {
        // eslint-disable-next-line no-undef
        buf = new Uint8Array(uuid.BUFFER_SIZE);
        external_crypto_default.a.getRandomValues(buf);
      } else if (external_crypto_default.a.randomBytes) {
        buf = external_crypto_default.a.randomBytes(uuid.BUFFER_SIZE);
      } else {
        throw new Error('Non-standard crypto library');
      }
    }
    // eslint-disable-next-line no-return-assign
    return buf.slice(bufIdx, bufIdx += n);
  } else {
    r = [];
    for (uuid_i = 0; uuid_i < n; uuid_i++) {
      r.push(getRandomInt(0, 255));
    }
    return r;
  }
}

// uuid.bin
function uuidbin() {
  var b = randomBytes(16);
  b[6] = b[6] & 0x0f | 0x40;
  b[8] = b[8] & 0x3f | 0x80;
  return b;
}

// String UUIDv4 (Random)
function uuid() {
  var b = uuidbin();
  return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + '-' + hexBytes[b[4]] + hexBytes[b[5]] + '-' + hexBytes[b[6]] + hexBytes[b[7]] + '-' + hexBytes[b[8]] + hexBytes[b[9]] + '-' + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
}
// CONCATENATED MODULE: ./src/utils/random/index.js


function next() {
  return Math.random();
}
// 随机范围
function nextInt(min, max) {
  if (isEmpty(min) && isEmpty(max)) {
    return parseInt(next().toString().replace('0.', ''), 10);
  }
  // 小于max
  if (!isEmpty(min) && isEmpty(max)) {
    return parseInt(next() * min, 10);
  }
  // 大于等于min 小于max
  if (!isEmpty(min) && !isEmpty(max)) {
    return parseInt(next() * (max - min) + min, 10);
  }
}

// 随机位数
function nextLength(min, max) {
  if (isEmpty(min) && isEmpty(max)) {
    min = nextInt(1, 24);
  }
  // 小于max
  if (!isEmpty(min) && isEmpty(max)) {
    if (min === 1) {
      return nextInt(10);
    }
    return nextInt(Math.pow(10, min - 1), Math.pow(10, min));
  }
  // 大于等于min 小于等于max
  if (!isEmpty(min) && !isEmpty(max)) {
    if (min === 1) {
      return nextInt(0, Math.pow(10, max));
    }
    return nextInt(Math.pow(10, min - 1), Math.pow(10, max));
  }
}

function nextFloat(leftLen, rightLen) {
  var leftNum = 0;
  var rightNum = 0;
  if (isEmpty(leftLen)) {
    leftNum = nextLength(nextInt(1, 10));
  } else {
    leftNum = nextLength(leftLen);
  }

  if (isEmpty(rightLen)) {
    rightLen = 2;
  }
  rightNum = nextLength(rightLen);
  return parseFloat(leftNum + '.' + rightNum);
}

var random = {
  next: next,
  nextInt: nextInt,
  nextLength: nextLength,
  nextFloat: nextFloat,
  isUUID: isUUID,
  uuid: uuid
};

/* harmony default export */ var utils_random = (random);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(7);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/utils/date.js


function formatDate(date) {
  return external_moment_default()(date).format('YYYY-MM-DD')
}
function formatDateTime(date) {
  return external_moment_default()(date).format('YYYY-MM-DD HH:mm:ss')
}

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(4);
var external_element_ui_default = /*#__PURE__*/__webpack_require__.n(external_element_ui_);

// CONCATENATED MODULE: ./src/utils/message-box.js


function message_box_confirm(title) {
  var options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  };
  return new Promise(function (resolve, reject) {
    external_element_ui_["MessageBox"].confirm(title, '警告', options).then(function () {
      resolve();
    }).catch(function () {
      reject();
    });
  });
}


// CONCATENATED MODULE: ./src/utils/find-components.js
/**
 * 由一个组件，向下找到最近的指定组件
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
 */
function findComponentDownward(context, componentName) {
  var childrens = context.$children;
  var children = null;

  if (childrens.length) {
    for (var i = 0; i < childrens.length; i++) {
      var child = childrens[i];
      var name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}


// 由一个组件，向上找到最近的指定组件
function findComponentUpward(context, componentName) {
  var parent = context.$parent;
  var name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}



// 由一个组件，向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
  var parents = [];
  var parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}


// 由一个组件，向下找到所有指定的组件
function findComponentsDownward(context, componentName) {
  return context.$children.reduce(function (components, child) {
    if (child.$options.name === componentName) components.push(child);
    var foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}



// 由一个组件，找到指定组件的兄弟组件
// exceptMe，是否把本身除外
function findBrothersComponents(context, componentName) {
  var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var res = context.$parent.$children.filter(function (item) {
    return item.$options.name === componentName;
  });
  var index = res.findIndex(function (item) {
    return item._uid === context._uid;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}

// CONCATENATED MODULE: ./src/utils/index.js








// CONCATENATED MODULE: ./src/mixins/vevent-mixin.js

/* harmony default export */ var vevent_mixin = ({
  computed: {
    vevent: function vevent() {
      var eventName = (Object.keys(this.$listeners) || [''])[0];
      if (isEmpty(eventName)) {
        return null;
      }
      if (isEmpty(this.$listeners[eventName])) {
        return null;
      }
      return this.$listeners[eventName]['fns'].name.replace(' ', '_');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'TcButton',
  componentName: 'TcButton',
  mixins: [vevent_mixin],
  props: {
    type: { type: String, default: 'default' },
    icon: { type: String, default: '' },
    nativeType: { type: String, default: 'button' },
    forceEnabled: { type: Boolean, default: false }
  },
  data: function data() {
    return {
      defaultDisbled: true
    };
  },
  watch: {
    'tcDialog.visible': function tcDialogVisible(newVal) {
      var _this = this;

      this.$nextTick(function () {
        if (newVal) {
          _this.doForceEndabled();
        }
      });
    },
    'forceEnabled': function forceEnabled(newVal) {
      if (this.defaultDisbled) {
        if (newVal) {
          this.$refs.mainButton.$el.disabled = false;
          this.$refs.mainButton.$el.className = this.$refs.mainButton.$el.className.replace(' is-disabled', '');
        } else {
          this.$refs.mainButton.$el.disabled = true;
          this.$refs.mainButton.$el.className += ' is-disabled';
        }
      }
    }
  },
  inject: {
    tcDialog: {
      default: ''
    }
  },
  computed: {},
  mounted: function mounted() {
    this.doForceEndabled();
  },

  methods: {
    doForceEndabled: function doForceEndabled() {
      if (this.forceEnabled) {
        this.$refs.mainButton.$el.disabled = false;
        this.$refs.mainButton.$el.className = this.$refs.mainButton.$el.className.replace(' is-disabled', '');
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var button_component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_ca859fb4_render,
  buttonvue_type_template_id_ca859fb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_api; }
button_component.options.__file = "packages/button/src/button.vue"
/* harmony default export */ var src_button = (button_component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button);
};

/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button-group/src/button-group.vue?vue&type=template&id=82222334&
var button_groupvue_type_template_id_82222334_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-button-group",
    _vm._b(
      { staticClass: "tc-button-group" },
      "el-button-group",
      _vm.$attrs,
      false
    ),
    [_vm._t("default")],
    2
  )
}
var button_groupvue_type_template_id_82222334_staticRenderFns = []
button_groupvue_type_template_id_82222334_render._withStripped = true


// CONCATENATED MODULE: ./packages/button-group/src/button-group.vue?vue&type=template&id=82222334&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button-group/src/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: 'TcButtonGroup',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/button-group/src/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button-group/src/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_82222334_render,
  button_groupvue_type_template_id_82222334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_group_api; }
button_group_component.options.__file = "packages/button-group/src/button-group.vue"
/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./packages/button-group/index.js


button_group.install = function (Vue) {
  Vue.component(button_group.name, button_group);
};

/* harmony default export */ var packages_button_group = (button_group);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox.vue?vue&type=template&id=d0387074&
var checkboxvue_type_template_id_d0387074_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-checkbox",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-checkbox",
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-checkbox",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var checkboxvue_type_template_id_d0387074_staticRenderFns = []
checkboxvue_type_template_id_d0387074_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue?vue&type=template&id=d0387074&

// CONCATENATED MODULE: ./src/mixins/vname-mixin.js
/* harmony default export */ var vname_mixin = ({
  computed: {
    vname: function vname() {
      var vmodel = this.$vnode.data.model || {};
      var expression = vmodel.expression || '';
      return expression.replace('.', '_');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'TcCheckbox',
  mixins: [vname_mixin],
  props: {
    value: { type: Boolean, required: false, default: false }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  src_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_d0387074_render,
  checkboxvue_type_template_id_d0387074_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_api; }
checkbox_component.options.__file = "packages/checkbox/src/checkbox.vue"
/* harmony default export */ var src_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./packages/checkbox/index.js


src_checkbox.install = function (Vue) {
  Vue.component(src_checkbox.name, src_checkbox);
};

/* harmony default export */ var packages_checkbox = (src_checkbox);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox-button/src/checkbox-button.vue?vue&type=template&id=1d6048aa&
var checkbox_buttonvue_type_template_id_1d6048aa_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-checkbox-button",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-checkbox-button",
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-checkbox-button",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var checkbox_buttonvue_type_template_id_1d6048aa_staticRenderFns = []
checkbox_buttonvue_type_template_id_1d6048aa_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox-button/src/checkbox-button.vue?vue&type=template&id=1d6048aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox-button/src/checkbox-button.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var checkbox_buttonvue_type_script_lang_js_ = ({
  name: 'TcCheckboxButton',
  mixins: [vname_mixin],
  props: {
    value: { type: String, required: false, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/checkbox-button/src/checkbox-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkbox_buttonvue_type_script_lang_js_ = (checkbox_buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox-button/src/checkbox-button.vue





/* normalize component */

var checkbox_button_component = normalizeComponent(
  src_checkbox_buttonvue_type_script_lang_js_,
  checkbox_buttonvue_type_template_id_1d6048aa_render,
  checkbox_buttonvue_type_template_id_1d6048aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_button_api; }
checkbox_button_component.options.__file = "packages/checkbox-button/src/checkbox-button.vue"
/* harmony default export */ var checkbox_button = (checkbox_button_component.exports);
// CONCATENATED MODULE: ./packages/checkbox-button/index.js


checkbox_button.install = function (Vue) {
  Vue.component(checkbox_button.name, checkbox_button);
};

/* harmony default export */ var packages_checkbox_button = (checkbox_button);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox-group/src/checkbox-group.vue?vue&type=template&id=c7b68974&
var checkbox_groupvue_type_template_id_c7b68974_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-checkbox-group",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-checkbox-group",
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-checkbox-group",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm._l(_vm.providers, function(item) {
        return _c(
          "el-checkbox-button",
          {
            key: item.id,
            staticClass: "tc-checkbox-button",
            attrs: { label: item.value }
          },
          [_vm._v(_vm._s(item.text))]
        )
      }),
      _vm._t("default")
    ],
    2
  )
}
var checkbox_groupvue_type_template_id_c7b68974_staticRenderFns = []
checkbox_groupvue_type_template_id_c7b68974_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox-group/src/checkbox-group.vue?vue&type=template&id=c7b68974&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox-group/src/checkbox-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var checkbox_groupvue_type_script_lang_js_ = ({
  name: 'TcCheckboxGroup',
  mixins: [vname_mixin],
  props: {
    providers: { type: Array, default: null },
    value: { type: String | Array, required: false, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/checkbox-group/src/checkbox-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkbox_groupvue_type_script_lang_js_ = (checkbox_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox-group/src/checkbox-group.vue





/* normalize component */

var checkbox_group_component = normalizeComponent(
  src_checkbox_groupvue_type_script_lang_js_,
  checkbox_groupvue_type_template_id_c7b68974_render,
  checkbox_groupvue_type_template_id_c7b68974_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_group_api; }
checkbox_group_component.options.__file = "packages/checkbox-group/src/checkbox-group.vue"
/* harmony default export */ var checkbox_group = (checkbox_group_component.exports);
// CONCATENATED MODULE: ./packages/checkbox-group/index.js


checkbox_group.install = function (Vue) {
  Vue.component(checkbox_group.name, checkbox_group);
};

/* harmony default export */ var packages_checkbox_group = (checkbox_group);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/date-picker.vue?vue&type=template&id=039ea8cc&
var date_pickervue_type_template_id_039ea8cc_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-date-picker",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-date-picker",
          staticStyle: { width: "100%" },
          attrs: {
            value: _vm.value,
            vname: _vm.vname,
            type: _vm.type,
            "value-format": "yyyy-MM-dd"
          }
        },
        "el-date-picker",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
}
var date_pickervue_type_template_id_039ea8cc_staticRenderFns = []
date_pickervue_type_template_id_039ea8cc_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/date-picker.vue?vue&type=template&id=039ea8cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/date-picker.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var date_pickervue_type_script_lang_js_ = ({
  name: 'TcDatePicker',
  mixins: [vname_mixin],
  props: {
    type: { type: String, default: 'date' },
    value: { type: Object | String | Number, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/date-picker/src/date-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_date_pickervue_type_script_lang_js_ = (date_pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/date-picker.vue





/* normalize component */

var date_picker_component = normalizeComponent(
  src_date_pickervue_type_script_lang_js_,
  date_pickervue_type_template_id_039ea8cc_render,
  date_pickervue_type_template_id_039ea8cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_picker_api; }
date_picker_component.options.__file = "packages/date-picker/src/date-picker.vue"
/* harmony default export */ var date_picker = (date_picker_component.exports);
// CONCATENATED MODULE: ./packages/date-picker/index.js


date_picker.install = function (Vue) {
  Vue.component(date_picker.name, date_picker);
};

/* harmony default export */ var packages_date_picker = (date_picker);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-time-picker/src/date-time-picker.vue?vue&type=template&id=3d122774&
var date_time_pickervue_type_template_id_3d122774_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-date-picker",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-date-time-picker",
          staticStyle: { width: "100%" },
          attrs: {
            value: _vm.value,
            vname: _vm.vname,
            type: _vm.type,
            "value-format": "yyyy-MM-dd HH:mm:ss"
          }
        },
        "el-date-picker",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
}
var date_time_pickervue_type_template_id_3d122774_staticRenderFns = []
date_time_pickervue_type_template_id_3d122774_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-time-picker/src/date-time-picker.vue?vue&type=template&id=3d122774&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-time-picker/src/date-time-picker.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var date_time_pickervue_type_script_lang_js_ = ({
  name: 'TcDateTimePicker',
  mixins: [vname_mixin],
  props: {
    type: { type: String, default: 'datetime' },
    value: { type: Object | String | Number, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/date-time-picker/src/date-time-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_date_time_pickervue_type_script_lang_js_ = (date_time_pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-time-picker/src/date-time-picker.vue





/* normalize component */

var date_time_picker_component = normalizeComponent(
  src_date_time_pickervue_type_script_lang_js_,
  date_time_pickervue_type_template_id_3d122774_render,
  date_time_pickervue_type_template_id_3d122774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_time_picker_api; }
date_time_picker_component.options.__file = "packages/date-time-picker/src/date-time-picker.vue"
/* harmony default export */ var date_time_picker = (date_time_picker_component.exports);
// CONCATENATED MODULE: ./packages/date-time-picker/index.js


date_time_picker.install = function (Vue) {
  Vue.component(date_time_picker.name, date_time_picker);
};

/* harmony default export */ var packages_date_time_picker = (date_time_picker);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&
var dialogvue_type_template_id_458af334_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ]
    },
    [
      _c(
        "el-dialog",
        _vm._g(
          _vm._b(
            {
              directives: [
                { name: "el-drag-dialog", rawName: "v-el-drag-dialog" }
              ],
              ref: "elDialog",
              attrs: {
                width: _vm.width,
                visible: _vm.visible,
                "close-on-click-modal": false,
                "close-on-press-escape": false,
                top: _vm.marginTop,
                "before-close": _vm.dialogBeforeClose,
                "custom-class": "tc-dialog-base"
              },
              on: {
                opened: _vm.opened,
                closed: _vm.closed,
                open: _vm.open,
                close: _vm.close
              }
            },
            "el-dialog",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [
          _c(
            "div",
            {
              staticClass: "tc-dialog-title",
              attrs: { slot: "title" },
              slot: "title"
            },
            [
              _c("i", { class: _vm.icon }),
              _vm._t("title", [_vm._v(_vm._s(_vm.title))])
            ],
            2
          ),
          _c(
            "div",
            {
              staticClass: "tc-dialog-body-container",
              style: _vm.dialogHeight
            },
            [_vm._t("default", null, { visible: _vm.visible })],
            2
          ),
          _c("div", { style: _vm.fixedButtonStyle })
        ]
      )
    ],
    1
  )
}
var dialogvue_type_template_id_458af334_staticRenderFns = []
dialogvue_type_template_id_458af334_render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&

// CONCATENATED MODULE: ./src/directives/el-dragDialog/drag.js
/* harmony default export */ var drag = ({
  bind: function bind(el, binding, vnode) {
    var dialogHeaderEl = el.querySelector('.el-dialog__header');
    var dragDom = el.querySelector('.el-dialog');
    dialogHeaderEl.style.cssText += ';cursor:move;';
    // dragDom.style.cssText += ''
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    var getStyle = function () {
      if (window.document.currentStyle) {
        return function (dom, attr) {
          return dom.currentStyle[attr];
        };
      } else {
        return function (dom, attr) {
          return getComputedStyle(dom, false)[attr];
        };
      }
    }();

    dialogHeaderEl.onmousedown = function (e) {
      // 鼠标按下，计算当前元素距离可视区的距离
      var disX = e.clientX - dialogHeaderEl.offsetLeft;
      var disY = e.clientY - dialogHeaderEl.offsetTop;

      var dragDomWidth = dragDom.offsetWidth;
      var dragDomHeight = dragDom.offsetHeight;

      var screenWidth = document.body.clientWidth;
      var screenHeight = document.body.clientHeight;

      var minDragDomLeft = dragDom.offsetLeft;
      var maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

      var minDragDomTop = dragDom.offsetTop;
      var maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;

      // 获取到的值带px 正则匹配替换
      var styL = getStyle(dragDom, 'left');
      var styT = getStyle(dragDom, 'top');
      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100); // eslint-disable-line
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100); // eslint-disable-line
      } else {
        styL = +styL.replace(/\px/g, '');
        styT = +styT.replace(/\px/g, '');
      }

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        var left = e.clientX - disX;
        var top = e.clientY - disY;

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        dragDom.style.cssText += ';left:' + (left + styL) + 'px;top:' + (top + styT) + 'px;';

        // emit onDrag event
        vnode.child.$emit('dragDialog');
      };

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});
// CONCATENATED MODULE: ./src/directives/el-dragDialog/index.js


var el_dragDialog_install = function install(Vue) {
  Vue.directive('el-drag-dialog', drag);
};

if (window.Vue) {
  window['el-drag-dialog'] = drag;
  Vue.use(el_dragDialog_install); // eslint-disable-line
}

drag.install = el_dragDialog_install;
/* harmony default export */ var el_dragDialog = (drag);
// EXTERNAL MODULE: external "element-ui/src/mixins/emitter"
var emitter_ = __webpack_require__(9);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // base on element-ui



/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  name: 'TcDialog',
  mixins: [emitter_default.a],
  directives: { elDragDialog: el_dragDialog },
  props: {
    title: { type: String, required: false, default: 'dialog' },
    icon: { type: String, required: false, default: 'el-icon-time' },
    visible: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: '50%' },
    height: { type: Number | String, required: false, default: -1 },
    loading: { type: Boolean, required: false, default: false },
    loadingAutoClose: { type: Boolean, required: false, default: true },
    loadingText: { type: String, required: false, default: '加载中' },
    loadingOption: { type: Object, required: false, default: null }

  },
  provide: function provide() {
    return {
      tcDialog: this
    };
  },
  data: function data() {
    return {
      titleHeight: 40,
      dialogHeight: '',
      marginTop: '',
      currentHeight: 0,
      fixedBottomHeight: 0,
      isFirstOpen: true,
      loadingInstance: null
    };
  },

  computed: {
    fixedButtonStyle: function fixedButtonStyle() {
      return {
        height: this.fixedBottomHeight + 'px'
      };
    }
  },
  watch: {
    visible: function visible(val) {
      this.$emit('update:visible', val);
    }
  },
  mounted: function mounted() {
    this.calcRender();
  },
  destroyed: function destroyed() {},

  methods: {
    calcRender: function calcRender() {
      this.calcHeight();
      this.calcDialogHeight();
      this.calcMarginTop();
    },
    opened: function opened() {
      // 计算底部
      this.calcFixedBottom();

      // 调用子级的opened
      this.childrenOpened();
      if (this.loading && this.loadingAutoClose) {
        this.closeLoading();
      }
      this.broadcast('TcButton', 'tcDialogOpened');
    },
    open: function open() {
      // loading且不是第一次打开，第一次打开loading，会在后面
      if (this.loading) {
        this.startLoading();
      }
      this.childrenOpen();
    },
    closed: function closed() {
      // 调用子级的closed
      this.childrenClosed();
    },
    close: function close() {
      this.childrenClose();
    },
    childrenOpened: function childrenOpened() {
      var openedCall = this.getChildrenMethod('opened');
      if (openedCall === null) {
        return;
      }
      if (this.loading) {
        openedCall(this.isFirstOpen, this.loadingInstance);
      } else {
        openedCall(this.isFirstOpen);
      }
      this.isFirstOpen = false;
    },
    childrenOpen: function childrenOpen() {
      var openCall = this.getChildrenMethod('open');
      if (openCall === null) {
        return;
      }
      openCall();
    },
    childrenClosed: function childrenClosed() {
      var closedCall = this.getChildrenMethod('closed');
      if (closedCall === null) {
        return;
      }
      closedCall();
    },
    childrenClose: function childrenClose() {
      var closeCall = this.getChildrenMethod('close');
      if (closeCall === null) {
        return;
      }
      closeCall();
    },
    startLoading: function startLoading() {
      var option = this.loadingOption || {
        lock: true,
        text: this.loadingText,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      };
      this.loadingInstance = this.$loading(option);
    },
    closeLoading: function closeLoading() {
      this.loadingInstance.close();
    },
    calcFixedBottom: function calcFixedBottom() {
      var tcFixedBottom = findComponentDownward(this.$refs.elDialog, 'TcFixedBottom');
      if (tcFixedBottom === null) {
        return;
      }
      this.fixedBottomHeight = tcFixedBottom.$el.offsetHeight;
      this.calcDialogHeight();
    },
    calcDialogHeight: function calcDialogHeight() {
      this.dialogHeight = 'height:' + (this.currentHeight - this.titleHeight - this.fixedBottomHeight) + 'px';
    },
    calcMarginTop: function calcMarginTop() {
      this.marginTop = (window.innerHeight - this.currentHeight) / 2 + 'px';
    },
    calcHeight: function calcHeight() {
      this.currentHeight = 0;
      if (this.height.indexOf('%') > 0) {
        this.currentHeight = window.innerHeight * parseFloat(this.height) / 100;
      } else {
        this.currentHeight = Number.parseInt(this.height, 10);
      }
    },
    dialogBeforeClose: function dialogBeforeClose(done) {
      // 先向下找到eldialog，在找到子级即可
      var beforeCloseCall = this.getChildrenMethod('beforeClose');
      if (beforeCloseCall === null) {
        done(true);
        return;
      }
      var result = beforeCloseCall();
      if (result === false) {
        done(false);
        return;
      }
      done(true);
    },
    getChildrenMethod: function getChildrenMethod(methodName) {
      var dialogChildren = this.$refs.elDialog.$children;
      if (dialogChildren === null || dialogChildren.length <= 0) {
        return null;
      }

      var methodNameCall = dialogChildren[0][methodName];
      if (methodNameCall === undefined) {
        return null;
      }
      return methodNameCall;
    }
  }
});
// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue





/* normalize component */

var dialog_component = normalizeComponent(
  src_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_458af334_render,
  dialogvue_type_template_id_458af334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dialog_api; }
dialog_component.options.__file = "packages/dialog/src/dialog.vue"
/* harmony default export */ var dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js


dialog.install = function (Vue) {
  Vue.component(dialog.name, dialog);
};

/* harmony default export */ var packages_dialog = (dialog);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/edit-table/src/edit-table.vue?vue&type=template&id=09597306&
var edit_tablevue_type_template_id_09597306_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "tc-table",
        _vm._g(
          _vm._b(
            {
              staticClass: "tc-edit-table",
              attrs: {
                data: _vm.formatData,
                columns: _vm.columns,
                border: _vm.border,
                stripe: _vm.stripe,
                selection: _vm.selection,
                sequence: _vm.sequence,
                fit: _vm.fit
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(ref) {
                      var value = ref.value
                      var columnName = ref.columnName
                      var rowData = ref.rowData
                      var column = ref.column
                      var scope = ref.scope
                      return [
                        !_vm.toObject(column).editable
                          ? _vm._t(
                              "default",
                              [_c("span", [_vm._v(_vm._s(value))])],
                              {
                                value: value,
                                columnName: columnName,
                                rowData: rowData,
                                column: column,
                                scope: scope
                              }
                            )
                          : _vm._e(),
                        _vm.toObject(column).editable
                          ? _vm._t(
                              "editable",
                              [
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "editable-control": _vm.isSignleMode,
                                      "editable-container": !_vm.isSignleMode
                                    }
                                  },
                                  [
                                    _vm.toObject(column).type === "date"
                                      ? _c("tc-date-picker", {
                                          attrs: { type: "date", size: "mini" },
                                          model: {
                                            value: scope.row[columnName],
                                            callback: function($$v) {
                                              _vm.$set(
                                                scope.row,
                                                columnName,
                                                $$v
                                              )
                                            },
                                            expression: "scope.row[columnName]"
                                          }
                                        })
                                      : _vm.toObject(column).type === "select"
                                      ? _c("tc-select", {
                                          attrs: {
                                            providers: _vm.toObject(column)
                                              .providers,
                                            size: "mini"
                                          },
                                          model: {
                                            value: scope.row[columnName],
                                            callback: function($$v) {
                                              _vm.$set(
                                                scope.row,
                                                columnName,
                                                $$v
                                              )
                                            },
                                            expression: "scope.row[columnName]"
                                          }
                                        })
                                      : _vm.toObject(column).type === "checkbox"
                                      ? _c("tc-checkbox", {
                                          attrs: { size: "mini" },
                                          model: {
                                            value: scope.row[columnName],
                                            callback: function($$v) {
                                              _vm.$set(
                                                scope.row,
                                                columnName,
                                                $$v
                                              )
                                            },
                                            expression: "scope.row[columnName]"
                                          }
                                        })
                                      : _c("tc-input", {
                                          attrs: { type: "text", size: "mini" },
                                          model: {
                                            value: scope.row[columnName],
                                            callback: function($$v) {
                                              _vm.$set(
                                                scope.row,
                                                columnName,
                                                $$v
                                              )
                                            },
                                            expression: "scope.row[columnName]"
                                          }
                                        })
                                  ],
                                  1
                                ),
                                _c(
                                  "span",
                                  {
                                    class: {
                                      "editable-span": _vm.isSignleMode,
                                      "editable-span-hide": !_vm.isSignleMode
                                    }
                                  },
                                  [_vm._v(_vm._s(value))]
                                )
                              ],
                              {
                                value: value,
                                columnName: columnName,
                                rowData: rowData,
                                column: column,
                                scope: scope
                              }
                            )
                          : _vm._e()
                      ]
                    }
                  }
                ],
                null,
                true
              )
            },
            "tc-table",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var edit_tablevue_type_template_id_09597306_staticRenderFns = []
edit_tablevue_type_template_id_09597306_render._withStripped = true


// CONCATENATED MODULE: ./packages/edit-table/src/edit-table.vue?vue&type=template&id=09597306&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./packages/edit-table/src/eval.js



function eval_formatData(data) {
  var index = 0;
  Array.from(data).forEach(function (row) {
    external_vue_default.a.set(row, 'index', index);
    external_vue_default.a.set(row, 'disabled', row.disabled);
    index++;
  });
  return data;
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=template&id=493fe34e&
var tablevue_type_template_id_493fe34e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-table",
        _vm._g(
          _vm._b(
            {
              ref: "eltable",
              staticClass: "tc-table",
              attrs: {
                data: _vm.formatData,
                border: _vm.border,
                stripe: _vm.stripe,
                fit: _vm.fit,
                "empty-text": "",
                "highlight-current-row": ""
              },
              on: {
                "selection-change": _vm.myHandleSelectionChange,
                "current-change": _vm.myHandleCurrentChange,
                select: _vm.myHandleSelect,
                "row-click": _vm.myRowClick,
                "select-all": _vm.myHandleSelectAll
              }
            },
            "el-table",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [
          _vm.selection
            ? _c("el-table-column", {
                attrs: { type: "selection", width: "45", align: "center" }
              })
            : _vm._e(),
          _vm.sequence
            ? _c("el-table-column", {
                attrs: { label: "序号", align: "center", width: "55" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _vm._v(
                            "\n        " + _vm._s(scope.$index + 1) + "\n      "
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  4285023353
                )
              })
            : _vm._e(),
          _vm._l(_vm.columnFormate, function(column) {
            return _c("el-table-column", {
              key: column.name,
              attrs: {
                label: column.text,
                width: column.width,
                align: column.align == null ? "center" : column.align
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm._t(
                          "default",
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(scope.row[column.name]) +
                                "\n        "
                            )
                          ],
                          {
                            value: scope.row[column.name],
                            columnName: column.name,
                            rowData: scope.row,
                            column: column,
                            scope: scope
                          }
                        )
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          }),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  )
}
var tablevue_type_template_id_493fe34e_staticRenderFns = []
tablevue_type_template_id_493fe34e_render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=template&id=493fe34e&

// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: 'TcTable',
  props: {
    data: { type: [Array, Object], required: false, default: null },
    sequence: { type: Boolean, required: false, default: true },
    border: { type: Boolean, required: false, default: true },
    stripe: { type: Boolean, required: false, default: true },
    fit: { type: Boolean, required: false, default: true },
    selection: { type: Boolean, required: false, default: false },
    selectionType: { type: String, required: false, default: 'single' },
    columns: { type: Array, default: function _default() {
        return [];
      } }
  },
  data: function data() {
    return {
      currentRow: null,
      multipleSelection: []
    };
  },
  watch: {
    'data': function data() {
      this.currentRow = null;
    }
  },
  computed: {
    formatData: function formatData() {
      return this.data;
    },
    columnFormate: function columnFormate() {
      return this.columns.filter(function (item) {
        return !item.hideen;
      });
    }
  },
  methods: {
    setCurrentRow: function setCurrentRow(currentRow) {
      if (this.currentRow === null) {
        this.currentRow = currentRow;
      }
      this.$refs.eltable.setCurrentRow(currentRow);
    },
    getCurrentRow: function getCurrentRow() {
      return this.currentRow;
    },
    getSelection: function getSelection() {
      return this.multipleSelection;
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.$refs.eltable.toggleRowSelection(row, selected);
      if (selected) {
        this.$emit('select-row', row);
      } else {
        this.$emit('un-select-row', row);
      }
    },
    toggleAllSelection: function toggleAllSelection() {
      this.$refs.eltable.toggleAllSelection();
    },
    clearSelection: function clearSelection() {
      this.$refs.eltable.clearSelection();
    },
    clearCurrentChange: function clearCurrentChange() {
      var _$refs$eltable = this.$refs.eltable,
          $el = _$refs$eltable.$el,
          highlightCurrentRow = _$refs$eltable.highlightCurrentRow;

      if ($el && highlightCurrentRow) {
        var trs = $el.querySelector('tbody').children || [];
        Array.from(trs).forEach(function (row) {
          if (Object(dom_["hasClass"])(row, 'el-table__row') && Object(dom_["hasClass"])(row, 'current-row')) {
            Object(dom_["removeClass"])(row, 'current-row');
          }
        });
      }
    },
    myHandleCurrentChange: function myHandleCurrentChange(currentRow, oldCurrentRow) {
      this.currentRow = currentRow;
      if (this.selectionType === 'single') {
        this.clearSelection();
        if (currentRow !== null) {
          this.$refs.eltable.toggleRowSelection(currentRow);
        }
      }
    },
    myRowClick: function myRowClick(row, column, event) {
      if (this.selectionType === 'multi') {
        this.$refs.eltable.toggleRowSelection(row);
      }
    },
    myHandleSelect: function myHandleSelect(selection, row) {
      if (this.selectionType === 'single') {
        if (selection.length > 0) {
          this.toggleRowSelection(row, true);
          this.setCurrentRow(row);
        } else {
          this.clearCurrentChange();
        }
      }
    },
    myHandleSelectAll: function myHandleSelectAll(selection) {
      if (this.selectionType === 'single') {
        this.$message.warning('单选模式下，暂时不支持多选');
        this.clearSelection();
      }
    },
    myHandleSelectionChange: function myHandleSelectionChange(selection) {
      if (this.selectionType === 'multi') {
        this.$emit('select-rows', selection);
      }
      this.multipleSelection = selection;
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/table.vue





/* normalize component */

var table_component = normalizeComponent(
  src_tablevue_type_script_lang_js_,
  tablevue_type_template_id_493fe34e_render,
  tablevue_type_template_id_493fe34e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "packages/table/src/table.vue"
/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/edit-table/src/edit-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var edit_tablevue_type_script_lang_js_ = ({
  name: 'TcEditTable',
  mixins: [table],
  props: {
    editmode: { type: String, required: false, default: 'single', validator: function validator(value) {
        return ['single', 'multi'].indexOf(value) !== -1;
      } }
  },
  data: function data() {
    return {};
  },
  computed: {
    formatData: function formatData() {
      var tmp = void 0;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      var func = this.evalFunc || eval_formatData;
      return func(tmp);
    },
    isSignleMode: function isSignleMode() {
      return this.editmode === 'single';
    }
  },
  methods: {
    toObject: function toObject(observer) {
      return Object.assign({}, observer);
    }
  }
});
// CONCATENATED MODULE: ./packages/edit-table/src/edit-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_edit_tablevue_type_script_lang_js_ = (edit_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/edit-table/src/edit-table.vue





/* normalize component */

var edit_table_component = normalizeComponent(
  src_edit_tablevue_type_script_lang_js_,
  edit_tablevue_type_template_id_09597306_render,
  edit_tablevue_type_template_id_09597306_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var edit_table_api; }
edit_table_component.options.__file = "packages/edit-table/src/edit-table.vue"
/* harmony default export */ var edit_table = (edit_table_component.exports);
// CONCATENATED MODULE: ./packages/edit-table/index.js


edit_table.install = function (Vue) {
  Vue.component(edit_table.name, edit_table);
};

/* harmony default export */ var packages_edit_table = (edit_table);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/edit-tree-table/src/edit-tree-table.vue?vue&type=template&id=8984a894&
var edit_tree_tablevue_type_template_id_8984a894_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "tc-edit-table",
        _vm._g(
          _vm._b(
            {
              ref: "eltable",
              staticClass: "tc-edit-tree-table",
              attrs: {
                data: _vm.formatData,
                "row-style": _vm.showRow,
                columns: _vm.columns,
                stripe: _vm.stripe,
                border: _vm.border,
                fit: _vm.fit,
                editmode: _vm.editmode,
                sequence: _vm.sequence,
                selection: _vm.selection
              }
            },
            "tc-edit-table",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var edit_tree_tablevue_type_template_id_8984a894_staticRenderFns = []
edit_tree_tablevue_type_template_id_8984a894_render._withStripped = true


// CONCATENATED MODULE: ./packages/edit-tree-table/src/edit-tree-table.vue?vue&type=template&id=8984a894&

// CONCATENATED MODULE: ./packages/edit-tree-table/src/eval.js



function treeToArray(data, expandAll) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var tmp = [];
  var index = 0;
  Array.from(data).forEach(function (record) {
    if (record.hidden) {
      return;
    }
    index++;
    if (record._expanded === undefined) {
      external_vue_default.a.set(record, '_expanded', record.expand | expandAll);
    }
    var _level = 1;
    if (level !== undefined && level !== null) {
      _level = level + 1;
    }
    external_vue_default.a.set(record, '_level', _level);
    // 如果有父元素
    if (parent) {
      external_vue_default.a.set(record, 'parent', parent);

      external_vue_default.a.set(record, 'hier', parent.hier + '.' + index);
    } else {
      external_vue_default.a.set(record, 'hier', index);
    }
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      treeToArray(record.children, expandAll, record, _level);
    }
  });
  return tmp;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/edit-tree-table/src/edit-tree-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var edit_tree_tablevue_type_script_lang_js_ = ({
  name: 'TcEditTreeTable',
  mixins: [edit_table],
  props: {
    hier: { type: Boolean, required: false, default: false },
    sequence: { type: Boolean, required: false, default: false },
    evalFunc: { type: Function, required: false, default: null },
    evalArgs: { type: Array, default: function _default() {
        return [];
      } },
    expandAll: { type: Boolean, default: false }
  },
  computed: {
    // 格式化数据源
    formatData: function formatData() {
      var tmp = void 0;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      var func = this.evalFunc || treeToArray;
      var args = this.evalArgs ? [tmp, this.expandAll].concat(this.evalArgs) : [tmp, this.expandAll];
      var result = func.apply(null, args);
      return result;
    }
  },
  created: function created() {},

  methods: {
    showRow: function showRow(row) {
      var show = row.row.parent ? row.row.parent._expanded && row.row.parent._show : true;
      row.row._show = show;
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;';
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.$refs.eltable.toggleRowSelection(row, selected);
    },
    setCurrentRow: function setCurrentRow(currentRow) {
      this.$refs.eltable.setCurrentRow(currentRow);
    },
    clearSelection: function clearSelection() {
      this.$refs.eltable.clearSelection();
    }
  }
});
// CONCATENATED MODULE: ./packages/edit-tree-table/src/edit-tree-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_edit_tree_tablevue_type_script_lang_js_ = (edit_tree_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/edit-tree-table/src/edit-tree-table.vue





/* normalize component */

var edit_tree_table_component = normalizeComponent(
  src_edit_tree_tablevue_type_script_lang_js_,
  edit_tree_tablevue_type_template_id_8984a894_render,
  edit_tree_tablevue_type_template_id_8984a894_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var edit_tree_table_api; }
edit_tree_table_component.options.__file = "packages/edit-tree-table/src/edit-tree-table.vue"
/* harmony default export */ var edit_tree_table = (edit_tree_table_component.exports);
// CONCATENATED MODULE: ./packages/edit-tree-table/index.js


edit_tree_table.install = function (Vue) {
  Vue.component(edit_tree_table.name, edit_tree_table);
};

/* harmony default export */ var packages_edit_tree_table = (edit_tree_table);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/fieldset/src/fieldset.vue?vue&type=template&id=470563e6&
var fieldsetvue_type_template_id_470563e6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "fieldset",
    _vm._b({ staticClass: "tc-fieldset" }, "fieldset", _vm.$attrs, false),
    [
      _c("legend", { staticClass: "fieldset-legend" }, [
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._t("default")
    ],
    2
  )
}
var fieldsetvue_type_template_id_470563e6_staticRenderFns = []
fieldsetvue_type_template_id_470563e6_render._withStripped = true


// CONCATENATED MODULE: ./packages/fieldset/src/fieldset.vue?vue&type=template&id=470563e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/fieldset/src/fieldset.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var fieldsetvue_type_script_lang_js_ = ({
  name: 'TcFieldset',
  props: {
    title: { type: String, required: false, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/fieldset/src/fieldset.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_fieldsetvue_type_script_lang_js_ = (fieldsetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/fieldset/src/fieldset.vue





/* normalize component */

var fieldset_component = normalizeComponent(
  src_fieldsetvue_type_script_lang_js_,
  fieldsetvue_type_template_id_470563e6_render,
  fieldsetvue_type_template_id_470563e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var fieldset_api; }
fieldset_component.options.__file = "packages/fieldset/src/fieldset.vue"
/* harmony default export */ var fieldset = (fieldset_component.exports);
// CONCATENATED MODULE: ./packages/fieldset/index.js


fieldset.install = function (Vue) {
  Vue.component(fieldset.name, fieldset);
};

/* harmony default export */ var packages_fieldset = (fieldset);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/fixed-bottom/src/fixed-bottom.vue?vue&type=template&id=0095be66&
var fixed_bottomvue_type_template_id_0095be66_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tc-fixed-bottom box-middle-center" },
    [_vm._t("default")],
    2
  )
}
var fixed_bottomvue_type_template_id_0095be66_staticRenderFns = []
fixed_bottomvue_type_template_id_0095be66_render._withStripped = true


// CONCATENATED MODULE: ./packages/fixed-bottom/src/fixed-bottom.vue?vue&type=template&id=0095be66&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/fixed-bottom/src/fixed-bottom.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var fixed_bottomvue_type_script_lang_js_ = ({
  name: 'TcFixedBottom',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},

  methods: {}
});
// CONCATENATED MODULE: ./packages/fixed-bottom/src/fixed-bottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_fixed_bottomvue_type_script_lang_js_ = (fixed_bottomvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/fixed-bottom/src/fixed-bottom.vue





/* normalize component */

var fixed_bottom_component = normalizeComponent(
  src_fixed_bottomvue_type_script_lang_js_,
  fixed_bottomvue_type_template_id_0095be66_render,
  fixed_bottomvue_type_template_id_0095be66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var fixed_bottom_api; }
fixed_bottom_component.options.__file = "packages/fixed-bottom/src/fixed-bottom.vue"
/* harmony default export */ var fixed_bottom = (fixed_bottom_component.exports);
// CONCATENATED MODULE: ./packages/fixed-bottom/index.js


fixed_bottom.install = function (Vue) {
  Vue.component(fixed_bottom.name, fixed_bottom);
};

/* harmony default export */ var packages_fixed_bottom = (fixed_bottom);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&
var formvue_type_template_id_a1b5ff34_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    _vm._g(
      _vm._b(
        {
          ref: "form",
          staticClass: "tc-form",
          attrs: { onsubmit: "return false" }
        },
        "el-form",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var formvue_type_template_id_a1b5ff34_staticRenderFns = []
formvue_type_template_id_a1b5ff34_render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'TcForm',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    validate: function validate(callback) {
      this.$refs.form.validate(callback);
    },
    resetFields: function resetFields() {
      this.$refs.form.resetFields();
    },
    clearValidate: function clearValidate() {
      this.$refs.form.clearValidate();
    },
    validateField: function validateField(field) {
      this.$refs.form.validateField(field);
    }
  }
});
// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form.vue





/* normalize component */

var form_component = normalizeComponent(
  src_formvue_type_script_lang_js_,
  formvue_type_template_id_a1b5ff34_render,
  formvue_type_template_id_a1b5ff34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_api; }
form_component.options.__file = "packages/form/src/form.vue"
/* harmony default export */ var src_form = (form_component.exports);
// CONCATENATED MODULE: ./packages/form/index.js


src_form.install = function (Vue) {
  Vue.component(src_form.name, src_form);
};

/* harmony default export */ var packages_form = (src_form);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-item/src/form-item.vue?vue&type=template&id=336a6c2a&
var form_itemvue_type_template_id_336a6c2a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form-item",
    _vm._g(
      _vm._b(
        { staticClass: "tc-form-item" },
        "el-form-item",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var form_itemvue_type_template_id_336a6c2a_staticRenderFns = []
form_itemvue_type_template_id_336a6c2a_render._withStripped = true


// CONCATENATED MODULE: ./packages/form-item/src/form-item.vue?vue&type=template&id=336a6c2a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-item/src/form-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var form_itemvue_type_script_lang_js_ = ({
  name: 'TcFormItem',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/form-item/src/form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form-item/src/form-item.vue





/* normalize component */

var form_item_component = normalizeComponent(
  src_form_itemvue_type_script_lang_js_,
  form_itemvue_type_template_id_336a6c2a_render,
  form_itemvue_type_template_id_336a6c2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_item_api; }
form_item_component.options.__file = "packages/form-item/src/form-item.vue"
/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./packages/form-item/index.js


form_item.install = function (Vue) {
  Vue.component(form_item.name, form_item);
};

/* harmony default export */ var packages_form_item = (form_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/hot-table/src/hot-table.vue?vue&type=template&id=3aab3a4e&
var hot_tablevue_type_template_id_3aab3a4e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "hot-table",
        _vm._g(
          _vm._b(
            {
              staticClass: "tc-hot-table",
              attrs: {
                settings: _vm.resultSettings,
                licenseKey: "non-commercial-and-evaluation"
              }
            },
            "hot-table",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        )
      )
    ],
    1
  )
}
var hot_tablevue_type_template_id_3aab3a4e_staticRenderFns = []
hot_tablevue_type_template_id_3aab3a4e_render._withStripped = true


// CONCATENATED MODULE: ./packages/hot-table/src/hot-table.vue?vue&type=template&id=3aab3a4e&

// EXTERNAL MODULE: external "@handsontable/vue"
var vue_ = __webpack_require__(10);

// EXTERNAL MODULE: external "handsontable/dist/handsontable.full.css"
var handsontable_full_css_ = __webpack_require__(16);

// EXTERNAL MODULE: ./packages/hot-table/src/hot-table.css
var hot_table = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/hot-table/src/hot-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//




/* harmony default export */ var hot_tablevue_type_script_lang_js_ = ({
  components: { HotTable: vue_["HotTable"] },
  name: 'TcHotTable',
  props: {
    settings: { type: Object, default: function _default() {} }
  },
  data: function data() {
    return {
      defaultSetting: {
        height: '300px',
        width: '100%',
        manualColumnResize: true,
        manualRowResize: true,
        rowHeaders: true,
        colHeaders: true,
        stretchH: 'all'
      }
    };
  },
  computed: {
    resultSettings: function resultSettings() {
      return Object.assign(this.defaultSetting, this.settings);
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./packages/hot-table/src/hot-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_hot_tablevue_type_script_lang_js_ = (hot_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/hot-table/src/hot-table.vue





/* normalize component */

var hot_table_component = normalizeComponent(
  src_hot_tablevue_type_script_lang_js_,
  hot_tablevue_type_template_id_3aab3a4e_render,
  hot_tablevue_type_template_id_3aab3a4e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var hot_table_api; }
hot_table_component.options.__file = "packages/hot-table/src/hot-table.vue"
/* harmony default export */ var src_hot_table = (hot_table_component.exports);
// CONCATENATED MODULE: ./packages/hot-table/index.js


src_hot_table.install = function (Vue) {
  Vue.component(src_hot_table.name, src_hot_table);
};

/* harmony default export */ var packages_hot_table = (src_hot_table);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
var inputvue_type_template_id_343dd774_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-input",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-input",
          attrs: { value: _vm.value, vname: _vm.vname },
          on: { blur: _vm.blurHandle }
        },
        "el-input",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("append", null, { slot: "append" })],
    2
  )
}
var inputvue_type_template_id_343dd774_staticRenderFns = []
inputvue_type_template_id_343dd774_render._withStripped = true


// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

// CONCATENATED MODULE: ./src/utils/regular-expression.js
var regularExpression = {
  // 移动电话
  mobile: '((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\\d{8}',
  // 固定电话
  phone: '(0\\d{2}-?\\d{8}(-\\d{1,4})?)|(0\\d{3}-?\\d{7,8}(-\\d{1,4})?)',
  // 正整数1+
  positiveNumber: '[1-9]\\d*',
  // 自然数 0+
  naturalNumber: '[0-9]\\d*',
  // 负整数
  negativeNumber: '-[1-9]\\d*',
  // 整数
  integer: '-?[1-9]\\d*',
  // 带小数点或不带小数点的任意长度
  numberDecimalMore: '((\\d+.\\d*)|(\\d+))',
  // 带小数点或不带小数点,小数点后2位
  numberDecimalTwo: '((\\d+.\\d{0,2})|(\\d+))',
  // 带小数点任意长度
  decimalMore: '(\\d+.\\d*)',
  // 带小数点,小数点后2位
  decimalTwo: '(\\d+.\\d{0,2})',
  // (负数)带小数点或不带小数点的任意长度
  negativeNumberDecimalMore: '-((\\d+.\\d*)|(\\d+))',
  // (负数)带小数点或不带小数点,小数点后2位
  negativeNumberDecimalTwo: '-((\\d+.\\d{0,2})|(\\d+))',
  // (负数)带小数点任意长度
  negativeDecimalMore: '-(\\d+.\\d*)',
  // (负数)带小数点,小数点后2位
  negativeDecimalTwo: '-(\\\d+.\\\d{0,2})',
  // (负数或)带小数点或不带小数点的任意长度
  negativeOrNumberDecimalMore: '-?((\\d+.\\d*)|(\\d+))',
  // (负数或)带小数点或不带小数点,小数点后2位
  negativeOrNumberDecimalTwo: '-?((\\d+.\\d{0,2})|(\\d+))',
  // (负数或)带小数点任意长度
  negativeOrDecimalMore: '-?(\\d+.\\d*)',
  // (负数或)带小数点,小数点后2位
  negativeOrDecimalTwo: '-?(\\d+.\\d{0,2})',
  // 小数或数字、小数后N位
  getNumberDecimalN: function getNumberDecimalN(length) {
    return '((\\d+.\\d{0,' + length + '})|(\\d+))';
  },
  // 小数、小数后N位
  getDecimalN: function getDecimalN(length) {
    return '(\\d+.\\d{0,' + length + '})';
  },
  // (负)小数、小数后N位
  getNegativeDecimalN: function getNegativeDecimalN(length) {
    return '-(\\d+.\\d{0,' + length + '})';
  },
  // (负)小数或数字、小数后N位
  getNegativeNumberDecimalN: function getNegativeNumberDecimalN(length) {
    return '-((\\d+.\\d{0,' + length + '})|(\\d+))';
  },
  // (负或)小数、小数后N位
  getNegativeOrDecimalN: function getNegativeOrDecimalN(length) {
    return '-(\\d+.\\d{0,' + length + '})';
  },
  // (负或)小数或数字、小数后N位
  getNegativeOrNumberDecimalN: function getNegativeOrNumberDecimalN(length) {
    return '-((\\d+.\\d{0,' + length + '})|(\\d+))';
  },
  // QQ
  qq: '[1-9][0-9]{4,13}',
  // 邮编
  zipCode: '[1-9]\\d{5}(?!\\d)',
  // 中文字符
  chineseChar: '[\\u4e00-\\u9fa5]',
  // 身份证
  idCard: '[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)'
};
// CONCATENATED MODULE: ./src/mixins/regular-valid-mixin.js


/* harmony default export */ var regular_valid_mixin = ({
  props: {
    regularType: { type: String, default: null },
    regex: { type: String, default: null }
  },
  methods: {
    regularValid: function regularValid(type, value) {
      var regExpression = this.queryExpression(type);
      if (isEmpty(regExpression)) {
        return value;
      }

      var regexp = new RegExp(regExpression);
      return regexp.test(value);
    },
    regularMatch: function regularMatch(type, value) {
      if (isEmpty(value)) {
        return value;
      }

      var regExpression = this.queryExpression(type);
      if (isEmpty(regExpression)) {
        return value;
      }

      var regexp = new RegExp(regExpression);
      var results = value.match(regexp) || [''];

      return results[0];
    },
    queryExpression: function queryExpression(type) {
      if (isEmpty(type)) {
        return this.regex;
      }
      var regExpression = '';
      if (type.indexOf(':') > 0) {
        var types = type.split(':');
        regExpression = regularExpression[types[0]](types[1]);
      } else {
        regExpression = regularExpression[type];
      }
      return regExpression;
    },

    blurHandle: function blurHandle(e) {
      var inValue = e.target.value;
      var matchValue = this.regularMatch(this.regularType, inValue);
      this.$emit('input', matchValue);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//




/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'TcInput',
  mixins: [vname_mixin, regular_valid_mixin],
  props: {
    value: { type: Object | String | Number, default: null }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_js_,
  inputvue_type_template_id_343dd774_render,
  inputvue_type_template_id_343dd774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/input/src/input.vue"
/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


input.install = function (Vue) {
  Vue.component(input.name, input);
};

/* harmony default export */ var packages_input = (input);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-money/src/input-money.vue?vue&type=template&id=f911a8a8&
var input_moneyvue_type_template_id_f911a8a8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tc-input",
    _vm._g(
      _vm._b(
        {
          ref: "numeric",
          staticClass: "tc-input-money",
          attrs: {
            placeholder: _vm.placeholder,
            type: "tel",
            value: _vm.value,
            vname: _vm.vname,
            readonly: _vm.readonly
          },
          on: {
            blur: _vm.onBlurHandler,
            input: _vm.onInputHandler,
            focus: _vm.onFocusHandler
          },
          model: {
            value: _vm.amount,
            callback: function($$v) {
              _vm.amount = $$v
            },
            expression: "amount"
          }
        },
        "tc-input",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var input_moneyvue_type_template_id_f911a8a8_staticRenderFns = []
input_moneyvue_type_template_id_f911a8a8_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-money/src/input-money.vue?vue&type=template&id=f911a8a8&

// EXTERNAL MODULE: external "accounting-js"
var external_accounting_js_ = __webpack_require__(2);
var external_accounting_js_default = /*#__PURE__*/__webpack_require__.n(external_accounting_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-money/src/input-money.vue?vue&type=script&lang=js&
var input_moneyvue_type_script_lang_js_this = undefined;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var input_moneyvue_type_script_lang_js_ = ({
  name: 'TcInputMoney',
  mixins: [vname_mixin],
  props: {
    /**
     * Currency symbol.
     */
    currency: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Maximum value allowed.
     */
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER || 9007199254740991,
      required: false
    },
    /**
     * Minimum value allowed.
     */
    min: {
      type: Number,
      default: Number.MIN_SAFE_INTEGER || -9007199254740991,
      required: false
    },
    /**
     * Enable/Disable minus value.
     */
    minus: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Input placeholder.
     */
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Value when the input is empty
     */
    emptyValue: {
      type: [Number, String],
      default: '',
      required: false
    },
    /**
     * Number of decimals.
     * Decimals symbol are the opposite of separator symbol.
     */
    precision: {
      type: Number,
      default: 0,
      required: false
    },
    /**
     * Thousand separator type.
     * Separator props accept either . or , (default).
     */
    separator: {
      type: String,
      default: ',',
      required: false
    },
    /**
     * Forced thousand separator.
     * Accepts any string.
     */
    thousandSeparator: {
      default: undefined,
      required: false,
      type: String
    },
    /**
     * Forced decimal separator.
     * Accepts any string.
     */
    decimalSeparator: {
      default: undefined,
      required: false,
      type: String
    },
    /**
      * The output type used for v-model.
      * It can either be String or Number (default).
      */
    outputType: {
      required: false,
      type: String,
      default: 'Number'
    },
    /**
     * v-model value.
     */
    value: {
      type: [Number, String],
      default: 0,
      required: true
    },
    /**
     * Hide input and show value in text only.
     */
    readonly: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Class for the span tag when readonly props is true.
     */
    readonlyClass: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Position of currency symbol
     * Symbol position props accept either 'suffix' or 'prefix' (default).
     */
    currencySymbolPosition: {
      type: String,
      default: 'prefix',
      required: false
    }
  },
  data: function data() {
    return {
      amount: input_moneyvue_type_script_lang_js_this.value
    };
  },
  computed: {
    /**
     * Number type of formatted value.
     * @return {Number}
     */
    amountNumber: function amountNumber() {
      return this.unformat(this.amount);
    },

    /**
     * Number type of value props.
     * @return {Number}
     */
    valueNumber: function valueNumber() {
      return this.unformat(this.value);
    },

    /**
     * Define decimal separator based on separator props.
     * @return {String} '.' or ','
     */
    decimalSeparatorSymbol: function decimalSeparatorSymbol() {
      if (typeof this.decimalSeparator !== 'undefined') return this.decimalSeparator;
      if (this.separator === ',') return '.';
      return ',';
    },

    /**
     * Define thousand separator based on separator props.
     * @return {String} '.' or ','
     */
    thousandSeparatorSymbol: function thousandSeparatorSymbol() {
      if (typeof this.thousandSeparator !== 'undefined') return this.thousandSeparator;
      if (this.separator === '.') return '.';
      if (this.separator === 'space') return ' ';
      return ',';
    },

    /**
     * Define format position for currency symbol and value.
     * @return {String} format
     */
    symbolPosition: function symbolPosition() {
      if (!this.currency) return '%v';
      return this.currencySymbolPosition === 'suffix' ? '%v %s' : '%s %v';
    }
  },
  watch: {
    /**
     * Watch for value change from other input with same v-model.
     * @param {Number} newValue
     */
    valueNumber: function valueNumber(newValue) {
      if (this.$refs.numeric !== document.activeElement) {
        this.amount = this.format(newValue);
        this.$emit('input', newValue);
      }
    },

    /**
     * When readonly is true, replace the span tag class.
     * @param {Boolean} newValue
     * @param {Boolean} oldValue
     */
    readonly: function readonly(newValue, oldValue) {
      var _this2 = this;

      if (oldValue === false && newValue === true) {
        this.$nextTick(function () {
          _this2.$refs.readonly.className = _this2.readonlyClass;
        });
      }
    },

    /**
     * Immediately reflect separator changes
     */
    separator: function separator() {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
    },

    /**
     * Immediately reflect currency changes
     */
    currency: function currency() {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
    },

    /**
     * Immediately reflect precision changes
     */
    precision: function precision() {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    // Set default value props when placeholder undefined.
    if (!this.placeholder) {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
      // In case of delayed props value.
      setTimeout(function () {
        _this3.process(_this3.valueNumber);
        _this3.amount = _this3.format(_this3.valueNumber);
      }, 500);
    }
    // Set read-only span element's class
    if (this.readonly) this.$refs.readonly.className = this.readonlyClass;
  },

  methods: {
    /**
     * Handle blur event.
     * @param {Object} e
     */
    onBlurHandler: function onBlurHandler(e) {
      this.$emit('blur', e);
      this.amount = this.format(this.valueNumber);
      this.$emit('input', this.unformat(this.amount));
    },

    /**
     * Handle focus event.
     * @param {Object} e
     */
    onFocusHandler: function onFocusHandler(e) {
      if (this.readonly) {
        return;
      }
      this.$emit('focus', e);
      if (this.valueNumber === 0) {
        this.amount = null;
      } else {
        this.amount = external_accounting_js_default.a.formatMoney(this.valueNumber, {
          symbol: '',
          format: '%v',
          thousand: '',
          decimal: this.decimalSeparatorSymbol,
          precision: Number(this.precision)
        });
      }
    },

    /**
     * Handle input event.
     */
    onInputHandler: function onInputHandler() {
      this.process(this.amountNumber);
    },

    /**
     * Validate value before update the component.
     * @param {Number} value
     */
    process: function process(value) {
      if (value >= this.max) this.update(this.max);
      if (value <= this.min) this.update(this.min);
      if (value > this.min && value < this.max) this.update(value);
      if (!this.minus && value < 0) this.min >= 0 ? this.update(this.min) : this.update(0);
    },

    /**
     * Update parent component model value.
     * @param {Number} value
     */
    update: function update(value) {
      var fixedValue = external_accounting_js_default.a.toFixed(value, this.precision);
      var output = this.outputType.toLowerCase() === 'string' ? fixedValue : Number(fixedValue);
      this.$emit('input', output);
    },

    /**
     * Format value using symbol and separator.
     * @param {Number} value
     * @return {String}
     */
    format: function format(value) {
      return external_accounting_js_default.a.formatMoney(value, {
        symbol: this.currency,
        format: this.symbolPosition,
        precision: Number(this.precision),
        decimal: this.decimalSeparatorSymbol,
        thousand: this.thousandSeparatorSymbol
      });
    },

    /**
     * Remove symbol and separator.
     * @param {Number} value
     * @return {Number}
     */
    unformat: function unformat(value) {
      var toUnformat = typeof value === 'string' && value === '' ? this.emptyValue : value;
      return external_accounting_js_default.a.unformat(toUnformat, this.decimalSeparatorSymbol);
    }
  }
});
// CONCATENATED MODULE: ./packages/input-money/src/input-money.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_moneyvue_type_script_lang_js_ = (input_moneyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input-money/src/input-money.vue





/* normalize component */

var input_money_component = normalizeComponent(
  src_input_moneyvue_type_script_lang_js_,
  input_moneyvue_type_template_id_f911a8a8_render,
  input_moneyvue_type_template_id_f911a8a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_money_api; }
input_money_component.options.__file = "packages/input-money/src/input-money.vue"
/* harmony default export */ var input_money = (input_money_component.exports);
// CONCATENATED MODULE: ./packages/input-money/index.js


input_money.install = function (Vue) {
  Vue.component(input_money.name, input_money);
};

/* harmony default export */ var packages_input_money = (input_money);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-number/src/input-number.vue?vue&type=template&id=42f8cf66&
var input_numbervue_type_template_id_42f8cf66_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-input-number",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-input-number",
          attrs: {
            value: _vm.value,
            min: _vm.cmin,
            max: _vm.max,
            vname: _vm.vname
          },
          on: { blur: _vm.blurHandle }
        },
        "el-input-number",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
}
var input_numbervue_type_template_id_42f8cf66_staticRenderFns = []
input_numbervue_type_template_id_42f8cf66_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-number/src/input-number.vue?vue&type=template&id=42f8cf66&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-number/src/input-number.vue?vue&type=script&lang=js&
//
//
//
//
//




/* harmony default export */ var input_numbervue_type_script_lang_js_ = ({
  name: 'TcInputNumber',
  mixins: [vname_mixin, regular_valid_mixin],
  props: {
    value: { type: Object | String | Number, default: null },
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity }
  },
  data: function data() {
    return {};
  },
  computed: {
    cmin: function cmin() {
      if (this.regularType === 'positiveNumber') {
        return 1;
      } else if (this.regularType === 'naturalNumber') {
        return 0;
      }
      return this.min;
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./packages/input-number/src/input-number.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_numbervue_type_script_lang_js_ = (input_numbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input-number/src/input-number.vue





/* normalize component */

var input_number_component = normalizeComponent(
  src_input_numbervue_type_script_lang_js_,
  input_numbervue_type_template_id_42f8cf66_render,
  input_numbervue_type_template_id_42f8cf66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_number_api; }
input_number_component.options.__file = "packages/input-number/src/input-number.vue"
/* harmony default export */ var input_number = (input_number_component.exports);
// CONCATENATED MODULE: ./packages/input-number/index.js


input_number.install = function (Vue) {
  Vue.component(input_number.name, input_number);
};

/* harmony default export */ var packages_input_number = (input_number);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-phone/src/input-phone.vue?vue&type=template&id=5dbc3b08&
var input_phonevue_type_template_id_5dbc3b08_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-input",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-input-phone",
          attrs: { value: _vm.value, vname: _vm.vname },
          on: { blur: _vm.blurHandle }
        },
        "el-input",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
}
var input_phonevue_type_template_id_5dbc3b08_staticRenderFns = []
input_phonevue_type_template_id_5dbc3b08_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-phone/src/input-phone.vue?vue&type=template&id=5dbc3b08&

// EXTERNAL MODULE: external "libphonenumber-js"
var external_libphonenumber_js_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-phone/src/input-phone.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//



/**
 * validType: common 通用，采用libphone进行
 *            phone 座机号
 *            mobile 手机号
 *            mop 手机号+座机号
 *            regex 自定义正则
 */
var regexValid = {
  mobile: /((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}/,
  phone: /(0\d{2}-?\d{8}(-\d{1,4})?)|(0\d{3}-?\d{7,8}(-\d{1,4})?)/
};
/* harmony default export */ var input_phonevue_type_script_lang_js_ = ({
  name: 'TcInputPhone',
  mixins: [vname_mixin],
  props: {
    validType: { type: String, default: 'mop' },
    regex: { type: String, default: null },
    country: { type: String, default: 'CN' },
    value: { type: Object | String | Number, default: null }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    blurHandle: function blurHandle(e) {
      var resultPhone = e.target.value;
      if (this.validType === 'common') {
        resultPhone = this.libphoneValid(resultPhone);
      } else if (this.validType === 'phone' || this.validType === 'mobile') {
        resultPhone = (resultPhone.match(regexValid[this.validType]) || [''])[0];
      } else if (this.validType === 'mop') {
        resultPhone = (resultPhone.match(regexValid.phone) || resultPhone.match(regexValid.mobile) || [''])[0];
      } else if (this.validType === 'regex') {
        if (this.regex !== null && !this.regex.test(resultPhone)) {
          resultPhone = (resultPhone.match(this.regex) || [''])[0];
        }
      }
      this.$emit('input', resultPhone);
    },
    libphoneValid: function libphoneValid(inPhone) {
      var result = this.getParsePhoneNumberFromString(inPhone, this.country);
      if (result.isValid) {
        return result.phoneNumber;
      }
      return '';
    },
    getParsePhoneNumberFromString: function getParsePhoneNumberFromString(phoneNumber, countryCode) {
      var parsing = phoneNumber && countryCode ? Object(external_libphonenumber_js_["parsePhoneNumberFromString"])(phoneNumber, countryCode) : null;
      return _extends({
        phoneNumber: phoneNumber ? phoneNumber : null,
        countryCode: countryCode,
        isValid: false
      }, parsing ? {
        formattedNumber: parsing.number,
        nationalNumber: parsing.nationalNumber,
        isValid: parsing.isValid(),
        type: parsing.getType(),
        formatInternational: parsing.formatInternational(),
        formatNational: parsing.formatNational(),
        uri: parsing.getURI(),
        e164: parsing.format('E.164')
      } : null);
    }
  }
});
// CONCATENATED MODULE: ./packages/input-phone/src/input-phone.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_phonevue_type_script_lang_js_ = (input_phonevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input-phone/src/input-phone.vue





/* normalize component */

var input_phone_component = normalizeComponent(
  src_input_phonevue_type_script_lang_js_,
  input_phonevue_type_template_id_5dbc3b08_render,
  input_phonevue_type_template_id_5dbc3b08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_phone_api; }
input_phone_component.options.__file = "packages/input-phone/src/input-phone.vue"
/* harmony default export */ var input_phone = (input_phone_component.exports);
// CONCATENATED MODULE: ./packages/input-phone/index.js


input_phone.install = function (Vue) {
  Vue.component(input_phone.name, input_phone);
};

/* harmony default export */ var packages_input_phone = (input_phone);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-tag/src/input-tag.vue?vue&type=template&id=4c7a2f20&
var input_tagvue_type_template_id_4c7a2f20_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tc-input-tag-container" },
    [
      _c(
        "vue-tags-input",
        _vm._g(
          _vm._b(
            {
              staticClass: "tc-input-tag",
              attrs: {
                tags: _vm.initTags,
                vname: _vm.vname,
                disabled: _vm.inputDisabled,
                placeholder: _vm.placeholder,
                "add-on-key": _vm.addOnKey
              },
              on: {
                "tags-changed": _vm.tagsChange,
                "before-adding-tag": _vm.checkTag
              },
              model: {
                value: _vm.tag,
                callback: function($$v) {
                  _vm.tag = $$v
                },
                expression: "tag"
              }
            },
            "vue-tags-input",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        )
      )
    ],
    1
  )
}
var input_tagvue_type_template_id_4c7a2f20_staticRenderFns = []
input_tagvue_type_template_id_4c7a2f20_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-tag/src/input-tag.vue?vue&type=template&id=4c7a2f20&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-tag/src/vue-tags-input/index.vue?vue&type=template&id=0db38107&
var vue_tags_inputvue_type_template_id_0db38107_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vue-tags-input",
      class: [{ "ti-disabled": _vm.disabled }, { "ti-focus": _vm.focused }]
    },
    [
      _c("div", { staticClass: "ti-input" }, [
        _vm.tagsCopy
          ? _c(
              "ul",
              { staticClass: "ti-tags" },
              [
                _vm._l(_vm.tagsCopy, function(tag, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "ti-tag",
                      class: [
                        { "ti-editing": _vm.tagsEditStatus[index] },
                        tag.tiClasses,
                        tag.classes,
                        { "ti-deletion-mark": _vm.isMarked(index) }
                      ],
                      style: tag.style,
                      attrs: { tabindex: index + 1 },
                      on: {
                        click: function($event) {
                          return _vm.$emit("tag-clicked", {
                            tag: tag,
                            index: index
                          })
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "ti-content" }, [
                        _vm.$scopedSlots["tag-left"]
                          ? _c(
                              "div",
                              { staticClass: "ti-tag-left" },
                              [
                                _vm._t("tag-left", null, {
                                  tag: tag,
                                  index: index,
                                  edit: _vm.tagsEditStatus[index],
                                  performSaveEdit: _vm.performSaveTag,
                                  performDelete: _vm.performDeleteTag,
                                  performCancelEdit: _vm.cancelEdit,
                                  performOpenEdit: _vm.performEditTag,
                                  deletionMark: _vm.isMarked(index)
                                })
                              ],
                              2
                            )
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            ref: "tagCenter",
                            refInFor: true,
                            staticClass: "ti-tag-center"
                          },
                          [
                            !_vm.$scopedSlots["tag-center"]
                              ? _c(
                                  "span",
                                  {
                                    class: {
                                      "ti-hidden": _vm.tagsEditStatus[index]
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.performEditTag(index)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(tag.text))]
                                )
                              : _vm._e(),
                            !_vm.$scopedSlots["tag-center"]
                              ? _c("tag-input", {
                                  attrs: {
                                    scope: {
                                      edit: _vm.tagsEditStatus[index],
                                      maxlength: _vm.maxlength,
                                      tag: tag,
                                      index: index,
                                      validateTag: _vm.createChangedTag,
                                      performCancelEdit: _vm.cancelEdit,
                                      performSaveEdit: _vm.performSaveTag
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._t("tag-center", null, {
                              tag: tag,
                              index: index,
                              maxlength: _vm.maxlength,
                              edit: _vm.tagsEditStatus[index],
                              performSaveEdit: _vm.performSaveTag,
                              performDelete: _vm.performDeleteTag,
                              performCancelEdit: _vm.cancelEdit,
                              validateTag: _vm.createChangedTag,
                              performOpenEdit: _vm.performEditTag,
                              deletionMark: _vm.isMarked(index)
                            })
                          ],
                          2
                        ),
                        _vm.$scopedSlots["tag-right"]
                          ? _c(
                              "div",
                              { staticClass: "ti-tag-right" },
                              [
                                _vm._t("tag-right", null, {
                                  tag: tag,
                                  index: index,
                                  edit: _vm.tagsEditStatus[index],
                                  performSaveEdit: _vm.performSaveTag,
                                  performDelete: _vm.performDeleteTag,
                                  performCancelEdit: _vm.cancelEdit,
                                  performOpenEdit: _vm.performEditTag,
                                  deletionMark: _vm.isMarked(index)
                                })
                              ],
                              2
                            )
                          : _vm._e()
                      ]),
                      _c(
                        "div",
                        { staticClass: "ti-actions" },
                        [
                          !_vm.$scopedSlots["tag-actions"]
                            ? _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.tagsEditStatus[index],
                                    expression: "tagsEditStatus[index]"
                                  }
                                ],
                                staticClass: "ti-icon-undo",
                                on: {
                                  click: function($event) {
                                    return _vm.cancelEdit(index)
                                  }
                                }
                              })
                            : _vm._e(),
                          !_vm.$scopedSlots["tag-actions"]
                            ? _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.tagsEditStatus[index],
                                    expression: "!tagsEditStatus[index]"
                                  }
                                ],
                                staticClass: "ti-icon-close",
                                on: {
                                  click: function($event) {
                                    return _vm.performDeleteTag(index)
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm.$scopedSlots["tag-actions"]
                            ? _vm._t("tag-actions", null, {
                                tag: tag,
                                index: index,
                                edit: _vm.tagsEditStatus[index],
                                performSaveEdit: _vm.performSaveTag,
                                performDelete: _vm.performDeleteTag,
                                performCancelEdit: _vm.cancelEdit,
                                performOpenEdit: _vm.performEditTag,
                                deletionMark: _vm.isMarked(index)
                              })
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  )
                }),
                _c("li", { staticClass: "ti-new-tag-input-wrapper" }, [
                  _c(
                    "input",
                    _vm._b(
                      {
                        ref: "newTagInput",
                        staticClass: "ti-new-tag-input",
                        class: [
                          _vm.createClasses(
                            _vm.newTag,
                            _vm.tags,
                            _vm.validation,
                            _vm.isDuplicate
                          )
                        ],
                        attrs: {
                          placeholder: _vm.placeholder,
                          maxlength: _vm.maxlength,
                          disabled: _vm.disabled,
                          type: "text",
                          size: "1"
                        },
                        domProps: { value: _vm.newTag },
                        on: {
                          keydown: [
                            function($event) {
                              return _vm.performAddTags(
                                _vm.filteredAutocompleteItems[
                                  _vm.selectedItem
                                ] || _vm.newTag,
                                $event
                              )
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                $event.keyCode !== 8
                              ) {
                                return null
                              }
                              return _vm.invokeDelete($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                $event.keyCode !== 38
                              ) {
                                return null
                              }
                              return _vm.selectItem($event, "before")
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                $event.keyCode !== 40
                              ) {
                                return null
                              }
                              return _vm.selectItem($event, "after")
                            }
                          ],
                          paste: _vm.addTagsFromPaste,
                          input: _vm.updateNewTag,
                          blur: function($event) {
                            return _vm.$emit("blur", $event)
                          },
                          focus: function($event) {
                            _vm.focused = true
                            _vm.$emit("focus", $event)
                          },
                          click: function($event) {
                            _vm.addOnlyFromAutocomplete
                              ? false
                              : (_vm.selectedItem = null)
                          }
                        }
                      },
                      "input",
                      _vm.$attrs,
                      false
                    )
                  )
                ])
              ],
              2
            )
          : _vm._e()
      ]),
      _vm._t("between-elements"),
      _vm.autocompleteOpen
        ? _c(
            "div",
            {
              staticClass: "ti-autocomplete",
              on: {
                mouseout: function($event) {
                  _vm.selectedItem = null
                }
              }
            },
            [
              _vm._t("autocomplete-header"),
              _c(
                "ul",
                _vm._l(_vm.filteredAutocompleteItems, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "ti-item",
                      class: [
                        item.tiClasses,
                        item.classes,
                        { "ti-selected-item": _vm.isSelected(index) }
                      ],
                      style: item.style,
                      on: {
                        mouseover: function($event) {
                          _vm.disabled ? false : (_vm.selectedItem = index)
                        }
                      }
                    },
                    [
                      !_vm.$scopedSlots["autocomplete-item"]
                        ? _c(
                            "div",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.performAddTags(
                                    item,
                                    undefined,
                                    "autocomplete"
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(item.text) +
                                  "\n        "
                              )
                            ]
                          )
                        : _vm._t("autocomplete-item", null, {
                            item: item,
                            index: index,
                            performAdd: function(item) {
                              return _vm.performAddTags(
                                item,
                                undefined,
                                "autocomplete"
                              )
                            },
                            selected: _vm.isSelected(index)
                          })
                    ],
                    2
                  )
                }),
                0
              ),
              _vm._t("autocomplete-footer")
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var vue_tags_inputvue_type_template_id_0db38107_staticRenderFns = []
vue_tags_inputvue_type_template_id_0db38107_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/index.vue?vue&type=template&id=0db38107&

// EXTERNAL MODULE: external "fast-deep-equal"
var external_fast_deep_equal_ = __webpack_require__(12);
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_);

// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/create-tags.js
// helper functions

var validateUserRules = function validateUserRules(tag, validation) {
  return validation.filter(function (val) {
    var text = tag.text;
    // if the rule is a string, we convert it to RegExp

    if (typeof val.rule === 'string') return !new RegExp(val.rule).test(text);

    if (val.rule instanceof RegExp) return !val.rule.test(text);

    // if we deal with a function, invoke it
    var isFunction = {}.toString.call(val.rule) === '[object Function]';
    if (isFunction) return val.rule(tag);
  }).map(function (val) {
    return val.classes;
  });
};

var clone = function clone(node) {
  return JSON.parse(JSON.stringify(node));
};

var findIndex = function findIndex(arr, callback) {
  var index = 0;
  while (index < arr.length) {
    if (callback(arr[index], index, arr)) return index;
    index++;
  }
  return -1;
};

var createClasses = function createClasses(tag, tags) {
  var validation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var customDuplicateFn = arguments[3];

  if (tag.text === undefined) tag = { text: tag

    // create css classes from the user validation array
  };var classes = validateUserRules(tag, validation);

  // if we find the tag, it's an exsting one which is edited.
  // in this case we must splice it out
  var index = findIndex(tags, function (t) {
    return t === tag;
  });
  var tagsDiff = clone(tags);
  var inputTag = index !== -1 ? tagsDiff.splice(index, 1)[0] : clone(tag);

  // check whether the tag is a duplicate or not
  var duplicate = customDuplicateFn ? customDuplicateFn(tagsDiff, inputTag) : tagsDiff.map(function (t) {
    return t.text;
  }).indexOf(inputTag.text) !== -1;

  // if it's a duplicate, push the class duplicate to the array
  if (duplicate) classes.push('ti-duplicate');

  // if we find no classes, the tag is valid → push the class valid
  classes.length === 0 ? classes.push('ti-valid') : classes.push('ti-invalid');
  return classes;
};

/**
 * @description Create one tag out of a String or validate an existing one
 * @property {helpers}
 * @param {Object|String} tag A tag which should be validated | A String to create a tag
 * @param {Array} tagsarray The tags array
 * @param {Array} [validation=[]] The validation Array is optional (pass it if you use one)
 * @returns {Object} The created (validated) tag
 */
var createTag = function createTag(tag) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  // if text is undefined, a string is passed. let's make a tag out of it
  if (tag.text === undefined) tag = { text: tag

    // we better make a clone to not getting reference trouble
  };var t = clone(tag);

  // create the validation classes
  t.tiClasses = createClasses.apply(undefined, [tag].concat(rest));
  return t;
};

/**
 * @description Create multiple tags out of Strings or validate existing tags
 * @property {helpers}
 * @param {Array} tagsarray An Array containing tags or strings. See example below.
 * @param {Array} [validation=[]] The validation Array is optional (pass it if you use one)
 * @returns {Array} An array containing (validated) tags
 * @example  &#47;* Example to call the function *&#47;
   const validatedTags = createTags(['tag1Text', 'tag2Text'], [{ type: 'length', rule: /[0-9]/ }])
 */
var createTags = function createTags(tags) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  return tags.map(function (t) {
    return createTag.apply(undefined, [t, tags].concat(rest));
  });
};


// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-tag/src/vue-tags-input/tag-input.vue?vue&type=template&id=4c74470c&scoped=true&
var tag_inputvue_type_template_id_4c74470c_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.scope.edit
    ? _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.scope.tag.text,
            expression: "scope.tag.text"
          }
        ],
        staticClass: "ti-tag-input",
        attrs: { maxlength: _vm.scope.maxlength, type: "text", size: "1" },
        domProps: { value: _vm.scope.tag.text },
        on: {
          input: [
            function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.scope.tag, "text", $event.target.value)
            },
            function($event) {
              return _vm.scope.validateTag(_vm.scope.index, $event)
            }
          ],
          blur: function($event) {
            return _vm.scope.performCancelEdit(_vm.scope.index)
          },
          keydown: function($event) {
            return _vm.scope.performSaveEdit(_vm.scope.index, $event)
          }
        }
      })
    : _vm._e()
}
var tag_inputvue_type_template_id_4c74470c_scoped_true_staticRenderFns = []
tag_inputvue_type_template_id_4c74470c_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/tag-input.vue?vue&type=template&id=4c74470c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-tag/src/vue-tags-input/tag-input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var tag_inputvue_type_script_lang_js_ = ({
  name: 'TagInput',
  props: {
    scope: { type: Object }
  }
});
// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/tag-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_tags_input_tag_inputvue_type_script_lang_js_ = (tag_inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/input-tag/src/vue-tags-input/tag-input.vue?vue&type=style&index=0&id=4c74470c&lang=css&scoped=true&
var tag_inputvue_type_style_index_0_id_4c74470c_lang_css_scoped_true_ = __webpack_require__(20);

// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/tag-input.vue






/* normalize component */

var tag_input_component = normalizeComponent(
  vue_tags_input_tag_inputvue_type_script_lang_js_,
  tag_inputvue_type_template_id_4c74470c_scoped_true_render,
  tag_inputvue_type_template_id_4c74470c_scoped_true_staticRenderFns,
  false,
  null,
  "4c74470c",
  null
  
)

/* hot reload */
if (false) { var tag_input_api; }
tag_input_component.options.__file = "packages/input-tag/src/vue-tags-input/tag-input.vue"
/* harmony default export */ var tag_input = (tag_input_component.exports);
// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/vue-tags-input.props.js
// The file contains all props and validators which are provided by the component

var propValidatorTag = function propValidatorTag(value) {
  return !value.some(function (t) {
    var invalidText = !t.text;
    if (invalidText) console.warn('Missing property "text"', t);

    var invalidClasses = false;
    if (t.classes) invalidClasses = typeof t.classes !== 'string';
    if (invalidClasses) console.warn('Property "classes" must be type of string', t);

    return invalidText || invalidClasses;
  });
};

var propValidatorStringNumeric = function propValidatorStringNumeric(value) {
  return !value.some(function (v) {
    if (typeof v === 'number') {
      var numeric = isFinite(v) && Math.floor(v) === v;
      if (!numeric) console.warn('Only numerics are allowed for this prop. Found:', v);
      return !numeric;
    } else if (typeof v === 'string') {
      /*
       * Regex: || Not totally fool-proof yet, still matches "0a" and such
       * - allow non-word characters (aka symbols e.g. ;, :, ' etc)
       * - allow alpha characters
       * - deny numbers
       */
      var string = /\W|[a-z]|!\d/i.test(v);
      if (!string) console.warn('Only alpha strings are allowed for this prop. Found:', v);
      return !string;
    } else {
      console.warn('Only numeric and string values are allowed. Found:', v);
      return false;
    }
  });
};

/* harmony default export */ var vue_tags_input_props = ({
  /**
   * @description Property to bind a model to the input.
     If the user changes the input value, the model updates, too.
     If the user presses enter with an valid input,
     a new tag is created with the value of this model.
     After creating the new tag, the model is cleared.
   * @property {props}
   * @required
   * @type {String}
   * @model
   * @default ''
   */
  value: {
    type: String,
    default: '',
    required: true
  },
  /**
   * @description Pass an array containing objects like in the example below.
     The properties 'style' and 'class' are optional. Of course it is possible to add custom
     properties to a tag object. vue-tags-input won't change the key and value.
   * @property {props}
   * @type {Array}
   * @sync
   * @default []
   * @example
    {
    &emsp;text: 'My tag value', &#47;* The visible text on display *&#47;
    &emsp;style: 'background-color: #ccc', &#47;* Adding inline styles is possible *&#47;
    &emsp;classes: 'custom-class another', &#47;* The value will be added as css classes *&#47;
    }
   */
  tags: {
    type: Array,
    default: function _default() {
      return [];
    },
    validator: propValidatorTag
  },
  /**
   * @description Expects an array containing objects inside. The objects
    can have the same properties as a tag object.
   * @property {props}
   * @type {Array}
   * @default []
   */
  autocompleteItems: {
    type: Array,
    default: function _default() {
      return [];
    },
    validator: propValidatorTag
  },
  /**
   * @description Defines whether a tag is editable after creation or not.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  allowEditTags: {
    type: Boolean,
    default: false
  },
  /**
   * @description Defines if duplicate autocomplete items are filtered out from the view or not.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  autocompleteFilterDuplicates: {
    default: true,
    type: Boolean
  },
  /**
   * @description If it's true, the user can add tags only via the autocomplete layer.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  addOnlyFromAutocomplete: {
    type: Boolean,
    default: false
  },
  /**
   * @description The minimum character length which is required
     until the autocomplete layer is shown.
   * @property {props}
   * @type {Number}
   * @default 1
   */
  autocompleteMinLength: {
    type: Number,
    default: 1
  },
  /**
   * @description If it's true, the autocomplete layer is always shown, regardless if
     an input or an autocomplete items exists.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  autocompleteAlwaysOpen: {
    type: Boolean,
    default: false
  },
  /**
   * @description Property to disable vue-tags-input.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @description The placeholder text which is shown in the input, when it's empty.
   * @property {props}
   * @type {String}
   * @default Add Tag
   */
  placeholder: {
    type: String,
    default: 'Add Tag'
  },
  /**
   * @description Custom trigger key codes can be registrated. If the user presses one of these,
     a tag will be generated out of the input value. Can be either a numeric keyCode or the key
     as a string.
   * @property {props}
   * @type {Array}
   * @default [13]
   * @example add-on-key="[13, ':', ';']"
   */
  addOnKey: {
    type: Array,
    default: function _default() {
      return [13];
    },
    validator: propValidatorStringNumeric
  },
  /**
   * @description Custom trigger key codes can be registrated. If the user edits a tag
     and presses one of these, the edited tag will be saved.
     Can be either a numeric keyCode or the key as a string.
   * @property {props}
   * @type {Array}
   * @default [13]
   * @example save-on-key="[13, ':', ';']"
   */
  saveOnKey: {
    type: Array,
    default: function _default() {
      return [13];
    },
    validator: propValidatorStringNumeric
  },
  /**
   * @description The maximum amount the tags array is allowed to hold.
   * @property {props}
   * @type {Number}
   */
  maxTags: {
    type: Number
  },
  /**
   * @description The maximum amount of characters the input is allowed to hold.
   * @property {props}
   * @type {Number}
   */
  maxlength: {
    type: Number
  },
  /**
   * @description Pass an array containing objects like in the example below.
     The property 'classes' will be added as css classes, if the property 'rule' matches the text
     of a tag, an autocomplete item or the input. The property 'rule' can be type of
     RegExp or function. If the property 'disableAdd' is 'true', the item can't be added
     to the tags array, if the appropriated rule matches.
   * @property {props}
   * @type {Array}
   * @default []
   * @example
    {
    &ensp;classes: 'class', &#47;* css class *&#47;
    &ensp;rule: /^([^0-9]*)$/, &#47;* RegExp *&#47;
    }, {
    &ensp;classes: 'no-braces', &#47;* css class *&#47;
    &ensp;rule(text) { &#47;* function with text as param *&#47;
    &ensp;&ensp;return text.indexOf('{') !== -1 || text.indexOf('}') !== -1;
    &ensp;},
    &ensp;disableAdd: true, &#47;* if the rule matches, the item cannot be added *&#47;,
    },
   */
  validation: {
    type: Array,
    default: function _default() {
      return [];
    },
    validator: function validator(value) {
      return !value.some(function (v) {
        var missingRule = !v.rule;
        if (missingRule) console.warn('Property "rule" is missing', v);

        var validRule = v.rule && (typeof v.rule === 'string' || v.rule instanceof RegExp || {}.toString.call(v.rule) === '[object Function]');

        if (!validRule) {
          console.warn('A rule must be type of string, RegExp or function. Found:', JSON.stringify(v.rule));
        }

        var missingClasses = !v.classes;
        if (missingClasses) console.warn('Property "classes" is missing', v);

        var invalidType = v.type && typeof v.type !== 'string';
        if (invalidType) console.warn('Property "type" must be type of string. Found:', v);

        return !validRule || missingRule || missingClasses || invalidType;
      });
    }
  },
  /**
   * @description Defines the characters which splits a text into different pieces,
     to generate tags out of this pieces.
   * @property {props}
   * @type {Array}
   * @default [';']
   * @example
     separators: [';', ',']
     input: some; user input, has random; commas, an,d semicolons
     will split into: some - user input - has random - commas - an - d semicolons
   */
  separators: {
    type: Array,
    default: function _default() {
      return [';'];
    },
    validator: function validator(value) {
      return !value.some(function (s) {
        var invalidType = typeof s !== 'string';
        if (invalidType) console.warn('Separators must be type of string. Found:', s);
        return invalidType;
      });
    }
  },
  /**
   * @description If it's true, the user can't add or save a tag,
     if another exists, with the same text value.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  avoidAddingDuplicates: {
    type: Boolean,
    default: true
  },
  /**
   * @description If the input holds a value and loses the focus,
     a tag will be generated out of this value, if possible.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  addOnBlur: {
    type: Boolean,
    default: true
  },
  /**
   * @description Custom function to detect duplicates. If the function returns 'true',
    the tag will be marked as duplicate.
   * @property {props}
   * @type {Function}
   * @param {Array} tagsarray The Array of tags minus the one which is edited/created.
   * @param {Object} tag The tag which is edited or should be added to the tags array.
   * @example
     // The duplicate function to recreate the default behaviour, would look like this:
     isDuplicate(tags, tag) {
     &ensp;return tags.map(t => t.text).indexOf(tag.text) !== -1;
    }
   */
  isDuplicate: {
    type: Function,
    default: null
  },
  /**
   * @description If it's true, the user can paste into the input element and
     vue-tags-input will create tags out of the incoming text.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  addFromPaste: {
    type: Boolean,
    default: true
  },
  /**
   * @description Defines if it's possible to delete tags by pressing backspace.
     If so and the user wants to delete a tag,
     the tag gets the css class 'deletion-mark' for 1 second.
     If the user presses backspace again in that time period,
     the tag is removed from the tags array and the view.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  deleteOnBackspace: {
    default: true,
    type: Boolean
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./packages/input-tag/src/vue-tags-input/vue-tags-input.js?vue&type=script&lang=js&
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// The file contains the main application logic
// data, computed properties, methods, watchers and the component lifecycle







/* harmony default export */ var vue_tags_inputvue_type_script_lang_js_ = ({
  name: 'VueTagsInput',
  components: { TagInput: tag_input },
  props: vue_tags_input_props,
  data: function data() {
    return {
      newTag: null,
      tagsCopy: null,
      tagsEditStatus: null,
      deletionMark: null,
      deletionMarkTime: null,
      selectedItem: null,
      focused: null
    };
  },

  computed: {
    // Property which calculates if the autocomplete should be opened or not
    autocompleteOpen: function autocompleteOpen() {
      if (this.autocompleteAlwaysOpen) return true;
      return this.newTag !== null && this.newTag.length >= this.autocompleteMinLength && this.filteredAutocompleteItems.length > 0 && this.focused;
    },

    // Returns validated autocomplete items. Maybe duplicates are filtered out
    filteredAutocompleteItems: function filteredAutocompleteItems() {
      var _this = this;

      var is = this.autocompleteItems.map(function (i) {
        return createTag(i, _this.tags, _this.validation, _this.isDuplicate);
      });

      if (!this.autocompleteFilterDuplicates) return is;
      return is.filter(this.duplicateFilter);
    }
  },
  methods: {
    createClasses: createClasses,
    // Returns the index which item should be selected, based on the parameter 'method'
    getSelectedIndex: function getSelectedIndex(method) {
      var items = this.filteredAutocompleteItems;
      var selectedItem = this.selectedItem;
      var lastItem = items.length - 1;
      if (items.length === 0) return;
      if (selectedItem === null) return 0;
      if (method === 'before' && selectedItem === 0) return lastItem;else if (method === 'after' && selectedItem === lastItem) return 0;else return method === 'after' ? selectedItem + 1 : selectedItem - 1;
    },
    selectDefaultItem: function selectDefaultItem() {
      if (this.addOnlyFromAutocomplete && this.filteredAutocompleteItems.length > 0) {
        this.selectedItem = 0;
      } else this.selectedItem = null;
    },
    selectItem: function selectItem(e, method) {
      e.preventDefault();
      this.selectedItem = this.getSelectedIndex(method);
    },
    isSelected: function isSelected(index) {
      return this.selectedItem === index;
    },
    isMarked: function isMarked(index) {
      return this.deletionMark === index;
    },

    // Method which is called when the user presses backspace → remove the last tag
    invokeDelete: function invokeDelete() {
      // If we shouldn't delete tags on backspace or we have some characters in the input → stop
      if (!this.deleteOnBackspace || this.newTag.length > 0) return;
      var lastIndex = this.tagsCopy.length - 1;
      if (this.deletionMark === null) {
        // eslint-disable
        this.deletionMarkTime = setTimeout(function () {
          this.deletionMark = null;
        }, 1000);
        this.deletionMark = lastIndex;
      } else this.performDeleteTag(lastIndex);
    },
    addTagsFromPaste: function addTagsFromPaste() {
      var _this2 = this;

      if (!this.addFromPaste) return;
      setTimeout(function () {
        return _this2.performAddTags(_this2.newTag);
      }, 10);
    },

    // Method to call if a tag should switch to it's edit mode
    performEditTag: function performEditTag(index) {
      var _this3 = this;

      if (!this.allowEditTags) return;
      if (!this._events['before-editing-tag']) this.editTag(index);
      /**
       * @description Emits before a tag toggles to it's edit mode
       * @name before-editing-tag
       * @property {events} hook
       * @returns {Object} Contains the to editing tag: 'tag'.
         The tag's index: 'index'. And a function: 'editTag'.
         If the function is invoked, the tag toggles to it's edit mode.
       */
      this.$emit('before-editing-tag', {
        index: index,
        tag: this.tagsCopy[index],
        editTag: function editTag() {
          return _this3.editTag(index);
        }
      });
    },

    // Opens the edit mode for a tag and focuses it
    editTag: function editTag(index) {
      if (!this.allowEditTags) return;
      this.toggleEditMode(index);
      this.focus(index);
    },

    // Toggles the edit mode for a tag
    toggleEditMode: function toggleEditMode(index) {
      if (!this.allowEditTags || this.disabled) return;
      this.$set(this.tagsEditStatus, index, !this.tagsEditStatus[index]);
    },

    // only called by the @input event from TagInput.
    // Creates a new tag model and applys it to this.tagsCopy[index]
    createChangedTag: function createChangedTag(index, event) {
      // If the text of a tag changes → we create a new one with a new validation.
      // we take the value from the event if possible, because on google android phones
      // this.tagsCopy[index].text is incorrect, when typing a space on the virtual keyboard.
      // yes, this sucks ...
      var tag = this.tagsCopy[index];
      tag.text = event ? event.target.value : this.tagsCopy[index].text;
      this.$set(this.tagsCopy, index, createTag(tag, this.tagsCopy, this.validation, this.isDuplicate));
    },

    // Focuses the input of a tag
    focus: function focus(index) {
      var _this4 = this;

      this.$nextTick(function () {
        var el = _this4.$refs.tagCenter[index].querySelector('input.ti-tag-input');
        if (el) el.focus();
      });
    },
    quote: function quote(regex) {
      return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
    },

    // Cancels the edit mode for a tag → resets the tag to it's original model!
    cancelEdit: function cancelEdit(index) {
      if (!this.tags[index]) return;
      this.tagsCopy[index] = clone(createTag(this.tags[index], this.tags, this.validation, this.isDuplicate));
      this.$set(this.tagsEditStatus, index, false);
    },
    hasForbiddingAddRule: function hasForbiddingAddRule(tiClasses) {
      var _this5 = this;

      // Does the tag has a rule, defined by the user, which prohibits adding?
      return tiClasses.some(function (type) {
        var rule = _this5.validation.find(function (rule) {
          return type === rule.classes;
        });
        return rule ? rule.disableAdd : false;
      });
    },

    // Creates multiple tags out of a string, based on the prop separators
    createTagTexts: function createTagTexts(string) {
      var _this6 = this;

      var regex = new RegExp(this.separators.map(function (s) {
        return _this6.quote(s);
      }).join('|'));
      return string.split(regex).map(function (text) {
        return { text: text };
      });
    },

    // Method to call to delete a tag
    performDeleteTag: function performDeleteTag(index) {
      var _this7 = this;

      if (!this._events['before-deleting-tag']) this.deleteTag(index);
      /**
       * @description Emits before a tag is deleted
       * @name before-deleting-tag
       * @property {events} hook
       * @returns {Object} Contains the to editing tag: 'tag'. The tag's index: 'index'
         And a function: 'deleteTag'. If the function is invoked, the tag is deleted.
       */
      this.$emit('before-deleting-tag', {
        index: index,
        tag: this.tagsCopy[index],
        deleteTag: function deleteTag() {
          return _this7.deleteTag(index);
        }
      });
    },
    deleteTag: function deleteTag(index) {
      if (this.disabled) return;
      this.deletionMark = null;

      // Clears the debounce for the deletion mark and removes the tag
      clearTimeout(this.deletionMarkTime);
      this.tagsCopy.splice(index, 1);

      // Special update for the parent if .sync is on
      if (this._events['update:tags']) this.$emit('update:tags', this.tagsCopy);

      /**
       * @description Emits if the tags array changes
       * @name tags-changed
       * @property {events}
       * @returns {Array} The modified tags array
       */
      this.$emit('tags-changed', this.tagsCopy);
    },

    // Decides wether the input keyCode is one, which is allowed to modify/add tags
    noTriggerKey: function noTriggerKey(event, category) {
      var triggerKey = this[category].indexOf(event.keyCode) !== -1 || this[category].indexOf(event.key) !== -1;
      if (triggerKey) event.preventDefault();
      return !triggerKey;
    },

    // Method to call to add a tag
    performAddTags: function performAddTags(tag, event, source) {
      var _this8 = this;

      // If the input is disabled or the function was invoked by no trigger key → stop
      if (this.disabled || event && this.noTriggerKey(event, 'addOnKey')) return;

      // Convert the string or object into a tags array
      var tags = [];
      if ((typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object') tags = [tag];
      if (typeof tag === 'string') tags = this.createTagTexts(tag);

      // Filter out the tags with no content
      tags = tags.filter(function (tag) {
        return tag.text.trim().length > 0;
      });

      // The basic checks are done → try to add all tags
      tags.forEach(function (tag) {
        tag = createTag(tag, _this8.tags, _this8.validation, _this8.isDuplicate);
        if (!_this8._events['before-adding-tag']) _this8.addTag(tag, source);
        /**
         * @description Emits before a tag is added
         * @name before-adding-tag
         * @property {events} hook
         * @returns {Object} Contains the to editing tag: 'tag'. And a function: 'addTag'.
           If the function is invoked, the tag is added.
         */
        _this8.$emit('before-adding-tag', {
          tag: tag,
          addTag: function addTag() {
            return _this8.addTag(tag, source);
          }
        });
      });
    },
    duplicateFilter: function duplicateFilter(tag) {
      return this.isDuplicate ? !this.isDuplicate(this.tagsCopy, tag) : !this.tagsCopy.find(function (t) {
        return t.text === tag.text;
      });
    },
    addTag: function addTag(tag) {
      var _this9 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'new-tag-input';

      // Check if we should only add items from autocomplete and if so,
      // does the tag exists as an option
      var options = this.filteredAutocompleteItems.map(function (i) {
        return i.text;
      });
      if (this.addOnlyFromAutocomplete && options.indexOf(tag.text) === -1) return;

      // We use $nextTick here, because this.tagsCopy.length would be wrong if tags are added fast
      // like in a loop. With $nextTick we get the correct length value
      this.$nextTick(function () {
        // Maybe we should not add a tag because the maximum has reached already
        var maximumReached = _this9.maxTags && _this9.maxTags <= _this9.tagsCopy.length;

        /**
         * @description Emits if the maximum, the tags array is allowed to hold, is reached.
           The maximum can be defined by the prop 'max-tags'.
         * @name max-tags-reached
         * @property {events}
         * @returns {Object} The 'tag' which could not be added because of the length limitation.
         */
        if (maximumReached) return _this9.$emit('max-tags-reached', tag);

        // If we shouldn't add duplicates and that is one → stop
        var dup = _this9.avoidAddingDuplicates && !_this9.duplicateFilter(tag);
        /**
         * @description Emits if the user tries to add a duplicate to the tag's array
           and adding duplicates is prevented by the prop 'avoid-adding-duplicates'
         * @name adding-duplicate
         * @property {events}
         */
        if (dup) return _this9.$emit('adding-duplicate', tag);

        // If we find a rule which avoids that the tag is added → stop
        if (_this9.hasForbiddingAddRule(tag.tiClasses)) return;

        // Everything is okay → add the tag
        // xx this.$emit('input', '')
        _this9.tagsCopy.push(tag);

        // Special update for the parent if .sync is on
        if (_this9._events['update:tags']) _this9.$emit('update:tags', _this9.tagsCopy);

        // if the tag was added by autocomplete, focus the input
        if (source === 'autocomplete') _this9.$refs.newTagInput.focus();

        _this9.$emit('tags-changed', _this9.tagsCopy);

        _this9.newTag = _this9.value;
      });
    },

    // Method to call to save a tag
    performSaveTag: function performSaveTag(index, event) {
      var _this10 = this;

      var tag = this.tagsCopy[index];

      // If the input is disabled or the function was invoked by no trigger key → stop
      if (this.disabled || event && this.noTriggerKey(event, 'addOnKey')) return;

      // If the tag has no content → stop
      if (tag.text.trim().length === 0) return;

      // The basic checks are done → try to save the tag
      if (!this._events['before-saving-tag']) this.saveTag(index, tag);
      /**
       * @description Emits before a tag is saved
       * @name before-saving-tag
       * @property {events} hook
       * @returns {Object} Contains the to editing tag: 'tag'.
         The tag's index: 'index'. And a function: 'saveTag'.
         If the function is invoked, the tag is saved.
       */
      this.$emit('before-saving-tag', {
        index: index,
        tag: tag,
        saveTag: function saveTag() {
          return _this10.saveTag(index, tag);
        }
      });
    },
    saveTag: function saveTag(index, tag) {
      // If we shouldn't save duplicates → stop
      if (this.avoidAddingDuplicates) {
        var tagsDiff = clone(this.tagsCopy);
        var inputTag = tagsDiff.splice(index, 1)[0];
        var dup = this.isDuplicate ? this.isDuplicate(tagsDiff, inputTag) : tagsDiff.map(function (t) {
          return t.text;
        }).indexOf(inputTag.text) !== -1;

        /**
         * @description Emits if the user tries to save a duplicate in the tag's array
           and saving duplicates is prevented by the prop 'avoid-adding-duplicates'
         * @name saving-duplicate
         * @property {events}
         */
        if (dup) return this.$emit('saving-duplicate', tag);
      }

      // If we find a rule which avoids that the tag is added → stop
      if (this.hasForbiddingAddRule(tag.tiClasses)) return;

      // Everything is okay → save the tag
      this.$set(this.tagsCopy, index, tag);
      this.toggleEditMode(index);

      // Special update for the parent if .sync is on
      if (this._events['update:tags']) this.$emit('update:tags', this.tagsCopy);

      this.$emit('tags-changed', this.tagsCopy);
    },
    tagsEqual: function tagsEqual() {
      var _this11 = this;

      return !this.tagsCopy.some(function (t, i) {
        return !external_fast_deep_equal_default()(t, _this11.tags[i]);
      });
    },
    updateNewTag: function updateNewTag(ievent) {
      var value = ievent.target.value;
      this.newTag = value;
      // this.$emit('input', value)
    },
    initTags: function initTags() {
      // We always work with a copy of the "real" tags, to easier edit them
      this.tagsCopy = createTags(this.tags, this.validation, this.isDuplicate);

      // Let's create an array which defines whether a tag is in edit mode or not
      this.tagsEditStatus = clone(this.tags).map(function () {
        return false;
      });

      // We check if the original and the copied and validated tags are equal →
      // Update the parent if not and sync is on.
      if (this._events['update:tags'] && !this.tagsEqual()) {
        this.$emit('update:tags', this.tagsCopy);
      }
    },
    blurred: function blurred(e) {
      // if the click occurs on tagsinput → don't hide
      if (this.$el.contains(e.target)) return;

      // If we should add tags before blurring → add tag
      if (this.addOnBlur && this.focused) this.performAddTags(this.newTag);

      // Hide autocomplete layer
      this.focused = false;
    }
  },
  watch: {
    value: function value(newValue) {
      // If v-model change outside, update the newTag model
      if (!this.addOnlyFromAutocomplete) this.selectedItem = null;
      this.newTag = newValue;
    },

    tags: {
      handler: function handler() {
        // If the tags change outside, update the tagsCopy model
        this.initTags();
      },

      deep: true
    },
    autocompleteOpen: 'selectDefaultItem'
  },
  created: function created() {
    this.newTag = this.value;
    this.initTags();
  },
  mounted: function mounted() {
    // We select a default item based on props in the autocomplete
    this.selectDefaultItem();

    // We add a event listener to hide autocomplete on blur
    document.addEventListener('click', this.blurred);
  },
  destroyed: function destroyed() {
    document.removeEventListener('click', this.blurred);
  }
});
// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/vue-tags-input.js?vue&type=script&lang=js&
 /* harmony default export */ var vue_tags_input_vue_tags_inputvue_type_script_lang_js_ = (vue_tags_inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/index.vue





/* normalize component */

var vue_tags_input_component = normalizeComponent(
  vue_tags_input_vue_tags_inputvue_type_script_lang_js_,
  vue_tags_inputvue_type_template_id_0db38107_render,
  vue_tags_inputvue_type_template_id_0db38107_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var vue_tags_input_api; }
vue_tags_input_component.options.__file = "packages/input-tag/src/vue-tags-input/index.vue"
/* harmony default export */ var vue_tags_input = (vue_tags_input_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-tag/src/input-tag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var validators = {
  email: new RegExp(/^(([^<>()[\]\\.,:\s@\']+(\.[^<>()[\]\\.,:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  url: new RegExp(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i),
  text: new RegExp(/^[a-zA-Z]+$/),
  digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
  isodate: new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
};




/* harmony default export */ var input_tagvue_type_script_lang_js_ = ({
  name: 'TcInputTag',
  mixins: [vname_mixin],
  components: {
    vueTagsInput: vue_tags_input
  },
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    addOnKey: { type: Array, default: function _default() {
        return [13, ','];
      } },
    defaultRegexp: { type: String, default: '' },
    regexp: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    tags: { type: Array, default: function _default() {
        return [];
      } }
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data: function data() {
    return {
      tag: ''
    };
  },

  computed: {
    inputDisabled: function inputDisabled() {
      var result = this.disabled || (this.elForm || {}).disabled;
      if (result) {
        this.placeholder = '';
      }
      return result;
    },
    initTags: function initTags() {
      var initTags = [];
      if (!isEmpty(this.value)) {
        initTags = this.tags.concat(this.value.split(','));
      } else {
        initTags = this.tags;
      }
      return initTags.map(function (item) {
        return {
          text: item
        };
      });
    }
  },
  mounted: function mounted() {},

  watch: {},
  methods: {
    tagsChange: function tagsChange(newTags) {
      var tags = newTags.map(function (item) {
        return item.text;
      }).join(',');
      this.$emit('input', tags);
    },
    checkTag: function checkTag(obj) {
      var regexp = this.getRegexp();
      if (regexp === null) {
        obj.addTag();
        return;
      }
      if (regexp.test(obj.tag.text)) {
        obj.addTag();
      }
    },
    getRegexp: function getRegexp() {
      if (this.regexp !== null && this.regexp !== '') {
        return new RegExp(this.regexp);
      }
      if (this.defaultRegexp !== null && this.defaultRegexp !== '') {
        return validators[this.defaultRegexp];
      }
      return null;
    }
  }
});
// CONCATENATED MODULE: ./packages/input-tag/src/input-tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_tagvue_type_script_lang_js_ = (input_tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input-tag/src/input-tag.vue





/* normalize component */

var input_tag_component = normalizeComponent(
  src_input_tagvue_type_script_lang_js_,
  input_tagvue_type_template_id_4c7a2f20_render,
  input_tagvue_type_template_id_4c7a2f20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_tag_api; }
input_tag_component.options.__file = "packages/input-tag/src/input-tag.vue"
/* harmony default export */ var input_tag = (input_tag_component.exports);
// CONCATENATED MODULE: ./packages/input-tag/index.js


input_tag.install = function (Vue) {
  Vue.component(input_tag.name, input_tag);
};

/* harmony default export */ var packages_input_tag = (input_tag);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/letter-avatar/src/letter-avatar.vue?vue&type=template&id=1f417ef2&
var letter_avatarvue_type_template_id_1f417ef2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vue-avatar--wrapper",
      style: [_vm.style, _vm.customStyle],
      attrs: { "aria-hidden": "true" }
    },
    [
      _c(
        "span",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !this.isImage,
              expression: "!this.isImage"
            }
          ]
        },
        [_vm._v(_vm._s(_vm.userInitial))]
      )
    ]
  )
}
var letter_avatarvue_type_template_id_1f417ef2_staticRenderFns = []
letter_avatarvue_type_template_id_1f417ef2_render._withStripped = true


// CONCATENATED MODULE: ./packages/letter-avatar/src/letter-avatar.vue?vue&type=template&id=1f417ef2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/letter-avatar/src/letter-avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var letter_avatarvue_type_script_lang_js_ = ({
  name: 'TcLetterAvatar',
  props: {
    username: {
      type: String
    },
    initials: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    color: {
      type: String
    },
    customStyle: {
      type: Object
    },
    inline: {
      type: Boolean
    },
    size: {
      type: Number,
      default: 50
    },
    src: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: true
    },
    lighten: {
      type: Number,
      default: 80
    }
  },
  data: function data() {
    return {
      backgroundColors: ['#F44336', '#FF4081', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', /* '#FFEB3B' , */'#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B']
    };
  },
  mounted: function mounted() {
    if (!this.isImage) {
      this.$emit('avatar-initials', this.username, this.userInitial);
    }
  },

  computed: {
    background: function background() {
      if (!this.isImage) {
        return this.backgroundColor || this.randomBackgroundColor(this.username.length, this.backgroundColors);
      }
    },
    fontColor: function fontColor() {
      if (!this.isImage) {
        return this.color || this.lightenColor(this.background, this.lighten);
      }
    },
    isImage: function isImage() {
      return Boolean(this.src);
    },
    style: function style() {
      var style = {
        display: this.inline ? 'inline-flex' : 'flex',
        width: this.size + 'px',
        height: this.size + 'px',
        borderRadius: this.rounded ? '50%' : 0,
        lineHeight: this.size + Math.floor(this.size / 20) + 'px',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      };
      var imgBackgroundAndFontStyle = {
        background: 'transparent url(\'' + this.src + '\') no-repeat scroll 0% 0% / ' + this.size + 'px ' + this.size + 'px content-box border-box'
      };
      var initialBackgroundAndFontStyle = {
        backgroundColor: this.background,
        font: Math.floor(this.size / 2.5) + 'px/' + this.size + 'px Helvetica, Arial, sans-serif',
        color: this.fontColor
      };
      var backgroundAndFontStyle = this.isImage ? imgBackgroundAndFontStyle : initialBackgroundAndFontStyle;
      Object.assign(style, backgroundAndFontStyle);
      return style;
    },
    userInitial: function userInitial() {
      if (!this.isImage) {
        var initials = this.initials || this.initial(this.username);
        return initials;
      }
      return '';
    }
  },
  methods: {
    initial: function initial(username) {
      var parts = username.split(/[ -]/);
      var initials = '';
      for (var i = 0; i < parts.length; i++) {
        initials += parts[i].charAt(0);
      }
      if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
        initials = initials.replace(/[a-z]+/g, '');
      }
      initials = initials.substr(0, 3).toUpperCase();
      return initials;
    },
    randomBackgroundColor: function randomBackgroundColor(seed, colors) {
      return colors[seed % colors.length];
    },
    lightenColor: function lightenColor(hex, amt) {
      // From https://css-tricks.com/snippets/javascript/lighten-darken-color/
      var usePound = false;
      if (hex[0] === '#') {
        hex = hex.slice(1);
        usePound = true;
      }
      var num = parseInt(hex, 16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;else if (r < 0) r = 0;
      var b = (num >> 8 & 0x00FF) + amt;
      if (b > 255) b = 255;else if (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;else if (g < 0) g = 0;
      return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
    }
  }
});
// CONCATENATED MODULE: ./packages/letter-avatar/src/letter-avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_letter_avatarvue_type_script_lang_js_ = (letter_avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/letter-avatar/src/letter-avatar.vue





/* normalize component */

var letter_avatar_component = normalizeComponent(
  src_letter_avatarvue_type_script_lang_js_,
  letter_avatarvue_type_template_id_1f417ef2_render,
  letter_avatarvue_type_template_id_1f417ef2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var letter_avatar_api; }
letter_avatar_component.options.__file = "packages/letter-avatar/src/letter-avatar.vue"
/* harmony default export */ var letter_avatar = (letter_avatar_component.exports);
// CONCATENATED MODULE: ./packages/letter-avatar/index.js


letter_avatar.install = function (Vue) {
  Vue.component(letter_avatar.name, letter_avatar);
};

/* harmony default export */ var packages_letter_avatar = (letter_avatar);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pager/src/pager.vue?vue&type=template&id=917c9010&
var pagervue_type_template_id_917c9010_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "tc-pager" },
      [
        _c(
          "el-pagination",
          _vm._g(
            _vm._b(
              {
                attrs: {
                  small: _vm.small,
                  total: _vm.pager.totalCount,
                  "current-page": _vm.pager.pageIndex,
                  "page-sizes": _vm.pageSizeArray,
                  layout: _vm.layout,
                  "page-size": _vm.pager.pageSize,
                  background: ""
                },
                on: {
                  "current-change": _vm.pagerChange,
                  "size-change": _vm.sizeChange
                }
              },
              "el-pagination",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        )
      ],
      1
    )
  ])
}
var pagervue_type_template_id_917c9010_staticRenderFns = []
pagervue_type_template_id_917c9010_render._withStripped = true


// CONCATENATED MODULE: ./packages/pager/src/pager.vue?vue&type=template&id=917c9010&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pager/src/pager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagervue_type_script_lang_js_ = ({
  name: 'TcPager',
  props: {
    pager: { type: Object, required: false, default: null },
    small: { type: Boolean, required: false, default: false },
    layout: { type: String, required: false, default: 'total, prev, pager, next, sizes' },
    pageSizes: { type: String, required: false, default: '10,30,50,100' }
  },
  data: function data() {
    return {};
  },
  computed: {
    pageSizeArray: function pageSizeArray() {
      return this.pageSizes.split(',');
    }
  },
  methods: {
    pagerChange: function pagerChange(val) {
      this.pager.pageIndex = val;
      this.$emit('pagerChange', val, this.pager.pageSize);
    },
    sizeChange: function sizeChange(val) {
      this.pager.pageSize = val;
      this.$emit('pagerChange', this.pager.pageIndex, val);
      this.$emit('sizeChange', this.pager.pageIndex, val);
    }
  }
});
// CONCATENATED MODULE: ./packages/pager/src/pager.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagervue_type_script_lang_js_ = (pagervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/pager/src/pager.vue





/* normalize component */

var pager_component = normalizeComponent(
  src_pagervue_type_script_lang_js_,
  pagervue_type_template_id_917c9010_render,
  pagervue_type_template_id_917c9010_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var pager_api; }
pager_component.options.__file = "packages/pager/src/pager.vue"
/* harmony default export */ var pager = (pager_component.exports);
// CONCATENATED MODULE: ./packages/pager/index.js


pager.install = function (Vue) {
  Vue.component(pager.name, pager);
};

/* harmony default export */ var packages_pager = (pager);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/src/radio.vue?vue&type=template&id=69cd6268&
var radiovue_type_template_id_69cd6268_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-radio",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-radio",
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-radio",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var radiovue_type_template_id_69cd6268_staticRenderFns = []
radiovue_type_template_id_69cd6268_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio/src/radio.vue?vue&type=template&id=69cd6268&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/src/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'TcRadio',
  mixins: [vname_mixin],
  props: {
    value: { type: Boolean, required: false, default: false }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/radio/src/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio/src/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  src_radiovue_type_script_lang_js_,
  radiovue_type_template_id_69cd6268_render,
  radiovue_type_template_id_69cd6268_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_api; }
radio_component.options.__file = "packages/radio/src/radio.vue"
/* harmony default export */ var src_radio = (radio_component.exports);
// CONCATENATED MODULE: ./packages/radio/index.js


src_radio.install = function (Vue) {
  Vue.component(src_radio.name, src_radio);
};

/* harmony default export */ var packages_radio = (src_radio);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio-button/src/radio-button.vue?vue&type=template&id=04be5266&
var radio_buttonvue_type_template_id_04be5266_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-radio-button",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-radio-button",
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-radio-button",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var radio_buttonvue_type_template_id_04be5266_staticRenderFns = []
radio_buttonvue_type_template_id_04be5266_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio-button/src/radio-button.vue?vue&type=template&id=04be5266&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio-button/src/radio-button.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var radio_buttonvue_type_script_lang_js_ = ({
  name: 'TcRadioButton',
  mixins: [vname_mixin],
  props: {
    value: { type: String | Number, required: false, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/radio-button/src/radio-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radio_buttonvue_type_script_lang_js_ = (radio_buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio-button/src/radio-button.vue





/* normalize component */

var radio_button_component = normalizeComponent(
  src_radio_buttonvue_type_script_lang_js_,
  radio_buttonvue_type_template_id_04be5266_render,
  radio_buttonvue_type_template_id_04be5266_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_button_api; }
radio_button_component.options.__file = "packages/radio-button/src/radio-button.vue"
/* harmony default export */ var radio_button = (radio_button_component.exports);
// CONCATENATED MODULE: ./packages/radio-button/index.js


radio_button.install = function (Vue) {
  Vue.component(radio_button.name, radio_button);
};

/* harmony default export */ var packages_radio_button = (radio_button);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio-group/src/radio-group.vue?vue&type=template&id=46126e0c&
var radio_groupvue_type_template_id_46126e0c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-radio-group",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-radio-group",
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-radio-group",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm._l(_vm.providers, function(item) {
        return _c(
          "el-radio-button",
          {
            key: item.id,
            staticClass: "tc-radio-button",
            attrs: { label: item.value }
          },
          [_vm._v(_vm._s(item.text))]
        )
      }),
      _vm._t("default")
    ],
    2
  )
}
var radio_groupvue_type_template_id_46126e0c_staticRenderFns = []
radio_groupvue_type_template_id_46126e0c_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio-group/src/radio-group.vue?vue&type=template&id=46126e0c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio-group/src/radio-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var radio_groupvue_type_script_lang_js_ = ({
  name: 'TcRadioGroup',
  mixins: [vname_mixin],
  props: {
    providers: { type: Array, default: null },
    value: { type: String | Number, required: false, default: '' }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/radio-group/src/radio-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radio_groupvue_type_script_lang_js_ = (radio_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio-group/src/radio-group.vue





/* normalize component */

var radio_group_component = normalizeComponent(
  src_radio_groupvue_type_script_lang_js_,
  radio_groupvue_type_template_id_46126e0c_render,
  radio_groupvue_type_template_id_46126e0c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_group_api; }
radio_group_component.options.__file = "packages/radio-group/src/radio-group.vue"
/* harmony default export */ var radio_group = (radio_group_component.exports);
// CONCATENATED MODULE: ./packages/radio-group/index.js


radio_group.install = function (Vue) {
  Vue.component(radio_group.name, radio_group);
};

/* harmony default export */ var packages_radio_group = (radio_group);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var selectvue_type_template_id_0e4aade6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-select",
        _vm._g(
          _vm._b(
            {
              ref: "elSelect",
              staticClass: "tc-select",
              attrs: { vname: _vm.vname, value: _vm.value },
              on: { change: _vm.selectChange }
            },
            "el-select",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        _vm._l(_vm.providers, function(item) {
          return _c("el-option", {
            key: item.id,
            staticClass: "tc-option",
            attrs: { label: item.text, value: item.value }
          })
        }),
        1
      )
    ],
    1
  )
}
var selectvue_type_template_id_0e4aade6_staticRenderFns = []
selectvue_type_template_id_0e4aade6_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'TcSelect',
  mixins: [vname_mixin],
  props: {
    providers: { type: Array, default: null },
    value: { type: Object | String | Number, default: null }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},

  computed: {},
  methods: {
    selectChange: function selectChange(val) {
      this.$emit('input', val);
    }
  }
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_js_,
  selectvue_type_template_id_0e4aade6_render,
  selectvue_type_template_id_0e4aade6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js


src_select.install = function (Vue) {
  Vue.component(src_select.name, src_select);
};

/* harmony default export */ var packages_select = (src_select);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch/src/switch.vue?vue&type=template&id=2e631ae6&
var switchvue_type_template_id_2e631ae6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-switch",
    _vm._g(
      _vm._b(
        { staticClass: "tc-swtich", attrs: { vname: _vm.vname } },
        "el-switch",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
}
var switchvue_type_template_id_2e631ae6_staticRenderFns = []
switchvue_type_template_id_2e631ae6_render._withStripped = true


// CONCATENATED MODULE: ./packages/switch/src/switch.vue?vue&type=template&id=2e631ae6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch/src/switch.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var switchvue_type_script_lang_js_ = ({
  name: 'TcSwitch',
  mixins: [vname_mixin],
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/switch/src/switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/switch/src/switch.vue





/* normalize component */

var switch_component = normalizeComponent(
  src_switchvue_type_script_lang_js_,
  switchvue_type_template_id_2e631ae6_render,
  switchvue_type_template_id_2e631ae6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var switch_api; }
switch_component.options.__file = "packages/switch/src/switch.vue"
/* harmony default export */ var src_switch = (switch_component.exports);
// CONCATENATED MODULE: ./packages/switch/index.js


src_switch.install = function (Vue) {
  Vue.component(src_switch.name, src_switch);
};

/* harmony default export */ var packages_switch = (src_switch);
// CONCATENATED MODULE: ./packages/table/index.js


table.install = function (Vue) {
  Vue.component(table.name, table);
};

/* harmony default export */ var packages_table = (table);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/src/tabs.vue?vue&type=template&id=1eb151a6&
var tabsvue_type_template_id_1eb151a6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tabs",
    _vm._g(
      _vm._b({ staticClass: "tc-tabs" }, "el-tabs", _vm.$attrs, false),
      _vm.$listeners
    )
  )
}
var tabsvue_type_template_id_1eb151a6_staticRenderFns = []
tabsvue_type_template_id_1eb151a6_render._withStripped = true


// CONCATENATED MODULE: ./packages/tabs/src/tabs.vue?vue&type=template&id=1eb151a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/src/tabs.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  name: 'TcTabs',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/tabs/src/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabs/src/tabs.vue





/* normalize component */

var tabs_component = normalizeComponent(
  src_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_1eb151a6_render,
  tabsvue_type_template_id_1eb151a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tabs_api; }
tabs_component.options.__file = "packages/tabs/src/tabs.vue"
/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./packages/tabs/index.js


tabs.install = function (Vue) {
  Vue.component(tabs.name, tabs);
};

/* harmony default export */ var packages_tabs = (tabs);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/src/tag.vue?vue&type=template&id=a5b0dc34&
var tagvue_type_template_id_a5b0dc34_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tag",
    _vm._g(
      _vm._b({ staticClass: "tc-tag" }, "el-tag", _vm.$attrs, false),
      _vm.$listeners
    )
  )
}
var tagvue_type_template_id_a5b0dc34_staticRenderFns = []
tagvue_type_template_id_a5b0dc34_render._withStripped = true


// CONCATENATED MODULE: ./packages/tag/src/tag.vue?vue&type=template&id=a5b0dc34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/src/tag.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: 'TcTag',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/tag/src/tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tag/src/tag.vue





/* normalize component */

var tag_component = normalizeComponent(
  src_tagvue_type_script_lang_js_,
  tagvue_type_template_id_a5b0dc34_render,
  tagvue_type_template_id_a5b0dc34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tag_api; }
tag_component.options.__file = "packages/tag/src/tag.vue"
/* harmony default export */ var src_tag = (tag_component.exports);
// CONCATENATED MODULE: ./packages/tag/index.js


src_tag.install = function (Vue) {
  Vue.component(src_tag.name, src_tag);
};

/* harmony default export */ var packages_tag = (src_tag);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/time-picker/src/time-picker.vue?vue&type=template&id=5d710dce&
var time_pickervue_type_template_id_5d710dce_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-time-select",
    _vm._g(
      _vm._b(
        {
          staticClass: "tc-time-picker",
          staticStyle: { width: "100%" },
          attrs: { value: _vm.value, vname: _vm.vname }
        },
        "el-time-select",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
}
var time_pickervue_type_template_id_5d710dce_staticRenderFns = []
time_pickervue_type_template_id_5d710dce_render._withStripped = true


// CONCATENATED MODULE: ./packages/time-picker/src/time-picker.vue?vue&type=template&id=5d710dce&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/time-picker/src/time-picker.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var time_pickervue_type_script_lang_js_ = ({
  name: 'TcTimePicker',
  mixins: [vname_mixin],
  props: {
    value: { type: Object | String | Number, default: null }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/time-picker/src/time-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_time_pickervue_type_script_lang_js_ = (time_pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/time-picker/src/time-picker.vue





/* normalize component */

var time_picker_component = normalizeComponent(
  src_time_pickervue_type_script_lang_js_,
  time_pickervue_type_template_id_5d710dce_render,
  time_pickervue_type_template_id_5d710dce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_picker_api; }
time_picker_component.options.__file = "packages/time-picker/src/time-picker.vue"
/* harmony default export */ var time_picker = (time_picker_component.exports);
// CONCATENATED MODULE: ./packages/time-picker/index.js


time_picker.install = function (Vue) {
  Vue.component(time_picker.name, time_picker);
};

/* harmony default export */ var packages_time_picker = (time_picker);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree/src/tree.vue?vue&type=template&id=547575a6&
var treevue_type_template_id_547575a6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tree",
    _vm._g(
      _vm._b({ staticClass: "tc-tree" }, "el-tree", _vm.$attrs, false),
      _vm.$listeners
    )
  )
}
var treevue_type_template_id_547575a6_staticRenderFns = []
treevue_type_template_id_547575a6_render._withStripped = true


// CONCATENATED MODULE: ./packages/tree/src/tree.vue?vue&type=template&id=547575a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree/src/tree.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'TcTree',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/tree/src/tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tree/src/tree.vue





/* normalize component */

var tree_component = normalizeComponent(
  src_treevue_type_script_lang_js_,
  treevue_type_template_id_547575a6_render,
  treevue_type_template_id_547575a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tree_api; }
tree_component.options.__file = "packages/tree/src/tree.vue"
/* harmony default export */ var tree = (tree_component.exports);
// CONCATENATED MODULE: ./packages/tree/index.js


tree.install = function (Vue) {
  Vue.component(tree.name, tree);
};

/* harmony default export */ var packages_tree = (tree);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-table/src/tree-table.vue?vue&type=template&id=0e723886&
var tree_tablevue_type_template_id_0e723886_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "tc-table",
        _vm._g(
          _vm._b(
            {
              ref: "eltable",
              staticClass: "tc-tree-table",
              attrs: {
                data: _vm.formatData,
                columns: _vm.formatColumns,
                "row-style": _vm.showRow,
                stripe: _vm.stripe,
                border: _vm.border,
                fit: _vm.fit,
                sequence: _vm.sequence,
                selection: _vm.selection
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(ref) {
                      var value = ref.value
                      var columnName = ref.columnName
                      var rowData = ref.rowData
                      var column = ref.column
                      var scope = ref.scope
                      return [
                        _vm._t(
                          "default",
                          [_vm._v("\n        " + _vm._s(value) + "\n      ")],
                          {
                            value: value,
                            columnName: columnName,
                            rowData: rowData,
                            column: column,
                            scope: scope
                          }
                        )
                      ]
                    }
                  }
                ],
                null,
                true
              )
            },
            "tc-table",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var tree_tablevue_type_template_id_0e723886_staticRenderFns = []
tree_tablevue_type_template_id_0e723886_render._withStripped = true


// CONCATENATED MODULE: ./packages/tree-table/src/tree-table.vue?vue&type=template&id=0e723886&

// CONCATENATED MODULE: ./packages/tree-table/src/eval.js



function eval_treeToArray(data, expandAll) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var tmp = [];
  var index = 0;
  Array.from(data).forEach(function (record) {
    if (record.hidden) {
      return;
    }
    index++;
    if (record._expanded === undefined) {
      external_vue_default.a.set(record, '_expanded', record.expand | expandAll);
    }
    var _level = 1;
    if (level !== undefined && level !== null) {
      _level = level + 1;
    }
    external_vue_default.a.set(record, '_level', _level);
    // 如果有父元素
    if (parent) {
      external_vue_default.a.set(record, 'parent', parent);

      external_vue_default.a.set(record, 'hier', parent.hier + '.' + index);
    } else {
      external_vue_default.a.set(record, 'hier', index);
    }
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      eval_treeToArray(record.children, expandAll, record, _level);
    }
  });
  return tmp;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-table/src/tree-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var tree_tablevue_type_script_lang_js_ = ({
  name: 'TcTreeTable',
  mixins: [table],
  props: {
    hier: { type: Boolean, required: false, default: false },
    sequence: { type: Boolean, required: false, default: false },
    evalFunc: { type: Function, required: false, default: null },
    evalArgs: { type: Array, default: function _default() {
        return [];
      } },
    expandAll: { type: Boolean, default: false }
  },
  computed: {
    // 格式化数据源
    formatData: function formatData() {
      var tmp = void 0;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      var func = this.evalFunc || eval_treeToArray;
      var args = this.evalArgs ? [tmp, this.expandAll].concat(this.evalArgs) : [tmp, this.expandAll];
      var result = func.apply(null, args);
      return result;
    },
    formatColumns: function formatColumns() {
      if (this.hier) {
        this.columns.push({ text: '层级', name: 'hier', width: '100', align: 'left' });
      }
      return this.columns;
    }
  },
  created: function created() {},

  methods: {
    showRow: function showRow(row) {
      var show = row.row.parent ? row.row.parent._expanded && row.row.parent._show : true;
      row.row._show = show;
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;';
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.$refs.eltable.toggleRowSelection(row, selected);
    },
    setCurrentRow: function setCurrentRow(currentRow) {
      this.$refs.eltable.setCurrentRow(currentRow);
    },
    getCurrentRow: function getCurrentRow() {
      return this.$refs.eltable.getCurrentRow();
    },
    clearSelection: function clearSelection() {
      this.$refs.eltable.clearSelection();
    },
    toObject: function toObject(observer) {
      return Object.assign({}, observer);
    }
  }
});
// CONCATENATED MODULE: ./packages/tree-table/src/tree-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tree_tablevue_type_script_lang_js_ = (tree_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tree-table/src/tree-table.vue





/* normalize component */

var tree_table_component = normalizeComponent(
  src_tree_tablevue_type_script_lang_js_,
  tree_tablevue_type_template_id_0e723886_render,
  tree_tablevue_type_template_id_0e723886_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tree_table_api; }
tree_table_component.options.__file = "packages/tree-table/src/tree-table.vue"
/* harmony default export */ var tree_table = (tree_table_component.exports);
// CONCATENATED MODULE: ./packages/tree-table/index.js


tree_table.install = function (Vue) {
  Vue.component(tree_table.name, tree_table);
};

/* harmony default export */ var packages_tree_table = (tree_table);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/xg-player/src/xg-player.vue?vue&type=template&id=5a1f79f0&
var xg_playervue_type_template_id_5a1f79f0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tc-xg-player" },
    [
      _c(
        "Xgplayer",
        _vm._g(_vm._b({}, "Xgplayer", _vm.$attrs, false), _vm.$listeners)
      )
    ],
    1
  )
}
var xg_playervue_type_template_id_5a1f79f0_staticRenderFns = []
xg_playervue_type_template_id_5a1f79f0_render._withStripped = true


// CONCATENATED MODULE: ./packages/xg-player/src/xg-player.vue?vue&type=template&id=5a1f79f0&

// EXTERNAL MODULE: external "xgplayer-vue"
var external_xgplayer_vue_ = __webpack_require__(13);
var external_xgplayer_vue_default = /*#__PURE__*/__webpack_require__.n(external_xgplayer_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/xg-player/src/xg-player.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var xg_playervue_type_script_lang_js_ = ({
  name: 'TcXgPlayer',
  components: {
    Xgplayer: external_xgplayer_vue_default.a
  },
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/xg-player/src/xg-player.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_xg_playervue_type_script_lang_js_ = (xg_playervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/xg-player/src/xg-player.vue





/* normalize component */

var xg_player_component = normalizeComponent(
  src_xg_playervue_type_script_lang_js_,
  xg_playervue_type_template_id_5a1f79f0_render,
  xg_playervue_type_template_id_5a1f79f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var xg_player_api; }
xg_player_component.options.__file = "packages/xg-player/src/xg-player.vue"
/* harmony default export */ var xg_player = (xg_player_component.exports);
// CONCATENATED MODULE: ./packages/xg-player/index.js


xg_player.install = function (Vue) {
  Vue.component(xg_player.name, xg_player);
};

/* harmony default export */ var packages_xg_player = (xg_player);
// CONCATENATED MODULE: ./packages/tennetcn-ui.js




































// CONCATENATED MODULE: ./src/utils/util-lib.js


var util_lib_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue.prototype.$tcUtil = Vue.prototype.$tcUtil || {};
  Vue.prototype.$tcUtil.isEmpty = isEmpty;
  Vue.prototype.$tcUtil.isArray = isArray;
  Vue.prototype.$tcUtil.isString = isString;
  Vue.prototype.$tcUtil.isNumber = isNumber;
  Vue.prototype.$tcUtil.isBoolean = isBoolean;
  Vue.prototype.$tcUtil.isUndefined = isUndefined;
  Vue.prototype.$tcUtil.isNull = isNull;
  Vue.prototype.$tcUtil.isObject = isObject;
  Vue.prototype.$tcUtil.isFunction = isFunction;
  Vue.prototype.$tcUtil.isDate = isDate;
  Vue.prototype.$tcUtil.findComponentDownward = findComponentDownward;
  Vue.prototype.$tcUtil.findComponentUpward = findComponentUpward;
  Vue.prototype.$tcUtil.findComponentsUpward = findComponentsUpward;
  Vue.prototype.$tcUtil.findComponentsDownward = findComponentsDownward;
  Vue.prototype.$tcUtil.findBrothersComponents = findBrothersComponents;

  Vue.prototype.$moment = Vue.prototype.$moment || {};
  Vue.prototype.$moment.formatDate = formatDate;
  Vue.prototype.$moment.formatDateTime = formatDateTime;

  Vue.prototype.$confirm = Vue.prototype.$confirm || {};
  Vue.prototype.$confirm.warning = message_box_confirm;
};

/* harmony default export */ var util_lib = (util_lib_install);
// CONCATENATED MODULE: ./src/directives/focus/focus.js
/* harmony default export */ var focus_focus = ({
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function inserted(el) {
    // 聚焦元素
    el.querySelector('.el-input__inner').focus();
  }
});
// CONCATENATED MODULE: ./src/directives/focus/index.js


var focus_install = function install(Vue) {
  Vue.directive('focus', focus_focus);
};

if (window.Vue) {
  window['focus'] = focus_focus;
  Vue.use(focus_install); // eslint-disable-line
}

focus_focus.install = focus_install;
/* harmony default export */ var directives_focus = (focus_focus);
// CONCATENATED MODULE: ./src/directives/index.js


var directives_install = function install(Vue) {
  Vue.use(directives_focus);
};

/* harmony default export */ var directives = (directives_install);
// CONCATENATED MODULE: ./src/index.js



var components = [packages_badge, packages_block, packages_button, packages_button_group, packages_checkbox, packages_checkbox_button, packages_checkbox_group, packages_date_picker, packages_date_time_picker, packages_dialog, packages_edit_table, packages_edit_tree_table, packages_fieldset, packages_fixed_bottom, packages_form, packages_form_item, packages_hot_table, packages_input, packages_input_money, packages_input_number, packages_input_phone, packages_input_tag, packages_letter_avatar, packages_pager, packages_radio, packages_radio_button, packages_radio_group, packages_select, packages_switch, packages_table, packages_tabs, packages_tag, packages_time_picker, packages_tree, packages_tree_table, packages_xg_player];






var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // load element ui
  Vue.use(external_element_ui_default.a);
  // load utilLib
  Vue.use(util_lib);
  // load directive
  Vue.use(directives);

  // load components
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '0.0.48',
  install: src_install,
  utilLib: util_lib,
  directives: directives,
  TcBadge: packages_badge,
  TcBlock: packages_block,
  TcButton: packages_button,
  TcButtonGroup: packages_button_group,
  TcCheckbox: packages_checkbox,
  TcCheckboxButton: packages_checkbox_button,
  TcCheckboxGroup: packages_checkbox_group,
  TcDatePicker: packages_date_picker,
  TcDateTimePicker: packages_date_time_picker,
  TcDialog: packages_dialog,
  TcEditTable: packages_edit_table,
  TcEditTreeTable: packages_edit_tree_table,
  TcFieldset: packages_fieldset,
  TcFixedBottom: packages_fixed_bottom,
  TcForm: packages_form,
  TcFormItem: packages_form_item,
  TcHotTable: packages_hot_table,
  TcInput: packages_input,
  TcInputMoney: packages_input_money,
  TcInputNumber: packages_input_number,
  TcInputPhone: packages_input_phone,
  TcInputTag: packages_input_tag,
  TcLetterAvatar: packages_letter_avatar,
  TcPager: packages_pager,
  TcRadio: packages_radio,
  TcRadioButton: packages_radio_button,
  TcRadioGroup: packages_radio_group,
  TcSelect: packages_select,
  TcSwitch: packages_switch,
  TcTable: packages_table,
  TcTabs: packages_tabs,
  TcTag: packages_tag,
  TcTimePicker: packages_time_picker,
  TcTree: packages_tree,
  TcTreeTable: packages_tree_table,
  TcXgPlayer: packages_xg_player
});

/***/ })
/******/ ])["default"];