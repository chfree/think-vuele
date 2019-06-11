<template>
  <el-radio-group :value="value" :vname="vname" class="tc-radio-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-group>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcRadioGroup',
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