<template>
  <div class="bg-image">
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">

      <!-- "Add Expenses" Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">ADD EXPENSES</h2>

      <!-- Add Expenses Container -->
      <div class="border border-black rounded-lg p-12 mt-5 w-2/5 bg-slate-100 flex flex-col justify-center items-center"> <!-- Added flex, justify-center, and items-center classes -->
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold items-center mb-2">Amount</h3>
          <div class="flex items-center">
            <select class="h-7 border-2 border-black rounded-l pl-2" required v-model="currency">
              <option value="Php">₱ </option>
              <option value="$">$</option>
              <option value="€">€</option>
              <option value="¥">¥</option>
              <!-- Add more currency options as needed -->
            </select>
            <input type="number" class="w-full h-7 border-2 border-black rounded-r" required v-model="amount" step="0.01" />
          </div>
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Category</h3>
          <select class="w-full h-7 border-2 border-black rounded" required v-model="type">
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing">Housing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div v-if="type === 'Others'" class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Category (Specify)</h3>
          <input class="w-full h-7 border-2 border-black rounded" type="text" required v-model="otherCategory" />
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Activity</h3>
          <input class="w-full h-7 border-2 border-black rounded" type="text" required v-model="note" />
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Payment Type</h3>
          <select class="w-full h-7 border-2 border-black rounded" required v-model="paymentType">
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
      </div>

      <!-- Add Button -->
      <button @click="navigateToExpensesView"
        class="bg-black hover:opacity-60 text-white font-bold py-2 px-9 rounded mt-2">
        Add
      </button>
    </div>
  </div>
</template>


<script>
import UpperNav from '@/components/UpperNav.vue'
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const note = ref();
    const type = ref();
    const amount = ref();
    const date = ref(new Date());
    const paymentType = ref();
    const otherCategory = ref();
    const currency = ref('Php'); // Set the default currency here
    return { note, type, amount, date, paymentType, otherCategory, currency };
  },
  components: {
    UpperNav
  },
  methods: {
    restrictToNumbers(event) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, ''); // Allow only numbers and decimal point
    },
    async navigateToExpensesView() {
      let result = await axios.post("http://localhost:3000/expenses", {
        note: this.note,
        type: this.type === 'Others' ? this.otherCategory : this.type,
        date: this.date,
        dateString: this.date.toLocaleDateString(),
        amount: this.amount,
        paymentType: this.paymentType,
      });
      this.$router.push('/expenses-view')
    }
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
