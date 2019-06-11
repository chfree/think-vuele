
## RadioGroup

tc-radio-group与el-radio-group的使用完全一致；另外提供的几个扩展属性便于使用

##### 继承关系
```
TcRadioGroup > ElRadioGroup
```

### 使用providers数据源
:::demo
```html
<tc-radio-group  v-model="sex" :providers="sexProviders" />
<script>
  export default {
    data() {
      return {
        sex:'02',
        sexProviders: [{id:'1',text:'男',value:'01'},{id:'2',text:'女',value:'02'}]
      }
    }
  }
</script>
```
:::

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| providers   | 内容选项   | Array          | — | — |

#### providers

| name | 说明 |
|------|--------|
| id | 循环中的:key |
| text | 选项的文本 |
| value | 选项的值 |