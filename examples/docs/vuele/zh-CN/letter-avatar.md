## LetterAvatar
letter avatar 头像显示

源码参照[`eliep/vue-avatar`](https://github.com/eliep/vue-avatar)

### 基础用法
:::demo
```html
<tc-letter-avatar username="A" inline :rounded="false" />
<tc-letter-avatar username="B" inline :rounded="false" />
<tc-letter-avatar username="free" inline :rounded="false" />
```
:::

### 圆形
:::demo
```html
<tc-letter-avatar username="天" inline />
<tc-letter-avatar username="地" background-color="#eee" inline />
<tc-letter-avatar username="玄" background-color="#999" inline />
<tc-letter-avatar username="黄" background-color="#fde" inline />
<tc-letter-avatar username="宇" background-color="#88a" inline />
<tc-letter-avatar username="宙" background-color="#ee8" inline />
<tc-letter-avatar username="洪" color="#999" background-color="#369" inline />
<tc-letter-avatar username="荒" color="#000" background-color="#abc" inline />
```
:::

### 大小
:::demo
```html
<tc-letter-avatar username="大" inline :size="70" />
<tc-letter-avatar username="中" inline :size="50" />
<tc-letter-avatar username="小" inline :size="40" />
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| username | avatar的名字 | String | — |  |
| size | avatar的大小 | String | — | 50 |
| rounded | 是否显示成圆形 | Boolean | — | false |
| inline | display采用 inline-flex 或者 flex | Boolean | - | false |
| initial | Force the displayed initials by overriding the computed ones | String | — |  |
| src | 使用一个图片作为avatar来显示 | String | — |  |
| :customStyle | 自定义一个样式来覆盖原有样式 | Object | — |  |
| backgroundColor | avatar的背景色 | String | — |  |
| color | avatar的前景色 | String | — |  |
| :lighten | A factor by which the background color must be lightened to produce the font color | Number | [-100,100] | 80 |