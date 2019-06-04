## LetterAvatar
letter avatar 头像显示

源码参照[`aidewoode/vue-letter-avatar`](https://github.com/aidewoode/vue-letter-avatar)

### 基础用法
:::demo
```html
<tc-letter-avatar name="A" /> 
<tc-letter-avatar name="B" /> 
<tc-letter-avatar name="free" /> 
```
:::

### 圆形
:::demo
```html
<tc-letter-avatar name="中" :rounded=true /> 
<tc-letter-avatar name="华" :rounded=true /> 
<tc-letter-avatar name="人" :rounded=true /> 
<tc-letter-avatar name="民" :rounded=true /> 
<tc-letter-avatar name="共" :rounded=true /> 
<tc-letter-avatar name="和" :rounded=true /> 
<tc-letter-avatar name="国" :rounded=true /> 
```
:::

### 大小
:::demo
```html
<tc-letter-avatar name="大" size="70" :rounded=true /> 
<tc-letter-avatar name="中" size="50" :rounded=true /> 
<tc-letter-avatar name="小" size="40" :rounded=true /> 
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| name | avatar的名字 | String | — |  |
| size | avatar的大小 | String | — | 50 |
| rounded | 是否显示成圆形 | Boolean | — | false |