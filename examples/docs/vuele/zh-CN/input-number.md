
## InputNumber

数字输入框，加入了正则类型与正则的校验，扩展自`ElInputNumber`

### 基础示例
:::demo
```html
<tc-block style="height:28px;margin-bottom:10px;">
{{value}}
</tc-block>
<tc-input-number v-model="value" regular-type="positiveNumber" />
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| regular-type | 验证类型 | String | [regular-expression](/#/vuele/zh-CN/component/regular-expression) | — |
| regex | 正则表达式字符串 | String | — | — |
