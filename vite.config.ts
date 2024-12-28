import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $lib: '/src/lib',
            svelte: 'svelte'
        }
    },
    ssr: {
        noExternal: ['svelte', '@sveltejs/kit']
    }
});

