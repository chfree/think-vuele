import regularValidMixin from 'main/utils/regular-valid-mixin.js'
import { isNull } from 'main/utils'

export default {
  methods: {
    regularValid(type, value) {
      const regexp = new RegExp(regularValidMixin[type])
      return regexp.test(value)
    },
    regularMatch(type, value) {
      if (value === null || value === undefined) {
        return value
      }
      const regexp = new RegExp(regularValidMixin[type])
      const results = value.match(regexp)
      if (isNull(results) || results.length <= 0) {
        return ''
      }
      return results[0]
    }
  }
}
