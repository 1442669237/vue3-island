<template>
    <div class="mt-8 bg-white rounded-xl p-6">
        <div class="flex justify-between gap-6">
            <!-- 船只亮点 -->
            <div class="flex-1 bg-blue-50 rounded-xl py-6 px-4">
                <h2 class="text-lg font-semibold mb-4 text-blue-500">船只亮点</h2>
                <!-- 使用grid布局，每行显示2个，屏幕窄时显示1个 -->
                <div class="grid">
                    <div v-for="(item, index) in shipHighlights" :key="index">
                        <div v-if="showMore || index < 4"  class="flex items-center space-x-2 mb-2">
                            <i class="iconfont icon-check-circle-fill text-blue-500"></i>
                            <span class="text text-gray-700">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 安全服务 -->
            <div class="flex-1 bg-green-50 rounded-xl py-6 px-4">
                <h2 class="text-lg font-semibold mb-4 text-green-500">安全服务</h2>
                <!-- 使用grid布局，每行显示2个，屏幕窄时显示1个 -->
                <div class="grid">
                    <div v-for="(item, index) in safetyServices" :key="index">
                        <div v-if="showMore || index < 4" class="flex items-center space-x-2 mb-2">
                            <i class="iconfont icon-check-circle-fill text-green-500"></i>
                            <span class="text text-gray-700">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 展开收起 -->
        <div @click="toggleMore" class="text-gray-900 text-lg hover:text-blue-700 mt-6 cursor-pointer flex items-center justify-center">
            <span>{{ showMore ? '收起' : '查看更多' }}</span>
            <i class="iconfont icon-chevron-down text-gray-900 ml-2" :class="{ 'rotate-180': showMore }"></i>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 船只亮点内容
const shipHighlights = [
    "水疗中心",
    "独立卫浴",
    "空调舱非潜水员（浮潜）友好",
    "温水淋浴按摩",
    "空调沙龙日光甲板",
    "摄影器材站",
    "带阳台的房间",
    "近乎1:1的船员与客人比例",
    "船上皮划艇",
    "海景舱自然主义行程",
    "无烟房间",
    "专为潜水设计",
    "充电站",
    "室内沙龙",
    "洗衣服务",
    "图书馆",
    "音频和视频娱乐",
    "舱内电视",
    "观景甲板",
    "烧烤区",
    "可供租用水下相机",
    "独立冲洗",
    "室外淋浴",
    "休闲甲板",
    "每日清洁服务",
    "酒吧",
]

// 安全服务内容
const safetyServices = [
    "雷达深度探测器",
    "提供网络无线电 VHF/DSC/SSB",
    "紧急位置指示无线电信标系统",
    "紧急救生艇",
    "救生衣",
    "火警和灭火器",
    "氧气急救箱",
    "卫星和手机舱底泵报警",
    "探照灯",
    "机舱闭路电视",
    "受过急救培训的船员",
    "紧急信号弹"
]

// 展开收起功能
const showMore = ref(false)
const toggleMore = () => {
    showMore.value = !showMore.value
}
</script>

<style scoped>
/* 在这里调整样式，增加自定义样式 */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>