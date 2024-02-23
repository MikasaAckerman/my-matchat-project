<template>
    <section id="services" class="section-services">

      <h2>サービス</h2>

      <div class="services-container">
        
      
        <div class="services-grid">

          <div class="service-card-container" v-for="service in services" :key="service.id">

            <div class="service-icon">
              <img :src=service.path alt="">
            </div>

            <div class="service-card">
              <div class="service-card-content">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div> 
            
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ServicesSection',
    data() {
      return {
        services: [
          { id: 1, path: require('@/assets/service_system.png'), title: 'システム構築・開発', description: '高度な技術力とAIを駆使して、短納期、低コスト、そして高品質を兼ね備えた様々なシステム開発サービスをご提供します。一方、お客様に最適な開発手法（請負、常駐、ラボ型開発）をご提案させていただきます。' },
          { id: 2, path: require('@/assets/service_business.png'), title: 'ビジネスソリューション', description: 'ITに関する様々な経営課題にお応えする、当社が提供する各種エンジニアリングサービスは、お客様の売上増加やコスト削減を最大の目的としたソリューションです。経験豊富なエンジニアと技術力を求めている企業をマッチングし、お客様先でプロジェクト単位の技術支援、開発支援を行います。' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .section-services {
    padding: 2rem 0;
  }
  .services-grid {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap; /* 允许卡片在不足一行时换行 */
    justify-content: center; /* 在主轴方向上居中对齐卡片 */
    align-items: stretch;
  }

  .service-card {
  background-color: #ced9dc; /* 卡片背景色 */
  border-radius: 15px; /* 卡片圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  overflow: hidden; /* 确保所有子元素都被包含在圆角内 */
  margin: 0.5rem; /* 卡片间距 */
  transition: transform 0.3s; /* 鼠标悬停时的变换效果 */
  max-width: 20rem;
  position: relative;
  flex-grow: 1;
}

.service-card-content {
  padding: 20px; /* 内边距 */
}

.service-card::before {

}

/* 鼠标悬停时卡片上浮效果 */
.service-card:hover {
  transform: translateY(-10px);
}

.services-container {
  display: flex; /* 启用Flexbox */
  justify-content: space-around; /* 卡片之间平均分布空间 */
  flex-wrap: wrap; /* 允许卡片在容器宽度不足时换行 */
}


/* @media (max-width: 600px) { 
  .service-card {
    flex: 0 1 100%; 
  }
} */

.service-card-container {
  position: relative; /* 为图标定位提供上下文 */
  flex: 1 1 300px; /* 默认情况下，每个卡片至少占用300px的空间，可以根据需要调整 */
  margin: 10px; /* 添加一些间隔 */
  display: flex; /* 让卡片容器也成为flex容器 */
  flex-direction: column;
}

@media (max-width: 600px) { /* 600px为例，可以根据实际需求调整 */
  .service-card-container {
    flex: 1 1 100%; /* 在小屏幕上，卡片占满整个容器宽度 */
  }
}

.service-icon {
  position: absolute;
  top: 0; /* 定位到容器的顶部 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 完全居中，并拉上一半在容器外部 */
  width: 60px; /* 图标的宽度 */
  height: 60px; /* 图标的高度 */
  background-color: #80B966; /* 图标的背景颜色 */
  border-radius: 50%; /* 圆形图标 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.25); /* 可选：为图标添加阴影 */
  z-index: 2;
}

.service-icon img {
  width: 50%; /* 根据需要调整图标大小 */
  height: auto;
}
  </style>
  