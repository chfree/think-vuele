import ContentPlaceHolder from './components'
import TcSkeleton from './src/skeleton'

TcSkeleton.install = function(Vue) {
  ContentPlaceHolder.install(Vue)

  Vue.component(TcSkeleton.name, TcSkeleton)
}

export default TcSkeleton
