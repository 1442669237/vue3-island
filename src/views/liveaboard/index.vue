<template>
  <div class="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-inter">
    <HeaderBar />

    <HeroSection
      v-model:search="filters.search"
      @openMobileFilter="openMobileFilter"
    />

    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <FilterSidebar
          v-model:destination="filters.destination"
          v-model:date="filters.date"
          v-model:availableOnly="filters.availableOnly"
          v-model:specialOnly="filters.specialOnly"
          @apply="applyFilters"
          @reset="resetFilters"
        />

        <div class="flex-grow">
          <div class="lg:hidden flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-800">船宿列表</h2>
            <button
              @click="openMobileFilter"
              class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center"
            >
              <i class="fa-solid fa-filter mr-2"></i>
              筛选
            </button>
          </div>

          <div
            v-if="isMobileFilterOpen"
            class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 lg:hidden"
          >
            <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg font-bold text-gray-800">筛选条件</h2>
                <button @click="closeMobileFilter" class="text-gray-500 hover:text-gray-700">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">目的地</label>
                <select
                  v-model="mobileFilters.destination"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="印度尼西亚">印度尼西亚</option>
                  <option value="马尔代夫">马尔代夫</option>
                  <option value="大堡礁">大堡礁</option>
                  <option value="红海">红海</option>
                  <option value="加拉帕戈斯群岛">加拉帕戈斯群岛</option>
                  <option value="斐济">斐济</option>
                  <option value="泰国">泰国</option>
                  <option value="埃及">埃及</option>
                </select>
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">出行日期</label>
                <select
                  v-model="mobileFilters.date"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="出行日期">出行日期</option>
                  <option value="本月">本月</option>
                  <option value="下月">下月</option>
                  <option value="未来3个月">未来3个月</option>
                  <option value="未来6个月">未来6个月</option>
                  <option value="全年">全年</option>
                </select>
              </div>

              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    id="mobile-available-only"
                    v-model="mobileFilters.availableOnly"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label for="mobile-available-only" class="ml-2 block text-sm text-gray-700">
                    仅看有余位船期
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    type="checkbox"
                    id="mobile-special-only"
                    v-model="mobileFilters.specialOnly"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label for="mobile-special-only" class="ml-2 block text-sm text-gray-700">
                    仅看特价船期
                  </label>
                </div>
              </div>

              <div class="flex space-x-4">
                <button
                  @click="applyMobileFilters"
                  class="flex-grow bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  应用筛选
                </button>
                <button
                  @click="resetMobileFilters"
                  class="flex-grow bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                  重置
                </button>
              </div>
            </div>
          </div>

          <div id="boat-list" class="space-y-8">
            <div
              v-if="filteredBoats.length === 0"
              class="bg-white rounded-lg shadow-sm p-8 text-center"
            >
              <p class="text-gray-600">暂无符合条件的船宿</p>
              <button
                @click="resetFilters"
                class="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                清除筛选条件
              </button>
            </div>

            <div
              v-for="(boat, index) in filteredBoats"
              :key="boat.id"
              class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="flex flex-col lg:flex-row">
                <div class="relative w-full lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                  <img
                    :src="boat.imageUrl"
                    :alt="boat.name"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    v-if="boat.featured"
                    class="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full"
                  >
                    推荐
                  </div>
                </div>

                <div class="w-full lg:w-2/3 p-6 flex flex-col">
                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-gray-800">{{ boat.name }}</h3>
                      <div class="flex items-center mt-1 text-gray-600">
                        <i class="fa-solid fa-location-dot mr-1 text-sm"></i>
                        <span class="text-sm">{{ boat.country }}</span>
                      </div>
                    </div>

                    <div class="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      <div class="flex mr-1">
                        <i
                          v-for="n in 5"
                          :key="n"
                          :class="[
                            n <= 4 ? 'fa-solid text-yellow-400' : 'fa-regular text-gray-300',
                            'text-xs',
                          ]"
                        ></i>
                      </div>
                      <span class="text-sm font-medium">{{ boat.rating }} 超高</span>
                    </div>
                  </div>

                  <div class="flex-grow overflow-y-auto mb-4 max-h-64">
                    <div class="space-y-3">
                      <div
                        v-for="(schedule, sIndex) in boat.schedules.slice(0, 5)"
                        :key="sIndex"
                        class="flex items-center py-2 border-b border-gray-100"
                      >
                        <span class="w-20 text-gray-800 font-medium">{{ schedule.date }}</span>
                        <span class="flex-grow text-gray-600 ml-4">{{ schedule.trip }}</span>
                        <span
                          class="font-medium whitespace-nowrap"
                          :class="schedule.isAvailable ? 'text-green-600' : 'text-red-600'"
                        >
                          {{ schedule.spots }}
                        </span>
                      </div>

                      <div
                        v-if="boat.schedules.length > 5"
                        class="text-center text-blue-600 text-sm cursor-pointer hover:underline"
                      >
                        查看更多船期
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mt-auto">
                    <button
                      class="w-full lg:w-auto lg:flex-grow lg:mr-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-center"
                    >
                      查看详情
                    </button>

                    <template v-if="boat.hasChat">
                      <button
                        class="lg:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      >
                        <i class="fa-solid fa-comment"></i>
                      </button>

                      <button
                        class="hidden lg:flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        <i class="fa-solid fa-comment mr-2 text-sm"></i>
                        咨询客服
                      </button>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="filteredBoats.length > 0" class="text-center mt-8">
              <button
                class="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                加载更多船宿
              </button>
            </div>
          </div>
        </div>

        <aside class="hidden xl:block w-80 shrink-0">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 class="text-lg font-bold text-gray-800 mb-6">热门目的地</h2>

            <div class="space-y-4">
              <div class="rounded-lg overflow-hidden cursor-pointer group">
                <div class="relative h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566522905043-7a77d5846dd8?auto=format&fit=crop&q=80"
                    alt="四王岛"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-white font-bold">四王岛</h3>
                    <div class="flex items-center text-white/90 mt-1">
                      <i class="fa-solid fa-location-dot mr-1 text-xs"></i>
                      <span class="text-xs">印度尼西亚</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-lg overflow-hidden cursor-pointer group">
                <div class="relative h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1567140435201-c8296f384a53?auto=format&fit=crop&q=80"
                    alt="科莫多"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-white font-bold">科莫多</h3>
                    <div class="flex items-center text-white/90 mt-1">
                      <i class="fa-solid fa-location-dot mr-1 text-xs"></i>
                      <span class="text-xs">印度尼西亚</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-lg overflow-hidden cursor-pointer group">
                <div class="relative h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80"
                    alt="巴厘岛"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-white font-bold">巴厘岛</h3>
                    <div class="flex items-center text-white/90 mt-1">
                      <i class="fa-solid fa-location-dot mr-1 text-xs"></i>
                      <span class="text-xs">印度尼西亚</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 class="font-bold text-blue-800 mb-2">需要帮助？</h3>
              <p class="text-blue-700 text-sm mb-4">我们的潜水专家可以为您提供个性化的船宿建议</p>
              <button
                class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <i class="fa-solid fa-comment mr-2 text-sm"></i>
                联系专家
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <i class="fa-solid fa-location-dot text-blue-400 text-xl"></i>
              <h3 class="text-xl font-bold">酷潜船宿精选</h3>
            </div>
            <p class="text-gray-400 mb-4">提供全球优质潜水船宿体验，探索海底世界的奇妙之旅</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weixin"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">目的地</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">印度尼西亚</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">马尔代夫</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">大堡礁</a>
              </li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">红海</a></li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors"
                  >加拉帕戈斯群岛</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">关于我们</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">常见问题</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">联系方式</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">订阅通讯</h3>
            <p class="text-gray-400 mb-4">获取最新的船宿优惠和潜水资讯</p>
            <div class="flex">
              <input
                type="email"
                placeholder="输入您的邮箱"
                class="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                class="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
              >
                订阅
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© 2025 酷潜船宿精选. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'
import HeroSection from './components/HeroSection.vue'
import FilterSidebar from './components/FilterSidebar.vue'
import { ref, reactive, computed } from 'vue'

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

// 计算属性：过滤后的船宿列表
const filteredBoats = computed(() => {
  let result = boats.value

  // 1. 按目的地过滤
  if (filters.destination) {
    result = result.filter((boat) => boat.country === filters.destination)
  }

  // 2. 按可用性过滤 (Available Only)
  if (filters.availableOnly) {
    result = result.filter((boat) => boat.schedules.some((schedule) => schedule.isAvailable))
  }

  // 3. 按搜索词过滤
  const term = filters.search.toLowerCase().trim()
  if (term) {
    result = result.filter(
      (boat) =>
        boat.name.toLowerCase().includes(term) ||
        boat.country.toLowerCase().includes(term) ||
        boat.schedules.some((schedule) => schedule.trip.toLowerCase().includes(term)),
    )
  }

  // 特价过滤 (HTML中存在UI但JS中未实现逻辑，此处保留UI功能空实现，或可根据需求补充)
  // if (filters.specialOnly) { ... }

  return result
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
