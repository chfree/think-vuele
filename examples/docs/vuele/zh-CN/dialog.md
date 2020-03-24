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
<tc-dialog :visible.sync="showDialog1" loading loadingType="skeleton" title="test1" width="400px" height="300px">
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

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| opened  | 窗体打开后的回调函数定义   | String | — | opened |
| open  | 窗体打开时的回调函数定义   | String | — | open |
| closed  | 窗体关闭后的回调函数定义   | String | — | closed |
| close  | 窗体关闭时的回调函数定义   | String | — | close |
| beforeClose  | 窗体关闭前的回调函数定义 | String | — | beforeClose |
| visible  | 控制显示dialog   | Boolean | — | — |
| title   | dialog的标题   | String | — | dialog |
| width   | dialog的宽度   | String          | 百分比和数值 | — |
| height   | dialog的高度   | String          | 百分比和数值 | — |
| icon   | dialog的图标   | String  | — | el-icon-time |
| loading   | 是否开启loading加载   | Boolean | — | false |
| loadingType   | loading的类型   | String | `loading`,`skeleton`,`cssLoading` | loading |
| loadingAutoClose   | 是否自动关闭loading   | Boolean | — | true |
| loadingText   | 开启loading时的提示文本   | String | — | 加载中 |
| loadingOption   | 开启loading时的配置 | String | — | — |
| skeletonOption   | skeleton时的参数 | Object | — | — |


#### skeletonOption格式及默认数据
```
{
  content: {
    animated: true,
    rounded: true,
    centered: false
  },
  form: {
    row: 2,
    column: 1,
    gutter: 20
  }
}
```

### slots
| 参数 | 说明 |
|------  |-----|
| title | title插槽 |
| skeleton | skeleton骨架屏插槽 |
| cssLoading | cssLoading场景的插槽 |

### Dialog 内部组件钩子函数
#### beforeClose: 窗体关闭前的回调钩子，返回false则阻止关闭
#### opened: 窗体打开时的回调钩子函数
#### closed: 窗体关闭后的回调钩子函数