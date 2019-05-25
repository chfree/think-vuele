<template>
  <el-form ref="form" v-bind="$attrs" onsubmit="return false" v-on="$listeners">
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  name: 'TcForm',
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    validate(callback) {
      this.$refs.form.validate(callback)
    },
    resetFields() {
      this.$refs.form.resetFields()
    },
    clearValidate() {
      this.$refs.form.clearValidate()
    },
    validateField(field) {
      this.$refs.form.validateField(field)
    }
  }
}
</script>
