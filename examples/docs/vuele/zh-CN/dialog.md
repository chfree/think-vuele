<script>
  import dialogIndex from './dialog/index.vue'
  export default {
    components: {dialogIndex},
    created() {
    },
    mounted() {
    },
    methods: {
    },
    data() {
      return {
      }
    }
  }
</script>
## Dialog
信息化管理系统中经常使用到，el中提供的太大众化，因此进行业务组件的上的样式封装

##### 继承关系
```
TcDialog > ElDialog
```

### 基础用法
```html
<tc-button @click="openDialog">打开dialog</tc-button>
<tc-dialog :visible.sync="showDialog" title="test" width="400px" height="300px">
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

### 引用组件
```html
<tc-button @click="openDialog1">打开dialog1</tc-button>
<tc-dialog :visible.sync="showDialog1" title="test1" width="400px" height="300px">
  <test-index />
</tc-dialog>

<script>
export default {
  data() {
    return {
      showDialog1: false
    }
  },
  created() {
  },
  methods: {
    openDialog1(){
      this.showDialog1 = true
    }
  }
}

</script>
```

testIndex
```html
<template>
  <div>
    <h1>我是新的组件</h1>
  </div>
</template>
```

### 组件内固定底部
```html
<tc-dialog :visible.sync="showDialog2" title="组件内固定底部" width="400px" height="300px">
  <fixed-bottom />
</tc-dialog>

<script>
export default {
  data() {
    return {
      showDialog2: false
    }
  },
  created() {
  },
  methods: {
    openDialog1(){
      this.showDialog2 = true
    }
  }
}

</script>
```

fixedBottom
```html
<template>
  <div>
    <tc-form label-width="80px" size="mini" style="padding:10px;">
      <tc-form-item label="活动名称">
        <tc-input v-model="form.name"></tc-input>
      </tc-form-item>
      ...
    </tc-form>
    <tc-fixed-bottom style="height:50px;">
      <tc-button type="primary" size="mini">立即创建</tc-button>
      <tc-button size="mini" @click="$parent.hide()">取消</tc-button>
    </tc-fixed-bottom>
  </div>
</template>
```

### 所有示例
<div>
<dialogIndex/>
</div>

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| visible   | 控制显示dialog   | Boolean          | — | — |
| title   | dialog的标题   | String          | — | dialog |
| width   | dialog的宽度   | String          | 百分比和数值 | — |
| height   | dialog的高度   | String          | 百分比和数值 | — |
| icon   | dialog的图标   | String          | — | el-icon-time |