import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/islandDetail',
      name: 'islandDetail',
      component: () => import('../views/IslandDetail.vue'),
    },
    {
      path: '/islandList',
      name: 'islandDlist',
      component: () => import('../views/Islandlist.vue'),
    },
  ],
})

export default router
