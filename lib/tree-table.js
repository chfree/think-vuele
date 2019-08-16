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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-table/src/tree-table.vue?vue&type=template&id=0e723886&
var render = function() {
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
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/tree-table/src/tree-table.vue?vue&type=template&id=0e723886&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./packages/tree-table/src/eval.js



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
// EXTERNAL MODULE: ./packages/table/src/table.vue + 4 modules
var table = __webpack_require__(7);

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
  mixins: [table["a" /* default */]],
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/tree-table/src/tree-table.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_tree_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/tree-table/src/tree-table.vue"
/* harmony default export */ var tree_table = (component.exports);
// CONCATENATED MODULE: ./packages/tree-table/index.js


tree_table.install = function (Vue) {
  Vue.component(tree_table.name, tree_table);
};

/* harmony default export */ var packages_tree_table = __webpack_exports__["default"] = (tree_table);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=template&id=493fe34e&
var render = function() {
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
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=template&id=493fe34e&

// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(4);

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
        this.$refs.eltable.toggleRowSelection(currentRow);
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/table/src/table.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/table/src/table.vue"
/* harmony default export */ var table = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });