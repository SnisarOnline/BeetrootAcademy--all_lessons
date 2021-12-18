import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/base-functional',
    name: 'Base functional',
    component: () => import('./views/base-functional/functional') // динамическая загрузка компонета
  },
  {
    path: '/form',
    name: 'simple form',
    component: () => import('./views/form/form.vue') // динамическая загрузка компонета
  },
  {
    path: '*',
    redirect: '/form',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
