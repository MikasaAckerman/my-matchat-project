<template>
  <div class="home">
    <NavigationBar />
    <HeroSection />
    <ServicesSection />
    <TechnologySection />
    <NewsSection />
    <FooterSection />
  </div>
</template>

<script>
// Importing the components used on the home page
import NavigationBar from '@/components/NavigationBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TechnologySection from '@/components/TechnologySection.vue';
import NewsSection from '@/components/NewsSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    HeroSection,
    ServicesSection,
    TechnologySection,
    NewsSection,
    FooterSection
  }
};
</script>
