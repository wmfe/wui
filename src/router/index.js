import Vue from 'vue'
import VueRouter from 'vue-router'

import WMkit from 'package/index'
import NavConfig from '@/nav.config.json'

Vue.use(VueRouter)

Vue.use(WMkit)

let RounterConfig = []

// 匹配导航路由
NavConfig.forEach(v => {
  RounterConfig.push({
    path: v.path,
    name: v.name,
    component: require(`example/${v.component}`)
  })
})

export default new VueRouter({
  routes: RounterConfig
})
