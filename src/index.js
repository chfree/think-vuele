import './styles/index.scss'
import {
  TcBadge,
  TcBlock,
  TcButton,
  TcButtonGroup,
  TcCheckbox,
  TcCheckboxButton,
  TcCheckboxGroup,
  TcDatePicker,
  TcDateTimePicker,
  TcDialog,
  TcEditTable,
  TcEditTreeTable,
  TcFieldset,
  TcFixedBottom,
  TcForm,
  TcFormItem,
  TcHotTable,
  TcInput,
  TcInputMoney,
  TcInputNumber,
  TcInputPhone,
  TcInputTag,
  TcLetterAvatar,
  TcPager,
  TcRadio,
  TcRadioButton,
  TcRadioGroup,
  TcSelect,
  TcSwitch,
  TcTable,
  TcTabs,
  TcTag,
  TcTimePicker,
  TcTree,
  TcTreeTable,
  TcXgPlayer
} from '../packages/tennetcn-ui'

const components = [
  TcBadge,
  TcBlock,
  TcButton,
  TcButtonGroup,
  TcCheckbox,
  TcCheckboxButton,
  TcCheckboxGroup,
  TcDatePicker,
  TcDateTimePicker,
  TcDialog,
  TcEditTable,
  TcEditTreeTable,
  TcFieldset,
  TcFixedBottom,
  TcForm,
  TcFormItem,
  TcHotTable,
  TcInput,
  TcInputMoney,
  TcInputNumber,
  TcInputPhone,
  TcInputTag,
  TcLetterAvatar,
  TcPager,
  TcRadio,
  TcRadioButton,
  TcRadioGroup,
  TcSelect,
  TcSwitch,
  TcTable,
  TcTabs,
  TcTag,
  TcTimePicker,
  TcTree,
  TcTreeTable,
  TcXgPlayer
]
import ElementUI from 'element-ui'

import utilLib from './utils/util-lib'

const install = function(Vue, opts = {}) {
  Vue.use(ElementUI)
  Vue.use(utilLib)
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.42',
  install,
  utilLib,
  TcBadge,
  TcBlock,
  TcButton,
  TcButtonGroup,
  TcCheckbox,
  TcCheckboxButton,
  TcCheckboxGroup,
  TcDatePicker,
  TcDateTimePicker,
  TcDialog,
  TcEditTable,
  TcEditTreeTable,
  TcFieldset,
  TcFixedBottom,
  TcForm,
  TcFormItem,
  TcHotTable,
  TcInput,
  TcInputMoney,
  TcInputNumber,
  TcInputPhone,
  TcInputTag,
  TcLetterAvatar,
  TcPager,
  TcRadio,
  TcRadioButton,
  TcRadioGroup,
  TcSelect,
  TcSwitch,
  TcTable,
  TcTabs,
  TcTag,
  TcTimePicker,
  TcTree,
  TcTreeTable,
  TcXgPlayer
}
