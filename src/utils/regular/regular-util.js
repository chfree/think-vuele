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
  matchInteger
}

export default regluarUtil
