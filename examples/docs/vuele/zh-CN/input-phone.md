## InputPhone

用于电话号码的格式化输入

验证库采用[`catamphetamine/libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js)

基于该验证库的示例库[`LouisMazel/vue-phone-number-input`](https://louismazel.github.io/vue-phone-number-input/)


### 基础示例 通用验证
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

### 基础示例 正则只验证手机号
:::demo
```html
{{phone}}
<tc-input-phone v-model="phone" valid-type="mobile" />
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

### 基础示例 正则只验证座机号
:::demo
```html
{{phone}}
<tc-input-phone v-model="phone" valid-type="phone" />
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

### 基础示例 正则验证座机号或座机
:::demo
```html
{{phone}}
<tc-input-phone v-model="phone" valid-type="mop" />
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
| validType | 验证类型 | String | `common`,`phone`,`mobile`,`mop`,`regex` | `mop` |
| regex | 正则表达式 | String | — | CN |
