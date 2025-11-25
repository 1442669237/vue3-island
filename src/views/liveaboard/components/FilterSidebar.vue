<template>
  <aside class="hidden lg:block w-64 shrink-0">
    <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 class="text-lg font-bold text-gray-800 mb-6">筛选条件</h2>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">目的地</label>
        <select
          :value="destination"
          @change="(e) => emit('update:destination', e.target.value)"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option v-for="d in destinations" :key="d" :value="d">{{ d.cName }}</option>
        </select>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">出行日期</label>
        <div class="relative">
          <i
            class="fa-solid fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          ></i>
          <select
            :value="date"
            @change="(e) => emit('update:date', e.target.value)"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value="出行日期">出行日期</option>
            <option v-for="d in dates" :key="d" :value="d">{{ d }}</option>
          </select>
          <i
            class="fa-solid fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          ></i>
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex items-center">
          <input
            type="checkbox"
            id="available-only"
            :checked="availableOnly"
            @change="(e) => emit('update:availableOnly', e.target.checked)"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="available-only" class="ml-2 block text-sm text-gray-700"
            >仅看有余位船期</label
          >
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            id="special-only"
            :checked="specialOnly"
            @change="(e) => emit('update:specialOnly', e.target.checked)"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="special-only" class="ml-2 block text-sm text-gray-700">仅看特价船期</label>
        </div>
      </div>

      <button
        @click="emit('apply')"
        class="mt-8 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        应用筛选
      </button>

      <button
        @click="emit('reset')"
        class="mt-4 w-full bg-transparent text-gray-600 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
      >
        重置筛选
      </button>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  destination: { type: String, default: '' },
  date: { type: String, default: '' },
  availableOnly: { type: Boolean, default: false },
  specialOnly: { type: Boolean, default: false },
  destinations: { type: Array, default: () => [] },
  dates: { type: Object, default: () => ({}) },
})

const emit = defineEmits([
  'update:destination',
  'update:date',
  'update:availableOnly',
  'update:specialOnly',
  'apply',
  'reset',
])
</script>
