<template>
  <el-button ref="mainButton" class="tc-button" :vevent="vevent" v-bind="$attrs" v-on="$listeners">
    {{forceEnabled}}
    <slot></slot>
  </el-button>
</template>

<script>
import veventMixin from 'main/mixins/vevent-mixin.js'
export default {
  name: 'TcButton',
  componentName: 'TcButton',
  mixins: [veventMixin],
  props: {
    forceEnabled: {type: Boolean, default: false}
  },
  data: () => ({
    defaultDisbled: true
  }),
  watch: {
    'tcDialog.visible': function(newVal) {
      this.$nextTick(() => {
        if (newVal) {
          this.doForceEndabled()
        }
      })
    },
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
  inject: {
    tcDialog: {
      default: ''
    }
  },
  computed: {
  },
  mounted() {
    this.doForceEndabled()
  },
  methods: {
    doForceEndabled() {
      if (this.forceEnabled) {
        this.$refs.mainButton.$el.disabled = false
        this.$refs.mainButton.$el.className = this.$refs.mainButton.$el.className.replace(' is-disabled', '')
      }
    }
  }
}
</script>
