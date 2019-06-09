<template>
  <el-input :value="value" class="tc-input" v-bind="$attrs" v-on="$listeners">
    <slot slot="append" name="append" ></slot>
  </el-input>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcInput',
  mixins: [vnameMixin],
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
