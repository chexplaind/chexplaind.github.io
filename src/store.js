import { reactive } from 'vue';

const store = {
  debug: false,
  state: reactive({
    searchUrl: '',
    searchResults: [],
  }),
  setSearchUrl(newValue) {
    if (this.debug) console.log('setSearchUrl triggered with', newValue);
    this.state.searchUrl = newValue;
  },
  clearSearchUrl() {
    if (this.debug) console.log('clearSearchUrl triggered');
    this.state.searchUrl = '';
  },
  setSearchResults(newValue) {
    if (this.debug) console.log('setSearchResults triggered with', newValue);
    this.state.searchResults = newValue;
  },
  clearSearchResults() {
    if (this.debug) console.log('clearSearchResults triggered');
    this.state.searchResults = [];
  },
};
export default store;
