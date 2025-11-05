<template>
  <!-- 主视觉区 -->
  <header class="relative h-screen">
    <!-- Embla Carousel 主视觉区 -->
    <div ref="emblaRoot" class="embla h-full">
      <div class="embla__container h-full">
        <div class="embla__slide h-full">
          <img src="https://s.coze.cn/image/mD4sQxNtL48/" alt="鹦鹉螺私人岛航拍图" class="w-full h-full object-cover" />
        </div>
        <div class="embla__slide h-full">
          <img src="https://s.coze.cn/image/uVNLr5QBWy8/" alt="水上别墅" class="w-full h-full object-cover" />
        </div>
        <div class="embla__slide h-full">
          <img src="https://s.coze.cn/image/xaBC6Ih1bQo/" alt="无人沙洲" class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- 轮播指示器 -->
      <div class="carousel-indicators">
        <button class="carousel-indicator" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></button>
        <button class="carousel-indicator" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></button>
        <button class="carousel-indicator" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></button>
      </div>
    </div>

    <!-- 渐变遮罩 -->
    <div class="absolute inset-0 hero-gradient"></div>

    <!-- 标题和信息 -->
    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16">
      <div class="container mx-auto">
        <div class="max-w-4xl">
          <div class="flex flex-wrap items-center mb-4">
            <div class="tag tag-blue mr-4 mb-2">
              <i class="iconfont icon-star mr-1"></i> 奢华私人岛
            </div>
            <div class="tag tag-green mr-4 mb-2">
              <i class="iconfont icon-map-marker-alt mr-1"></i> 马尔代夫
            </div>
            <div class="tag tag-teal mb-2">
              <i class="iconfont icon-calendar-check mr-1"></i> 可预订
            </div>
          </div>

          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            鹦鹉螺 The Nautilus Maldives
          </h1>

          <div class="flex flex-wrap items-center mb-6">
            <div class="flex items-center mr-6 mb-2">
              <div class="star-rating mr-2">
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star"></i>
              </div>
              <span class="text-white font-medium">9.2分 卓越体验</span>
            </div>
            <div class="flex items-center mr-6 mb-2">
              <i class="iconfont icon-user-friends text-white mr-2"></i>
              <span class="text-white">300+ 住客点评</span>
            </div>
            <div class="flex items-center mb-2">
              <i class="iconfont icon-trophy text-white mr-2"></i>
              <span class="text-white">2024年度最佳私人岛</span>
            </div>
          </div>

          <p class="text-white text-lg md:text-xl mb-8 max-w-2xl">
            位于马尔代夫南部的隐秘天堂，鹦鹉螺私人岛以其独特的设计理念和无与伦比的奢华体验，为追求极致度假的旅行者提供了一个远离喧嚣的世外桃源。
          </p>

          <div class="flex flex-wrap gap-4">
            <a href="#booking" class="btn-primary">
              <i class="iconfont icon-calendar-check mr-2"></i> 立即预订
            </a>
            <a href="#details" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all">
              <i class="iconfont icon-infocircle mr-2"></i> 了解更多
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import EmblaCarousel from 'embla-carousel'

const emblaRoot = ref(null)
const emblaInstance = ref(null)
const currentIndex = ref(0)
let autoplayTimer = null

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    emblaInstance.value?.scrollNext()
  }, 5000)
}
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}
const goToSlide = (index) => {
  emblaInstance.value?.scrollTo(index)
}

onMounted(() => {
  emblaInstance.value = EmblaCarousel(emblaRoot.value, { loop: true })
  currentIndex.value = emblaInstance.value.selectedScrollSnap()
  emblaInstance.value.on('select', () => {
    currentIndex.value = emblaInstance.value.selectedScrollSnap()
  })

  emblaRoot.value.addEventListener('mouseenter', stopAutoplay)
  emblaRoot.value.addEventListener('mouseleave', startAutoplay)
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
  emblaInstance.value?.destroy()
})
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.3) 80%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

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

.star-rating {
  color: #f59e0b;
}
</style>