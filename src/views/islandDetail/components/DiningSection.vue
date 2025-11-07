<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">餐饮体验</h2>
    <div class="relative">
      <Swiper 
        :modules="modules" 
        :free-mode="true" 
        :slides-per-view="2" 
        :space-between="16"
        :watch-overflow="true"
        :navigation="{ prevEl: '.activity-prev-1', nextEl: '.activity-next-1' }"
        :pagination="{ el: '.activity-pagination-1', clickable: true }" class="activity-swiper grid grid-cols-1 md:grid-cols-2 pb-4">

        <SwiperSlide class="bg-white rounded-xl overflow-hidden shadow-md card-hover"
          v-for="(item, index) in islandDine" 
          :key="'dinnerDetail_'+item?.id"
        >
          <div class="relative h-48">                           
            <img 
              :src="getDinnerImage(item)" 
              :alt="item?.dineCname  || '餐饮体验'" 
              class="w-full h-full object-cover" 
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ item?.dineCname || '' }}{{ item?.dineEname ? `(${ item?.dineEname })` : ''  }}</h3>
            <p class="text-gray-600 mb-4">
              {{ item?.desc || ''}}
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <i class="iconfont icon-star  mr-2"></i> {{ item?.feature }}
            </div>
            <div class="flex items-center text-sm text-gray-500 mt-2">
              <i class="iconfont icon-clock mr-2"></i> {{ item?.mealTime }}
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
       <!-- 左右切换按钮 -->
      <button class="swiper-nav-btn activity-prev-1" aria-label="上一项">
        <i class="iconfont icon-angleleft"></i>
      </button>
      <button class="swiper-nav-btn activity-next-1" aria-label="下一项">
        <i class="iconfont icon-angleright"></i>
      </button>
      <!-- 轮播指示器（圆点） -->
      <div class="activity-pagination-1"></div>
    </div>
  </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const props = defineProps({
  islandDine: {
    type: Array,
    default: () => []
  }
})
const modules = [FreeMode, Navigation, Pagination]

const getDinnerImage = (item) => {
  const finalImage = (item?.headPics || item?.albums || [])?.find(pic => {
    return pic.subId === item?.id
  })?.imageUrl

  return finalImage
}
 
</script>

<style scoped>
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 调整 Swiper 容器与滑块间距 */
.activity-swiper {
  padding-bottom: 8px;
}
/* 左右切换按钮样式 */
.swiper-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.9);
  color: #0c4a6e;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  margin-top: -20px;
}
.swiper-nav-btn:hover {
  background: #0ea5e9;
  color: #fff;
}
.activity-prev-1 {
  left: -12px;
}
.activity-next-1 {
  right: -12px;
}
.swiper-nav-btn.swiper-button-disabled{
  opacity: 0.3;
  cursor: not-allowed;
}
.swiper-nav-btn.swiper-button-disabled:hover{
  background: #fff;
  color: #0c4a6e;
}

/* 轮播指示器居中显示 */
.activity-pagination-1 {
  margin-top: 12px;
  text-align: center;
}
</style>