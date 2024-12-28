<script lang="ts">
import { onMount } from 'svelte';

// State variables
let activeLoads = $state(0);
let availableLoads = $state(0);
let walletBalance = $state('0.00');

// Simulated data loading
onMount(async () => {
    // Replace with actual API calls
    activeLoads = 2;
    availableLoads = 15;
    walletBalance = '2,500.00';
});
</script>

<div class="space-y-6">
    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold text-gray-700">Active Loads</h2>
            <p class="text-3xl font-bold text-[#232f3e]">{activeLoads}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold text-gray-700">Available Loads</h2>
            <p class="text-3xl font-bold text-[#232f3e]">{availableLoads}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold text-gray-700">Wallet Balance</h2>
            <p class="text-3xl font-bold text-[#232f3e]">${walletBalance} USDC</p>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a 
            href="/loads/available" 
            class="bg-[#232f3e] text-white p-6 rounded-lg shadow hover:bg-[#37475A] transition-colors"
        >
            <h3 class="text-xl font-bold mb-2">Find Loads</h3>
            <p class="text-gray-300">Browse available loads matching your route</p>
        </a>
        
        <a 
            href="/loads/active" 
            class="bg-[#febd69] text-[#232f3e] p-6 rounded-lg shadow hover:bg-[#f3a847] transition-colors"
        >
            <h3 class="text-xl font-bold mb-2">View Active Loads</h3>
            <p class="text-gray-700">Manage your current shipments</p>
        </a>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold text-[#232f3e] mb-4">Recent Activity</h2>
        <div class="space-y-4">
            <div class="flex items-center justify-between py-2 border-b">
                <div>
                    <p class="font-medium">Load #12345</p>
                    <p class="text-sm text-gray-600">Memphis, TN → Atlanta, GA</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    In Transit
                </span>
            </div>
            <div class="flex items-center justify-between py-2 border-b">
                <div>
                    <p class="font-medium">Payment Received</p>
                    <p class="text-sm text-gray-600">Load #12344</p>
                </div>
                <span class="text-[#232f3e] font-medium">$1,250.00</span>
            </div>
        </div>
    </div>
</div>
