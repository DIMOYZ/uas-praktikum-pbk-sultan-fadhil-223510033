<template>
    <div class="background"></div>
    <div class="q-pa-md flex flex-center">
    
      <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
        <q-card-section>
          <div class="text-h6 text-center">Cuaca</div>
          <div class="q-gutter-md row items-center justify-center q-mt-md">
            <q-input v-model="lokasi" label="Masukkan Lokasi" outlined />
            <q-btn color="primary" @click="ambilDataCuaca" label="Cari" class="q-ml-md" />
          </div>
          <div v-if="dataDiambil" class="q-mt-md">
            <div v-if="namaLokasi">
              <div class="text-subtitle1 text-center">Lokasi: {{ namaLokasi }}</div>
              <div class="text-h5 q-mt-sm text-center">Temperatur: {{ temperatur }}°C</div>
              <div class="text-subtitle2 q-mt-sm text-center">Deskripsi: {{ deskripsiCuaca }}</div>
            </div>
            <div v-else class="text-subtitle2 text-center">Lokasi tidak ditemukan atau terjadi kesalahan.</div>
          </div>
          <div v-else-if="memuat" class="text-subtitle2 text-center q-mt-md">Memuat data...</div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'WeatherWidget',
    data() {
      return {
        lokasi: '',
        namaLokasi: '',
        deskripsiCuaca: '',
        temperatur: null,
        memuat: false,
        dataDiambil: false
      }
    },
    methods: {
      async ambilDataCuaca() {
        this.memuat = true
        this.dataDiambil = false
        this.namaLokasi = ''
        this.deskripsiCuaca = ''
        this.temperatur = null
        try {
          const apiKey = '7ee75763a11ec28c103ef574e1f189da' // Ganti dengan API key Anda
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.lokasi}&appid=${apiKey}&units=metric`
          const response = await axios.get(apiUrl)
          this.namaLokasi = response.data.name
          this.deskripsiCuaca = response.data.weather[0].description
          this.temperatur = response.data.main.temp
        } catch (error) {
          console.error(error)
        } finally {
          this.memuat = false
          this.dataDiambil = true
        }
      }
    }
  }
  </script>
  
  <style>
  .flex {
    display: flex;
  }
  .flex-center {
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  @keyframes rgb {
  0% { box-shadow: 0 0 10px 0 rgba(255, 0, 0, 0.7); }
  33% { box-shadow: 0 0 10px 0 rgba(0, 255, 0, 0.7); }
  66% { box-shadow: 0 0 10px 0 rgba(0, 0, 255, 0.7); }
  100% { box-shadow: 0 0 10px 0 rgba(255, 0, 0, 0.7); }
}

.q-card {
    animation: rgb 3s infinite linear;
}
  </style>
  