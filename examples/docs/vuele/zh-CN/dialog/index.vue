<template>
  <div>
    <div>
      <tc-button @click="openDialog">基础用法</tc-button>
      <tc-button @click="openDialog1">引用组件</tc-button>
    </div>
    <div>
      <tc-dialog :show-dialog.sync="showDialog" title="test" width="400px" height="300px">
      test
      </tc-dialog>
    </div>
    <div>
      <tc-dialog :show-dialog.sync="showDialog1" title="test1" width="400px" height="300px">
        <test-index />
      </tc-dialog>
    </div>
  </div>
</template>

<script>
import testIndex from './testIndex'
export default {
  components: { testIndex },
  data() {
    return {
      showDialog: false,
      showDialog1: false
    }
  },
  methods: {
    openDialog() {
      this.showDialog = true
    },
    openDialog1() {
      this.showDialog1 = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>