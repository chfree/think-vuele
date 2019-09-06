import { regularExpression } from 'main/utils/regular/regular-expression.js'
import { isEmpty } from 'main/utils'
export default {
  props: {
    regularType: { type: String, default: null },
    regex: { type: String, default: null }
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
    blurHandle: function(e) {
      const inValue = e.target.value
      const matchValue = this.regularMatch(this.regularType, inValue)
      this.$emit('input', matchValue)
    }
  }
}
