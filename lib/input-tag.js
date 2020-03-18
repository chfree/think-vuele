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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regularExpression; });
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
  numberDecimalMore: '((\\d+\\.\\d*)|(\\d+))',
  // 带小数点或不带小数点,小数点后2位
  numberDecimalTwo: '((\\d+\\.\\d{0,2})|(\\d+))',
  // 带小数点任意长度
  decimalMore: '(\\d+\\.\\d*)',
  // 带小数点,小数点后2位
  decimalTwo: '(\\d+\\.\\d{0,2})',
  // (负数)带小数点或不带小数点的任意长度
  negativeNumberDecimalMore: '-((\\d+\\.\\d*)|(\\d+))',
  // (负数)带小数点或不带小数点,小数点后2位
  negativeNumberDecimalTwo: '-((\\d+\\.\\d{0,2})|(\\d+))',
  // (负数)带小数点任意长度
  negativeDecimalMore: '-(\\d+\\.\\d*)',
  // (负数)带小数点,小数点后2位
  negativeDecimalTwo: '-(\\d+\\.\\d{0,2})',
  // (负数或)带小数点或不带小数点的任意长度
  negativeOrNumberDecimalMore: '-?((\\d+\\.\\d*)|(\\d+))',
  // (负数或)带小数点或不带小数点,小数点后2位
  negativeOrNumberDecimalTwo: '-?((\\d+\\.\\d{0,2})|(\\d+))',
  // (负数或)带小数点任意长度
  negativeOrDecimalMore: '-?(\\d+\\.\\d*)',
  // (负数或)带小数点,小数点后2位
  negativeOrDecimalTwo: '-?(\\d+\\.\\d{0,2})',
  // 小数或数字、小数后N位
  getNumberDecimalN: function getNumberDecimalN(length) {
    return '((\\d+\\.\\d{0,' + length + '})|(\\d+))';
  },
  // 小数、小数后N位
  getDecimalN: function getDecimalN(length) {
    return '(\\d+\\.\\d{0,' + length + '})';
  },
  // (负)小数、小数后N位
  getNegativeDecimalN: function getNegativeDecimalN(length) {
    return '-(\\d+\\.\\d{0,' + length + '})';
  },
  // (负)小数或数字、小数后N位
  getNegativeNumberDecimalN: function getNegativeNumberDecimalN(length) {
    return '-((\\d+\\.\\d{0,' + length + '})|(\\d+))';
  },
  // (负或)小数、小数后N位
  getNegativeOrDecimalN: function getNegativeOrDecimalN(length) {
    return '-(\\d+\\.\\d{0,' + length + '})';
  },
  // (负或)小数或数字、小数后N位
  getNegativeOrNumberDecimalN: function getNegativeOrNumberDecimalN(length) {
    return '-((\\d+\\.\\d{0,' + length + '})|(\\d+))';
  },
  // QQ
  qq: '[1-9][0-9]{4,13}',
  // 邮编
  zipCode: '[1-9]\\d{5}(?!\\d)',
  // 中文字符
  chineseChar: '[\\u4e00-\\u9fa5]',
  // 身份证
  idCard: '[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)',
  // 邮箱
  email: '[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*',
  // imgUrl
  imgUrl: 'https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)',
  // videoUrl
  videoUrl: 'https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)',
  // url
  url: '/^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/',
  // ipv4
  ipv4: '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
  // ipv6
  ipv6: '((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))'
};

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    vname: function vname() {
      var vmodel = this.$vnode.data.model || {};
      var expression = vmodel.expression || '';
      return expression.replace('.', '_');
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findComponentDownward; });
/* unused harmony export findComponentUpward */
/* unused harmony export findComponentsUpward */
/* unused harmony export findComponentsDownward */
/* unused harmony export findBrothersComponents */
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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

function isEmptyObject(obj) {
  var t;
  for (t in obj) {
    return !1;
  }
  return !0;
}
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(4);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);

