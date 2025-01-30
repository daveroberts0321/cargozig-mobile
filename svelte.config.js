import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false
        }),
        serviceWorker: {
            register: true  // or true, depending on if you want SvelteKit to auto-register
        },
        alias: {
            $components: 'src/lib/components',
            $stores: 'src/lib/stores'
        }
    }
};

export default config;