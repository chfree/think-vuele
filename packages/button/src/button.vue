<template>
  <el-button class="tc-button" vevent="vevent" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
import veventMixin from 'main/mixins/vevent-mixin.js'
export default {
  name: 'TcButton',
  mixins: [veventMixin],
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
