<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<template>
  <!-- Upper Buttons -->
  <div class="flex justify-between items-start px-4 py-2">
    <div>
      <button @click="navigateTo('/about')" class="bg-transparent border-none">
        <img src="about.svg" alt="Left Button" class="h-10 w-10" />
      </button>
    </div>
    <div>
      <button @click="navigateTo('/notification')" class="bg-transparent border-none">
        <img src="notification.svg" alt="Right Button" class="h-10 w-10" />
      </button>
    </div>
  </div>

  <!-- Expenses Container -->
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="text-center border border-amber-500 rounded-2xl p-10">
      <h2 class="text-2xl font-bold mb-4">This Week's Expenses</h2>
      <p class="text-xl p-2">1234</p>
      <h2 class="text-2xl font-bold mb-4">This Month's Expenses</h2>
      <p class="text-xl p-2">4567</p>
      <h2 class="text-2xl font-bold mb-4">Last Month's Expenses</h2>
      <p class="text-xl p-2">8910</p>
    </div>

    <!-- Buttons:View Financial Report, Budget and Bill Reminders -->
    <div class="flex justify-center mt-10 mb-10">
      <button
        @click="navigateTo('/budget')"
        class="bg-amber-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Budget
      </button>
      <button
        @click="navigateTo('/bill-reminders')"
        class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Bill Reminders
      </button>
      <button
        @click="navigateTo('/view-financial-report')"
        class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded ml-2"
      >
        View Financial Report
      </button>
    </div>
  </div>
  <!-- Add Expenses Button -->
  <div class="sticky-container">
    <button @click="navigateTo('/add-expenses')" class="image-button">
      <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
    </button>
  </div>
</template>

<style>
.sticky-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #f5f5f5;
}

.image-button {
  display: flex;
  align-items: center;
}
</style>
