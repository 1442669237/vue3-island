<template>
    <div class="island-list-page">
        <div class="content-box">
            <div class="nav">
                <div class="item act">海岛<i class="iconfont icon-umbrella-beach ml-1"></i></div>
                <div class="item">酒店</div>
                <div class="item">美食</div>
                <div class="item">机票</div>
                <div class="item">船票</div>
            </div>
            <div class="nav-choose">
                <p>亚洲 - 马尔代夫</p>
                <p>马尔代夫旅游 - 马尔代夫旅游指南</p>
            </div>
            <!-- 轮播图 -->
            <div class="carousel">
                <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(slide, index) in images" :key="index" class="carousel-item">
                        <img :src="slide" alt="carousel" />
                    </div>
                </div>

                <!-- 左右切换按钮 -->
                <button @click="prevImage" class="carousel-button prev-button">
                    &#10094;
                </button>
                <button @click="nextImage" class="carousel-button next-button">
                    &#10095;
                </button>

                <!-- 指示器 -->
                <div class="carousel-dots">
                    <span v-for="(image, index) in images" :key="index"
                        :class="['carousel-dot', { active: index === currentIndex }]" @click="goToImage(index)"></span>
                </div>
            </div>
            <!-- 推荐top1 -->
            <div class="recommend">
                <div class="top-recommend">
                    <p class="title">Alimatha Island</p>
                    <p class="desc">
                        <span class="t1 mgr">4.6分</span>
                        <i class="iconfont icon-star t1"></i>
                        <i class="iconfont icon-star t1"></i>
                        <i class="iconfont icon-star t1"></i>
                        <i class="iconfont icon-star t1"></i>
                        <i class="iconfont icon-star t1"></i>
                        <span class="t2">(312条点评)</span>
                        <span class="t3">在瓦武环礁的6项景点玩乐中排名第1</span>
                    </p>
                    <div class="top-recommend-bg-box">
                        <div 
                            class="left-box"  
                            @mouseenter="e => handleMouseEnter()"
                            @mouseleave="e => handleMouseLeave()">
                            <div v-if="mouseEnter" class="mask">
                                <p class="p1">探索 马尔代夫</p>
                                <p class="p2">马尔代夫拥有遍布印度洋迷人水域的 26 个环礁和 1,000 多个岛屿，是跳岛游爱好者的梦想之地。水下有绵延数英里的珊瑚礁，是数千种海洋生物和水下宝藏的家园。充分领略马尔代夫魅力：您可以在断岩 (Broken Rock) 潜水，在哈尼法鲁湾 (Hanifaru Bay) 与蝠鲼一起浮潜，也可以包船游览所有热门景点。此外，这里还以美丽的海滩和豪华别墅而闻名，但也有丰富的文化和历史等待您去探索：您可以探索古老星期五清真寺 (Old Friday Mosque) 的 17 世纪建筑，或在马累 (Malé) 的鱼市 (Fish Market) 体验当地生活（以及岛上最新鲜的海鲜）。精彩活动还不止于此，我们还在下方列出了更多冷门胜地和必做之事。</p>
                            </div>
                        </div>
                        <div class="right-box">
                            <img class="img1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/72/73/eb/caption.jpg?w=700&h=400&s=1" alt="">
                            <img class="img2" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/72/73/ea/caption.jpg?w=700&h=400&s=1" alt="">
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

            <p class="list-title">探索热门岛屿</p>
            <!-- 快筛 -->
            <div class="filtter-box">
                <div 
                    @click="choose(item.label,index)" :class="['icon', chooseIndex == index && 'checked']"
                    v-for="(item, index) in filtter" 
                    :key="index">{{ item.name }}
                </div>
            </div>
            <!-- 月榜 -->
            <div class="recommend-list" v-if="recommendList.length">
                <p class="title">本月热搜榜</p>
                <div class="scroll-list">
                    <div class="item card-hover" v-for="(item,index) in recommendList" :key="index" @click="goDetailpage(item.islandId)">
                        <div class="relative h-48">
                            <img
                                :src="item.aerialViewUrl"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-6 h-40">
                            <div class="title-top-box">
                                <h3 class="name">{{ item.chineseName }}</h3>
                                <div class="icon">{{ item.islandScale }}</div>
                            </div>
                            <p class="text-gray-600 mb-4 text-desc">
                                {{ item.production }}
                            </p>
                            <div class="flex items-center text-sm desc">
                                <span>{{item.overallRating}}分 </span>
                                <i v-for="n in Math.floor(item.overallRating)" :key="'full-' + n" class="iconfont icon-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 列表 -->
            <div class="island-list" v-if="islandList.length">
                <p class="title">{{recommendList.length ? '全部岛屿' : ''}} <span>{{recommendList.length == 0 ? `搜索结果${islandList.length}条` : ''}}</span></p>
                <div class="content">
                    <div v-for="(island, index) in islandList" :key="index" class="item card-hover" @click="goDetailpage(island.islandId)">
                        <img class="img" :src="island.aerialViewUrl" alt="">
                        <p class="name-box">
                            <div class="star">{{island.overallRating}}分 </div>
                            <span class="name">{{ island.chineseName }}</span>
                            <span class="english">{{ island.englishName }}</span>
                        </p>
                        <p class="tags" v-if="island?.keywords?.split(' ').length > 0">
                            <span v-for="(tag, idx) in island.keywords.split(' ').slice(0, 4)" :key="idx" class="tag">
                                {{ tag }}
                            </span>
                        </p>
                        <!-- <p class="tips">
                            <span><i class="iconfont icon-check-circle-fill"></i> 适合出游</span>
                            <span v-for="(tag, idx) in island.months" :key="idx" class="tip">
                                {{ tag }}
                            </span>
                        </p> -->
                        <p class="other" v-if="island.transferMethod">
                            <span><i class="iconfont icon-plane-departure text-purple-500 mr-[5px]"></i> 交通: </span>
                            <span>{{ island.transferMethod.join("+") }}</span>
                        </p>
                        <p class="other">
                            <span><i class="iconfont icon-calendar-alt-solid text-purple-500 mr-[5px]"></i> 翻建日前: </span>
                            <span>2016.11</span>
                        </p>
                        
                        <div class="btm">详情</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterSection/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import FooterSection from '@/views/islandDetail/components/FooterSection.vue'
