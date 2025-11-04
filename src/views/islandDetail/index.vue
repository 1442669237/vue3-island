<template>
  <div class="nautilus-page">
    <!-- 导航栏组件 -->
    <TopNav :navScrolled="navScrolled" @openMenu="openMenu" />

    <!-- 移动端菜单组件（含遮罩） -->
    <MobileMenu :isActive="isMenuActive" @close="closeMenu" />
    
    <!-- 主视觉区 -->
    <HeroSection />

    <!-- 主要内容区 -->
    <main class="container mx-auto px-4 py-16">
      <!-- 信息展示区 -->
      <section id="details" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- 左侧内容 -->
        <div class="lg:col-span-2 space-y-12">
          <!-- 海岛简介 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">海岛简介</h2>
            <div class="prose prose-lg max-w-none">
              <p class="mb-4">
                鹦鹉螺私人岛（The Nautilus
                Maldives）是马尔代夫最具特色的奢华度假岛屿之一，位于芭环礁（Baa
                Atoll）联合国教科文组织生物圈保护区内。这座岛屿以其独特的设计理念、私密的度假环境和卓越的服务体验而闻名于世。
              </p>
              <p class="mb-4">
                岛屿面积虽小，却拥有26间设计独特的水上和沙滩别墅，每一间都配备了私人泳池和专属管家服务。岛上的餐厅提供由米其林星级厨师精心打造的美食，融合了马尔代夫当地风味和国际美食。
              </p>
              <p>
                鹦鹉螺私人岛最引人注目的特色包括：专属的无人沙洲、星空泳池、水下餐厅以及丰富的水上活动。无论您是寻求浪漫的蜜月之旅，还是想要与家人共度难忘的假期，这里都能满足您的所有期望。
              </p>
            </div>
          </div>

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

// 导航栏滚动控制（状态驱动）
const navScrolled = ref(false)
const handleScroll = () => {
  navScrolled.value = window.scrollY > window.innerHeight
}

// 移动端菜单控制
const mobileMenu = ref(null)
const menuOverlay = ref(null)
const isMenuActive = ref(false)

const openMenu = () => {
  isMenuActive.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isMenuActive.value = false
  document.body.style.overflow = ''
}


// 滚动动画
const checkFadeElements = () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const rect = el.getBoundingClientRect()
    const visible = rect.top < window.innerHeight - 100 && rect.bottom > 0
    if (visible) el.classList.add('visible')
  })
}

// 平滑滚动
const enableSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href')
      if (!targetId || targetId === '#') return
      e.preventDefault()
      const targetEl = document.querySelector(targetId)
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 80,
          behavior: 'smooth',
        })
        closeMenu()
      }
    })
  })
}

onMounted(() => {
  // 滚动事件
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', checkFadeElements)
  window.addEventListener('load', checkFadeElements)

  enableSmoothScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', checkFadeElements)
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
