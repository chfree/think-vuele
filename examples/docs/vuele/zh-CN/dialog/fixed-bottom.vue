<template>
  <div style="">
    {{formModel.name}}
    <tc-form label-width="80px" size="mini" style="padding:10px;">
      <tc-form-item label="活动名称-tag">
        <tc-input-tag v-model="formModel.name"></tc-input-tag>
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
    <tc-fixed-bottom>
      <tc-button type="primary" size="mini">立即创建</tc-button>
      <tc-button size="mini" @click="$parent.hide()">取消1</tc-button>
    </tc-fixed-bottom>
    <tc-dialog ref="childDialog" :visible.sync="showDialog1" append-to-body title="组件内固定底部-child" width="450px" height="350px">
      <fixed-bottom-child />
    </tc-dialog>
  </div>
</template>

<script>
import fixedBottomChild from './fixed-bottom-child'
export default {
  components: { fixedBottomChild },
  props: {
    model: { type: Object, default: null }
  },
  data() {
    return {
      form: {
        name: ''
      },
      showDialog1: false,
      formModel: {}
    }
  },
  created() {
  },
  mounted() {
    this.formModel = Object.assign({}, this.model)
  },
  methods: {
    openSearch() {
      this.showDialog1 = true
    },
    cancel() {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>