<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 lg:hidden"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-bold text-gray-800">筛选条件</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">目的地</label>
        <select
          :value="countryId"
          @change="(e) => $emit('update:countryId', Number(e.target.value))"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option v-for="d in destinations" :key="d.id" :value="d.id">{{ d.cName }}</option>
        </select>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">出行日期</label>
        <select
          :value="month"
          @change="(e) => $emit('update:month', e.target.value)"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">出行日期</option>
          <option v-for="d in dates" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>

      <div class="space-y-3 mb-6">
        <div class="flex items-center">
          <input
            type="checkbox"
            id="mobile-hasquotas"
            :checked="!!hasquotas"
            @change="(e) => $emit('update:hasquotas', e.target.checked ? 1 : 0)"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="mobile-hasquotas" class="ml-2 block text-sm text-gray-700"
            >仅看有余位船期</label
          >
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            id="mobile-isCheap"
            :checked="!!isCheap"
            @change="(e) => $emit('update:isCheap', e.target.checked ? 1 : 0)"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="mobile-isCheap" class="ml-2 block text-sm text-gray-700">仅看特价船期</label>
        </div>
      </div>

      <div class="flex space-x-4">
        <button
          @click="$emit('apply')"
          class="flex-grow bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          应用筛选
        </button>
        <button
          @click="$emit('reset')"
          class="flex-grow bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
        >
          重置
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: { type: Boolean, default: false },
  countryId: { type: [Number, String], default: '' },
  month: { type: String, default: '' },
  hasquotas: { type: Number, default: 0 },
  isCheap: { type: Number, default: 0 },
  destinations: { type: Array, default: () => [] },
  dates: { type: Object, default: () => ({}) },
})
</script>
