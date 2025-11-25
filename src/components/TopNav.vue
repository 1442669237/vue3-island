<template>
  <!-- 导航栏 -->
  <nav
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4"
    :class="{ 'nav-scrolled': navScrolled }"
  >
    <div class="container mx-auto text-white px-4 flex items-center justify-between">
      <div class="flex items-center">
        <a href="#" class="text-2xl font-bold">
          <i class="iconfont icon-palm-tree mr-2"></i>{{ title }}
        </a>
      </div>

      <!-- 桌面端导航 -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="hover:text-light-sand transition-colors"
          >{{ item.name }}</a
        >
      </div>

      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="hover:text-light-sand transition-colors">
          <i class="iconfont icon-sousuo text-lg font-bold"></i>
        </a>
        <a href="#" class="hover:text-light-sand transition-colors">
          <i class="iconfont icon-user-circle text-lg"></i>
        </a>
      </div>

      <!-- 移动端菜单按钮 -->
      <button class="md:hidden text-2xl focus:outline-none" @click="$emit('openMenu')">
        <i class="iconfont icon-bars"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  navScrolled: { type: Boolean, default: false },
  title: { type: String, default: '海岛度假' },
  type: { type: Number, default: null },
})
let navItems = [
  { name: '首页', href: '/', type: 1 },
  { name: '海岛度假', href: '#island', type: 2 },
  { name: '精选船宿', href: '#boat', type: 3 },
  { name: '酒店', href: '#hotel', type: 4 },
  { name: '攻略', href: '#guide', type: 5 },
]
let currentType = ref(1)
</script>

<style scoped>
/* 导航栏滚动后的样式，复制父组件定义以保证还原 */
.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.nav-scrolled a,
.nav-scrolled i,
.nav-scrolled .text-white {
  color: #334155 !important;
}
.nav-scrolled a:hover {
  color: var(--primary-blue) !important;
}
</style>
