// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './demo-styles/element/index.scss'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'
import 'main/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import TennetcnUI from 'main/index'
import ElementUI from 'element-ui'

// import plTable from 'pl-table'

// import 'pl-table/themes/index.css' // 引入样式（必须引入)，请查看webpack是否配置了url-loader对woff，ttf文件的引用,不配置会报错哦

import MainFooter from './components/footer'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import demoBlock from './components/demo-block'
import FooterNav from './components/footer-nav'
import FooterNavVuele from './components/footer-nav-vuele'

import Handsontable from 'handsontable'
Vue.prototype.$hotTable = Handsontable

import uitest from './ui-test'
Vue.use(uitest)

import icon from './icon.json'

Vue.prototype.$icon = icon // Icon 列表页用

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'remixicon/fonts/remixicon.css'

Vue.use(TennetcnUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('demo-block', demoBlock)
Vue.component('footer-nav', FooterNav)
Vue.component('footer-nav-vuele', FooterNavVuele)

const globalEle = new Vue({
  data: { $isEle: false } // 是否 ele 用户
})

Vue.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.$data.$isEle),
      set: (data) => {globalEle.$data.$isEle = data}
    }
  }
})

import title from './i18n/title'

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  const data = title[route.meta.lang]
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val]
      return
    }
  }
  document.title = 'Element'
  // ga('send', 'event', 'PageView', route.name)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
