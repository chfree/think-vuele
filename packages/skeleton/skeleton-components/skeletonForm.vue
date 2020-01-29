<template>
  <div>
    <el-row v-for="rowIndex in row" :key="rowIndex" :gutter="gutter" style="margin-top:20px;">
      <el-col v-for="columnIndex in column" :key="columnIndex" :span="(24/column)">
        <tc-skeleton-field />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TcSkeletonForm',
  props: {
    row: {
      type: Number,
      default: 4
    },
    column: {
      type: Number,
      default: 2
    },
    gutter: {
      type: Number,
      default: 20
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

</style>