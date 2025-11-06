<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">特色体验</h2>
    <!-- Swiper FreeMode 横向滑动，避免超过3个换行 -->
    <div class="relative">
      <Swiper
        :modules="modules"
        :free-mode="true"
        :slides-per-view="'auto'"
        :space-between="16"
        :watch-overflow="true"
        :navigation="{ prevEl: '.activity-prev', nextEl: '.activity-next' }"
        :pagination="{ el: '.activity-pagination', clickable: true }"
        class="activity-swiper"
      >
        <SwiperSlide
          v-for="item in islandActivity"
          :key="item.id || item.activityId"
          class="!w-72 md:!w-80 cursor-pointer"
        >
          <div class="bg-white rounded-xl p-6 shadow-md card-hover h-full">
            <img
              :src="item?.headPics?.[0]?.imageUrl"
              :alt="item.activityCname || '特色体验'"
              class="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">
              {{ item.activityCname || item.activityEname || '体验项目' }}
            </h3>
            <p class="text-gray-600 line-clamp-3">
              {{ item.activityDesc || item.desc || '' }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <!-- 左右切换按钮 -->
      <button class="swiper-nav-btn activity-prev" aria-label="上一项">
        <i class="iconfont icon-angleleft"></i>
      </button>
      <button class="swiper-nav-btn activity-next" aria-label="下一项">
        <i class="iconfont icon-angleright"></i>
      </button>
      <!-- 轮播指示器（圆点） -->
      <div class="activity-pagination"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  islandActivity: {
    type: Array,
    default: () => [],
  },
})

const modules = [FreeMode, Navigation, Pagination]
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 40px;
  min-width: 40px;
  padding: 6px;
  background-color: #fff;
  border: 1.5px solid #002b11;
  color: #002b11;
  z-index: 10;
}
.swiper-nav-btn:hover {
  background-color: #ebebeb;
  color: #143c24;
  cursor: pointer;
}
.activity-prev {
  left: -12px;
}
.activity-next {
  right: -12px;
}

/* 轮播指示器居中显示 */
.activity-pagination {
  margin-top: 12px;
  text-align: center;
}

/* 当到达最左或最右、或全部可见时，Swiper 会给按钮加上 disabled 类，隐藏按钮 */
.swiper-nav-btn.swiper-button-disabled {
  display: none;
}
</style>
