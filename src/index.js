import {
  TcSwitchButton,
  TcDialog,
  TcHeaderTitle,
  TcPager,
  TcTableContainer,
  TcAppContainer,
  TcToolbarContainer,
  TcToolbarLeft,
  TcToolbarRight,
  TcSelect,
  TcFieldset,
  TcTable,
  TcTreeTable,
  TcButton,
  TcInput,
  TcButtonGroup,
  TcForm,
  TcFormItem,
  TcDatePicker,
  TcDateTimePicker,
  TcTimePicker,
  TcBadge,
  TcTree,
  TcTag,
  TcInputNumber,
  TcCheckbox,
  TcRadio,
  TcSwitch,
  TcTabs,
  TcEditTable,
  TcEditMtable,
  TcImg,
  TcBlock,
  TcFixedButtom
} from '../packages/tennetcn-ui'

import utilLib from './utils/util-lib'

const components = [
  utilLib,
  TcSwitchButton,
  TcDialog,
  TcHeaderTitle,
  TcPager,
  TcTableContainer,
  TcAppContainer,
  TcToolbarContainer,
  TcToolbarLeft,
  TcToolbarRight,
  TcSelect,
  TcFieldset,
  TcTable,
  TcTreeTable,
  TcButton,
  TcInput,
  TcButtonGroup,
  TcForm,
  TcFormItem,
  TcDatePicker,
  TcDateTimePicker,
  TcTimePicker,
  TcBadge,
  TcTree,
  TcTag,
  TcInputNumber,
  TcCheckbox,
  TcRadio,
  TcSwitch,
  TcTabs,
  TcEditTable,
  TcEditMtable,
  TcImg,
  TcBlock,
  TcFixedButtom
]
import ElementUI from 'element-ui'

const install = function(Vue, opts = {}) {
  Vue.use(ElementUI)
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.2',
  install,
  utilLib,
  TcSwitchButton,
  TcDialog,
  TcHeaderTitle,
  TcPager,
  TcTableContainer,
  TcAppContainer,
  TcToolbarContainer,
  TcToolbarLeft,
  TcToolbarRight,
  TcSelect,
  TcFieldset,
  TcTable,
  TcTreeTable,
  TcButton,
  TcInput,
  TcButtonGroup,
  TcForm,
  TcFormItem,
  TcDatePicker,
  TcDateTimePicker,
  TcTimePicker,
  TcBadge,
  TcTree,
  TcTag,
  TcInputNumber,
  TcCheckbox,
  TcRadio,
  TcSwitch,
  TcTabs,
  TcEditTable,
  TcEditMtable,
  TcImg,
  TcBlock,
  TcFixedButtom
}
