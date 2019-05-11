<template>
  <div>
    <tc-table 
      :data="formatData" 
      :columns="columns" 
      :border="border"
      :stripe="stripe"
      :fit="fit" 
      v-bind="$attrs" 
      class="tb-edit" 
      v-on="$listeners">
      <template slot-scope="{ value, columnName, rowData, column, scope }">
        <slot v-if="!toObject(column).editable" :value="value" :columnName="columnName" :rowData="rowData" :column="column" :scope="scope">
          <span>{{ value }}</span>
        </slot>
        <slot v-if="toObject(column).editable" :value="value" :columnName="columnName" :rowData="rowData" :column="column" :scope="scope" name="editable">
          <div :class="{'editable-control' : isSignleMode}">
            <tc-date-picker v-if="toObject(column).type === 'date'" v-model="scope.row[columnName]" type="date" size="mini"></tc-date-picker>
            <tc-select v-if="toObject(column).type === 'select'" :providers="toObject(column).providers" v-model="scope.row[columnName]" size="mini"></tc-select>
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
    editmode: { type: String, required: false, default: 'single' }
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

<style lang="scss">
.tb-edit{
  td{
    padding: 5px 0px !important;
    height: 45px !important;
  }

  .editable-control {
    display: none
  }
  .editable-span-hide {
    display: none;
  }
  .current-row .editable-control {
    display: block
  }
  .current-row .editable-span {
    display: none
  }
}
</style>
