<template>
    <section class="hero">
      <div class="hero-content">
        <div class="text-background">
          <h1>MatChat</h1>
        </div>
        <div class="text-background">
          <p></p>
        </div>
        <!-- <button class="cta-button">Contact Us</button> -->
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    methods: {
    handleScroll() {
      const offset = window.scrollY; // 获取页面垂直滚动的距离
      this.$el.style.backgroundPositionY = `${-offset * 0.5}px`; // 调整背景图片的垂直位置
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() { // Vue 3 的生命周期钩子，用于清理
    window.removeEventListener('scroll', this.handleScroll);
  }
  };

  </script>
  

  
  <style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

  .hero {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/hero-bg.jpg');
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    height: calc(100vh);
    position: relative;
  }
  
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
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #81c784; /* Slightly darker on hover */
    }
  }
  </style>
  