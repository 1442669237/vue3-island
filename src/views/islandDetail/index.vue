<template>
  <div class="nautilus-page">
    <!-- 导航栏 -->
    <nav id="mainNav" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <div class="flex items-center">
          <a href="#" class="text-xl font-bold text-white">
            <i class="fas fa-palm-tree mr-2"></i>海岛度假
          </a>
        </div>

        <!-- 桌面端导航 -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-white hover:text-light-sand transition-colors">首页</a>
          <a href="#" class="text-white hover:text-light-sand transition-colors">目的地</a>
          <a href="#" class="text-white hover:text-light-sand transition-colors">酒店</a>
          <a href="#" class="text-white hover:text-light-sand transition-colors">特惠</a>
          <a href="#" class="text-white hover:text-light-sand transition-colors">攻略</a>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-white hover:text-light-sand transition-colors">
            <i class="fas fa-search text-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-light-sand transition-colors">
            <i class="fas fa-user-circle text-lg"></i>
          </a>
        </div>

        <!-- 移动端菜单按钮 -->
        <button id="mobileMenuBtn" class="md:hidden text-white text-2xl focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <div id="mobileMenu" class="mobile-menu">
      <div class="flex justify-between items-center mb-8">
        <span class="text-xl font-bold text-primary-blue">海岛度假</span>
        <button id="closeMobileMenu" class="text-gray-500 text-2xl">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <a
          href="#"
          class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100"
          >首页</a
        >
        <a
          href="#"
          class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100"
          >目的地</a
        >
        <a
          href="#"
          class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100"
          >酒店</a
        >
        <a
          href="#"
          class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100"
          >特惠</a
        >
        <a
          href="#"
          class="text-gray-700 hover:text-primary-blue transition-colors py-2 border-b border-gray-100"
          >攻略</a
        >
      </div>
    </div>

    <!-- 菜单遮罩层 -->
    <div id="menuOverlay" class="menu-overlay"></div>

    <!-- 主视觉区 -->
    <header class="relative h-screen">
      <div class="carousel h-full">
        <div class="carousel-inner h-full">
          <div class="carousel-item h-full">
            <img
              src="https://s.coze.cn/image/mD4sQxNtL48/"
              alt="鹦鹉螺私人岛航拍图"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="carousel-item h-full">
            <img
              src="https://s.coze.cn/image/uVNLr5QBWy8/"
              alt="水上别墅"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="carousel-item h-full">
            <img
              src="https://s.coze.cn/image/xaBC6Ih1bQo/"
              alt="无人沙洲"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- 轮播指示器 -->
        <div class="carousel-indicators">
          <button class="carousel-indicator active" data-index="0"></button>
          <button class="carousel-indicator" data-index="1"></button>
          <button class="carousel-indicator" data-index="2"></button>
        </div>
      </div>

      <!-- 渐变遮罩 -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
      ></div>

      <!-- 标题和信息 -->
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div class="container mx-auto">
          <div class="max-w-4xl">
            <div class="flex flex-wrap items-center mb-4">
              <div class="tag tag-blue mr-4 mb-2"><i class="fas fa-star mr-1"></i> 奢华私人岛</div>
              <div class="tag tag-green mr-4 mb-2">
                <i class="fas fa-map-marker-alt mr-1"></i> 马尔代夫
              </div>
              <div class="tag tag-teal mb-2"><i class="fas fa-calendar-check mr-1"></i> 可预订</div>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
              鹦鹉螺 The Nautilus Maldives
            </h1>

            <div class="flex flex-wrap items-center mb-6">
              <div class="flex items-center mr-6 mb-2">
                <div class="star-rating mr-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span class="text-white font-medium">9.2分 卓越体验</span>
              </div>
              <div class="flex items-center mr-6 mb-2">
                <i class="fas fa-user-friends text-white mr-2"></i>
                <span class="text-white">300+ 住客点评</span>
              </div>
              <div class="flex items-center mb-2">
                <i class="fas fa-trophy text-white mr-2"></i>
                <span class="text-white">2024年度最佳私人岛</span>
              </div>
            </div>

            <p class="text-white text-lg md:text-xl mb-8 max-w-2xl">
              位于马尔代夫南部的隐秘天堂，鹦鹉螺私人岛以其独特的设计理念和无与伦比的奢华体验，为追求极致度假的旅行者提供了一个远离喧嚣的世外桃源。
            </p>

            <div class="flex flex-wrap gap-4">
              <a href="#booking" class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i> 立即预订
              </a>
              <a
                href="#details"
                class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                <i class="fas fa-info-circle mr-2"></i> 了解更多
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="container mx-auto px-4 py-16">
      <!-- 信息展示区 -->
      <section id="details" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- 左侧内容 -->
        <div class="lg:col-span-2 space-y-12">
          <!-- 海岛简介 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">海岛简介</h2>
            <div class="prose prose-lg max-w-none">
              <p class="mb-4">
                鹦鹉螺私人岛（The Nautilus
                Maldives）是马尔代夫最具特色的奢华度假岛屿之一，位于芭环礁（Baa
                Atoll）联合国教科文组织生物圈保护区内。这座岛屿以其独特的设计理念、私密的度假环境和卓越的服务体验而闻名于世。
              </p>
              <p class="mb-4">
                岛屿面积虽小，却拥有26间设计独特的水上和沙滩别墅，每一间都配备了私人泳池和专属管家服务。岛上的餐厅提供由米其林星级厨师精心打造的美食，融合了马尔代夫当地风味和国际美食。
              </p>
              <p>
                鹦鹉螺私人岛最引人注目的特色包括：专属的无人沙洲、星空泳池、水下餐厅以及丰富的水上活动。无论您是寻求浪漫的蜜月之旅，还是想要与家人共度难忘的假期，这里都能满足您的所有期望。
              </p>
            </div>
          </div>

          <!-- 特色标签 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">特色体验</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-xl p-6 shadow-md card-hover">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                >
                  <i class="fas fa-umbrella-beach text-primary-blue text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">无人沙洲</h3>
                <p class="text-gray-600">
                  专属的无人沙洲提供极致私密的海滩体验，您可以在这里享受日光浴、野餐或浪漫的晚餐，完全不受打扰。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md card-hover">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4"
                >
                  <i class="fas fa-moon text-purple-600 text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">星空泳池</h3>
                <p class="text-gray-600">
                  别墅的无边泳池采用特殊设计，夜晚时分，您可以仰卧在水中，欣赏马尔代夫璀璨的星空，体验独特的浪漫氛围。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md card-hover">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
                >
                  <i class="fas fa-user-shield text-secondary-green text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">私人岛体验</h3>
                <p class="text-gray-600">
                  作为一座私人岛屿，鹦鹉螺提供了无与伦比的私密性和专属服务，让您的假期完全按照自己的节奏和喜好度过。
                </p>
              </div>
            </div>
          </div>

          <!-- 房型展示 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">精选房型</h2>
            <div class="space-y-8">
              <!-- 水上别墅 -->
              <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="relative h-64 md:h-auto">
                    <img
                      src="https://s.coze.cn/image/M8JIa-0A1l8/"
                      alt="水上别墅"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-2xl font-semibold">水上别墅</h3>
                      <div class="price-tag">¥18,000/晚起</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      水上别墅建在清澈的海面上，拥有私人泳池和玻璃地板，可以直接欣赏海底世界。别墅内部装饰精美，配备了高端设施，为您提供舒适奢华的住宿体验。
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="tag tag-blue">180㎡</span>
                      <span class="tag tag-blue">1-2人</span>
                      <span class="tag tag-blue">私人泳池</span>
                      <span class="tag tag-blue">玻璃地板</span>
                    </div>
                    <a
                      href="#"
                      class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors"
                    >
                      查看详情 <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- 沙滩别墅 -->
              <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="relative h-64 md:h-auto order-2 md:order-1">
                    <img
                      src="https://s.coze.cn/image/9HzKx_2HVe4/"
                      alt="沙滩别墅"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="p-6 order-1 md:order-2">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-2xl font-semibold">沙滩别墅</h3>
                      <div class="price-tag">¥20,000/晚起</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      沙滩别墅直接通向洁白的沙滩，拥有宽敞的私人花园和户外休息区。别墅内部空间开阔，装饰典雅，配备了先进的设施，为您提供宁静舒适的度假环境。
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="tag tag-blue">220㎡</span>
                      <span class="tag tag-blue">2-3人</span>
                      <span class="tag tag-blue">私人花园</span>
                      <span class="tag tag-blue">直通沙滩</span>
                    </div>
                    <a
                      href="#"
                      class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors"
                    >
                      查看详情 <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 餐饮体验 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">餐饮体验</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                <div class="relative h-48">
                  <img
                    src="https://s.coze.cn/image/TBxp3WVGSUs/"
                    alt="水上餐厅"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">水上餐厅</h3>
                  <p class="text-gray-600 mb-4">
                    位于清澈海面上的水上餐厅提供新鲜的海鲜和国际美食，您可以一边享用美食，一边欣赏美丽的海景和海底世界。
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <i class="fas fa-clock mr-2"></i> 早餐: 7:00-10:30 | 午餐: 12:30-15:00 | 晚餐:
                    19:00-22:30
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                <div class="relative h-48">
                  <img
                    src="https://s.coze.cn/image/tw967zrM-38/"
                    alt="沙滩烧烤餐厅"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">沙滩烧烤餐厅</h3>
                  <p class="text-gray-600 mb-4">
                    位于洁白沙滩上的烧烤餐厅提供各种新鲜的海鲜和肉类烧烤，您可以在星空下享用美食，感受浪漫的氛围。
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <i class="fas fa-clock mr-2"></i> 晚餐: 19:00-22:30 (需提前预订)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 交通指南 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">交通指南</h2>
            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">上岛方式</h3>
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div
                        class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                      >
                        <i class="fas fa-plane-departure text-primary-blue"></i>
                      </div>
                      <div>
                        <h4 class="font-medium mb-1">水上飞机</h4>
                        <p class="text-gray-600 text-sm">
                          从马累国际机场乘坐水上飞机，约30分钟即可抵达鹦鹉螺私人岛。
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start">
                      <div
                        class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                      >
                        <i class="fas fa-plane text-secondary-green"></i>
                      </div>
                      <div>
                        <h4 class="font-medium mb-1">内飞+快艇</h4>
                        <p class="text-gray-600 text-sm">
                          先乘坐内陆飞机至中转站(约15分钟)，然后转乘快艇至岛屿(约15分钟)。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-semibold mb-4">接送服务</h3>
                  <p class="text-gray-600 mb-4">
                    鹦鹉螺私人岛提供专属的接送服务，包括机场到岛屿的往返交通。预订确认后，酒店会安排专人在机场迎接您，并协助您办理登机手续。
                  </p>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-blue-800 text-sm">
                      <i class="fas fa-info-circle mr-2"></i>
                      为了确保您的行程顺利，请在预订时提供准确的航班信息，包括航空公司、航班号和抵达时间。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 用户评价 -->
          <div class="fade-in">
            <h2 class="text-3xl font-bold mb-6 text-dark-blue">用户评价</h2>
            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <div class="flex items-center mb-2">
                    <div class="star-rating mr-2">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span class="text-2xl font-bold">9.2</span>
                    <span class="text-gray-500 ml-2">/ 10</span>
                  </div>
                  <p class="text-gray-600">基于300+位住客的真实评价</p>
                </div>

                <div class="mt-4 md:mt-0">
                  <a
                    href="#"
                    class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors"
                  >
                    查看全部评价 <i class="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>

              <div class="space-y-6">
                <!-- 评价1 -->
                <div class="border-b border-gray-100 pb-6">
                  <div class="flex items-center mb-3">
                    <img
                      src="https://s.coze.cn/image/m8wrVLh_c9E/"
                      alt="用户头像"
                      class="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 class="font-medium">张女士</h4>
                      <p class="text-gray-500 text-sm">2024年5月 度蜜月</p>
                    </div>
                  </div>
                  <div class="star-rating mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="text-gray-700">
                    "这是我们度过的最完美的蜜月之旅！水上别墅的设计非常独特，私人泳池和玻璃地板让我们可以随时欣赏美丽的海底世界。管家服务非常贴心，餐厅的美食也令人难忘。强烈推荐给所有想要享受奢华度假体验的情侣！"
                  </p>
                </div>

                <!-- 评价2 -->
                <div class="border-b border-gray-100 pb-6">
                  <div class="flex items-center mb-3">
                    <img
                      src="https://s.coze.cn/image/2VmjSuacRj4/"
                      alt="用户头像"
                      class="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 class="font-medium">王先生</h4>
                      <p class="text-gray-500 text-sm">2024年3月 家庭旅行</p>
                    </div>
                  </div>
                  <div class="star-rating mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p class="text-gray-700">
                    "带家人来鹦鹉螺度假是我们做过的最好的决定之一。孩子们非常喜欢水上活动和无人沙洲，而我们则享受了宁静的放松时光。工作人员非常友好，特别是儿童看护服务让我们可以安心享受二人世界。唯一的小缺点是价格有点高，但考虑到提供的服务和体验，绝对值得！"
                  </p>
                </div>

                <!-- 评价3 -->
                <div>
                  <div class="flex items-center mb-3">
                    <img
                      src="https://s.coze.cn/image/88-Ymalxg8Q/"
                      alt="用户头像"
                      class="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 class="font-medium">李先生</h4>
                      <p class="text-gray-500 text-sm">2024年1月 独自旅行</p>
                    </div>
                  </div>
                  <div class="star-rating mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="text-gray-700">
                    "作为一名摄影爱好者，我对鹦鹉螺的美景感到惊叹。无论是日出、日落还是星空，每一个时刻都让我按下快门。岛上的设施非常完善，工作人员也很专业。虽然是独自旅行，但我一点也不感到孤单，反而享受了难得的宁静和自我反思的时间。"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧预订栏 -->
        <div class="lg:col-span-1">
          <div id="booking" class="booking-box sticky top-24 p-6">
            <h2 class="text-2xl font-bold mb-6 text-dark-blue">预订信息</h2>

            <!-- 价格信息 -->
            <div class="mb-8">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">淡季预算 (5-10月)</span>
                <span class="font-bold text-xl"
                  >¥73,000<span class="text-sm font-normal text-gray-500">/2人起</span></span
                >
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">旺季预算 (11-4月)</span>
                <span class="font-bold text-xl"
                  >¥103,000<span class="text-sm font-normal text-gray-500">/2人起</span></span
                >
              </div>
              <p class="text-gray-500 text-sm mt-2">* 价格包含住宿、餐饮、上岛交通和部分活动</p>
            </div>

            <!-- 预订表单 -->
            <div class="space-y-4 mb-8">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">入住日期</label>
                <div class="relative">
                  <input
                    type="date"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i class="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">离店日期</label>
                <div class="relative">
                  <input
                    type="date"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i class="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">客人数量</label>
                <div class="relative">
                  <select
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all appearance-none"
                  >
                    <option>2位成人</option>
                    <option>2位成人, 1位儿童</option>
                    <option>2位成人, 2位儿童</option>
                    <option>3位成人</option>
                    <option>4位成人</option>
                  </select>
                  <div
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  >
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">房型选择</label>
                <div class="relative">
                  <select
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all appearance-none"
                  >
                    <option>水上别墅</option>
                    <option>沙滩别墅</option>
                    <option>豪华水上别墅</option>
                    <option>豪华沙滩别墅</option>
                  </select>
                  <div
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  >
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- 预订按钮 -->
            <a href="#" class="btn-primary w-full mb-4">
              <i class="fas fa-calendar-check mr-2"></i> 立即预订
            </a>

            <a
              href="#"
              class="block w-full text-center px-6 py-3 border border-primary-blue text-primary-blue font-medium rounded-lg hover:bg-primary-blue/5 transition-colors"
            >
              <i class="fas fa-question-circle mr-2"></i> 咨询客服
            </a>

            <!-- 优惠信息 -->
            <div class="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 class="font-semibold mb-2 text-blue-800">限时优惠</h3>
              <ul class="space-y-2 text-sm text-blue-700">
                <li class="flex items-start">
                  <i class="fas fa-check-circle mr-2 mt-0.5"></i>
                  <span>预订7晚及以上，享受8.5折优惠</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mr-2 mt-0.5"></i>
                  <span>蜜月客人可获赠香槟和鲜花</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mr-2 mt-0.5"></i>
                  <span>提前30天预订，免费升级房型</span>
                </li>
              </ul>
            </div>

            <!-- 联系信息 -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <h3 class="font-semibold mb-4 text-gray-700">联系我们</h3>
              <div class="space-y-3">
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-phone-alt w-5 text-center mr-3 text-primary-blue"></i>
                  <span>400-888-8888</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-envelope w-5 text-center mr-3 text-primary-blue"></i>
                  <span>booking@nautilus-maldives.com</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-weixin w-5 text-center mr-3 text-primary-blue"></i>
                  <span>nautilus_maldives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 消费明细 -->
      <section class="fade-in mb-20">
        <h2 class="text-3xl font-bold mb-6 text-dark-blue">消费明细</h2>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    项目
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    包含内容
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    价格
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    备注
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    住宿
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    水上别墅/沙滩别墅 5晚住宿
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">¥60,000-80,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    根据房型和季节不同
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    餐饮
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    早餐、午餐、晚餐（全包式）
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    已包含在住宿费用中
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    特殊餐厅和高端酒水需额外付费
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    交通
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    马累机场至岛屿往返交通
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">¥8,000-12,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    根据交通方式不同
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    活动
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    浮潜、独木舟、健身房等基础活动
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">免费</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    深潜、海钓等特殊活动需额外付费
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    税费和服务费
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    政府税、环保税、服务费等
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    约为总费用的10-15%
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    根据实际消费计算
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p class="text-yellow-800 text-sm">
              <i class="fas fa-info-circle mr-2"></i>
              以上价格仅供参考，实际价格可能因季节、房型、人数等因素而有所不同。预订前请联系客服获取准确报价。
            </p>
          </div>
        </div>
      </section>

      <!-- 常见问题 -->
      <section class="fade-in mb-20">
        <h2 class="text-3xl font-bold mb-6 text-dark-blue">常见问题</h2>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <div class="space-y-4">
            <div class="border-b border-gray-100 pb-4">
              <h3 class="text-lg font-semibold mb-2">最佳旅行季节是什么时候？</h3>
              <p class="text-gray-600">
                马尔代夫的最佳旅行季节是11月至次年4月，这段时间天气晴朗，降水较少，非常适合水上活动和海滩度假。5月至10月是雨季，但通常是短暂的阵雨，不会影响整体旅行体验，而且价格相对较低。
              </p>
            </div>

            <div class="border-b border-gray-100 pb-4">
              <h3 class="text-lg font-semibold mb-2">需要提前多久预订？</h3>
              <p class="text-gray-600">
                建议提前3-6个月预订，特别是在旺季（11月至次年4月）和节假日期间。提前预订不仅可以确保您获得理想的房型，还可以享受提前预订的优惠。
              </p>
            </div>

            <div class="border-b border-gray-100 pb-4">
              <h3 class="text-lg font-semibold mb-2">岛上有哪些水上活动？</h3>
              <p class="text-gray-600">
                鹦鹉螺私人岛提供丰富的水上活动，包括浮潜、深潜、海钓、独木舟、帆船、喷气滑雪等。大部分基础活动是免费的，而一些特殊活动（如深潜课程、私人游艇出海等）需要额外付费。
              </p>
            </div>

            <div class="border-b border-gray-100 pb-4">
              <h3 class="text-lg font-semibold mb-2">是否需要签证？</h3>
              <p class="text-gray-600">
                中国公民前往马尔代夫可以享受30天的落地签待遇，无需提前办理签证。抵达马累国际机场后，您需要出示有效护照、返程机票和酒店预订确认函即可获得落地签证。
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">岛上的支付方式是什么？</h3>
              <p class="text-gray-600">
                岛上接受主要的信用卡（如Visa、Mastercard、American
                Express等），也可以使用美元现金。马尔代夫卢比在度假村内通常不被接受。建议您在出发前告知银行您的旅行计划，以避免信用卡被冻结。
              </p>
            </div>
          </div>

          <div class="mt-6 text-center">
            <a
              href="#"
              class="text-primary-blue font-medium hover:text-primary-blue-dark transition-colors"
            >
              查看更多常见问题 <i class="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- 底部信息区 -->
    <footer class="bg-dark-blue text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4">海岛度假</h3>
            <p class="text-blue-200 mb-4">
              为您提供全球顶级海岛度假体验，让每一次旅行都成为难忘的回忆。
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-blue-200 hover:text-white transition-colors">
                <i class="fab fa-weixin text-xl"></i>
              </a>
              <a href="#" class="text-blue-200 hover:text-white transition-colors">
                <i class="fab fa-weibo text-xl"></i>
              </a>
              <a href="#" class="text-blue-200 hover:text-white transition-colors">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" class="text-blue-200 hover:text-white transition-colors">
                <i class="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">热门目的地</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">马尔代夫</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">巴厘岛</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">普吉岛</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">塞舌尔</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">毛里求斯</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">旅行服务</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">酒店预订</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">机票预订</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">度假套餐</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">签证服务</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">旅行保险</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <i class="fas fa-phone-alt mr-2"></i>
                <span>400-888-8888</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope mr-2"></i>
                <span>info@islandholiday.com</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>北京市朝阳区建国路88号</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>© 2024 海岛度假. 保留所有权利.</p>
          <p class="mt-2">页面内容均由 AI 生成，仅供参考</p>
          <p class="mt-2">
            <a href="https://space.coze.cn" class="text-blue-300 hover:text-white transition-colors"
              >created by coze space</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

