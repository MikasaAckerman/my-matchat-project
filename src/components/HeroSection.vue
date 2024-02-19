<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Matchat</h1>
        <p>Your premier software development partner.</p>
        <button class="cta-button">Contact Us</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  };
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/hero-bg.jpg'); /* Replace with your actual image path */
    background-size: cover;
    background-position: center;
    height: 80vh; /* Adjust based on your design */
  }
  
  .hero-content {
    text-align: center;
    color: #fff;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    background-color: green; /* Match this to your brand color */
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: darkgreen; /* Slightly darker on hover */
    }
  }
  </style>
  