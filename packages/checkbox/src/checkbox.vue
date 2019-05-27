<template>
  <el-checkbox :value="value" class="tc-checkbox" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: 'TcCheckbox',
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
