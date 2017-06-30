import uppercamelcase from 'uppercamelcase'

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext)
}
const modules = requireAll(require.context(
  './packages',
  true,
  /^((?!node_modules|lib|toast|indicator|message-box|infinite-scroll|lazyload).)*[^_]index\.js$/)
)

const components = {}

modules.forEach((v, i) => {
  const tag = Object.keys(v)[0]
  const name = uppercamelcase(v[tag].name.replace(/wm-/, ''))
  components[name] = v[tag]
})

export default Object.assign({}, {
  install (Vue) {
    modules.forEach((v, i) => {
      const tag = Object.keys(v)[0]
      Vue.component(v[tag].name, v[tag])
    })
  }
}, components)
