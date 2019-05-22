## Handsontable
handsontable 可编辑表格

### 基础示例
:::demo
```html
<tc-hot-table :data="data"/>
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
      };
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

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| height | 表格的高度 | String,Number | — | auto |
| rowHeaders | 是否显示默认表格头 | Boolean | — | true |
| colHeaders | 是否显示默认表格列 | Boolean | — | true |
| colWidths | 列宽 | Number | — | - |
| rowHeights | 行高 | Number | — | - |