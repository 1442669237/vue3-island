<template>
  <div class="lg:hidden flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold text-gray-800">船宿列表</h2>
    <button
      @click="$emit('openMobileFilter')"
      class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center"
    >
      <i class="fa-solid fa-filter mr-2"></i>
      筛选
    </button>
  </div>
</template>