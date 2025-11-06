<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">海岛简介</h2>
    <div class="prose prose-lg max-w-none text-base">
      <div v-html="formattedIntroduction"></div>
    </div>
    <div class="mt-8 bg-white rounded-xl p-6 shadow-md">
      <h3 class="text-xl font-semibold mb-4">基础信息</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-map-marked-alt text-primary-blue"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">所在环礁</h4>
            <p class="text-gray-600">{{ islandDetail.atoll }}</p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-expand text-secondary-green"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">岛屿大小</h4>
            <p class="text-gray-600">{{ islandDetail.islandScale }} | 265*192(Map)</p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="iconfont icon-plane-departure text-purple-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">上岛交通</h4>
            <p class="text-gray-600">{{ islandDetail.transferMethod.join(' / ') }}</p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
          >
            <i class="fas fa-clock text-orange-600"></i>
          </div>
          <div>
            <h4 class="font-medium mb-1">上岛时间</h4>
            <p class="text-gray-600">30分钟 / 15+15分钟</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  islandDetail: {
    type: Object,
    default: () => ({}),
  },
})

// 1) 将换行替换为 <br/>
// 2) 在每个开始 <p> 标签前插入一个 <br/>
const formattedIntroduction = computed(() => {
  const raw = props.islandDetail?.introduction || ''
  // 步骤1：将换行统一为 <br/>
  let out = raw.replace(/\r?\n/g, '<br/>')
  // 步骤2：在每个开始 <p> 标签前插入一个 <br/>
  out = out.replace(/<p(\b|>)/gi, '<br/><p$1')
  // 步骤3：去重：将 <p> 前面连续多个 <br/> 压缩为一个，避免出现三连 <br/>
  out = out.replace(/(?:<br\/>\s*){2,}(?=<p\b)/gi, '<br/>')
  return out
})
</script>

<style scoped>
/* 使用 Tailwind 与 prose 样式，无需额外样式 */
</style>
