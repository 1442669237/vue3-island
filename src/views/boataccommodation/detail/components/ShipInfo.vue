<template>
  <div class="mt-2">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">船只介绍</h2>
    <div class="prose prose-lg max-w-none text-base flex">
      <p class="text-[#333] text-lg leading-normal" v-html="data.about"></p>
    </div>
    <div class="mt-8 bg-white rounded-xl p-6 shadow-md">
      <h3 class="text-2xl font-semibold mb-4">基础信息</h3> 
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-expand text-secondary-green"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">船宿行程</h4>
            <p class="text-gray-600">克罗地亚经典船宿</p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >                                                                 
            <i class="iconfont icon-map-marked-alt text-primary-blue"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">出行国家</h4>
            <p class="text-gray-600">帕劳</p>
          </div>
        </div>

        <!-- <div class="flex items-start">
          <div
            class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-calendar-alt-solid text-purple-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">出行日期</h4>
            <p class="text-gray-600">2026年06月03日</p>
          </div>
        </div> -->

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="fas fa-clock text-orange-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">行程长度</h4>
            <p class="text-gray-600">8天/7晚</p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-Diving-Mask text-teal-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">深潜</h4>
            <p class="text-gray-600">总共大约34次深潜</p>
          </div>
        </div>

        <!-- <div class="flex items-start">
          <div
            class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-user-shield text-yellow-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">经验水平</h4>
            <p class="text-gray-600">开放水域潜水 - 需要至少记录30次潜水</p>
          </div>
        </div> -->

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-plane-departure text-pink-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">出发</h4>
            <p class="text-gray-600">2026年06月03日Check-in at 6:00 pm</p>
            <p class="text-gray-600">Malakal, Micronesia</p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-plane-departure text-indigo-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">返回</h4>
            <p class="text-gray-600">2026年06月10日Check-out at 5:00 pm</p>
            <p class="text-gray-600">Malakal, Micronesia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped>
/* 使用 Tailwind 与 prose 样式，无需额外样式 */
</style>
