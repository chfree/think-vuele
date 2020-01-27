import skeletonInstall from './skeleton-components'
import TcSkeleton from './src/skeleton'

TcSkeleton.install = function(Vue) {
  Vue.use(skeletonInstall)

  Vue.component(TcSkeleton.name, TcSkeleton)
}

export default TcSkeleton
