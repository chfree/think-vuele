<template>
  <div :style="footbarStyle" class="form-footbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TcFormFootbar',
  props: {
  },
  data: () => ({
    footbarHeight: 0,
    throttleExtId: null,
    footbarStyle: {},
    dialogWrapper: null
  }),
  computed: {
  },
  mounted() {
    this.dialogWrapper = this.$tcUtil.getVueComponent(this, 'el-dialog')
    this.calcFootbarHeight()
  },
  methods: {
    calcFootbarHeight() {
      this.footbarHeight = this.dialogWrapper.$attrs['footbar-height']

      this.footbarStyle = {
        height: this.footbarHeight,
        lineHeight: this.footbarHeight
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form-footbar{
  background-color: #eee;
}
</style>
