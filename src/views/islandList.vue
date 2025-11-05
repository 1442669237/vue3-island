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
                <div @click="choose(index)" :class="['icon', chooseIndex == index && 'checked']"
                    v-for="(item, index) in filtter" :key="index">{{ item.name }}</div>
            </div>
            <!-- 月榜 -->
            <div class="recommend-list">
                <p class="title">本月热搜榜</p>
                <div class="scroll-list">
                    <div class="item card-hover">
                        <div class="relative h-48">
                            <img
                                src="https://s.coze.cn/image/TBxp3WVGSUs/"
                                alt="水上餐厅"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-6 h-40">
                            <h3 class="text-xl font-semibold mb-2">普吉岛</h3>
                            <p class="text-gray-600 mb-4">
                                位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
                            </p>
                            <div class="flex items-center text-sm text-gray-500 text-[#1E88E5] desc">
                                <span>4.5分 </span>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <span class="tips">(312条点评)</span>
                            </div>
                        </div>
                    </div>
                    <div class="item card-hover">
                        <div class="relative h-48">
                            <img
                                src="https://s.coze.cn/image/TBxp3WVGSUs/"
                                alt="水上餐厅"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-6 h-40">
                            <h3 class="text-xl font-semibold mb-2">普吉岛</h3>
                            <p class="text-gray-600 mb-4">
                                位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
                            </p>
                            <div class="flex items-center text-sm text-gray-500 text-[#1E88E5] desc">
                                <span>4.5分 </span>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <span class="tips">(312条点评)</span>
                            </div>
                        </div>
                    </div>
                    <div class="item card-hover">
                        <div class="relative h-48">
                            <img
                                src="https://s.coze.cn/image/TBxp3WVGSUs/"
                                alt="水上餐厅"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-6 h-40">
                            <h3 class="text-xl font-semibold mb-2">普吉岛</h3>
                            <p class="text-gray-600 mb-4">
                                位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
                            </p>
                            <div class="flex items-center text-sm text-gray-500 text-[#1E88E5] desc">
                                <span>4.5分 </span>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <span class="tips">(312条点评)</span>
                            </div>
                        </div>
                    </div>
                    <div class="item card-hover">
                        <div class="relative h-48">
                            <img
                                src="https://s.coze.cn/image/TBxp3WVGSUs/"
                                alt="水上餐厅"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-6 h-40">
                            <h3 class="text-xl font-semibold mb-2">普吉岛</h3>
                            <p class="text-gray-600 mb-4">
                                位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
                            </p>
                            <div class="flex items-center text-sm text-gray-500 text-[#1E88E5] desc">
                                <span>4.5分 </span>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <span class="tips">(312条点评)</span>
                            </div>
                        </div>
                    </div>
                    <div class="item card-hover">
                        <div class="relative h-48">
                            <img
                                src="https://s.coze.cn/image/TBxp3WVGSUs/"
                                alt="水上餐厅"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-6 h-40">
                            <h3 class="text-xl font-semibold mb-2">普吉岛</h3>
                            <p class="text-gray-600 mb-4">
                                位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
                            </p>
                            <div class="flex items-center text-sm text-gray-500 text-[#1E88E5] desc">
                                <span>4.5分 </span>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <i class="iconfont icon-star"></i>
                                <span class="tips">(312条点评)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 列表 -->
            <div class="island-list">
                <p class="title">成人岛 <span>搜索结果23条</span></p>
                <div class="content">
                    <div v-for="(island, index) in filteredIslands" :key="index" class="item card-hover">
                        <img class="img" :src="island.image" alt="">
                        <p class="name">
                            <div class="star">4.5分</div>
                            <span>{{ island.name }}</span>
                            <span class="english">{{ island.nameEn }}</span>
                        </p>
                        <p class="tags">
                            <span v-for="(tag, idx) in island.tags" :key="idx" class="tag">
                                {{ tag }}
                            </span>
                        </p>
                        <p class="tips">
                            <span><i class="iconfont icon-check-circle-fill"></i> 适合出游</span>
                            <span v-for="(tag, idx) in island.months" :key="idx" class="tip">
                                {{ tag }}
                            </span>
                        </p>
                        <p class="other">
                            <span><i class="iconfont icon-plane"></i> 交通: </span>
                            <span>水飞 + 快艇</span>
                        </p>
                        <p class="other">
                            <span><i class="iconfont icon-calendar-alt-solid"></i> 翻建日前: </span>
                            <span>2016.11</span>
                        </p>
                        <div class="btm">详情</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/99/0d/maldive.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d7/ec/c1/caption.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/dc/98/caption.jpg?w=1400&h=500&s=1'
];

const currentIndex = ref(0);
const totalImages = images.length;
let carouselInterval;
let mouseEnter = ref(false)
let chooseIndex = ref(0)

onMounted(() => {
    // 在组件挂载时启动自动轮播
    startCarousel();
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



// 快筛项
const filtter = [
    { name: '全部', label: 0 },
    { name: '成人岛', label: 1 },
    { name: '家庭岛', label: 2 },
    { name: '水疗岛', label: 3 },
    { name: '浮潜岛', label: 4 },
    { name: '房礁岛', label: 4 },
    { name: '沙滩岛', label: 4 },
    { name: '独特岛', label: 4 },
    { name: '鲸鲨同游', label: 4 },
    { name: '素食友好', label: 4 },
    { name: '水下餐厅', label: 4 },
    { name: '水上滑梯', label: 4 },
    { name: '美食岛（非中式）', label: 4 },
    { name: '实惠岛', label: 4 },
    { name: '泄湖岛', label: 4 },
    { name: '小童惠选', label: 4 },
    { name: '大童惠选', label: 4 },
];

// 岛屿数据
const islands = [
    { name: '巴厘岛', nameEn: 'Bali', image: 'https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg', tags: ['七钻（9.2）', '小型岛屿', '优选岛屿', '适合当月', '蜜月度假'], months: ['一月', '三月', '五月'] },
    { name: '马尔代夫', nameEn: 'Maldives', image: 'https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg', tags: ['Exotic', 'Romantic'], months: ['七月', '八月', '九月', '十月'] },
    { name: '夏威夷', nameEn: 'Hawaii', image: 'https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg', tags: ['Tropical'], months: ['一月', '三月', '五月', '十二月'] },
    { name: '塞舌尔', nameEn: 'Seychelles', image: 'https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg', tags: ['Exotic', 'Romantic'], months: ['一月', '三月', '五月'] },
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
        }

        .checked {
            border: 2px solid #1E88E5;
            color: #1E88E5;
            font-weight: 500;
        }

        .icon:hover {
            // transform: translateY(-1px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            background-color: rgba(128, 128, 128, 0.3);
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

                .desc{
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
                height: 500px;
                background-color: white;
                border-radius: 1rem;
                overflow: hidden;
                border: 1px #ddd solid;
                position: relative;

                .img{
                    height: 60%;
                    width: 100%;
                }
                .name{
                    margin-top: 10px;
                    margin-left: 10px;
                    font-size: 22px;
                    color: #111;
                    line-height: 1;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    .star{
                        font-size: 16px;
                        color: white;
                        font-weight: 500;
                        padding: 5px;
                        background-color: #1E88E5;
                        border-radius: 10px;
                        margin-right: 8px;
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
                    margin-top: 15px;
                    margin-left: 10px;
                    line-height: 1;
                    font-size: 14px;

                    .tag {
                        display: inline-block;
                        background-color: #f1f1f1;
                        padding: 5px 10px;
                        border-radius: 20px;
                        margin-right: 5px;
                        color: #555;
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