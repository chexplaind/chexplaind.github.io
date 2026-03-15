<template>
  <v-app id="app">
    <v-main class="app-content">
      <!-- <Header /> -->
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
    </v-main>
    <Toolbar />
  </v-app>
</template>

<script>
// import Header from './components/Header.vue';
import About from './components/About.vue';
import PostGrid from './components/PostGrid.vue';
import Footer from './components/Footer.vue';
import Toolbar from './components/Toolbar.vue';
import constants from './constants';
import store from './store';

export default {
  name: 'App',
  components: {
    // Header,
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
@import url('https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Noto+Sans+HK:wght@100..900&family=Noto+Serif+TC:wght@200..900&display=swap');

#app {
  font-family: "Castoro", "Noto Sans HK", sans-serif;
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
