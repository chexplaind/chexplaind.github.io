import { config } from '@vue/test-utils';
import { vi } from 'vitest';

config.global.stubs = {
  transition: false,
  'transition-group': false,
};
config.global.config = {
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('v-'),
  },
};

vi.stubGlobal('fetch', vi.fn(async (input) => {
  const url = String(input);
  if (url.includes('Count')) {
    return { json: async () => 0 };
  }
  if (url.includes('Machinery')) {
    return {
      json: async () => ({
        titleZh: '',
        characters: [],
        sourceLanguage: 'EN',
      }),
    };
  }
  return { json: async () => [] };
}));

vi.spyOn(console, 'warn').mockImplementation(() => {});
