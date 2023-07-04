<template>
  <div>
    <!-- Navigation Bar Button -->
    <button @click="showSideNav = !showSideNav" class="nav-bar-button">
      <img src="nav-bar.svg" alt="Navigation Bar" class="nav-bar-icon" />
    </button>

    <!-- Side Navigation Bar -->
    <div v-if="showSideNav" class="fixed top-0 left-0 h-screen w-60 bg-gray-100 pt-1 z-10">
      <button @click="showSideNav = !showSideNav"
        class="flex items-center justify-end p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border">
        <img src="doublearrowleft.svg" alt="Navigation Bar" class="nav-bar-icon" />
      </button>
      <button @click="navigateTo('/budget')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border">
        <img src="budget.svg" alt="Budget Icon" class="nav-bar-icon" />
        <span class="ml-2">Budget</span>
      </button>
      <button @click="navigateTo('/bill-reminders')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border">
        <img src="bill-reminder.svg" alt="Bill Reminders Icon" class="nav-bar-icon" />
        <span class="ml-2">Bills Reminder</span>
      </button>
      <button @click="navigateTo('/view-financial-report')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border">
        <img src="financial-report.svg" alt="Financial Report Icon" class="nav-bar-icon" />
        <span class="ml-2">View Financial Report</span>
      </button>
      <button @click="navigateTo('/about')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border">
        <img src="about.svg" alt="About Icon" class="nav-bar-icon" />
        <span class="ml-2">About</span>
      </button>
      <button @click="navigateTo('/')"
        class="flex items-center justify-start p-3 bg-transparent transition ease-in-out duration-300 cursor-pointer w-full box-border ml-2">
        <img src="logout.svg" alt="About Icon" class="nav-bar-icon mr-1 w-7 h-7" />
        <span class="ml-2">Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideNav: false
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
</style>
