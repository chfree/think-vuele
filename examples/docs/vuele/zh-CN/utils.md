## Utils工具包
提供一些常用的工具包,引入方式
```
import { xxx } from 'tennetcn-ui/lib/utils
```

### isNull
判断传入的变量是否可以为`空串('')`，`null`，`undefined`


### formatDate
```
return moment(date).format('YYYY-MM-DD')
```

### formatDateTime
```
return moment(date).format('YYYY-MM-DD HH:mm:ss')
```

### confirm
简化了confirm的调用
```
confirm('是否确定删除').then().catch()
```

:::tip
find 系列来源iview作者在掘金小册中的提供
:::
### findComponentDownward
由一个组件，向下找到最近的指定组件
 ```
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
```

### findComponentUpward
由一个组件，向上找到最近的指定组件
```
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
```

### findComponentsUpward
由一个组件，向上找到所有的指定组件
```
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
```

### findComponentsDownward
由一个组件，向下找到所有指定的组件
```
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
```

### findBrothersComponents
由一个组件，找到指定组件的兄弟组件
```
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
 * @param {是否把本身除外} exceptMe
```


### this.$tcUtil 绑定
```
isNull
findComponentDownward
findComponentUpward
findComponentsUpward
findComponentsDownward
findBrothersComponents
```

### this.$moment 绑定
```
formatDate
formatDateTime
```

### this.$confirm
```
warning = confirm
```