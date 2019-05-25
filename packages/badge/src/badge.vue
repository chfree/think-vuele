<template>
  <el-badge v-bind="$attrs" :value="value" v-on="$listeners">
    <slot></slot>
  </el-badge>
</template>

<script>
export default {
  name: 'TcBadge',
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
