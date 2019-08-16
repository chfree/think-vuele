## Table
Table与el-table的使用完全一致；另外提供的几个扩展属性便于使用

##### 继承关系
```
TcTable > ElTable
```

### 基础表格
:::demo
```html
<tc-button-group style="margin-bottom:10px;">
  <tc-button @click="getCurrentRow" size="mini">获取选中的数据</tc-button>
  <tc-button @click="reload" size="mini">重新加载数据</tc-button>
</tc-button-group>
<tc-table ref="tcTable" :columns="columns" :data="tableData"/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'姓名',width:'200'},
        {name:'date',text:'日期',width:'200'},
        {name:'address',text:'地址'}],
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
    },
    methods: {
      getCurrentRow() {
        const currentRow = this.$refs.tcTable.getCurrentRow()
        console.log(currentRow, 'currentRow')
      },
      reload() {
        const reloadData = this.tableData
        this.tableData = []
      }

    }
  }
</script>
```
:::

### 复选框表格
:::demo
```html
<tc-table :columns="columns" :data="tableData" selection/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'姓名',width:'200'},
        {name:'date',text:'日期',width:'200'},
        {name:'address',text:'地址'}],
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

### 多选框表格
:::demo
```html

<tc-button-group style="margin-bottom:10px;">
  <tc-button @click="getSelection" size="mini">获取选中的数据</tc-button>
</tc-button-group>

<tc-table ref="multiTable" :columns="columns" :data="tableData" selectionType="multi" selection/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'姓名',width:'200'},
        {name:'date',text:'日期',width:'200'},
        {name:'address',text:'地址'}],
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
    },
    methods: {
      getSelection() {
        const selection = this.$refs.multiTable.getSelection()
        console.log(selection, 'selection')
      }
    }
  }
</script>
```
:::

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| sequence   | 是否显示序号   | Boolean          | — | true |
| border   | 是否带有纵向边框   | Boolean          | — | true |
| stripe   | 是否为斑马纹 table   | Boolean          | — | true |
| fit   | 列的宽度是否自撑开   | Boolean          | — | true |
| selection   | 是否显示checkbox   | Boolean          | — | false |
| selectionType   | 选择模式   | String          | single,multi | single |
| columns   | 表格列定义   | Array          | — | — |


#### Columns Attributes

| name | 说明 | 类型            | 可选值  | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| name | 对应data中的属性名称 | String          | — | — |
| text | 表头的显示文本 | String          | — | — |
| width | 每列的列宽 | String          | — | 平分剩下的列 |
| align | 内容的对齐方式 | String          | left,center,right | center |
| hideen | 是否显示隐藏 | Boolean          | — | false |