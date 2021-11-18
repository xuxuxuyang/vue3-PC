import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
