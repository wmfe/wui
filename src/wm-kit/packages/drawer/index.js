import drawer from './src/drawer.vue'

drawer.install = function (Vue) {
  Vue.component(drawer.name, drawer)
}

export default drawer
