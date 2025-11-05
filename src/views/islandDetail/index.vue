<template>
  <div class="nautilus-page">
    <!-- 导航栏组件 -->
    <TopNav :navScrolled="navScrolled" @openMenu="openMenu" />

    <!-- 移动端菜单组件（含遮罩） -->
    <MobileMenu :isActive="isMenuActive" @close="closeMenu" />

    <!-- 主视觉区 -->
    <HeroSection :island-detail="islandDetail" />

    <!-- 主要内容区 -->
    <main class="container mx-auto px-4 py-16">
      <!-- 信息展示区 -->
      <section id="details" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- 左侧内容 -->
        <div class="lg:col-span-2 space-y-12">
          <!-- 海岛简介 -->
          <IslandIntro />

          <!-- 特色标签 -->
          <FeaturesSection />

          <!-- 房型展示 -->
          <RoomsSection />

          <!-- 餐饮体验 -->
          <DiningSection />

          <!-- 交通指南 -->
          <TransportGuide />

          <!-- 用户评价 -->
          <ReviewsSection />
        </div>

        <!-- 右侧预订栏 -->
        <div class="lg:col-span-1">
          <BookingBox />
        </div>
      </section>

      <!-- 消费明细 -->
      <PricingTable />

      <!-- 常见问题 -->
      <FAQSection />
    </main>

    <!-- 底部信息区 -->
    <FooterSection />
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { fetchIslandHotel, fetchIslandDine, fetchIslandById } from '@/api/islandDetail.js'
import HeroSection from './components/HeroSection.vue'
import TopNav from './components/TopNav.vue'
import MobileMenu from './components/MobileMenu.vue'
import BookingBox from './components/BookingBox.vue'
import RoomsSection from './components/RoomsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import DiningSection from './components/DiningSection.vue'
import TransportGuide from './components/TransportGuide.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import PricingTable from './components/PricingTable.vue'
import FAQSection from './components/FAQSection.vue'
import FooterSection from './components/FooterSection.vue'
import IslandIntro from './components/IslandIntro.vue'
import { usePageScrollEffects } from '../../composables/usePageScrollEffects.js'

// 页面滚动与淡入、平滑锚点（通过组合式函数管理）
const { navScrolled, init, cleanup } = usePageScrollEffects({ onAnchorNavigate: () => closeMenu() })
const route = useRoute()
let islandId = Number(route.params.islandId)
// 获取岛屿详情
let islandDetail = ref({})
fetchIslandById(islandId).then((res) => {
  console.log('岛屿详情:', res)
  // request() 已在 utils/request.js 中将标准响应 {code, message, data} 简化为 data
  // 为兼容非标准响应，这里统一做兼容赋值
  islandDetail.value = res
})
// 获取岛屿美食详情
let islandDine = ref([])
fetchIslandDine(islandId).then((res) => {
  console.log('岛屿美食详情:', res)
  islandDine.value = res
})
// 获取岛屿酒店详情
let islandHotel = ref([])
fetchIslandHotel(islandId).then((res) => {
  console.log('岛屿酒店详情:', res)
  islandHotel.value = res
})

const isMenuActive = ref(false)

const openMenu = () => {
  isMenuActive.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isMenuActive.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

<style>
/* 全局主色调变量：确保 Tailwind 与组件样式都能读取 */
:root {
  --primary-blue: #0ea5e9;
  --primary-blue-dark: #0284c7;
  --secondary-green: #10b981;
  --secondary-green-dark: #059669;
  --accent-teal: #0d9488;
  --light-sand: #fef3c7;
  --dark-blue: #0c4a6e;
}
</style>

<style scoped>
body {
  font-family: 'Inter', 'Noto Sans SC', sans-serif;
  color: #334155;
  background-color: #f8fafc;
  overflow-x: hidden;
}

/* 主色调定义 使用全局变量，无需在 scoped 内重复 */

/* 导航栏样式 */
.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
/* 导航滚动后的文字与图标颜色切换为深色 */
.nav-scrolled a,
.nav-scrolled i,
.nav-scrolled .text-white {
  color: #334155 !important;
}
.nav-scrolled a:hover {
  color: var(--primary-blue) !important;
}

/* 卡片悬停效果 */
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 按钮样式 */
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-2px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 标签样式 */
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.tag-blue {
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-blue);
}
.tag-green {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--secondary-green);
}
.tag-teal {
  background-color: rgba(13, 148, 136, 0.1);
  color: var(--accent-teal);
}

/* 星级评分样式 */
.star-rating {
  color: #f59e0b;
}

/* 滚动动画 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 主视觉遮罩渐变：从顶部60%位置开始渐变 */
.hero-gradient {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.3) 80%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

/* 图片轮播样式（Embla） */
.embla {
  position: relative;
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 100%;
}
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}
.carousel-indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.carousel-indicator.active {
  background-color: white;
}

/* 预订框样式 */
.booking-box {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.booking-box:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 价格标签样式 */
.price-tag {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--secondary-green);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
}

/* 移动端菜单样式 */
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

/* 响应式断点 */
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}
@media (min-width: 769px) {
  .mobile-only {
    display: none;
  }
}
</style>
