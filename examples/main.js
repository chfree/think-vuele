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

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
