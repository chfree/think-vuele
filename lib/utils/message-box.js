import { MessageBox } from 'element-ui';

function confirm(title) {
  var options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  };
  return new Promise(function (resolve, reject) {
    MessageBox.confirm(title, '警告', options).then(function () {
      resolve();
    }).catch(function () {
      reject();
    });
  });
}

export { confirm };