import ContentPlaceholders from './ContentPlaceholders.vue'
import ContentPlaceholdersHeading from './ContentPlaceholdersHeading.vue'
import ContentPlaceholdersImg from './ContentPlaceholdersImg.vue'
import ContentPlaceholdersText from './ContentPlaceholdersText.vue'

export function install(Vue) {
  Vue.component('ContentPlaceholders', ContentPlaceholders)
  Vue.component('ContentPlaceholdersHeading', ContentPlaceholdersHeading)
  Vue.component('ContentPlaceholdersImg', ContentPlaceholdersImg)
  Vue.component('ContentPlaceholdersText', ContentPlaceholdersText)
}

export default install
