import Vue from 'vue'
import VueRouter from 'vue-router'
import navConfig from './nav.config.json'

Vue.use(VueRouter)
let rounterConfig = []

// 匹配导航路由
navConfig.forEach(v => {
  rounterConfig.push({
    path: v.path,
    name: v.name,
    component: require(`example/${v.component}`)
  })
})

export default new VueRouter({
  routes: rounterConfig
})
