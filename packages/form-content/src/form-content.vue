<template>
  <div :style="contentHeight" class="form-content" form-content>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TcFormContent',
  props: {
  },
  data: () => ({
    height: 0,
    dialogWrapper: null,
    contentHeight: '',
    throttleExtId: null
  }),
  computed: {
  },
  created  () {
    this.dialogWrapper = this.$tcUtil.getVueComponent(this, 'el-dialog')
    this.height = this.dialogWrapper.$attrs['content-height']
    this.calcContentHeight()
  },
  methods: {
    calcContentHeight() {
      this.contentHeight = 'height:' + this.height + (this.height.indexOf('px') > 0 ? '' : 'px')
    }
  }
}
</script>

<style scoped lang="scss">
.form-content{
  overflow: auto;
  padding: 5px;
}
</style>
