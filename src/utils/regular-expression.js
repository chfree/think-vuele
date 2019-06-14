export const regularExpression = {
  // 移动电话
  mobile: '((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}',
  // 固定电话
  phone: '(0\d{2}-?\d{8}(-\d{1,4})?)|(0\d{3}-?\d{7,8}(-\d{1,4})?)',
  // 正整数1+
  positiveNumber: '[1-9]\d*',
  // 自然数 0+
  naturalNumber: '[0-9]\d*',
  // 负整数
  negativeNumber: '-[1-9]\d*',
  // 整数
  integer: '-?[1-9]\d*',
  // 带小数点或不带小数点的任意长度
  numberDecimalMore: '((\d+.\d*)|(\d+))',
  // 带小数点或不带小数点,小数点后2位
  numberDecimalTwo: '((\d+.\d{0,2})|(\d+))',
  // 带小数点任意长度
  decimalMore: '(\d+.\d*)',
  // 带小数点,小数点后2位
  decimalTwo: '(\d+.\d{0,2})',
  // (负数)带小数点或不带小数点的任意长度
  negativeNumberDecimalMore: '-((\d+.\d*)|(\d+))',
  // (负数)带小数点或不带小数点,小数点后2位
  negativeNumberDecimalTwo: '-((\d+.\d{0,2})|(\d+))',
  // (负数)带小数点任意长度
  negativeDecimalMore: '-(\d+.\d*)',
  // (负数)带小数点,小数点后2位
  negativeDecimalTwo: '-(\\d+.\\d{0,2})',
  // (负数或)带小数点或不带小数点的任意长度
  negativeOrNumberDecimalMore: '-?((\d+.\d*)|(\d+))',
  // (负数或)带小数点或不带小数点,小数点后2位
  negativeOrNumberDecimalTwo: '-?((\d+.\d{0,2})|(\d+))',
  // (负数或)带小数点任意长度
  negativeOrDecimalMore: '-?(\d+.\d*)',
  // (负数或)带小数点,小数点后2位
  negativeOrDecimalTwo: '-?(\d+.\d{0,2})',
  // 小数或数字、小数后N位
  getNumberDecimalN: function(length) {
    return '((\d+.\d{0,' + length + '})|(\d+))'
  },
  // 小数、小数后N位
  getDecimalN: function(length) {
    return '(\d+.\d{0,' + length + '})'
  },
  // (负)小数、小数后N位
  getNegativeDecimalN: function(length) {
    return '-(\d+.\d{0,' + length + '})'
  },
  // (负)小数或数字、小数后N位
  getNegativeNumberDecimalN: function(length) {
    return '-((\d+.\d{0,' + length + '})|(\d+))'
  },
  // (负或)小数、小数后N位
  getNegativeOrDecimalN: function(length) {
    return '-(\d+.\d{0,' + length + '})'
  },
  // (负或)小数或数字、小数后N位
  getNegativeOrNumberDecimalN: function(length) {
    return '-((\\d+.\\d{0,' + length + '})|(\\d+))'
  }
}

export const regularExpressionStrict = {
  mobile: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$/,
  phone: /^(0\d{2}-?\d{8}(-\d{1,4})?)$|^(0\d{3}-?\d{7,8}(-\d{1,4})?)$/
}
