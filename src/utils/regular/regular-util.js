import { regularExpression } from './regular-expression.js'

function isMobile(value, isGlobal = true) {
  return testRegexp(regularExpression.mobile, value, isGlobal)
}

function matchMobile(value, isAll = false) {
  return matchRegexp(regularExpression.mobile, value, isAll)
}

function isPhone(value, isGlobal = true) {
  return testRegexp(regularExpression.phone, value, isGlobal)
}

function matchPhone(value, isAll = false) {
  return matchRegexp(regularExpression.phone, value, isAll)
}

function isPositiveNumber(value, isGlobal = true) {
  return testRegexp(regularExpression.positiveNumber, value, isGlobal)
}

function matchPositiveNumber(value, isAll = false) {
  return matchRegexp(regularExpression.positiveNumber, value, isAll)
}

function isNaturalNumber(value, isGlobal = true) {
  return testRegexp(regularExpression.naturalNumber, value, isGlobal)
}

function matchNaturalNumber(value, isAll = false) {
  return matchRegexp(regularExpression.naturalNumber, value, isAll)
}

function isNegativeNumber(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeNumber, value, isGlobal)
}

function matchNegativeNumber(value, isAll = false) {
  return matchRegexp(regularExpression.negativeNumber, value, isAll)
}

function isInteger(value, isGlobal = true) {
  return testRegexp(regularExpression.integer, value, isGlobal)
}

function matchInteger(value, isAll = false) {
  return matchRegexp(regularExpression.integer, value, isAll)
}

function isNumberDecimalMore(value, isGlobal = true) {
  return testRegexp(regularExpression.numberDecimalMore, value, isGlobal)
}

function matchNumberDecimalMore(value, isAll = false) {
  return matchRegexp(regularExpression.numberDecimalMore, value, isAll)
}

function isNumberDecimalTwo(value, isGlobal = true) {
  return testRegexp(regularExpression.numberDecimalTwo, value, isGlobal)
}

function matchNumberDecimalTwo(value, isAll = false) {
  return matchRegexp(regularExpression.numberDecimalTwo, value, isAll)
}

function isDecimalMore(value, isGlobal = true) {
  return testRegexp(regularExpression.decimalMore, value, isGlobal)
}

function matchDecimalMore(value, isAll = false) {
  return matchRegexp(regularExpression.decimalMore, value, isAll)
}

function isDecimalTwo(value, isGlobal = true) {
  return testRegexp(regularExpression.decimalTwo, value, isGlobal)
}

function matchDecimalTwo(value, isAll = false) {
  return matchRegexp(regularExpression.decimalTwo, value, isAll)
}

function isNegativeNumberDecimalMore(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeNumberDecimalMore, value, isGlobal)
}

function matchNegativeNumberDecimalMore(value, isAll = false) {
  return matchRegexp(regularExpression.negativeNumberDecimalMore, value, isAll)
}

function isNegativeNumberDecimalTwo(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeNumberDecimalTwo, value, isGlobal)
}

function matchNegativeNumberDecimalTwo(value, isAll = false) {
  return matchRegexp(regularExpression.negativeNumberDecimalTwo, value, isAll)
}

function isNegativeDecimalMore(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeDecimalMore, value, isGlobal)
}

function matchNegativeDecimalMore(value, isAll = false) {
  return matchRegexp(regularExpression.negativeDecimalMore, value, isAll)
}

function isNegativeDecimalTwo(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeDecimalTwo, value, isGlobal)
}

function matchNegativeDecimalTwo(value, isAll = false) {
  return matchRegexp(regularExpression.negativeDecimalTwo, value, isAll)
}

function isNegativeOrNumberDecimalMore(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeOrNumberDecimalMore, value, isGlobal)
}

function matchNegativeOrNumberDecimalMore(value, isAll = false) {
  return matchRegexp(regularExpression.negativeOrNumberDecimalMore, value, isAll)
}

function isNegativeOrNumberDecimalTwo(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeOrNumberDecimalTwo, value, isGlobal)
}

function matchNegativeOrNumberDecimalTwo(value, isAll = false) {
  return matchRegexp(regularExpression.negativeOrNumberDecimalTwo, value, isAll)
}

function isNegativeOrDecimalMore(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeOrDecimalMore, value, isGlobal)
}

function matchNegativeOrDecimalMore(value, isAll = false) {
  return matchRegexp(regularExpression.negativeOrDecimalMore, value, isAll)
}

function isNegativeOrDecimalTwo(value, isGlobal = true) {
  return testRegexp(regularExpression.negativeOrDecimalTwo, value, isGlobal)
}

