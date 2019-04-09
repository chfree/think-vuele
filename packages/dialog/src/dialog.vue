<template>
  <div>
    <!-- eslint-disable -->
    <el-dialog v-el-drag-dialog v-bind="$attrs" @opened="opened" :width="width" :visible.sync="isShow" :close-on-click-modal="false" :close-on-press-escape="false" :content-height="currentHeight+'px'" :footbar-height="footbarHeight+'px'" :top="marginTop" custom-class="tc-dialog-base" v-on="$listeners">
      <div slot="title" class="tc-dialog-title">
        <i :class="icon" />
        <slot name="title">{{ title }}</slot>
      </div>
      <div :style="dialogHeight" class="tc-dialog-body-container">
        <slot></slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from 'main/directives/el-dragDialog' // base on element-ui
export default {
  name: 'TcDialog',
  directives: { elDragDialog },
  props: {
    title: { type: String, required: false, default: '弹出窗' },
    icon: { type: String, required: false, default: 'el-icon-time' },
    showDialog: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: '50%' },
    height: { type: Number | String, required: false, default: -1 }
  },
  data () {
    return {
      isShow: this.showDialog,
      footbarHeight: 50,
      titleHeight: 40,
      throttleExtId: null,
      dialogHeight: '',
      marginTop: '',
      currentHeight: 0
    }
  },
  computed: {
  },
  watch: {
    isShow (val) {
      this.$emit('update:showDialog', val)
    },
    showDialog (val) {
      this.isShow = val
    }
  },
  mounted () {
    this.$tcUtil.addResizeCall(this.calcRender)
    this.calcRender()
  },
  destroyed () {
    this.$tcUtil.clearResizeCallAll()
  },
  methods: {
    calcRender () {
      this.calcHeight()
      this.calcDialogHeight()
      this.calcMarginTop()
    },
    opened () {
      this.getChildVueComponentAttr(this, 'opened')
      this.$emit('opened')
    },
    calcDialogHeight () {
      this.dialogHeight = 'height:' + (this.currentHeight + this.footbarHeight) + 'px'
    },
    calcMarginTop () {
      this.marginTop = (window.innerHeight - this.titleHeight - this.currentHeight - this.footbarHeight) / 2 + 'px'
    },
    calcHeight () {
      this.currentHeight = 0
      if (this.height.indexOf('%') > 0) {
        this.currentHeight = window.innerHeight * parseFloat(this.height) / 100
      } else {
        this.currentHeight = Number.parseInt(this.height)
      }
      var formContent = this.findComponentDownward(this, 'TcFormContent')
      if (formContent != null) {
        formContent.height = this.currentHeight + 'px'
        formContent.calcContentHeight()
      }
    },
    // 由一个组件，向下找到最近的指定组件
    findComponentDownward (context, componentName) {
      const childrens = context.$children
      let children = null

      if (childrens.length) {
        for (var i = 0; i < childrens.length; i++) {
          var child = childrens[i]
          const name = child.$options.name
          if (name === componentName) {
            children = child
            break
          } else {
            children = this.findComponentDownward(child, componentName)
            if (children) break
          }
        }
      }
      return children
    },

    getChildVueComponentAttr (vm, attr) {
      if (vm == null || attr == null || attr === '') {
        return null
      }
      if (vm.$attrs.hasOwnProperty(attr)) {
        var fn = vm.$attrs[attr]
        if (fn === '') {
          fn = attr
        }
        vm[fn]()
        return vm
      }
      if (vm.$children == null || vm.$children === undefined) {
        return null
      }
      vm.$children.forEach(item => {
        return this.getChildVueComponentAttr(item, attr)
      })
    }
  }
}
</script>

<style lang="scss">
.tc-dialog-base {
  .el-dialog__header {
    padding: 10px 10px;
  }

  .el-dialog__header {
    background-color: #1379d2;
    .el-dialog__title,
    .tc-dialog-title {
      color: #fff;
      font-size: 16px;
      font-weight: 800;
    }
  }

  .el-dialog__headerbtn {
    top: 6px;
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
  height: 38px;
  line-height: inherit;
}
</style>
