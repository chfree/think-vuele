<template>
  <el-input :value="value" :vname="vname" class="tc-input-phone" @blur="blurHandle" v-bind="$attrs" v-on="$listeners">
  </el-input>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
export default {
  name: 'TcInputPhone',
  mixins: [vnameMixin],
  props: {
    country: { type: String, default: 'CN' },
    value: { type: Object | String | Number, default: null }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    blurHandle(e) {
      const inPhone = e.target.value
      var result = this.getParsePhoneNumberFromString(inPhone, this.country)
      if (result.isValid) {
        this.$emit('input', result.phoneNumber)
      } else {
        this.$emit('input', '')
      }
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
