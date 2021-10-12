import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/index.vue'),
    layout: 'default'
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth'
    },
    component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth'
    },
    component: () => import(/* webpackChunkName: "register" */ '@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
