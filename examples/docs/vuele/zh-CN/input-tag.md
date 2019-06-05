## InputTag
input tag文本框

源码参照[`JohMun/vue-tags-input`](https://github.com/JohMun/vue-tags-input)

进行了样式与emement的融合优化；
:::tip
修改了`vue-tags-input`的值绑定模式。
原生用法的`tags`并不是绑定在`v-model`，此处进行了转换，直接绑定到`v-model`
:::
```
<vue-tags-input
  v-model="tag"
  :tags="tags"
  @tags-changed="newTags => tags = newTags"
/>
```
:::warning
修改后的`v-model`有一个缺陷，文本框输入的时候，`v-model`的对象是文本框的内容，而不是`tags`的内容，只有回车后，`v-model`的值才会被驱动到`tags`
:::

### 基础用法
:::demo
```html
<tc-block style="margin-bottom:10px;">
tag: {{tag}}
</tc-block>
<tc-input-tag v-model="tag" />
<script>
export default {
  data() {
    return {
      tag: ''
    }
  }
}
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