function matchNegativeOrDecimalTwo(value, isAll = false) {
  return matchRegexp(regularExpression.negativeOrDecimalTwo, value, isAll)
}

function isQQ(value, isGlobal = true) {
  return testRegexp(regularExpression.qq, value, isGlobal)
}

function matchQQ(value, isAll = false) {
  return matchRegexp(regularExpression.qq, value, isAll)
}

function isZipCode(value, isGlobal = true) {
  return testRegexp(regularExpression.zipCode, value, isGlobal)
}

function matchZipCode(value, isAll = false) {
  return matchRegexp(regularExpression.zipCode, value, isAll)
}

function isChineseChar(value, isGlobal = true) {
  return testRegexp(regularExpression.chineseChar, value, isGlobal)
}

function matchChineseChar(value, isAll = false) {
  return matchRegexp(regularExpression.chineseChar, value, isAll)
}

function isIdCard(value, isGlobal = true) {
  return testRegexp(regularExpression.idCard, value, isGlobal)
}

function matchIdCard(value, isAll = false) {
  return matchRegexp(regularExpression.idCard, value, isAll)
}

function isEmail(value, isGlobal = true) {
  return testRegexp(regularExpression.email, value, isGlobal)
}

function matchEmail(value, isAll = false) {
  return matchRegexp(regularExpression.email, value, isAll)
}

function isImgUrl(value, isGlobal = true) {
  return testRegexp(regularExpression.imgUrl, value, isGlobal)
}

function matchImgUrl(value, isAll = false) {
  return matchRegexp(regularExpression.imgUrl, value, isAll)
}

function isVideoUrl(value, isGlobal = true) {
  return testRegexp(regularExpression.videoUrl, value, isGlobal)
}

function matchVideoUrl(value, isAll = false) {
  return matchRegexp(regularExpression.videoUrl, value, isAll)
}

function isUrl(value, isGlobal = true) {
  return testRegexp(regularExpression.url, value, isGlobal)
}

function matchUrl(value, isAll = false) {
  return matchRegexp(regularExpression.url, value, isAll)
}

function isIpv4(value, isGlobal = true) {
  return testRegexp(regularExpression.ipv4, value, isGlobal)
}

function matchIpv4(value, isAll = false) {
  return matchRegexp(regularExpression.ipv4, value, isAll)
}

function isIpv6(value, isGlobal = true) {
  return testRegexp(regularExpression.ipv6, value, isGlobal)
}

function matchIpv6(value, isAll = false) {
  return matchRegexp(regularExpression.ipv6, value, isAll)
}

function matchRegexp(regexp, value, isAll = false) {
  let flag = ''
  if (isAll) {
    flag = 'g'
  }
  const result = value.match(new RegExp(regexp, flag))
  if (isAll) {
    return result
  }
  return (result || [''])[0]
}

function testRegexp(regexp, value, isGlobal = true) {
  if (isGlobal) {
    regexp = '^' + regexp + '$'
  }
  return new RegExp(regexp).test(value)
}

const regluarUtil = {
  isMobile,
  matchMobile,
  isPhone,
  matchPhone,
  isPositiveNumber,
  matchPositiveNumber,
  isNaturalNumber,
  matchNaturalNumber,
  isNegativeNumber,
  matchNegativeNumber,
  isInteger,
  matchInteger,
  isNumberDecimalMore,
  matchNumberDecimalMore,
  isNumberDecimalTwo,
  matchNumberDecimalTwo,
  isDecimalMore,
  matchDecimalMore,
  isDecimalTwo,
  matchDecimalTwo,
  isNegativeNumberDecimalMore,
  matchNegativeNumberDecimalMore,
  isNegativeNumberDecimalTwo,
  matchNegativeNumberDecimalTwo,
  isNegativeDecimalMore,
  matchNegativeDecimalMore,
  isNegativeDecimalTwo,
  matchNegativeDecimalTwo,
  isNegativeOrNumberDecimalMore,
  matchNegativeOrNumberDecimalMore,
  isNegativeOrNumberDecimalTwo,
  matchNegativeOrNumberDecimalTwo,
  isNegativeOrDecimalMore,
  matchNegativeOrDecimalMore,
  isNegativeOrDecimalTwo,
  matchNegativeOrDecimalTwo,
  isQQ,
  matchQQ,
  isZipCode,
  matchZipCode,
  isChineseChar,
  matchChineseChar,
  isIdCard,
  matchIdCard,
  isEmail,
  matchEmail,
  isImgUrl,
  matchImgUrl,
  isVideoUrl,
  matchVideoUrl,
  isUrl,
  matchUrl,
  isIpv4,
  matchIpv4,
  isIpv6,
  matchIpv6
}

export default regluarUtil
