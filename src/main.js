import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import Tag from './pages/Tag.vue';
import Recent from './pages/Recent.vue';
import Machinery from './pages/Machinery.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Recent },
  { path: '/tags/:tagName', name: 'tag', component: Tag },
  { path: '/machinery/:searchTerm', name: 'machinery', component: Machinery },
];

const router = new VueRouter({
  routes,
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
