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
      component: () => import('../views/islandList.vue'),
    },
    {
      path: '/liveaboardDetail/:boatId',
      name: 'liveaboardDetail',
      component: () => import('../views/liveaboard/boatDetail/index.vue'),
    },
    {
      path: '/liveaboard',
      name: 'liveaboard',
      component: () => import('../views/liveaboard/boatList/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (performance.navigation.type === 1) {
      // 页面刷新
      return { top: 0 } // 不使用 savedPosition，滚动到顶部
    }
    if (savedPosition) {
      return savedPosition // 使用保存的滚动位置
    }

    return { top: 0 } // 默认滚动到页面顶部
  },
})

export default router
