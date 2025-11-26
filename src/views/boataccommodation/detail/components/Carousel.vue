<template>
  <div class="relative w-[100vw] h-[100vh]">
    <!-- 轮播图 -->
    <swiper
      v-if="data?.images"
      :centeredSlides="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Autoplay, Pagination, Navigation]"
      class="w-full h-full"
    >
      <swiper-slide v-for="(image, index) in data.images" :key="index">
        <img :src="image" class="w-[100vw] h-[100vh] object-cover" />
      </swiper-slide>
    </swiper>

    

    <!-- 船宿信息：固定显示 -->
    <div class="absolute bottom-0 left-0 text-white w-full z-10 p-20" style="background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%)">
      <h2 class="flex items-end">
        <p class="text-8xl font-semibold">{{ data.title }}</p>
        <p class="text-5xl ml-8 mb-2">帕劳</p>
      </h2>
      
      <p class="text-xl mt-4">行程亮点：潜水、历史沉船、色彩斑斓的珊瑚园等。</p>
      <p class="text-xl mt-4">¥23,115 /人 起</p>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style>
.swiper-button-next,.swiper-button-prev {
  /* background-color: rgba(255, 255, 255, 0.8); */
  border-radius: 50%;
  width: 60px;
  height:60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: background-color 0.3s ease;
}
.swiper-button-next:hover,.swiper-button-prev:hover {
  background-color: rgba(255, 255, 255, 1); /* 鼠标悬停时变为纯白色 */
}
</style>