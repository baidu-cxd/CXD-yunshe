import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll';

Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      wheelScrollDuration: 800,
    },
    scrollPanel: {
      easing: 'easeInOutQuad'
    },
    rail: {},
    bar: {
      // onlyShowBarOnScroll: false,
      background: '#000',
      size: '6px',
    }
  }, 
  name: 'cxdScroll' // 在这里自定义组件名字，默认是vueScroll
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
