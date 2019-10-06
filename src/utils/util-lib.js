import {
  formatDate,
  formatDateTime,
  findComponentDownward,
  findComponentUpward,
  findComponentsUpward,
  findComponentsDownward,
  findBrothersComponents,
  isEmpty,
  isArray,
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isObject,
  isFunction,
  isDate,
  isEmptyObject,
  confirm,
  random,
  regluarUtil
} from '.'

const install = function(Vue, opts = {}) {
  Vue.prototype.$tcUtil = Vue.prototype.$tcUtil || {}
  Vue.prototype.$tcUtil.isEmpty = isEmpty
  Vue.prototype.$tcUtil.isArray = isArray
  Vue.prototype.$tcUtil.isString = isString
  Vue.prototype.$tcUtil.isNumber = isNumber
  Vue.prototype.$tcUtil.isBoolean = isBoolean
  Vue.prototype.$tcUtil.isUndefined = isUndefined
  Vue.prototype.$tcUtil.isNull = isNull
  Vue.prototype.$tcUtil.isObject = isObject
  Vue.prototype.$tcUtil.isFunction = isFunction
  Vue.prototype.$tcUtil.isDate = isDate
  Vue.prototype.$tcUtil.isEmptyObject = isEmptyObject
  Vue.prototype.$tcUtil.findComponentDownward = findComponentDownward
  Vue.prototype.$tcUtil.findComponentUpward = findComponentUpward
  Vue.prototype.$tcUtil.findComponentsUpward = findComponentsUpward
  Vue.prototype.$tcUtil.findComponentsDownward = findComponentsDownward
  Vue.prototype.$tcUtil.findBrothersComponents = findBrothersComponents

  Vue.prototype.$moment = Vue.prototype.$moment || {}
  Vue.prototype.$moment.formatDate = formatDate
  Vue.prototype.$moment.formatDateTime = formatDateTime

  Vue.prototype.$confirm = Vue.prototype.$confirm || {}
  Vue.prototype.$confirm.warning = confirm

  Vue.prototype.$random = random
  Vue.prototype.$regularUtil = regluarUtil
}

export default install
