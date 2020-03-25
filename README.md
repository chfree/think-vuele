# think-vuele

> 基于`Vue`和`ElementUI`框架进行整合二次开发的一个框架.提供一些`elementUI`没有的或当时没有的控件.优化了或简化了便于2B软件开发的一些控件
> 框架结构按element源码结构进行改造

> `element-ui`的控件库是`el`+控件名的方式进行使用。`tennetcn-ui`是以`tc`开头使用的控件库，如果你想用回`el`，只需前缀将`tc`改为`el`即可，只是`tc`提供的扩展属性和方法回调就不起作用了。

[![License](https://img.shields.io/npm/l/tennetcn-ui.svg)](https://www.npmjs.com/package/tennetcn-ui)
[![Week Downloads](https://img.shields.io/npm/dw/tennetcn-ui.svg)](https://www.npmjs.com/package/tennetcn-ui)
[![Version](https://img.shields.io/npm/v/tennetcn-ui.svg)](https://github.com/chfree/think-vuele)

## Build Setup

``` bash
# 安装依赖
npm install

# 运行demo示例工程 localhost:8089
npm run demo

# 编译打包结果文件
npm run dist

# 生成demo文件的示例工程
npm run build
```

## github及示例
github：[https://github.com/chfree/think-vuele](https://github.com/chfree/think-vuele)

demo：[http://vuele.tennetcn.com](http://vuele.tennetcn.com)


## Keywords
vue,element,vuele,ui,tennetcn-ui

## npm 安装
```shell
npm i tennetcn-ui -S
```
如果安装了`tennetcn-ui`则自动依赖`element-ui`


## 引用
你可以像`Element-UI`样整个 `Tennetcn-UI`引入，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 `Tennetcn-UI`。

完整引入

```js
import Vue from 'vue';
import TennetcnUI from 'tennetcn-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(TennetcnUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 新提供的控件
相对于`element-ui`多加的控件，有些也不是自己完全手写，大部分来自于`github`,进行了统一的封装调用，与`element-ui`的控件进行交互融合，且样式上尽量与`element-ui`保持一致。

### Block
一个容器块控件，将一个页面的里面特定功能的区域进行分组显示。提供最大化、最小化、全屏显示的基础特性

### More
折叠容器，项目中对更多信息展示时，可以用到。本质是对el-collapse的一个简单改造。

### Icon
`elementui`已经提供了图标组件，此处完全是将另外的字体图标库`font-awesome`、`remixicon`给放在此处供参考使用，不做强制依赖。

### InputMoney
源码来自于`github`,[`kevinongko/vue-numeric`](https://github.com/kevinongko/vue-numeric)在此像大神`kevinongko`致以谢意。

此控件作者使用的是标准的`input`，我改成了`tc-input`，也就是`tc`支持的和`el`支持的，`inputMoney`都支持，比如典型的`tc-form`中进行`disabled`的时候，表单中的控件全部进行disabled

此控件的功能是，输入的金额是科学计数金额，可以带金额符号，可以自定义几位分隔符，但v-model的值，就是普通的数字。当然`kevinongko`大神本身就提供了很多控制特性，结合`elementui`就更厉害了。

### InputPhone
手机号规则验证，基础的只是正则宽松验证中国的手机号，还要一种是提供全球的验证。也来源一个github的开源验证库[`catamphetamine/libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js).基于这个开源验证库有一个很炫酷的示例demo[`LouisMazel/vue-phone-number-input`](https://louismazel.github.io/vue-phone-number-input/).

此控件的具体使用规则见示例文档

### InputTag
这个控件`element-ui`一直没有提供很好的官方控件，翻遍`github`后找到一款比较合适的，最开始的想法是直接依赖，然后进行标签封装，后面遇到各种bug无法解决，索性拉下来源码进行，进行自己修改，且与`element-ui`进行融合。相信我，你使用起来绝对满意。

此控件在此感谢`JohMun`大神的[`JohMun/vue-tags-input`](https://github.com/JohMun/vue-tags-input)开源奉献。

### AceEditor
一个在线的代码编辑器功能，支持的语言还挺多，对于`vue`版本网上有很多封装支持。这个是单独自己的，提供了一些简便操作，且与`element`的`form`进行了融合。不做强制依赖，属于`dev`引入。

### CodeDisplay
有了`AceEditor`对于`html`、`css`、`js`如果不能实时显示结果，那也挺不好玩的，所以做了一个实时显示代码的功能。感谢`iview`作者大佬在掘金小册贡献的代码。

### Loading
网上看到了一个`loading`效果的纯`css3`特效，不能放过啊，直接改成了`vue`标签使用，提供了相关参数。

### LetterAvatar
avatar在el的某个版本才提供，此控件也是参照了github源码[`eliep/vue-avatar`](https://github.com/eliep/vue-avatar)

### Clamp
文本截断，当某个文本控件显示的内容过多就不太友好了，当前用样式可以控制，显示成...之类的。但总要有点追求，让用户体验更好。

此控件参考了`github`上的大神`Justineo`的代码库[`Justineo/vue-clamp`](https://github.com/Justineo/vue-clamp)

与`el`的`tip`提示融合，扩展了`tip`提示；优化了收起展开的功能。可以试用一下，你肯定会喜欢。

### Skeleton
骨架屏，一般在移动端用的多一点，且很多骨架屏的文章都是智能骨架屏，根据内容区域自动计算`loading`区域。我这个比较简单，且是来自于`github`上大神`michalsnik`的[`michalsnik/vue-content-placeholders`](https://github.com/michalsnik/vue-content-placeholders)

进行了重新封装，提供了`2B`软件特有的`field`区域封装；且与`dialog`进行集成。

## 优化的相关控件
`element-ui`已经做的很好了，提供了非常便捷的属性和事件，但是对于2B软件来说，对于一个控件重复的赋相同的值，当领导突然说要统一改改的时候，就不好了，所以此优化并不是`element-ui`做得不好，而是有针对性的进行优化，便于统一调用。

### Button
这个组件真是没有什么可优化的。但这个我只做了一小步，但这很重要，特别是在做`e2e`的测试的时候；比如我们使用cypress进行`e2e`测试，界面上一堆按钮，我们开发的时候，很少说会特意给按钮取一个名字或id，这时候，你就没法区分按钮叫什么，如果你用了这个优化过的按钮，就会多一个固定属性
```html
<tc-button @click="add" />
// 结果 html
<button vevent="bound_add" ... />
```
具体实现可以看看源码的`vevent-mixin.js`的实现

### Select
每次用觉得很繁琐，每次都要进行`v-for`的`option`循环。我给`select`加了一个`provider`属性。只用定义好标准的数据源格式，然后绑定到`select`标签上即可，至于选择判断，那是`v-model`双向绑定的事情。
```json
[{"id":"","text":"","value":""}]
```

### RadioGroup
与`select`一样，自己循环数据源太麻烦，只需要定义一个数据源属性即可。数据源格式与`select`一致。

### CheckboxGroup
同`radioGroup`

### Input
非常常见，与`button`一样，在`e2e`的测试上，我们很少会给控件取名，但基本都会给`v-model`属性
```html
<tc-input v-model="user.name" />
// 结果html
<input vname="user_name" ... />
```
具体实现参见源码`vname-mixin.js`混入

`input`控件另外还扩展了正则的支持，说支持是多余，js对正则本身就支持，但是我们要写一大堆的校验取值什么的吧？此控件对此进行了统一简化，且提供了常用的正则表达式类型输入，比如正整数、自然数等。你只用传入支持的正则类型或正则，会自动过滤掉输入的非法内容。具体请前往示例文档体验。

### InputNumber
数字输入框提供了`+-操作符`，多支持了`vname-mixin`混入，支持了`input`的正则和正则类型参数

### Form
此控件没什么好优化的，纯属臆想下的无聊之作，不知是否有真实的业务场景。

在设计表单的时候，我们会把新增、编辑、查看放一个页面，用参数控制只读，然后底下一个保存一个关闭，当查看的时候，直接把`form`的`disabled`设置为`true`即可，但关闭按钮不应该禁用对吧。此时只要在对应的`button`上加一个`forceEnabled`属性来控制强制启用就行.

### DatePicker
日期控件，对于日期范围的控制，比如开始时间不能大于结束时间这种，官方提供的那种选择模式不太好像，就提供了此想法。遗憾的是如此简易的用法，遇到一些数据刷新上的问题，暂未解决。
```html
<tc-form>
  <tc-form-item label="开始时间">
    <tc-date-picker v-model="date1" less-than="date2" />
  </tc-form-item>
  <tc-form-item label="结束时间">
    <tc-date-picker v-model="date2" greater-than="date1" />
  </tc-form-item>
</tc-form>
```

### Table
使用频率非常之高了，对于大数据量的加载网上评论说`el`的不是太理想，我这个也是基于`el`的，我的优化点不在于大数据量的优化。主要有以下几点
- `json`定义列
- 第一列序号参数化
- `checkbox`参数控制
- 单选多选参数控制
- 选择和选中同步控制
- 提供获取选中值的方法暴露

### TreeTable
最初`elementui`是没有表格树，我的实现是另外一个思路，后续`el`提供了后，就在后续版本沿用了`el`的，只是重新定义了名字。但支持上面`Table`的扩展点。

### EditTable
由`Table`扩展而来，提供可以直接在表格内进行数据编辑的功能。网上可编辑的表格，有两种模式，一是点击行，则编辑行。一是直接全表格可编辑。我的实现两种模式可参数控制。

表格的编辑类型支持`input`\\`select`\\`date`

### EditTreeTable
可以编辑的表格树控件，`TreeTable`和`EditTable`结合而来。

### Pager
`el`官方提供的分页插件，名字太长了，比较难记，我就简化了。且优化了传入参数，只需要一个`pager`对象即可.

另外对回调函数进行了改造，多了一个`pager-change`，当`pageIndex`和`pageSize`发生变化时触发，不然代码里面都是一个分页组件两次监听，因为我们大多数时候监听就是直接调用后端方法，至于是`index`变化还是`size`变化我们很少关心.
```json
{
  "pageIndex": 1,
  "pageSize": 20,
  "totalCount": 100
}
```

### MessageBox
`el`官方弄一个弹窗提示，传入参数太多，进行了简化


### Dialog
2B软件用弹窗的应该还是很多的吧，当然有的做法是开tab页。有一次一个同事说`tab`页的做法是对用户体验的不尊重，一个系统，如果要在`Atab`页查看数据，在到`Btab`页进行后续操作，那是否是用户体验没有设计好了？当然这个还是看软件决策者怎么决定。

对于dialog的优化如下：
- 优化了`title`，看上去更像一个窗口
- 提供了`open`到`opened`的`loading`支持
- 提供了`open`到`opened`的`skeleton`骨架屏的支持
- 宽高百分比的支持
- `dialog`底部固定条支持
- 提供了更多的钩子函数比如`open`、`opened`、`close`、`closed`、`beforeClose`等

## 工具组件
### 常用工具包
非常基础的工具包，当前你也可以选择其他优化的开源工具组件包，这里面只是内置的常用的。
```js
import { xxx } from 'tennetcn-ui/lib/utils'
```

### 随机数
```js
import { random } from 'tennetcn-ui/lib/utils'
```
提供多种样式的随机数，范围、大小、浮点等，总有满足你的随机需求。

### 正则
常用正则提供，以及简便方式调用。