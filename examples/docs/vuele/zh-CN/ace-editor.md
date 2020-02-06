## AceEditor

AceEditor代码编辑器

- 官网：[https://ace.c9.io/](https://ace.c9.io/)
- 官方示例：[https://ace.c9.io/build/kitchen-sink.html](https://ace.c9.io/build/kitchen-sink.html)

一些参考示例：
- [https://github.com/ajaxorg/ace-builds](https://github.com/ajaxorg/ace-builds)
- [https://github.com/ajaxorg/ace](https://github.com/ajaxorg/ace)
- [https://blog.csdn.net/YoshinoNanjo/article/details/82978668](https://blog.csdn.net/YoshinoNanjo/article/details/82978668)
- [https://github.com/chairuosen/vue2-ace-editor](https://github.com/chairuosen/vue2-ace-editor)

### 基础示例
:::demo
```html
<tc-block style="height:28px;margin-bottom:10px;">
{{value}}
</tc-block>
<tc-ace-editor v-model="value" />

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值   |
| --- |--- |--- |--- |--- |
| value | 内容，支持v-model绑定 | String | — | — |
| type | 编辑器支持的语言格式,如果需要支持更多，需要参照官方进行示例进行自己适配 | String | `html`,`js/javascript`,`css` | html |
| option | 构建aceEditor需要的一些参数 | Object | — | {} |

#### option默认值
```
{
  maxLines: 18, // 最大行数，超过会自动出现滚动条
  minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
  fontSize: 14, // 编辑器内字体大小
  theme: 'ace/theme/monokai', // 默认设置的主题
  tabSize: 4, // 制表符设置为 4 个空格大小
  value: ''
}
```
更多用法参数官网示例
