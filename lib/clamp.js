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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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


/***/ }),

/***/ 12:
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

/***/ 14:
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

var	fixUrls = __webpack_require__(15);

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

/***/ 15:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ".my-pp {\n  width: 300px !important;\n}\n", ""]);



/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ".resize-triggers {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-expand-trigger,\n.resize-contract-trigger,\n.resize-contract-trigger:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-expand-trigger,\n.resize-contract-trigger {\n  background: #eee;\n  overflow: auto;\n}\n\n.resize-contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}\n", ""]);



/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/clamp/src/index.vue?vue&type=template&id=72230f02&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tooltip",
    { attrs: { disabled: _vm.tipDisabled, placement: _vm.placement } },
    [
      _c(
        "div",
        { style: _vm.tipStyle, attrs: { slot: "content" }, slot: "content" },
        [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]
      ),
      _c(
        "clamp",
        _vm._g(
          _vm._b(
            {
              ref: "clamp",
              attrs: { ellipsis: _vm.ellipsis, expanded: _vm.localExpanded },
              on: {
                "update:expanded": function($event) {
                  _vm.localExpanded = $event
                }
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "after",
                    fn: function(ref) {
                      var expand = ref.expand
                      var collapse = ref.collapse
                      var toggle = ref.toggle
                      var clamped = ref.clamped
                      var expanded = ref.expanded
                      return _vm.isExpand
                        ? [
                            _vm._t(
                              "after",
                              [
                                expanded
                                  ? _c(
                                      "tc-button",
                                      {
                                        attrs: { type: "text" },
                                        on: { click: _vm.doClamp }
                                      },
                                      [_vm._v(_vm._s(_vm.clampText))]
                                    )
                                  : _vm._e(),
                                !expanded && clamped
                                  ? _c(
                                      "tc-button",
                                      {
                                        attrs: { type: "text" },
                                        on: { click: _vm.doExpand }
                                      },
                                      [_vm._v(_vm._s(_vm.expandText))]
                                    )
                                  : _vm._e()
                              ],
                              {
                                expand: expand,
                                collapse: collapse,
                                toggle: toggle,
                                clamped: clamped,
                                ",": "",
                                expanded: expanded
                              }
                            )
                          ]
                        : undefined
                    }
                  }
                ],
                null,
                true
              )
            },
            "clamp",
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
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/clamp/src/index.vue?vue&type=template&id=72230f02&

// CONCATENATED MODULE: ./src/utils/resize-detector/util.js
var raf = null;
function requestAnimationFrame(callback) {
  if (!raf) {
    raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      return setTimeout(callback, 16);
    }).bind(window);
  }
  return raf(callback);
}

var caf = null;
function cancelAnimationFrame(id) {
  if (!caf) {
    caf = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
      clearTimeout(id);
    }).bind(window);
  }

  caf(id);
}

function createStyles(styleText) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = styleText;
  } else {
    style.appendChild(document.createTextNode(styleText));
  }
  (document.querySelector('head') || document.body).appendChild(style);
  return style;
}

function createElement(tagName) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elem = document.createElement(tagName);
  Object.keys(props).forEach(function (key) {
    elem[key] = props[key];
  });
  return elem;
}

function getComputedStyle(elem, prop, pseudo) {
  // for older versions of Firefox, `getComputedStyle` required
  // the second argument and may return `null` for some elements
  // when `display: none`
  var computedStyle = window.getComputedStyle(elem, pseudo || null) || {
    display: 'none'
  };

  return computedStyle[prop];
}

function getRenderInfo(elem) {
  if (!document.documentElement.contains(elem)) {
    return {
      detached: true,
      rendered: false
    };
  }

  var current = elem;
  while (current !== document) {
    if (getComputedStyle(current, 'display') === 'none') {
      return {
        detached: false,
        rendered: false
      };
    }
    current = current.parentNode;
  }

  return {
    detached: false,
    rendered: true
  };
}
// EXTERNAL MODULE: ./src/utils/resize-detector/triggers.css
var resize_detector_triggers = __webpack_require__(25);
var triggers_default = /*#__PURE__*/__webpack_require__.n(resize_detector_triggers);

