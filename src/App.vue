<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="toggleDrawer" icon="menu" />
        <q-toolbar-title>{{ brand }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above side="left" bordered>
      <q-list>
        <q-item clickable v-ripple @click="navigateToTugas1">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>Tugas 1</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateToTugas2">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>Tugas 2</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('/tugas3')">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>Tugas 3</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateToTugas4">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>Tugas 4</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateToTugas5">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>Tugas 5</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateToTugas6">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>Tugas 6</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('/uas')">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>UAS</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      brand: 'My App',
      drawerOpen: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    navigateToTugas1() {
      window.open('https://sultan-project-cv.netlify.app', '_blank');
    },
    navigateToTugas2() {
      window.open('https://tugas2-praktikum-pbk.netlify.app', '_blank');
    },
    navigateToTugas4() {
      window.open('https://tugas4-praktikum-pbk-sultanfadhil.netlify.app', '_blank');
    },
    navigateToTugas5() {
      window.open('https://sultanfadhil-223510033-tugas5.netlify.app', '_blank');
    },
    navigateToTugas6() {
      window.open('https://sultan-223510033.netlify.app', '_blank');
    }
  }
}
</script>

<style>
.q-layout__header {
  background-color: #1976D2; /* Change to your preferred color */
  color: white;
}
.q-drawer {
  background-color: #f5f5f5; /* Change to your preferred color */
}
.q-list {
  padding-top: 20px;
}
.q-item {
  margin-bottom: 10px;
}
</style>
