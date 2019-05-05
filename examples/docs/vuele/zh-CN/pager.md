## Pager
Pager与el-pagination的使用完全一致；

觉得pagination这个名字太长了，所以进行了再次封装，并改写了几个回调

### 基础用法
:::demo
```html
<tc-pager :pager="pager"/>

<script>
export default {
  data() {
    return {
      pager: {
        pageIndex: 1,
        pageSize: 20,
        totalCount: 100
      }
    }
  }
}
</script>
```
:::

#### Columns Attributes

| name | 说明 | 类型            | 可选值  | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| pager | 分页信息 | Object          | - | — |
| layout | 组件布局，子组件名用逗号分隔 | String          | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | `total`, `prev`, `pager`, `next`, `sizes` |
| pageSizes | 每页显示个数选择器的选项设置 | String          | - | 10,30,50,100 |


pager:为一个分页对象，必须为以下结构
```
{
  pageIndex: 1,
  pageSize: 20,
  totalCount: 100
}
```

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| pagerChange | pageIndex和pageSize发生变化时触发 | `pageIndex`,`pageSize` |
| sizeChange | pageSize发生变化时触发 | `pageIndex`,`pageSize` |