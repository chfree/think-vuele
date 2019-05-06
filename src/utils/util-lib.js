import {
  formatDate,
  formatDateTime,
  findComponentDownward,
  findComponentUpward,
  findComponentsUpward,
  findComponentsDownward,
  findBrothersComponents,
  isNull,
  confirm
} from '.'

const install = function(Vue, opts = {}) {
  Vue.prototype.$tcUtil = Vue.prototype.$tcUtil || {}
  Vue.prototype.$tcUtil.isNull = isNull
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
}

export default install
