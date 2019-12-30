import TcClamp from './src/index'

TcClamp.install = function(Vue) {
  Vue.component(TcClamp.name, TcClamp)
}

export default TcClamp
