import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import PouchDB from "pouchdb-browser";
// import lf from "pouchdb-find";
// import plf from "pouchdb-live-find";
// PouchDB.plugin(lf);
// PouchDB.plugin(plf);
PouchDB.plugin(require("pouchdb-find"));
PouchDB.plugin(require("pouchdb-live-find"));
PouchDB.plugin(require("pouchdb-authentication"));

// Vue.use(require("pouchVue"), {
//   pouch: PouchDB,
//   defaultDB: "config"
// });

Vue.use("pouchVue", {
  pouch: PouchDB, // optional if `PouchDB` is available on the global object
  defaultDB: "remoteDbName", // this is used as a default connect/disconnect database
  debug: "*" // optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings
});

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

let id = null;
let _id = null;

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditComponent
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount("#app");
