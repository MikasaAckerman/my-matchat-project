<template>
  <div class="home">
    <HeroSection />
    <TravelView />
    <ServicesSection />
    <TechnologySection />
    <NewsSection />
  </div>
</template>

<script>
// ホームページで使用するコンポーネントを読み込み
import HeroSection from '@/components/HeroSection.vue';
import TravelView from '@/views/TravelView.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TechnologySection from '@/components/TechnologySection.vue';
import NewsSection from '@/components/NewsSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    TravelView,
    ServicesSection,
    TechnologySection,
    NewsSection,
  }
};
</script>
