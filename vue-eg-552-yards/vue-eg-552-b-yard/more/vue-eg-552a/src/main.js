
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// require('axios-debug-log');

// dotenv not needed as vue does this.
//
// require("dotenv").config();
// require('dotenv').config({ debug: process.env.DEBUG });
// const result = dotenv.config()
// if (result.error) {
//   throw result.error
// }
// console.log(result.parsed)

// I didn't keep  this 
//
// import axios from "axios";
// const api = axios.create({
//   baseURL: process.env.BACKEND_URL // or process.env.BASE_URL if not using CRA
// });
// export default api;



import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

AxiosLogger.setGlobalConfig({
  prefixText: 'your prefix',
  dateFormat: 'HH:MM:ss',
  status: true,
  headers: true,
  method: true,
  data: true,
});

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);



console.log('m.l.49');
console.log(process.env.VUE_APP_BACKEND_URL);
console.log(JSON.stringify(process.env, null, 2));


Vue.config.productionTip = false
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
