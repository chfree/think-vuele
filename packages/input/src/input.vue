<template>
  <el-input :value="value" :vname="vname" class="tc-input" @blur="blurHandle" v-bind="$attrs" v-on="$listeners">
    <slot slot="append" name="append" ></slot>
  </el-input>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
import regularValidMixin from 'main/mixins/regular-valid-mixin.js'

export default {
  name: 'TcInput',
  mixins: [vnameMixin, regularValidMixin],
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
