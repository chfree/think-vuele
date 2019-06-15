import { regularExpression } from 'main/utils/regular-expression.js';
import { isNull } from 'main/utils';
export default {
  props: {
    regularType: { type: String, default: null },
    regex: { type: String, default: null }
  },
  methods: {
    regularValid: function regularValid(type, value) {
      var regExpression = this.queryExpression(type);
      if (isNull(regExpression)) {
        return value;
      }

      var regexp = new RegExp(regExpression);
      return regexp.test(value);
    },
    regularMatch: function regularMatch(type, value) {
      if (isNull(value)) {
        return value;
      }

      var regExpression = this.queryExpression(type);
      if (isNull(regExpression)) {
        return value;
      }

      var regexp = new RegExp(regExpression);
      var results = value.match(regexp) || [''];

      return results[0];
    },
    queryExpression: function queryExpression(type) {
      if (isNull(type)) {
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

    blurHandle: function blurHandle(e) {
      var inValue = e.target.value;
      var matchValue = this.regularMatch(this.regularType, inValue);
      this.$emit('input', matchValue);
    }
  }
};