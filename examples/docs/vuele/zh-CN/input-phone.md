## InputPhone

用于电话号码的格式化输入

验证库采用[`catamphetamine/libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js)

基于该验证库的示例库[`LouisMazel/vue-phone-number-input`](https://louismazel.github.io/vue-phone-number-input/)


### 基础示例
:::demo
```html
{{phone}}
<tc-input-phone v-model="phone" />
<script>
  export default {
    data() {
      return {
        phone: ''
      }
    }
  }
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| country | 国家区域代码 | String | — | CN |
