<script>
  import { HotTable } from '@handsontable/vue'
  import 'handsontable/dist/handsontable.full.css'
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
    },
    components: {
      HotTable
    }
  }
</script>

## Loading
handsontable 可编辑表格

### 基础示例
<hot-table :data="data" :rowHeaders="true" :colHeaders="true"></hot-table>
