// import Vue from 'vue';
// import Router from 'vue-router';
// import HomeView from '@/views/HomeView.vue';

// Vue.use(Router);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView,
//   },
//   // You can add more routes here
// ];

// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;

// Old way (Vue Router for Vue 2)
// import Vue from 'vue';
// import Router from 'vue-router';

// New way (Vue Router with Vue 3)
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// Vue.use(Router); // This is no longer needed with Vue 3

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  // ... other route definitions
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
