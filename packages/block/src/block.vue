<template>
  <div ref="blockContainer" class="tc-block-container" :class="boxShadow">
    <div v-if="showTitle" class="tc-block-title" :style="titleStyle">
      <slot name="title">
        <span class="tc-block-title-left"></span>
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="tc-block-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcBlock',
  props: {
    title: { type: String, default: '' },
    shadow: {type: String, default: 'always', validator: function(value) {
      return ['always', 'hover', 'never'].indexOf(value) !== -1
    }}
  },
  data: () => ({
    height: 100,
    titleHeight: 30
  }),
  computed: {
    titleStyle: function() {
      return {
        height: this.titleHeight + 'px',
        lineHeight: this.titleHeight + 'px'
      }
    },
    contentStyle: function() {
      return {
        height: (this.height - this.titleHeight) + 'px'
      }
    },
    showTitle: function() {
      if (this.$slots.title !== undefined && this.$slots.title !== null) {
        return true
      }
      return this.title !== '' && this.title !== null && this.title !== undefined
    },
    boxShadow: function() {
      if (this.shadow === 'always') {
        return 'tc-box-shadow'
      }
      if (this.shadow === 'hover') {
        return 'tc-box-shadow-hover'
      }
    }
  },
  mounted() {
    this.calcHeight()
  },
  methods: {
    calcHeight() {
      let height = this.$refs.blockContainer.style.height
      this.height = parseInt(height, 10)
    }
  }
}
</script>
