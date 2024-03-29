import Vue from "vue";
import Router from "vue-router";
import BookList from "@/components/BookList";
import BookCreate from "@/components/BookCreate";
import Login from "@/components/Login";
import Register from "@/components/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "BookList",
      component: BookList
    },
    {
      path: "/bookcreate",
      name: "BookCreate",
      component: BookCreate
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
});
