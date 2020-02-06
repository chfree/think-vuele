<template>
  <div ref="display"></div>
</template>
<script>
import Vue from 'vue'
import { random } from 'tennetcn-ui/lib/utils'
export default {
  name: 'TcCodeDisplay',
  props: {
    html: {
      type: String,
      default: ''
    },
    js: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      htmlResult: '',
      jsResult: '',
      cssResult: '',
      component: null,
      id: random.uuid()
    }
  },
  beforeDestroy() {
    this.clearRender()
  },
  methods: {
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regex)

      if (!openingTag) return ''
      else openingTag = openingTag[0]

      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
    },
    splitCode() {
      let script = ''
      console.log(this.js, 'js')
      if (this.$tcUtil.isEmpty(this.js)) {
        script = 'return {data () {return {}}}'
      } else {
        script = this.js.replace(/export default/, 'return ')
      }
      const style = this.css
      const template = '<div id="app">' + this.getSource(this.html, 'template') + '</div>'

      this.jsResult = script
      this.cssResult = style
      this.htmlResult = template
    },
    renderCode() {
      this.splitCode()
      this.clearRender()
      if (this.htmlResult !== '' && this.jsResult !== '') {
        const parseStrToFunc = new Function(this.jsResult)()

        parseStrToFunc.template = this.htmlResult
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)

        if (this.cssResult !== '') {
          const style = document.createElement('style')
          style.type = 'text/css'
          style.id = this.id
          style.innerHTML = this.cssResult
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    clearRender() {
      const $target = document.getElementById(this.id)
      if ($target) $target.parentNode.removeChild($target)

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.$destroy()
        this.component = null
      }
    }
  }
}
</script>