## Form

文本输入框，加入了正则类型与正则的校验，扩展自`ElForm`

### 基础示例
在表单级别进行禁用的时候，可以控制表单中的按钮不随表单的禁用而禁用
:::demo
```html
<tc-form disabled>
<tc-input v-model="value" />
<tc-button :forceEnabled="forceEnabled">保存</tc-button>
</tc-form>
<tc-button @click="forceEnabled=!forceEnabled">test</tc-button>
<script>
  export default {
    data() {
      return {
        value: '',
        forceEnabled: true
      }
    }
  }
</script>
```
:::


### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
