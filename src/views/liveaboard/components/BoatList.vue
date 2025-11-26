<template>
  <div id="boat-list" class="space-y-8">
    <div v-if="!loading && boats.length === 0" class="bg-white rounded-lg shadow-sm p-8 text-center">
      <p class="text-gray-600">暂无符合条件的船宿</p>
      <button @click="$emit('reset')" class="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">清除筛选条件</button>
    </div>

    <BoatCard v-for="(boat, index) in boats" :key="boat.id" :boat="boat" :delay="index * 100" />

    
  </div>
</template>

<script setup>
import BoatCard from './BoatCard.vue'

const props = defineProps({
  boats: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
})
</script>