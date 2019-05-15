## EditTreeTable
树形表格，可以以树形结构展示数据的表格
##### 继承关系
```
TcEditTreeTable > TcEditTable > TcTable > ElTable
```

### 基础树形表格
:::demo
```html
<tc-edit-tree-table :columns="columns" :data="tableData" row-key="name"/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200', align: 'left', editable: true},
        {name:'title',text:'标题',width:'200', editable: true},
        {name:'address',text:'地址', editable: true}],
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

### 选中基础树形表格
:::demo
```html
<tc-edit-tree-table :columns="columns" :data="tableData" row-key="name" editmode="multi" selection/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200', align: 'left', editable: true},
        {name:'title',text:'标题',width:'200', editable: true},
        {name:'address',text:'地址', editable: true}],
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

### 选中基础树形表格无限加载
:::demo
```html
<tc-edit-tree-table :columns="columns" :data="tableData" row-key="name" selection lazy :load="load" />

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200', align: 'left', editable: true},
        {name:'title',text:'标题',width:'200', editable: true},
        {name:'address',text:'地址', editable: true}],
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
        console.log('loading', treeNode)
        resolve([
         {
          title: '配置管理1',
          name: 'setting1' + (treeNode.level === undefined ? '1' : treeNode.level),
          address: '/admin/setting1',
          hasChildren: true
        }])
      }
    }
  }
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
