// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// require("dotenv").config();
// require('dotenv').config({ debug: process.env.DEBUG });
// const result = dotenv.config()
// if (result.error) {
//   throw result.error
// }
// console.log(result.parsed)

import axios from "axios";
// const api = axios.create({
//   baseURL: process.env.BACKEND_URL // or process.env.BASE_URL if not using CRA
// });
// export default api;
console.log('m.l.22');
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
