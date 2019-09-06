import { regularExpression } from './regular-expression.js';

function isMobile(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.mobile, value, isGlobal);
}

function matchMobile(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.mobile, value, isAll);
}

function isPhone(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.phone, value, isGlobal);
}

function matchPhone(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.phone, value, isAll);
}

function isPositiveNumber(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.positiveNumber, value, isGlobal);
}

function matchPositiveNumber(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.positiveNumber, value, isAll);
}

function isNaturalNumber(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.naturalNumber, value, isGlobal);
}

function matchNaturalNumber(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.naturalNumber, value, isAll);
}

function isNegativeNumber(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeNumber, value, isGlobal);
}

function matchNegativeNumber(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeNumber, value, isAll);
}

function isInteger(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.integer, value, isGlobal);
}

function matchInteger(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.integer, value, isAll);
}

function isNumberDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.numberDecimalMore, value, isGlobal);
}

function matchNumberDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.numberDecimalMore, value, isAll);
}

function isNumberDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.numberDecimalTwo, value, isGlobal);
}

function matchNumberDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.numberDecimalTwo, value, isAll);
}

function isDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.decimalMore, value, isGlobal);
}

function matchDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.decimalMore, value, isAll);
}

function isDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.decimalTwo, value, isGlobal);
}

function matchDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.decimalTwo, value, isAll);
}

function isNegativeNumberDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeNumberDecimalMore, value, isGlobal);
}

function matchNegativeNumberDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeNumberDecimalMore, value, isAll);
}

function isNegativeNumberDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeNumberDecimalTwo, value, isGlobal);
}

function matchNegativeNumberDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeNumberDecimalTwo, value, isAll);
}

function isNegativeDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeDecimalMore, value, isGlobal);
}

function matchNegativeDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeDecimalMore, value, isAll);
}

function isNegativeDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeDecimalTwo, value, isGlobal);
}

function matchNegativeDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeDecimalTwo, value, isAll);
}

function isNegativeOrNumberDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeOrNumberDecimalMore, value, isGlobal);
}

function matchNegativeOrNumberDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeOrNumberDecimalMore, value, isAll);
}

function isNegativeOrNumberDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeOrNumberDecimalTwo, value, isGlobal);
}

function matchNegativeOrNumberDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeOrNumberDecimalTwo, value, isAll);
}

function isNegativeOrDecimalMore(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeOrDecimalMore, value, isGlobal);
}

function matchNegativeOrDecimalMore(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeOrDecimalMore, value, isAll);
}

function isNegativeOrDecimalTwo(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.negativeOrDecimalTwo, value, isGlobal);
}

function matchNegativeOrDecimalTwo(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.negativeOrDecimalTwo, value, isAll);
}

function isQQ(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.qq, value, isGlobal);
}

function matchQQ(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.qq, value, isAll);
}

function isZipCode(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.zipCode, value, isGlobal);
}

function matchZipCode(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.zipCode, value, isAll);
}

function isChineseChar(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.chineseChar, value, isGlobal);
}

function matchChineseChar(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.chineseChar, value, isAll);
}

function isIdCard(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.idCard, value, isGlobal);
}

function matchIdCard(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.idCard, value, isAll);
}

function isEmail(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.email, value, isGlobal);
}

function matchEmail(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.email, value, isAll);
}

function isImgUrl(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.imgUrl, value, isGlobal);
}

function matchImgUrl(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.imgUrl, value, isAll);
}

function isVideoUrl(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.videoUrl, value, isGlobal);
}

function matchVideoUrl(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.videoUrl, value, isAll);
}

function isUrl(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.url, value, isGlobal);
}

function matchUrl(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.url, value, isAll);
}

function isIpv4(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.ipv4, value, isGlobal);
}

function matchIpv4(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.ipv4, value, isAll);
}

function isIpv6(value) {
  var isGlobal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return testRegexp(regularExpression.ipv6, value, isGlobal);
}

function matchIpv6(value) {
  var isAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return matchRegexp(regularExpression.ipv6, value, isAll);
}

function matchRegexp(regexp, value) {
  var isAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var flag = '';
  if (isAll) {
    flag = 'g';
  }
  var result = value.match(new RegExp(regexp, flag));
  if (isAll) {
    return result;
  }
  return (result || [''])[0];
}

function testRegexp(regexp, value) {
  var isGlobal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isGlobal) {
    regexp = '^' + regexp + '$';
  }
  return new RegExp(regexp).test(value);
}

var regluarUtil = {
  isMobile: isMobile,
  matchMobile: matchMobile,
  isPhone: isPhone,
  matchPhone: matchPhone,
  isPositiveNumber: isPositiveNumber,
  matchPositiveNumber: matchPositiveNumber,
  isNaturalNumber: isNaturalNumber,
  matchNaturalNumber: matchNaturalNumber,
  isNegativeNumber: isNegativeNumber,
  matchNegativeNumber: matchNegativeNumber,
  isInteger: isInteger,
  matchInteger: matchInteger,
  isNumberDecimalMore: isNumberDecimalMore,
  matchNumberDecimalMore: matchNumberDecimalMore,
  isNumberDecimalTwo: isNumberDecimalTwo,
  matchNumberDecimalTwo: matchNumberDecimalTwo,
  isDecimalMore: isDecimalMore,
  matchDecimalMore: matchDecimalMore,
  isDecimalTwo: isDecimalTwo,
  matchDecimalTwo: matchDecimalTwo,
  isNegativeNumberDecimalMore: isNegativeNumberDecimalMore,
  matchNegativeNumberDecimalMore: matchNegativeNumberDecimalMore,
  isNegativeNumberDecimalTwo: isNegativeNumberDecimalTwo,
  matchNegativeNumberDecimalTwo: matchNegativeNumberDecimalTwo,
  isNegativeDecimalMore: isNegativeDecimalMore,
  matchNegativeDecimalMore: matchNegativeDecimalMore,
  isNegativeDecimalTwo: isNegativeDecimalTwo,
  matchNegativeDecimalTwo: matchNegativeDecimalTwo,
  isNegativeOrNumberDecimalMore: isNegativeOrNumberDecimalMore,
  matchNegativeOrNumberDecimalMore: matchNegativeOrNumberDecimalMore,
  isNegativeOrNumberDecimalTwo: isNegativeOrNumberDecimalTwo,
  matchNegativeOrNumberDecimalTwo: matchNegativeOrNumberDecimalTwo,
  isNegativeOrDecimalMore: isNegativeOrDecimalMore,
  matchNegativeOrDecimalMore: matchNegativeOrDecimalMore,
  isNegativeOrDecimalTwo: isNegativeOrDecimalTwo,
  matchNegativeOrDecimalTwo: matchNegativeOrDecimalTwo,
  isQQ: isQQ,
  matchQQ: matchQQ,
  isZipCode: isZipCode,
  matchZipCode: matchZipCode,
  isChineseChar: isChineseChar,
  matchChineseChar: matchChineseChar,
  isIdCard: isIdCard,
  matchIdCard: matchIdCard,
  isEmail: isEmail,
  matchEmail: matchEmail,
  isImgUrl: isImgUrl,
  matchImgUrl: matchImgUrl,
  isVideoUrl: isVideoUrl,
  matchVideoUrl: matchVideoUrl,
  isUrl: isUrl,
  matchUrl: matchUrl,
  isIpv4: isIpv4,
  matchIpv4: matchIpv4,
  isIpv6: isIpv6,
  matchIpv6: matchIpv6
};

export default regluarUtil;