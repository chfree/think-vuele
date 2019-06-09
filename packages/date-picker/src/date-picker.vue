<template>
  <el-date-picker :value="value" class="tc-date-picker" v-bind="$attrs" :type="type" value-format="yyyy-MM-dd" style="width: 100%;" v-on="$listeners">
  </el-date-picker>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcDatePicker',
  mixins: [vnameMixin],
  props: {
    type: { type: String, default: 'date' },
    value: { type: Object | String | Number, default: '' }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
