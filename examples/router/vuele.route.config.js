import navConfig from './vuele.nav.config'

const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`../pages/zh-CN/${name}.vue`)),
    'zh-CN')
  }
}

const load = function(lang, path) {
  return LOAD_MAP[lang](path)
}

const LOAD_ELEMENT_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../docs/vuele/zh-CN${path}.md`)),
    'zh-CN')
  }
}

const loadElementDocs = function(lang, path) {
  return LOAD_ELEMENT_DOCS_MAP[lang](path)
}

const registerElementRoute = (navConfig) => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/vuele/${lang}/component`,
      redirect: `/vuele/${lang}/component/installation`,
      component: load(lang, 'vuele-component'),
      children: []
    })
    navs.forEach(nav => {
      if (nav.href) return
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index)
          })
        })
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index)
        })
      } else {
        addRoute(nav, lang, index)
      }
    })
  })
  function addRoute(page, lang, index) {
    const component = page.path === '/vuele-changelog'
      ? load(lang, 'vuele-changelog')
      : loadElementDocs(lang, page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'vuele-component-' + lang + (page.title || page.name),
      component: component.default || component
    }
    route[index].children.push(child)
  }
  return route
}

let route = registerElementRoute(navConfig)
export default route
