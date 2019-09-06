## Regular正则表达式

提供了一些常用的正则表达以及对应名称的判断工具和提供工具

### 使用示例-判断
:::demo
```html
<div style="margin-bottom:10px;">
是否全局判断<tc-checkbox v-model="isGlobal" />
</div>
<tc-input v-model="value" />
<tc-block style="margin-top:10px;">
  {{result}}
</tc-block>
<tc-button @click="isMobile" style="margin-top:10px">isMobile</tc-button>
<script>
  export default {
    data() {
      return {
        isGlobal: true,
        value: 1,
        result: null
      }
    },
    methods: {
      isMobile() {
        this.result = this.$regularUtil.isMobile(this.value, this.isGlobal)
      }
    }
  }
</script>
```
:::

### 使用示例-提取
:::demo
```html
<div style="margin-bottom:10px;">
是否提取全部<tc-checkbox v-model="isAll" />
</div>
<tc-input v-model="value" />
<tc-block style="margin-top:10px;">
  {{result}}
</tc-block>
<tc-button @click="matchMobile" style="margin-top:10px">matchMobile</tc-button>
<script>
  export default {
    data() {
      return {
        isAll: false,
        value: 1,
        result: null
      }
    },
    methods: {
      matchMobile() {
        this.result = this.$regularUtil.matchMobile(this.value, this.isAll)
      }
    }
  }
</script>
```
:::

### 常用正则表达式 type
```json
{
  // 移动电话
  mobile: '((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\\d{8}',
  // 固定电话
  phone: '(0\\d{2}-?\\d{8}(-\\d{1,4})?)|(0\\d{3}-?\\d{7,8}(-\\d{1,4})?)',
  // 正整数1+
  positiveNumber: '[1-9]\\d*',
  // 自然数 0+
  naturalNumber: '[0-9]\\d*',
  // 负整数
  negativeNumber: '-[1-9]\\d*',
  // 整数
  integer: '-?[1-9]\\d*',
  // 带小数点或不带小数点的任意长度
  numberDecimalMore: '((\\d+.\\d*)|(\\d+))',
  // 带小数点或不带小数点,小数点后2位
  numberDecimalTwo: '((\\d+.\\d{0,2})|(\\d+))',
  // 带小数点任意长度
  decimalMore: '(\\d+.\\d*)',
  // 带小数点,小数点后2位
  decimalTwo: '(\\d+.\\d{0,2})',
  // (负数)带小数点或不带小数点的任意长度
  negativeNumberDecimalMore: '-((\\d+.\\d*)|(\\d+))',
  // (负数)带小数点或不带小数点,小数点后2位
  negativeNumberDecimalTwo: '-((\\d+.\\d{0,2})|(\\d+))',
  // (负数)带小数点任意长度
  negativeDecimalMore: '-(\\d+.\\d*)',
  // (负数)带小数点,小数点后2位
  negativeDecimalTwo: '-(\\\d+.\\\d{0,2})',
  // (负数或)带小数点或不带小数点的任意长度
  negativeOrNumberDecimalMore: '-?((\\d+.\\d*)|(\\d+))',
  // (负数或)带小数点或不带小数点,小数点后2位
  negativeOrNumberDecimalTwo: '-?((\\d+.\\d{0,2})|(\\d+))',
  // (负数或)带小数点任意长度
  negativeOrDecimalMore: '-?(\\d+.\\d*)',
  // (负数或)带小数点,小数点后2位
  negativeOrDecimalTwo: '-?(\\d+.\\d{0,2})',
  // 小数或数字、小数后N位
  getNumberDecimalN: function(length) {
    return '((\\d+.\\d{0,' + length + '})|(\\d+))'
  },
  // 小数、小数后N位
  getDecimalN: function(length) {
    return '(\\d+.\\d{0,' + length + '})'
  },
  // (负)小数、小数后N位
  getNegativeDecimalN: function(length) {
    return '-(\\d+.\\d{0,' + length + '})'
  },
  // (负)小数或数字、小数后N位
  getNegativeNumberDecimalN: function(length) {
    return '-((\\d+.\\d{0,' + length + '})|(\\d+))'
  },
  // (负或)小数、小数后N位
  getNegativeOrDecimalN: function(length) {
    return '-(\\d+.\\d{0,' + length + '})'
  },
  // (负或)小数或数字、小数后N位
  getNegativeOrNumberDecimalN: function(length) {
    return '-((\\d+.\\d{0,' + length + '})|(\\d+))'
  },
  // QQ
  qq: '[1-9][0-9]{4,13}',
  // 邮编
  zipCode: '[1-9]\\d{5}(?!\\d)',
  // 中文字符
  chineseChar: '[\\u4e00-\\u9fa5]',
  // 身份证
  idCard: '[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)'
}
```
