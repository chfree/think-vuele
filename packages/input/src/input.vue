<template>
  <el-input :value="value" v-bind="$attrs" v-on="$listeners">
    <slot slot="append" name="append" ></slot>
  </el-input>
</template>

<script>
export default {
  name: 'TcInput',
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

<style scoped lang="scss">
</style>
