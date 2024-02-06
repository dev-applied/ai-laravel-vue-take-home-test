import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import('@/pages/SearchPage.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/pages/WishlistPage.vue')
    }
  ]
})

export default router
