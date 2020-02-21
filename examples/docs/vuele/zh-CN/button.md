## Button按钮

按钮，扩展自`ElButton`

### 基础示例
:::demo
```html
<tc-button type="success" ref="btnTest">测试</tc-button>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      console.log(this.$refs.btnTest)
    },
    methods: {
    }
  }
</script>
```
:::

