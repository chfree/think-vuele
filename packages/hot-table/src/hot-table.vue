<template>
  <div>
    <hot-table ref="hotTable" class="tc-hot-table" :settings="resultSettings" licenseKey="non-commercial-and-evaluation" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import 'handsontable/dist/handsontable.full.css'
import './hot-table.css'
export default {
  components: {HotTable},
  name: 'TcHotTable',
  props: {
    settings: { type: Object, default: () => {} }
  },
  data: () => ({
    defaultSetting: {
      height: '300px',
      width: '100%',
      manualColumnResize: true,
      manualRowResize: true,
      rowHeaders: true,
      colHeaders: true,
      stretchH: 'all'
    }
  }),
  computed: {
    resultSettings: function() {
      return Object.assign(this.defaultSetting, this.settings)
    },
    hotInstance: function() {
      return this.$refs.hotTable.hotInstance
    },
    hotTable: function() {
      return this.$refs.hotTable
    }
  },
  methods: {
    deleteEmpty() {
      var rows = this.hotInstance.countRows()
      for (var i = rows - 1;i >= 0;i--) {
        if (this.hotInstance.isEmptyRow(i)) {
          this.hotInstance.alter('remove_row', i)
        }
      }
    }
  }
}
</script>
