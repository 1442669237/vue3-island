<template>
  <div class="mt-8 bg-white rounded-xl p-6 booking-box">
    <h2 class="text-2xl font-bold mb-4 text-dark-blue">行程安排</h2>
    
    <p class="mb-8 text-gray-800">
      在Solitude Gaia船上展开为期8天7晚的潜水探险,探索帕劳（Palau）惊艳的水下风景、多彩的海洋生物以及顶级潜水体验。经验丰富的导游、舒适的住宿以及无与伦比的潜水地点,确保您在帕劳纯净水域享有难忘的冒险旅程,将刺激与宁静完美结合。
    </p>

    <!-- 时间线容器 -->
    <div class="border-l-[2px] border-gray-400 pl-6 ml-4">
      <div v-for="(day, index) in itinerary" :key="index" class="mb-6 flex items-start">
        <div class="w-3 h-3 bg-gray-400 rounded-full relative left-[-31px] top-[8px]"></div>
        <div class="flex-1">
          <button class="text-blue-500 font-semibold text-base" @click="toggleDay(index)">{{ day.title }}</button>
          <!-- 折叠内容 -->
          <div v-show="visibility[index]" class="mt-2 text-gray-700">
            <p v-html="day.description"></p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-8 ml-4 mb-2">
      <i class="iconfont icon-infocircle text-gray-400 mr-2"></i>
      <span class="text-gray-500 italic" v-html="tips"></span>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';

// 行程数据
const itinerary = [
  {
    title: '第1天：启航（无潜水）',
    description: '上船时间为下午5:00至6:00之间,所有客人需在次日早晨之前登船。包括机场接送或当地酒店接送服务。在登上Solitude Gaia后,船员们会热情欢迎您的到来。欢迎仪式和登记手续（请带上您的潜水C卡和/或潜水日志）会随之进行。'
  },
  {
    title: '第2天：（2 - 3次潜水）',
    description: '可能的潜水地点包括：<br/><br/>Jake Seaplane<br/>Chandelier Cave<br/>Iro沉船<br/>Hafa Dai沉船<br/>今天是我们的首个潜水日,Solitude Gaia将停泊在马拉卡尔湾（Malakal Bay）。在欢迎仪式和登记结束后,我们将进行最多3次潜水。帕劳曾是二战期间美国与日本军队的主要战场之一,几艘二战沉船分布在帕劳科洛尔（Koror）附近。您有机会潜入船只或飞机残骸。此外,还有一个位于岩石岛上的受欢迎且简单的洞穴潜水地——Chandelier Cave。岩石岛内的能见度通常不如帕劳著名的外礁潜水点,增加了您的帕劳潜水体验的多样性。晚上我们将起锚,南下至乌隆岛（Ulong Island）。'
  },
  {
    title: '第3天：乌隆岛区域（3 - 4次潜水）',
    description: '可能的潜水地点包括：<br/><br/>Iro沉船<br/>Sandy Paradise<br/>乌隆（Ulong）Channel<br/>Siaes Corner<br/>今天我们将在美丽的乌隆岛前醒来。乌隆岛拥有绵长美丽的白色沙滩和古老的岩画。该区域拥有众多名闻遐迩的潜水地点。您将体验在有流的海峡、墙壁、角落进行潜水,以及美丽的珊瑚礁潜水。若天气及行程允许,我们将安排海滩游览,并可能在其中一日举办烧烤。'
  },
  {
    title: '第4 - 6天：佩留岛及Ngemelis岛区域（3 - 4次潜水）',
    description: '可能的潜水地点包括：<br/>佩留角（Peleliu Corner）<br/>佩留切口（Peleliu Cut）<br/>黄墙（Yellow Wall）<br/>佩留快线（Peleliu Express）<br/>橙色海滩（Orange Beach）<br/>德国水道（German Channel）<br/>蓝角（Blue Corner）<br/>蓝洞（Blue Holes）<br/>新底落（New Drop-off）<br/>大底落（Big Drop-off）<br/>龟湾（Turtle Cove）以及更多。<br/>接下来的三天,我们将在岩岛南泻湖（Rock Island Southern Lagoon）（RISL）及帕劳外礁的南部区域潜水。您将享受壮观的深渊、丰富的珊瑚花园、强劲的洋流、繁茂的海洋生物,以及可能遇见的蝠鲼。在这些日子里,还有机会参与佩留岛的二战陆地游览。'
  },
  {
    title: '第7天：Ngemelis岛区域（最多3次潜水）',
    description: '（所有客人必须遵循至少18小时飞行前水面休整时间）<br/>可能的潜水地点包括：<br/>德国水道<br/>Ngedebus墙<br/>德克斯墙（Dexter"s Wall）<br/>Ngemelis珊瑚园<br/>Virgin蓝洞<br/>今天是我们最后的潜水日,我们将在Ngemelis岛主要区域享受几次潜水。潜水完成后,我们将返回马拉卡尔。上船时间为下午5:00至6:00之间,所有客人需在次日早晨之前登船。包括机场接送或当地酒店接送服务。在登上Solitude Gaia后,船员们会热情欢迎您的到来。欢迎仪式和登记手续（请带上您的潜水C卡和/或潜水日志）会随之进行。'
  },
  {
    title: '第8天：白天观光及离船（无潜水）',
    description: '今天,在享用丰盛的早餐后,您可以选择免费通过快艇游览水母湖（Jellyfish Lake）、牛奶湖（Milky Way）或同时游览两处（若游览水母湖,您需要购买水母湖许可证）。离船将在午餐后,最晚至下午5:00为止。如需延迟退房,需视情况安排并另收费用。'
  }
];
// 
const tips = '行程描述由船运营方提供。<br/>最后一次潜水将在行程倒数第二天的早上或下午进行。建议潜水员在最后一次潜水后等待24小时再乘飞机。<br/>行程和地图样例仅供参考。具体线路和游览地点可能会根据当地法规、客人体验、天气和物流进行调整,最终决定权归船长所有。'

// 控制每一天是否显示的状态
const visibility = ref([]);
onMounted(() => {
  const N = itinerary.length
  visibility.value = Array(N).fill(false)
  visibility.value[0] = true
})

// 切换某一天的折叠状态
const toggleDay = (index) => {
  visibility.value[index] = !visibility.value[index];
};
</script>

<style scoped>
/* 时间线样式 */
.booking-box {
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
</style>
