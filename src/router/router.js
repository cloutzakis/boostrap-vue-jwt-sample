import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import home from '@/components/home/home.vue'
import login from '@/components/auth/login/login.vue'
import register from '@/components/auth/register/register.vue'

Vue.use(Router)

// Navigation Guard (Pages)
// authorized: Only an authorized user can visit
// unauthorized: Only a guest can visit (login, register)
// (none) Visible to all
const routes = [{
  path: '/',
  redirect: '/auth/login'
},
{
  path: '/home',
  name: 'home',
  component: home,
  meta: {
    authorized: true
  }
},
{
  path: '/auth/login',
  name: 'login',
  component: login,
  meta: {
    unauthorized: true
  }
},
{
  path: '/auth/register',
  name: 'register',
  component: register,
  meta: {
    unauthorized: true
  }
}
]

var router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.unauthorized) &&
    store.getters.isAuthenticated
  ) {
    next({
      path: '/home'
    })
  } else if (
    to.matched.some(record => record.meta.authorized) &&
    !store.getters.isAuthenticated
  ) {
    next({
      path: '/auth/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
