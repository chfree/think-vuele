## 快速上手

本节将介绍如何在项目中使用 Tennetcn-UI

### 引入 Tennetcn-UI

你可以引入整个 Tennetcn-UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Tennetcn-UI。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
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

以上代码便完成了 Tennetcn-UI 的引入。需要注意的是，样式文件需要单独引入。此处没有单独抽取封装样式，直接使用`element ui`的样式即可