<template>
    <div class="bg-image min-h-screen">
        <div class="grid grid-cols-2 gap-4">
            <div class="p-7 object-contain flex justify-start items-start">
                <img class="w-1/2 h-4/5" src="logo.png" alt="" />
            </div>
            <div class="flex items-end justify-end p-7">
                <button class="p-4 text-lg border-fuchsia-500 outline-1 border">GET STARTED FOR FREE</button>
                <button class="p-4 text-lg bg-gradient-to-r from-pink-300 to-purple-200 shadow-lg">LOGIN</button>
            </div>
        </div>
        <div class="h-screen py-96 pl-48 flex items-start justify-start">
            <div>
                <router-link to="/register" tag="button" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black text-2xl transition-all duration-200 bg-pink-400 bg-opacity-80 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-pink-900 shadow-lg">
                        GET STARTED FOR FREE
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
};
</script>

<style scoped>
.bg-image {
    background-image: url('/bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}
</style>