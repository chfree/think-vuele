## InputPhone

用于电话号码的格式化输入

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

### 基础示例 通用验证
:::demo
```html
{{phone}}
<tc-input-phone v-model="phone" valid-type="common"  />
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
| valid-type | 验证类型 | String | `common`,`phone`,`mobile`,`mop`,`regex` | `mop` |
| regex | 正则表达式 | String | — | — |

:::tip
当valid-type是common时，country才支持国家区域代码

并使用以下库进行验证

验证库采用[`catamphetamine/libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js)

基于该验证库的示例库[`LouisMazel/vue-phone-number-input`](https://louismazel.github.io/vue-phone-number-input/)

其他情况则只采用正则进行验证(字符串的提取验证`value.match`取第一个匹配)
```
/**
 * validType: common 通用，采用libphone进行
 *            phone 座机号
 *            mobile 手机号
 *            mop 手机号+座机号
 *            regex 自定义正则
 */
var regexValid = {
  mobile: /((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}/,
  phone: /(0\d{2}-?\d{8}(-\d{1,4})?)|(0\d{3}-?\d{7,8}(-\d{1,4})?)/
}
```
:::