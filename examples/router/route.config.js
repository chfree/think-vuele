import langs from '../i18n/route'

const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`../pages/zh-CN/${name}.vue`)),
    'zh-CN')
  }
}

const load = function (lang, path) {
  return LOAD_MAP[lang](path)
}

let route = []

const generateMiscRoutes = function (lang) {
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
