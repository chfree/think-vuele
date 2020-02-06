import TcAceEditor from './src/ace-editor.vue'

TcAceEditor.install = function(Vue) {
  Vue.component(TcAceEditor.name, TcAceEditor)
}

export default TcAceEditor