// CONCATENATED MODULE: ./src/utils/random/uuid.js



var buf;
var bufIdx = 0;
var hexBytes = [];
var i;

// Improve memory performance by decreasing this number (>=16)
// or improve speed by increasing this number (try 16384)
uuid.BUFFER_SIZE = 512;

// Binary uuids (even faster)
uuid.bin = uuidbin;

// Test for uuid
uuid.test = isUUID;

// Cache toString(16)
// This is massively impactful on performance
for (i = 0; i < 256; i++) {
  // This is a fast way to ensure a 2 char hex byte
  hexBytes[i] = (i + 0x100).toString(16).substr(1);
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
    for (i = 0; i < n; i++) {
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
// EXTERNAL MODULE: ./src/utils/regular/regular-expression.js
var regular_expression = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/regular/regular-util.js


function isMobile(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].mobile, value, isGlobal);
}

function matchMobile(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].mobile, value, isAll);
}

function isPhone(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].phone, value, isGlobal);
}

function matchPhone(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].phone, value, isAll);
}

function isPositiveNumber(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].positiveNumber, value, isGlobal);
}

function matchPositiveNumber(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].positiveNumber, value, isAll);
}

function isNaturalNumber(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].naturalNumber, value, isGlobal);
}

function matchNaturalNumber(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].naturalNumber, value, isAll);
}

function isNegativeNumber(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeNumber, value, isGlobal);
}

function matchNegativeNumber(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeNumber, value, isAll);
}

function isInteger(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].integer, value, isGlobal);
}

function matchInteger(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].integer, value, isAll);
}

function isNumberDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].numberDecimalMore, value, isGlobal);
}

function matchNumberDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].numberDecimalMore, value, isAll);
}

function isNumberDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].numberDecimalTwo, value, isGlobal);
}

function matchNumberDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].numberDecimalTwo, value, isAll);
}

function isDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].decimalMore, value, isGlobal);
}

function matchDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].decimalMore, value, isAll);
}

function isDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].decimalTwo, value, isGlobal);
}

function matchDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].decimalTwo, value, isAll);
}

function isNegativeNumberDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeNumberDecimalMore, value, isGlobal);
}

function matchNegativeNumberDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeNumberDecimalMore, value, isAll);
}

function isNegativeNumberDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeNumberDecimalTwo, value, isGlobal);
}

function matchNegativeNumberDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeNumberDecimalTwo, value, isAll);
}

function isNegativeDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeDecimalMore, value, isGlobal);
}

function matchNegativeDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeDecimalMore, value, isAll);
}

function isNegativeDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeDecimalTwo, value, isGlobal);
}

function matchNegativeDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeDecimalTwo, value, isAll);
}

function isNegativeOrNumberDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeOrNumberDecimalMore, value, isGlobal);
}

function matchNegativeOrNumberDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeOrNumberDecimalMore, value, isAll);
}

function isNegativeOrNumberDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeOrNumberDecimalTwo, value, isGlobal);
}

function matchNegativeOrNumberDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeOrNumberDecimalTwo, value, isAll);
}

function isNegativeOrDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeOrDecimalMore, value, isGlobal);
}

function matchNegativeOrDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeOrDecimalMore, value, isAll);
}

function isNegativeOrDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].negativeOrDecimalTwo, value, isGlobal);
}

function matchNegativeOrDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].negativeOrDecimalTwo, value, isAll);
}

function isQQ(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].qq, value, isGlobal);
}

function matchQQ(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].qq, value, isAll);
}

function isZipCode(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].zipCode, value, isGlobal);
}

function matchZipCode(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].zipCode, value, isAll);
}

function isChineseChar(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].chineseChar, value, isGlobal);
}

function matchChineseChar(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].chineseChar, value, isAll);
}

function isIdCard(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].idCard, value, isGlobal);
}

