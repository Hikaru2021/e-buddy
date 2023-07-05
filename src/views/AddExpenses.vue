<template>
  <div class="bg-image">
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">

      <!-- "Add Expenses" Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">ADD EXPENSES</h2>

      <!-- Add Expenses Container -->
      <div class="border border-black rounded-lg p-12 mt-20 w-2/5 bg-slate-100">
        <div v-for="(expense, index) in expenses" :key="index">
          <div class="w-2/3 flex flex-col mb-4">
            <h3 class="text-lg font-bold mb-2">Amount</h3>
            <div class="flex items-center">
              <select class="h-7 border-2 border-black rounded-l pl-2" required v-model="expense.currency">
                <option value="Php">Php</option>
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="¥">¥</option>
                <!-- Add more currency options as needed -->
              </select>
              <input type="number" class="w-full h-7 border-2 border-black rounded-r" required v-model="expense.amount" step="0.01" @input="restrictToNumbers($event)" />
            </div>
          </div>
          <div class="w-2/3 flex flex-col mb-4">
            <h3 class="text-lg font-bold mb-2">Category</h3>
            <select class="w-full h-7 border-2 border-black rounded" required v-model="expense.type">
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing">Housing</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div v-if="expense.type === 'Others'" class="w-2/3 flex flex-col mb-4">
            <h3 class="text-lg font-bold mb-2">Category (Specify)</h3>
            <input class="w-full h-7 border-2 border-black rounded" type="text" required v-model="expense.otherCategory" />
          </div>
          <div class="w-2/3 flex flex-col mb-4">
            <h3 class="text-lg font-bold mb-2">Activity</h3>
            <input class="w-full h-7 border-2 border-black rounded" type="text" required v-model="expense.note" />
          </div>
          <div class="w-2/3 flex flex-col mb-4">
            <h3 class="text-lg font-bold mb-2">Payment Type</h3>
            <select class="w-full h-7 border-2 border-black rounded" required v-model="expense.paymentType">
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Savings">Savings</option>
            </select>
          </div>
          <hr class="my-4">
        </div>

        <!-- Add Button -->
        <button @click="navigateToExpensesView" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue'
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const expenses = ref([
      {
        currency: 'Php',
        amount: '0.00',
        type: 'Food',
        otherCategory: '',
        note: '',
        paymentType: 'Cash'
      }
    ]);

    const restrictToNumbers = (event) => {
      event.target.value = event.target.value.replace(/[^0-9.]/g, ''); // Allow only numbers and decimal point
    };

    const navigateToExpensesView = async () => {
      await axios.post("http://localhost:3000/expenses", {
        expenses: expenses.value
      });
      this.$router.push('/expenses-view');
    };

    return {
      expenses,
      restrictToNumbers,
      navigateToExpensesView
    };
  },
  components: {
    UpperNav
  }
}
</script>

<style>
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
