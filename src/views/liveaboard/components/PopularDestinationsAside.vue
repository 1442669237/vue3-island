<template>
  <aside class="hidden xl:block w-80 shrink-0">
    <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 class="text-lg font-bold text-gray-800 mb-6">热门目的地</h2>

      <div class="space-y-4">
        <div class="rounded-lg overflow-hidden cursor-pointer group">
          <div class="relative h-40 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1566522905043-7a77d5846dd8?auto=format&fit=crop&q=80" alt="四王岛" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-white font-bold">四王岛</h3>
              <div class="flex items-center text-white/90 mt-1">
                <i class="fa-solid fa-location-dot mr-1 text-xs"></i>
                <span class="text-xs">印度尼西亚</span>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg overflow-hidden cursor-pointer group">
          <div class="relative h-40 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1567140435201-c8296f384a53?auto=format&fit=crop&q=80" alt="科莫多" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-white font-bold">科莫多</h3>
              <div class="flex items-center text-white/90 mt-1">
                <i class="fa-solid fa-location-dot mr-1 text-xs"></i>
                <span class="text-xs">印度尼西亚</span>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg overflow-hidden cursor-pointer group">
          <div class="relative h-40 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80" alt="巴厘岛" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-white font-bold">巴厘岛</h3>
              <div class="flex items-center text-white/90 mt-1">
                <i class="fa-solid fa-location-dot mr-1 text-xs"></i>
                <span class="text-xs">印度尼西亚</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 class="font-bold text-blue-800 mb-2">需要帮助？</h3>
        <p class="text-blue-700 text-sm mb-4">我们的潜水专家可以为您提供个性化的船宿建议</p>
        <button class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
          <i class="fa-solid fa-comment mr-2 text-sm"></i>
          联系专家
        </button>
      </div>
    </div>
  </aside>
</template>