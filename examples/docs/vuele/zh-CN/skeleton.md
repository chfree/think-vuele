## Skeleton

骨架屏,进行vue-content-placeholders基础组件的封装调用

基础组件来自：[https://github.com/michalsnik/vue-content-placeholders](https://github.com/michalsnik/vue-content-placeholders)

:::demo
```html
<tc-skeleton />
<content-placeholders>
  <content-placeholders-heading :img="false" />
  <content-placeholders-img />
  <content-placeholders-text :lines="3" />
</content-placeholders>
```
:::


### content-placeholders Attributes 【root】
这些属性定义了所有子组件的行为方式

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| animated | 是否动画 | Boolean | — | true |
| rounded | 是否圆角 | Boolean | — | false |
| centered | 是否居中 | Boolean | — | false |

### content-placeholders-heading Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| img | 是否显示图片 | Boolean | — | false |

### content-placeholders-text Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| lines | 文本显示的行数 | Number | — | 4 |

### content-placeholders-img Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
