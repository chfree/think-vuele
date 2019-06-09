<template>
  <el-checkbox :value="value" :vname="vname" class="tc-checkbox" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcCheckbox',
  mixins: [vnameMixin],
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
