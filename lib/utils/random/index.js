import { isEmpty } from '../common';
import { uuid, isUUID } from './uuid';
function next() {
  return Math.random();
}
// 随机范围
function nextInt(min, max) {
  if (isEmpty(min) && isEmpty(max)) {
    return parseInt(next().toString().replace('0.', ''), 10);
  }
  // 小于max
  if (!isEmpty(min) && isEmpty(max)) {
    return parseInt(next() * min, 10);
  }
  // 大于等于min 小于max
  if (!isEmpty(min) && !isEmpty(max)) {
    return parseInt(next() * (max - min) + min, 10);
  }
}

// 随机位数
function nextLength(min, max) {
  if (isEmpty(min) && isEmpty(max)) {
    min = nextInt(1, 24);
  }
  // 小于max
  if (!isEmpty(min) && isEmpty(max)) {
    if (min === 1) {
      return nextInt(10);
    }
    return nextInt(Math.pow(10, min - 1), Math.pow(10, min));
  }
  // 大于等于min 小于等于max
  if (!isEmpty(min) && !isEmpty(max)) {
    if (min === 1) {
      return nextInt(0, Math.pow(10, max));
    }
    return nextInt(Math.pow(10, min - 1), Math.pow(10, max));
  }
}

function nextFloat(leftLen, rightLen) {
  var leftNum = 0;
  var rightNum = 0;
  if (isEmpty(leftLen)) {
    leftNum = nextLength(nextInt(1, 10));
  } else {
    leftNum = nextLength(leftLen);
  }

  if (isEmpty(rightLen)) {
    rightLen = 2;
  }
  rightNum = nextLength(rightLen);
  return parseFloat(leftNum + '.' + rightNum);
}

var random = {
  next: next,
  nextInt: nextInt,
  nextLength: nextLength,
  nextFloat: nextFloat,
  isUUID: isUUID,
  uuid: uuid
};

export default random;