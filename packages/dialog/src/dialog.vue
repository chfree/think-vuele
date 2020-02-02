<template>
  <div v-show="visible">
    <!-- eslint-disable -->
    <el-dialog ref="elDialog" 
      v-el-drag-dialog 
      v-bind="$attrs" 
      @opened="opened" 
      @closed="closed"
      @open="open"
      @close="close"
      :width="width" 
      :visible="visible" 
      :close-on-click-modal="false" 
      :close-on-press-escape="false" 
      :top="marginTop"
      :before-close="dialogBeforeClose"
      custom-class="tc-dialog-base" 
      v-on="$listeners">
      <div slot="title" class="tc-dialog-title">
        <i :class="icon" />
        <slot name="title">{{ title }}</slot>
      </div>
      <div :style="dialogHeight" class="tc-dialog-body-container">
        <div v-show="!isSkeletonLoading">
          <slot :visible.sync="visible"></slot>
        </div>
        <tc-skeleton-content style="padding:5px 10px" v-if="isSkeletonLoading">
          <tc-skeleton-form :column="1" />
        </tc-skeleton-content>
      </div>
      <div :style="fixedButtonStyle">
      </div>
    </el-dialog>
  </div> 
</template>

<script>
import elDragDialog from 'main/directives/el-dragDialog' // base on element-ui
import { findComponentDownward } from 'main/utils/find-components'
import emitter from 'element-ui/src/mixins/emitter'

export default {
  name: 'TcDialog',
  mixins: [emitter],
  directives: { elDragDialog },
  props: {
    title: { type: String, required: false, default: 'dialog' },
    icon: { type: String, required: false, default: 'el-icon-time' },
    visible: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: '50%' },
    height: { type: Number | String, required: false, default: -1 },
    loadingType: { type: String, required: false, default: 'loading', validator: function(value) {
      return ['loading', 'skeleton'].indexOf(value) !== -1
    }},
    loading: { type: Boolean, required: false, default: false },
    loadingAutoClose: { type: Boolean, required: false, default: true },
    loadingText: { type: String, required: false, default: '加载中' },
    loadingOption: { type: Object, required: false, default: null }
  },
  provide() {
    return {
      tcDialog: this
    }
  },
  data() {
    return {
      titleHeight: 40,
      dialogHeight: '',
      marginTop: '',
      currentHeight: 0,
      fixedBottomHeight: 0,
      isFirstOpen: true,
      loadingInstance: null,
      skeletonLoading: true
    }
  },
  computed: {
    fixedButtonStyle: function() {
      return {
        height: this.fixedBottomHeight + 'px'
      }
    },
    isSkeletonLoading: function() {
      return this.loadingType === 'skeleton' && this.skeletonLoading
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
      // 计算底部
      this.calcFixedBottom()

      // 调用子级的opened
      this.childrenOpened()
      if (this.loading && this.loadingAutoClose) {
        this.closeLoading()
      }
      this.broadcast('TcButton', 'tcDialogOpened')
    },
    open() {
      // loading且不是第一次打开，第一次打开loading，会在后面
      if (this.loading) {
        this.startLoading()
      }
      this.childrenOpen()
    },
    closed() {
      // 调用子级的closed
      this.childrenClosed()
    },
    close() {
      this.childrenClose()
    },
    childrenOpened() {
      const openedCall = this.getChildrenMethod('opened')
      if (openedCall === null) {
        return
      }
      if (this.loading) {
        openedCall(this.isFirstOpen, this.loadingInstance)
      } else {
        openedCall(this.isFirstOpen)
      }
      this.isFirstOpen = false
    },
    childrenOpen() {
      const openCall = this.getChildrenMethod('open')
      if (openCall === null) {
        return
      }
      openCall()
    },
    childrenClosed() {
      const closedCall = this.getChildrenMethod('closed')
      if (closedCall === null) {
        return
      }
      closedCall()
    },
    childrenClose() {
      const closeCall = this.getChildrenMethod('close')
      if (closeCall === null) {
        return
      }
      closeCall()
    },
    startLoading() {
      if (this.loadingType === 'loading') {
        const option = this.loadingOption || {
          lock: true,
          text: this.loadingText,
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        }
        this.loadingInstance = this.$loading(option)
      } else if (this.loadingType === 'skeleton') {
        this.skeletonLoading = true
      }
    },
    closeLoading() {
      if (this.loadingType === 'loading') {
        this.loadingInstance.close()
      } else if (this.loadingType === 'skeleton') {
        this.skeletonLoading = false
      }
    },
    calcFixedBottom() {
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
    },
    dialogBeforeClose(done) {
      // 先向下找到eldialog，在找到子级即可
      const beforeCloseCall = this.getChildrenMethod('beforeClose')
      if (beforeCloseCall === null) {
        done(true)
        return
      }
      const result = beforeCloseCall()
      if (result === false) {
        done(false)
        return
      }
      done(true)
    },
    getChildrenMethod(methodName) {
      const dialogChildren = this.$refs.elDialog.$children
      if (dialogChildren === null || dialogChildren.length <= 0) {
        return null
      }

      const methodNameCall = dialogChildren[0][methodName]
      if (methodNameCall === undefined) {
        return null
      }
      return methodNameCall
    }
  }
}
</script>
