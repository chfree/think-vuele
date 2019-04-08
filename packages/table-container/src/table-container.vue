<template>
  <div class="tc-table-container">
    <div class="tc-table-base">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcTableContainer',
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.tc-table-base {
  .el-table__empty-block {
    min-height: 35px;
  }
  td {
    padding: 6px 0px !important;
  }
  thead{
    th{
      background-color: #E4E7ED;
      color: #303133;
      padding: 5px 0px !important;
    }
  }
}
.tc-table-container {
  margin-top: 10px;
}
</style>
