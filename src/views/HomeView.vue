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
    <div class="sticky-buttons flex justify-between items-end px-4 bg-black shadow-lg">
      <div>
        <side-nav></side-nav>
      </div>
      <div>
        <img class="block lg:hidden h-8 w-auto" src="/logo2.png" alt="Logo">
        <img class="hidden lg:block p-1 h-14 w-auto" src="/logo2.png" alt="Logo">
      </div>
      <div>
        <button @click="navigateTo('/notifications')" class="bg-transparent border-none">
          <img src="notification.svg" alt="Right Button" class="h-10 w-10" />
        </button>
      </div>
    </div>

    <!-- Budget & Expenses Container -->
    <div class="flex flex-col justify-center items-center h-screen bg-image">
      <!-- Budget -->
      <div @click="navigateTo('/budget')"
        class="transform shadow hover:shadow-2xl clickable-card text-center border border-black rounded-2xl p-3 pl-9 pr-9 mb-2 shadow-lg">
        <h2 class="text-2xl font-bold mb-1 pl-20 pr-20">Budget</h2>
        <p class="text-xl">{{ monthBudgetLeft }}</p>
      </div>
      <!-- Expenses -->
      <div @click="navigateTo('/expenses-view')"
        class="shadow hover:shadow-2xl clickable-card text-center border border-black rounded-2xl pl-7 pr-7 pt-5 pb-4 shadow-lg">
        <h2 class="text-2xl font-bold mb-1">This Week's Expenses</h2>
        <p class="text-xl p-2">{{ thisWeeksExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">This Month's Expenses</h2>
        <p class="text-xl p-2">{{ thisMonthsExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">Last Month's Expenses</h2>
        <p class="text-xl p-2">{{ lastMonthsExpenses }}</p>
      </div>
    </div>

    <!-- Add Expenses Button -->
    <div class="sticky-container bg-black">
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
}

.image-button {
  display: flex;
  align-items: center;
}

.clickable-card {
  cursor: pointer;
}

.bg-image {
    background-image: url('/homebg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
  
  .bg-image .grid {
    flex-grow: 1;
  }
  
  .shadow-lg {
    box-shadow: 0 5px 7px rgba(80, 79, 79, 0.1), 0 5px 7px rgba(93, 93, 93, 0.6);
  }
</style>
