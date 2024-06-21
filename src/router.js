import { createRouter, createWebHistory } from 'vue-router';

import tugas1 from './components/tugas1.vue';
import tugas2 from './components/tugas2.vue'; // Import tugas2.vue
import tugas3 from './components/tugas3.vue';
import tugas4 from './components/tugas4.vue';
import tugas5 from './components/tugas5.vue';
import tugas6 from './components/tugas6.vue';
import uas from './components/WeatherWidget.vue';
const routes = [
  {
    path: '/tugas1',
    component: tugas1
  },
  {
    path: '/tugas2',
    component: tugas2
  },
  {
    path: '/tugas3',
    component: tugas3
  },
  {
    path: '/tugas4',
    component: tugas4
  },
  {
    path: '/tugas5',
    component: tugas5
  },
  {
    path: '/tugas6',
    component: tugas6
  },
  {
    path: '/uas',
    component: uas
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
