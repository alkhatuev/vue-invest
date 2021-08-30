import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import History from '../views/History.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: Login
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main'},
      component: History
    }
  ]
})