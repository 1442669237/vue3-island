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
      path: '/islandDetail/:islandId',
      name: 'islandDetail',
      component: () => import('../views/islandDetail/index.vue'),
    },
    {
      path: '/islandList',
      name: 'islandList',
      component: () => import('../views/IslandList.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
