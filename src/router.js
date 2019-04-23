import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
import Doc from './views/Doc.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/projects/:id',
      name: 'projects',
      component: Doc
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Doc
    },
  ]
})
