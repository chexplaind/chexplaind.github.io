import { mount } from '@vue/test-utils';
import { createMemoryHistory, createRouter } from 'vue-router';
import { nextTick } from 'vue';
import App from '../src/App.vue';
import Recent from '../src/pages/Recent.vue';
import Tag from '../src/pages/Tag.vue';
import Machinery from '../src/pages/Machinery.vue';

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
});