// 导航栏滚动控制
const mainNav = ref(null)
const handleScroll = () => {
  if (window.scrollY > 50) {
    mainNav.value?.classList.add('nav-scrolled')
  } else {
    mainNav.value?.classList.remove('nav-scrolled')
  }
}

// 移动端菜单控制
const mobileMenu = ref(null)
const menuOverlay = ref(null)
const isMenuActive = ref(false)

const openMenu = () => {
  isMenuActive.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isMenuActive.value = false
  document.body.style.overflow = ''
}

// 轮播逻辑
const carouselInner = ref(null)
const carouselItems = ref([])
const indicators = ref([])
const currentIndex = ref(0)
let interval = null

const updateSlide = () => {
  if (carouselInner.value) {
    carouselInner.value.style.transform = `translateX(-${currentIndex.value * 100}%)`
  }
  indicators.value.forEach((el, index) => {
    el.classList.toggle('active', index === currentIndex.value)
  })
}

const startSlide = () => {
  stopSlide()
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselItems.value.length
    updateSlide()
  }, 5000)
}

const stopSlide = () => {
  if (interval) clearInterval(interval)
}

// 滚动动画
const checkFadeElements = () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const rect = el.getBoundingClientRect()
    const visible = rect.top < window.innerHeight - 100 && rect.bottom > 0
    if (visible) el.classList.add('visible')
  })
}

