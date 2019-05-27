<template>
  <el-form-item class="tc-form-item" v-bind="$attrs" v-on="$listeners">
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