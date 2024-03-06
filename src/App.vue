<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
