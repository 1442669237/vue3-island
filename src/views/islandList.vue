<template>
    <div class="island-list-page">
        <div class="island-list">
            <!-- 快筛 -->
            <div class="filtter-box">
                <div @click="choose(index)" :class="['icon' , chooseIndex == index && 'checked']" v-for="(item, index) in filtter" :key="index">{{ item.name }}</div>
            </div>
            <!-- 列表  -->
            <div class="island-card" v-for="(island, index) in filteredIslands" :key="index">
                <div class="card-content">
                    <img :src="island.image" alt="岛屿图片" class="island-image" />
                    <div class="card-text">
                        <div class="title-flex">
                            <p class="island-name font-big">{{ island.name }}</p>
                            <p class="island-name-en font-middle">{{ island.nameEn }}</p>
                        </div>
                        <div class="tags font-small mgtp">
                            <span v-for="(tag, idx) in island.tags" :key="idx" class="tag">
                                {{ tag }}
                            </span>
                        </div>
                        <div class="tips font-small mgtp">
                            <span>适合出游</span>
                            <span v-for="(tag, idx) in island.months" :key="idx" class="tip">
                                {{ tag }}
                            </span>
                        </div>
                        <p class="txt font-small mgtp">容积比率：1258（平/间）</p>
                        <p class="txt font-small mgtp">交通：水飞 + 快艇</p>
                        <p class="txt font-small mgtp">翻建日前：2016.11</p>
                        <div class="btm">查看详情</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 快筛项
const filtter = [
    { name: '全部' , label : 0 },
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

]
// 岛屿数据
const islands = [
    { name: "巴厘岛", nameEn: "Bali", image: "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg", tags: ["七钻（9.2）", "小型岛屿","优选岛屿","适合当月","蜜月度假" ],months:['一月','三月','五月'] },
    { name: "马尔代夫", nameEn: "Maldives", image: "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg", tags: ["Exotic", "Romantic"] , months:['七月','八月','九月','十月']},
    { name: "夏威夷", nameEn: "Hawaii", image: "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg", tags: ["Tropical"],months:['一月','三月','五月','十二月'] },
    { name: "塞舌尔", nameEn: "Seychelles", image: "https://newsl.oss-cn-hangzhou.aliyuncs.com/haidaov2/1005/images/de3.jpg", tags: ["Exotic", "Romantic"],months:['一月','三月','五月'] },
];
let chooseIndex = ref(0)
const choose = (index) => {
    chooseIndex.value = index
}



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

.island-list {
    display: flex;
    flex-direction: column;
    /* 纵向排列 */
    gap: 20px;

    .filtter-box {
        margin-top: 50px;
        // margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        .icon{
            padding: 10px 15px;
            margin-right: 30px;
            border-radius: 30px;
            background-color: #fff;
            color: #111;
            line-height: 1;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .checked{
            background-color:#1E88E5;
            color: white;
        }
        .icon:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
    }

    .island-card {
        display: flex;
        flex-direction: row;
        /* 左右排列 */
        align-items: center;
        width: 100%;
        margin: 0 auto;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        // aspect-ratio: 4.5/1;
    }

    .island-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    .card-content {
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;

        .island-image {
            width: 35%;
            object-fit: cover;
        }
        .card-text {
            padding: 20px 30px;
            background-color: #fff;
            width: 65%;

            .title-flex{
                display: flex;
                align-items: center;
            }

            .island-name {
                font-weight: 600;
                color: #333;
                line-height: 1;
                margin-right: 10px;
            }

            .island-name-en {
                color: #888;
                line-height: 1;
            }
            .txt{
                color: #555;
                line-height: 1;
            }

            .tag {
                display: inline-block;
                background-color: #f1f1f1;
                padding: 5px 10px;
                border-radius: 20px;
                margin-right: 5px;
                color: #555;
                line-height: 1;
            }
            .tips{
                display: flex;
                align-items: center;
                color: #555;
                line-height: 1;
                line-height: 1;
            }
            .tip{
                padding: 4px;
                border: 1px #1E88E5 solid;
                margin-left: 7px;
                color: #1E88E5;
                border-radius: 5px;
                line-height: 1;
            }
            .btm{
                width: 150px;
                height: 60px;
                border-radius: 30px;
                position: absolute;
                background-color: #1E88E5;
                right: 20px;
                bottom: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-size: 22px;
                font-weight: 500;
            }
        }
    }
}




/* 设置大屏和小屏适配 */
@media (min-width: 1200px) {
    .island-list {
        width: 60%;
    }
    .font-big{
        font-size: 28px;
    }
    .font-middle{
        font-size: 20px;
    }
    .font-small{
        font-size: 16px;
    }
    .mgtp{
        margin-top: 20px;
    }
    .island-card{
        height: 300px;
    }
}

@media (max-width: 1199px) and (min-width: 768px) {
    .island-list {
        width: 80%;
    }
    .font-big{
        font-size: 20px;
    }
    .font-middle{
        font-size: 16px;
    }
    .font-small{
        font-size: 14px;
    }
    .mgtp{
        margin-top: 10px;
    }
    .island-card{
        height: 200px;
    }
}

@media (max-width: 767px) {
    .island-list {
        width: 100%;
    }
    .font-big{
        font-size: 18px;
    }
    .font-middle{
        font-size: 14px;
    }
    .font-small{
        font-size: 12px;
    }
    .mgtp{
        margin-top: 5px;
    }
}
</style>