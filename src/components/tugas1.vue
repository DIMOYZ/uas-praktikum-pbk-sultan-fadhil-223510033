<template>
    <div class="portfolio-page">
      <header>
        <nav>
          <div class="logo">Developer SULTAN FADHIL</div>
          <Navbar/>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pages</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <div class="hero-section">
          <div class="hero-content">
            <h1>I'm SULTAN FADHIL, a Web Developer</h1>
            <p>Saya adalah MAHASISWA UIR DENGAN JURUSAN TEKNIK INFORMATIKA,DAN SAYA MEMILIKI BAKAT DI WEB Developer DAN CYBER SECURITY</p>
            <button class="primary-btn">Learn More</button>
          </div>
          <div class="hero-image">
            <img src="../assets/SAYA.jpeg" alt="John the Web Developer">
          </div>
        </div>
  
        <div class="about-section">
          <h2>About Me</h2>
          <p>Saya adalah anak ke 2 dari 3 saudara dan dan saya saat ingin jadi seorang CYBER SECURITY,dan asal saya berada di duri riau .</p>
        </div>
  
        <div class="work-section">
          <h2>My Work</h2>
          <p>Saya sedang belajar Web Developer, dan Saya sedang belajar Cyber Security, dan Saya pernah bekerja sebagai seorang pendodods sawit dan saya bangga,untuk saat ini saya fokus dulu untuk mendalami ilmu saya untuk web Developer dan Cyber Security.</p>
          <button class="secondary-btn">Browse Portfolio</button>
        </div>
  
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-behance"></i></a>
          <a href="#"><i class="fab fa-dribbble"></i></a>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from './navbar.vue'

  export default {
    name: 'PortfolioPage'
  }
  </script>
  <style setup>
    
  
 /* Reset CSS */
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Gaya umum */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-image: url('../assets/10.jpg');
  background-size: cover; /* Membuat gambar mengisi seluruh layar */
  background-repeat: no-repeat; /* Mencegah pengulangan gambar */
  background-attachment: fixed; /* Membuat gambar tetap pada tempatnya saat di-scroll */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Menyusun konten secara vertikal */
  min-height: 100vh; /* Membuat body setinggi 100% viewport */
}

/* Header */
header {
  display: flex;
  justify-content: center; /* Menyusun item di tengah secara horizontal */
  align-items: center;
  padding: 20px;
  
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #0c0101;
  text-decoration: none;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  width: 100%; /* Memastikan hero-section selebar layar */
  max-width: 1200px; /* Batas lebar maksimum untuk hero-section */
}

.hero-content {
  max-width: 500px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.primary-btn {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.hero-image img {
  max-width: 300px;
  border-radius: 50%; /* Membuat foto menjadi bulat */
}

/* About Section */
.about-section,
.work-section {
  padding: 40px;
  text-align: center;
  width: 100%; /* Memastikan section selebar layar */
  max-width: 1200px; /* Batas lebar maksimum untuk section */
}

/* Work Section */
.secondary-btn {
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 4px;
  cursor: pointer;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%; /* Memastikan social-links selebar layar */
  max-width: 1200px; /* Batas lebar maksimum untuk social-links */
}

.social-links a {
  color: #580505;
  font-size: 24px;
  margin: 0 10px;
}

</style>