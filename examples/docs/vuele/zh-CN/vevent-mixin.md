## VNameMixin

在进行e2e测试的时候，如果每个控件有特殊的标记就很好进行测试，即时布局结构发生了变化也能进行很好的监听。

此混入就是在一些form控件下进行了vevent属性的特殊标记

#### 实现方法
```
vevent: function() {
  const eventName = (Object.keys(this.$listeners) || [''])[0]
  if (isEmpty(eventName)) {
    return null
  }
  return this.$listeners[eventName]['fns'].name.replace(' ', '_')
}
```

#### 使用方法
写法
```
<tc-button @click="add" />
```

生成的结果

```
<button vevent="bound_add" ... />
```

#### 应用vname-mixin的控件
```
TcButton
```