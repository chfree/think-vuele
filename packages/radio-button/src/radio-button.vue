<template>
  <el-radio-button :value="value" :vname="vname" class="tc-radio-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-button>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcRadioButton',
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