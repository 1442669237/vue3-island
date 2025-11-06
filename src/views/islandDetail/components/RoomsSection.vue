<template>
  <div class="fade-in">
    <h2 ref="titleSection" class="text-3xl font-bold mb-6 text-dark-blue">精选房型</h2>
    <div class="space-y-8">
      <div v-for="(item, index) in islandHotel" :key="index">
        <div v-if="index < state.hotalMaxNumber" class="bg-white rounded-xl overflow-hidden shadow-md card-hover custom-card-style">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="relative h-64 md:h-auto">
              <Swiper 
                :modules="modules" 
                :free-mode="true" 
                :slides-per-view="1" 
                :space-between="0"
                :navigation="{ prevEl: '.activity-prev', nextEl: '.activity-next' }"
                :pagination="{ clickable: true }" 
                class="activity-swiper custom-swiper">
                <SwiperSlide class="bg-white rounded-xl overflow-hidden shadow-md"
                  v-for="(albums, index) in item?.albums" 
                  :key="'innerpic_'+index"
                >
                  <img :src="albums?.imageUrl || ''" alt="房型照片" class="w-full h-full object-contain md:object-cover" />
                </SwiperSlide>
                <button class="swiper-nav-btn activity-prev" aria-label="上一项">
                  <i class="iconfont icon-angleleft"></i>
                </button>
                <button class="swiper-nav-btn activity-next" aria-label="下一项">
                  <i class="iconfont icon-angleright"></i>
                </button>
              </Swiper>
              
            </div>

            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-semibold">{{ item?.hotelCname }}</h3>
                <div v-if="item?.roomCount" class="price-tag whitespace-nowrap">{{ item?.roomCount }}</div>
              </div>
              <p class="text-gray-600 mb-2" v-if="item?.hotelEname">{{ item?.hotelEname }}</p>
              <p class="text-gray-600 mb-4" v-if="item?.desc">
                {{ item?.desc }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="tag tag-blue" v-show="item.size">{{ item.size }}</span>
                <span class="tag tag-blue" v-show="item.vol">{{ item.vol }}</span>
                <span class="tag tag-blue" v-show="item.withPool > 0">私人泳池</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div v-if="islandHotel.length > 2 && state.hotalMaxNumber === 2"
        class="mt-4 md:mt-0 justify-end flex cursor-pointer text-blue-500">
        <a @click="showAllHotel"
          class="text-primary-blue font-medium text-xl hover:text-primary-blue-dark transition-colors">
          展开全部精选房型 <i class="iconfont icon-arrowright ml-1"></i>
        </a>
      </div>

      <div v-else class="mt-4 md:mt-0 justify-end flex cursor-pointer text-blue-500">
        <a @click="unfoldAllHotel"
          class="text-primary-blue font-medium text-xl hover:text-primary-blue-dark transition-colors">
          收起全部精选房型 <i class="iconfont icon-arrowright ml-1"></i>
        </a>
      </div>
    </div>

    
  </div>
<div>
   
  </div>
  
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'


const props = defineProps({
  islandHotel: {
    type: Array,
    default: () => []
  }
})
const state = reactive({ 
  hotalMaxNumber: 2, 
})
const showAllHotel = () => {
  state.hotalMaxNumber = 999
}
const unfoldAllHotel = () => {
  state.hotalMaxNumber = 2
  scrollToSection('titleSection')
}

const titleSection = ref(null)

const scrollToSection = (sectionName) => {
  const sectionRefs = {
    titleSection,
  }

  const element = sectionRefs[sectionName]?.value
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

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

.price-tag {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--secondary-green);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.tag-blue {
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-blue);
}
.swiper-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.9);
  color: #0c4a6e;
  display: none;
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
.activity-prev {
  left: 8px;
}
.activity-next {
  right: 8px;
}
.swiper-nav-btn.swiper-button-disabled{
  opacity: 0.3;
  cursor: not-allowed;
}
.swiper-nav-btn.swiper-button-disabled:hover{
  background: #fff;
  color: #0c4a6e;
}

.custom-card-style:hover .swiper-nav-btn{
  display: flex;
}
</style>