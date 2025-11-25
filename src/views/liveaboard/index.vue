<template>
  <div class="bg-gray-50 text-gray-800 flex flex-col font-inter">
    <TopNav :navScrolled="navScrolled" @openMenu="openMenu" title="酷潜船宿精选" :type="3" />
    <!-- 移动端菜单组件（含遮罩） -->
    <MobileMenu :isActive="isMenuActive" title="酷潜船宿精选" :type="3" @close="closeMenu" />

    <HeroSection v-model:search="filters.search" @openMobileFilter="openMobileFilter" />

    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <FilterSidebar
          v-model:destination="filters.destination"
          v-model:date="filters.date"
          v-model:availableOnly="filters.availableOnly"
          v-model:specialOnly="filters.specialOnly"
          :destinations="destinations"
          :dates="dates"
          @apply="applyFilters"
          @reset="resetFilters"
        />

        <div class="flex-grow">
          <MobileListHeader @openMobileFilter="openMobileFilter" />
          <MobileFilterModal
            :open="isMobileFilterOpen"
            v-model:destination="mobileFilters.destination"
            v-model:date="mobileFilters.date"
            v-model:availableOnly="mobileFilters.availableOnly"
            v-model:specialOnly="mobileFilters.specialOnly"
            :destinations="destinations"
            :dates="dates"
            @apply="applyMobileFilters"
            @reset="resetMobileFilters"
            @close="closeMobileFilter"
          />

          <BoatList :boats="filteredBoats" @reset="resetFilters" />
        </div>

        <PopularDestinationsAside />
      </div>
    </main>

    <LiveaboardFooter />
  </div>
</template>

<script setup>
// import HeaderBar from './components/HeaderBar.vue'
import TopNav from '@/components/TopNav.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import HeroSection from './components/HeroSection.vue'
import FilterSidebar from './components/FilterSidebar.vue'
import MobileListHeader from './components/MobileListHeader.vue'
import MobileFilterModal from './components/MobileFilterModal.vue'
import BoatList from './components/BoatList.vue'
import PopularDestinationsAside from './components/PopularDestinationsAside.vue'
import LiveaboardFooter from './components/LiveaboardFooter.vue'
import { ref, reactive, computed, onBeforeUnmount, onMounted } from 'vue'
import { fetchAvailableDates, fetchCountries, fetchRoutes } from '@/api/liveboard.js'
// 页面滚动与淡入、平滑锚点（通过组合式函数管理）
const navScrolled = ref(false)
// 原始数据
const boatData = [
  {
    id: 1,
    name: 'Malailo',
    country: '印度尼西亚',
    rating: 9.8,
    imageUrl:
      'https://lf-code-agent.coze.cn/obj/x-ai-cn/288132508418/image/region_images/supplies_images/DiveBoatSelectionPage/1.jpeg',
    schedules: [
      {
        date: '11月29日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '余3位',
        isAvailable: true,
      },
      { date: '12月11日', trip: '四王岛经典船宿 9天/8晚', spots: '余2位', isAvailable: true },
      {
        date: '12月21日',
        trip: '四王岛经典船宿 13天/12晚',
        spots: '满员',
        isAvailable: false,
      },
      { date: '1月4日', trip: '四王岛经典船宿 11天/10晚', spots: '满员', isAvailable: false },
      {
        date: '1月16日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '余7位',
        isAvailable: true,
      },
      {
        date: '1月28日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '余2位',
        isAvailable: true,
      },
    ],
    hasChat: false,
    featured: true,
  },
  {
    id: 2,
    name: 'iLike',
    country: '印度尼西亚',
    rating: 9.8,
    imageUrl:
      'https://lf-code-agent.coze.cn/obj/x-ai-cn/288132508418/image/region_images/supplies_images/DiveBoatSelectionPage/2.jpeg',
    schedules: [
      {
        date: '11月30日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '满员',
        isAvailable: false,
      },
      { date: '12月15日', trip: '四王岛经典船宿 8天/7晚', spots: '满员', isAvailable: false },
      {
        date: '12月25日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '满员',
        isAvailable: false,
      },
      { date: '1月5日', trip: '四王岛经典船宿 8天/7晚', spots: '余11位', isAvailable: true },
      { date: '1月14日', trip: '四王岛经典船宿 10天/9晚', spots: '余3位', isAvailable: true },
      { date: '1月26日', trip: '四王岛经典船宿 8天/7晚', spots: '满员', isAvailable: false },
    ],
    hasChat: true,
  },
  {
    id: 3,
    name: 'Blue Pearl',
    country: '印度尼西亚',
    rating: 9.8,
    imageUrl:
      'https://lf-code-agent.coze.cn/obj/x-ai-cn/288132508418/image/region_images/supplies_images/DiveBoatSelectionPage/3.jpeg',
    schedules: [
      { date: '7月17日', trip: '科莫多经典船宿 8天/7晚', spots: '满员', isAvailable: false },
      { date: '7月25日', trip: '科莫多经典船宿 8天/7晚', spots: '余18位', isAvailable: true },
      { date: '8月2日', trip: '科莫多经典船宿 8天/7晚', spots: '余6位', isAvailable: true },
      { date: '8月10日', trip: '科莫多经典船宿 8天/7晚', spots: '余7位', isAvailable: true },
      {
        date: '8月19日',
        trip: '科莫多阿洛海湾船宿 10天/9晚',
        spots: '余12位',
        isAvailable: true,
      },
      {
        date: '8月30日',
        trip: '阿洛加达海湾船宿 9天/8晚',
        spots: '余18位',
        isAvailable: true,
      },
    ],
    hasChat: true,
  },
  {
    id: 4,
    name: 'Indo Master',
    country: '印度尼西亚',
    rating: 9.8,
    imageUrl:
      'https://lf-code-agent.coze.cn/obj/x-ai-cn/288132508418/image/region_images/supplies_images/DiveBoatSelectionPage/4.jpeg',
    schedules: [
      {
        date: '12月8日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '满员',
        isAvailable: false,
      },
      {
        date: '12月19日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '满员',
        isAvailable: false,
      },
      {
        date: '12月30日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '余1位',
        isAvailable: true,
      },
      {
        date: '1月10日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '满员',
        isAvailable: false,
      },
      {
        date: '1月21日',
        trip: '四王岛经典船宿 11天/10晚',
        spots: '余1位',
        isAvailable: true,
      },
      { date: '2月1日', trip: '四王岛经典船宿 11天/10晚', spots: '余1位', isAvailable: true },
    ],
    hasChat: true,
  },
]

