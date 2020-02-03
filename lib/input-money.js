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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("accounting-js");

/***/ }),

/***/ 2:
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-money/src/input-money.vue?vue&type=template&id=f911a8a8&
var render = function() {
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
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/input-money/src/input-money.vue?vue&type=template&id=f911a8a8&

// EXTERNAL MODULE: external "accounting-js"
var external_accounting_js_ = __webpack_require__(19);
var external_accounting_js_default = /*#__PURE__*/__webpack_require__.n(external_accounting_js_);

// EXTERNAL MODULE: ./src/mixins/vname-mixin.js
var vname_mixin = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-money/src/input-money.vue?vue&type=script&lang=js&
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
  mixins: [vname_mixin["a" /* default */]],
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
      amount: this.value || 0
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
      var _this = this;

      if (oldValue === false && newValue === true) {
        this.$nextTick(function () {
          _this.$refs.readonly.className = _this.readonlyClass;
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
    var _this2 = this;

    // Set default value props when placeholder undefined.
    if (!this.placeholder) {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
      // In case of delayed props value.
      setTimeout(function () {
        _this2.process(_this2.valueNumber);
        _this2.amount = _this2.format(_this2.valueNumber);
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/input-money/src/input-money.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_input_moneyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/input-money/src/input-money.vue"
/* harmony default export */ var input_money = (component.exports);
// CONCATENATED MODULE: ./packages/input-money/index.js


input_money.install = function (Vue) {
  Vue.component(input_money.name, input_money);
};

/* harmony default export */ var packages_input_money = __webpack_exports__["default"] = (input_money);

/***/ })

/******/ });