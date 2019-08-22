<script>
  import { random } from 'main/utils'
  export default {
    data() {
      return {
        defaultNum: '0',
        defaultInt: '0',
        defaultLength: '0',
        defaultFloat: '0',
        numShowStyle: {
          padding: '5px',
          border: '1px solid #eee',
          marginBottom: '10px'
        }
      }
    },
    methods: {
      next() {
        this.defaultNum = random.next()
      },
      nextInt(min,max) {
        this.defaultInt = random.nextInt(min,max)
      },
      nextLength(min,max) {
        this.defaultLength = random.nextLength(min,max)
      },
      nextFloat(leftLen,rightLen) {
        this.defaultFloat = random.nextFloat(leftLen,rightLen)
      }
    }
  }
</script>

## Random

对`Math.random`进行了一系列封装

### 用法

```
import { random } from 'tennetcn-ui/lib/utils'
```

### 默认随机
```
random.next()
```
只是简单的`Math.random()`

<div :style="numShowStyle">
{{defaultNum}}
</div>
<tc-button @click='next'>random.next()</tc-button>

### 范围随机
```
random.nextInt(min, max)
```
可以给定一个范围进行随机，

传空的时候只是去掉了`0.`,位数是不定的

只传`min`，则是`0-(min-1)`

`min`,`max`都传，`min-(max-1)`

<div :style="numShowStyle">
{{defaultInt}}
</div>
<tc-button @click='nextInt()'>random.nextInt()</tc-button>
<tc-button @click='nextInt(10)'>random.nextInt(10)</tc-button>
<tc-button @click='nextInt(10,20)'>random.nextInt(10,20)</tc-button>

### 位数随机
```
random.nextLength(min, max)
```
可以给定一个位数进行随机，

传空的时候位数是随机的`[1-10]`

只传`min`，则位数等于`min`

`min`,`max`都传，则位数大于等于`min`小于等于`max`

<div :style="numShowStyle">
{{defaultLength}}
</div>
<tc-button @click='nextLength()'>random.nextLength()</tc-button>
<tc-button @click='nextLength(2)'>random.nextLength(2)</tc-button>
<tc-button @click='nextLength(1,3)'>random.nextLength(1,3)</tc-button>

### 浮点数随机
```
random.nextFloat(leftLen, rightLen)
```
给定小数点的左边和右边进行随机

传空的时候位数是随机的左边是位数随机(`1-10`)，右边是2位
<div :style="numShowStyle">
{{defaultFloat}}
</div>
<tc-button @click='nextFloat()'>random.nextFloat()</tc-button>
<tc-button @click='nextFloat(2)'>random.nextFloat(2)</tc-button>
<tc-button @click='nextFloat(3,3)'>random.nextFloat(3,3)</tc-button>