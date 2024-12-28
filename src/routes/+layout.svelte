<h5 class="text-2xl font-bold">Development and Testing Only</h5>
<script lang="ts">
    import '../app.css';
    import type { LayoutData } from './$types';
    import { onMount } from 'svelte';  // Changed from svelte/internal
    import { page } from '$app/stores';
    import { App } from '@capacitor/app';
    import { Network } from '@capacitor/network';

    let { children } = $props();
    let isOnline = $state(true);
    let isMenuOpen = $state(false);

    onMount(async () => {
        try {
            const status = await Network.getStatus();
            isOnline = status.connected;

            await Network.addListener('networkStatusChange', (status) => {
                isOnline = status.connected;
            });

            await App.addListener('backButton', ({ canGoBack }) => {
                if (!canGoBack) {
                    App.exitApp();
                }
            });
        } catch (error) {
            console.error('Capacitor error:', error);
        }
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu();
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<div class="min-h-screen bg-gray-100">
    <header class="bg-[#232f3e] text-white">
        <div class="px-4 py-2 flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <button 
                    type="button"
                    onclick={toggleMenu}
                    onkeydown={handleKeyPress}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    class="lg:hidden p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <a href="/" class="text-[#febd69] font-bold text-xl">CargoZig</a>
            </div>

            <nav class="hidden lg:flex space-x-6">
                <a 
                    href="/loads" 
                    class="hover:text-[#febd69] {$page.url.pathname.includes('/loads') ? 'text-[#febd69]' : ''}"
                >
                    Loads
                </a>
                <a 
                    href="/payments" 
                    class="hover:text-[#febd69] {$page.url.pathname.includes('/payments') ? 'text-[#febd69]' : ''}"
                >
                    Payments
                </a>
                <a 
                    href="/documents" 
                    class="hover:text-[#febd69] {$page.url.pathname.includes('/documents') ? 'text-[#febd69]' : ''}"
                >
                    Documents
                </a>
            </nav>

            <div class="flex items-center space-x-4">
                <button 
                    type="button"
                    aria-label="View notifications"
                    class="hover:text-[#febd69]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                <button 
                    type="button"
                    aria-label="User menu"
                    class="hover:text-[#febd69]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="bg-[#37475A] px-4 py-2">
            <div class="flex items-center space-x-2">
                <input 
                    type="search"
                    placeholder="Search loads..."
                    aria-label="Search loads"
                    class="w-full px-4 py-1 rounded-lg text-black"
                />
                <button 
                    type="button"
                    class="bg-[#febd69] text-black px-4 py-1 rounded-lg hover:bg-[#f3a847]"
                >
                    Search
                </button>
            </div>
        </div>
    </header>

    {#if isMenuOpen}
        <div 
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
        >
            <div 
                class="bg-white w-64 h-full"
                role="navigation"
            >
                <div class="p-4 bg-[#232f3e] text-white">
                    <div class="text-[#febd69] font-bold text-xl">Menu</div>
                </div>
                <nav class="p-4 space-y-4">
                    <a 
                        href="/loads" 
                        class="block hover:text-[#febd69] {$page.url.pathname.includes('/loads') ? 'text-[#febd69]' : ''}"
                    >
                        Loads
                    </a>
                    <a 
                        href="/payments" 
                        class="block hover:text-[#febd69] {$page.url.pathname.includes('/payments') ? 'text-[#febd69]' : ''}"
                    >
                        Payments
                    </a>
                    <a 
                        href="/documents" 
                        class="block hover:text-[#febd69] {$page.url.pathname.includes('/documents') ? 'text-[#febd69]' : ''}"
                    >
                        Documents
                    </a>
                </nav>
            </div>
        </div>
    {/if}

    {#if !isOnline}
        <div 
            role="alert"
            class="bg-red-500 text-white p-2 text-center"
        >
            You are currently offline. Some features may be limited.
        </div>
    {/if}

    <main class="container mx-auto px-4 py-6">
        {@render children()}
    </main>

    <footer class="bg-[#232f3e] text-white mt-auto">
        <button 
            type="button"
            onclick={scrollToTop}
            class="w-full bg-[#37475A] hover:bg-[#485769] py-4 text-center text-sm"
        >
            Back to top
        </button>

        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- ... rest of footer content ... -->
            </div>
        </div>
    </footer>
</div>