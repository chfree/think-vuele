
import {
  TcHotTable,
  TcAceEditor
} from '../packages/tennetcn-ui-test'

const components = [
  TcHotTable,
  TcAceEditor
]

const install = function(Vue, opts = {}) {

  // load components
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
