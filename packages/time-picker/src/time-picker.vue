<template>
  <el-time-select :value="value":vname="vname" v-bind="$attrs" class="tc-time-picker" style="width: 100%;" v-on="$listeners">
  </el-time-select>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcTimePicker',
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