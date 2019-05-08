<template>
  <div>
    <!-- eslint-disable -->
    <el-dialog ref="elDialog" v-el-drag-dialog v-bind="$attrs" @opened="opened" :width="width" :visible.sync="isShow" :close-on-click-modal="false" :close-on-press-escape="false" :content-height="currentHeight+'px'" :top="marginTop" custom-class="tc-dialog-base" v-on="$listeners">
      <div slot="title" class="tc-dialog-title">
        <i :class="icon" />
        <slot name="title">{{ title }}</slot>
      </div>
      <div :style="dialogHeight" class="tc-dialog-body-container">
        <slot></slot>
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
    showDialog: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: '50%' },
    height: { type: Number | String, required: false, default: -1 }
  },
  data() {
    return {
      isShow: this.showDialog,
      titleHeight: 40,
      dialogHeight: '',
      marginTop: '',
      currentHeight: 0,
      fixedButtomHeight: 0
    }
  },
  computed: {
    fixedButtonStyle: function() {
      return {
        height: this.fixedButtomHeight + 'px'
      }
    }
  },
  watch: {
    isShow(val) {
      this.$emit('update:showDialog', val)
    },
    showDialog(val) {
      this.isShow = val
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
      var tcFixedButtom = findComponentDownward(this.$refs.elDialog, 'TcFixedButtom')
      this.fixedButtomHeight = tcFixedButtom.$el.offsetHeight
      this.calcDialogHeight()
    },
    calcDialogHeight() {
      this.dialogHeight = 'height:' + (this.currentHeight - this.titleHeight - this.fixedButtomHeight) + 'px'
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

<style lang="scss">
.tc-dialog-base {
  .el-dialog__header {
    padding: 10px 10px;
    background-color: #5e656a;
    .el-dialog__title,
    .tc-dialog-title {
      color: #fff;
      font-size: 16px;
      font-weight: 800;
    }
  }

  .el-dialog__headerbtn {
    top: 8px;
    right: 10px;
    font-size: 20px;
  }

  .el-dialog__body{
    padding: 0px;
  }

  .tc-dialog-body-container {
    overflow: auto;
  }
  .tc-dialog-body-container .app-container{
    padding: 0px !important;
  }
  .el-dialog__close.el-icon.el-icon-close{
    color:#fff;
  }
}
.el-dialog__wrapper{
  overflow: hidden;
  // top: 0%;
  // bottom:10%;
}
.el-dialog .el-dialog__header{
  height: 20px;
  line-height: inherit;
}
</style>
