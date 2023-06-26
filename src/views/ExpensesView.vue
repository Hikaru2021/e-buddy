<template>
  <div class="bg-image">
    <UpperNav></UpperNav>
    <div class="flex flex-col items-center">
      <!-- Expenses Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">EXPENSES</h2>
    </div>

    <!-- Expenses Table -->
    <div class="w-full max-w-4xl mx-auto">
      <table class="border-collapse border-2 border-black mt-8 w-full">
        <thead>
          <tr>
            <th class="border border-black px-4 py-2">Date</th>
            <th class="border border-black px-4 py-2">Type</th>
            <th class="border border-black px-4 py-2">Note</th>
            <th class="border border-black px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in expenses" :key="expense.id">
            <td class="border border-gray-200 px-4 py-2">{{ expense.dateString }}</td>
            <td class="border border-gray-200 px-4 py-2">{{ expense.type }}</td>
            <td class="border border-gray-200 px-4 py-2">{{ expense.note }}</td>
            <td class="border border-gray-200 px-4 py-2">{{ expense.amount }}</td>
          </tr>
          <!-- Add more rows for each expense -->
        </tbody>
      </table>
    </div>


    <!-- Add Expenses Button -->
    <div class="sticky-container bg-black">
      <router-link to="/add-expenses" class="image-button">
        <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
      </router-link>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue';
import getDb from "@/composable/getDb.js";

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
    return {
      expenses,
    };
  },
  components: {
    UpperNav,
  }
};
</script>

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

.bg-image {
  background-image: url('/homebg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.bg-image .grid {
  flex-grow: 1;
}
</style>
