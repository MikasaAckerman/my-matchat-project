<template>
  <div class="home">
    <NavigationBar />
    <HeroSection />
    <ServicesSection />
    <TechnologySection />
    <FooterSection />
  </div>
</template>

<script>
// Importing the components used on the home page
import NavigationBar from '@/components/NavigationBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TechnologySection from '@/components/TechnologySection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    HeroSection,
    ServicesSection,
    TechnologySection,
    FooterSection
  }
};
</script>

<!-- <style scoped>
.hero {
  
  background-color: white;
  color: #3a5a40; /* Darker matcha green for text */
  padding: 2rem;
  text-align: center;
}

/* Navigation bar styling */
nav {
  background-color: #80B966; /* Matcha green background */
  /* Other styles */
}

/* Other component styles */
</style> -->
