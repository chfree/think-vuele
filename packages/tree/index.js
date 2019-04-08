import TcTree from './src/tree'

TcTree.install = function (Vue) {
  Vue.component(TcTree.name, TcTree)
}

export default TcTree
