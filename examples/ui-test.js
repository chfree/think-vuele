
import {
  TcHotTable,
  TcAceEditor,
  TcCodeDisplay
} from '../packages/tennetcn-ui-test'

const components = [
  TcHotTable,
  TcAceEditor,
  TcCodeDisplay
]

const install = function(Vue, opts = {}) {

  // load components
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
