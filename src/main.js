// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// import Vue from 'vue';
// import App from './App.vue';
// import router from './router'; // This line imports the router configuration

// Vue.config.productionTip = false;

// new Vue({
//   router, // And this line tells Vue to use the router
//   render: h => h(App),
// }).$mount('#app');


// Old way (Vue 2 or earlier)
// import Vue from 'vue';

// New way (Vue 3)
import { createApp } from 'vue';

// ... rest of your main.js file
import App from './App.vue';
import router from './router';
// Use createApp to create the application instance
const app = createApp(App);

// Use the app instance to configure your application
app.use(router); // If you're using Vue Router

// Mount the app to the DOM
app.mount('#app');
