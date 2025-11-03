<template>
  <div class="island-list-page">
    <!-- 筛选功能 -->
    <div class="filter">
      <label for="filter">筛选岛屿：</label>
      <select v-model="selectedFilter" @change="filterIslands">
        <option value="">所有岛屿</option>
        <option value="Tropical">热带</option>
        <option value="Exotic">异域</option>
        <option value="Romantic">浪漫</option>
      </select>
    </div>

    <!-- 岛屿列表 -->
    <div class="island-list">
      <div
        class="island-card"
        v-for="(island, index) in filteredIslands"
        :key="index"
      >
        <div class="card-content">
          <img :src="island.image" alt="岛屿图片" class="island-image" />
          <div class="card-text">
            <h3 class="island-name">{{ island.name }}</h3>
            <p class="island-name-en">{{ island.nameEn }}</p>
            <div class="tags">
              <span v-for="(tag, idx) in island.tags" :key="idx" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 模拟的岛屿数据
const islands = [
  { name: "巴厘岛", nameEn: "Bali", image: "/assets/island1.jpg", tags: ["Tropical", "Romantic"] },
  { name: "马尔代夫", nameEn: "Maldives", image: "/assets/island2.jpg", tags: ["Exotic", "Romantic"] },
  { name: "夏威夷", nameEn: "Hawaii", image: "/assets/island1.jpg", tags: ["Tropical"] },
  { name: "塞舌尔", nameEn: "Seychelles", image: "/assets/island2.jpg", tags: ["Exotic", "Romantic"] },
];

const selectedFilter = ref(""); // 当前筛选条件
const filteredIslands = ref(islands); // 筛选后的岛屿列表

// 筛选岛屿
const filterIslands = () => {
  if (!selectedFilter.value) {
    filteredIslands.value = islands;
  } else {
    filteredIslands.value = islands.filter((island) =>
      island.tags.includes(selectedFilter.value)
    );
  }
};
</script>

<style scoped>
.island-list-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
}

.filter label {
  margin-right: 10px;
}

.filter select {
  padding: 5px;
  font-size: 14px;
}

.island-list {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  gap: 20px;
}

.island-card {
  display: flex;
  flex-direction: row; /* 左右排列 */
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 4.5/1; /* 设定卡片的高宽比为1:4.5 */
}

/* 设置大屏和小屏适配 */
@media (min-width: 1200px) {
  .island-card {
    width: 65%; /* 大屏幕显示宽度为65% */
  }
}

@media (max-width: 1199px) and (min-width: 768px) {
  .island-card {
    width: 80%; /* 小屏幕显示宽度为80% */
  }
}

@media (max-width: 767px) {
  .island-card {
    width: 100%; /* 手机屏幕显示宽度为100% */
  }
}

.island-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.island-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片充满卡片区域并保持比例 */
}

.card-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%; /* 让内容区域占满卡片 */
}

.card-text {
  padding: 15px;
  background-color: #fff;
  width: 60%; /* 内容部分占据60%的宽度 */
}

.island-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.island-name-en {
  font-size: 14px;
  color: #888;
  margin-top: 5px;
}

.tags {
  margin-top: 10px;
}

.tag {
  display: inline-block;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 5px;
  font-size: 12px;
  color: #555;
}
</style>