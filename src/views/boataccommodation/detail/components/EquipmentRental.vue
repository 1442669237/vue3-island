<template>
  <div class="mt-8 bg-white rounded-xl p-6 booking-box" v-if="data?.equipmentResponseDTO?.equipmentItems">
    <h2 class="text-2xl font-semibold mb-4">装备租赁</h2>

    <!-- 装备网格 -->
    <table class="min-w-full table-auto border-collapse border border-gray-300 relative z-0">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-3 text-left font-semibold text-gray-700 border-r border-gray-300">装备名称</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-700">价格（每天）</th>
        </tr>
      </thead>
      <tbody>
        <!-- 显示前两行，更多行显示根据展开状态决定 -->
        <tr
          v-for="(item, index) in data.equipmentResponseDTO.equipmentItems.slice(0, showMore ? equipmentList.length : 2)"
          :key="index"
          class="border-t border-gray-300 hover:bg-gray-50 cursor-pointer"
        >
          <td class="px-4 py-3 border-r border-gray-300">{{ item.name }}</td>
          <td class="px-4 py-3 text-gray-700">{{ item.priceDesc }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 展开收起按钮 -->
    <div @click="toggleShowMore"
      class="text-gray-900 text-lg hover:text-blue-700 mt-6 cursor-pointer flex items-center justify-center">
      <span>{{ showMore ? '收起' : '查看更多' }}</span>
      <i class="iconfont icon-chevron-down text-gray-900 ml-2" :class="{ 'rotate-180': showMore }"></i>
    </div>
  </div>
</template>

<script setup>
// 是否显示所有装备项
import { ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const showMore = ref(false);
// 切换展开/收起状态
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<style scoped>
.booking-box {
  position: relative; /* 让背景渐变层浮在上面 */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.booking-box:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>