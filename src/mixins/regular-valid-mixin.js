import { regularExpression } from 'main/utils/regular/regular-expression.js'
import { isEmpty } from 'main/utils'
export default {
  props: {
    regularType: { type: String, default: null },
    regex: { type: String, default: null }
  },
  data() {
    return {
      repairZeroRegularType: ['numberDecimalMore', 'numberDecimalTwo', 'decimalMore', 'decimalTwo', 'negativeNumberDecimalMore', 'negativeNumberDecimalTwo', 'negativeDecimalMore', 'negativeDecimalTwo', 'negativeOrNumberDecimalMore', 'negativeOrNumberDecimalTwo', 'negativeOrDecimalMore', 'negativeOrDecimalTwo', 'getNumberDecimalN', 'getDecimalN', 'getNegativeDecimalN', 'getNegativeNumberDecimalN', 'getNegativeOrDecimalN', 'getNegativeOrNumberDecimalN']
    }
  },
  methods: {
    regularValid(type, value) {
      const regExpression = this.queryExpression(type)
      if (isEmpty(regExpression)) {
        return value
      }

      const regexp = new RegExp(regExpression)
      return regexp.test(value)
    },
    regularMatch(type, value) {
      if (isEmpty(value)) {
        return value
      }

      const regExpression = this.queryExpression(type)
      if (isEmpty(regExpression)) {
        return value
      }

      const regexp = new RegExp(regExpression)
      const results = value.match(regexp) || ['']

      return results[0]
    },
    queryExpression(type) {
      if (isEmpty(type)) {
        return this.regex
      }
      var regExpression = ''
      if (type.indexOf(':') > 0) {
        const types = type.split(':')
        regExpression = regularExpression[types[0]](types[1])
      } else {
        regExpression = regularExpression[type]
      }
      return regExpression
    },
    isRepairZero(matchValue, regularType) {
      // 值不为空,regularType不为空
      if (isEmpty(matchValue) || isEmpty(regularType)) {
        return false
      }
      // 最后有.
      if (matchValue.lastIndexOf('.') !== matchValue.length - 1) {
        return false
      }
      // 是否是指定的regularType
      // 对于在repairZeroRegularType中的进行判断
      const regularTypeName = (regularType.indexOf(':') > 0) ? regularType.split(':')[0] : regularType
      if (this.repairZeroRegularType.indexOf(regularTypeName) >= 0) {
        return true
      }
      return false
    },
    blurHandle: function(e) {
      const inValue = e.target.value
      let matchValue = this.regularMatch(this.regularType, inValue)
      if (this.isRepairZero(matchValue, this.regularType)) {
        matchValue += '0'
      }
      this.$emit('input', matchValue)
    }
  }
}
