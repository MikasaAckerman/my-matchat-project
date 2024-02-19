<template>
    <footer class="site-footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
  };
  </script>
  
  <style scoped>
  .site-footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
  </style>
  