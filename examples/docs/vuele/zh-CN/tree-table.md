## TreeTable
树形表格，可以以树形结构展示数据的表格

### 基础表格
:::demo
```html
<tc-tree-table :columns="columns" :data="tableData"/>

<script>
  export default {
    data() {
      return {
        columns:[{name:'name',text:'名称',width:'200'},
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