import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'; // Adjust path as necessary
import AboutUs from './components/AboutUs.vue'; // Make sure this file exists
import PaceSatellite from './components/PaceSatellite.vue'; // Make sure this file exists
import FaQ from './components/FaQ.vue';
import FitoPlankton from './components/FitoPlankton.vue';
import CloudConfetti from './components/CloudConfetti.vue';
import FromDepths from './components/FromDepths.vue';
import HabitatsMotion from './components/HabitatsMotion.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs, // Your About page component
  },
  {
    path: '/pace',
    name: 'PaceSatellite',
    component: PaceSatellite, 
  },
  {
    path: '/references',
    name: 'References',
    component: FaQ,
  },
  {
    path: '/fito',
    name: 'FitoPlankton',
    component: FitoPlankton,
  },
  {
    path: '/cloud',
    name: 'CloudConfetti',
    component: CloudConfetti,
  },
  {
    path: '/depths',
    name: 'FromDepths',
    component: FromDepths,
  },
  {
    path: '/habitat',
    name: 'HabitatsMotion',
    component: HabitatsMotion,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
