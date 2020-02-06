## CodeDisplay

CodeDisplay代码编辑器

:::tip
此组件不作强制引入，如果要使用，则自行引入，并复制组件包到项目中进行注册
:::

:::tip
此组件源于iview作者在掘金小册中的提供
:::

### 基础示例
:::demo
```html
<tc-block>
  <tc-ace-editor v-model="html" />
</tc-block>

<tc-block>
  <tc-ace-editor v-model="js" type="js" />
</tc-block>

<tc-block>
  <tc-ace-editor v-model="css" type="css" />
</tc-block>

<tc-button @click="runCode">运行代码</tc-button>

<tc-block style="max-height:300px;overflow:auto;">
  <tc-code-display ref="codeDisplay" :js="js" :html="html" :css="css" />
</tc-block>
<script>
  export default {
    data() {
      return {
        html: '<template>\r\n\t<div>\r\n\t\t<tc-input v-model="message"><\/tc-input><div class="test">{{ message }}<\/div>\r\n\t\t<tc-button>测试<\/tc-button>\r\n\t</div>\r\n</template>',
        js: 'export default {\r\n\tdata(){\r\n\t\treturn {\r\n\t\t\tmessage: "hello ace editor"\r\n\t\t}\r\n\t}\r\n}',
        css: '.test{color:red}'
      }
    },
    methods: {
      runCode() {
        this.$refs.codeDisplay.renderCode()
      }
    }
  }
</script>
```
:::