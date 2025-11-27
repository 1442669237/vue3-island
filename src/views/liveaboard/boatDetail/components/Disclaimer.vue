<template>
  <div class="mt-8 bg-white rounded-xl p-6 shadow-md booking-box">
    <h2 class="text-2xl font-semibold mb-6 text-dark-blue">免责声明</h2>
    <div class="text-base text-gray-800">
      <p class="mb-8">
        我司作为全球船宿产品的代理机构，致力于提供潜水相关行程的代订服务。在此，我们特别提醒客户仔细阅读以下免责声明，以确保您充分了解相关事宜：
      </p>

      <div class="mb-4 border-b border-gray-400 pb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleDetails(0)">
            <span class="font-semibold text-lg text-blue-500">🌟 服务提供商：</span>
            <i class="iconfont icon-chevron-down text-gray-900" :class="{ 'rotate-180': isDetailList[0] }"></i>
        </div>
        <p class="mt-2 ml-6" v-if="isDetailList[0]">我司作为行程代理商，致力于为客户提供最佳的旅行服务。行程所涉及的服务，可能由第三方船公司提供，行程解释权归船公司所有。</p>
      </div>

      <div class="mb-4 border-b border-gray-400 pb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleDetails(1)">
            <span class="font-semibold text-lg text-blue-500">🌟 行程变更风险：</span>
            <i class="iconfont icon-chevron-down text-gray-900" :class="{ 'rotate-180': isDetailList[1] }"></i>
        </div>
        <p class="mt-2 ml-6" v-if="isDetailList[1]">行程线路可能因天气、政府行为、罢工、天灾等不可抗因素导致变更或取消。我们将尽力通知您，并提供相关替代方案。
        </p>
      </div>

      <div class="mb-4 border-b border-gray-400 pb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleDetails(2)">
            <span class="font-semibold text-lg text-blue-500">🌟 潜水安全风险：</span>
            <i class="iconfont icon-chevron-down text-gray-900" :class="{ 'rotate-180': isDetailList[2] }"></i>
        </div>
        <p class="mt-2 ml-6" v-if="isDetailList[2]">参与潜水活动存在一定风险，请遵守当地潜水规定和安全准则。我们不对因个人健康问题导致的损失负责。您应该遵循目的地的健康和安全建议，并在需要时寻求医疗帮助。</p>
      </div>

      <div class="mb-4 border-b border-gray-400 pb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleDetails(3)">
            <span class="font-semibold text-lg text-blue-500">🌟 责任与义务：</span>
            <i class="iconfont icon-chevron-down text-gray-900" :class="{ 'rotate-180': isDetailList[3] }"></i>
        </div>
        <p class="mt-2 ml-6" v-if="isDetailList[3]">潜水行程可能发生因不限于上述风险所导致的损失，我司将尽力确保第三方船公司服务质量，但不对最终结果负责。我们建议您出行前应购买覆盖前述风险的个人潜水保险，以对抗可能发生的风险。</p>
      </div>

      <div class="mb-4 border-b border-gray-400 pb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleDetails(4)">
            <span class="font-semibold text-lg text-blue-500">🌟 预订即表示同意：</span>
            <i class="iconfont icon-chevron-down text-gray-900" :class="{ 'rotate-180': isDetailList[4] }"></i>
        </div>
        <p class="mt-2 ml-6" v-if="isDetailList[4]">购买潜水行程船宿产品即表示您同意并接受上述免责声明的全部内容。</p>
      </div>

      <div class="mb-4 border-b border-gray-400 pb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleDetails(5)">
            <span class="font-semibold text-lg text-blue-500">🌟 有疑问请联系：</span>
            <i class="iconfont icon-chevron-down text-gray-900" :class="{ 'rotate-180': isDetailList[5] }"></i>
        </div>
        <p class="mt-2 ml-6" v-if="isDetailList[5]">如有任何疑问或需要进一步了解，请随时联系我们，我们将尽力提供协助和解答。谢谢您对我们服务的信任与理解。</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,onMounted } from 'vue'
const isDetailList = ref([])

onMounted(() => {
    isDetailList.value = Array(6).fill(false)
})
const toggleDetails = (index,flag) => {
  isDetailList.value[index] = !isDetailList.value[index]
}
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