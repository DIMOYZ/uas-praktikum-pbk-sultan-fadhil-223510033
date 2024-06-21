<template>
    <div class="hero-section">
      <q-parallax :src="heroImageUrl" :height="500">
        <div class="absolute-full text-center">
          <div class="hero-content">
            <h1 class="text-h3 text-white q-mb-md">Selamat Datang di Toko Online Kami</h1>
            <p class="text-subtitle1 text-white q-mb-lg">Temukan produk-produk berkualitas dengan harga terbaik</p>
            <q-btn label="Belanja Sekarang" color="primary" size="lg" class="q-mb-md" no-caps />
            <q-btn label="Lihat Produk" color="white" text-color="primary" size="lg" no-caps />
          </div>
        </div>
      </q-parallax>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heroImageUrl: 'https://ceklist.id/wp-content/uploads/2021/07/Sepatu-Futsal-Specs-Terbaik.jpg'
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .hero-section {
    .hero-content {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
  }
  </style>