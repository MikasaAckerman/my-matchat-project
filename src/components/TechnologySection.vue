<template>
    <section id="technology" class="section-technology">
      <div class="container">
        <div class="reveal">
          <span class="section-kicker">Technology</span>
          <h2 class="section-heading">テクノロジー</h2>
        </div>
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
        <img src="@/assets/deviceframes-5.png" alt="App Image" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'MatChat App')">
       </div>
       <div class="app-image">
        <img src="@/assets/deviceframes-3.png" alt="App Image" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'MatChat App')">
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

      <div class="app-container">
       <div class="app-image">
        <img src="@/assets/Genki.png" alt="Genki App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'Genki App')">
       </div>
       <div class="app-image">
        <img src="@/assets/Genki2.png" alt="Genki App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'Genki App')">
       </div>
       <div class="app-description app-description-genki">
        <h3>自社開発「元気？」アプリ</h3>
        <p align="left">本アプリは、一般的な「チェックインアプリ」ではなく、高齢者向けの安否確認・見守り支援を目的としたアプリです。
          <br><br>近年、日本およびアジア地域では高齢化が進み、独居高齢者の増加や孤独死が社会課題となっています。本アプリは、そのような背景を踏まえ、ご家族や地域コミュニティによる見守りを支援する目的で設計されています。
          <br><br>本アプリでは、高齢者ご本人が毎日ワンタップで安否確認を行うことができ、一定期間操作が確認できなかった場合にのみ、事前に設定されたご家族のメールアドレスへ自動通知が送信されます。
          <br><br>操作を極力シンプルにし、スマートフォン操作に不慣れな高齢者でも利用できることを重視しています。また、本アプリは日本国内の高齢者コミュニティでの利用・普及を想定しており、特定の社会的課題に対応する目的特化型アプリです。</p>
          <div class="store-badges">
           <a href="https://apps.apple.com/us/app/%E5%85%83%E6%B0%97/id6758091627" target="_blank">
            <img src="@/assets/APPSTORE_DL.png" alt="App Store" class="store-badge">
           </a>
           <a href="https://play.google.com/store/apps/details?id=jp.co.matchat.genki" target="_blank">
            <img src="@/assets/GooglePlay_DL.webp" alt="Google Play" class="store-badge">
           </a>
          </div>
       </div>
      </div>

      <div class="app-container app-container-charades">
       <div class="app-track-charades">
        <div class="app-gallery-charades">
         <div class="app-image app-image-charades">
          <img src="@/assets/CharadessMain.png" alt="Charadess App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'Charadess App')">
         </div>
         <div class="app-image app-image-charades">
          <img src="@/assets/CharadessSide.png" alt="Charadess App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'Charadess App')">
         </div>
         <div class="app-image app-image-charades">
          <img src="@/assets/CharadessExtra1.png" alt="Charadess App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'Charadess App')">
         </div>
         <div class="app-image app-image-charades">
          <img src="@/assets/CharadessExtra2.png" alt="Charadess App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'Charadess App')">
         </div>
        </div>
        <div class="charades-panel">
         <h3>自社開発「Charadess!」アプリ</h3>
         <p align="left">「Charadess!」は、友人や家族と一緒に楽しめるシンプルなパーティー向けジェスチャーゲームです。
           <br><br>プレイヤーはスマートフォンを額の前で横向きに構え、周囲のメンバーがジェスチャーや説明でお題を伝えます。端末を上に傾けるとスキップ、下に傾けると正解として判定できる直感的な操作を採用しています。
           <br><br>動物、映画キャラクター、歴史上の人物、食べ物など複数のカテゴリを収録しており、オリジナルの単語リストを作成することも可能です。
           <br><br>ホームパーティーや家族の集まりなど、人が集まる場を盛り上げるカジュアルゲームとして展開しています。</p>
           <div class="store-badges charades-store-badges">
            <a href="https://apps.apple.com/us/app/charadess/id6759971097" target="_blank">
             <img src="@/assets/APPSTORE_DL.png" alt="App Store" class="store-badge">
            </a>
            <a href="https://play.google.com/store/apps/details?id=jp.co.matchat.charades" target="_blank">
             <img src="@/assets/GooglePlay_DL.webp" alt="Google Play" class="store-badge">
            </a>
           </div>
        </div>
       </div>
      </div>

      <div class="app-container app-container-makishot">
       <div class="app-gallery-makishot">
        <div class="app-image app-image-makishot">
         <img src="@/assets/MakiShot.png" alt="MakiShot App" class="previewable-image" @click="openPreview($event.target.currentSrc || $event.target.src, 'MakiShot App')">
        </div>
       </div>
       <div class="app-description app-description-makishot">
        <h3>自社開発・運営の MakiShotアプリおよびオンラインサービス</h3>
        <p align="left">Maki Shot は、写真撮影に関する予約プラットフォームです。
          <br><br>利用者は、撮影者、モデル、撮影スタジオ等のサービス提供者を検索し、撮影内容・日時・料金を確認したうえで予約・決済を行うことができます。
          <br><br>当社は、予約管理、オンライン決済、キャンセル・返金対応、安全管理機能を提供し、注文金額に対してサービス手数料を受け取ります。</p>
          <div class="store-badges">
           <a href="https://www.makishot.com/#home" target="_blank" class="makishot-link">
            MakiShotへ
           </a>
          </div>
       </div>
      </div>

      <div v-if="previewImage" class="image-preview-overlay" @click.self="closePreview">
       <button type="button" class="image-preview-close" @click="closePreview">×</button>
       <img :src="previewImage" :alt="previewAlt" class="image-preview-content">
      </div>
    </section>
