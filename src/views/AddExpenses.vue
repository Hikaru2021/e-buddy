<template>
  <div class="bg-image">
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- "Add Expenses" Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">ADD EXPENSES</h2>

      <!-- Add Expenses Container -->
      <div class="w-3/4 h-1/2 flex flex-col items-center bg-gray-200 p-10 rounded mt-10">
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Note</h3>
          <input class="w-full h-7 border-2 border-black rounded" type="text" required v-model="note" />
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Category</h3>
          <select class="w-full h-7 border-2 border-black rounded" required v-model="type">
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Housing">Housing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Amount</h3>
          <input type="number" class="w-full h-7 border-2 border-black rounded" required v-model="amount" />
        </div>
      </div>

      <!-- Add Button -->
      <button @click="navigateToExpensesView"
        class="bg-black hover:opacity-60 text-white font-bold py-2 px-9 rounded mt-4">
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
    return { note, type, amount, date };
  },
  components: {
    UpperNav
  },
  methods: {
    restrictToNumbers(event) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '')
    },
    async navigateToExpensesView() {
      let result = await axios.post("http://localhost:3000/expenses", {
        note: this.note,
        type: this.type,
        date: this.date,
        dateString: this.date.toLocaleDateString(),
        amount: this.amount,
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
