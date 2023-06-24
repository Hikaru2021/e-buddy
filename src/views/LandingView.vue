<template>
  <div class="bg-image">
    <LandPageNav />
    <div class="flex flex-grow items-start justify-start">
      <div class="ml-32 mt-32">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-blue-800 uppercase">BETTER BUDGET CONTROL</p>
                    <h1 class="mt-4 text-5xl font-bold text-black flex items-center justify-center leading-normal">Your trusted companion in budgeting and money management. </h1>
                    <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Completely Flexible Multi-Location Budgeting Website</p>
                </div>
        </div>
        <router-link
          to="/register"
          tag="button"
          class="inline-flex items-center mt-72 px-6 py-4 font-semibold border-2 border-white text-white text-2xl transition-all duration-200 bg-black rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-pink-900 shadow-lg"
        >
          GET STARTED FOR FREE
          <svg
            class="w-6 h-6 ml-8 -mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

  
<script>
import LandPageNav from '@/components/LandPageNav.vue';

export default {
  components: {
    LandPageNav,
  },
  methods: {
    redirectToLogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
  
  <style scoped>
  .bg-image {
    background-image: url('/landpagebg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
  
  .bg-image .grid {
    flex-grow: 1;
  }
  
  .shadow-lg {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1), 0 5px 7px rgba(0, 0, 0, 0.6);
  }

  
  </style>
  