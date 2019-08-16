<template>
  <div>
    <el-table
      ref="eltable"
      :data="formatData"
      v-bind="$attrs"
      :border="border"
      :stripe="stripe"
      :fit="fit"
      empty-text=""
      highlight-current-row
      v-on="$listeners"
      class="tc-table"
      @selection-change="myHandleSelectionChange"
      @current-change="myHandleCurrentChange"
      @select="myHandleSelect"
      @row-click="myRowClick"
      @select-all="myHandleSelectAll">
      <el-table-column v-if="selection" type="selection" width="45" align="center">
      </el-table-column>
      <el-table-column v-if="sequence" label="序号" align="center" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column v-for="column in columnFormate" :key="column.name" :label="column.text" :width="column.width" :align="column.align==null?'center':column.align">
        <template slot-scope="scope" >
          <slot :value="scope.row[column.name]" :columnName="column.name" :rowData="scope.row" :column="column" :scope="scope">
            {{ scope.row[column.name] }}
          </slot>
        </template>
      </el-table-column>
      <slot />
    </el-table>
  </div>
</template>

<script>
import { hasClass, removeClass } from 'element-ui/lib/utils/dom'
export default {
  name: 'TcTable',
  props: {
    data: { type: [Array, Object], required: false, default: null },
    sequence: { type: Boolean, required: false, default: true },
    border: { type: Boolean, required: false, default: true },
    stripe: { type: Boolean, required: false, default: true },
    fit: { type: Boolean, required: false, default: true },
    selection: { type: Boolean, required: false, default: false },
    selectionType: { type: String, required: false, default: 'single' },
    columns: { type: Array, default: () => [] }
  },
  data: () => ({
    currentRow: null,
    multipleSelection: []
  }),
  watch: {
    'data': function() {
      this.currentRow = null
    }
  },
  computed: {
    formatData: function() {
      return this.data
    },
    columnFormate: function() {
      return this.columns.filter(item => !(item.hideen))
    }
  },
  methods: {
    setCurrentRow(currentRow) {
      this.$refs.eltable.setCurrentRow(currentRow)
    },
    getCurrentRow() {
      return this.currentRow
    },
    getSelection() {
      return this.multipleSelection
    },
    toggleRowSelection(row, selected) {
      this.$refs.eltable.toggleRowSelection(row, selected)
      if (selected) {
        this.$emit('select-row', row)
      } else {
        this.$emit('un-select-row', row)
      }
    },
    toggleAllSelection() {
      this.$refs.eltable.toggleAllSelection()
    },
    clearSelection() {
      this.$refs.eltable.clearSelection()
    },
    clearCurrentChange() {
      const { $el, highlightCurrentRow } = this.$refs.eltable
      if ($el && highlightCurrentRow) {
        const trs = $el.querySelector('tbody').children || []
        Array.from(trs).forEach(row => {
          if (hasClass(row, 'el-table__row') && hasClass(row, 'current-row')) {
            removeClass(row, 'current-row')
          }
        })
      }
    },
    myHandleCurrentChange(currentRow, oldCurrentRow) {
      this.currentRow = currentRow
      if (this.selectionType === 'single') {
        this.clearSelection()
        this.$refs.eltable.toggleRowSelection(currentRow)
      }
    },
    myRowClick(row, column, event) {
      if (this.selectionType === 'multi') {
        this.$refs.eltable.toggleRowSelection(row)
      }
    },
    myHandleSelect(selection, row) {
      if (this.selectionType === 'single') {
        if (selection.length > 0) {
          this.toggleRowSelection(row, true)
          this.setCurrentRow(row)
        } else {
          this.clearCurrentChange()
        }
      }
    },
    myHandleSelectAll(selection) {
      if (this.selectionType === 'single') {
        this.$message.warning('单选模式下，暂时不支持多选')
        this.clearSelection()
      }
    },
    myHandleSelectionChange(selection) {
      if (this.selectionType === 'multi') {
        this.$emit('select-rows', selection)
      }
      this.multipleSelection = selection
    }
  }
}
</script>
