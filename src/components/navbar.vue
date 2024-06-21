<template>
    <nav class="navbar">
      <div class="navbar-brand">Brand</div>
      <ul class="navbar-nav">
        <li class="nav-item" v-for="item in menuItems" :key="item.text">
          <router-link :to="item.path" class="nav-link">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  
  export default {
    name: 'Navbar',
    data() {
      return {
        menuItems: [
          { path: '/', text: 'Beranda' },
          { path: '/tentang', text: 'Tentang' },
          { path: '/layanan', text: 'Layanan' },
          { path: '/kontak', text: 'Kontak' }
        ]
      };
    }
  };
  </script>
  
  <style setup>
  .navbar {
  background-color: #4a69bd; /* Warna latar yang lebih cerah */
  color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1); /* Menambahkan bayangan untuk kedalaman */
  border-radius: 8px; /* Tepi yang melengkung */
}

.navbar-brand {
  font-size: 1.8rem; /* Meningkatkan ukuran font */
  font-weight: bold; /* Membuat teks lebih tebal */
  color: #f8f9fa;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Menambahkan bayangan teks untuk kontras */
}

.navbar-nav {
  list-style: none;
  display: flex;
  align-items: center; /* Menyelaraskan item secara vertikal */
}

.nav-item {
  margin-left: 1rem;
  transition: transform 0.2s; /* Transisi untuk efek hover */
}

.nav-item:hover {
  transform: scale(1.1); /* Membesar saat di-hover */
}

.nav-link {
  color: #f8f9fa;
  text-decoration: none;
  padding: 0.5rem 1rem; /* Menambahkan padding */
  border-radius: 4px; /* Tepi yang melengkung */
  transition: background-color 0.2s; /* Transisi untuk latar belakang */
}

.nav-link:hover {
  background-color: #6a89cc; /* Mengubah warna latar saat di-hover */
  text-decoration: none; /* Menghilangkan garis bawah */
}

  </style>
  