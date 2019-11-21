
import {
  TcHotTable
} from '../packages/tennetcn-ui-test'

const components = [
  TcHotTable
]

const install = function(Vue, opts = {}) {

  // load components
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
