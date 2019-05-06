## Dialog
信息化管理系统中经常使用到，el中提供的太大众化，因此进行业务组件的上的样式封装

## MessageBox
简化了el-message-box的用法

### 基础用法
:::demo
```html
<tc-button @click="openDialog">打开dialog</tc-button>
<tc-dialog :show-dialog.sync="showDialog" title="test" width="300px" height="500">
test
</tc-dialog>
<script>
export default {
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    openDialog(){
      this.showDialog = true
    }
  }
}
</script>
```
:::