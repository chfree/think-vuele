<template>
  <el-date-picker :value="value" v-bind="$attrs" :type="type" class="tc-date-time-picker" value-format="yyyy-MM-dd HH:mm:ss" style="width: 100%;" v-on="$listeners">
  </el-date-picker>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcDateTimePicker',
  mixins: [vnameMixin],
  props: {
    type: { type: String, default: 'datetime' },
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
