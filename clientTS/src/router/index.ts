import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AuthRoutes from "@/modules/Auth/Routes/index";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL
})

export default router
