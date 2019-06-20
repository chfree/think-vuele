## VNameMixin

在进行e2e测试的时候，如果每个控件有特殊的标记就很好进行测试，即时布局结构发生了变化也能进行很好的监听。

此混入就是在一些form控件下进行了vname属性的特殊标记

#### 实现方法
```
vname: function() {
  var vmodel = this.$vnode.data.model || {}
  var expression = vmodel.expression || ''
  return expression.replace('.', '_')
}
```

#### 使用方法
写法
```
<tc-input v-model="user.name" />
```

生成的结果

```
<input vname="user_name" ... />
```

#### 应用vname-mixin的控件
```
TcButton,
TcButtonGroup,
TcCheckbox,
TcCheckboxButton,
TcCheckboxGroup,
TcDatePicker,
TcDateTimePicker,
TcInput,
TcInputMoney,
TcInputNumber,
TcInputPhone,
TcInputTag,
TcRadio,
TcRadioButton,
TcRadioGroup,
TcSelect,
TcSwitch,
```