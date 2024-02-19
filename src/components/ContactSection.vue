<template>
    <section id="contact" class="section-contact">
      <div class="container">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="contactForm.name" placeholder="Your Name" required>
          <input type="email" v-model="contactForm.email" placeholder="Your Email" required>
          <textarea v-model="contactForm.message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        contactForm: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission, e.g., send data to an API
        alert('Form submitted!'); // Placeholder action
      },
    },
  };
  </script>
  
  <style scoped>
  .section-contact {
    padding: 2rem 0;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  </style>
  