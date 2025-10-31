<template>
  <section class="space-y-4">
    <h1 class="text-xl font-bold text-indigo-600 text-center mt-1">Hello Tailwind</h1>
    <p class="text-red-500 font-semibold">{{ message }}</p>
    <!-- SplitText 动画展示 -->
    <SplitText
      text="VUE * BITS * IS AWESOME * "
      :spin-duration="20"
      on-hover="speedUp"
      class-name="text-blue-500"
    />
    <div class="p-4 bg-white rounded shadow-sm border border-gray-200">
      <button class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        按钮示例
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SplitText from '@/components/SplitText.vue'
import { submitForm } from '../api/index.js'
const message = ref('加载中...')
const splitText = ref('Vue Bits · Split Text 动画示例')

onMounted(async () => {
  try {
    const res = await submitForm({ pageSize: 10 })
    console.log(res)
    const data = res?.data ?? res
    message.value = data?.message || '无数据'
  } catch (e) {
    message.value = '请求失败：' + (e?.message || '')
  }
})
</script>

<style scoped></style>
