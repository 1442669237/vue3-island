<template>
  <footer class="bg-dark-blue bg-[#f8fafd] py-12 color-[#666]">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4">海岛度假</h3>
          <p class="mb-4">为您提供全球顶级海岛度假体验，让每一次旅行都成为难忘的回忆。</p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-[#0ea5e9] transition-colors">
              <i class="fab fa-weixin text-xl"></i>
            </a>
            <a href="#" class="hover:text-[#0ea5e9] transition-colors">
              <i class="fab fa-weibo text-xl"></i>
            </a>
            <a href="#" class="hover:text-[#0ea5e9] transition-colors">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" class="hover:text-[#0ea5e9] transition-colors">
              <i class="fab fa-facebook text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">热门目的地</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">马尔代夫</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">巴厘岛</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">普吉岛</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">塞舌尔</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">毛里求斯</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">旅行服务</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">酒店预订</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">机票预订</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">度假套餐</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">签证服务</a></li>
            <li><a href="#" class="hover:text-[#0ea5e9] transition-colors">旅行保险</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="iconfont icon-phone-alt-solid mr-2"></i>
              <span>400-888-8888</span>
            </li>
            <li class="flex items-center">
              <i class="iconfont icon-envelope-open mr-2"></i>
              <span>info@islandholiday.com</span>
            </li>
            <li class="flex items-center">
              <i class="iconfont icon-map-marker-alt mr-2"></i>
              <span>北京市朝阳区建国路88号</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
        <p>© 2024 海岛度假. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 静态展示组件，无脚本逻辑
</script>

<style scoped>
/* 使用 Tailwind 类与 iconfont，无需额外样式 */
</style>