function matchIdCard(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].idCard, value, isAll);
}

function isEmail(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].email, value, isGlobal);
}

function matchEmail(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].email, value, isAll);
}

function isImgUrl(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].imgUrl, value, isGlobal);
}

function matchImgUrl(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].imgUrl, value, isAll);
}

function isVideoUrl(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].videoUrl, value, isGlobal);
}

function matchVideoUrl(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].videoUrl, value, isAll);
}

function isUrl(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].url, value, isGlobal);
}

function matchUrl(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].url, value, isAll);
}

function isIpv4(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].ipv4, value, isGlobal);
}

function matchIpv4(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].ipv4, value, isAll);
}

function isIpv6(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regular_expression["a" /* regularExpression */].ipv6, value, isGlobal);
}

function matchIpv6(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regular_expression["a" /* regularExpression */].ipv6, value, isAll);
}

function matchRegexp(regexp, value) {
  var isAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var flag = '';
  if (isAll) {
    flag = 'g';
  }
  var result = value.match(new RegExp(regexp, flag));
  if (isAll) {
    return result;
  }
  return (result || [''])[0];
}

function testRegexp(regexp, value) {
  var isGlobal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isGlobal) {
    regexp = '^' + regexp + '$';
  }
  return new RegExp(regexp).test(value);
}

var regluarUtil = {
  isMobile: isMobile,
  matchMobile: matchMobile,
  isPhone: isPhone,
  matchPhone: matchPhone,
  isPositiveNumber: isPositiveNumber,
  matchPositiveNumber: matchPositiveNumber,
  isNaturalNumber: isNaturalNumber,
  matchNaturalNumber: matchNaturalNumber,
  isNegativeNumber: isNegativeNumber,
  matchNegativeNumber: matchNegativeNumber,
  isInteger: isInteger,
  matchInteger: matchInteger,
  isNumberDecimalMore: isNumberDecimalMore,
  matchNumberDecimalMore: matchNumberDecimalMore,
  isNumberDecimalTwo: isNumberDecimalTwo,
  matchNumberDecimalTwo: matchNumberDecimalTwo,
  isDecimalMore: isDecimalMore,
  matchDecimalMore: matchDecimalMore,
  isDecimalTwo: isDecimalTwo,
  matchDecimalTwo: matchDecimalTwo,
  isNegativeNumberDecimalMore: isNegativeNumberDecimalMore,
  matchNegativeNumberDecimalMore: matchNegativeNumberDecimalMore,
  isNegativeNumberDecimalTwo: isNegativeNumberDecimalTwo,
  matchNegativeNumberDecimalTwo: matchNegativeNumberDecimalTwo,
  isNegativeDecimalMore: isNegativeDecimalMore,
  matchNegativeDecimalMore: matchNegativeDecimalMore,
  isNegativeDecimalTwo: isNegativeDecimalTwo,
  matchNegativeDecimalTwo: matchNegativeDecimalTwo,
  isNegativeOrNumberDecimalMore: isNegativeOrNumberDecimalMore,
  matchNegativeOrNumberDecimalMore: matchNegativeOrNumberDecimalMore,
  isNegativeOrNumberDecimalTwo: isNegativeOrNumberDecimalTwo,
  matchNegativeOrNumberDecimalTwo: matchNegativeOrNumberDecimalTwo,
  isNegativeOrDecimalMore: isNegativeOrDecimalMore,
  matchNegativeOrDecimalMore: matchNegativeOrDecimalMore,
  isNegativeOrDecimalTwo: isNegativeOrDecimalTwo,
  matchNegativeOrDecimalTwo: matchNegativeOrDecimalTwo,
  isQQ: isQQ,
  matchQQ: matchQQ,
  isZipCode: isZipCode,
  matchZipCode: matchZipCode,
  isChineseChar: isChineseChar,
  matchChineseChar: matchChineseChar,
  isIdCard: isIdCard,
  matchIdCard: matchIdCard,
  isEmail: isEmail,
  matchEmail: matchEmail,
  isImgUrl: isImgUrl,
  matchImgUrl: matchImgUrl,
  isVideoUrl: isVideoUrl,
  matchVideoUrl: matchVideoUrl,
  isUrl: isUrl,
  matchUrl: matchUrl,
  isIpv4: isIpv4,
  matchIpv4: matchIpv4,
  isIpv6: isIpv6,
  matchIpv6: matchIpv6
};

