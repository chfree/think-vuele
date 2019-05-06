## MessageBox
简化了el-message-box的用法

### 基础用法
:::demo
```html
<tc-button @click="openConfirm">打开confirm</tc-button>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    openConfirm(){
      this.$confirm.warning('是否确认删除').then((rsl)=>{
        console.log('then')
      }).catch(()=>{
        console.log('catch')
      })
    }
  }
}
</script>
```
:::