<template>
  <div>
    <!-- 页面1 -->
    <div 
      class="page-content bg-pic" 
      :style="{ backgroundImage: 'url(' + mainPic + ')' }" 
      ref="page1">
      <!-- 蒙层 -->
      <div class="pic-mask">
        <LiquidEther :colors="['#48FF28', '#A2FFC6', '#9EF19E']" :mouseForce="20" :cursorSize="100" :isViscous="false"
          :viscous="30" :iterationsViscous="32" :iterationsPoisson="32" :resolution="0.5" :isBounce="false"
          :autoDemo="true" :autoSpeed="0.5" :autoIntensity="2.2" :takeoverDuration="0.25" :autoResumeDelay="3000"
          :autoRampDuration="0.6" />
      </div>
      <!-- 导航 -->
      <CardNav
        :items="navItems"
        logo="https://ota-front-public.oss-cn-hangzhou.aliyuncs.com/wx-mini-ota/user/avatar_default.png"
        logoAlt="鸿途智行选岛助手"
        baseColor="rgba(250, 250, 250, 0.6)"
        menuColor="#000"
      />
      <!-- 欢迎词 -->
      <!-- <div class="split-text">
        <SplitText :text="message" className="text-7xl font-bold text-center text-white" :delay="300" />
      </div> -->
      <!-- 按钮 -->
      <div class="bottom-btm" @click="scrollToSecondPage">更多详情</div>
    </div>
    <div class="page-content bg-list" ref="page2">
      <div class="title-box">
        <p></p>
        <h1 class="title">精选岛屿 <i class="iconfont text-4xl icon-umbrella-beach"></i></h1>
        <p class="more" @click="goIslandListPage">查看全部<i class="iconfont icon-arrowright ml-[6px]"></i></p>
      </div>
      <div class="content" v-if="islandList.length">
        <Masonry
          :items="islandList"
          :duration="0.6"
          :stagger="0.05"
          animate-from="bottom"
          :scale-on-hover="true"
          :hover-scale="0.95"
          :blur-to-focus="true"
          :color-shift-on-hover="true"
        />
      </div>
    </div>
    
  </div>
</template>

<script setup>
import LiquidEther from '@/components/LiquidEther.vue'
import SplitText from '@/components/SplitText.vue'
import Masonry from '@/components/Masonry.vue'
import CardNav from '@/components/CardNav.vue'
import { getIslandList } from '@/api/index'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const page1 = ref(null);
const page2 = ref(null);
const message = ref('马代群岛，欢迎您！');
const navItems = [{
    label: "鸿途优选",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "优选岛屿", pageUrl: "/islandList" },
      { label: "优选酒店", pageUrl: "About Careers" }
    ]
  },
  {
    label: "关于我们",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", pageUrl: "Email us" },
      { label: "Twitter", pageUrl: "Twitter" },
      { label: "LinkedIn", pageUrl: "LinkedIn" }
    ]
}]
const mainPiclsit = [
  'https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5b6e3f8e406e1/1b73197c662e9f3f2c1710aaca8befa5.jpg',
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/63bd229117169/images/sf.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3020/0998d0a2d304b0caccc94978882a8c7f.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/md5img/1677380459043147025.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/2033/images/1752597226306_AY5D.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3015/83cae4163a641cc5c56fdb5f289c370c.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/625fab9b35aed/902228ba3afe4bede34fa84c5f27db19.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/md5img/1677380770270143340.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5c19958adf5bb/f2aabc8b6fd89fe4e500dbe6f7253ffc.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/4024/images/centaraLagoon-map2.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/DI2503081116/images/AERIAL20VIEW.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/2023/fe7f765e39ce9549364557a209071c7f.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4032/b0ed8db198c38069dbda0c29daa6d681.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3009/9061274bab450de7b55961c988cc18b5.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4009/6b5ffe028930a8b4317dc7a9f53f61c1.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5b4aae7b9effa/9b34e7f464b486033f836f07e0705b98.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3003/942dcc2fec5de41d8e476d0329fb032c.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/md5img/1677380378192254305.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/638d487d12355/5c3717b815bfc330756d95be139203ae.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/2033/images/dusitD2Bird.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/63ad96d7afd12/94c96f549fa51fcb461f9e4d7d4151f3.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3011/45a107b930da0c4ed8122990db90fca7.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/md5img/1676382877860645374.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4008/32869a3d57d1175b695053c093c2061a.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/2024/480fa0ef34385d605d2e8cf8270e2740.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/md5img/1677380514588871009.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4005/12f66f2ce3ab447cc7cc9a7969c56ee6.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5cfc7dd1166a5/0400a017e9e4dadb66db4405210babb6.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3005/30163b66a622c309c63e51b864b7a928.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5cfc739c46edb/ce932c61d6060c778047e17cd0d83027.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5c382c2c144af/1f845f5210ef09bc2835321f4192e66a.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4006/fb0f871289b81f9121ff3972ad9f5078.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5da6d66d9ac03/129732486474ec207f313235ab7e0f78.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3017/8011e7f08d50231d033fb2b3a7fd7ef7.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4000/22f4acea9c7e5e2856d1b8d0f5baea4a.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4031/233e1a26d771e74cd9a800f8b5d2be7f.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/5ea6808cbf4a1/1d02ad41aaf4887ca01d624a489ee8c8.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/4011/145111cd2732e4f5ced414a62ce7be9a.png",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/2401031028/images/BWLM_VIEW_08.jpg",
  "https://newsl.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/miscIMG/3019/b633af33858d19163ae3c12201d84b5c.png",
]

