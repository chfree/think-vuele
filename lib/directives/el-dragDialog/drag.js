export default {
  bind: function bind(el, binding, vnode) {
    var dialogHeaderEl = el.querySelector('.el-dialog__header');
    var dragDom = el.querySelector('.el-dialog');
    dialogHeaderEl.style.cssText += ';cursor:move;';
    // dragDom.style.cssText += ''
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    var getStyle = function () {
      if (window.document.currentStyle) {
        return function (dom, attr) {
          return dom.currentStyle[attr];
        };
      } else {
        return function (dom, attr) {
          return getComputedStyle(dom, false)[attr];
        };
      }
    }();

    dialogHeaderEl.onmousedown = function (e) {
      // 鼠标按下，计算当前元素距离可视区的距离
      var disX = e.clientX - dialogHeaderEl.offsetLeft;
      var disY = e.clientY - dialogHeaderEl.offsetTop;

      var dragDomWidth = dragDom.offsetWidth;
      var dragDomHeight = dragDom.offsetHeight;

      var screenWidth = document.body.clientWidth;
      var screenHeight = document.body.clientHeight;

      var minDragDomLeft = dragDom.offsetLeft;
      var maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

      var minDragDomTop = dragDom.offsetTop;
      var maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;

      // 获取到的值带px 正则匹配替换
      var styL = getStyle(dragDom, 'left');
      var styT = getStyle(dragDom, 'top');
      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100); // eslint-disable-line
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100); // eslint-disable-line
      } else {
        styL = +styL.replace(/\px/g, '');
        styT = +styT.replace(/\px/g, '');
      }

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        var left = e.clientX - disX;
        var top = e.clientY - disY;

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        dragDom.style.cssText += ';left:' + (left + styL) + 'px;top:' + (top + styT) + 'px;';

        // emit onDrag event
        vnode.child.$emit('dragDialog');
      };

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
};