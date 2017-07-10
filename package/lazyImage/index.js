import LazyImage from './src/LazyImage.vue'

LazyImage.install = function (Vue) {
  Vue.component(LazyImage.name, LazyImage)
}

export default LazyImage
