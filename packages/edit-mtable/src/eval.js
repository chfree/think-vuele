'use strict'
import Vue from 'vue'
export default function formatData(data) {
  var index = 0
  Array.from(data).forEach((row) => {
    Vue.set(row, 'index', index)
    Vue.set(row, 'disabled', row.disabled)
    index++
  })
  return data
}
