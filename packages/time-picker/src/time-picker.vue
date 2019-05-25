<template>
  <el-time-select :value="value" v-bind="$attrs" style="width: 100%;" v-on="$listeners">
  </el-time-select>
</template>

<script>
export default {
  name: 'TcTimePicker',
  props: {
    value: { type: Object | String | Number, default: null }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>