// CONCATENATED MODULE: ./src/utils/resize-detector/index.js




var total = 0;
var style = null;

function addListener(elem, callback) {
  if (!elem.__resize_mutation_handler__) {
    elem.__resize_mutation_handler__ = handleMutation.bind(elem);
  }

  var listeners = elem.__resize_listeners__;

  if (!listeners) {
    elem.__resize_listeners__ = [];
    if (window.ResizeObserver) {
      var offsetWidth = elem.offsetWidth,
          offsetHeight = elem.offsetHeight;

      var ro = new ResizeObserver(function () {
        if (!elem.__resize_observer_triggered__) {
          elem.__resize_observer_triggered__ = true;
          if (elem.offsetWidth === offsetWidth && elem.offsetHeight === offsetHeight) {
            return;
          }
        }
        runCallbacks(elem);
      });

      // initially display none won't trigger ResizeObserver callback

      var _getRenderInfo = getRenderInfo(elem),
          detached = _getRenderInfo.detached,
          rendered = _getRenderInfo.rendered;

      elem.__resize_observer_triggered__ = detached === false && rendered === false;
      elem.__resize_observer__ = ro;
      ro.observe(elem);
    } else if (elem.attachEvent && elem.addEventListener) {
      // targeting IE9/10
      elem.__resize_legacy_resize_handler__ = function handleLegacyResize() {
        runCallbacks(elem);
      };
      elem.attachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.addEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    } else {
      if (!total) {
        style = createStyles(triggers_default.a);
      }
      initTriggers(elem);

      elem.__resize_rendered__ = getRenderInfo(elem).rendered;
      if (window.MutationObserver) {
        var mo = new MutationObserver(elem.__resize_mutation_handler__);
        mo.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
        elem.__resize_mutation_observer__ = mo;
      }
    }
  }

  elem.__resize_listeners__.push(callback);
  total++;
}

function removeListener(elem, callback) {
  // targeting IE9/10
  if (elem.detachEvent && elem.removeEventListener) {
    elem.detachEvent('onresize', elem.__resize_legacy_resize_handler__);
    document.removeEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    return;
  }

  var listeners = elem.__resize_listeners__;
  if (!listeners) {
    return;
  }
  listeners.splice(listeners.indexOf(callback), 1);

  if (!listeners.length) {
    if (elem.__resize_observer__) {
      elem.__resize_observer__.unobserve(elem);
      elem.__resize_observer__.disconnect();
      elem.__resize_observer__ = null;
    } else {
      if (elem.__resize_mutation_observer__) {
        elem.__resize_mutation_observer__.disconnect();
        elem.__resize_mutation_observer__ = null;
      }
      elem.removeEventListener('scroll', handleScroll);
      elem.removeChild(elem.__resize_triggers__.triggers);
      elem.__resize_triggers__ = null;
    }
    elem.__resize_listeners__ = null;
  }

  if (! --total && style) {
    style.parentNode.removeChild(style);
  }
}

function getUpdatedSize(elem) {
  var _elem$__resize_last__ = elem.__resize_last__,
      width = _elem$__resize_last__.width,
      height = _elem$__resize_last__.height;
  var offsetWidth = elem.offsetWidth,
      offsetHeight = elem.offsetHeight;

  if (offsetWidth !== width || offsetHeight !== height) {
    return {
      width: offsetWidth,
      height: offsetHeight
    };
  }
  return null;
}

function handleMutation() {
  // `this` denotes the scrolling element
  var _getRenderInfo2 = getRenderInfo(this),
      rendered = _getRenderInfo2.rendered,
      detached = _getRenderInfo2.detached;

  if (rendered !== this.__resize_rendered__) {
    if (!detached && this.__resize_triggers__) {
      resetTriggers(this);
      this.addEventListener('scroll', handleScroll, true);
    }
    this.__resize_rendered__ = rendered;
    runCallbacks(this);
  }
}

