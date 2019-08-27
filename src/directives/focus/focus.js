export default {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.querySelector('.el-input__inner').focus()
  }
}
