<template>
  <section id="news" class="news-section">
    <div class="container">
      <h2 class="news-title">NEWS</h2>
      <div class="news-items">
        <div class="news-item" v-for="news in newsList" :key="news.id">
          <div class="news-image">
            <img :src="news.imageUrl" alt="News Image" />
          </div>
          <div class="news-content">
            <p class="p1">{{ news.date }}</p>
            <p class="p2">{{ news.title }}</p>
          </div>
        </div>
      </div>
      <button class="read-more-btn">coming soon...</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
          { id: 6, imageUrl: require('@/assets/smbc.png'), date: '2025年5月', title: '三井プロジェクトに参画しておりました'},
          { id: 5, imageUrl: require('@/assets/keyence.png'), date: '2025年4月', title: 'Keyenceプロジェクトに参画しておりました'},
          { id: 4, imageUrl: require('@/assets/comotto.png'), date: '2025年1月', title: 'Docomoプロジェクトに参画しておりました'},
          { id: 3, imageUrl: require('@/assets/eneos.png'), date: '2024年7月', title: 'ENEOSプロジェクトに参画しておりました'},
          { id: 2, imageUrl: require('@/assets/accenture.png'), date: '2024年6月', title: 'Accentureとのプロジェクトに参画しておりました'},
          { id: 1, imageUrl: require('@/assets/matchat_white_bg.png'), date: '2024年4月', title: '東京でマッチャット株式会社設立'},
      ],
    };
  },
};
</script>

<style scoped>
.news-section {
  text-align: center; /* 标题和按钮居中 */
  padding-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column; /* 垂直布局 */
  align-items: center; /* 子元素居中 */
  max-width: 800px; /* 根据实际需求调整 */
  margin: 0 auto; /* 水平居中 */
  padding-left: 20px;
  padding-right: 20px;
}

.news-title {
  margin-bottom: 20px; /* 添加适当的间距 */
}

.news-items {
  width: 100%;
  margin-bottom: 20px; /* 添加适当的间距 */
}

.news-item {
  display: flex;
  align-items: top; /* 图片和内容垂直居中 */
  margin-bottom: 10px;
  /* background-color: #f9f9f9; 示例背景色 */
  /* border: 1px solid #ddd; 示例边框 */
}

.news-image img {
  width: 100px; /* 根据实际情况调整 */
  height: 100px; /* 根据实际情况调整 */
  object-fit: cover; /* 确保图片覆盖整个区域 */
  border: 1px solid #ccc; 
}

.news-content {
  padding-left: 10px;
  flex-grow: 1;
  text-align: left; /* 内容左对齐 */
}

.p1, .p2 {
  font-size: 0.6rem;
  margin: 5px;
  padding-left: 5px;
}


.p1 {
  color: #333;
}

.p2 {
  font-size: 0.8rem;
  padding-top: 5px;
  color: #000;
}

.read-more-btn {
  align-self: flex-end; /* 按钮在容器内右对齐 */
  background-color: #80B966; /* 示例按钮颜色 */
  color: white;
  border: none;
  padding: 10px 20px;
  /* cursor: pointer; */
  border-radius: 8px;
  transition: background-color 0.3s ease; /* 平滑过渡背景颜色变化 */
}

.read-more-btn:hover {
  background-color: #305158; /* 鼠标悬停时的背景颜色 */
}
</style>

