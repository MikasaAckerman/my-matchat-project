<template>
    <section id="technology" class="section-technology">
      <div class="container">
        <h2>テクノロジー</h2>
        <div class="technology-grid">
          <div class="technology-item" v-for="item in technologyItems_language" :key="item.id">
            <img :src="item.image" :alt="item.title">
            <h3>{{ item.title }}</h3>
          </div>
        </div>
        <div class="technology-grid2">
          <div class="technology-item" v-for="item in technologyItems_framework" :key="item.id">
            <img :src="item.image" :alt="item.title">
            <h3>{{ item.title }}</h3>
          </div>
        </div>
        <!-- <div class="technology-grid2">
          <div class="technology-item" v-for="item in technologyItems_cloud" :key="item.id">
            <img :src="item.image" :alt="item.title">
            <h3>{{ item.title }}</h3>
          </div>
        </div> -->
      </div>

      <div class="app-container">
       <div class="app-image">
        <img src="@/assets/deviceframes-5.png" alt="App Image">
       </div>
       <div class="app-image">
        <img src="@/assets/deviceframes-3.png" alt="App Image">
       </div>
       <div class="app-description">
        <h3>自社開発MatChatアプリ</h3>
        <p align="left">中国ではChatGPTへのアクセスが規制されている状況を背景に、ChatGPT公式アプリの登場に先駆けて、中国国内のユーザーがChatGPTにアクセスできるようにするための専用アプリを開発しました。このアプリは、日本のAmazon Web Servicesのサーバーを利用し、REST APIを通じてChatGPTからAmazon Cloud in Japanを経由し、中国へと情報を届ける経路を提供しました。
          <br><br>さらに、利用者のメッセージ数に応じた料金設定を導入し、その後トークン数に基づく料金体系へと移行しました。
          <br><br>一方で、ChatGPTの公式アプリがリリースされたことで、当アプリの市場競争力に影響が出ることが予想されます。</p>
          <a href="https://apps.apple.com/jp/app/matchat/id6446103749" target="_blank">
           <img src="@/assets/APPSTORE_DL.png" alt="Decorative Image" class="decorative-image">
          </a>
       </div>
      </div>
    </section>