let lastScrollY = 0;
let islandList = ref([])
let mainPic = ref('')


onMounted(() => {
  // window.addEventListener('scroll', handleScroll);
  // 主图随机
  const randomIndex = Math.floor(Math.random() * mainPiclsit.length);
  mainPic.value =  mainPiclsit[randomIndex];

  // 岛屿列表
  getCommentIsLand()
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
// 获取推荐岛屿
const getCommentIsLand = async() => {
  
  try{
    const res = await getIslandList();
    if (res?.length > 0) {
      islandList.value = res.slice(0, 15).map((item, index, array) => {
        // 随机从指定的高度数组中选择一个值，避免与前一个相同
        const heights = [450, 550, 650, 700, 600];
        
        // 如果是第一个元素，直接选择一个随机高度
        let randomHeight = heights[Math.floor(Math.random() * heights.length)];
        
        // 如果不是第一个元素，检查是否与上一个相同，如果相同重新选择
        if (index > 0) {
          // 检查前一个元素的高度
          while (randomHeight === array[index - 1].height) {
            randomHeight = heights[Math.floor(Math.random() * heights.length)];
          }
        }
        
        // 返回新对象，包含原来的属性和随机的height字段
        return {
          ...item,
          img:item.aerialViewUrl,
          height: randomHeight
        };
      });
    }
  }catch(error){
    console.log(error,'error')
  }
}
// 跳转列表页
const goIslandListPage = () => {
  router.push('/islandList')
}

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
  // background-image: url('https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1007/images/67k.jpg');
  background-size: 100% 100%;

  .pic-mask {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }
}

.bg-list {
  .content{
    width: 80%;
  }
  .title-box{
    margin-top: 50px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .more{
      font-size: 22px;
      margin-right: 5px;
      color: #111;
      cursor: pointer;
      font-style: italic;
    }
    .more:hover{
      color: #1e88e5;
    }
  }
  .title{
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
  animation: floatUp 1s ease-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
}

@keyframes floatUp {
  0% {
    transform: translateY(100px);
    /* 起始位置*/
  }

  100% {
    transform: translateY(-100px);
    /* 结束位置*/
  }
}

.bottom-btm:hover {
  border: 1px solid rgba(118, 215, 126, 1);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}
</style>