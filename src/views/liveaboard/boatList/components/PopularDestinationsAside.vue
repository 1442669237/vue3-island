<template>
  <aside class="hidden xl:block w-80 shrink-0">
    <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 class="text-lg font-bold text-gray-800 mb-6">热门目的地</h2>

      <div class="space-y-4 mb-6" v-for="boat in hotBoats.slice(0, 3)" :key="boat.id">
        <div class="rounded-lg overflow-hidden cursor-pointer group">
          <div class="relative h-40 overflow-hidden">
            <img
              :src="boat.imgUrl"
              :alt="boat.showTitle"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-white font-bold">{{ boat.showTitle }}</h3>
              <div class="flex items-center text-white/90 mt-1">
                <i class="iconfont icon-map-marker-alt mr-1 text-xs"></i>
                <span class="text-xs">{{ boat.countryName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 class="font-bold text-blue-800 mb-2">需要帮助？</h3>
        <p class="text-blue-700 text-sm mb-4">我们的潜水专家可以为您提供个性化的船宿建议</p>
        <button
          @click="handlePopupVisibility(true)"
          class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <i class="fa-solid fa-comment mr-2 text-sm"></i>
          联系专家
        </button>
      </div>
    </div>
    <!-- 联系弹窗 -->
    <ContactPopup
      :isVisible="customPopisVisible"
      @update:customPopisVisible="handlePopupVisibility"
    />
  </aside>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { fetchHotBoats } from '@/api/liveboard'
import ContactPopup from '@/components/ContactPopup.vue'

const hotBoats = ref([])
const customPopisVisible = ref(false)

// 联系弹窗状态
const handlePopupVisibility = (visible) => {
  customPopisVisible.value = visible
}

onMounted(async () => {
  const res = await fetchHotBoats()
  console.log(res)
  hotBoats.value = res || []
})
</script>
