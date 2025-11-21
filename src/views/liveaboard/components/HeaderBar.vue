<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <i class="fa-solid fa-location-dot text-blue-600 text-xl"></i>
        <h1 class="text-xl font-bold text-gray-800">酷潜船宿精选</h1>
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">首页</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">目的地</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">船宿</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">关于我们</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">联系方式</a>
      </div>

      <div class="flex items-center space-x-4">
        <button class="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          登录/注册
        </button>
        <button class="md:hidden text-gray-600">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </header>
</template>