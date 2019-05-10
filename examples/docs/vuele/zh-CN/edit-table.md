## EditTable
可编辑表格，提供可以编辑的表格

### 基础表格
:::demo
```html
<tc-block style="height:150px;">
{{tableData}}
</tc-block>
<tc-edit-table style="margin-top:20px;" :columns="columns" :data="tableData"/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'姓名',width:'200', editable: true},
        {name:'date',text:'日期',width:'200', editable: true},
        {name:'address',text:'地址', editable: true}],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```
:::