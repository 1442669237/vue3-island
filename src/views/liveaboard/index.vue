<template>
  <div class="bg-gray-50 text-gray-800 flex flex-col font-inter">
    <TopNav :navScrolled="navScrolled" @openMenu="openMenu" title="酷潜船宿精选" :type="3" />
    <!-- 移动端菜单组件（含遮罩） -->
    <MobileMenu :isActive="isMenuActive" title="酷潜船宿精选" :type="3" @close="closeMenu" />

    <HeroSection v-model:search="filters.search" @openMobileFilter="openMobileFilter" />

    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <FilterSidebar
          v-model:countryId="filters.countryId"
          v-model:month="filters.month"
          v-model:hasquotas="filters.hasquotas"
          v-model:isCheap="filters.isCheap"
          :destinations="destinations"
          :dates="dates"
          @apply="applyFilters"
          @reset="resetFilters"
        />

        <div class="flex-grow">
          <MobileListHeader @openMobileFilter="openMobileFilter" />
          <MobileFilterModal
            :open="isMobileFilterOpen"
            v-model:countryId="mobileFilters.countryId"
            v-model:month="mobileFilters.month"
            v-model:hasquotas="mobileFilters.hasquotas"
            v-model:isCheap="mobileFilters.isCheap"
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
// 状态
const boats = ref([])
const isMobileFilterOpen = ref(false)
const destinations = ref([])
const dates = ref([])
const page = ref(1)
const hasNext = ref(true)
// 筛选状态 (Desktop)
const filters = reactive({
  month: '',
  countryId: '',
  hasquotas: 0,
  isCheap: 0,
  search: '',
})

// 临时筛选状态 (Mobile)
const mobileFilters = reactive({
  month: '',
  countryId: '',
  hasquotas: 0,
  isCheap: 0,
})

const filteredBoats = computed(() => {
  let result = boats.value
  const term = filters.search.toLowerCase().trim()
  if (term) {
    result = result.filter(
      (b) =>
        String(b.name).toLowerCase().includes(term) ||
        String(b.country).toLowerCase().includes(term) ||
        (Array.isArray(b.schedules) &&
          b.schedules.some((s) => String(s.trip).toLowerCase().includes(term))),
    )
  }
  return result
})

// 方法
const resetFilters = () => {
  filters.month = ''
  filters.countryId = ''
  filters.hasquotas = 0
  filters.isCheap = 0
  filters.search = ''
  loadRoutes()
}

// 移动端模态框控制
const openMobileFilter = () => {
  mobileFilters.month = filters.month
  mobileFilters.countryId = filters.countryId
  mobileFilters.hasquotas = filters.hasquotas
  mobileFilters.isCheap = filters.isCheap
  isMobileFilterOpen.value = true
}

const closeMobileFilter = () => {
  isMobileFilterOpen.value = false
}

const applyMobileFilters = () => {
  filters.month = mobileFilters.month
  filters.countryId = mobileFilters.countryId
  filters.hasquotas = mobileFilters.hasquotas
  filters.isCheap = mobileFilters.isCheap
  closeMobileFilter()
  loadRoutes()
}

const resetMobileFilters = () => {
  mobileFilters.month = ''
  mobileFilters.countryId = ''
  mobileFilters.hasquotas = 0
  mobileFilters.isCheap = 0
  applyMobileFilters()
}

// 用于桌面端的 "应用筛选"
const applyFilters = () => {
  loadRoutes()
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
    dates.value = res ?? {}
  })
  loadRoutes()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function makeQueryFromFilters(f) {
  return {
    month: f.month || undefined,
    countryId: f.countryId || undefined,
    hasquotas: f.hasquotas || undefined,
    isCheap: f.isCheap || undefined,
    page: page.value,
  }
}

function loadRoutes() {
  const query = makeQueryFromFilters(filters)
  fetchRoutes(query).then((res) => {
    hasNext.value = res.hasNext
    boats.value = Array.isArray(res.records) ? res.records : []
  })
}
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
