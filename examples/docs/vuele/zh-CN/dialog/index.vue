<template>
  <div>
    <div>
      <tc-button @click="openDialog">基础用法</tc-button>
      <tc-button @click="openDialog1">引用组件</tc-button>
      <tc-button @click="openDialog2">组件内固定底部</tc-button>
    </div>
    <div>
      <tc-dialog :show-dialog.sync="showDialog" title="基础用法" width="400px" height="300px">
        test
      </tc-dialog>
      <tc-dialog :show-dialog.sync="showDialog1" title="引用组件" width="400px" height="300px">
        <test-index />
      </tc-dialog>
      <tc-dialog :show-dialog.sync="showDialog2" title="组件内固定底部" width="400px" height="300px">
        <fixed-buttom />
      </tc-dialog>
    </div>
  </div>
</template>

<script>
import testIndex from './testIndex'
import fixedButtom from './fixedButtom'
export default {
  components: { testIndex, fixedButtom },
  data() {
    return {
      showDialog: false,
      showDialog1: false,
      showDialog2: false
    }
  },
  methods: {
    openDialog() {
      this.showDialog = true
    },
    openDialog1() {
      this.showDialog1 = true
    },
    openDialog2() {
      this.showDialog2 = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>