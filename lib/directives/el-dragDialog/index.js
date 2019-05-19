import drag from './drag';

var install = function install(Vue) {
  Vue.directive('el-drag-dialog', drag);
};

if (window.Vue) {
  window['el-drag-dialog'] = drag;
  Vue.use(install); // eslint-disable-line
}

drag.install = install;
export default drag;