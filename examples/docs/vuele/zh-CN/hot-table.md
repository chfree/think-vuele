## Handsontable
handsontable 可编辑表格

### 基础示例
:::demo
```html
<tc-block style="margin-bottom:10px;">
  {{ excelData }}
</tc-block>
<tc-hot-table ref="hotTable" :data="data" :settings="hotSettings" />
<tc-button @click="getData" style="margin-top:10px;">获取数据</tc-button>
<script>
export default {
    data: function() {
      return {
        data: [
          ["", "Ford", "Volvo", "Toyota", "Honda"],
          ["2016", 10, 11, 12, 13],
          ["2017", 20, 11, 14, 13],
          ["2018", 30, 15, 12, 13]
        ],
        hotSettings: {
          afterChange: function (changes, source) {
            console.log(changes, source)
          }
        },
        excelData: null
      }
    },
    created() {
      this.excelData = this.data
    },
    methods: {
      getData() {
        this.excelData =Object.assign([], this.$refs.hotTable.$attrs.data)
        
      }
    }
  }
</script>
```
:::

### 滚动表格
:::demo
```html
<tc-hot-table :data="data" height="300" colWidths="100" rowHeights="23" />
<script>
export default {
    data: function() {
      return {
        data: this.$hotTable.helper.createSpreadsheetData(100, 100)
      }
    }
  }
</script>
```
:::

### 固定行列
:::demo
```html
<tc-hot-table :data="data" height="300" colWidths="100" rowHeights="23" fixedRowsTop="2" fixedColumnsLeft="2" />
<script>
export default {
    data: function() {
      return {
        data: this.$hotTable.helper.createSpreadsheetData(30, 30)
      }
    }
  }
</script>
```
:::

### 自适应列宽行高
双击列或行的分界线则自动调整宽高
:::demo
```html
<tc-hot-table :data="data" height="300" :colWidths="colWidths" :rowHeights="rowHeights" :manualColumnResize="true" :manualRowResize="true" />
<script>
export default {
    data: function() {
      return {
        data: this.$hotTable.helper.createSpreadsheetData(30, 30),
        colWidths: [45, 100, 160, 60, 80, 80, 80],
        rowHeights: [50, 40, 100],

      }
    }
  }
</script>
```
:::

### 自定义表头
:::demo
```html
<tc-hot-table :data="data" :colHeaders="colHeaders" />
<script>
export default {
    data: function() {
      return {
        data: this.$hotTable.helper.createSpreadsheetData(15, 5),
        colHeaders: ['姓名','性别','年龄','爱好','地址']
      }
    }
  }
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| height | 表格的高度 | String,Number | — | auto |
| rowHeaders | 是否显示默认表格头 | Boolean,Array | — | true |
| colHeaders | 是否显示默认表格列 | Boolean,Array | — | true |
| colWidths | 列宽 | Number,Array | Number则每列相同，Array则自定义每列 | - |
| rowHeights | 行高 | Number,Array | Number则每列相同，Array则自定义每列 | - |
| fixedRowsTop | 固定的行数 | Number | — | - |
| fixedColumnsLeft | 固定的列数 | Number | — | - |
| manualColumnResize | 列是否可以双击自适应 | Number | — | - |
| manualRowResize | 行是否可以双击自适应 | Number | — | - |