import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '/',
    scroll: 0,
    isGobalNavOpen: false,
    hasFullPageScroll: false,
    overFullPageScroll: false,
    screenHeight: true,
  },
  mutations: {

  },
  actions: {

  }
})
