<template>
  <div id="booking" class="booking-box sticky top-24 p-6">
    <h2 class="text-2xl font-bold mb-6 text-dark-blue">预订信息</h2>

    <!-- 价格信息 -->
    <!-- <div class="mb-8">
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-600">淡季预算 (5-10月)</span>
        <span class="font-bold text-xl"
          >$1,000<span class="text-sm font-normal text-gray-500">/2人起</span></span
        >
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">旺季预算 (11-4月)</span>
        <span class="font-bold text-xl"
          >$2,500<span class="text-sm font-normal text-gray-500">/2人起</span></span
        >
      </div>
      <p class="text-gray-500 text-sm mt-2">* 价格包含住宿、餐饮、上岛交通和部分活动</p>
    </div> -->

    <!-- 预订表单 -->
    <div class="space-y-4 mb-8">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">发出日期</label>
        <div class="relative">
          <input
            type="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">返回日期</label>
        <div class="relative">
          <input
            type="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">客人数量</label>
        <div class="relative">
          <select
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all appearance-none"
          >
            <option>2位成人</option>
            <option>2位成人, 1位儿童</option>
            <option>2位成人, 2位儿童</option>
            <option>3位成人</option>
            <option>4位成人</option>
          </select>
          <div
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          >
            <i class="iconfont icon-chevron-down"></i>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">国家选择</label>
        <div class="relative">
          <select
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all appearance-none"
          >
            <option>澳大利亚</option>
            <option>伯利兹</option>
            <option>哥斯达黎加</option>
            <option>埃及</option>
            <option>斐济</option>
            <option>加拉帕戈斯</option>
            <option>洪都拉斯</option>
            <option>印度尼西亚</option>
            <option>马尔代夫</option>
            <option>墨西哥</option>
            <option>帕劳</option>
            <option>菲律宾</option>
            <option>泰国</option>
          </select>
          <div
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          >
            <i class="iconfont icon-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
    
    <a
      class="block w-full text-center px-6 py-3 border border-primary-blue text-primary-blue font-medium rounded-lg hover:bg-primary-blue/5 transition-colors cursor-pointer"
      @click="handleCustomMethod(true)"
    >
      <i class="iconfont icon-infocircle mr-2"></i> 咨询客服
    </a>

    <!-- 优惠信息 -->
    <div class="mt-8 p-4 bg-blue-50 rounded-lg">
      <h3 class="font-semibold mb-2 text-blue-800">限时优惠</h3>
      <ul class="space-y-2 text-sm text-blue-700">
        <li class="flex items-start">
          <i class="iconfont icon-check-circle-fill mr-2 mt-0.5"></i>
          <span>预订7晚及以上，享受8.5折优惠</span>
        </li>
        <li class="flex items-start">
          <i class="iconfont icon-check-circle-fill mr-2 mt-0.5"></i>
          <span>蜜月客人可获赠香槟和鲜花</span>
        </li>
        <li class="flex items-start">
          <i class="iconfont icon-check-circle-fill mr-2 mt-0.5"></i>
          <span>提前30天预订，免费升级房型</span>
        </li>
      </ul>
    </div>

    <!-- 联系信息 -->
    <div class="mt-8 pt-6 border-t border-gray-200">
      <h3 class="font-semibold mb-4 text-gray-700">联系我们</h3>
      <div class="space-y-3">
        <div class="flex items-center text-gray-600">
          <i class="iconfont icon-phone-alt-solid w-5 text-center mr-3 text-primary-blue"></i>
          <span>400-888-8888</span>
        </div>
        <div class="flex items-center text-gray-600">
          <i class="iconfont icon-envelope-open w-5 text-center mr-3 text-primary-blue"></i>
          <span>booking@nautilus-maldives.com</span>
        </div>
        <div class="flex items-center text-gray-600">
          <i class="iconfont icon-weixin w-5 text-center mr-3 text-primary-blue text-xl"></i>
          <span>nautilus_maldives</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  handleCustomMethod: {
    type: Function,
    required: true
  }
})
</script>

<style scoped>
.booking-box {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.booking-box:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-2px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>