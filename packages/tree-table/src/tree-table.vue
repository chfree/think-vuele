<template>
  <div>
    <tc-table ref="eltable" 
    :data="formatData" 
    :row-style="showRow" 
    v-bind="$attrs" 
    :stripe="stripe" 
    :border="border" 
    :fit="fit" 
    :sequence="sequenceFalse"
    :selection="selection"
    v-on="$listeners" >
      <el-table-column v-if="hier" label="层级" align="left" width="100">
        <template slot-scope="scope">
          {{ scope.row.hier }}
        </template>
      </el-table-column>
      <el-table-column v-for="(column, index) in columns" v-else :key="column.name" :label="column.text" :width="column.width" :align="column.align==null?'center':column.align">
        <template slot-scope="scope">
          <slot :value="scope.row[column.name]" :columnName="column.name" :rowData="scope.row" :scope="scope">
            {{ scope.row[column.name] }}
          </slot>
        </template>
      </el-table-column>
      <slot />
    </tc-table>
  </div>
</template>

<script>

import treeToArray from './eval'
import table from '../../table/src/table'
export default {
  name: 'TcTreeTable',
  mixins: [table],
  props: {
    hier: { type: Boolean, required: false, default: false },
    evalFunc: { type: Function, required: false, default: null },
    evalArgs: { type: Array, default: () => [] },
    expandAll: { type: Boolean, default: false }
  },
  computed: {
    sequenceFalse: function() {
      return false
    },
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
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.el-table td.el-table-column--selection, .el-table th.el-table-column--selection{
  text-align: center !important;
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 18px;
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: '';
  }
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
