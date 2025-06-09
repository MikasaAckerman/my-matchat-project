<template>
  <div id="app">
    <NavigationBar />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterSection
  }
}
</script>
