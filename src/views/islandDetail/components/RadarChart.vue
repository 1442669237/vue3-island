<template>
  <div class="container">
    <div class="chart-container mb-12">
      <canvas ref="canvasRef" id="optimizedRadarChart"></canvas>
    </div>

    <div class="rounded-xl">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">数据维度说明</h2>
      <div class="space-y-4">
        <div class="flex items-start">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
            style="background-color: rgba(30, 136, 229, 0.1)"
          >
            <i class="fas fa-water" style="color: #1e88e5"></i>
          </div>
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-medium mr-2">浮潜</h4>
              <span class="tag tag-snorkeling">8.5分</span>
            </div>
            <p class="text-gray-600">
              评估了海域的清澈度、海洋生物多样性、珊瑚礁健康状况以及浮潜点的可达性。
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
            style="background-color: rgba(255, 193, 7, 0.1)"
          >
            <i class="fas fa-umbrella-beach" style="color: #ffc107"></i>
          </div>
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-medium mr-2">沙滩</h4>
              <span class="tag tag-beach">9.2分</span>
            </div>
            <p class="text-gray-600">
              评估了沙滩的洁白度、细腻度、长度、人流量以及周边环境的美观程度。
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
            style="background-color: rgba(76, 175, 80, 0.1)"
          >
            <i class="fas fa-child" style="color: #4caf50"></i>
          </div>
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-medium mr-2">亲子</h4>
              <span class="tag tag-family">7.8分</span>
            </div>
            <p class="text-gray-600">
              评估了儿童设施的完善度、儿童活动的丰富性、安全措施以及适合家庭的餐饮选择。
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
            style="background-color: rgba(156, 39, 176, 0.1)"
          >
            <i class="fas fa-heart" style="color: #9c27b0"></i>
          </div>
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-medium mr-2">蜜月</h4>
              <span class="tag tag-honeymoon">9.5分</span>
            </div>
            <p class="text-gray-600">
              评估了私密性、浪漫氛围、蜜月套餐、特殊服务以及适合情侣的活动和体验。
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
            style="background-color: rgba(0, 188, 212, 0.1)"
          >
            <i class="fas fa-water" style="color: #00bcd4"></i>
          </div>
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-medium mr-2">泻湖</h4>
              <span class="tag tag-lagoon">9.0分</span>
            </div>
            <p class="text-gray-600">
              评估了泻湖的面积、水质、平静程度、水上活动设施以及景观美感。
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
            style="background-color: rgba(255, 152, 0, 0.1)"
          >
            <i class="fas fa-utensils" style="color: #ff9800"></i>
          </div>
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-medium mr-2">餐饮</h4>
              <span class="tag tag-dining">8.7分</span>
            </div>
            <p class="text-gray-600">
              评估了餐饮质量、菜品多样性、服务水平、餐厅环境以及价格合理性。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// defineProps({
//   commentElement: {
//     type: Object,
//     default: () => ({}),
//   },
// })
// console.log(this.commentElement)
const canvasRef = ref(null)
let chartInstance = null

onMounted(async () => {
  let ChartLib = window.Chart
  let ChartDataLabels = window.ChartDataLabels || (window && window['chartjs-plugin-datalabels'])

  if (!ChartLib) {
    // 如果全局未找到 Chart，尝试动态 import（适用于模块化项目）
    try {
      // 使用 chart.js/auto 自动注册所有内置元素、控制器、刻度等
      const mod = await import('chart.js/auto')
      ChartLib = mod?.default || mod?.Chart || mod
    } catch (e) {
      console.warn(
        'Chart.js 未找到（既未在全局注入，也未能以模块导入）。请确保安装 chart.js 或在 index.html 中引入。',
        e,
      )
      return
    }
  }

  // 如果插件以模块形式可用，尝试导入（可选）
  if (!ChartDataLabels) {
    try {
      const dl = await import('chartjs-plugin-datalabels')
      // 兼容 ESM 默认导出与命名导出
      ChartDataLabels = dl?.default || dl
    } catch (e) {
      // 不强制失败 —— 保持与原 HTML 行为（原 HTML 未必引入该插件）
      // 如果未加载插件，Chart 将忽略 datalabels 配置项。
    }
  }

  // 如果插件存在且需要注册（模块化导入时需要注册），则注册
  try {
    if (ChartDataLabels && ChartLib && ChartLib.register) {
      // chart.js v3+ 需要 register 方式（若插件未自动注册）
      ChartLib.register(ChartDataLabels)
    }
  } catch (e) {
    // ignore
  }

  const ctx = canvasRef.value.getContext('2d')

  const dimensionColors = [
    '#1E88E5', // 浮潜 - 蓝色
    '#FFC107', // 沙滩 - 金色
    '#4CAF50', // 亲子 - 绿色
    '#9C27B0', // 蜜月 - 紫色
    '#00BCD4', // 泻湖 - 青色
    '#FF9800', // 餐饮 - 橙色
  ]

  const scores = [8.5, 9.2, 7.8, 9.5, 9.0, 8.7]

  chartInstance = new ChartLib(ctx, {
    type: 'radar',
    data: {
      labels: ['浮潜', '沙滩', '亲子', '蜜月', '泻湖', '餐饮'],
      datasets: [
        {
          label: '评分',
          data: scores,
          backgroundColor: 'rgba(30, 136, 229, 0.3)', // 蓝色填充，透明度30%
          borderColor: '#1E88E5', // 蓝色边框
          borderWidth: 3, // 线条粗细3px
          pointBackgroundColor: dimensionColors, // 每个点使用对应的维度颜色
          pointBorderColor: '#fff', // 点的边框为白色
          pointBorderWidth: 2, // 点的边框宽度
          pointRadius: 6, // 点的大小
          pointHoverRadius: 8, // 鼠标悬停时点的大小
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          angleLines: {
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1,
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1,
          },
          pointLabels: {
            color: '#334155',
            font: {
              family: 'Inter, Noto Sans SC, sans-serif',
              size: 14,
              weight: 'bold',
            },
            padding: 20,
          },
          ticks: {
            backdropColor: 'transparent',
            color: '#334155',
            font: {
              family: 'Inter, Noto Sans SC, sans-serif',
              size: 12,
            },
            stepSize: 2,
            beginAtZero: true,
            max: 10,
            showLabelBackdrop: false,
            display: true,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#fff',
          borderWidth: 1,
          padding: 10,
          displayColors: true,
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw}/10`
            },
          },
        },
        // 保留原 HTML 中的 datalabels 配置（若未加载插件，将被忽略）
        datalabels: {
          display: true,
          color: '#fff',
          font: {
            family: 'Inter, Noto Sans SC, sans-serif',
            size: 12,
            weight: 'bold',
          },
          formatter: function (value) {
            return value
          },
          padding: {
            top: 5,
            bottom: 5,
          },
          backgroundColor: function (context) {
            return dimensionColors[context.dataIndex]
          },
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#fff',
        },
      },
      elements: {
        line: {
          tension: 0.1,
        },
      },
    },
  })
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.chart-container {
  position: relative;
}

.feature-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
