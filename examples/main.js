// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'
import TennetcnUI from 'main/index'
import ElementUI from 'element-ui'

import MainFooter from './components/footer'
import MainHeader from './components/header'

Vue.use(TennetcnUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
