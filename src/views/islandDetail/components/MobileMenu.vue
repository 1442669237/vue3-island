<template>
  <!-- 移动端菜单 -->
  <div class="mobile-menu" :class="{ active: isActive }">
    <div class="flex justify-between items-center mb-8">
      <span class="text-xl font-bold text-primary-blue">海岛度假</span>
      <button class="text-gray-500 text-2xl" @click="$emit('close')">
        <i class="iconfont icon-times"></i>
      </button>
    </div>
    <div class="flex flex-col space-y-4">
      <a href="#" class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100">首页</a>
      <a href="#" class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100">目的地</a>
      <a href="#" class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100">酒店</a>
      <a href="#" class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100">特惠</a>
      <a href="#" class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100">攻略</a>
    </div>
  </div>

  <!-- 菜单遮罩层 -->
  <div class="menu-overlay" :class="{ active: isActive }" @click="$emit('close')"></div>
</template>

<script setup>
const props = defineProps({ isActive: { type: Boolean, default: false } })
</script>

<style scoped>
/* 移动端菜单样式，复制父组件定义以保证还原 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 50;
  transition: right 0.3s ease;
  box-shadow: -10px 0 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}
.mobile-menu.active {
  right: 0;
}
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}
.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}
</style>