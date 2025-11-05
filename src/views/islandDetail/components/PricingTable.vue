<template>
  <section class="fade-in mb-20">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">消费明细</h2>
    <div class="bg-white rounded-xl p-6 shadow-md">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目</th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">包含内容</th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格</th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">备注</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">住宿</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">水上别墅/沙滩别墅 5晚住宿</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">¥60,000-80,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">根据房型和季节不同</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">餐饮</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">早餐、午餐、晚餐（全包式）</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">已包含在住宿费用中</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">特殊餐厅和高端酒水需额外付费</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">交通</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">马累机场至岛屿往返交通</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">¥8,000-12,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">根据交通方式不同</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">活动</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">浮潜、独木舟、健身房等基础活动</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">免费</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">深潜、海钓等特殊活动需额外付费</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">税费和服务费</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">政府税、环保税、服务费等</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">约为总费用的10-15%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">根据实际消费计算</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
        <p class="text-yellow-800 text-sm">
          <i class="iconfont icon-infocircle mr-2"></i>
          以上价格仅供参考，实际价格可能因季节、房型、人数等因素而有所不同。预订前请联系客服获取准确报价。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// 静态展示组件，无脚本逻辑
</script>

<style scoped>
/* 使用 Tailwind 类，无需额外样式 */
</style>