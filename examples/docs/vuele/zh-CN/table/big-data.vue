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
    <div>
      <h2>fast-table</h2>
      <tc-button @click="fastTableAdd(100)">加载100条</tc-button>
      <tc-button @click="fastTableAdd(1000)">加载1000条</tc-button>
      <tc-button @click="fastTableAdd(2000)">加载2000条</tc-button>
      <tc-button @click="fastTableAdd(5000)">加载5000条</tc-button>
      <tc-fast-table :columns="fastTable.columns" :data="fastTable.data" height="300">
      </tc-fast-table>
    </div>
    <div>
      <h2>pl-table</h2>
      <tc-button @click="plTableAdd(100)">加载100条</tc-button>
      <tc-button @click="plTableAdd(1000)">加载1000条</tc-button>
      <tc-button @click="plTableAdd(2000)">加载2000条</tc-button>
      <tc-button @click="plTableAdd(5000)">加载5000条</tc-button>
      <!-- <pl-table :datas="plTable.data" height="300"
              big-data-checkbox
              fixed-columns-roll
              use-virtual
              :row-height="50">
        <template slot="empty">
        没有查询到符合条件的记录
        </template>
        <pl-table-column type="selection" width="55"/>
        <pl-table-column type="index" width="100" fixed/>
        <pl-table-column
              v-for="item in plTable.columns"
              :key="item.id"
              :resizable="item.resizable"
              :show-overflow-tooltip="item.showOverflowTooltip"
              :prop="item.prop"
              :label="item.label"
              :fixed="item.fixed"
              :width="item.width"/>
      </pl-table> -->
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
      },
      fastTable: {
        data: [],
        columns: [{name: 'a1', text: 'a1', width: 200, fixed: true},
          {name: 'a2', text: 'a2', width: 200, fixed: true},
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
      },
      plTable: {
        data: [],
        columns: [{prop: 'a1', label: 'a1', width: 200},
          {prop: 'a2', label: 'a2', width: 200},
          {prop: 'a3', label: 'a3', width: 200},
          {prop: 'a4', label: 'a4', width: 200},
          {prop: 'a5', label: 'a5', width: 200},
          {prop: 'a6', label: 'a6', width: 200},
          {prop: 'a7', label: 'a7', width: 200},
          {prop: 'a8', label: 'a8', width: 200},
          {prop: 'a9', label: 'a9', width: 200},
          {prop: 'a10', label: 'a10', width: 200},
          {prop: 'a11', label: 'a11', width: 200},
          {prop: 'a12', label: 'a12', width: 200},
          {prop: 'a13', label: 'a13', width: 200},
          {prop: 'a14', label: 'a14', width: 200},
          {prop: 'a15', label: 'a15', width: 200},
          {prop: 'a16', label: 'a16', width: 200}]
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
    },
    fastTableAdd(rows) {
      var data = []
      for (var i = 0; i < rows;i++) {
        var row = {}
        for (var j = 1; j < 17;j++) {
          row['a' + j] = 'value' + i + '-' + j
        }
        data.push(row)
      }
      console.log(data, 'data')
      this.fastTable.data = data
    },
    plTableAdd(rows) {
      var data = []
      for (var i = 0; i < rows;i++) {
        var row = {id: i}
        for (var j = 1; j < 17;j++) {
          row['a' + j] = 'value' + i + '-' + j
        }
        data.push(row)
      }
      console.log(data, 'data')
      this.plTable.data = data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>