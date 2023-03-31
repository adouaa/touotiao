import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/notfound/notfound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router