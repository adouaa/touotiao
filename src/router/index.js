import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/layout.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: 'question',
        name: 'question',
        component: () => import('@/views/question/question.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/video.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/my.vue')
      }
    ]
  },
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