// 平滑滚动
const enableSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href')
      if (!targetId || targetId === '#') return
      e.preventDefault()
      const targetEl = document.querySelector(targetId)
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 80,
          behavior: 'smooth',
        })
        closeMenu()
      }
    })
  })
}

onMounted(() => {
  // 滚动事件
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', checkFadeElements)
  window.addEventListener('load', checkFadeElements)
  nextTick(() => {
    // 初始化轮播
    carouselItems.value = Array.from(document.querySelectorAll('.carousel-item'))
    indicators.value = Array.from(document.querySelectorAll('.carousel-indicator'))
    indicators.value.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex.value = index
        updateSlide()
      })
    })
    const carousel = document.querySelector('.carousel')
    carousel.addEventListener('mouseenter', stopSlide)
    carousel.addEventListener('mouseleave', startSlide)
    startSlide()
  })
  enableSmoothScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', checkFadeElements)
  stopSlide()
})
</script>

<style scoped>
body {
  font-family: 'Inter', 'Noto Sans SC', sans-serif;
  color: #334155;
  background-color: #f8fafc;
  overflow-x: hidden;
}

/* 主色调定义 */
:root {
  --primary-blue: #0ea5e9;
  --primary-blue-dark: #0284c7;
  --secondary-green: #10b981;
  --secondary-green-dark: #059669;
  --accent-teal: #0d9488;
  --light-sand: #fef3c7;
  --dark-blue: #0c4a6e;
}

/* 导航栏样式 */
.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 卡片悬停效果 */
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 按钮样式 */
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-2px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 标签样式 */
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.tag-blue {
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-blue);
}
.tag-green {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--secondary-green);
}
.tag-teal {
  background-color: rgba(13, 148, 136, 0.1);
  color: var(--accent-teal);
}

/* 星级评分样式 */
.star-rating {
  color: #f59e0b;
}

/* 滚动动画 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 图片轮播样式 */
.carousel {
  position: relative;
  overflow: hidden;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-item {
  min-width: 100%;
}
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}
.carousel-indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.carousel-indicator.active {
  background-color: white;
}

/* 预订框样式 */
.booking-box {
  background-color: white;
  border-radius: 0.75rem;
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

/* 价格标签样式 */
.price-tag {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--secondary-green);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
}

/* 移动端菜单样式 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 50;
  transition: right 0.3s ease;
  box-shadow: -10px 0 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}
.mobile-menu.active {
  right: 0;
}
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}
.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 响应式断点 */
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}
@media (min-width: 769px) {
  .mobile-only {
    display: none;
  }
}
</style>
