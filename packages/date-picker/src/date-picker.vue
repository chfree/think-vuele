<template>
  <el-date-picker :value="value" v-bind="$attrs" :type="type" value-format="yyyy-MM-dd" style="width: 100%;" v-on="$listeners">
  </el-date-picker>
</template>

<script>
export default {
  name: 'TcDatePicker',
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
