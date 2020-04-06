import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { o_O, USER_TOKEN } from '../Helpers/index'
import { Authlogout } from '../Services/AuthService'
import { clearStorage, getInStorage } from '../Helpers/localStorage'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async (to, from, next) => {
      let token = await getInStorage(USER_TOKEN)
      if(!token) next('/login')
      // else if(isEmpty(user)) next('/404')
      else next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: async (to, from, next) => {
      let token = await getInStorage(USER_TOKEN)
      if (token) next('/')
      else next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: async (to, from, next) => {
      let token = await getInStorage(USER_TOKEN)
      if (token) next('/')
      else next()
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: "/logout",
    name: "Logout",
    beforeEnter: async (to, from, next) => {
        let [err, data] = await o_O(
            Authlogout()
        );

        if(data && data.status === 200){
            await clearStorage();
            next('/login')
            location.reload();
        }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
