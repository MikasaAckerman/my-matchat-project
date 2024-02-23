<template>
  <nav class="navbar"  :style="`background-color: rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a})`">
    <div class="container">
      <img src="@/assets/logo.png" alt="Company Logo" class="navbar-logo">
      <ul class="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
     // 这里使用的是rgba格式
     startColor: { r: 101, g: 140, b: 140, a: 0 }, // rgb(101, 140, 140)
     endColor: { r: 48, g: 81, b: 88, a: 1 }, // { r: 48, g: 81, b: 88, a: 1 }
     currentColor: { r: 101, g: 140, b: 140, a: 0 }, // 当前颜色，初始为透明
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() { // Vue 3的生命周期钩子，Vue 2中使用beforeDestroy
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
  handleScroll() {
    const maxScroll = 200; // 滚动多少距离后颜色变化完成
    const scrollPercentage = Math.min(window.scrollY / maxScroll, 1); // 计算滚动比例

    // 计算当前颜色
    this.currentColor.r = Math.round(this.startColor.r + (this.endColor.r - this.startColor.r) * scrollPercentage);
    this.currentColor.g = Math.round(this.startColor.g + (this.endColor.g - this.startColor.g) * scrollPercentage);
    this.currentColor.b = Math.round(this.startColor.b + (this.endColor.b - this.startColor.b) * scrollPercentage);
    this.currentColor.a = this.startColor.a + (this.endColor.a - this.startColor.a) * scrollPercentage;
  },
},
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: background-color 0.3s ease; /* Set background to transparent */
  color: #305158;
  position: fixed; /* Make navbar fixed at the top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure navbar is above other content */
  padding: 0.1rem 0.4%; /* Adjust padding and ensure it's responsive */
  box-sizing: border-box;
  height: 67px;
}

.container {
  /* max-width: 1200px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  max-width: 50px; /* Adjust logo size */
  border-radius: 50%; 
}

.navbar-links {
  list-style: none;
  display: flex;
  margin-top: 40;
  padding: 20;
  align-content: center;
  align-items: center;
}

.navbar-links li {
  margin-left: 20px; /* Adjust spacing between nav items */
}

.navbar-links a {
  color: #fff; /* Set text color */
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #81c784; /* Color on hover */
}
</style>
