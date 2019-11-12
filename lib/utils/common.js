export function isEmpty(obj) {
  return obj == null || obj === undefined || obj === '';
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object array]';
}

export function isString(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object string]';
}

export function isNumber(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object number]';
}

export function isBoolean(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object boolean]';
}

export function isUndefined(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object undefined]';
}

export function isNull(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object null]';
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object object]';
}

export function isFunction(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object function]';
}

export function isDate(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object date]';
}

export function isEmptyObject(obj) {
  var t;
  for (t in obj) {
    return !1;
  }
  return !0;
}