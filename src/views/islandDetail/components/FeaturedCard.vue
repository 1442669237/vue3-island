<template>
  <div>
    <!-- container -->
    <div class="container">
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(card, idx) in normalizedCards"
          :key="idx"
          class="card animate-fade-in"
          :class="'card-' + card.type.class"
          :style="{ animationDelay: `${0.1 * ((idx % 6) + 1)}s` }"
        >
          <div class="icon-container" :style="{ backgroundColor: card.type.bg }">
            <i
              class="iconfont text-2xl"
              :class="card.type.icon"
              :style="{ color: card.type.color }"
            ></i>
          </div>
          <h3 class="text-xl font-bold mb-2 flex items-center">
            <div>{{ card.title }}</div>
            <div
              class="score-badge"
              :style="{ backgroundColor: card.type.bg, color: card.type.color }"
            >
              {{ card.score }}
            </div>
          </h3>

          <p class="mt-4 text-gray-600">{{ card.desc }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const { commentElement } = defineProps({
  commentElement: {
    type: Array,
    default: () => [],
  },
})

// 类型与图标、颜色映射（使用项目内 iconfont）
const typeMap = {
  snorkeling: {
    name: '浮潜',
    class: 'snorkeling',
    icon: 'icon-Diving-Mask',
    color: '#1e88e5',
    bg: 'rgba(30, 136, 229, 0.1)',
    defaultDesc: '浮潜评分 {score} ，适合初级体验者。海域条件一般，适合初次尝试浮潜的游客。',
  },
  beach: {
    name: '沙滩',
    class: 'beach',
    icon: 'icon-umbrella-beach',
    color: '#ffc107',
    bg: 'rgba(255, 193, 7, 0.1)',
    defaultDesc:
      '沙滩评分 {score} ，优质沙滩体验。洁白细腻的沙滩，清澈的海水，提供极佳的海滩度假体验。',
  },
  family: {
    name: '亲子',
    class: 'family',
    icon: 'icon-child',
    color: '#4caf50',
    bg: 'rgba(76, 175, 80, 0.1)',
    defaultDesc:
      '亲子评分 {score} ，适合家庭游玩。完善的儿童设施，丰富的亲子活动，安全舒适的环境。',
  },
  honeymoon: {
    name: '蜜月',
    class: 'honeymoon',
    icon: 'icon-moon', // 替换原 Font Awesome 心形为项目内图标
    color: '#9c27b0',
    bg: 'rgba(156, 39, 176, 0.1)',
    defaultDesc:
      '蜜月评分 {score} ，浪漫氛围佳。私密的环境，浪漫的设施和服务，是蜜月旅行的理想选择。',
  },
  lagoon: {
    name: '泻湖',
    class: 'lagoon',
    icon: 'icon-water',
    color: '#00bcd4',
    bg: 'rgba(0, 188, 212, 0.1)',
    defaultDesc:
      '泻湖评分 {score} ，清澈水域景观。平静如镜的湖水，丰富的水上活动，美景令人心旷神怡。',
  },
  dining: {
    name: '餐饮',
    class: 'dining',
    icon: 'icon-utensils',
    color: '#ff9800',
    bg: 'rgba(255, 152, 0, 0.1)',
    defaultDesc:
      '餐饮评分 {score} ，美食体验良好。多样化的美食选择，优质的用餐环境，令人满意的餐饮服务。',
  },
  default: {
    name: '特色',
    class: 'feature',
    icon: 'icon-infocircle',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.1)',
    defaultDesc: '特色评分 {score} 。',
  },
}

function normalizeType(label) {
  const s = String(label || '').toLowerCase()
  if (/(浮潜|潜水|snorkel|diving)/.test(s)) return 'snorkeling'
  if (/(沙滩|海滩|beach)/.test(s)) return 'beach'
  if (/(亲子|家庭|family|儿童|小孩)/.test(s)) return 'family'
  if (/(蜜月|情侣|浪漫|honeymoon|moon)/.test(s)) return 'honeymoon'
  if (/(泻湖|环礁湖|lagoon|湖|水域)/.test(s)) return 'lagoon'
  if (/(餐饮|美食|餐厅|用餐|dining|饮食)/.test(s)) return 'dining'
  return 'default'
}

function formatScore(v) {
  if (typeof v === 'number') return `${v}/10`
  if (typeof v === 'string') {
    const m = v.match(/(\d+(?:\.\d+)?)/)
    return m ? `${m[1]}/10` : '--'
  }
  return '--'
}

function buildDesc(title, score, typeKey, rawValue) {
  if (typeof rawValue === 'string') {
    const looksLikeRating = /^\s*\d+(?:\.\d+)?\s*(?:\/10|分)?\s*$/.test(rawValue)
    const hasWords = /[\u4e00-\u9fa5a-zA-Z]/.test(rawValue)
    if (hasWords && !looksLikeRating && rawValue.length >= 10) {
      // 当后端直接给了长文本描述时，优先展示该描述
      return rawValue
    }
  }
  const t = typeMap[typeKey] || typeMap.default
  const scoreText = score !== '--' ? score : '暂无'
  return (t.defaultDesc || `${title}评分 {score} 。`).replace('{score}', scoreText)
}

const normalizedCards = computed(() => {
  const raw = Array.isArray(commentElement)
    ? commentElement
    : Array.isArray(commentElement?.data)
      ? commentElement.data
      : []

  const cards = []
  raw.forEach((item) => {
    if (!item || typeof item !== 'object') return
    const key = Object.keys(item)[0]
    const value = item[key]
    const typeKey = normalizeType(key)
    const type = typeMap[typeKey] || typeMap.default
    const title = key || type.name
    const score = formatScore(value)
    const desc = buildDesc(title, score, typeKey, value)
    cards.push({ title, score, desc, type })
  })

  // 如果后端当前无数据，使用默认类别占位以保留布局与样式
  if (!cards.length) {
    ;['snorkeling', 'beach', 'family', 'honeymoon', 'lagoon', 'dining'].forEach((tk) => {
      const t = typeMap[tk]
      cards.push({ title: t.name, score: '--', desc: buildDesc(t.name, '--', tk), type: t })
    })
  }
  return cards
})

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
  padding: 0.1rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-left: 0.5rem;
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
