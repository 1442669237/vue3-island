<template>
  <section class="relative h-[400px] overflow-hidden shrink-0">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 z-10"></div>
    <img
      :src="imageUrl"
      alt="全球船宿精选"
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in text-shadow-lg">
        {{ title }}
      </h1>
      <p class="text-xl md:text-2xl text-white mb-8 animate-fade-in animate-delay-200 text-shadow">
        {{ subtitle }}
      </p>

      <div class="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4 animate-fade-in animate-delay-400">
        <div class="flex-grow relative">
          <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            :value="search"
            @input="onInput"
            placeholder="搜索船宿名称或目的地..."
            class="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          @click="onOpenMobileFilter"
          class="md:hidden px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <i class="fa-solid fa-filter mr-2"></i>
          筛选
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '全球船宿精选' },
  subtitle: { type: String, default: 'Dive To The World' },
  imageUrl: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3',
  },
  search: { type: String, default: '' },
})

const emit = defineEmits(['update:search', 'openMobileFilter'])

const onInput = (e) => emit('update:search', e.target.value)
const onOpenMobileFilter = () => emit('openMobileFilter')
</script>