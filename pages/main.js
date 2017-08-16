import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import './app'
Vue.use(VueRouter)

let app = new Vue({
  el: '#app',
  router,
  template: '<App></App>'
})
