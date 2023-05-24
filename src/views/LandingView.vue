<template>
    <div class="bg-cover" style="background-image: url('/bg.png');">
        <div class="grid grid-cols-2 gap-4">
            <div class="p-7 object-contain flex justify-start items-start">
                <img class="w-1/2 h-4/5" src="logo.png" alt="" />
            </div>
            <div class="flex items-end justify-end p-7">
                <button class="p-4 text-lg">Sign In</button>
                <button class="p-4 text-lg">Sign Up</button>
            </div>
        </div>
        <div class="h-screen py-96 pl-48 flex items-start justify-start">
            <div>
                <router-link to="/register" tag="button" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black text-2xl transition-all duration-200 bg-pink-400 bg-opacity-80 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-pink-900">
                        Get Started 
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
    // No changes required in the script section
};
</script>

<style scoped>
.bg-cover {
    background-image: url('/bg.jpeg');
}
</style>