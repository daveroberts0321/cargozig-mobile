import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true
	},
	build: {
		target: 'es2015',
		outDir: 'build'  // Specify the build output directory
}
});

