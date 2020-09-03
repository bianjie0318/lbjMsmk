import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import './http/request'

import * as filters from './filters'

Vue.prototype.$http = instance

// 封装的拍照

const instance = axios.create({
  baseURL:'https://www.365msmk.com/api/app',
  headers:{
    'devicetype':'H5'
  }
})
instance.interceptors.request.use(function (config) {
  //在发送之前做些什么
      config.headers['authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vd3d3LjM2NW1zbWsuY29tL2FwaS9hcHAvbG9naW4iLCJpYXQiOjE1OTg1MjQ5MzEsImV4cCI6MTU5ODgyNzMzMSwibmJmIjoxNTk4NTI0OTMxLCJqdGkiOiJGQXFVS3RxWmdvUkNteEI1Iiwic3ViIjoxMDQyLCJwcnYiOiI5ZjFmZTllMGRmZmJlNDQ0MmRjNzgzMTA3NTFmNTkxY2Y0ZDE0MDIwIn0.lzWqgbnGxqiQUA4hDiHN3FXpI_qmRQ36kHqsLkg23JA`
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});










import './public/css/reset.css'
// import './utils/rem.js'

Object.keys(filters).forEach(key => { 

  // console.log('key:',key)

Vue.filter(key,filters[key])


})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
