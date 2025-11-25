<template>
  <div
    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <div class="flex flex-col lg:flex-row">
      <div class="relative w-full lg:w-3/7 h-64 lg:h-auto overflow-hidden">
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

      <div class="w-full lg:w-4/7 p-6 flex flex-col">
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

        <div class="flex-grow overflow-y-auto mb-4 max-h-40">
          <div>
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
                >{{ schedule.spots }}</span
              >
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
</template>

<script setup>
const props = defineProps({
  boat: { type: Object, required: true },
  delay: { type: Number, default: 0 },
})
</script>
