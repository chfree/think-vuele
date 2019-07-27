<template>
  <div>
    <tc-table 
      :data="formatData" 
      :columns="columns" 
      :border="border"
      :stripe="stripe"
      :selection="selection"
      :sequence="sequence"
      :fit="fit" 
      v-bind="$attrs" 
      class="tc-edit-table"
      v-on="$listeners">
      <template slot-scope="{ value, columnName, rowData, column, scope }">
        <slot v-if="!toObject(column).editable" :value="value" :columnName="columnName" :rowData="rowData" :column="column" :scope="scope">
          <span>{{ value }}</span>
        </slot>
        <slot v-if="toObject(column).editable" :value="value" :columnName="columnName" :rowData="rowData" :column="column" :scope="scope" name="editable">
          <div :class="{'editable-control' : isSignleMode, 'editable-container': !isSignleMode}">
            <tc-date-picker v-if="toObject(column).type === 'date'" v-model="scope.row[columnName]" type="date" size="mini"></tc-date-picker>
            <tc-select v-else-if="toObject(column).type === 'select'" :providers="toObject(column).providers" v-model="scope.row[columnName]" size="mini"></tc-select>
            <tc-checkbox v-else-if="toObject(column).type === 'checkbox'" v-model="scope.row[columnName]" size="mini"></tc-checkbox>
            <tc-input v-else v-model="scope.row[columnName]" type="text" size="mini"></tc-input>
          </div>
          <span :class="{'editable-span' : isSignleMode, 'editable-span-hide': !isSignleMode}">{{ value }}</span>
        </slot>
      </template>
      <slot />
    </tc-table>
  </div>
</template>

<script>
import formatData from './eval'
import table from '../../table/src/table'
export default {
  name: 'TcEditTable',
  mixins: [table],
  props: {
    editmode: { type: String, required: false, default: 'single', validator: function(value) {
      return ['single', 'multi'].indexOf(value) !== -1
    }}
  },
  data: () => ({
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
    isSignleMode: function() {
      return this.editmode === 'single'
    }
  },
  methods: {
    toObject(observer) {
      return Object.assign({}, observer)
    }
  }
}
</script>
