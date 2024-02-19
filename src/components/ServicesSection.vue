<template>
    <section id="services" class="section-services">
      <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-item" v-for="service in services" :key="service.id">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
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
          { id: 1, title: 'Web Development', description: 'Custom web applications...' },
          { id: 2, title: 'Mobile App Development', description: 'Native and cross-platform apps...' },
          // Add more services as needed
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  </style>
  