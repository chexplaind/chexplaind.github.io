import { mount } from '@vue/test-utils';
import { createMemoryHistory, createRouter } from 'vue-router';
import { nextTick } from 'vue';
import { beforeEach } from 'vitest';
import App from '../src/App.vue';
import Recent from '../src/pages/Recent.vue';
import Tag from '../src/pages/Tag.vue';
import Machinery from '../src/pages/Machinery.vue';
import SearchBox from '../src/components/SearchBox.vue';
import store from '../src/store';

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: Recent },
      { path: '/tags/:tagName', name: 'tag', component: Tag },
      { path: '/machinery/:searchTerm', name: 'machinery', component: Machinery },
    ],
  });
}

describe('app smoke', () => {
  beforeEach(() => {
    store.clearSearchUrl();
  });

  test('mounts app shell', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('#app').exists()).toBe(true);
  });

  test('navigates to tag route', async () => {
    const router = createTestRouter();
    router.push('/tags/food');
    await router.isReady();

    mount(App, {
      global: {
        plugins: [router],
      },
    });

    await nextTick();
    expect(router.currentRoute.value.name).toBe('tag');
    expect(router.currentRoute.value.params.tagName).toBe('food');
  });

  test('shows search results above recent posts when selecting autocomplete item', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    const searchBox = wrapper.findComponent(SearchBox);
    expect(searchBox.exists()).toBe(true);

    searchBox.vm.selectedAutocompleteResult = 'hong kong';
    await nextTick();

    expect(store.state.searchUrl).toContain('Search?name=hong%20kong');

    const text = wrapper.text();
    expect(text).toContain('Search Results');
    expect(text).toContain('Recent Posts');
    expect(text.indexOf('Search Results')).toBeLessThan(text.indexOf('Recent Posts'));

    searchBox.vm.autocompleteTerm = '';
    await nextTick();
    expect(store.state.searchUrl).toContain('Search?name=hong%20kong');
  });
});
