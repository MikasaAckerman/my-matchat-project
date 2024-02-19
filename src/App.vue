<!-- <template>
  <div id="app">
    <NavigationBar />
    <Home />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    Home
  }
}
</script> -->

<template>
  <div id="app">
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
import NavigationBar from './components/NavigationBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
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
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
