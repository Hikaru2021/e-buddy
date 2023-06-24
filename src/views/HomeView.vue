<!-- NOTES:

  Enhance the UI design.
  
 -->
<script>
import AddExpenses from '@/views/AddExpenses.vue'
import Budget from '@/views/Budget.vue'
import ExpensesView from '@/views/ExpensesView.vue'
import SideNav from '@/components/SideNav.vue'
import Notifications from '@/views/Notifications.vue'
import getDb from "@/composable/getDb.js";
import getMonthBudget from '@/composable/getMonthBudget.js'

export default {
  setup() {
    const {
      expenses,
      error,
      thisMonthsExpenses,
      thisWeeksExpenses,
      lastMonthsExpenses,
      loadDb,
    } = getDb();
    loadDb();

    const { monthBudgetLeft, loadMonthBudget } = getMonthBudget();
    loadMonthBudget();

    return {
      expenses,
      thisMonthsExpenses,
      thisWeeksExpenses,
      lastMonthsExpenses,
      monthBudgetLeft,
      error,
    };
  },
  components: {
    AddExpenses,
    Budget,
    ExpensesView,
    SideNav,
    Notifications
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<template>
  <div>
    <!-- Upper Buttons -->
    <div class="sticky-buttons flex justify-between items-end px-4 py-3">
      <div>
        <side-nav></side-nav>
      </div>
      <div>
        <button @click="navigateTo('/notifications')" class="bg-transparent border-none">
          <img src="notification.svg" alt="Right Button" class="h-10 w-10" />
        </button>
      </div>
    </div>

    <!-- Budget & Expenses Container -->
    <div class="flex flex-col justify-center items-center h-screen">
      <!-- Budget -->
      <div @click="navigateTo('/budget')"
        class="clickable-card text-center border border-amber-500 rounded-2xl p-3 mb-2 shadow-md">
        <h2 class="text-2xl font-bold mb-1 pl-20 pr-20">Budget</h2>
        <p class="text-xl">{{ monthBudgetLeft }}</p>
      </div>
      <!-- Expenses -->
      <div @click="navigateTo('/expenses-view')"
        class="clickable-card text-center border border-amber-500 rounded-2xl p-8">
        <h2 class="text-2xl font-bold mb-1">This Week's Expenses</h2>
        <p class="text-xl p-2">{{ thisWeeksExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">This Month's Expenses</h2>
        <p class="text-xl p-2">{{ thisMonthsExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">Last Month's Expenses</h2>
        <p class="text-xl">{{ lastMonthsExpenses }}</p>
      </div>
    </div>

    <!-- Add Expenses Button -->
    <div class="sticky-container">
      <router-link to="/add-expenses" class="image-button">
        <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
      </router-link>
    </div>
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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 1rem 0;
}

.image-button {
  display: flex;
  align-items: center;
}

.clickable-card {
  cursor: pointer;
}
</style>
