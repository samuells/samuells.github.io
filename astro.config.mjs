import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  site: 'https://samuelsnopko.com',
  output: 'static',
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN ?? 'placeholder',
      bridge: true,
      livePreview: false,
      components: {
        page: 'src/components/storyblok/Page',
      },
    }),
  ],
});
