<template>
  <el-input-number :value="value" :min="cmin" :max="max" :vname="vname" class="tc-input-number" @blur="blurHandle" v-bind="$attrs" v-on="$listeners">
  </el-input-number>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
import regularValidMixin from 'main/mixins/regular-valid-mixin.js'

export default {
  name: 'TcInputNumber',
  mixins: [vnameMixin, regularValidMixin],
  props: {
    value: { type: Object | String | Number, default: null },
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity }
  },
  data: () => ({
  }),
  computed: {
    cmin: function() {
      if (this.regularType === 'positiveNumber') {
        return 1
      } else if (this.regularType === 'naturalNumber') {
        return 0
      }
      return this.min
    }
  },
  methods: {
  }
}
</script>
