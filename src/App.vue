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
    <HomeView />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView
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