// 状态
const boats = ref(boatData)
const isMobileFilterOpen = ref(false)
const destinations = ref([])
const dates = ref([])

// 筛选状态 (Desktop)
const filters = reactive({
  destination: '印度尼西亚',
  date: '出行日期',
  availableOnly: false,
  specialOnly: false,
  search: '',
})

// 临时筛选状态 (Mobile)
const mobileFilters = reactive({
  destination: '印度尼西亚',
  date: '出行日期',
  availableOnly: false,
  specialOnly: false,
})

// 方法
const resetFilters = () => {
  filters.destination = '印度尼西亚'
  filters.date = '出行日期'
  filters.availableOnly = false
  filters.specialOnly = false
  filters.search = ''
}

// 移动端模态框控制
const openMobileFilter = () => {
  // 打开时，将当前生效的 filters 同步到 mobileFilters (临时状态)
  mobileFilters.destination = filters.destination
  mobileFilters.date = filters.date
  mobileFilters.availableOnly = filters.availableOnly
  mobileFilters.specialOnly = filters.specialOnly

  isMobileFilterOpen.value = true
}

const closeMobileFilter = () => {
  isMobileFilterOpen.value = false
}

const applyMobileFilters = () => {
  // 点击应用时，将 mobileFilters (临时状态) 同步回 filters
  filters.destination = mobileFilters.destination
  filters.date = mobileFilters.date
  filters.availableOnly = mobileFilters.availableOnly
  filters.specialOnly = mobileFilters.specialOnly

  closeMobileFilter()
}

const resetMobileFilters = () => {
  mobileFilters.destination = '印度尼西亚'
  mobileFilters.date = '出行日期'
  mobileFilters.availableOnly = false
  mobileFilters.specialOnly = false

  // 移动端重置后是否立即应用？原逻辑是点击重置后，先重置UI，然后用户需点击应用。
  // 但原代码 resetFilterBtn 也是直接 applyFilters。
  // 为了符合原逻辑：如果是在 modal 里点重置，通常是只重置表单。
  // 但这里我们模拟原 JS：`resetFilters` 函数直接调用了 `applyFilters`。
  // 所以在移动端弹窗里点重置，我们直接执行重置并应用到主列表。
  applyMobileFilters()
}

// 用于桌面端的 "应用筛选" (虽然 v-model 是自动的，但保留按钮以匹配UI)
const applyFilters = () => {
  // 实际逻辑已通过 computed 自动处理
  // 可以在这里添加 loading 状态或 API 请求
}
const isMenuActive = ref(false)

const openMenu = () => {
  isMenuActive.value = true
  document.body.style.overflow = 'hidden'
}
const closeMenu = () => {
  isMenuActive.value = false
  document.body.style.overflow = ''
}
const handleScroll = () => {
  navScrolled.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
  fetchCountries().then((res) => {
    destinations.value = Array.isArray(res) ? res : []
  })
  fetchAvailableDates().then((res) => {
    console.log(res)
    dates.value = res ?? {}
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* 复制原 HTML 中的自定义 CSS */
.content-auto {
  content-visibility: auto;
}
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}
.transition-all-300 {
  transition: all 300ms ease-in-out;
}
.transition-transform-700 {
  transition: transform 700ms ease-in-out;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
.animate-delay-200 {
  animation-delay: 0.2s;
}
.animate-delay-400 {
  animation-delay: 0.4s;
}
</style>
