import { createRouter, createWebHistory } from 'vue-router'
import utils from '@/utils/localStorage'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/login',
    name: 'Login',
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

router.beforeEach((to) => {
  //除了login页面，想要访问必须携带token，否则强制跳转到login页面
  if (to.path !== '/login') {
    const token = utils.get('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
