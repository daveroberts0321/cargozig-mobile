import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        sveltekit(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'CargoZig',
                short_name: 'CargoZig',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ],
                display: 'standalone',
                scope: '/',
                start_url: '/',
                description: 'CargoZig Logistics Platform'
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/api\.cargozig\.com\//,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'api-cache',
                            networkTimeoutSeconds: 5
                        }
                    }
                ]
            }
        })
    ]
});

