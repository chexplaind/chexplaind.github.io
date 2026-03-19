import { createRouter, createWebHashHistory } from 'vue-router';
import Tag from './pages/Tag.vue';
import Recent from './pages/Recent.vue';
import Machinery from './pages/Machinery.vue';

const routes = [
  { path: '/', name: 'home', component: Recent },
  { path: '/tags/:tagName', name: 'tag', component: Tag },
  { path: '/machinery/:searchTerm', name: 'machinery', component: Machinery },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
