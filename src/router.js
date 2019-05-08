import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
import About from './views/About.vue'
import Doc from './views/Doc.vue'
import Docs from './views/Docs.vue'

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
      path: '/cxd/about',
      name: 'about',
      component: About
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
      path: '/test/:id',
      name: 'test',
      component: Doc
    },
    {
      path: '/docs/:id',
      name: 'docs',
      component: Docs
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Doc
    },
  ]
})
