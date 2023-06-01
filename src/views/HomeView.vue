<script>
import AddExpenses from '@/views/AddExpenses.vue'
import Budget from '@/views/Budget.vue'
import BillReminders from '@/views/BillReminders.vue'
import FinancialReport from '@/views/FinancialReport.vue'
import ExpensesView from '@/views/ExpensesView.vue'

export default {
  components: {
    AddExpenses,
    Budget,
    BillReminders,
    FinancialReport,
    ExpensesView
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<template>
  <!-- Upper Buttons -->
  <div class="sticky-buttons flex justify-between items-start px-4 py-3">
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

  <!-- Budget & Expenses Container -->
  <div class="flex flex-col justify-center items-center h-screen">
    <!-- Budget -->
    <div
      @click="navigateTo('/budget')"
      class="clickable-card text-center border border-amber-500 rounded-2xl p-3 mb-2"
    >
      <h2 class="text-2xl font-bold mb-1 pl-20 pr-20">Budget</h2>
      <p class="text-xl">1234</p>
    </div>
    <!-- Expenses -->
    <div
      @click="navigateTo('/expenses-view')"
      class="clickable-card text-center border border-amber-500 rounded-2xl p-8"
    >
      <h2 class="text-2xl font-bold mb-1">This Week's Expenses</h2>
      <p class="text-xl p-2">1234</p>
      <h2 class="text-2xl font-bold mb-1">This Month's Expenses</h2>
      <p class="text-xl p-2">4567</p>
      <h2 class="text-2xl font-bold mb-1">Last Month's Expenses</h2>
      <p class="text-xl">8910</p>
    </div>

    <!-- Buttons: View Financial Report, Budget, and Bill Reminders -->
    <div class="flex justify-center mt-5 mb-20">
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
    <router-link to="/add-expenses" class="image-button">
      <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
    </router-link>
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

.sticky-buttons {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}

.image-button {
  display: flex;
  align-items: center;
}

.clickable-card {
  cursor: pointer;
}
</style>
