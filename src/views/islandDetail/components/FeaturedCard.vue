<template>
  <div>
    <!-- container -->
    <div class="container">
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- ======================= 浮潜 ======================= -->
        <div class="card card-snorkeling animate-fade-in" style="animation-delay: 0.1s">
          <div class="icon-container" style="background-color: rgba(30, 136, 229, 0.1)">
            <i class="iconfont icon-Diving-Mask text-2xl" style="color: #1e88e5"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">浮潜</h3>
          <div
            class="score-badge"
            style="background-color: rgba(30, 136, 229, 0.1); color: #1e88e5"
          >
            {{ getScore('浮潜') }}
          </div>
          <p class="mt-4 text-gray-600">
            浮潜评分 {{ getScore('浮潜') }} ，适合初级体验者。海域条件一般，适合初次尝试浮潜的游客。
          </p>
        </div>

        <!-- ======================= 沙滩 ======================= -->
        <div class="card card-beach animate-fade-in" style="animation-delay: 0.2s">
          <div class="icon-container" style="background-color: rgba(255, 193, 7, 0.1)">
            <i class="iconfont icon-umbrella-beach text-2xl" style="color: #ffc107"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">沙滩</h3>
          <div class="score-badge" style="background-color: rgba(255, 193, 7, 0.1); color: #ffc107">
            {{ getScore('沙滩') }}
          </div>
          <p class="mt-4 text-gray-600">
            沙滩评分
            {{ getScore('沙滩') }}
            ，优质沙滩体验。洁白细腻的沙滩，清澈的海水，提供极佳的海滩度假体验。
          </p>
        </div>

        <!-- ======================= 亲子 ======================= -->
        <div class="card card-family animate-fade-in" style="animation-delay: 0.3s">
          <div class="icon-container" style="background-color: rgba(76, 175, 80, 0.1)">
            <i class="iconfont icon-child text-2xl" style="color: #4caf50"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">亲子</h3>
          <div class="score-badge" style="background-color: rgba(76, 175, 80, 0.1); color: #4caf50">
            {{ getScore('亲子') }}
          </div>
          <p class="mt-4 text-gray-600">
            亲子评分
            {{ getScore('亲子') }} ，适合家庭游玩。完善的儿童设施，丰富的亲子活动，安全舒适的环境。
          </p>
        </div>

        <!-- ======================= 蜜月 ======================= -->
        <div class="card card-honeymoon animate-fade-in" style="animation-delay: 0.4s">
          <div class="icon-container" style="background-color: rgba(156, 39, 176, 0.1)">
            <i class="fas fa-heart text-2xl" style="color: #9c27b0"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">蜜月</h3>
          <div
            class="score-badge"
            style="background-color: rgba(156, 39, 176, 0.1); color: #9c27b0"
          >
            {{ getScore('蜜月') }}
          </div>
          <p class="mt-4 text-gray-600">
            蜜月评分
            {{ getScore('蜜月') }}
            ，浪漫氛围佳。私密的环境，浪漫的设施和服务，是蜜月旅行的理想选择。
          </p>
        </div>

        <!-- ======================= 泻湖 ======================= -->
        <div class="card card-lagoon animate-fade-in" style="animation-delay: 0.5s">
          <div class="icon-container" style="background-color: rgba(0, 188, 212, 0.1)">
            <i class="iconfont icon-water text-2xl" style="color: #00bcd4"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">泻湖</h3>
          <div class="score-badge" style="background-color: rgba(0, 188, 212, 0.1); color: #00bcd4">
            {{ getScore('泻湖') }}
          </div>
          <p class="mt-4 text-gray-600">
            泻湖评分
            {{ getScore('泻湖') }}
            ，清澈水域景观。平静如镜的湖水，丰富的水上活动，美景令人心旷神怡。
          </p>
        </div>

        <!-- ======================= 餐饮 ======================= -->
        <div class="card card-dining animate-fade-in" style="animation-delay: 0.6s">
          <div class="icon-container" style="background-color: rgba(255, 152, 0, 0.1)">
            <i class="iconfont icon-utensils text-2xl" style="color: #ff9800"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">餐饮</h3>
          <div class="score-badge" style="background-color: rgba(255, 152, 0, 0.1); color: #ff9800">
            {{ getScore('餐饮') }}
          </div>
          <p class="mt-4 text-gray-600">
            餐饮评分
            {{ getScore('餐饮') }}
            ，美食体验良好。多样化的美食选择，优质的用餐环境，令人满意的餐饮服务。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const { commentElement } = defineProps({
  commentElement: {
    type: Array,
    default: () => [],
  },
})

const scoreMap = ref({})

try {
  const arr = commentElement
  const obj = {}
  arr.forEach((item) => {
    const key = Object.keys(item)[0]
    obj[key] = item[key]
  })
  scoreMap.value = obj
} catch (e) {
  console.error('JSON 解析失败：', e)
}

function getScore(title) {
  const v = scoreMap.value[title]
  return typeof v === 'number' ? `${v}/10` : '--'
}
onMounted(() => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px) scale(1.01)'
    })
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)'
    })
  })
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-radius: 16px 16px 0 0;
}

.card-snorkeling::before {
  background: linear-gradient(90deg, #1e88e5, #42a5f5);
}

.card-beach::before {
  background: linear-gradient(90deg, #ffc107, #ffd54f);
}

.card-family::before {
  background: linear-gradient(90deg, #4caf50, #66bb6a);
}

.card-honeymoon::before {
  background: linear-gradient(90deg, #9c27b0, #ba68c8);
}

.card-lagoon::before {
  background: linear-gradient(90deg, #00bcd4, #26c6da);
}

.card-dining::before {
  background: linear-gradient(90deg, #ff9800, #ffb74d);
}

.icon-container {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
}

.score-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.tag-snorkeling {
  background-color: rgba(30, 136, 229, 0.1);
  color: #1e88e5;
}

.tag-beach {
  background-color: rgba(255, 193, 7, 0.1);
  color: #ffc107;
}

.tag-family {
  background-color: rgba(76, 175, 80, 0.1);
  color: #4caf50;
}

.tag-honeymoon {
  background-color: rgba(156, 39, 176, 0.1);
  color: #9c27b0;
}

.tag-lagoon {
  background-color: rgba(0, 188, 212, 0.1);
  color: #00bcd4;
}

.tag-dining {
  background-color: rgba(255, 152, 0, 0.1);
  color: #ff9800;
}
</style>