function handleScroll() {
  var _this = this;

  // `this` denotes the scrolling element
  resetTriggers(this);
  if (this.__resize_raf__) {
    cancelAnimationFrame(this.__resize_raf__);
  }
  this.__resize_raf__ = requestAnimationFrame(function () {
    var updated = getUpdatedSize(_this);
    if (updated) {
      _this.__resize_last__ = updated;
      runCallbacks(_this);
    }
  });
}

function runCallbacks(elem) {
  if (!elem || !elem.__resize_listeners__) {
    return;
  }
  elem.__resize_listeners__.forEach(function (callback) {
    callback.call(elem);
  });
}

function initTriggers(elem) {
  var position = getComputedStyle(elem, 'position');
  if (!position || position === 'static') {
    elem.style.position = 'relative';
  }

  elem.__resize_old_position__ = position;
  elem.__resize_last__ = {};

  var triggers = createElement('div', {
    className: 'resize-triggers'
  });
  var expand = createElement('div', {
    className: 'resize-expand-trigger'
  });
  var expandChild = createElement('div');
  var contract = createElement('div', {
    className: 'resize-contract-trigger'
  });
  expand.appendChild(expandChild);
  triggers.appendChild(expand);
  triggers.appendChild(contract);
  elem.appendChild(triggers);

  elem.__resize_triggers__ = {
    triggers: triggers,
    expand: expand,
    expandChild: expandChild,
    contract: contract
  };

  resetTriggers(elem);
  elem.addEventListener('scroll', handleScroll, true);

  elem.__resize_last__ = {
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

function resetTriggers(elem) {
  var _elem$__resize_trigge = elem.__resize_triggers__,
      expand = _elem$__resize_trigge.expand,
      expandChild = _elem$__resize_trigge.expandChild,
      contract = _elem$__resize_trigge.contract;

  // batch read

  var csw = contract.scrollWidth,
      csh = contract.scrollHeight;
  var eow = expand.offsetWidth,
      eoh = expand.offsetHeight,
      esw = expand.scrollWidth,
      esh = expand.scrollHeight;

  // batch write

  contract.scrollLeft = csw;
  contract.scrollTop = csh;
  expandChild.style.width = eow + 1 + 'px';
  expandChild.style.height = eoh + 1 + 'px';
  expand.scrollLeft = esw;
  expand.scrollTop = esh;
}
// CONCATENATED MODULE: ./packages/clamp/src/Clamp.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var UPDATE_TRIGGERS = ['maxLines', 'maxHeight', 'ellipsis', 'isClamped'];
var INIT_TRIGGERS = ['tag', 'text', 'autoresize'];

/* harmony default export */ var Clamp = ({
  name: 'vue-clamp',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    maxLines: Number,
    maxHeight: [String, Number],
    ellipsis: {
      type: String,
      default: '…'
    },
    expanded: Boolean
  },
  data: function data() {
    return {
      offset: null,
      text: this.getText(),
      localExpanded: !!this.expanded
    };
  },

  computed: {
    clampedText: function clampedText() {
      return this.text.slice(0, this.offset) + this.ellipsis;
    },
    isClamped: function isClamped() {
      if (!this.text) {
        return false;
      }
      return this.offset !== this.text.length;
    },
    realText: function realText() {
      return this.isClamped ? this.clampedText : this.text;
    },
    realMaxHeight: function realMaxHeight() {
      if (this.localExpanded) {
        return null;
      }
      var maxHeight = this.maxHeight;

      if (!maxHeight) {
        return null;
      }
      return typeof maxHeight === 'number' ? maxHeight + 'px' : maxHeight;
    }
  },
  watch: {
    expanded: function expanded(val) {
      this.localExpanded = val;
    },
    localExpanded: function localExpanded(val) {
      if (val) {
        this.clampAt(this.text.length);
      } else {
        this.update();
      }
      if (this.expanded !== val) {
        this.$emit('update:expanded', val);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.init();

    INIT_TRIGGERS.forEach(function (prop) {
      _this.$watch(prop, _this.init);
    });

    UPDATE_TRIGGERS.forEach(function (prop) {
      _this.$watch(prop, _this.update);
    });
  },
  updated: function updated() {
    this.text = this.getText();
    this.applyChange();
  },
  beforeDestroy: function beforeDestroy() {
    this.cleanUp();
  },

  methods: {
    init: function init() {
      var _this2 = this;

      var contents = this.$slots.default;
      if (!contents) {
        return;
      }

      this.offset = this.text.length;

      this.cleanUp();

      if (this.autoresize) {
        var resizeCallback = function resizeCallback() {
          _this2.update();
        };
        addListener(this.$el, resizeCallback);
        this.unregisterResizeCallback = function () {
          removeListener(_this2.$el, resizeCallback);
        };
      }
      this.update();
    },
    update: function update() {
      if (this.localExpanded) {
        return;
      }
      this.applyChange();
      if (this.isOverflow() || this.isClamped) {
        this.search();
      }
    },

    // isClamped() {
    //   return this.offset !== this.text.length
    // },
    expand: function expand() {
      this.localExpanded = true;
    },
    collapse: function collapse() {
      this.localExpanded = false;
    },
    toggle: function toggle() {
      this.localExpanded = !this.localExpanded;
    },
    getLines: function getLines() {
      return this.$refs.content.getClientRects().length;
    },
    isOverflow: function isOverflow() {
      if (!this.maxLines && !this.maxHeight) {
        return false;
      }

      if (this.maxLines) {
        if (this.getLines() > this.maxLines) {
          return true;
        }
      }

      if (this.maxHeight) {
        if (this.$el.scrollHeight > this.$el.offsetHeight) {
          return true;
        }
      }
      return false;
    },
    getText: function getText() {
      // Look for the first non-empty text node
      var _filter = (this.$slots.default || []).filter(function (node) {
        return !node.tag && !node.isComment;
      }),
          _filter2 = _slicedToArray(_filter, 1),
          content = _filter2[0];

      return content ? content.text : '';
    },
    moveEdge: function moveEdge(steps) {
      this.clampAt(this.offset + steps);
    },
    clampAt: function clampAt(offset) {
      this.offset = offset;
      this.applyChange();
    },
    applyChange: function applyChange() {
      this.$refs.text.textContent = this.realText;
    },
    stepToFit: function stepToFit() {
      this.fill();
      this.clamp();
    },
    fill: function fill() {
      while ((!this.isOverflow() || this.getLines() < 2) && this.offset < this.text.length) {
        this.moveEdge(1);
      }
    },
    clamp: function clamp() {
      while (this.isOverflow() && this.getLines() > 1 && this.offset > 0) {
        this.moveEdge(-1);
      }
    },
    search: function search() {
      for (var _len = arguments.length, range = Array(_len), _key = 0; _key < _len; _key++) {
        range[_key] = arguments[_key];
      }

      var _range = _slicedToArray(range, 2),
          _range$ = _range[0],
          from = _range$ === undefined ? 0 : _range$,
          _range$2 = _range[1],
          to = _range$2 === undefined ? this.offset : _range$2;

      if (to - from <= 3) {
        this.stepToFit();
        return;
      }
      var target = Math.floor((to + from) / 2);
      this.clampAt(target);
      if (this.isOverflow()) {
        this.search(from, target);
      } else {
        this.search(target, to);
      }
    },
    cleanUp: function cleanUp() {
      if (this.unregisterResizeCallback) {
        this.unregisterResizeCallback();
      }
    }
  },
  render: function render(h) {
    var contents = [h('span', {
      ref: 'text',
      attrs: {
        'aria-label': this.text.trim()
      }
    }, this.realText)];

    var expand = this.expand,
        collapse = this.collapse,
        toggle = this.toggle;

    var scope = {
      expand: expand,
      collapse: collapse,
      toggle: toggle,
      clamped: this.isClamped,
      expanded: this.localExpanded
    };
    var before = this.$scopedSlots.before ? this.$scopedSlots.before(scope) : this.$slots.before;
    if (before) {
      contents.unshift.apply(contents, _toConsumableArray(Array.isArray(before) ? before : [before]));
    }
    var after = this.$scopedSlots.after ? this.$scopedSlots.after(scope) : this.$slots.after;
    if (after) {
      contents.push.apply(contents, _toConsumableArray(Array.isArray(after) ? after : [after]));
    }
    var lines = [h('span', {
      style: {
        boxShadow: 'transparent 0 0'
      },
      ref: 'content'
    }, contents)];
    return h(this.tag, {
      style: {
        maxHeight: this.realMaxHeight,
        overflow: 'hidden'
      }
    }, lines);
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/clamp/src/index.vue?vue&type=script&lang=js&
var srcvue_type_script_lang_js_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'TcClamp',
  componentName: 'TcClamp',
  components: { clamp: Clamp },
  props: {
    useMode: { type: String, default: 'tip', validator: function validator(value) {
        return ['tip', 'expand'].indexOf(value) !== -1;
      } },
    ellipsis: { type: String, default: '…' },
    placement: { type: String, default: 'top' },
    autoTip: { type: Boolean, default: false },
    tipWidth: { type: Number, default: 200 },
    expanded: { type: Boolean, default: false },
    expandText: { type: String, default: '展开' },
    clampText: { type: String, default: '收起' }
  },
  data: function data() {
    return {
      localExpanded: !!this.expanded,
      isClamped: false
    };
  },

  watch: {
    expanded: function expanded(val) {
      this.localExpanded = val;
    },
    localExpanded: function localExpanded(val) {
      if (this.expanded !== val) {
        this.$emit('update:expanded', val);
      }
    }
  },
  computed: {
    isExpand: function isExpand() {
      return this.useMode === 'expand';
    },
    isTipAndTitle: function isTipAndTitle() {
      return this.useMode === 'tip' && this.autoTip;
    },
    tipDisabled: function tipDisabled() {
      // 如果设置不显示tip， 直接禁用
      if (!this.isTipAndTitle) {
        return true;
      }
      // 需要判断是否clamp, 没有截断的时候，也禁用tip
      return !this.isClamped;
    },
    title: function title() {
      return this.isTipAndTitle ? this.getText() : '';
    },
    tipStyle: function tipStyle() {
      var style = {};
      style.width = this.tipWidth + 'px';
      return style;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.isClamped = _this.$refs.clamp.isClamped;
      console.log(_this.isClamped, 'isClamped');
    });
  },

  methods: {
    getText: function getText() {
      // Look for the first non-empty text node
      var _filter = (this.$slots.default || []).filter(function (node) {
        return !node.tag && !node.isComment;
      }),
          _filter2 = srcvue_type_script_lang_js_slicedToArray(_filter, 1),
          content = _filter2[0];

      return content ? content.text : '';
    },
    doExpand: function doExpand() {
      this.localExpanded = true;
    },
    doClamp: function doClamp() {
      this.localExpanded = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/clamp/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var clamp_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/clamp/src/index.vue?vue&type=style&index=0&lang=scss&
var srcvue_type_style_index_0_lang_scss_ = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/clamp/src/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  clamp_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/clamp/src/index.vue"
/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./packages/clamp/index.js


src.install = function (Vue) {
  Vue.component(src.name, src);
};

/* harmony default export */ var clamp = __webpack_exports__["default"] = (src);

/***/ })

/******/ });