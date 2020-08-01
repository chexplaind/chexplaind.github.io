<template>
  <v-app id="app">
    <v-content class="app-content">
      <Header />
      <About />
      <div id="search-results-container">
        <PostGrid
          v-if="sharedState.searchUrl.length"
          title="Search Results"
          :fetchUrl="sharedState.searchUrl"
          showCount
        />
      </div>
      <router-view />
      <Footer />
    </v-content>
    <Toolbar />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import PostGrid from './components/PostGrid.vue';
import Footer from './components/Footer.vue';
import Toolbar from './components/Toolbar.vue';
import constants from './constants';
import store from './store';

export default {
  name: 'App',
  components: {
    Header,
    About,
    PostGrid,
    Footer,
    Toolbar,
  },
  data() {
    return {
      constants,
      sharedState: store.state,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+HK|Noto+Serif+TC&display=swap');

#app {
  font-family: "Noto Sans HK", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
}

.app-content {
  margin: 3%;
  margin-bottom: 90px;
}

h1,
h2 {
  text-align: left;
  margin-bottom: 6px;
}

h1 {
  font-size: x-large;
}

h2 {
  font-size: large;
}
</style>
