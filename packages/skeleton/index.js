import cpContext from './components'
import TcSkeleton from './src/skeleton'

TcSkeleton.install = function(Vue) {
  Vue.component('ContentPlaceholders', cpContext.ContentPlaceholders)
  Vue.component('ContentPlaceholdersHeading', cpContext.ContentPlaceholdersHeading)
  Vue.component('ContentPlaceholdersImg', cpContext.ContentPlaceholdersImg)
  Vue.component('ContentPlaceholdersText', cpContext.ContentPlaceholdersText)

  Vue.component(TcSkeleton.name, TcSkeleton)
}

export default TcSkeleton
