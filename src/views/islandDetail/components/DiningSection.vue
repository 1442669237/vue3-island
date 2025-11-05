<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">餐饮体验</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div class="relative h-48">
          <img src="https://s.coze.cn/image/TBxp3WVGSUs/" alt="水上餐厅" class="w-full h-full object-cover" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">水上餐厅</h3>
          <p class="text-gray-600 mb-4">
            位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
          </p>
          <div class="flex items-center text-sm text-gray-500">
            <i class="iconfont icon-clock mr-2"></i> 早餐: 7:00-10:30 | 午餐: 12:30-15:00 | 晚餐: 19:00-22:30
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div class="relative h-48">
          <img src="https://s.coze.cn/image/tw967zrM-38/" alt="沙滩烧烤餐厅" class="w-full h-full object-cover" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">沙滩烧烤餐厅</h3>
          <p class="text-gray-600 mb-4">
            位于洁白沙滩上的烧烤餐厅提供各种新鲜的海鲜和肉类烧烤，您可以在星空下享用美食，感受浪漫的氛围。
          </p>
          <div class="flex items-center text-sm text-gray-500">
            <i class="iconfont icon-clock mr-2"></i> 晚餐: 19:00-22:30 (需提前预订)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 静态展示组件，无脚本逻辑
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
</style>