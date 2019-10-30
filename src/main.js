import Vue from 'vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import Tag from './pages/Tag.vue';
import Recent from './pages/Recent.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Recent },
  { path: "/tags/:tagName", name: "tag", component: Tag }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
