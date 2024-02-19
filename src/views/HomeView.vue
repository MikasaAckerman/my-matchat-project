<template>
  <div class="home">
    <NavigationBar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
// Importing the components used on the home page
import NavigationBar from '@/components/NavigationBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    HeroSection,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    ContactSection,
    FooterSection
  }
};
</script>

<style scoped>
.hero {
  background-color: white;
  color: #3a5a40; /* Darker matcha green for text */
  padding: 2rem;
  text-align: center;
}

/* Navigation bar styling */
nav {
  background-color: #81c784; /* Matcha green background */
  /* Other styles */
}

/* Other component styles */
</style>
