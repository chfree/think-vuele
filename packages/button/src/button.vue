<template>
  <el-button ref="mainButton" class="tc-button" :vevent="vevent" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
import veventMixin from 'main/mixins/vevent-mixin.js'
export default {
  name: 'TcButton',
  mixins: [veventMixin],
  props: {
    forceEnabled: {type: Boolean, default: false}
  },
  data: () => ({
    defaultDisbled: true
  }),
  watch: {
    'forceEnabled': function(newVal) {
      if (this.defaultDisbled) {
        if (newVal) {
          this.$refs.mainButton.$el.disabled = false
          this.$refs.mainButton.$el.className = this.$refs.mainButton.$el.className.replace(' is-disabled', '')
        } else {
          this.$refs.mainButton.$el.disabled = true
          this.$refs.mainButton.$el.className += ' is-disabled'
        }
      }
    }
  },
  computed: {
  },
  mounted() {
    if (this.forceEnabled) {
      this.$refs.mainButton.$el.disabled = false
      this.$refs.mainButton.$el.className = this.$refs.mainButton.$el.className.replace(' is-disabled', '')
    }
  },
  methods: {
  }
}
</script>
