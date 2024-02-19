  
  <template>
    <nav>
      <div class="logo">
       
        <img src="@/assets/matchat.png" alt="Matchat Logo" />
      </div>
      <div class="menu">
        
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationBar',
  };
  </script>

  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #81c784; /* Matcha green background */
  }
  
  .logo img {
    height: 50px; /* Adjust as needed */
  }
  
  /* Additional styles */
  </style>
  