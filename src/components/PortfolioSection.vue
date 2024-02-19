<template>
    <section id="portfolio" class="section-portfolio">
      <div class="container">
        <h2>Our Portfolio</h2>
        <div class="portfolio-grid">
          <div class="portfolio-item" v-for="item in portfolioItems" :key="item.id">
            <img :src="item.image" :alt="item.title">
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PortfolioSection',
    data() {
      return {
        portfolioItems: [
          // { id: 1, title: 'Project Name', image: 'path/to/image.jpg' },
          // Add more portfolio items as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .section-portfolio {
    padding: 2rem 0;
  }
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .portfolio-item img {
    width: 100%;
    height: auto;
  }
  </style>
  