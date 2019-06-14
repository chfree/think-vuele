<template>
  <el-input :value="value" :vname="vname" class="tc-input-phone" @blur="blurHandle" v-bind="$attrs" v-on="$listeners">
  </el-input>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
/**
 * validType: common 通用，采用libphone进行
 *            phone 座机号
 *            mobile 手机号
 *            mop 手机号+座机号
 *            regex 自定义正则
 */
var regexValid = {
  mobile: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$/,
  phone: /^(0\d{2}-?\d{8}(-\d{1,4})?)$|^(0\d{3}-?\d{7,8}(-\d{1,4})?)$/
}
export default {
  name: 'TcInputPhone',
  mixins: [vnameMixin],
  props: {
    validType: { type: String, default: 'mop' },
    regex: { type: String, default: null },
    country: { type: String, default: 'CN' },
    value: { type: Object | String | Number, default: null }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    blurHandle(e) {
      var resultPhone = e.target.value
      if (this.validType === 'common') {
        this.libphoneValid(resultPhone)
      } else if (this.validType === 'phone' || this.validType === 'mobile') {
        if (!regexValid[this.validType].test(resultPhone)) {
          resultPhone = ''
        }
      } else if (this.validType === 'mop') {
        if (!regexValid.phone.test(resultPhone) && !regexValid.mobile.test(resultPhone)) {
          resultPhone = ''
        }
      } else if (this.validType === 'regex') {
        if (this.regex !== null && !this.regex.test(resultPhone)) {
          resultPhone = ''
        }
      }
      this.$emit('input', resultPhone)
    },
    libphoneValid(inPhone) {
      var result = this.getParsePhoneNumberFromString(inPhone, this.country)
      if (result.isValid) {
        return result.phoneNumber
      }
      return ''
    },
    getParsePhoneNumberFromString(phoneNumber, countryCode) {
      const parsing = phoneNumber && countryCode ? parsePhoneNumberFromString(phoneNumber, countryCode) : null
      return {
        phoneNumber: phoneNumber ? phoneNumber : null,
        countryCode: countryCode,
        isValid: false,
        ...(parsing
          ? {
            formattedNumber: parsing.number,
            nationalNumber: parsing.nationalNumber,
            isValid: parsing.isValid(),
            type: parsing.getType(),
            formatInternational: parsing.formatInternational(),
            formatNational: parsing.formatNational(),
            uri: parsing.getURI(),
            e164: parsing.format('E.164')
          }
          : null
        )
      }
    }
  }
}
</script>
