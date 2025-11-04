<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">精选房型</h2>
    <div class="space-y-8">
      <!-- 水上别墅 -->
      <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="relative h-64 md:h-auto">
            <img src="https://s.coze.cn/image/M8JIa-0A1l8/" alt="水上别墅" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-semibold">水上别墅</h3>
              <div class="price-tag">¥18,000/晚起</div>
            </div>
            <p class="text-gray-600 mb-4">
              水上别墅建在清澈的海面上，拥有私人泳池和玻璃地板，可以直接欣赏海底世界。别墅内部装饰精美，配备了高端设施，为您提供舒适奢华的住宿体验。
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tag tag-blue">180㎡</span>
              <span class="tag tag-blue">1-2人</span>
              <span class="tag tag-blue">私人泳池</span>
              <span class="tag tag-blue">玻璃地板</span>
            </div>
            <a href="#" class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors">
              查看详情 <i class="iconfont icon-arrowright ml-1"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- 沙滩别墅 -->
      <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="relative h-64 md:h-auto order-2 md:order-1">
            <img src="https://s.coze.cn/image/9HzKx_2HVe4/" alt="沙滩别墅" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 order-1 md:order-2">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-semibold">沙滩别墅</h3>
              <div class="price-tag">¥20,000/晚起</div>
            </div>
            <p class="text-gray-600 mb-4">
              沙滩别墅直接通向洁白的沙滩，拥有宽敞的私人花园和户外休息区。别墅内部空间开阔，装饰典雅，配备了先进的设施，为您提供宁静舒适的度假环境。
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tag tag-blue">220㎡</span>
              <span class="tag tag-blue">2-3人</span>
              <span class="tag tag-blue">私人花园</span>
              <span class="tag tag-blue">直通沙滩</span>
            </div>
            <a href="#" class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors">
              查看详情 <i class="iconfont icon-arrowright ml-1"></i>
            </a>
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
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.price-tag {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--secondary-green);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.tag-blue {
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-blue);
}
</style>