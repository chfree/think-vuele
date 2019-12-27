## Clamp

轻松实现多行文本截断

完全参考：

vue-clamp:<a target="_blank" href="https://github.com/Justineo/vue-clamp">https://github.com/Justineo/vue-clamp</a>

resize-detector:<a target="_blank" href="https://github.com/Justineo/resize-detector">https://github.com/Justineo/resize-detector</a>

vue-clamp的功能简介：
- 可以选择限制行数与/或最大高度，无需指定行高。
- 支持在布局变化时自动更新。
- 支持展开/收起被截断部分内容。
- 支持自定义截断文本前后内容，并且进行响应式更新。


### 基础用法
:::demo
```html
<tc-clamp autoresize auto-title :max-lines="2">
嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！
</tc-clamp>
```
:::

### 跟随容器自适应
:::demo
```html
<el-row>
  <el-col :span="12">
    <tc-block title="左边容器">
      <tc-clamp autoresize auto-title :max-lines="2">
      嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！
      </tc-clamp>
    </tc-block>
  </el-col>
  <el-col :span="12">
    <tc-block title="右边容器">
      <tc-clamp autoresize auto-title :max-lines="2">
      嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！
      </tc-clamp>
    </tc-block>
  </el-col>
</el-row>
```
:::

### 展开内容
:::demo
```html
<el-checkbox v-model="expanded">展开内容</el-checkbox>
<tc-clamp autoresize auto-title :expanded.sync="expanded" :max-lines="2">
嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！
</tc-clamp>
<script>
  export default {
    data() {
      return {
        expanded: false
      }
    }
  }
</script>
```
:::

### Slots
| name | 说明 |
|---|---|
| default | 需要截断的文本。只能包含纯文本内容。 |
| before | Slot 作用域：`{ expand, collapse, toggle }` `expand: function(): void`  - 展开被截断的文本。 `collapse: function(): void` - 收起展开后的文本。`toggle: function(): void` - 切换被截断文本的展开状态。`clamped: Boolean` - 内容是否处于截断状态。`expanded: Boolean` - 内容是否处于展开状态。在被截断的文本前显式的内容，可以包含任意类型内容。 |
| after | Slot 作用域：与 `before` 相同。 在被截断的文本后显式的内容，可以包含任意类型内容。 |

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
| --- |--- |--- |--- |--- |
| tag | 生成的根元素的标签名 | String | — | `div` |
| autoresize   | 是否要自动适配根元素的尺寸变化。 | Boolean | — | false |
| max-lines  | 可以显示的最大行数   | Number | — | — |
| max-height   | 根元素的最大高度。数字值将被转换为 px 单位；字符串值将直接作为 CSS 属性 max-height 输出。 | Number、String | — | — |
| ellipsis   | 当文字被截断时需要显示的省略号字符串。 | String | — | `…` |
| expanded `sync`  | 是否展开显式被截断的文本。   | Boolean | — | false |
| autoTitle   | 是否显示title   | Boolean | — | false |
