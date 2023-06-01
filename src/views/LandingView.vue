<template>
  <div class="bg-image">
    <div class="grid grid-cols-2 gap-4">
      <div class="p-7 object-contain flex justify-start items-start">
        <img class="w-1/2 h-4/5" src="logo.png" alt="" />
      </div>
      <div class="flex items-end justify-end p-7">
        <button class="p-2 text-lg border-orange-500 outline-2 border-2 rounded-full">
          GET STARTED FOR FREE
        </button>
        <button class="p-2 ml-4 text-lg bg-gradient-to-r from-orange-400 to-white hover:bg-white hover:text-purple-500 shadow-lg rounded-full transition duration-300" @click="redirectToLogin">
          LOGIN
        </button>
      </div>
    </div>
    <div class="flex flex-grow items-start justify-start">
      <div>
        <router-link
          to="/register"
          tag="button"
          class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black text-2xl transition-all duration-200 bg-gradient-to-r from-orange-400 to-white bg-opacity-80 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-pink-900 shadow-lg"
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
  export default {
  methods: {
    redirectToLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
  </script>
  
  <style scoped>
  .bg-image {
    background-image: url('/bg.jpg');
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
  