<template>
  <section id="news" class="news-section">
    <div class="container">
      <div class="reveal">
        <span class="section-kicker">News</span>
        <h2 class="section-heading news-title">ニュース</h2>
      </div>
      <div class="news-items">
        <div class="news-item reveal" v-for="news in newsList" :key="news.id">
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
  padding: 3rem 0 40px;
  background-color: #f6f9f6;
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
  margin-bottom: 12px;
  padding: 10px;
  background: #fff;
  border: 1px solid rgba(48, 81, 88, 0.08);
  border-left: 3px solid #8fd06d;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(48, 81, 88, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-left-color 0.3s ease;
}

.news-item:hover {
  transform: translateX(6px);
  border-left-color: #4fd8c4;
  box-shadow: 0 8px 20px rgba(48, 81, 88, 0.12);
}

.news-image img {
  width: 100px; /* 根据实际情况调整 */
  height: 100px; /* 根据实际情况调整 */
  object-fit: cover; /* 确保图片覆盖整个区域 */
  border: 1px solid rgba(48, 81, 88, 0.1);
  border-radius: 8px;
}

.news-content {
  padding-left: 10px;
  flex-grow: 1;
  text-align: left; /* 内容左对齐 */
}

.p1, .p2 {
  font-size: 0.75rem;
  margin: 5px;
  padding-left: 5px;
}


.p1 {
  color: #6b8a80;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.p2 {
  font-size: 0.9rem;
  padding-top: 5px;
  color: #22333a;
}

.read-more-btn {
  align-self: flex-end;
  width: 200px;
  border: none;
  padding: 15px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #cfe1bf 0%, #adc894 100%);
  color: #3f5f35;
  font-family: "Avenir Next", "Helvetica Neue", "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 8px 20px rgba(122, 160, 95, 0.18);
  transition: filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.read-more-btn:hover {
  filter: brightness(0.98);
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(122, 160, 95, 0.24);
}
</style>
