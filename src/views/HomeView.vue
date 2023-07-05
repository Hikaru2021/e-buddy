<template>
  <div>
    <!-- Upper Buttons -->
    <div class="sticky-buttons flex justify-between items-end px-4 bg-black shadow-lg">
      <div>
        <side-nav></side-nav>
      </div>
      <div>
        <button @click="navigateTo('/notifications')" class="bg-transparent border-none">
          <i class="fas fa-bell text-white text-3xl pr-10 pb-1 pt-1"></i>
        </button>
      </div>
    </div>


    <!-- Budget & Expenses Container -->
    <div :class="{ 'container-open': showSideNav }" class="flex flex-col items-center h-screen bg-image mt-10">
      <!-- Budget -->
      <div @click="navigateTo('/budget')"
        class="clickable-card text-center border border-black rounded-2xl py-5 px-5 mb-2 shadow-md hover:shadow-highlight">
        <h2 class="text-2xl font-bold mb-1 pl-20 pr-20">Remaining Balance</h2>

     <!-- Budget & Expenses Container -->
     <div class="flex flex-col justify-center items-center h-screen bg-image">
      <!-- Budget -->
      <div @click="navigateTo('/budget')"
        class="transform duration-500 hover:scale-110 shadow hover:shadow-md clickable-card text-center border border-black rounded-2xl p-3 pl-9 pr-9 mb-6 shadow-lg">
        <h2 class="text-2xl font-bold mb-1 pl-8">Remaining Balance</h2>

        <p class="text-xl">{{ monthBudgetLeft }}</p>
      </div>
      <!-- Expenses -->
      <div @click="navigateTo('/expenses-view')"

        class="clickable-card text-center border border-black rounded-2xl px-20 py-8 hover:shadow-highlight">

        class="transform duration-500 hover:scale-110 shadow hover:shadow-md clickable-card text-center border border-black rounded-2xl pl-7 pr-7 pt-5 pb-4 shadow-lg">

        <h2 class="text-2xl font-bold mb-1">This Week's Expenses</h2>
        <p class="text-xl p-2">{{ thisWeeksExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">This Month's Expenses</h2>
        <p class="text-xl p-2">{{ thisMonthsExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">Last Month's Expenses</h2>

        <p class="text-xl">{{ lastMonthsExpenses }}</p>
      </div>

      <!-- Add Expenses Button -->
      <div class="bg-black flex justify-center mt-2 px-20 py-2 rounded-full">
        <p class="text-xl p-2">{{ lastMonthsExpenses }}</p>
      </div>
    

      <!-- Add Expenses Button -->
      <div class="bg-black flex justify-center clickable-card  mt-5 px-20 py-2 rounded-full transform duration-500 hover:scale-110">
        <router-link to="/add-expenses" class="image-button">
          <i class="fas fa-plus text-white text-3xl"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

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
      showSideNav: true // Set showSideNav to true by default
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

<style>
.sticky-container {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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

  .hover\:shadow-highlight:hover {
  box-shadow: 5px 5px 5px rgba(255, 215, 0, 0.6), 0 5px 7px rgba(80, 79, 79, 0.1);
}

.container-open {
  margin-left: 60px; 
  transition: margin-left 0.3s ease-in-out; 
}
</style>
