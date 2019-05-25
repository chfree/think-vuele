<template>
  <el-radio :value="value" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio>
</template>

<script>
export default {
  name: 'TcRadio',
  props: {
    value: { type: Boolean, required: false, default: false }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>