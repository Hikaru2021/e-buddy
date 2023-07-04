<template>
  <div class="bg-image">
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- "BUDGET" Text -->
      <h2 class="text-5xl font-bold text-center text-black">BUDGET</h2>

      <!-- Budget Tracker Container -->
      <div class="border border-black rounded-lg p-5 mt-20 w-4/5">
        <div v-for="(budget, index) in budgets" :key="index">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-black">Category</h3>
            <select v-model="budget.category" class="text-lg text-right border-b border-black pb-1 w-1/4">
              <option value="Choose">Choose</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing">Housing</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div v-if="budget.category === 'Others'" class="flex items-center justify-between mt-2">
            <h3 class="text-lg font-medium">Specify</h3>
            <input type="text" class="text-lg text-right border-b border-black pb-1 w-1/4" v-model="budget.specifyCategory" />
          </div>
          <div class="flex items-center justify-between mt-2">
            <h3 class="text-lg font-medium">Payment Type</h3>
            <select v-model="budget.paymentType" class="text-lg text-right border-b border-black pb-1 w-1/4">
              <option value="Choose">Choose</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Savings">Savings</option>
            </select>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h3 class="text-lg font-medium">Amount</h3>
            <input type="number" class="text-lg text-right border-b border-black pb-1 w-1/4" v-model="budget.amount" />
          </div>
          <div class="flex items-center justify-between mt-2">
            <h3 class="text-lg font-medium">Timeline</h3>
            <input type="text" class="text-lg text-right border-b border-black pb-1 w-1/4" v-model="budget.timeline" ref="timelineInput" />
          </div>
          <div class="flex items-center justify-between mt-2">
            <h3 class="text-lg font-medium">Note</h3>
            <textarea class="text-lg border border-black rounded-md w-1/2" v-model="budget.note"></textarea>
          </div>
          <hr class="my-4">
         <!-- Confirm Button -->
        <div class="flex justify-end mt-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import UpperNav from '@/components/UpperNav.vue'
import { ref, onMounted } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import axios from "axios";

export default {
  components: {
    UpperNav
  },
  setup() {
    const budgets = ref([
      {
        category: 'Choose',
        specifyCategory: '',
        paymentType: 'Choose',
        amount: 0.0,
        timeline: '',
        note: ''
      }
    ]);

    onMounted(() => {
      flatpickr("#timelineInput", {
        mode: 'range',
        dateFormat: 'Y-m-d',
        onChange: (selectedDates) => {
          budgets.value[0].timeline = selectedDates.map(date => date.toLocaleDateString()).join(' to ');
        }
      });
    });

    return {
      budgets
    };
  },
  methods: {
    async saveBudget() {
      const result = await axios
        .put("http://localhost:3000/budget", {
          budgets: this.budgets
        })
        .then(() => {
          // Update the budget calculations here
        });
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
