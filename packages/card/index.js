import TcCard from './src/card'

TcCard.install = function(Vue) {
  Vue.component(TcCard.name, TcCard)
}

export default TcCard
