<template>
  <div class="fade-in">
    <h2 class="text-3xl font-bold mb-6 text-dark-blue">用户评价</h2>
    <FeaturedCard :comment-element="commentElement" />

    <div class="bg-white rounded-xl p-6 shadow-md">
      <RadarChart :comment-element="commentElement" />
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <div class="flex items-center mb-2">
            <div class="star-rating mr-2">
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
            </div>
            <span class="text-2xl font-bold">9.2</span>
            <span class="text-gray-500 ml-2">/ 10</span>
          </div>
          <p class="text-gray-600">基于300+位住客的真实评价</p>
        </div>

        <div class="mt-4 md:mt-0">
          <a
            href="#"
            class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors"
          >
            查看全部评价 <i class="iconfont icon-arrowright ml-1"></i>
          </a>
        </div>
      </div>
      <div class="space-y-6">
        <!-- 评价1 -->
        <div class="border-b border-gray-100 pb-6">
          <div class="flex items-center mb-3">
            <img
              src="https://s.coze.cn/image/m8wrVLh_c9E/"
              alt="用户头像"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="font-medium">张女士</h4>
              <p class="text-gray-500 text-sm">2024年5月 度蜜月</p>
            </div>
          </div>
          <div class="star-rating mb-3">
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
          </div>
          <p class="text-gray-700">
            "这是我们度过的最完美的蜜月之旅！水上别墅的设计非常独特，私人泳池和玻璃地板让我们可以随时欣赏美丽的海底世界。管家服务非常贴心，餐厅的美食也令人难忘。强烈推荐给所有想要享受奢华度假体验的情侣！"
          </p>
        </div>

        <!-- 评价2 -->
        <div class="border-b border-gray-100 pb-6">
          <div class="flex items-center mb-3">
            <img
              src="https://s.coze.cn/image/2VmjSuacRj4/"
              alt="用户头像"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="font-medium">王先生</h4>
              <p class="text-gray-500 text-sm">2024年3月 家庭旅行</p>
            </div>
          </div>
          <div class="star-rating mb-3">
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star-half-alt"></i>
          </div>
          <p class="text-gray-700">
            "带家人来鹦鹉螺度假是我们做过的最好的决定之一。孩子们非常喜欢水上活动和无人沙洲，而我们则享受了宁静的放松时光。工作人员非常友好，特别是儿童看护服务让我们可以安心享受二人世界。唯一的小缺点是价格有点高，但考虑到提供的服务和体验，绝对值得！"
          </p>
        </div>

        <!-- 评价3 -->
        <div>
          <div class="flex items-center mb-3">
            <img
              src="https://s.coze.cn/image/88-Ymalxg8Q/"
              alt="用户头像"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="font-medium">李先生</h4>
              <p class="text-gray-500 text-sm">2024年1月 独自旅行</p>
            </div>
          </div>
          <div class="star-rating mb-3">
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
          </div>
          <p class="text-gray-700">
            "作为一名摄影爱好者，我对鹦鹉螺的美景感到惊叹。无论是日出、日落还是星空，每一个时刻都让我按下快门。岛上的设施非常完善，工作人员也很专业。虽然是独自旅行，但我一点也不感到孤单，反而享受了难得的宁静和自我反思的时间。"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FeaturedCard from './FeaturedCard.vue'
import { ref, watch } from 'vue'

const commentElement = ref([])

const { islandDetail } = defineProps({
  islandDetail: {
    type: Object,
    default: () => ({}),
  },
})

watch(
  () => islandDetail,
  (newVal) => {
    if (newVal && newVal.commentElement) {
      try {
        commentElement.value = JSON.parse(newVal.commentElement)
        console.log('解析后的数据:', commentElement.value)
      } catch (error) {
        console.error('JSON 解析失败:', error)
        commentElement.value = []
      }
    }
  },
  { immediate: true, deep: true },
)
</script>

<style scoped>
.star-rating {
  color: #f59e0b;
}
</style>
