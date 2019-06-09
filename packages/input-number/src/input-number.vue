<template>
  <el-input-number :value="value" class="tc-input-number" v-bind="$attrs" v-on="$listeners">
  </el-input-number>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcInputNumber',
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
