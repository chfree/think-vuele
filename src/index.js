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

import directives from './directives'

const install = function(Vue, opts = {}) {
  // load element ui
  Vue.use(ElementUI)
  // load utilLib
  Vue.use(utilLib)
  // load directive
  Vue.use(directives)

  // load components
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.46',
  install,
  utilLib,
  directives,
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
