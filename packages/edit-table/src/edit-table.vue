<template>
  <div>
    <el-table :data="formatData" v-bind="$attrs" :stripe="stripe" :border="border" :fit="fit" highlight-current-row class="tb-edit" v-on="$listeners">
      <el-table-column v-if="selection" type="selection" width="45">
      </el-table-column>
      <el-table-column v-if="sequence" label="序号" align="center" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
          <div class="edit-operate-container">
            <tc-button v-if="scope.row.editable" size="mini" type="primary" @click="handleSaveEdit(scope.$index, scope.row)">保存</tc-button>
            <tc-button v-if="scope.row.editable" size="mini" type="danger" @click="handleCancelEdit(scope.$index, scope.row)">取消</tc-button>
            <tc-button v-if="!scope.row.editable" :disabled="scope.row.disabled" size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</tc-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column v-for="column in columns" :key="column.name" :label="column.text" :prop="column.name" :width="column.width" :align="column.align==null?'center':column.align">
        <template slot-scope="scope">
          <slot v-if="!column.editable || !scope.row.editable" :value="scope.row[column.name]" :columnName="column.name" :rowData="scope.row" :scope="scope">
            {{ scope.row[column.name] }}
          </slot>
          <slot v-if="column.editable && scope.row.editable" :value="scope.row[column.name]" :columnName="column.name" :rowData="scope.row" :scope="scope" name="editable">
            <tc-date-picker v-if="column.type === 'date'" v-model="currentEdit[column.name]" type="date" size="mini"></tc-date-picker>
            <tc-select v-if="column.type === 'select'" :providers="column.providers" v-model="currentEdit[column.name]" size="mini"></tc-select>
            <tc-input v-else v-model="currentEdit[column.name]" type="text" size="mini"></tc-input>
          </slot>
        </template>
      </el-table-column>
      <slot />
    </el-table>
  </div>
</template>

<script>
import formatData from './eval'
export default {
  name: 'TcEditTable',
  props: {
    data: { type: [Array, Object], required: false, default: null },
    sequence: { type: Boolean, required: false, default: true },
    selection: { type: Boolean, required: false, default: false },
    border: { type: Boolean, required: false, default: true },
    stripe: { type: Boolean, required: false, default: true },
    fit: { type: Boolean, required: false, default: true },
    evalFunc: { type: Function, required: false, default: null },
    columns: { type: Array, default: () => [] }
  },
  data: () => ({
    currentEdit: {},
    isEditNow: false
  }),
  computed: {
    formatData: function() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || formatData
      return func(tmp)
    },
    editableColumns: function() {
      const editableColumns = []
      this.columns.forEach((column) => {
        if (column.editable) {
          editableColumns.push(column.name)
        }
      })
      return editableColumns
    }
  },
  methods: {
    handleEdit(trIndex, row) {
      if (this.isEditNow) {
        this.$message.warning('一次只能编辑一条数据')
        return
      }
      this.$emit('edit-before', trIndex, row)

      this.currentEdit = Object.assign({}, row)
      this.isEditNow = true
      row.editable = true
    },
    handleSaveEdit(trIndex, row) {
      const that = this

      this.$emit('row-save', trIndex, row, this.currentEdit, function(result) {
        if (!result) {
          that.cancelEdit(row)
        } else {
          for (var k in that.currentEdit) {
            row[k] = that.currentEdit[k]
          }
          that.cancelEdit(row)
        }
      })
    },
    handleCancelEdit(trIndex, row) {
      this.cancelEdit(row)
    },
    cancelEdit(row) {
      row.editable = false
      this.currentEdit = {}
      this.isEditNow = false
    },
    tableEditNow() {
      return this.isEditNow
    }
  }
}
</script>

<style lang="scss">
.edit-operate-container{
  .el-button--mini{
    padding: 5px 7px !important;
  }
}

.tc-table-base .tb-edit{
  td{
    padding: 5px 0px !important;
    height: 45px !important;
  }
}
</style>
