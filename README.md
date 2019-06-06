# think-vuele

> vue+element进行优化封装的组件库，主要对标bootstrap的大集合UI框架limitless
> 框架结构按element源码结构进行改造

[![License](https://img.shields.io/npm/l/tennetcn-ui.svg)](https://www.npmjs.com/package/tennetcn-ui)
[![Week Downloads](https://img.shields.io/npm/dw/tennetcn-ui.svg)](https://www.npmjs.com/package/tennetcn-ui)
[![Version](https://img.shields.io/npm/v/tennetcn-ui.svg)](https://github.com/chfree/think-vuele)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8089
npm run demo

# build for production with minification
npm run dist
```

### github
[https://github.com/chfree/think-vuele](https://github.com/chfree/think-vuele)

### Keywords
vue,element,vuele,ui,tennetcn-ui

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i tennetcn-ui -S
```
如果安装了`tennetcn-ui`则自动依赖`element-ui`

`main.js`

```
import 'element-ui/lib/theme-chalk/index.css'
import 'tennetcn-ui/lib/styles/index.css'
import TennetcnUI from 'tennetcn-ui'

Vue.use(TennetcnUI)
```


### Demo
[http://vuele.tennetcn.cn](http://vuele.tennetcn.cn)
