import './revise-el-table-mixins'
import TcFastTable from './src/index.vue'

TcFastTable.install = function(Vue) {
  Vue.component(TcFastTable.name, TcFastTable)
}

export default TcFastTable
