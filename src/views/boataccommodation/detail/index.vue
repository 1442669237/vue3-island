<template>
  <div class="w-full bg-gray-50 flex flex-col items-center" v-if="boatDetail">
    <!-- 头部轮播图 -->
    <Carousel 
      :shipName="'Solitude Gaia'"
      :shipDescription="'一艘40米长的船宿，位于帕劳，最多容纳18位客人。'"
      :shipDetails="'行程亮点：潜水、历史沉船、色彩斑斓的珊瑚园等。'"
      :images="imageData"/>

    <main class="container mx-auto px-4 py-16">
      <!-- 信息展示区 -->
      <section id="details" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 左侧内容 -->
        <div class="lg:col-span-2 space-y-12">
          <!-- 船只介绍、行程概要 -->
          <ShipInfo :data="boatDetail"/>
          <!-- 价格框 -->
          <PriceCard  :handleCustomMethod="handlePopupVisibility"/>
          <!-- 行程详情 -->
          <TripDetails />
          <!-- 装备租赁 -->
          <EquipmentRental />
        </div>

        <!-- 右侧预订栏 -->
        <div class="lg:col-span-1">
          <Booking :handleCustomMethod="handlePopupVisibility" />
        </div>
      </section>
      <!-- 船只亮点 、 安全服务 -->
      <ShipHighlightsAndSafety/>

      <!-- 免责声明 -->
      <Disclaimer/>

      <!-- 联系弹窗 -->
      <ContactPopup :isVisible="customPopisVisible" @update:customPopisVisible="handlePopupVisibility"/>
      
    </main>
    <FooterSection/>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { getBoatDetailById } from '@/api/boataccommodationDetail'

import Carousel from './components/Carousel.vue'
import ShipInfo from './components/ShipInfo.vue'
import PriceCard from './components/PriceCard.vue'
import TripDetails from './components/TripDetails.vue'
import EquipmentRental from './components/EquipmentRental.vue'
import Booking from './components/Booking.vue'
import Disclaimer from './components/Disclaimer.vue'
import ShipHighlightsAndSafety from './components/ShipHighlightsAndSafety.vue'
import ContactPopup from './components/ContactPopup.vue'
import FooterSection from '@/views/islandDetail/components/FooterSection.vue'

const route = useRoute();
const boatId = route.params.id;
const boatDetail = ref(null) // 船详情

const imageData = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/99/0d/maldive.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/dc/98/caption.jpg?w=1400&h=500&s=1'
];
const customPopisVisible = ref(false)
const handlePopupVisibility = (value) => {
  customPopisVisible.value = value
}

onMounted(async ()=> {
  try{
    const res = await getBoatDetailById({boatId});
    if(res){
      boatDetail.value = res
    }
  }catch(error){
    console.log(error,'error')
  }
})
</script>

<style scoped>
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}
</style>