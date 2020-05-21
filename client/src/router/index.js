import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthRoutes from '../modules/Auth/Routes/index'

Vue.use(VueRouter)

const routes = [
  ...AuthRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
