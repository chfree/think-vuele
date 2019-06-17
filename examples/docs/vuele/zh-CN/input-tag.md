## InputTag
input tag文本框

源码参照[`JohMun/vue-tags-input`](https://github.com/JohMun/vue-tags-input)

[官网说明](http://www.vue-tags-input.com)

进行了样式与emement的融合优化；并进行基于正则表达式验证的快捷模式提供。
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
  },
  methods: {
  }
}
</script>
```
:::

### 基础用法-默认值
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
      tag: '测试,羽毛球'
    }
  },
  methods: {
  }
}
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值   |
|------  |-----|---- |----- |---- |
| add-on-blur | 当光标离开后，如果符合条件会自动生成一个tag | Boolean | — | true |
| add-from-paste | 当粘贴后，如果符合条件会自动生成一个tag | Boolean | — | true |
| add-on-key | 按下指定的键位后，如果符合条件会自动生成一个tag | Array | — | [13,','] |
| add-only-from-autocomplete | If it's true, the user can add tags only via the autocomplete layer. | Boolean | — | false |
| allow-edit-tags | 是否允许编辑tag | Boolean | — | false |
| autocomplete-always-open | If it's true, the autocomplete layer is always shown, regardless if
 an input or an autocomplete items exists. | Boolean | — | false |
| autocomplete-filter-duplicates | Defines if duplicate autocomplete items are filtered out from the view or not. | Boolean | — | true |
| autocomplete-items | Expects an array containing objects inside. The objects can have the same properties as a tag object. | Array | — | [] |
| autocomplete-min-length | The minimum character length which is required until the autocomplete layer is shown. | Number | — | 1 |
| avoid-adding-duplicates | If it's true, the user can't add or save a tag, if another exists, with the same text value. | Boolean | — | true |
| delete-on-backspace | Defines if it's possible to delete tags by pressing backspace. If so and the user wants to delete a tag, the tag gets the css class 'deletion-mark' for 1 second. If the user presses backspace again in that time period, the tag is removed from the tags array and the view. | Boolean | — | true |
| disabled | 禁用控件 | Boolean | — | false |
| max-tags | The maximum amount the tags array is allowed to hold. | Number | — | — | 
| maxlength | The maximum amount of characters the input is allowed to hold. | Number | — | — | 
| placeholder | The placeholder text which is shown in the input, when it's empty. | String | — | 添加标签 | 
| save-on-key | Custom trigger key codes can be registrated. If the user edits a tag and presses one of these, the edited tag will be saved. Can be either a numeric keyCode or the key as a string. | Array |  | [13] | 
| separators | Defines the characters which splits a text into different pieces, to generate tags out of this pieces. | Array | — | [';'] | 
| tags | Pass an array containing objects like in the example below. The properties 'style' and 'class' are optional. Of course it is possible to add custom properties to a tag object. vue-tags-input won't change the key and value. | Array | — | [] | 

### Attributes Function
#### is-duplicate
Custom function to detect duplicates. If the function returns 'true', the tag will be marked as duplicate.
```
// The duplicate function to recreate the default behaviour, would look like this:
isDuplicate(tags, tag) {
 return tags.map(t => t.text).indexOf(tag.text) !== -1;
}
```
#### validation
Pass an array containing objects like in the example below.
 The property 'classes' will be added as css classes, if the property 'rule' matches the text
 of a tag, an autocomplete item or the input. The property 'rule' can be type of
 RegExp or function. If the property 'disableAdd' is 'true', the item can't be added
 to the tags array, if the appropriated rule matches.
```
Type Array
Default []
{
 classes: 'class', /* css class */
 rule: /^([^0-9]*)$/, /* RegExp */
}, {
 classes: 'no-braces', /* css class */
 rule(text) { /* function with text as param */
  return text.indexOf('{') !== -1 || text.indexOf('}') !== -1;
 },
 disableAdd: true, /* if the rule matches, the item cannot be added */,
},
```