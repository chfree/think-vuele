/**
 * 由一个组件，向下找到最近的指定组件
 * @param {组件上下文对象} context
 * @param {组件名称} componentName
 */
function findComponentDownward(context, componentName) {
  var childrens = context.$children;
  var children = null;

  if (childrens.length) {
    for (var i = 0; i < childrens.length; i++) {
      var child = childrens[i];
      var name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = this.findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}
export { findComponentDownward };

// 由一个组件，向上找到最近的指定组件
function findComponentUpward(context, componentName) {
  var parent = context.$parent;
  var name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

export { findComponentUpward };

// 由一个组件，向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
  var parents = [];
  var parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}
export { findComponentsUpward };

// 由一个组件，向下找到所有指定的组件
function findComponentsDownward(context, componentName) {
  return context.$children.reduce(function (components, child) {
    if (child.$options.name === componentName) components.push(child);
    var foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

export { findComponentsDownward };

// 由一个组件，找到指定组件的兄弟组件
// exceptMe，是否把本身除外
function findBrothersComponents(context, componentName) {
  var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var res = context.$parent.$children.filter(function (item) {
    return item.$options.name === componentName;
  });
  var index = res.findIndex(function (item) {
    return item._uid === context._uid;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}
export { findBrothersComponents };