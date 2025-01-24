<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    
    // Stats for animated counter
    let stats = {
        loads: 0,
        carriers: 0,
        radius: 0
    };
    // current day
    let currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    // random time between 1 and 3 days from current day
    let pickupDate = new Date().getTime() + Math.floor(Math.random() * 3 * 24 * 60 * 60 * 1000);
    let pickupDateString = new Date(pickupDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    // delivery by date
    let deliveryDate = pickupDate + Math.floor(Math.random() * 3 * 24 * 60 * 60 * 1000);
    let deliveryDateString = new Date(deliveryDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    // Animate numbers on mount
    onMount(() => {
        const targetStats = { loads: 500, carriers: 150, radius: 150 };
        const duration = 2000;
        const steps = 50;
        
        const interval = duration / steps;
        let currentStep = 0;
        
        const timer = setInterval(() => {
            currentStep++;
            stats = {
                loads: Math.floor((targetStats.loads / steps) * currentStep),
                carriers: Math.floor((targetStats.carriers / steps) * currentStep),
                radius: Math.floor((targetStats.radius / steps) * currentStep)
            };
            
            if (currentStep >= steps) clearInterval(timer);
        }, interval);
    });

    const availableLoads = [
    {
        origin: 'Memphis, TN',
        destination: 'Atlanta, GA',
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        equipment: 'Dry Van 53',
        weight: '42,000',
        miles: '381',
        rate: '1,250',
        rating: 4.5
    },
    {
        origin: 'Nashville, TN',
        destination: 'Birmingham, AL',
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        equipment: 'Dry Van 53',
        weight: '38,000',
        miles: '203',
        rate: '850',
        rating: 4.0
    },
    {
        origin: 'Jackson, TN',
        destination: 'Chattanooga, TN',
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        equipment: 'Dry Van 53',
        weight: '28,000',
        miles: '295',
        rate: '950',
        rating: 3.5
    }
];

const availableCapacity = [
    {
        origin: 'Atlanta, GA',
        destination: 'Memphis, TN',
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        equipment: 'Van 53',
        maxWeight: '45,000',
        targetRate: '3.25',
        rating: 4.5
    },
    {
        origin: 'Birmingham, AL',
        destination: 'Nashville, TN',
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        equipment: 'Refrigerated Van 53',
        maxWeight: '45,000',
        targetRate: '3.45',
        rating: 4.0
    },
    {
        origin: 'Chattanooga, TN',
        destination: 'Jackson, TN',
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        equipment: 'Van 53',
        maxWeight: '45,000',
        targetRate: '3.15',
        rating: 3.5
    }
];

function getStarArray(rating: number) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        return {
            full: Array(fullStars).fill('star'),
            half: Array(halfStar).fill('star-half'),
            empty: Array(emptyStars).fill('star-outline')
        };
    }
    </script>
    
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-[#232f3e] to-[#37475A] text-white relative overflow-hidden">
            <div class="container mx-auto px-4 py-16 flex justify-between items-center">
                <!-- Text Content -->
                <div class="max-w-xl z-10 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
                    <h1 class="text-4xl md:text-6xl font-bold mb-6">
                        Real-Time Truck Cargo Matching, Verified Clients
                    </h1>
                    <p class="text-xl mb-8 text-gray-300">
                        CargoZig is a Licensed Bonded and Insured Digital Freight Broker servicing West Tennessee and the surrounding areas.
                    </p>
                    <div class="flex gap-4">
                        <a href="/register" class="bg-[#febd69] text-[#232f3e] px-8 py-3 rounded-md font-semibold hover:bg-[#f3a847] transition-colors">
                            Get Started
                        </a>
                        <a href="/demo" class="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
                            Watch Demo
                        </a>
                    </div>
                </div>
                
                <!-- Hero Image -->
                <div class="hidden md:block w-1/2 h-[600px] relative">
                    <img 
                        src="https://picsum.photos/800/600" 
                        alt="Logistics" 
                        class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
        <!-- Stats Section -->
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="bg-white p-6 rounded-lg shadow">
                    <p class="text-4xl font-bold text-[#232f3e] mb-2">{stats.loads}+</p>
                    <p class="text-gray-600">Monthly Loads</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <p class="text-4xl font-bold text-[#232f3e] mb-2">{stats.carriers}</p>
                    <p class="text-gray-600">Verified Carriers</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <p class="text-4xl font-bold text-[#232f3e] mb-2">{stats.radius}</p>
                    <p class="text-gray-600">Mile Radius</p>
                </div>
            </div>
        </div>
    
        <!-- Features Section -->
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-[#232f3e]">Why Choose CargoZig</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="text-[#febd69] mb-4">
                        <Icon icon="mdi:truck-check" width="48" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Real-Time Tracking</h3>
                    <p class="text-gray-600">Real-time visibility with smart camera systems mobile app and ELD integration.</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="text-[#febd69] mb-4">
                        <Icon icon="mdi:cash-fast" width="48" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Instant ACH/Wire Payments</h3>
                    <p class="text-gray-600">Same-day payments with smart contract automation and Bank integration.</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="text-[#febd69] mb-4">
                        <Icon icon="mdi:route" width="48" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Smart Route Matching</h3>
                    <p class="text-gray-600">Matching Truck Capacity, Route, and Cargo in Real Time.</p>
                </div>
            </div>
        </div>
    
        <!-- CTA Section -->
        <div class="bg-[#232f3e] text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-6">Ready to Optimize Your Freight?</h2>
                <p class="text-xl mb-8 text-gray-300">Join carriers earning more with smart route optimization.</p>
                <a href="/register" class="bg-[#febd69] text-[#232f3e] px-8 py-3 rounded-md font-semibold hover:bg-[#f3a847] transition-colors inline-block">
                    Start Now
                </a>
            </div>
        </div>
        <!--Sample cards-->
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Available Loads Section -->
                <div>
                    <h2 class="text-2xl font-bold text-[#232f3e] mb-6">Available Loads</h2>
                    <div class="grid gap-4">
                        {#each availableLoads as load}
                            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h3 class="font-bold text-lg">{load.origin} → {load.destination}</h3>
                                        <p class="text-gray-600 text-sm">Available on: {new Date(load.pickupDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <p class="text-gray-600 text-sm">Deliver by: {new Date(load.deliveryDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <p class="text-gray-600 text-sm">Equipment: {load.equipment}</p>
                                        <div class="mt-2 flex gap-2">
                                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                {load.weight} lbs
                                            </span>
                                            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                {load.miles} miles
                                            </span>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-2xl font-bold text-[#232f3e]">${load.rate}</p>                                      
                                        <p class="text-sm text-gray-600">${(Number(load.rate) / Number(load.miles)).toFixed(2)}/mile</p>
                                        <p class="text-sm text-gray-600">Shipper Rating:</p>
                                        <div class="flex items-center">
                                            <span class="text-yellow-500 flex">
                                                {#each getStarArray(load.rating).full as _}
                                                    <Icon icon="mdi:star" width="16" />
                                                {/each}
                                                {#each getStarArray(load.rating).half as _}
                                                    <Icon icon="mdi:star-half" width="16" />
                                                {/each}
                                                {#each getStarArray(load.rating).empty as _}
                                                    <Icon icon="mdi:star-outline" width="16" />
                                                {/each}
                                            </span>
                                            <span class="ml-2 text-sm text-gray-600">{load.rating.toFixed(1)}</span>
                                        </div>
                                        <button class="mt-2 bg-[#febd69] text-[#232f3e] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#f3a847] transition-colors">
                                            Bid Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
        
                <!-- Available Capacity Section -->
                <div>
                    <h2 class="text-2xl font-bold text-[#232f3e] mb-6">Available Capacity</h2>
                    <div class="grid gap-4">
                        {#each availableCapacity as capacity}
                            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h3 class="font-bold text-lg">{capacity.origin} → {capacity.destination}</h3>
                                        <p class="text-gray-600 text-sm">Available: {new Date(capacity.pickupDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <p class="text-gray-600 text-sm">Deliver by: {new Date(capacity.deliveryDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <p class="text-gray-600 text-sm">{capacity.equipment}</p>
                                        <div class="mt-2 flex gap-2">
                                            <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                                {capacity.maxWeight} lbs max
                                            </span>
                                            <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                                                IoT Equipped
                                            </span>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-2xl font-bold text-[#232f3e]">${capacity.targetRate}/mi</p>
                                        <p class="text-sm text-gray-600">Carrier Rating:</p>
                                        <div class="flex items-center">
                                            <span class="text-yellow-500 flex">
                                                {#each getStarArray(capacity.rating).full as _}
                                                    <Icon icon="mdi:star" width="16" />
                                                {/each}
                                                {#each getStarArray(capacity.rating).half as _}
                                                    <Icon icon="mdi:star-half" width="16" />
                                                {/each}
                                                {#each getStarArray(capacity.rating).empty as _}
                                                    <Icon icon="mdi:star-outline" width="16" />
                                                {/each}
                                            </span>
                                            <span class="ml-2 text-sm text-gray-600">{capacity.rating.toFixed(1)}</span>
                                        </div>
                                        <button class="mt-2 bg-[#232f3e] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#37475A] transition-colors">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>