/* harmony default export */ var regular_util = (regluarUtil);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(6);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/utils/date.js


function formatDate(date) {
  return external_moment_default()(date).format('YYYY-MM-DD')
}
function formatDateTime(date) {
  return external_moment_default()(date).format('YYYY-MM-DD HH:mm:ss')
}

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(9);

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


// EXTERNAL MODULE: ./src/utils/find-components.js
var find_components = __webpack_require__(3);

// CONCATENATED MODULE: ./src/utils/index.js
/* unused concated harmony import random */
/* unused concated harmony import regluarUtil */
/* unused concated harmony import formatDate */
/* unused concated harmony import formatDateTime */
/* unused concated harmony import confirm */
/* concated harmony reexport isEmpty */__webpack_require__.d(__webpack_exports__, "a", function() { return isEmpty; });
/* unused concated harmony import isArray */
/* unused concated harmony import isString */
/* unused concated harmony import isNumber */
/* unused concated harmony import isBoolean */
/* unused concated harmony import isUndefined */
/* unused concated harmony import isNull */
/* unused concated harmony import isObject */
/* unused concated harmony import isFunction */
/* unused concated harmony import isDate */
/* unused concated harmony import isEmptyObject */
/* unused concated harmony import findComponentDownward */
/* unused concated harmony import findComponentUpward */
/* unused concated harmony import findComponentsUpward */
/* unused concated harmony import findComponentsDownward */
/* unused concated harmony import findBrothersComponents */










/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(23);

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
/* 12 */
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
/* 13 */,
/* 14 */
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
/* 15 */
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
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_input_vue_vue_type_style_index_0_id_4c74470c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "\n.ti-tag-input[data-v-4c74470c] {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit;\n}\n.ti-tag-input[data-v-4c74470c]::-ms-clear {\n  display: none;\n}\ninput[data-v-4c74470c]:focus {\n  outline: none;\n}\ninput[disabled][data-v-4c74470c] {\n  background-color: transparent;\n}\n", ""]);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-tag/src/input-tag.vue?vue&type=template&id=4c7a2f20&
var render = function() {
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
var staticRenderFns = []
render._withStripped = true


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
var external_fast_deep_equal_ = __webpack_require__(18);
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
var tag_inputvue_type_style_index_0_id_4c74470c_lang_css_scoped_true_ = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/input-tag/src/vue-tags-input/tag-input.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vue_tags_input_tag_inputvue_type_script_lang_js_,
  tag_inputvue_type_template_id_4c74470c_scoped_true_render,
  tag_inputvue_type_template_id_4c74470c_scoped_true_staticRenderFns,
  false,
  null,
  "4c74470c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/input-tag/src/vue-tags-input/tag-input.vue"
/* harmony default export */ var tag_input = (component.exports);
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

var vue_tags_input_component = Object(componentNormalizer["a" /* default */])(
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
// EXTERNAL MODULE: ./src/mixins/vname-mixin.js
var vname_mixin = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/index.js + 6 modules
var utils = __webpack_require__(5);

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
  mixins: [vname_mixin["a" /* default */]],
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
      if (!Object(utils["a" /* isEmpty */])(this.value)) {
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

var input_tag_component = Object(componentNormalizer["a" /* default */])(
  src_input_tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
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

/* harmony default export */ var packages_input_tag = __webpack_exports__["default"] = (input_tag);

/***/ })
/******/ ]);