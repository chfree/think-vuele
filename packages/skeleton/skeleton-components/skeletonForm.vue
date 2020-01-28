<template>
  <div style="margin-top:20px;">
    <el-row :gutter="20">
      <el-col :span="12">
        <tc-skeleton-field />
      </el-col>
      <el-col :span="12">
        <tc-skeleton-field />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TcSkeletonForm'
}
</script>

<style lang="scss" scoped>

</style>