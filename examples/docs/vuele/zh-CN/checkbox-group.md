
## CheckboxGroup

tc-checkbox-group与el-checkbox-group的使用完全一致；另外提供的几个扩展属性便于使用

##### 继承关系
```
TcCheckboxGroup > ElCheckboxGroup
```

### 使用providers数据源
:::demo
```html
<tc-checkbox-group  v-model="city" :providers="cityProviders" />
<script>
  export default {
    data() {
      return {
        city:['02'],
        cityProviders: [{id:'1',text:'北京',value:'01'},
        {id:'2',text:'深圳',value:'02'},
        {id:'3',text:'上海',value:'03'},
        {id:'4',text:'广州',value:'04'},
        {id:'5',text:'武汉',value:'05'}]
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