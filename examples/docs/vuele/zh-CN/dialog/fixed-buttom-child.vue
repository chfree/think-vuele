<template>
  <div style="">
    <tc-form label-width="80px" size="mini" style="padding:10px;">
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name"></tc-input>
      </tc-form-item>
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name"></tc-input>
      </tc-form-item>
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name"></tc-input>
      </tc-form-item>
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name"></tc-input>
      </tc-form-item>
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name"></tc-input>
      </tc-form-item>
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name">
          <tc-button slot="append" @click="openSearch()" icon="el-icon-search"></tc-button>
        </tc-input>
      </tc-form-item>
    </tc-form>
    <tc-fixed-buttom>
      <tc-button type="primary" size="mini">立即创建</tc-button>
      <tc-button size="mini">取消</tc-button>
    </tc-fixed-buttom>
    <tc-dialog :visible.sync="showDialog1" append-to-body title="组件内固定底部-child-child" width="500px" height="400px">
      <fixed-buttom-child-child />
    </tc-dialog>
  </div>
</template>

<script>
import fixedButtomChildChild from './fixed-buttom-child-child'
export default {
  components: { fixedButtomChildChild },
  data() {
    return {
      form: {
        name: ''
      },
      showDialog1: false
    }
  },
  methods: {
    openSearch() {
      this.showDialog1 = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>