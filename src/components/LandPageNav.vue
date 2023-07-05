<template>
  <nav class="bg-black">
    <div class="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="/logo.png" alt="Logo">
          <img class="hidden lg:block h-16 w-auto" src="/logo.png" alt="Logo">
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center justify-end">
          <button
            class="p-2 text-white border-white outline-2 border-2 rounded-full h-8 flex hover:opacity-80 focus:opacity-80 items-center justify-center"
            @click="redirectToRegister">GET STARTED FOR FREE</button>
          <button
            class="p-2 ml-2 text-base bg-white hover:bg-white hover:opacity-80 focus:opacity-80 shadow-lg rounded-full transition duration-300 h-8 flex items-center"
            @click="redirectToLogin">LOGIN</button>
        </div>
      </div>
    </div>
  </nav>
</template>
  
  
<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push({ name: 'login' });
    },
    redirectToRegister() {
      this.$router.push({ name: 'register' });
    },
  },
};
</script>
  