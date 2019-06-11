
## InputMoney

用于金额的格式显示

:::tip
改写了源码中的`input`为`tc-input`(`el-input`),支持`tc-input`(`el-input`)属性和样式
:::

源码参照[`kevinongko/vue-numeric`](https://github.com/kevinongko/vue-numeric)


### 基础示例
:::demo
```html
{{amount}}
<tc-input-money v-model="amount" />
<script>
  export default {
    data() {
      return {
        amount: '10'
      }
    }
  }
</script>
```
:::

### 金额符号
:::demo
```html
{{amount}}
<tc-input-money v-model="amount" currency="$" />
<script>
  export default {
    data() {
      return {
        amount: ''
      }
    }
  }
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| currency | 货币符号 |String | - | - |
| currency-symbol-position | 货币符号的位置 | String | `prefix`,`suffix` | `prefix` |
| max | 允许的最大值 | Number | - | 9007199254740991 |
| min | 允许的最小值 | Number | - | -9007199254740991 |
| minus | 禁用负值 | Boolean | - | `false` |
| placeholder | Input placeholder | String | - | - |
| empty-value | 为空时的值 | Number | - | 0 |
| output-type | 文本框的输出类型 | String | - |`String`|
| precision | 精度 | Number | - | - |
| separator | 分隔符 | String | `space`, `.` , `,` | `,` |
| decimal-separator | 自定义小数位分隔符 | String | - | - |
| thousand-separator | 自定义千分位分隔符 | String | - | - |
| readonly | 控制是否只读 | Boolean | - | false |
| readonly-class | 只读时候的样式名 | String | - | '' |
