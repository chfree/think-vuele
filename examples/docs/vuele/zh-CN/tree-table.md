## TreeTable
树形表格，可以以树形结构展示数据的表格

### 基础表格
:::demo
```html
<tc-tree-table :columns="columns" :data="tableData" row-key="name"/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200', align: 'left'},
        {name:'title',text:'标题',width:'200'},
        {name:'address',text:'地址'}],
        tableData: [{
          title: '系统管理',
          name: 'system',
          address: '/admin/system'
        }, {
          title: '配置管理',
          name: 'setting',
          address: '/admin/setting',
          children: [{
            title: '用户管理',
            name: 'user',
            address: '/admin/system/user'
          }]
        }]
      }
    }
  }
</script>
```
:::

### 选中基础表格
:::demo
```html
<tc-tree-table :columns="columns" :data="tableData" row-key="name" selection/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200', align: 'left'},
        {name:'title',text:'标题',width:'200'},
        {name:'address',text:'地址'}],
        tableData: [{
          title: '系统管理',
          name: 'system',
          address: '/admin/system'
        }, {
          title: '配置管理',
          name: 'setting',
          address: '/admin/setting',
          children: [{
            title: '用户管理',
            name: 'user',
            address: '/admin/system/user'
          }]
        }]
      }
    }
  }
</script>
```
:::

### 选中基础表格
:::demo
```html
<tc-tree-table :columns="columns" :data="tableData" row-key="name" selection lazy :load="load" />

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200', align: 'left'},
        {name:'title',text:'标题',width:'200'},
        {name:'address',text:'地址'}],
        tableData: [{
          title: '系统管理',
          name: 'system',
          address: '/admin/system',
          children: [{
            title: '用户管理',
            name: 'user',
            address: '/admin/system/user'
          }]
        }, {
          title: '配置管理',
          name: 'setting',
          address: '/admin/setting',
          hasChildren: true
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        console.log('loading')
        resolve([
         {
          title: '配置管理1',
          name: 'setting1',
          address: '/admin/setting1',
        }])
      }
    }
  }
</script>
```
:::