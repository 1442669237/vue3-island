<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">交通指南</h2>
    <div class="bg-white rounded-xl p-6 shadow-md">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">上岛方式</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i class="iconfont icon-plane-departure text-primary-blue"></i>
              </div>
              <div>
                <h4 class="font-medium mb-1">水上飞机</h4>
                <p class="text-gray-600 text-sm">从马累国际机场乘坐水上飞机，约30分钟即可抵达鹦鹉螺私人岛。</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i class="iconfont icon-plane text-secondary-green"></i>
              </div>
              <div>
                <h4 class="font-medium mb-1">内飞+快艇</h4>
                <p class="text-gray-600 text-sm">先乘坐内陆飞机至中转站(约15分钟)，然后转乘快艇至岛屿(约15分钟)。</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4">接送服务</h3>
          <p class="text-gray-600 mb-4">鹦鹉螺私人岛提供专属的接送服务，包括机场到岛屿的往返交通。预订确认后，酒店会安排专人在机场迎接您，并协助您办理登机手续。</p>
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-blue-800 text-sm">
              <i class="iconfont icon-infocircle mr-2"></i>
              为了确保您的行程顺利，请在预订时提供准确的航班信息，包括航空公司、航班号和抵达时间。
            </p>
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
/* 无特定自定义样式，使用 Tailwind 与全局变量即可 */
</style>