</template>
  
  <script>
  export default {
    name: 'TechnologySection',
    data() {
      return {
        previewAlt: '',
        previewImage: '',
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
    methods: {
      closePreview() {
        this.previewAlt = '';
        this.previewImage = '';
      },
      openPreview(src, alt) {
        this.previewAlt = alt;
        this.previewImage = src;
      },
    },
  };
  </script>
  
  <style scoped>

  
.section-technology {
  overflow-x: hidden;
  padding-top: 3.5rem;
  background-color: #f6f9f6;
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
  padding: 12px 6px 6px; /* 卡片内边距 */
  position: relative;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid rgba(48, 81, 88, 0.08);
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(48, 81, 88, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.technology-item:hover {
  transform: translateY(-6px);
  border-color: rgba(79, 216, 196, 0.5);
  box-shadow: 0 10px 24px rgba(48, 81, 88, 0.12), 0 0 16px rgba(79, 216, 196, 0.15);
}

.technology-item h3 {
  font-size: 0.9rem;
  margin: 8px 0 6px;
  color: #305158;
}

.technology-item img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100px;
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
    width: 100%;
    max-width: 100px;
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
  margin-top: 56px; /* 各アプリ紹介ブロック間・テクノロジーグリッドとの余白 */
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
  background: linear-gradient(160deg, #ffffff 0%, #eef6ef 100%); /* 明るいパネル背景 */
  border: 1px solid rgba(48, 81, 88, 0.1);
  box-shadow: 0 12px 32px rgba(48, 81, 88, 0.1);
  border-radius: 15px; /* 圆角 */
  padding-top: 20px; /* 为图片留出空间 */
  padding-left: 20px; /* 为图片留出空间 */
  padding-right: 20px; /* 为图片留出空间 */
  padding-bottom: 110px; /* 为图片留出空间 */
  position: relative; /* 使得内部的绝对定位元素相对于此容器定位 */
  width: 800px;
  min-height: 400px; /* 保证最小高度，但允许内容增多时扩展 */
}

.app-description-genki {
  padding-bottom: 150px;
}

.app-description-makishot {
  min-height: 290px;
  padding-bottom: 100px;
}

.app-container-makishot {
  justify-content: center;
  min-height: 520px;
}

.app-gallery-makishot {
  width: 620px;
  min-width: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  flex-shrink: 0;
}

.app-image-makishot {
  width: 620px;
  min-width: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-image-makishot img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 14px;
}

.app-container-charades {
  display: block;
  width: auto;
  min-height: 500px;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
}

.app-track-charades {
  min-width: 0;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 620px minmax(0, 1fr);
  align-items: center;
  gap: 20px;
}

.app-gallery-charades {
  width: 620px;
  min-width: 620px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  align-items: center;
  justify-items: center;
  scroll-snap-align: start;
  flex-shrink: 0;
}

.app-image-charades {
  width: 300px;
  min-width: 300px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
}

.app-image-charades img {
  width: 100%;
  height: 100%;
  max-height: none;
  object-fit: cover;
}

.charades-panel {
  background: linear-gradient(160deg, #ffffff 0%, #eef6ef 100%);
  border: 1px solid rgba(48, 81, 88, 0.1);
  box-shadow: 0 12px 32px rgba(48, 81, 88, 0.1);
  border-radius: 15px;
  padding: 20px 20px 90px;
  position: relative;
  min-height: 320px;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  scroll-snap-align: start;
}

.charades-panel h3 {
  margin-top: 0;
  color: #299882;
}

.charades-store-badges {
  bottom: 12px;
  right: 12px;
  gap: 8px;
}

.charades-store-badges .store-badge {
  width: 160px;
}

.app-description h3 {
  margin-top: 0;
  color: #299882;
  letter-spacing: 0.04em;
}

.app-description p,
.charades-panel p {
  line-height: 1.9;
  color: #3a4a47;
}

.previewable-image {
  cursor: zoom-in;
}

.decorative-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px; /* 根据实际图片大小调整 */
  height: auto;
  transition: filter 0.3s ease; /* 添加平滑过渡效果 */
}

.decorative-image:hover {
  /* 鼠标悬停时的样式，例如改变亮度或添加滤镜 */
  filter: brightness(0.8); /* 示例：降低亮度 */
  /* 或者使用其他CSS属性来改变外观，如边框、背景色等 */
}

.app-description, .decorative-image {
  scroll-snap-align: start; /* 滚动捕捉对齐 */
}

.store-badges {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.store-badge {
  width: 200px;
  height: auto;
  transition: filter 0.3s ease;
}

/* App Store のバッジ画像は周囲に透明な余白があり（内容は幅87%程度）、
   同じ width だと小さく見える。ただし2つのバッジは可視部分のアスペクト比が
   異なり幅・高さを同時に揃えられないため、可視面積が近くなる約8%拡大で妥協する。 */
.store-badge[alt="App Store"] {
  width: 216px;
}

.charades-store-badges .store-badge[alt="App Store"] {
  width: 173px;
}

.store-badge:hover {
  filter: brightness(0.8);
}

.makishot-link {
  width: 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #cfe1bf 0%, #adc894 100%);
  color: #3f5f35;
  font-family: "Avenir Next", "Helvetica Neue", "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(122, 160, 95, 0.18);
  transition: filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.makishot-link:hover {
  filter: brightness(0.98);
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(122, 160, 95, 0.24);
}

.image-preview-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(18, 26, 18, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1200;
}

.image-preview-content {
  max-width: min(92vw, 1280px);
  max-height: 88vh;
  border-radius: 16px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
}

.image-preview-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
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

  .app-description-genki {
    padding-bottom: 120px;
  }

  .app-track-charades {
    min-width: 1120px;
    width: max-content;
    max-width: none;
    grid-template-columns: 620px minmax(500px, 1fr);
  }

  .charades-panel {
    min-height: 320px;
    width: 500px;
    max-width: 500px;
    min-width: 500px;
    padding: 10px 10px 90px;
  }

  .app-description-makishot {
    min-height: 250px;
    padding-bottom: 85px;
  }

  .app-container-makishot {
    min-height: 440px;
  }

  .app-container-charades {
    min-height: 500px;
  }

  .charades-store-badges {
    bottom: 8px;
    right: 8px;
    gap: 6px;
  }

  .charades-store-badges .store-badge {
    width: 90px;
  }

  .store-badges {
    bottom: 5px;
    right: 5px;
    gap: 6px;
  }

  .store-badge {
    width: 100px;
  }

  .store-badge[alt="App Store"] {
    width: 108px;
  }

  .charades-store-badges .store-badge[alt="App Store"] {
    width: 97px;
  }

  .makishot-link {
    width: 100px;
    padding: 10px 12px;
    border-radius: 10px;
    font-size: 12px;
  }

  .image-preview-overlay {
    padding: 12px;
  }

  .image-preview-close {
    top: 12px;
    right: 12px;
  }
}
</style>
  
