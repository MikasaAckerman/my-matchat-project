<template>
  <div class="home">
    <HeroSection />
    <ServicesSection />
    <TechnologySection />
    <NewsSection />
  </div>
</template>

<script>
// Importing the components used on the home page
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TechnologySection from '@/components/TechnologySection.vue';
import NewsSection from '@/components/NewsSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ServicesSection,
    TechnologySection,
    NewsSection,
  }
};
</script>
