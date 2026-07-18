<template>
  <div class="company">
    <header class="subpage-header reveal">
      <span class="section-kicker">Company</span>
      <h1 class="subpage-title">会社概要</h1>
      <p class="subpage-sub">MatChat株式会社</p>
    </header>

    <div class="company-body">
      <div class="info-list reveal">
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
            · ソフトウェア開発技術者の教育、各種研修・セミナーの企画・運営<br>
            · 旅行のプライベートカスタム（宿泊・交通・体験を組み合わせたオーダーメイド旅行プランの企画・提案）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyView',
};
</script>

<style scoped>
.company {
  background-color: #f6f9f6;
}

/* 会社概要の表を company.png の上に重ねて表示する */
.company-body {
  background-image: url('@/assets/company.png');
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
}

.info-list {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #22333a;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  box-shadow: 0 18px 44px rgba(14, 34, 41, 0.25);
  overflow: hidden;
}

.info-list .item {
  display: grid;
  grid-template-columns: 210px 1fr;
  border-bottom: 1px solid rgba(48, 81, 88, 0.08);
  text-align: left;
}

.info-list .item:last-child {
  border-bottom: none;
}

.info-list .item .title {
  padding: 22px 24px;
  font-weight: 700;
  color: #305158;
  background: linear-gradient(180deg, rgba(143, 208, 109, 0.08), rgba(79, 216, 196, 0.05));
  border-right: 1px solid rgba(48, 81, 88, 0.08);
}

.info-list .item .content {
  padding: 22px 24px;
  line-height: 1.9;
  color: #33454a;
}

@media (max-width: 768px) {
  .company-body {
    padding: 24px 12px;
  }

  .info-list .item {
    grid-template-columns: 1fr;
  }

  .info-list .item .title {
    padding: 16px 20px 6px;
    background: none;
    border-right: none;
    color: #299882;
  }

  .info-list .item .content {
    padding: 0 20px 18px;
  }
}
</style>
