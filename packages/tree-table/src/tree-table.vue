<template>
  <div>
    <el-table ref="eltable" 
    :data="formatData" 
    :row-style="showRow" 
    v-bind="$attrs" 
    :stripe="stripe" 
    :border="border" 
    :fit="fit" 
    v-on="$listeners" 
    row-key="name"
    @current-change="handleCurrentChange" 
    @select="handleSelect" 
    @select-all="handleSelectAll">
      <el-table-column v-if="selection" type="selection" width="45">
      </el-table-column>
      <!-- <el-table-column v-if="sequence" label="序号" align="center" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column> -->
      <el-table-column v-if="hier" label="层级" align="left" width="100">
        <template slot-scope="scope">
          {{ scope.row.hier }}
        </template>
      </el-table-column>
      <!-- <el-table-column v-if="columns.length===0" width="150">
        <template slot-scope="scope">
          <span v-for="space in scope.row._level" :key="space" class="ms-tree-space" />
          <span v-if="iconShow(0,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
            <i v-if="!scope.row._expanded" class="el-icon-plus" />
            <i v-else class="el-icon-minus" />
          </span>
          {{ scope.$index }}
        </template>
      </el-table-column> -->
      <el-table-column v-for="(column, index) in columns" v-else :key="column.name" :label="column.text" :width="column.width" :align="column.align==null?'center':column.align">
        <template slot-scope="scope">
          <!-- Todo -->
          <!-- eslint-disable-next-line vue/no-confusing-v-for-v-if -->
          <!-- <span v-for="space in scope.row._level" v-if="index === 0" :key="space" class="ms-tree-space" /> -->
          <!-- <span v-if="iconShow(index,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
            <i v-if="!scope.row._expanded" class="el-icon-plus" />
            <i v-else class="el-icon-minus" />
          </span> -->
          <slot :value="scope.row[column.name]" :columnName="column.name" :rowData="scope.row" :scope="scope">
            {{ scope.row[column.name] }}
          </slot>
        </template>
      </el-table-column>
      <slot />
    </el-table>
  </div>
</template>

<script>

import treeToArray from './eval'
// import table from '../../table/src/table'
export default {
  name: 'TcTreeTable',
  props: {
    sequence: { type: Boolean, required: false, default: true },
    selection: { type: Boolean, required: false, default: false },
    border: { type: Boolean, required: false, default: true },
    stripe: { type: Boolean, required: false, default: true },
    fit: { type: Boolean, required: false, default: true },
    data: { type: [Array, Object], required: true },
    hier: { type: Boolean, required: false, default: false },
    columns: { type: Array, default: () => [] },
    evalFunc: { type: Function, required: false, default: null },
    evalArgs: { type: Array, default: () => [] },
    expandAll: { type: Boolean, default: false },
    selectionType: { type: String, required: false, default: 'single' }
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
    console.log(this.data, 'data')
    console.log(this.formatData)
  },
  methods: {
    showRow: function(row) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded

      this.$emit('toggle-expanded', record)
    },
    // 图标显示
    iconShow(index, record) {
      return (index === 0 && record.children && record.children.length > 0)
    },
    toggleRowSelection(row, selected) {
      this.$refs.eltable.toggleRowSelection(row, selected)
    },
    handleCurrentChange(currentRow, oldCurrentRow) {
      if (this.selectionType === 'single') {
        this.clearSelection()
        this.$refs.eltable.toggleRowSelection(currentRow, true)
      }
    },
    handleSelect(selection, row) {
      if (this.selectionType === 'single') {
        this.clearSelection()
        this.setCurrentRow(row)
        this.$refs.eltable.toggleRowSelection(row, true)
      }
    },
    handleSelectAll(selection) {
      if (this.selectionType === 'single') {
        this.$message.warning('单选模式下，暂时不支持多选')
        this.clearSelection()
      }
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
