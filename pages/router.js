import VueRouter from 'vue-router'

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {path: '/', component: () => import('./page/Index')},
    {path: '/guide', component: () => import('./page/Guide')},
    {path: '/component', component: () => import('./page/Component')}
  ]
})
