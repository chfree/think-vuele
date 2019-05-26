## Block容器

通过Block容器进行页面的分区域布局

### 无title模式
:::demo
```html
<tc-block style="height:100px;">
test
</tc-block>

<tc-block style="padding: 5px;">
<div style="height:120px;background-color:#eee;"></div>
</tc-block>
```
:::

### title模式
:::demo
```html
<tc-block title="我是一个block" style="height:100px;">
test
</tc-block>
```
:::

### 自定义title模式
:::demo
```html
<tc-block style="height:100px;">
  <div slot="title" style="color:red;">我是自定义title</div>
  <div style="font-size:18px;">test</div>
</tc-block>
```
:::

### 阴影模式
:::demo
```html
<el-row :gutter="12">
  <el-col :span="8">
    <tc-block style="height:100px;">
    test
    </tc-block>
  </el-col>
  <el-col :span="8">
    <tc-block shadow="hover" style="height:100px;">
    test
    </tc-block>
  </el-col>
  <el-col :span="8">
    <tc-block shadow="never" style="height:100px;">
    test
    </tc-block>
  </el-col>
</el-row>
```
:::

### Slots
| name | 说明 |
|------|--------|
| default | 默认标签正文内容 |
| title | 标题栏 |

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title   | 标题文本   | String | — | — |
| shadow   | 标题文本   | String | `always`, `hover`, `never` | `always` |
