import TcAppContainer from './src/app-container'

TcAppContainer.install = function(Vue) {
  Vue.component(TcAppContainer.name, TcAppContainer)
}

export default TcAppContainer
