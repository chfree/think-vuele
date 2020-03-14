<template>
  <el-date-picker :value="value" :vname="vname" :picker-options="pickerOptionsResult" class="tc-date-picker" v-bind="$attrs" :type="type" value-format="yyyy-MM-dd" style="width: 100%;" v-on="$listeners">
  </el-date-picker>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
import { isEmpty } from 'main/utils'
export default {
  name: 'TcDatePicker',
  mixins: [vnameMixin],
  props: {
    type: { type: String, default: 'date' },
    value: { type: Object | String | Number, default: '' },
    lessThan: { type: String, default: '' },
    greaterThan: { type: String, default: '' },
    pickerOptions: {type: Object, default: null}
  },
  data() {
    return {
      pickerOptionDefault: this.pickerOptionFun()
    }
  },
  computed: {
    pickerOptionsResult: function() {
      return isEmpty(this.pickerOptions) ? this.pickerOptionDefault : this.pickerOptions
    }
  },
  inject: {
    formDataMap: {
      default() {
        return {
        }
      }
    }
  },
  mounted() {
    this.formDataMap[this.vname] = this.value
    this.$set(this.formDataMap, this.vname, this.value)
  },
  watch: {
    'value': function(newVal) {
      this.$set(this.formDataMap, this.vname, newVal)
    }
  },
  methods: {
    pickerOptionFun: function() {
      var self = this
      return {
        disabledDate(time) {
          if (!isEmpty(self.greaterThan) && !isEmpty(self.formDataMap[self.greaterThan])) {
            return new Date(self.formDataMap[self.greaterThan]).getTime() - 8.64e7 > time.getTime()
          }
          if (!isEmpty(self.lessThan) && !isEmpty(self.formDataMap[self.lessThan])) {
            return time.getTime() > new Date(self.formDataMap[self.lessThan]).getTime()
          }
        }
      }
    }
  }
}
</script>
