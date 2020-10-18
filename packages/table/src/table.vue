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
      <el-table-column v-if="sequence" :label="$t('tui.sequenceLabel')" align="center" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column v-for="column in columnFormate" 
        :key="column.name"
        :prop="column.name" 
        :label="columnLabel(column)" 
        :width="column.width"
        :min-width="column.minWidth"
        :align="column.align==null?'center':column.align" 
        :formatter="column.formatter"
        :resizable="column.resizable"
        :sortable="column.sortable"
        :sort-orders="column.sortOrders"
        :sort-method="column.sortMethod"
        :sort-by="column.sortBy"
        :header-align="column.headerAlign"
        :render-header="column.renderHeader"
        :fixed="column.fixed"
        :type="column.type"
        :index="column.index"
        :column-key="column.columnKey"
        :class-name="column.className"
        :label-class-name="column.labelClassName"
        :selectable="column.selectable"
        :reserve-selection="column.reserveSelection"
        :filters="column.filters"
        :filter-placement="column.filterPlacement"
        :filter-multiple="column.filterMultiple"
        :filter-method="column.filterMethod"
        :filtered-value="column.filteredValue"
        :show-overflow-tooltip="column.showOverflowTooltip">
        <template slot-scope="scope" >
          <slot :value="scope.row[column.name]" :columnName="column.name" :rowData="scope.row" :column="column" :scope="scope">
            <tc-clamp v-if="column.clamp" autoresize auto-tip :max-lines="column.clamp">
              {{ scope.row[column.name] }}
            </tc-clamp>
            <span v-else>
              {{ scope.row[column.name] }}
            </span>
          </slot>
        </template>
      </el-table-column>
      <slot />
    </el-table>
  </div>
</template>

<script>
import { hasClass, removeClass } from 'element-ui/lib/utils/dom'
import { isEmpty } from 'main/utils'
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
      return this.columns.filter(item => !item.hideen)
    },
    columnLabel() {
      return function(column) {
        if (isEmpty(column.lang)) {
          return column.text
        }
        const langText = this.$t(column.lang)
        if (isEmpty(langText)) {
          return column.text
        }
        return langText
      }
    }
  },
  methods: {
    setCurrentRow(currentRow) {
      if (this.currentRow === null) {
        this.currentRow = currentRow
      }
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
        if (currentRow !== null) {
          this.$refs.eltable.toggleRowSelection(currentRow)
        }
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
