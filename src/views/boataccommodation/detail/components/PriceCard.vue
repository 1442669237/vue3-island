<template>
  <div class="mt-8 bg-white rounded-xl p-6 shadow-md">
    <!-- 产品信息 -->
    <div v-for="(item, index) in prices" :key="index">
      <div class="flex" v-if="showMorePrices || index == 0" :class="{'border-t border-gray-300 mt-6 pt-6' : index > 0}">
        <img 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1"
          class="w-[200px] h-[200px] object-cover rounded-md" 
          @click="openModal"/>
        <div class="ml-6 flex-1">
          <!-- 基本信息 -->
          <div class="flex justify-between h-[200px]">
            <div>
              <h3 class="text-2xl font-bold">下甲板标准房</h3>
              <!-- 8天/7晚 标签形式 -->
              <div class="flex space-x-2 mt-4">
                <span class="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full">8天/7晚</span>
                <span class="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full">潜水冒险</span>
                <span class="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full">海洋探索</span>
              </div>
              <!-- 价格 -->
              <div class="flex justify-between mt-4">
                <span class="text-lg text-gray-900 font-semibold">价格：$2,500</span>
              </div>
            </div>
            <div class="flex items-end justify-center">
              <!-- 详细信息展开收起 -->
              <div
                class="w-[30px] h-[30px] mb-[5px] border-[1px] border-gray-500 rounded-full mr-[10px] flex items-center justify-center pt-[5px] cursor-pointer"
                :class="{ 'rotate-180 pt-[0px]': isDetailsVisibleList[index] == 1 }" @click="toggleDetails(index)">
                <i class="iconfont icon-chevron-down text-gray-500"></i>
              </div>
              <!-- 立即预订 -->
              <button class="bg-blue-500 h-[40px] text-white py-2 px-4 rounded" @click="handleCustomMethod(true)">立即预订</button>
            </div>
          </div>
          <!-- 详细信息 -->
          <div v-if="isDetailsVisibleList[index] == 1" class="mt-4 bg-gray-50 rounded-xl p-6 w-full">
            <h4 class="font-semibold text-lg text-gray-800 mb-4">仓房信息</h4>
            
            <!-- 房间图片展示 -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div class="relative">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1"
                  alt="房间图片" class="w-full h-[200px] object-cover rounded-md cursor-pointer"
                  @click="openModal" />
                <div class="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">房间1</div>
              </div>
              
              <div class="relative">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1"
                  alt="房间图片" class="w-full h-[200px] object-cover rounded-md cursor-pointer"
                  @click="openModal" />
                <div class="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">房间2</div>
              </div>

              <div class="relative">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1"
                  alt="房间图片" class="w-full h-[200px] object-cover rounded-md cursor-pointer"
                  @click="openModal" />
                <div class="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">房间3</div>
              </div>
            </div>

            <!-- 房间详细信息 -->
            <div class="mt-6">
              <h5 class="font-medium text-lg text-gray-800">房间配置</h5>
              <div class="flex mt-4">
                <div class="w-[50%]">
                  <div class="flex items-center">
                    <i class="iconfont icon-chuang mr-2"></i>
                    <p class="text-gray-700">1张双人床或2张单人床（可调整为双床）</p>
                  </div>
                  <div class="flex items-center">
                    <i class="iconfont icon-jianzhu_jianzhu_building-two text-gray-600 text-xl mr-2"></i>
                    <p class="text-gray-700">24.6平方米</p>
                  </div>
                  <div class="flex items-center">
                    <i class="iconfont icon-huasa text-gray-600 text-xl mr-2"></i>
                    <p class="text-gray-700">独立浴室</p>
                  </div>
                </div>
                <div class="w-[50%]">
                  <div class="flex items-center">
                    <i class="iconfont icon-duoren text-gray-600 text-xl mr-2"></i>
                    <p class="text-gray-700">最多2位客人</p>
                  </div>
                  <div class="flex items-center">
                    <i class="iconfont icon-kongtiao text-gray-600 text-xl mr-2"></i>
                    <p class="text-gray-700">可控空调</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div @click="toggleMorePrices"
      class="text-gray-900 text-lg hover:text-blue-700 mt-6 cursor-pointer flex items-center justify-center">
      <span>{{ showMorePrices ? '收起' : '查看更多' }}</span>
      <i class="iconfont icon-chevron-down text-gray-900 ml-2" :class="{ 'rotate-180': showMorePrices }"></i>
    </div>

    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" @click="closeModal">
      <div class="relative">
        <img :src="modalImage" alt="放大图片" class="w-[80vw] object-contain" />
        <div class="absolute top-2 right-2 text-white cursor-pointer" @click="closeModal">
          <i class="iconfont icon-times text-3xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted,defineProps } from 'vue'

const props = defineProps({
  handleCustomMethod: {
    type: Function,
    required: true
  }
})

// 所有价格项
const prices = [2500, 3000, 3500, 4000, 4500, 5000]
// 控制展开收起价格列表
const showMorePrices = ref(false)
// 控制展开收起仓房信息
const isDetailsVisibleList = ref([])
// 控制 Modal 显示与隐藏
const modalVisible = ref(false)
const modalImage = ref('')
onMounted(() => {
  const N = prices.length
  isDetailsVisibleList.value = Array(N).fill(0)
})
const toggleMorePrices = () => {
  showMorePrices.value = !showMorePrices.value
}
const toggleDetails = (index,flag) => {
  isDetailsVisibleList.value[index] = isDetailsVisibleList.value[index] == 1 ? 0 : 1
}
const openModal = () => {
  modalImage.value = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1'
  modalVisible.value = true
}
const closeModal = () => {
  modalVisible.value = false
}
</script>
<style scoped>
/* 加入样式以确保图片填充 */
object-cover {
  object-fit: cover;
}
</style>
