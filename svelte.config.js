import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false
        }),
        alias: {
            $components: 'src/lib/components',
            $stores: 'src/lib/stores'
        }
    }
};

export default config;
