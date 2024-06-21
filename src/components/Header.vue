<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn flat dense round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
          <q-toolbar-title>
            <q-avatar square>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            Toko Online
          </q-toolbar-title>
          <q-input bgcolor="white" rounded outlined dense placeholder="Cari produk...">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn flat round dense icon="shopping_cart" />
          <q-btn flat round dense icon="person" />
        </q-toolbar>
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" bordered>
        <q-list>
          <q-item-label header>Menu</q-item-label>
          <q-item clickable tag="a" target="_blank" href="#">
            <q-item-section avatar>
              <q-icon name="shopping_basket" />
            </q-item-section>
            <q-item-section>Produk</q-item-section>
          </q-item>
          <q-item clickable tag="a" target="_blank" href="#">
            <q-item-section avatar>
              <q-icon name="loyalty" />
            </q-item-section>
            <q-item-section>Promo</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-page-container>
      
      </q-page-container>
      <cara/>
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import cara from './carousel.vue';
  const leftDrawerOpen = ref(false);
  const fullscreen = ref(false);
  
  const carouselImages = [
    {
      image: 'https://wallpapercave.com/wp/wp1828091.png',
      link: 'https://www.bing.com/images/search?view=detailV2&ccid=szWla78I&id=9B3C6EE493585298484B8C7FD6B6A66ABE3D4F5F&thid=OIP.szWla78IKlPrqekjNR1HswHaHa&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F77%2F52%2Fc4%2F7752c4db824450112722f0a907e2768a.jpg&exph=960&expw=960&q=sepatu+4k&simid=608026907290462255&form=IRPRST&ck=0854E69EB6DADC35B5FBA83DC9311152&selectedindex=0&itb=0&qpvt=sepatu+4k&cit=ccid_KLuNnMLa*cp_1B48EA81B6E9CC5EDE5B565CFBA5AFFA*mid_B4EEE0866896D66C3E1D3A9CA8985650DB8CD7CC*simid_608026086924236745*thid_OIP.KLuNnMLa1HPwTJs!_EPXPbwHaEo&vt=2'
    },
    {
      image: 'https://th.bing.com/th/id/R.e93b442cda1504aec269ed6052df8d3a?rik=Dx%2baNS53BU0mzQ&riu=http%3a%2f%2fk.sinaimg.cn%2fn%2fsinakd20210721s%2f560%2fw1080h1080%2f20210721%2f4991-40e1ac11bc5f65fbf38b3e59439aa040.jpg%2fw700d1q75cms.jpg&ehk=1g3yrqCKQaCUMX0HQ2RANq7ryoidED%2bewExXQ2JPn2s%3d&risl=&pid=ImgRaw&r=0',
      link: 'https://www.bing.com/images/search?view=detailV2&ccid=6TtELNoV&id=0DC9BB4C0EFE3B81E6FBCD264D05772E359A1F0F&thid=OIP.6TtELNoVBK7Cae1gUt-NOgHaHa&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.e93b442cda1504aec269ed6052df8d3a%3Frik%3DDx%252baNS53BU0mzQ%26riu%3Dhttp%253a%252f%252fk.sinaimg.cn%252fn%252fsinakd20210721s%252f560%252fw1080h1080%252f20210721%252f4991-40e1ac11bc5f65fbf38b3e59439aa040.jpg%252fw700d1q75cms.jpg%26ehk%3D1g3yrqCKQaCUMX0HQ2RANq7ryoidED%252bewExXQ2JPn2s%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=700&expw=700&q=sepatu+4k&simid=608025180708811749&form=IRPRST&ck=E33A92942CFE526E40D9FD7239AEE9EB&selectedindex=27&itb=0&qpvt=sepatu+4k&cit=ccid_KLuNnMLa*cp_1B48EA81B6E9CC5EDE5B565CFBA5AFFA*mid_B4EEE0866896D66C3E1D3A9CA8985650DB8CD7CC*simid_608026086924236745*thid_OIP.KLuNnMLa1HPwTJs!_EPXPbwHaEo&vt=2'
    }
  ];
  </script>
  
  <style lang="scss" scoped>
  .hero-section {
    .hero-content {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
  }
  
  .full-width {
    width: 100%;
  }
  </style>
  