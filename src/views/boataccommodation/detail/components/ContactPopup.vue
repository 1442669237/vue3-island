<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg shadow-lg w-[30%] min-w-[550px] p-6 relative">
      <button @click="closeModal" class="absolute top-2 right-2 text-xl font-semibold text-gray-500">
        ×
      </button>
      <div class="flex flex-col items-center">
        <h2 class="text-2xl font-semibold mb-6 text-dark-blue">联系我们</h2>

        <div class="relative w-[400px] h-[400px] border-[14px] border-blue-400 rounded-[50px] mt-6 flex items-center justify-center">
            <img src="https://ota-front-public.oss-cn-hangzhou.aliyuncs.com/web-app/hotel/orderDetail/ewmnew.jpeg" alt="QR Code" class="w-[300px] h-[300px] mb-4 bg-[red]" />
            <div class="w-[200px] h-[16px] bg-[white] absolute top-[-15px]"></div>
            <div class="w-[200px] h-[16px] bg-[white] absolute bottom-[-15px]"></div>
            <div class="w-[16px] h-[200px] bg-[white] absolute left-[-15px]"></div>
            <div class="w-[16px] h-[200px] bg-[white] absolute right-[-15px]"></div>
            <div class="w-[36px] h-[14px] bg-blue-400 absolute left-[-24px]"></div>
            <div class="w-[36px] h-[14px] bg-blue-400 absolute right-[-24px]"></div>
        </div>
        
        <p class="text-lg font-semibold mt-10">船只预定</p>
        <p class="text-gray-700 mt-8">查询折扣价格</p>
        <p class="text-gray-700 mb-4">请扫码联系酷潜小客服</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits()

const closeModal = () => {
  emit('update:customPopisVisible', false)  // 触发事件并将状态传递给父组件
}
</script>

<style scoped>
</style>
