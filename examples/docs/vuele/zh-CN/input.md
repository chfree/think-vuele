
## Input

文本输入框，加入了正则类型与正则的校验，扩展自`ElInput`

### 基础示例
:::demo
```html
<tc-block style="height:28px;margin-bottom:10px;">
{{value}}
</tc-block>
<tc-input v-model="value" />
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

### 基础示例-正则
:::demo
```html
<tc-block style="height:28px;margin-bottom:10px;">
{{value}}
</tc-block>
<tc-input v-model="value" regular-type="naturalNumber" />
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

### 基础示例-参数正则
:::demo
```html
<tc-block style="height:28px;margin-bottom:10px;">
{{value}}
</tc-block>
<tc-input v-model="value" regular-type="getDecimalN:4" />
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
| regularType | 验证类型 | String | [regular-expression](/#/vuele/zh-CN/component/regular-expression) | — |
| regex | 正则表达式字符串 | String | — | — |
