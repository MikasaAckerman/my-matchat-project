<template>
  <nav class="navbar"  :style="navbarStyle">
    <button class="hamburger" aria-label="Toggle navigation menu">☰</button>
    <div class="container">
      <img src="@/assets/logo.png" alt="Company Logo" class="navbar-logo" @click="goToHomePage">
      <ul class="navbar-links">
        <li @click="goToSection('home')"><span>ホーム</span></li>
        <li @click="goToSection('services')"><span>サービス</span></li>
        <li @click="goToSection('technology')"><span>テクノロジー</span></li>
        <li @click="goToSection('news')"><span>ニュース</span></li>
        <li @click.stop="toggleSubmenu" ref="toggleButton">
          <a><span>会社情報</span></a>
          <!-- 次级菜单 -->
          <div v-if="isSubmenuVisible" class="submenu" ref="submenu">
            <router-link to="/company">会社概要</router-link>
            <a href="#">採用情報</a>
          </div>
        </li>
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
     // 控制次级菜单显示的状态
     isSubmenuVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() { // Vue 3的生命周期钩子，Vue 2中使用beforeDestroy
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleClickOutside);
  },
  computed: {
    navbarStyle() {
      // 默认使用currentColor进行背景颜色的设置
      let backgroundColor = `rgba(${this.currentColor.r}, ${this.currentColor.g}, ${this.currentColor.b}, ${this.currentColor.a})`;
      
      // 如果当前路由是公司信息页面，改变背景颜色
      if (this.$route.path === '/company') {
        backgroundColor = `rgba(${this.currentColor.r}, ${this.currentColor.g}, ${this.currentColor.b}, ${this.currentColor.a})`; // 请替换'特定颜色'为您想要的颜色
      }
      
      return { backgroundColor };
    }
  },
  methods: {
    handleScroll() {
      if (this.$route.path === '/company') {
        return;
      }

      const maxScroll = 200; // 滚动多少距离后颜色变化完成
      const scrollPercentage = Math.min(window.scrollY / maxScroll, 1); // 计算滚动比例

      // 计算当前颜色
      this.currentColor.r = Math.round(this.startColor.r + (this.endColor.r - this.startColor.r) * scrollPercentage);
      this.currentColor.g = Math.round(this.startColor.g + (this.endColor.g - this.startColor.g) * scrollPercentage);
      this.currentColor.b = Math.round(this.startColor.b + (this.endColor.b - this.startColor.b) * scrollPercentage);
      this.currentColor.a = this.startColor.a + (this.endColor.a - this.startColor.a) * scrollPercentage;
    },

    goToHomePage() {
        this.$router.push('/'); // 假设你的主页路由是 '/'
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // 为滚动添加平滑过渡效果
        });
    },

    // 切换次级菜单的显示状态
    toggleSubmenu() {
      this.isSubmenuVisible = !this.isSubmenuVisible;
    },

    handleClickOutside(event) {
      // 检查点击事件是否发生在submenu或触发submenu的按钮上
      if (this.$refs.submenu && !this.$refs.submenu.contains(event.target) && !this.$refs.toggleButton.contains(event.target)) {
        this.isSubmenuVisible = false;
      }
    },

    goToSection(sectionId) {
      if (sectionId) {
        this.$router.push('/').then(() => {
          window.location.hash = sectionId;
          if (sectionId == 'home') {
            window.scrollTo({
            top: 0,
            behavior: 'smooth', // 为滚动添加平滑过渡效果
          });
          }
        });
      } else {
        this.$router.push('/');
      }
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
}

.hamburger {
  display: none;
}

.submenu {
  position: absolute;
  background-color: #305158;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.submenu a {
  display: block; /* 使链接独占一行 */
  font-size: 0.8rem; /* 字体大小小于主链接 */
  color: #fff; /* 字体颜色 */
  padding:8px; /* 上下有8px的padding，左右无 */
  text-decoration: none;
}

.container {
  /* max-width: 1200px; */
  margin-right: 10px;
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
  cursor: pointer; /* 添加手形光标以改善用户体验 */
}

.navbar-links span {
  color: #fff; /* Set text color */
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer; /* 确保文本可点击时显示手形光标 */
}

.navbar-links span:hover {
  color: #81c784; /* Color on hover */
}

@media (max-width: 768px) {
  .submenu a {
    display: block; /* 使链接独占一行 */
    font-size: 0.5rem; /* 字体大小小于主链接 */
    color: #fff; /* 字体颜色 */
    padding:8px; /* 上下有8px的padding，左右无 */
  }

  .navbar-links {
    font-size: 0.6rem;
  }

  .hamburger {
    /* display: block; */
    display: none;
  }
  .container {
     /*display: none; 默认隐藏 */
  }
  .container.active {
    display: block; /* 点击汉堡菜单后显示 */
  }
}

@media (max-width: 400px) {
  .submenu a {
    font-size: 0.4rem; /* 字体大小小于主链接 */
  }

  .navbar-links {
    font-size: 0.5rem;
  }
}
</style>
