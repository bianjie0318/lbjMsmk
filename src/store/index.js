import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate'
// import { plugins } from '../../.postcssrc';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: '0',
    ser: null,
    token: localStorage.getItem('remember_token') ? localStorage.getItem('remember_token') : '',   // token
  },
  getters: {
    getLogin(state) {   // 获取本地存储的登录信息
      if (!state.token) {
        state.token = JSON.parse(localStorage.getItem(key))
      }
      return state.token
    }
  },
  mutations: {
    $_setToken(state, value) { // 设置存储token
      state.token = value;
      localStorage.setItem('token', value);
    },
    $_removeStorage(state, value) {  // 删除token
      state.token = value
      localStorage.removeItem('token',value);
    },
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()]
});
