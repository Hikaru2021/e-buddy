<template>
  <div class="sticky top-0 bg-black flex justify-between items-center px-3 py-1">
    <!-- Menu Button -->
    <button class="bg-transparent border-none py-2" @click="toggleSideNav">
      <i v-if="!showSideNav" class="fas fa-bars text-white text-3xl pl-10"></i>
      <i v-else class="fas fa-chevron-left text-white text-3xl pl-10"></i>
    </button>

    <div>
      <button class="bg-transparent border-none" @click="showDiscardPopup">
        <i class="fas fa-bell text-white text-3xl pr-10"></i>
      </button>
    </div>

    <!-- Show the discard popup component -->
    <DiscardPopup v-if="showPopup" @discard="discardChanges" @cancel="cancel" />

    <!-- Side Navigation Bar -->
    <div v-if="showSideNav" class="fixed top-0 left-0 h-screen w-60 bg-gray-100 pt-1 z-10">
      <button
        @click="toggleSideNav"
        class="nav-bar-button flex items-center justify-end p-1 pr-5 pt-2 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border"
      >
        <i class="fas fa-chevron-left nav-bar-icon text-black fa-2x"></i>
      </button>

      <button
        @click="navigateTo('/home')"
        :class="{ 'active': isActive('/home') }"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border hover:bg-ffd700"
      >
        <i class="fas fa-box text-black" style="font-size: 25px;"></i>
        <span class="ml-2">Dashboard</span>
      </button>

      <button
        @click="navigateTo('/budget')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border hover:bg-ffd700"
      >
        <i class="fas fa-money-bill text-black" style="font-size: 25px;"></i>
        <span class="ml-2">Budget</span>
      </button>

      <button
        @click="navigateTo('/bill-reminders')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border hover:bg-ffd700"
      >
        <i class="fas fa-bell text-black" style="font-size: 25px;"></i>
        <span class="ml-2 pl-2">Bills Reminder</span>
      </button>

      <button
        @click="navigateTo('/view-financial-report')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border hover:bg-ffd700"
      >
        <!-- <img src="financial-report.svg" alt="Financial Report Icon" class="nav-bar-icon" /> -->
        <i class="fas fa-chart-pie text-black" style="font-size: 25px;"></i>
        <span class="ml-2 pl-2">View Financial Report</span>
      </button>

      <button
        @click="navigateTo('/about')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border hover:bg-ffd700"
        ><i class="fas fa-question text-black" style="font-size: 25px;"></i>
        <span class="ml-2 pl-4">About</span>
      </button>

      <button @click="navigateTo('/')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border hover:bg-ffd700"
      >
        <i class="fas fa-sign-out-alt text-black" style="font-size: 25px;"></i>
        <span class="ml-2 pl-3">Log out</span>
      </button>
    </div>
  </div>
</template>


<script>
import DiscardPopup from '@/components/DiscardPopup.vue'

export default {
  data() {
    return {
      showPopup: false, // Flag to control the display of the discard popup
      showSideNav: true // Flag to control the display of the side navigation bar
    }
  },
  methods: {
    toggleSideNav() {
      this.showSideNav = !this.showSideNav // Toggle the value of showSideNav
    },
    goBack() {
      this.$router.back()
    },
    showDiscardPopup() {
      this.showPopup = true // Set the flag to true to show the discard popup
    },
    discardChanges() {
      // Handle discarding changes logic
      this.showPopup = false // Set the flag back to false to hide the discard popup
    },
    cancel() {
      // Handle cancel logic
      this.showPopup = false // Set the flag back to false to hide the discard popup
    },
    navigateTo(route) {
      this.$router.push(route)
      this.showSideNav = false // Close the side navigation bar when navigating
    },
    isActive(route) {
      return this.$route.path === route // Check if the current route matches the given route
    }
  },
  components: {
    DiscardPopup
  }
}
</script>

<style>
.fas:hover {
  color: #FFD700;
}

.hover\:bg-ffd700:hover {
  background-color: #FFD700;
}

.active {
  background-color: #FFD700;
  color: black;
}

.active:hover {
  background-color: #FFD700;
}
</style>

       