import { getIslandList } from '@/api/index'
import { useRouter } from 'vue-router'
const router = useRouter()

// 轮播图
const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/99/0d/maldive.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/dc/98/caption.jpg?w=1400&h=500&s=1'
];
const currentIndex = ref(0);
const totalImages = images.length;
let carouselInterval;
// 头部推荐
let mouseEnter = ref(false)
// 快筛
let chooseIndex = ref(0)
// 快筛项
const filtter = [
    { name: '全部', label:0 ,icon: '' },
    { name: '成人岛', label: 1 ,icon: '' },
    { name: '家庭岛', label: 2 ,icon: '' },
    { name: '水疗岛', label: 3 ,icon: '' },
    { name: '浮潜岛', label: 4 ,icon: '' },
    { name: '房礁岛', label: 5 ,icon: '' },
    { name: '沙滩岛', label: 6 },
    { name: '独特岛', label: 7 },
    { name: '鲸鲨同游', label: 8 },
    { name: '素食友好', label: 9 },
    { name: '水上滑梯', label: 10 },
    { name: '美食岛（非中式）', label: 11 },
    { name: '人均1W实惠岛', label: 12 },
    { name: '小童惠选', label: 13 },
    { name: '大童惠选', label: 14 },
    { name: '水下餐厅', label: 15 },
    { name: '泻湖岛', label: 16 },
];
// 热搜榜（点击全部的时候才会有）
let recommendList = ref([])
// 列表
let islandList = ref([])


onMounted(() => {
    // 在组件挂载时启动自动轮播
    startCarousel();
    // 初始化列表
    getCommentIsLand(0)
});
onUnmounted(() => {
    // 在组件销毁时清除定时器
    clearInterval(carouselInterval);
});
// 自动轮播
const startCarousel = () => {
    carouselInterval = setInterval(() => {
        nextImage();
    }, 3000);
};
// 下一张
const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % totalImages;
};
// 上一张
const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + totalImages) % totalImages;
};
// 跳转到指定图片
const goToImage = (index) => {
    currentIndex.value = index;
};
const handleMouseEnter = () => {
    mouseEnter.value = true
}
const handleMouseLeave = () => {
    mouseEnter.value = false
}
// 跳转详情页
const goDetailpage = (id) => {
    router.push(`/islandDetail/${id}`)
}
const choose = (label,index) => {
    chooseIndex.value = index
    getCommentIsLand(label)
}
// 获取岛屿列表
const getCommentIsLand = async(label) => {
  
  try{
    const params = label > 0 ? { sign:label } : {}
    const res = await getIslandList(params);
    if (res?.length > 0) {
      if(label == 0){
        recommendList.value = res.slice(0, 5);
        islandList.value = res.slice(5);
      }else{
        recommendList.value = []
        islandList.value = res
      }
    }else{
        recommendList.value = []
        islandList.value = []
    }

  }catch(error){
    console.log(error,'error')
  }
}
</script>

