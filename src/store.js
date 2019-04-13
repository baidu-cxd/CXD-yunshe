import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '/',
    scroll: 0,  //滚动条位置
    fullPage: {
      max : 0,
      now : 0
    }, //全屏滚动页面当前位置
    isShowHeader: true,    //是否有顶部导航栏
    isGobalNavOpen: false, //是否打开导航
  },
  mutations: {
  },
  actions: {

  }
})
