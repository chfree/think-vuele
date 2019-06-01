## InputTag
input tag文本框

源码参照[`matiastucci/vue-input-tag`](https://github.com/matiastucci/vue-input-tag)，依赖的源码，压缩文件达到80kb，所以最后就只复制了相关文件

主要进行了样式与emement的融合优化

### 基础用法
:::demo
```html
<tc-input-tag /> 
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| value | Tags to be render in the input | Array | — | [] |
| placeholder | Placeholder to be shown when no tags | String | — | '' |
| read-only | Set input to readonly | Boolean | - | false |
| add-tag-on-blur | Add tag on input blur | Boolean | -  | false |
| limit | Set a limit for the amount of tags | String or Number | -  | -1 (none) |
| validate | Apply certain validator for user input. Choose from `email`, `url`, `text`, `digits` or `isodate`. Or pass a `function` or a `RegExp` object for custom validation | String or Function (allows async) or Object | -  | "" |
| add-tag-on-keys | Keys that are going to add the new tag | Array | -  | [ 13 (return), 188 (comma), 9 (tab) ] |
| allow-duplicates | Allow duplicate tags | Boolean  | - | false |
| before-adding | Function (allows async) to normalize tag before adding. E.g `(tag) => tag.toUpperCase()` | Function | -  | null |
