<template>
  <el-form-item v-bind="$attrs">
    <slot></slot>
  </el-form-item>
</template>

<script>
export default {
  name: 'TcFormItem',
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>