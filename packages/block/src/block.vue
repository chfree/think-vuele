<template>
  <div ref="blockContainer" class="tc-block-container" :class="blockClass">
    <div v-if="showTitle" class="tc-block-title" :style="titleStyle">
      <div class="tc-left-title-container">
        <slot name="title">
          <span class="tc-block-title-left"></span>
          <span>{{title}}</span>
        </slot>
      </div>
      <div class="tc-right-tool-container">
        <slot name="rightTool">
          <span>
            <i v-show="(!isMaximum)&&(!isMinimum)" class="el-icon-minus toolbar" @click="toMinimum" />
            <i v-show="(!isMaximum)&&(!isMinimum)" class="el-icon-full-screen toolbar" @click="toMaximum" />
            <i v-show="isMaximum||isMinimum" class="el-icon-crop toolbar" @click="toResizBox" />
          </span>
        </slot>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <div class="tc-block-content" v-show="!isMinimum" ref="tcBloclContent" :style="contentStyle" :class="contentClass">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TcBlock',
  props: {
    title: { type: String, default: '' },
    contentStyle: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    shadow: {type: String, default: 'always', validator: function(value) {
      return ['always', 'hover', 'never'].indexOf(value) !== -1
    }}
  },
  data: () => ({
    defaultStyleHeight: null,
    titleHeight: 25,
    isMinimum: false,
    isMaximum: false
  }),
  computed: {
    titleStyle: function() {
      return {
        height: this.titleHeight + 'px',
        lineHeight: this.titleHeight + 'px'
      }
    },
    showTitle: function() {
      if (this.$slots.title !== undefined && this.$slots.title !== null) {
        return true
      }
      return this.title !== '' && this.title !== null && this.title !== undefined
    },
    blockClass: function() {
      return this.boxShadow + ' ' + this.fullBody
    },
    boxShadow: function() {
      if (this.shadow === 'always') {
        return 'tc-box-shadow'
      }
      if (this.shadow === 'hover') {
        return 'tc-box-shadow-hover'
      }
    },
    fullBody: function() {
      if (this.isMaximum) {
        return 'tc-block-full-body'
      }
      return ''
    }
  },
  mounted() {
    this.defaultStyleHeight = this.$el.style.height
  },
  methods: {
    toMinimum() {
      this.isMinimum = true
      this.$el.style.height = '33px'
    },
    toMaximum() {
      this.isMaximum = true
      this.$el.style.height = ''
      // const element = this.$el
      // var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      // if (requestMethod) {
      //   requestMethod.call(element)
      // }
    },
    toResizBox() {
      this.$el.style.height = this.defaultStyleHeight
      this.isMaximum = false
      this.isMinimum = false
      // var requestMethod = document.exitFullScreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen
      // if (requestMethod) {
      //   requestMethod.call(document)
      // }
    }
  }
}
</script>