<style scoped lang="less">
.island-list-page {
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
}

.content-box {
    width: 90%;
    max-width: 1500px;
    padding-top: 50px;

    .nav {
        width: 100%;
        border-bottom: 1px #999 solid;
        display: flex;
        padding-bottom: 3px;

        .item {
            font-size: 20px;
            color: #111;
            line-height: 1;
            margin-right: 35px;
            font-weight: 500;
            padding-bottom: 10px;
        }

        .act {
            color: #1e88e5;
            font-weight: 700;
            border-bottom: 2px #1e88e5 solid;
        }
    }

    .nav-choose {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        p {
            font-size: 14px;
            color: #777;
        }
    }

    .carousel {
        margin-top: 30px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 400px;
        border-radius: 10px;

        .carousel-inner {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .carousel-item {
            flex: 0 0 100%;
            width: 100%;
        }

        .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            font-size: 18px;
            cursor: pointer;
            z-index: 10;
        }

        .prev-button {
            left: 20px;
        }

        .next-button {
            right: 20px;
        }

        .carousel-dots {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
        }

        .carousel-dot {
            width: 10px;
            height: 10px;
            margin: 0 5px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }

        .carousel-dot.active {
            background-color: #fff;
        }
    }

    .recommend{
        display: flex;
        margin-top: 30px;
        .top-recommend{
            width: 100%;

            .title{
                font-size: 40px;
                font-weight: bold;
                color: #111;
            }
            .desc{
                font-size: 18px;
                color: #333;

                .t1{
                    font-size: 20px;
                    color: #1E88E5;
                }
                .mgr{
                    margin-right: 5px;
                }
                .t2{
                    margin-left: 10px;
                }
                .t3{
                    margin-left: 10px;
                    text-decoration: underline;
                }
            }
            .top-recommend-bg-box{
                margin-top: 20px;
                display: flex;
                width: 100%;
                height: 500px;
                .left-box{
                    width: 65%;
                    height: 100%;
                    background-image: url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/bb/64/6b/alimatha-island.jpg?w=700&h=400&s=1');
                    background-size: 100% 100%;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    overflow: hidden;
                }
                .mask{
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    opacity: 0.7;
                    padding: 20px;

                    .p1{
                        font-size: 50px;
                        font-weight: 800;
                        color: white;
                        opacity: 1;
                        cursor: pointer;
                    }
                    .p2{
                        color: white;
                        margin-top: 20px;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }
                .right-box{
                    margin-left: 10px;
                    flex: 1;
                    .img1{
                        margin-bottom: 10px;
                        width: 100%;
                        height: 245px;
                        border-top-right-radius: 20px;
                    }
                    .img2{
                        width: 100%;
                        height: 245px;
                        border-bottom-right-radius: 20px;
                    }
                }
            }
        }

    }

    .list-title{
        margin-top: 50px;
        font-size: 40px;
        font-weight: bold;
        color: #111;
    }

    .filtter-box {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px #999 solid;
        padding-bottom: 30px;

        .icon {
            padding: 10px 15px;
            margin-right: 30px;
            border-radius: 20px;
            background-color: #fff;
            border: 1px solid #999;
            color: #111;
            line-height: 1;
            font-size: 16px;
            margin-bottom: 15px;
            cursor: pointer;
        }

        .checked {
            border: 2px solid #1E88E5;
            color: #1E88E5;
            font-weight: 500;
        }

        .icon:hover {
            // transform: translateY(-1px);
            box-shadow: 0 10px 20px rgba(0, 0, 255, 0.1);
            background-color: #BFDBFE;
        }
    }

    .recommend-list{
        margin-top: 20px;
        .title{
            font-size: 30px;
            font-weight: 500;
            color: #111;
        }
        .scroll-list{
            margin-top: 20px;
            display: flex;
            width: 100%;
            overflow-x: scroll;
            flex-wrap: nowrap;
            .item{
                width: 450px;
                flex: 0 0 auto; 
                margin-right: 20px; 
                background-color: white;
                border-radius: 1rem;
                overflow: hidden;
                // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                border: 1px #ddd solid;
                margin-right: 15px;
                .title-top-box{
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                    .name{
                        font-size: 20px;
                        font-weight: 500;
                        color: #111;
                    }
                    .icon{
                        font-size: 14px;
                        color: #111;
                        line-height: 1;
                        padding: 4px 6px;
                        border-radius: 6px;
                        background-color: #E9D8FD;
                        margin-left: 10px;
                    }
                }
                .text-desc{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;  /* 限制显示三行 */
                    -webkit-box-orient: vertical;  /* 垂直排列 */
                    overflow: hidden;  /* 隐藏超出部分 */
                    text-overflow: ellipsis;  /* 显示省略号 */
                }

                .desc{
                    color: #1E88E5;
                    span{
                        margin-right: 5px;
                    }
                    .tips{
                        margin-left: 10px;
                        color: #333;;
                    }
                }
            }
        }
        /* 隐藏滚动条 */
        .scroll-list::-webkit-scrollbar {
            display: none;
        }
    }

    .island-list {
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
        margin-bottom: 50px;

        .title{
            font-size: 30px;
            font-weight: 500;
            color: #111;
            margin-bottom: 15px;

            span{
                font-size: 20px;
                color: #666;
            }
        }

        .content{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 10px;
            .item{
                width: 32%;
                height: 520px;
                background-color: white;
                border-radius: 1rem;
                overflow: hidden;
                border: 1px #ddd solid;
                position: relative;

                .img{
                    height: 60%;
                    width: 100%;
                }
                .name-box{
                    margin-top: 10px;
                    margin-left: 10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    .name{
                        font-size: 22px;  
                        color: #111;  
                        font-weight: bold;
                    }
                    .star{
                        font-size: 16px;
                        color: white;
                        font-weight: 500;
                        padding: 5px;
                        background-color: #1E88E5;
                        border-radius: 10px;
                        margin-right: 8px;
                        line-height: 1;
                    }
                    .english{
                        font-size: 18px;
                        color: #666;
                        margin-left: 5px;
                    }
                }
                .tips{
                    margin-top: 10px;
                    margin-left: 10px;
                    line-height: 1;
                    font-size: 15px;
                    margin-right: 5px;
                    .tip {
                        padding: 2px;
                        border: 1px #1E88E5 solid;
                        margin-left: 7px;
                        color: #1E88E5;
                        border-radius: 5px;
                        font-size: 14px;
                    }
                }
                .tags{
                    margin-top: 10px;
                    margin-bottom: 15px;
                    margin-left: 10px;
                    line-height: 1;
                    font-size: 14px;

                    .tag {
                        display: inline-block;
                        background-color: #DCFCE7;
                        padding: 5px 10px;
                        border-radius: 20px;
                        margin-right: 5px;
                        color: #333;
                        line-height: 1;
                    }
                }
                .other{
                    margin-top: 10px;
                    margin-left: 10px;
                    line-height: 1;
                    font-size: 14px;
                }
                .btm{
                    width: 150px;
                    height: 60px;
                    border-radius: 30px;
                    position: absolute;
                    right: 20px;
                    bottom: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 22px;
                    font-weight: 500;
                    // background: rgba(30, 136, 229, 0.2);
                    // backdrop-filter: blur(8px);
                    border: 1px #1E88E5 solid;
                    color: #1E88E5;
                    cursor: pointer;
                }
                .btm:hover {
                    background-color: #1E88E5;
                    color: white;
                }
            }
        }

        
    }
    
}


.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}




/* 设置大屏和小屏适配 */
@media (min-width: 1200px) {
    .island-list {
        width: 60%;
        max-width: 1200px;
    }

    .font-big {
        font-size: 28px;
    }

    .font-middle {
        font-size: 20px;
    }

    .font-small {
        font-size: 16px;
    }

    .mgtp {
        margin-top: 20px;
    }

    .island-card {
        height: 300px;
    }
}

@media (max-width: 1199px) and (min-width: 768px) {
    .island-list {
        width: 80%;
    }

    .font-big {
        font-size: 20px;
    }

    .font-middle {
        font-size: 16px;
    }

    .font-small {
        font-size: 14px;
    }

    .mgtp {
        margin-top: 10px;
    }

    .island-card {
        height: 200px;
    }
}

@media (max-width: 767px) {
    .island-list {
        width: 100%;
    }

    .font-big {
        font-size: 18px;
    }

    .font-middle {
        font-size: 14px;
    }

    .font-small {
        font-size: 12px;
    }

    .mgtp {
        margin-top: 5px;
    }
}
</style>