</template>
  
  <script>
  export default {
    name: 'TechnologySection',
    data() {
      return {
        technologyItems_language: [
          { id: 1, title: 'Swift', image: require('@/assets/Language/Swift.svg') },
          { id: 1, title: 'Objective-C', image: require('@/assets/Language/Objective-C.png') },
          { id: 2, title: 'Kotlin', image: require('@/assets/Language/Kotlin.svg') },
          { id: 4, title: 'Dart', image: require('@/assets/Language/Dart.svg') },

          { id: 3, title: 'Java', image: require('@/assets/Language/Java.svg') },
          { id: 5, title: 'CSharp', image: require('@/assets/Language/CSharp.svg') },
          { id: 8, title: 'Python', image: require('@/assets/Language/Python.svg') },
          { id: 9, title: 'PHP', image: require('@/assets/Language/PHP.svg') },
          { id: 9, title: 'NodeJS', image: require('@/assets/Language/NodeJS.png') },
          { id: 6, title: 'CSS3', image: require('@/assets/Language/CSS3.svg') },
          { id: 6, title: 'HTML5', image: require('@/assets/Language/HTML5.png') },
          { id: 6, title: 'JavaScript', image: require('@/assets/Language/JS.svg') },
          { id: 7, title: 'TypeScript', image: require('@/assets/Language/TypeScript.svg') },
          { id: 10, title: 'Lua', image: require('@/assets/Language/Lua.svg') },
        ],
        technologyItems_framework: [
          { id: 10, title: 'SwiftUI', image: require('@/assets/Language/SwiftUI.png') },
          { id: 10, title: 'Flutter', image: require('@/assets/Language/Flutter.svg') },
          { id: 10, title: 'React\nNative', image: require('@/assets/Language/React-Native.svg') },
          { id: 10, title: 'React', image: require('@/assets/Language/React.svg') },
          { id: 10, title: 'Vue.js', image: require('@/assets/Language/Vue.js.svg') },
          { id: 10, title: 'MySQL', image: require('@/assets/Language/MySQL.png') },
          { id: 10, title: 'AWS', image: require('@/assets/Language/AWS.png') },
          { id: 10, title: 'Azure', image: require('@/assets/Language/Azure.svg') },
          { id: 10, title: 'Google\nCloud', image: require('@/assets/Language/Google-Cloud.png') },
        ],
        technologyItems_cloud: [
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  
.section-technology {
  /* 为整个技术部分设置样式（如有需要） */
}

.container {
  /* 根据需要设置容器样式 */
}

.technology-grid,
.technology-grid2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  row-gap: 10px;
  column-gap: 50px;
  padding: 0 20%;
  /* 你可以根据需要为每个网格单独设置justify-content */
}

/* 如果你想要每个网格单独设置justify-content */
.technology-grid {
  justify-content: center; /* 或其他值 */
  margin-bottom: 40px;
}

.technology-grid2 {
  justify-content: start; /* 或其他值 */
}

.technology-item {
  height: auto;
  padding-top: 0; /* 顶部填充与宽度相同，形成正方形 */
  position: relative; 
}

.technology-item img {
  position: relative;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  object-fit: scale-down; /* 确保图片填充整个容器且不变形 */
  object-position: center;
}

@media (max-width: 768px) { /* 针对手机屏幕的媒体查询 */
  .technology-grid,
  .technology-grid2 {
    padding: 10px; /* 手机屏幕上取消左右间距 */
    gap: 10px;
    margin-bottom: 10px
  }

  .technology-item {
    height: auto; /* 让高度根据内容自适应 */
    padding-top: 0; /* 如果之前设置了padding-top来保持比例 */
  }
  .technology-item img {
    position: relative; /* 或其他布局调整 */
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    object-fit: scale-down; /* 确保图片填充整个容器且不变形 */
    object-position: center;
  }

  .technology-item h3 {
    font-size: 14px; /* 根据需要调整 */
  }
  .technology-item p {
    font-size: 12px; /* 根据需要调整 */
  }
}

/* maomaonochat */
.app-container {
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row; /* 确保水平布局 */
  align-items: center;
  justify-content: center; /* 水平居中对齐 */
  gap: 20px;
  height: auto; /* 修改为自适应高度 */
  min-height: 650px; /* 保持最小高度，如果需要的话 */

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.app-image img {
  width: 300px; /* 根据需要调整图片大小 */
  min-width: 300px;
  height: auto;
  border-radius: 10px; /* 如果需要的话可以添加圆角 */
  scroll-snap-align: start;
  object-fit: contain; /* 确保图片完整显示在容器内 */
}

.app-description {
  background-color: #ced9dc; /* 半透明白色背景 */
  border-radius: 15px; /* 圆角 */
  padding-top: 20px; /* 为图片留出空间 */
  padding-left: 20px; /* 为图片留出空间 */
  padding-right: 20px; /* 为图片留出空间 */
  padding-bottom: 110px; /* 为图片留出空间 */
  position: relative; /* 使得内部的绝对定位元素相对于此容器定位 */
  width: 800px;
  min-height: 400px; /* 保证最小高度，但允许内容增多时扩展 */
}

.app-description h3 {
  margin-top: 0;
  color: #299882;
}

.decorative-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px; /* 根据实际图片大小调整 */
  height: auto;
}

.app-description, .decorative-image {
  scroll-snap-align: start; /* 滚动捕捉对齐 */
}

@media (max-width: 1368px) {
  .app-container {
    padding-left: 10px; /* 如果需要的话，减少或移除内边距 */
    padding-right: 10px;
    justify-content: flex-start; /* 水平居中对齐 */
  }
  
  .app-description {
    padding-top: 10px; /* 为图片留出空间 */
    padding-left: 10px; /* 为图片留出空间 */
    padding-right: 10px; /* 为图片留出空间 */
    padding-bottom:20px; /* 为图片留出空间 */ 
    width: 500px; /* 或其他固定宽度，根据设计需求调整 */
    min-width: 500px;
    height: auto;
  }

  .decorative-image {
    width: 100px; /* 在小屏幕上调整装饰性图片的大小 */
    bottom: 5px;
    right: 5px;
  }
}
</style>
  