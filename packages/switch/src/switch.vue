<template>
  <el-switch class="tc-swtich" :vname="vname" v-bind="$attrs" v-on="$listeners">
  </el-switch>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcSwitch',
  mixins: [vnameMixin],
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>