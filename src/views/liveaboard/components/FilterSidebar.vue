<template>
  <aside class="hidden lg:block w-64 shrink-0">
    <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 class="text-lg font-bold text-gray-800 mb-6">筛选条件</h2>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">目的地</label>
        <select
          :value="countryId"
          placeholder="请选择目的地"
          @change="(e) => emit('update:countryId', Number(e.target.value))"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">请选择目的地</option>
          <option v-for="d in destinations" :key="d.id" :value="d.id">{{ d.cName }}</option>
        </select>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">出行日期</label>
        <div class="relative">
          <i
            class="fa-solid fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          ></i>
          <select
            :value="month"
            @change="(e) => emit('update:month', e.target.value)"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value="">请选择出行日期</option>
            <option v-for="(d, key) in dates" :key="key" :value="key">{{ d }}</option>
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
            id="hasquotas"
            :checked="!!hasquotas"
            @change="(e) => emit('update:hasquotas', e.target.checked ? 1 : 0)"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="hasquotas" class="ml-2 block text-sm text-gray-700">仅看有余位船期</label>
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            id="isCheap"
            :checked="!!isCheap"
            @change="(e) => emit('update:isCheap', e.target.checked ? 1 : 0)"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="isCheap" class="ml-2 block text-sm text-gray-700">仅看特价船期</label>
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
  countryId: { type: [Number, String], default: '' },
  month: { type: String, default: '' },
  hasquotas: { type: Number, default: 0 },
  isCheap: { type: Number, default: 0 },
  destinations: { type: Array, default: () => [] },
  dates: { type: Object, default: () => ({}) },
})

const emit = defineEmits([
  'update:countryId',
  'update:month',
  'update:hasquotas',
  'update:isCheap',
  'apply',
  'reset',
])
</script>
