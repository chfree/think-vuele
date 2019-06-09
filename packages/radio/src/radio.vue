<template>
  <el-radio :value="value" :vname="vname" class="tc-radio" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcRadio',
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