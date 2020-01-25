import cpInstall from './components'
import TcSkeleton from './src/skeleton'

TcSkeleton.install = function(Vue) {
  Vue.use(cpInstall)

  Vue.component(TcSkeleton.name, TcSkeleton)
}

export default TcSkeleton
