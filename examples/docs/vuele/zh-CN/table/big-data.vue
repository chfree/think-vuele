<template>
  <div>
    <div>
      <h2>el-table</h2>
      <tc-button @click="elTableAdd(100)">加载100条</tc-button>
      <tc-button @click="elTableAdd(1000)">加载1000条</tc-button>
      <tc-button @click="elTableAdd(2000)">加载2000条</tc-button>
      <tc-button @click="elTableAdd(5000)">加载5000条</tc-button>
      <tc-table :columns="elTable.columns" :data="elTable.data" :height="300">
      </tc-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elTable: {
        data: [],
        columns: [{name: 'a1', text: 'a1', width: 200},
          {name: 'a2', text: 'a2', width: 200},
          {name: 'a3', text: 'a3', width: 200},
          {name: 'a4', text: 'a4', width: 200},
          {name: 'a5', text: 'a5', width: 200},
          {name: 'a6', text: 'a6', width: 200},
          {name: 'a7', text: 'a7', width: 200},
          {name: 'a8', text: 'a8', width: 200},
          {name: 'a9', text: 'a9', width: 200},
          {name: 'a10', text: 'a10', width: 200},
          {name: 'a11', text: 'a11', width: 200},
          {name: 'a12', text: 'a12', width: 200},
          {name: 'a13', text: 'a13', width: 200},
          {name: 'a14', text: 'a14', width: 200},
          {name: 'a15', text: 'a15', width: 200},
          {name: 'a16', text: 'a16', width: 200}]
      }
    }
  },
  methods: {
    elTableAdd(rows) {
      var data = []
      for (var i = 0; i < rows;i++) {
        var row = {}
        for (var j = 1; j < 17;j++) {
          row['a' + j] = 'value' + j
        }
        data.push(row)
      }
      this.elTable.data = data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>