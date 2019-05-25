<template>
  <div>
    <tc-edit-table ref="eltable" 
    :data="formatData" 
    :row-style="showRow"
    :columns="columns"
    v-bind="$attrs" 
    :stripe="stripe" 
    :border="border" 
    :fit="fit" 
    :editmode="editmode"
    :sequence="sequence"
    :selection="selection"
    v-on="$listeners" >
      <slot />
    </tc-edit-table>
  </div>
</template>

<script>

import treeToArray from './eval'
import table from '../../edit-table/src/edit-table'
export default {
  name: 'TcEditTreeTable',
  mixins: [table],
  props: {
    hier: { type: Boolean, required: false, default: false },
    sequence: { type: Boolean, required: false, default: false },
    evalFunc: { type: Function, required: false, default: null },
    evalArgs: { type: Array, default: () => [] },
    expandAll: { type: Boolean, default: false }
  },
  computed: {
    // 格式化数据源
    formatData: function() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs ? [tmp, this.expandAll].concat(this.evalArgs) : [tmp, this.expandAll]
      const result = func.apply(null, args)
      return result
    }
  },
  created() {
  },
  methods: {
    showRow: function(row) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    toggleRowSelection(row, selected) {
      this.$refs.eltable.toggleRowSelection(row, selected)
    },
    setCurrentRow(currentRow) {
      this.$refs.eltable.setCurrentRow(currentRow)
    },
    clearSelection() {
      this.$refs.eltable.clearSelection()
    }
  }
}
</script>
