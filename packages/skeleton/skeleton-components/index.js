import skeletonContent from './skeletonContent.vue'
import skeletonHeading from './skeletonHeading.vue'
import skeletonImg from './skeletonImg.vue'
import skeletonText from './skeletonText.vue'
import skeletonField from './skeletonField.vue'
import skeletonForm from './skeletonForm.vue'

export function install(Vue) {
  Vue.component(skeletonContent.name, skeletonContent)
  Vue.component(skeletonHeading.name, skeletonHeading)
  Vue.component(skeletonImg.name, skeletonImg)
  Vue.component(skeletonText.name, skeletonText)
  Vue.component(skeletonField.name, skeletonField)
  Vue.component(skeletonForm.name, skeletonForm)
}

export default install
