<template>
  <div class="company">
    <div class="app-image">
      <img ref="companyImage" src="../assets/company.png" alt="Company Image" style="width: 100%; height: auto; position: relative; top: 0; left: 0; z-index: 1;">
    </div>
    <div class="info-list">
      <div class="item">
        <div class="title">社&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;名</div>
        <div class="content">MatChat株式会社</div>
      </div>
      <div class="item">
        <div class="title">所&#x3000;&#x3000;在&#x3000;&#x3000;地</div>
        <div class="content">〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C</div>
      </div>
      <div class="item">
        <div class="title">電&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;話</div>
        <div class="content">070-9115-2458</div>
      </div>
      <div class="item">
        <div class="title">資&#x3000;&#x3000;本&#x3000;&#x3000;金</div>
        <div class="content">300万円</div>
      </div>
      <div class="item">
        <div class="title">代表取締役社長</div>
        <div class="content">王 渊博</div>
      </div>
      <div class="item">
        <div class="title">設&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;立</div>
        <div class="content">2024年4月</div>
      </div>
      <div class="item">
        <div class="title">事&#x3000;業&#x3000;内&#x3000;容</div>
        <div class="content">
          · モバイルアプリケーション、システムの設計、開発、保守の提案及びコンサルティング<br>
          · オンラインサービス運営<br>
          · ソフトウェア開発技術者の教育、各種研修・セミナーの企画・運営</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyView',
  // 如果需要，这里可以添加JavaScript逻辑
};
</script>

<style scoped>
.app-image {
  top: 50px;
}

.info-list {
  width: 100%;
  max-width: 800px; /* 或您希望的最大宽度 */
  margin: 50px auto; /* 居中显示 */
  padding: 0; /* 可以根据需要调整 */
  list-style-type: none; /* 移除列表项目符号 */
  background: #fff; /* 背景颜色，根据需求修改 */
  color: #305158; /* 字体颜色，根据需求修改 */
}

.info-list .item {
  border-bottom: 1px solid #305158; /* 分隔线颜色 */
  text-align: left; /* 左对齐 */
}

.info-list .item .title {
  padding: 24px 16px 0px; /* 上下左右内边距，根据需求修改 */
  font-weight: bold;
}

.info-list .item .content {
  padding: 16px 24px 16px; /* 上下左右内边距，根据需求修改 */
}

/* 可选: 最后一个项没有分隔线 */
.info-list .item:last-child {
  border-bottom: none;
}

.info-table {
  border-collapse: collapse;
  margin: 100px auto; /* 在此设置上下的间距为20px，左右自动居中 */
  table-layout: auto;
  max-width: 90%;
}

.info-table th, .info-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  vertical-align: top;
}

.info-table th {
  background-color: #f2f2f2;
}

@media (max-width: 768px) {
  .info-list {
    margin: 10px auto; /* 在此设置上下的间距为20px，左右自动居中 */
  }
}

</style>
