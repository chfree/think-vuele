<template>
  <div v-show="visible">
    <!-- eslint-disable -->
    <el-dialog ref="elDialog" v-el-drag-dialog v-bind="$attrs" @opened="opened" :width="width" :visible="visible" :close-on-click-modal="false" :close-on-press-escape="false" :top="marginTop" custom-class="tc-dialog-base" v-on="$listeners">
      <div slot="title" class="tc-dialog-title">
        <i :class="icon" />
        <slot name="title">{{ title }}</slot>
      </div>
      <div :style="dialogHeight" class="tc-dialog-body-container">
        <slot :visible.sync="visible"></slot>
      </div>
      <div :style="fixedButtonStyle">
      </div>
    </el-dialog>
  </div> 
</template>

<script>
import elDragDialog from 'main/directives/el-dragDialog' // base on element-ui
import { findComponentDownward } from 'main/utils/find-components'
export default {
  name: 'TcDialog',
  directives: { elDragDialog },
  props: {
    title: { type: String, required: false, default: 'dialog' },
    icon: { type: String, required: false, default: 'el-icon-time' },
    visible: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: '50%' },
    height: { type: Number | String, required: false, default: -1 }
  },
  data() {
    return {
      titleHeight: 40,
      dialogHeight: '',
      marginTop: '',
      currentHeight: 0,
      fixedBottomHeight: 0
    }
  },
  computed: {
    fixedButtonStyle: function() {
      return {
        height: this.fixedBottomHeight + 'px'
      }
    }
  },
  watch: {
    visible(val) {
      this.$emit('update:visible', val)
    }
  },
  mounted() {
    this.calcRender()
  },
  destroyed() {
  },
  methods: {
    calcRender() {
      this.calcHeight()
      this.calcDialogHeight()
      this.calcMarginTop()
    },
    opened() {
      var tcFixedBottom = findComponentDownward(this.$refs.elDialog, 'TcFixedBottom')
      if (tcFixedBottom === null) {
        return
      }
      this.fixedBottomHeight = tcFixedBottom.$el.offsetHeight
      this.calcDialogHeight()
    },
    calcDialogHeight() {
      this.dialogHeight = 'height:' + (this.currentHeight - this.titleHeight - this.fixedBottomHeight) + 'px'
    },
    calcMarginTop() {
      this.marginTop = (window.innerHeight - this.currentHeight) / 2 + 'px'
    },
    calcHeight() {
      this.currentHeight = 0
      if (this.height.indexOf('%') > 0) {
        this.currentHeight = window.innerHeight * parseFloat(this.height) / 100
      } else {
        this.currentHeight = Number.parseInt(this.height, 10)
      }
    }
  }
}
</script>
