<template>
  <div>
    <!-- 页面1 -->
    <div class="page-content bg-pic" ref="page1">
      <!-- 蒙层 -->
      <div class="pic-mask">
        <LiquidEther :colors="['#48FF28', '#A2FFC6', '#9EF19E']" :mouseForce="20" :cursorSize="100" :isViscous="false"
          :viscous="30" :iterationsViscous="32" :iterationsPoisson="32" :resolution="0.5" :isBounce="false"
          :autoDemo="true" :autoSpeed="0.5" :autoIntensity="2.2" :takeoverDuration="0.25" :autoResumeDelay="3000"
          :autoRampDuration="0.6" />
      </div>
      <!-- 导航 -->
      <!-- 欢迎词 -->
      <div class="split-text">
        <SplitText :text="message" className="text-8xl font-bold text-center text-white" :delay="300" />
      </div>
      <!-- 动态箭头 -->
      <div class="bottom-btm" @click="scrollToSecondPage">更多详情</div>
    </div>
    <div class="page-content bg-list" ref="page2">
      <h1 class="title">精选岛屿</h1>
      <div class="content">
        <Masonry
          :items="items"
          :duration="0.6"
          :stagger="0.05"
          animate-from="bottom"
          :scale-on-hover="true"
          :hover-scale="0.95"
          :blur-to-focus="true"
          :color-shift-on-hover="false"
        />
      </div>
      <!-- <div class="footer">
        <h3>鸿途智行选岛助手系统</h3>
        <h5>© 2025 版权所有 | 数据实时更新</h5>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import LiquidEther from '@/components/LiquidEther.vue'
import SplitText from '@/components/SplitText.vue'
import Masonry from '@/components/Masonry.vue'

import { ref, onMounted } from 'vue';

const page1 = ref(null);
const page2 = ref(null);
let lastScrollY = 0;
const message = ref('马代群岛，欢迎您！');
const items = ref([
  { id: '1', img: 'https://picsum.photos/300/400?random=1', url: 'https://picsum.photos', height: 400 },
  { id: '2', img: 'https://picsum.photos/300/600?random=2', url: 'https://picsum.photos', height: 650 },
  { id: '3', img: 'https://picsum.photos/300/350?random=3', url: 'https://picsum.photos', height: 350 },
  { id: '4', img: 'https://picsum.photos/300/350?random=3', url: 'https://picsum.photos', height: 550 },
  { id: '5', img: 'https://picsum.photos/300/400?random=1', url: 'https://picsum.photos', height: 400 },
  { id: '6', img: 'https://picsum.photos/300/400?random=1', url: 'https://picsum.photos', height: 750 },
  { id: '7', img: 'https://picsum.photos/300/600?random=2', url: 'https://picsum.photos', height: 800 },
  { id: '8', img: 'https://picsum.photos/300/350?random=3', url: 'https://picsum.photos', height: 300 },
  { id: '9', img: 'https://picsum.photos/300/350?random=3', url: 'https://picsum.photos', height: 650 },
  { id: '10', img: 'https://picsum.photos/300/400?random=1', url: 'https://picsum.photos', height: 350 },
  { id: '11', img: 'https://picsum.photos/300/400?random=1', url: 'https://picsum.photos', height: 500 },
  { id: '12', img: 'https://picsum.photos/300/600?random=2', url: 'https://picsum.photos', height: 400 },
  { id: '13', img: 'https://picsum.photos/300/350?random=3', url: 'https://picsum.photos', height: 350 },
  { id: '14', img: 'https://picsum.photos/300/350?random=3', url: 'https://picsum.photos', height: 450 },
  { id: '15', img: 'https://picsum.photos/300/400?random=1', url: 'https://picsum.photos', height: 400 },
])


onMounted(() => {
  // window.addEventListener('scroll', handleScroll);
});

// 滚动监听，翻页效果
const handleScroll = () => {
  const scrollY = window.scrollY;

  console.log(scrollY, page1.value.offsetHeight, '---')

  // 向下滚动，进入第二个页面
  if (scrollY > lastScrollY) {
    page2.value.scrollIntoView({ behavior: 'smooth' });
  }
  // 向上滚动，返回第一个页面
  else if (scrollY < lastScrollY) {
    page1.value.scrollIntoView({ behavior: 'smooth' });
  }

  lastScrollY = scrollY; // 更新上次滚动位置
};

// 滚动按钮点击
const scrollToSecondPage = () => {
  page2.value.scrollIntoView({ behavior: 'smooth' });
};

</script>

<style scoped lang="less">
.page-content {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg-pic {
  background-image: url('	https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1007/images/67k.jpg');
  background-size: 100% 100%;

  .pic-mask {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }
}

.bg-list {
  .content{
    width: 80%;
  }
  .title{
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: bold;
    color: #111;
  }
  .footer{
    h3{
      font-size: 32px;
    }
    h5{
      font-style: 28px;
    }
  }
}

.split-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50px)
}

.bottom-btm {
  width: 300px;
  height: 80px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  /* 蓝色背景色带透明度 */
  backdrop-filter: blur(8px);
  /* 毛玻璃效果 */
  border: 1px solid rgba(118, 215, 126, 0.5);
  /* 边框稍微加深 */
  position: absolute;
  bottom: 0;
  opacity: 0.9;
  transition: all 0.5s ease-in-out;
  animation: floatUp 2s ease-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: 700;
}

@keyframes floatUp {
  0% {
    transform: translateY(200px);
    /* 起始位置*/
  }

  100% {
    transform: translateY(-200px);
    /* 结束位置*/
  }
}

.bottom-btm:hover {
  // background-color: #76d77e;
  border: 1px solid rgba(118, 215, 126, 1);
}




















</style>
