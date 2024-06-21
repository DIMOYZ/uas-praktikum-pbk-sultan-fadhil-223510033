<template>
    <q-carousel
      animated
      v-model="slide"
      infinite
      navigation
      arrows
      :autoplay="5000"
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :name="index"
        :img-src="image.src"
        key="index"
      >
        <!-- Caption untuk setiap gambar -->
        <div class="caption">{{ image.caption }}</div>
      </q-carousel-slide>
    </q-carousel>
  </template>
  
  <script>
  export default {
    name: 'MyCarousel',
    data() {
      return {
        slide: 0,
        images: [
          {
            src: 'https://i.pinimg.com/originals/77/52/c4/7752c4db824450112722f0a907e2768a.jpg',
            caption: 'NEW PRODUCT'
          },
          {
            src: 'https://th.bing.com/th/id/OIP.gR_esvBCDx2abF-KmMIGkgAAAA?rs=1&pid=ImgDetMain',
            caption: 'NEW PRODUCT'
          },
          {
            src: 'https://i.pinimg.com/originals/78/d6/ed/78d6edbd6cbc5069277caa8302866878.jpg',
            caption: 'NEW PRODUCT'
          },
          {
            src: 'https://th.bing.com/th/id/OIP.PIRgbKYZEVLcibeeQDBOnAHaE7?w=706&h=470&rs=1&pid=ImgDetMain',
            caption: 'NEW PRODUCT'
          },
          {
            src: 'https://th.bing.com/th/id/OIP.zpGb98KGIjPyHIjMoNP3BwHaFQ?w=1070&h=760&rs=1&pid=ImgDetMain',
            caption: 'NEW PRODUCT'
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .q-carousel {
    /* Responsive design adjustments */
    max-width: 100000px;
    height: 780px;
    position: relative; /* Changed from absolute for better responsiveness */
  }
  
  .q-carousel-slide {
    /* Visual enhancements */
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .caption {
    /* Accessibility and design improvements */
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7); /* Slightly darker for better readability */
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px; /* Adjusted for better mobile readability */
  }
  </style>