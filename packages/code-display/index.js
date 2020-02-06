import TcCodeDisplay from './src/code-display.vue'

TcCodeDisplay.install = function(Vue) {
  Vue.component(TcCodeDisplay.name, TcCodeDisplay)
}

export default TcCodeDisplay
