<template>
  <div>
    <!-- Navigation Bar Button -->
    <button @click="showSideNav = !showSideNav" class="nav-bar-button">
      <!-- <img src="nav-bar.svg" alt="Navigation Bar" class="nav-bar-icon" /> -->
      <i class="fas fa-bars nav-bar-icon text-white text-3xl pl-10 pb-2 pt-1" ></i>
      <!-- <i class="fas fa-chevron-left text-white text-3xl pl-10"></i> -->
    </button>

    <!-- Side Navigation Bar -->
    <div v-if="showSideNav" class="fixed top-0 left-0 h-screen w-60 bg-gray-100 pt-1 z-10">
      <button
        @click="showSideNav = !showSideNav"
        class="nav-bar-button flex items-center justify-end p-1 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border"
      >
        <!-- <img src="doublearrowleft.svg" alt="Navigation Bar" class="nav-bar-icon" /> -->
        <i class="fas fa-chevron-left nav-bar-icon text-black fa-2x"></i>
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
        <!-- <img src="bill-reminder.svg" alt="Bill Reminders Icon" class="nav-bar-icon" /> -->
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
      >
        <!-- <img src="about.svg" alt="About Icon" class="nav-bar-icon" /> -->
        <i class="fas fa-question text-black" style="font-size: 25px;"></i>
        <span class="ml-2 pl-4">About</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideNav: true 
    }
  },
  props: {
    navBarImage: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.nav-bar-icon {
  width: 40px;
  height: 40px;
}

.align-middle {
  vertical-align: middle;
}

.hover\:bg-ffd700:hover {
  background-color: #FFD700;
}

.nav-bar-icon:hover{
  color: #FFD700;
}

</style>
