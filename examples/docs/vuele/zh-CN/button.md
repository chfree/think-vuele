## Button按钮

按钮，扩展自`ElButton`

### 无title模式
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
    }
  }
</script>
```
:::

