
## Select

Select与el-select的使用完全一致；另外提供的几个扩展属性便于使用

##### 继承关系
```
TcSelect > ElSelect
```

### 使用providers数据源
:::demo
```html
<tc-select v-model="value" :providers="sexProviders" />
<script>
  export default {
    data() {
      return {
        value:'01',
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
| text | 下拉框的文本 |
| value | 下拉框的值 |