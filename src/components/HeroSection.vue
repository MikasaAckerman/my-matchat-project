<template>
    <section class="hero" ref="heroSection">
      <img ref="heroImage" src="../assets/hero-bg.jpg" alt="Hero Image" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1;">
      <div class="hero-content" style="z-index: 2;">
        <div class="text-background">
          <h1>MatChat</h1>
        </div>
        <!-- <div class="text-background">
          <p></p>
        </div> -->
        <!-- <button class="cta-button">Contact Us</button> -->
      </div>
      <span class="hero-bg-text">へようこそ</span>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    methods: {
    handleScroll() {
      const offset = window.scrollY; // 获取页面垂直滚动的距离
      // this.$el.style.backgroundPositionY = `${-offset * 0.5}px`; // 调整背景图片的垂直位置
      this.$refs.heroImage.style.top = `${-offset * 0.2}px`;

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
   
    if (isIOS()) {
      // const heroSection = this.$refs.heroSection; // 确保在模板中添加 ref="heroSection" 到 .hero div
      // const iosBackground = require('@/assets/hero-bg-iOS.jpg');
      // heroSection.style.backgroundImage = `url(${iosBackground})`;
    }
  },
  beforeUnmount() { // Vue 3 的生命周期钩子，用于清理
    window.removeEventListener('scroll', this.handleScroll);
  }
  };

  function isIOS() {
    const userAgent = window.navigator.userAgent;
    return /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
 }

  </script>
  

  
  <style scoped>

  .hero {
    width: 100%;
    height: calc(100vh);
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url('@/assets/logo.png'); */
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-color: #fafbf5;
    position: relative;
    overflow: hidden;

    -webkit-background-size: 100%; 
    -moz-background-size: 100%; 
    -o-background-size: 100%; 
    background-size: 100%; 
    -webkit-background-size: cover; 
    -moz-background-size: cover; 
    -o-background-size: cover; 
    background-size: cover; 

  }

  .hero img {
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: top 0.2s ease-out;  
}

  /* body {
    background: url('@/assets/hero-bg.jpg') no-repeat center center fixed; 
    -webkit-background-size: 100%; 
    -moz-background-size: 100%; 
    -o-background-size: 100%; 
    background-size: 100%; 
    -webkit-background-size: cover; 
    -moz-background-size: cover; 
    -o-background-size: cover; 
    background-size: cover; 
    }

    html { 
  background: url('@/assets/hero-bg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
   */
  .hero-content {
    text-align: center;
    color: #73a85a; 
  }

  .text-background {
    background-color: rgba(251, 252, 243, 0.0); 
    border-radius: 40px; 
    padding: 0px; 
    display: block;
    margin: 5px 0; 
  }

  .hero-bg-text {
  position: absolute;
  bottom: 1rem; 
  left: 50%; 
  transform: translateX(-50%); 
  color: #73a85a; 
  padding: 10px; 
  font-size: 2rem; 
}

  h1 {
    font-size: 13vw;
    margin: 15px;
    /* margin-bottom: 1rem; */
  }
  
  p {
    font-size: 1.5rem;
    /* margin-bottom: 2rem; */
  }
  
  .cta-button {
    padding: 1rem 2rem;
    background-color: #80B966; /* Match this to your brand color */
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 8vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #81c784; /* Slightly darker on hover */
    }
  }
  </style>
  