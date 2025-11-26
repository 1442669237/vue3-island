<template>
  <div
    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <div class="flex flex-col lg:flex-row">
      <div class="relative w-full lg:w-3/7 h-64 lg:h-auto overflow-hidden">
        <img
          :src="boat.imgUrl"
          :alt="boat.title"
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div class="w-full lg:w-4/7 p-6 flex flex-col">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-gray-800">{{ boat.showTitle }}</h3>
            <div class="flex items-center mt-1 text-gray-600">
              <i class="iconfont icon-map-marker-alt mr-1 text-sm"></i>
              <span class="text-sm">{{ boat.countryName }}</span>
            </div>
          </div>

          <div class="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            <div class="flex mr-1">
              <i
                v-for="n in 5"
                :key="n"
                :class="[
                  'iconfont',
                  n <= boat.score ? 'icon-star text-yellow-400' : 'icon-star text-gray-300',
                  'text-xs',
                ]"
              ></i>
            </div>
            <span class="text-sm font-medium">{{ boat.score }} {{ boat.scoreDesc }}</span>
          </div>
        </div>

        <div class="flex-grow overflow-y-auto mb-4 max-h-40">
          <div>
            <div
              v-for="(schedule, sIndex) in boat.diveTourDTOS.slice(0, 3)"
              :key="sIndex"
              class="flex items-center py-2 border-b border-gray-100"
            >
              <span class="w-30 text-gray-800 font-medium">{{ schedule.tourDate }}</span>
              <span class="flex-grow text-gray-600 ml-4"
                >{{ schedule.tourTitle }}{{ schedule.trip }}{{ schedule.tourDayDay }}天{{
                  schedule.tourDayNight
                }}晚</span
              >
              <span
                class="font-medium whitespace-nowrap"
                :class="schedule.leftQuota ? 'text-green-600' : 'text-red-600'"
                >{{ schedule.leftQuota === 0 ? '满员' : '余' + schedule.leftQuota + '位' }}</span
              >
            </div>
            <!-- <div
              v-if="boat.diveTourDTOS.length > 5"
              class="text-center text-blue-600 text-sm cursor-pointer hover:underline"
            >
              查看更多船期
            </div> -->
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
</template>

<script setup>
const props = defineProps({
  boat: { type: Object, required: true },
  delay: { type: Number, default: 0 },
})
console.log(props.boat)
</script>
