<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-brand">
          <h1>Sultan Fadhil</h1>
          <p>Memberikan layanan terbaik dengan sentuhan profesionalisme.</p>
        </div>
        <div class="footer-social">
          <a href="https://www.instagram.com/sultanfadhil" target="_blank" class="social-link">Instagram</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #34495e;
    color: #ffffff;
    padding: 2rem 0;
    text-align: center;
  }
  
  .footer-brand h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  
  .footer-brand p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  
  .footer-social .social-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 1rem;
    display: inline-block;
  }
  
  .footer-social .social-link:hover {
    color: #f39c12;
  }
  </style>
  