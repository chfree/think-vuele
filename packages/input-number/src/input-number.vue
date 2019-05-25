<template>
  <el-input-number :value="value" v-bind="$attrs" v-on="$listeners">
  </el-input-number>
</template>

<script>
export default {
  name: 'TcInputNumber',
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
