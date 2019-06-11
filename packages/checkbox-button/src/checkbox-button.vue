<template>
  <el-checkbox-button :value="value" :vname="vname" class="tc-checkbox-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcCheckboxButton',
  mixins: [vnameMixin],
  props: {
    value: { type: String, required: false, default: '' }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
