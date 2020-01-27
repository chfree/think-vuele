import skeletonContent from './skeletonContent.vue'
import skeletonHeading from './skeletonHeading.vue'
import skeletonImg from './skeletonImg.vue'
import skeletonText from './skeletonText.vue'

export function install(Vue) {
  Vue.component(skeletonContent.name, skeletonContent)
  Vue.component(skeletonHeading.name, skeletonHeading)
  Vue.component(skeletonImg.name, skeletonImg)
  Vue.component(skeletonText.name, skeletonText)
}

export default install
