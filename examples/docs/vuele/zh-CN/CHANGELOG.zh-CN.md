## 更新日志

### 0.0.78

*2020-10-18*

- 描述
  - tc-dialog去掉了默认图标
  - 解决tc-table重新加载数据后,选择项还高亮的问题

### 0.0.77

*2020-10-18*

- 描述
  - tc-table 加入了国际化的支持（vue-i18n）
  - tc-table 进行了el-table-column的属性传递定义
  - tc-tree-table 修正了clamp的使用

### 0.0.75

*2020-09-16*

- 描述
  - tc-table 支持cloumn进行自定义截断 clamp

### 0.0.73

*2020-08-13*

- 描述
  - 处理了引入vue-moment和自定义$moment的冲突问题

### 0.0.70

*2020-05-06*
*2020-06-07*

#### 优化
- 描述
  - input-phone去了libphonenumber的支持，需要单独引入实现
  - 修复了dialog中的同名缺陷问题

#### 新功能
  - 添加了大数量表格及示例



### 0.0.68

*2020-03-24*

#### 优化
- 描述
  - dialog对钩子函数提供了参数传入指定的名称
  - 更新了readme文档


### 0.0.67

*2020-03-18*

#### 修复bug
- 描述
  - 修复了正则表达对于小数时没有对.进行转义的错误

#### 优化
- 描述
  - 优化了在可以输入小数的情况，最后输入的.的时候，进行了补0的优化

### 0.0.64

*2020-02-03*

#### 添加新控件
- 描述
  - 添加了skeleton骨架屏控件
  - dialog支持skeleton和cssloading
  

### 0.0.63

*2020-01-07*

#### 添加新控件
- 描述
  - 添加了内容折叠控件-tc-more

### 0.0.62

*2019-12-31*

#### 添加新控件
- 描述
  - 添加了文本截断控件-tc-clamp

### 0.0.57

*2019-11-22*

#### 控件更新
- 描述
  - 升级了element-ui到2.12.0


### 0.0.55

#### 控件更新
- 描述
  - tc-block加入了最小化和最大化的支持

### 0.0.51

#### 样式更新
- 描述
  - think加入了禁用按钮的样式
  - 去掉了xgplayer的强制引入
  - 去掉了hot-table的强制引入

### 0.0.50

*2019-09-06*

#### 新的工具类
- 描述
  - 新增了随机相关的工具函数
  - 加入了更多的is判断函数
  - 加入了focus描述
  - 加入了regular的工具类

#### 修改bug
- 描述
  - table在currentchange的时候currentrow有null的可能
  - 按钮渲染type的时候，取nativeType
  - raido-button/radio-group传值可以兼容number
  - table判断hidden改为了0为否，1位是
  - hot-table修复了默认值的方式，提供了新的默认值
  - hot-table提供了实例访问属性

### 0.0.42

*2019-08-16*

#### 控件新特性
- 描述
  - tree-table 提供了getCurrentRow方法
  - tree-table 提供了getSelection方法
  
### 0.0.39

*2019-08-03*

#### 控件新特性
- 描述
  - form 在表单级别进行禁用的时候，可以控制表单中的按钮不随表单的禁用而禁用

### 0.0.36

*2019-07-27*

#### 控件新特性
- 描述
  - edit-table可编辑加入了type:checkbox

### 0.0.35

*2019-06-23*

#### 控件扩展
- 描述
  - 复制了vue-tags-input源码进行了彻底改造，具体查看[input-tag](/#/vuele/zh-CN/component/input-tag)

### 0.0.34

*2019-06-22*

#### 控件扩展
- 描述
  - tc-table 加入了getCurrentRow方法
  - tc-input-tag 加入了初始化默认值
  - tc-dialog加入了beforeClose\opened\closed的钩子函数
  - tc-dialog加入了open\close的钩子函数
  - tc-dialog加入了loading的控制

#### bug修复
- 描述
  - tc-input-tag 默认值bug修复

### 0.0.23

*2019-06-17*

#### 修复了bug
- 描述
  - 修复了tc-table的选中行的循环调用bug

### 0.0.22

*2019-06-16*

#### 封装了新的组件
- 描述
  - 封装了tc-input-phone
  - 封装了tc-input
  - 封装了tc-input-number

### 0.0.21

*2019-06-12*

#### 封装了新的组件
- 描述
  - 封装了tc-checkbox-group和tc-checkbox-button
  - 封装了tc-input-money控件

### 0.0.20

*2019-06-11*

#### 封装了新的组件
- 描述
  - 封装了tc-radio-group和tc-radio-button

### 0.0.19

*2019-06-10*

#### 扩展相关组件的vname
- 描述
  - 扩展了支持v-model的相关控件添加了扩展属性vname为v-model的表达式

### 0.0.17

*2019-06-09*

#### 更新了组件
- 描述
  - 更新了input-tag的样式

### 0.0.16

*2019-06-06*

#### 更新了组件
- 描述
  - 更新了input-tag的实现依赖

### 0.0.15

*2019-06-04*

#### 添加了新组件
- 描述
  - 添加了新组件letter-avatar

### 0.0.14

*2019-06-04*

#### 更新了依赖包
- 描述
  - 更新了element-ui版本为2.9.1

### 0.0.13

*2019-06-02*

#### 加入了新的控件
- 描述
  - 加入了input-tag

### 0.0.11

*2019-05-31*

#### 压缩scss样式优化
- 描述
  - 对cssmini的样式压缩进行了优化

### 0.0.10

*2019-05-27*

#### 梳理控件的样式名称
- 描述
  - 梳理了控件的样式名称与对应的样式文件

### 0.0.9

*2019-05-26*

#### 修复block
- 描述
  - 修改了block的样式和使用示例

### 0.0.8

*2019-05-26*

#### 修复样式的引入为css
- 描述
  - 通过gulp将样式转换成css，并放置到lib/styles/index.css路径下

### 0.0.7

*2019-05-26*

#### 紧急修复
- 描述
  - 将组件中的样式单独移到了styles/index.scss中，并且去掉多余的组件内样式

### 0.0.6

*2019-05-25*

#### 紧急修复
- 描述
  - 将xg-player的依赖移到了dependencies

### 0.0.5

*2019-05-25*

#### 紧急修复
- 描述
  - 将handsontable的依赖移到了dependencies

### 0.0.4

*2019-05-25*

#### 新功能
- 描述
  - 加入了tc-hot-table
  - 去掉了一些scoped

### 0.0.3

*2019-05-19*

#### 新功能
- 描述
  - 加入了tc-edit-table
  - 加入了tc-tree-table
  - 加入了tc-edit-tree-table
  - 加入了tc-xg-player
  - 加入了icon示例
  - 加入了tc-pager
  - 加入了纯css的loading示例
  - 加入了tc-block
  - 加入了tc-select
  - 加入了tc-dialog
  - 加入了tc-table
  - 加入了message的简化用法

### 0.0.2

*2019-05-04*

#### 优化
- 描述
  - 进行了vuele和element文档版本的共存布局


### 0.0.1

*2019-04-12*

#### 初始化版本
- 描述
  - 进行对element-ui的代码进行改写，加入了自己业务中二次封装的组件

