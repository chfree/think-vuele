<template>
  <div ref="blockContainer" class="block-container" :class="boxShadow">
    <div v-if="showTitle" class="block-title" :style="titleStyle">
      <slot name="title">
        <span class="block-title-left"></span>
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="block-content" :style="contentStyle">
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
        return 'box-shadow'
      }
      if (this.shadow === 'hover') {
        return 'box-shadow-hover'
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

<style lang="scss">
.block-container{
  border: 1px solid #cfd9e5;
  .block-title{
    padding: 5px;
    font-size: 15px;
    color: #333;
    background-color: #f1f4fa;
    padding-left: 15px;
    border-bottom: 1px solid #cfd9e5;
    vertical-align: middle;
  }
  .block-title-left{
    width: 3px;
    height: 15px;
    margin-top: -2px;
    background: #1379d2;
    border-radius: 25%;
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
  }
  .block-content{
    padding: 5px;
  }
}
.box-shadow{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.box-shadow-hover:hover{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
