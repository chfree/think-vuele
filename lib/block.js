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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/block/src/block.vue?vue&type=template&id=35b4c30c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "blockContainer",
      staticClass: "tc-block-container",
      class: _vm.blockClass
    },
    [
      _vm.showTitle
        ? _c("div", { staticClass: "tc-block-title", style: _vm.titleStyle }, [
            _c(
              "div",
              { staticClass: "tc-left-title-container" },
              [
                _vm._t("title", [
                  _c("span", { staticClass: "tc-block-title-left" }),
                  _c("span", [_vm._v(_vm._s(_vm.title))])
                ])
              ],
              2
            ),
            _c(
              "div",
              { staticClass: "tc-right-tool-container" },
              [
                _vm._t("rightTool", [
                  _c("span", [
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.showMinimum && !_vm.isMaximum && !_vm.isMinimum,
                          expression: "showMinimum&&(!isMaximum)&&(!isMinimum)"
                        }
                      ],
                      staticClass: "el-icon-minus toolbar",
                      on: { click: _vm.toMinimum }
                    }),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.showMaximum && !_vm.isMaximum && !_vm.isMinimum,
                          expression: "showMaximum&&(!isMaximum)&&(!isMinimum)"
                        }
                      ],
                      staticClass: "el-icon-full-screen toolbar",
                      on: { click: _vm.toMaximum }
                    }),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isMaximum || _vm.isMinimum,
                          expression: "isMaximum||isMinimum"
                        }
                      ],
                      staticClass: "el-icon-crop toolbar",
                      on: { click: _vm.toResizBox }
                    })
                  ])
                ])
              ],
              2
            )
          ])
        : _vm._e(),
      _c("transition", { attrs: { name: "el-zoom-in-top" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isMinimum,
                expression: "!isMinimum"
              }
            ],
            ref: "tcBloclContent",
            staticClass: "tc-block-content",
            class: _vm.contentClass,
            style: _vm.contentStyle
          },
          [_vm._t("default")],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


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
    showMinimum: { type: Boolean, default: false },
    showMaximum: { type: Boolean, default: false },
    fullMode: { type: String, default: 'window', validator: function validator(value) {
        return ['window', 'document'].indexOf(value) !== -1;
      } },
    shadow: { type: String, default: 'always', validator: function validator(value) {
        return ['always', 'hover', 'never'].indexOf(value) !== -1;
      } }
  },
  data: function data() {
    return {
      defaultStyleHeight: null,
      titleHeight: 25,
      isMinimum: false,
      isMaximum: false
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
    blockClass: function blockClass() {
      return this.boxShadow + ' ' + this.fullBody;
    },
    boxShadow: function boxShadow() {
      if (this.shadow === 'always') {
        return 'tc-box-shadow';
      }
      if (this.shadow === 'hover') {
        return 'tc-box-shadow-hover';
      }
    },
    fullBody: function fullBody() {
      if (this.fullMode === 'document' && this.isMaximum) {
        return 'tc-block-full-body';
      }
      return '';
    }
  },
  mounted: function mounted() {
    this.defaultStyleHeight = this.$el.style.height;
  },

  methods: {
    toMinimum: function toMinimum() {
      this.isMinimum = true;
      this.$el.style.height = '33px';
    },
    toMaximum: function toMaximum() {
      this.isMaximum = true;
      if (this.fullMode === 'window') {
        var element = this.$el;
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
          requestMethod.call(element);
        }
      } else if (this.fullMode === 'document') {
        this.$el.style.height = '';
      }
    },
    toResizBox: function toResizBox() {
      this.$el.style.height = this.defaultStyleHeight;
      this.isMaximum = false;
      this.isMinimum = false;
      if (this.fullMode === 'window') {
        var requestMethod = document.exitFullScreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (requestMethod) {
          requestMethod.call(document);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/block/src/block.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_blockvue_type_script_lang_js_ = (blockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/block/src/block.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_blockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/block/src/block.vue"
/* harmony default export */ var block = (component.exports);
// CONCATENATED MODULE: ./packages/block/index.js


block.install = function (Vue) {
  Vue.component(block.name, block);
};

/* harmony default export */ var packages_block = __webpack_exports__["default"] = (block);

/***/ })

/******/ });