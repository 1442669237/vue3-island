<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">特色体验</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl p-6 shadow-md card-hover">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <i class="iconfont icon-umbrella-beach text-primary-blue text-xl"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">无人沙洲</h3>
        <p class="text-gray-600">
          专属的无人沙洲提供极致私密的海滩体验，您可以在这里享受日光浴、野餐或浪漫的晚餐，完全不受打扰。
        </p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-md card-hover">
        <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
          <i class="iconfont icon-moon text-purple-600 text-xl"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">星空泳池</h3>
        <p class="text-gray-600">
          别墅的无边泳池采用特殊设计，夜晚时分，您可以仰卧在水中，欣赏马尔代夫璀璨的星空，体验独特的浪漫氛围。
        </p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-md card-hover">
        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <i class="iconfont icon-user-shield text-secondary-green text-xl"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">私人岛体验</h3>
        <p class="text-gray-600">
          作为一座私人岛屿，鹦鹉螺提供了无与伦比的私密性和专属服务，让您的假期完全按照自己的节奏和喜好度过。
        </p>
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