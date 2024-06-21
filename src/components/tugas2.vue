<template>
    <div class="background">
      <img src="https://wallpapercave.com/wp/wp2866857.jpg" />
      <div class="container">
        <div class="kata">
          <h3>MASUKAN SARAN ANDA</h3>
        </div>
        <div class="input">
          <input type="email" v-model="email" @input="updateEmail" :style="{ width: '100%', maxWidth: '300px' }" placeholder="Masukkan Email Anda"><br>
          <textarea v-model="deskripsi" @input="updateDeskripsi" :style="{ width: '100%', resize: 'vertical' }" placeholder="Masukkan Deskripsi Anda"></textarea>
          <button @click="kirim">Kirim</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const deskripsi = ref('');
  
  const updateEmail = (event) => {
    email.value = event.target.value;
  };
  
  const updateDeskripsi = (event) => {
    deskripsi.value = event.target.value;
  };
  
  const kirim = () => {
    // Kirim data ke server atau lakukan operasi lainnya sesuai kebutuhan aplikasi
    const emailValue = email.value;
    const deskripsiValue = deskripsi.value;
  
    // Menampilkan alert dengan data yang dimasukkan
    const pesanAlert = `Email: ${emailValue}\nDeskripsi: ${deskripsiValue}`;
    alert(pesanAlert);
  
    // Reset nilai input setelah mengirim
    email.value = '';
    deskripsi.value = '';
  }
  </script>
  
  <style scoped>
  .background {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .background img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    filter: brightness(0.8);
  }
  
  .container {
    word-break: break-all; /* Force words to break at any point */
    width: auto;
    height: 500px;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    background: url(/src/components/th.jpg);
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .kata {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .input {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
  
  input[type="email"],
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    height: 250px;
  }
  
  button {
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding-top: auto;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  .kata{
    color: black;
    background-color: aqua;
    border-radius: 20px;
    box-shadow: 10px 10px 10px;
  }
  </style>
  