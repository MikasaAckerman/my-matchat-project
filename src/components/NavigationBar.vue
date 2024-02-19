<template>
  <nav class="navbar">
    <div class="container">
      <img src="@/assets/logo.png" alt="Company Logo" class="navbar-logo">
      <ul class="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
.navbar {
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.navbar-logo {
  max-width: 100px;
}
.navbar-links {
  list-style: none;
  display: flex;
}
.navbar-links li {
  margin-left: 1rem;
}
.navbar-links a {
  color: #fff;
  text-decoration: none;
}
</style>
