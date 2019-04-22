import Vue from 'vue'
import "nprogress/nprogress.css"
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'
import NProgress from "nprogress"
import axios from 'axios'
import qs from 'qs'

// 加载进度条控制

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


// 滚动条控制

Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      wheelScrollDuration: 1,
    },
    scrollPanel: {
      easing: 'easeInOutQuart',
      scrollingX: false,
    },
    rail: {
    },
    bar: {
      // onlyShowBarOnScroll: false,
      background: '#000',
      size: '6px',
    }
  }, 
});

Vue.config.productionTip = false

Vue.prototype.$axios = axios 
Vue.prototype.qs = qs   

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
