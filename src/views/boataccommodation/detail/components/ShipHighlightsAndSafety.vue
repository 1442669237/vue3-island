<template>
    <div class="mt-8 bg-white rounded-xl p-6" v-if="data?.specialTag || data?.navigationSafetyTag">
        <div class="flex justify-between gap-6">
            <!-- 船只亮点 -->
            <div class="flex-1 bg-blue-50 rounded-xl py-6 px-4" v-if="data?.specialTag">
                <h2 class="text-lg font-semibold mb-4 text-blue-500">船只亮点</h2>
                <!-- 使用grid布局，每行显示2个，屏幕窄时显示1个 -->
                <div class="grid">
                    <div v-for="(item, index) in data.specialTag" :key="index">
                        <div v-if="showMore || index < 4"  class="flex items-center space-x-2 mb-2">
                            <i class="iconfont icon-check-circle-fill text-blue-500"></i>
                            <span class="text text-gray-700">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 安全服务 -->
            <div class="flex-1 bg-green-50 rounded-xl py-6 px-4" v-if="data?.navigationSafetyTag">
                <h2 class="text-lg font-semibold mb-4 text-green-500">安全服务</h2>
                <!-- 使用grid布局，每行显示2个，屏幕窄时显示1个 -->
                <div class="grid">
                    <div v-for="(item, index) in data.navigationSafetyTag" :key="index">
                        <div v-if="showMore || index < 4" class="flex items-center space-x-2 mb-2">
                            <i class="iconfont icon-check-circle-fill text-green-500"></i>
                            <span class="text text-gray-700">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 展开收起 -->
        <div @click="toggleMore" class="text-gray-900 text-lg hover:text-blue-700 mt-6 cursor-pointer flex items-center justify-center">
            <span>{{ showMore ? '收起' : '查看更多' }}</span>
            <i class="iconfont icon-chevron-down text-gray-900 ml-2" :class="{ 'rotate-180': showMore }"></i>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

// 展开收起功能
const showMore = ref(false)
const toggleMore = () => {
    showMore.value = !showMore.value
}
</script>

<style scoped>
/* 在这里调整样式，增加自定义样式 */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>