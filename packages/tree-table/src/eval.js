'use strict'
import Vue from 'vue'
export default function treeToArray (data, expandAll, parent = null, level = null) {
  let tmp = []
  let index = 0
  Array.from(data).forEach(function (record) {
    if (record.hidden) {
      return
    }
    index++
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', record.expand | expandAll)
    }
    let _level = 1
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    // 如果有父元素
    if (parent) {
      Vue.set(record, 'parent', parent)

      Vue.set(record, 'hier', parent.hier + '.' + index)
    } else {
      Vue.set(record, 'hier', index)
    }
    tmp.push(record)
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, expandAll, record, _level)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}
