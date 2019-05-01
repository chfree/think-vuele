import langs from '../i18n/route'
import navConfig from './nav.config'

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
      r(require(`../docs/element/zh-CN${path}.md`)),
    'zh-CN')
  }
}

const loadElementDocs = function(lang, path) {
  return LOAD_ELEMENT_DOCS_MAP[lang](path)
}

const registerRoute = (navConfig) => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/element/${lang}/component`,
      redirect: `/element/${lang}/component/installation`,
      component: load(lang, 'element-component'),
      children: []
    })
    route.push({
      path: `/${lang}/custom`,
      component: load(lang, 'custom-component'),
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
    const component = page.path === '/element-changelog'
      ? load(lang, 'element-changelog')
      : loadElementDocs(lang, page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    }
    route[index].children.push(child)
  }
  console.log(route, 'route')
  return route
}

let route = registerRoute(navConfig)

const generateMiscRoutes = function(lang) {
  let indexRoute = {
    path: `/${lang}`, // 首页
    meta: { lang },
    name: 'home' + lang,
    component: load(lang, 'index')
  }

  return [indexRoute]
}

langs.forEach(lang => {
  route = route.concat(generateMiscRoutes(lang.lang))
})

let defaultPath = '/zh-CN'

route = route.concat([{
  path: '/',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}])
export default route
