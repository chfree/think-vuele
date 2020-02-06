<template>
  <div>
    <div class="ace-editor" ref="editor"></div>
  </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/mode-javascript' // 默认设置的语言模式
import 'ace-builds/src-noconflict/snippets/javascript'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/snippets/css'

import 'ace-builds/src-noconflict/ext-language_tools'

export default {
  name: 'TcAceEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'html'
    },
    option: {
      type: Object,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    defaultOption: {
      maxLines: 18, // 最大行数，超过会自动出现滚动条
      minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
      fontSize: 14, // 编辑器内字体大小
      theme: 'ace/theme/monokai', // 默认设置的主题
      tabSize: 4, // 制表符设置为 4 个空格大小
      value: ''
    },
    aceEditor: null,
    contentBackup: ''
  }),
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  computed: {
    inputDisabled() {
      const result = this.disabled || (this.elForm || {}).disabled
      return result
    },
    editorOption: function() {
      let dynamicOption = {}
      dynamicOption.mode = this.getMode()
      dynamicOption.value = this.value ? this.value : ''

      let optionResult = Object.assign({}, this.defaultOption, dynamicOption, this.option)
      return optionResult
    }
  },
  watch: {
    'value': function(newVal) {
      if (this.contentBackup !== newVal) {
        this.aceEditor.session.setValue(newVal)
        this.contentBackup = newVal
      }
    },
    'readonly': function(newVal) {
      this.aceEditor.setOption('readOnly', newVal)
    }
  },
  mounted() {
    this.$set(this.editorOption, 'value', this.value)
    this.aceEditor = ace.edit(this.$refs.editor, this.editorOption)

    this.aceEditor.setShowPrintMargin(false)
    this.aceEditor.session.setMode(this.getMode())
    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    })

    if (this.inputDisabled) {
      this.aceEditor.setOption('readOnly', true)
    }

    this.aceEditor.getSession().on('change', this.change)
  },
  methods: {
    refreshValue(value) {
      if (this.aceEditor) {
        this.aceEditor.getSession().setValue(value)
      }
    },
    change() {
      const content = this.aceEditor.getSession().getValue()
      this.$emit('input', content)
      this.contentBackup = content
    },
    getMode() {
      if (this.type === 'html') {
        return 'ace/mode/html'
      } else if (['js', 'javascript'].indexOf(this.type) >= 0) {
        return 'ace/mode/javascript'
      } else if (this.type === 'css') {
        return 'ace/mode/css'
      }
    }
  }
}
</script>
