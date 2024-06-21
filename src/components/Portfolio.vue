<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <br>
  <div class="profile-page">
    <div class="profile-container">
      <!-- Foto Profil -->
      <img :src="require('../assets/SAYA.jpeg')" alt="Profil" class="profile-picture">
      <!-- Penjelasan atau teks tambahan bisa ditambahkan di sini -->
      <p class="profile-description">Selamat datang di profil Sultan Fadhil!</p>
    </div>
  </div>
  <br>
  <section class="hero">
    <div class="container">
      <div class="about">
        <h2>About Me</h2>
        <p>Halo! Nama saya SULTAN FADHIL dan saya seorang MAHASISWA Teknik Informatika.</p>
      </div>
      <div class="my-work">
        <h2>My Work</h2>
        <p>Saya pernah bekerja sebagai pendodos dan sekarang saya seorang investor.</p>
      </div>
      <div class="social-media">
        <h2>Connect with Me</h2>
        <ul>
          <li><a href="[GitHub_Link]" target="_blank">GitHub: DIMOY</a></li>
          <li><a href="[LinkedIn_Link]" target="_blank">LinkedIn: SULTAN FADHIL</a></li>
          <li><a href="[Twitter_Link]" target="_blank">Instagram: SULTAN FADHIL</a></li>
        </ul>
      </div>
    </div>
  </section>
  <br>
  <br>
  <div class="hobby-header">
    <h1>My Hobby</h1>
  </div>
  <br>
  <div class="gallery">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <img :src="require(`../assets/${image.src}`)" :alt="image.alt" class="gallery-image">
      <div class="image-description">{{ image.description }}</div>
    </div>
  </div>
  <br>
  <br>
  <footer class="footer">
    <div class="container">
      <p>© 2024 Hak Cipta Terpelihara. Dibuat dengan ❤️ oleh SULTAN FADHIL.</p>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue';

const title = ref('Portfolio of Sultan Fadhil');

const images = [
  { src: '2.jpg', alt: 'Deskripsi Gambar 1', description: '1. BERMAIN GAME' },
  { src: '3.jpg', alt: 'Deskripsi Gambar 2', description: '2. OLAHRAGA' },
  { src: '4.jpg', alt: 'Deskripsi Gambar 3', description: '3. TRADING' },
  { src: '5.jpg', alt: 'Deskripsi Gambar 4', description: '4. TRAVELING' }
];
</script>
