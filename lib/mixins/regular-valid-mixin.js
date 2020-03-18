import { regularExpression } from 'main/utils/regular/regular-expression.js';
import { isEmpty } from 'main/utils';
export default {
  props: {
    regularType: { type: String, default: null },
    regex: { type: String, default: null }
  },
  data: function data() {
    return {
      repairZeroRegularType: ['numberDecimalMore', 'numberDecimalTwo', 'decimalMore', 'decimalTwo', 'negativeNumberDecimalMore', 'negativeNumberDecimalTwo', 'negativeDecimalMore', 'negativeDecimalTwo', 'negativeOrNumberDecimalMore', 'negativeOrNumberDecimalTwo', 'negativeOrDecimalMore', 'negativeOrDecimalTwo', 'getNumberDecimalN', 'getDecimalN', 'getNegativeDecimalN', 'getNegativeNumberDecimalN', 'getNegativeOrDecimalN', 'getNegativeOrNumberDecimalN']
    };
  },

  methods: {
    regularValid: function regularValid(type, value) {
      var regExpression = this.queryExpression(type);
      if (isEmpty(regExpression)) {
        return value;
      }

      var regexp = new RegExp(regExpression);
      return regexp.test(value);
    },
    regularMatch: function regularMatch(type, value) {
      if (isEmpty(value)) {
        return value;
      }

      var regExpression = this.queryExpression(type);
      if (isEmpty(regExpression)) {
        return value;
      }

      var regexp = new RegExp(regExpression);
      var results = value.match(regexp) || [''];

      return results[0];
    },
    queryExpression: function queryExpression(type) {
      if (isEmpty(type)) {
        return this.regex;
      }
      var regExpression = '';
      if (type.indexOf(':') > 0) {
        var types = type.split(':');
        regExpression = regularExpression[types[0]](types[1]);
      } else {
        regExpression = regularExpression[type];
      }
      return regExpression;
    },
    isRepairZero: function isRepairZero(matchValue, regularType) {
      // 值不为空,regularType不为空
      if (isEmpty(matchValue) || isEmpty(regularType)) {
        return false;
      }
      // 最后有.
      if (matchValue.lastIndexOf('.') !== matchValue.length - 1) {
        return false;
      }
      // 是否是指定的regularType
      // 对于在repairZeroRegularType中的进行判断
      var regularTypeName = regularType.indexOf(':') > 0 ? regularType.split(':')[0] : regularType;
      if (this.repairZeroRegularType.indexOf(regularTypeName) >= 0) {
        return true;
      }
      return false;
    },

    blurHandle: function blurHandle(e) {
      var inValue = e.target.value;
      var matchValue = this.regularMatch(this.regularType, inValue);
      if (this.isRepairZero(matchValue, this.regularType)) {
        matchValue += '0';
      }
      this.$emit('input', matchValue);
    }
  }
};