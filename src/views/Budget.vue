<!-- 
    NOTE:

    Please make the numbers editable. 
    If the user click the numbers on Weekly and Monthly Budget, pwede niya maedit ang numbers. 
    Then it will be saved and reflected mismo sa screen.
    The Amount Left, expenses minus budget sya.
 -->

<template>
  <div class="bg-image">
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- "BUDGET" Text -->
      <h2 class="text-5xl font-bold text-center text-black">BUDGET</h2>

      <!-- Budget Tracker Container -->
      <div class="border border-black rounded-lg p-5 mt-20 w-4/5">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-black">Weekly Budget</h3>
          <input type="number" class="text-lg text-right border-b border-black pb-1" v-on:change="budgetChange"
            required v-model="weekBudget" />
        </div>
        <div class="flex items-center justify-between mt-2">
          <h3 class="text-lg font-medium">Amount Left</h3>
          <p class="text-lg text-right">{{ weekBudgetLeft }}</p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <h3 class="text-lg font-bold text-black">Monthly Budget</h3>
          <input type="number" class="text-lg text-right border-b border-black pb-1" v-on:change="budgetChange"
            required v-model="monthBudget" />
        </div>
        <div class="flex items-center justify-between mt-2">
          <h3 class="text-lg font-medium">Amount Left</h3>
          <p class="text-lg text-right">{{ monthBudgetLeft }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue'
import getBudget from '@/composable/getBudget.js'
import axios from "axios";

export default {
  setup() {
    const { weekBudget, weekBudgetLeft, monthBudget, monthBudgetLeft, thisWeeksExpenses, thisMonthsExpenses, error, loadBudget } =
      getBudget();
    loadBudget();

    return {
      weekBudget,
      weekBudgetLeft,
      monthBudget,
      monthBudgetLeft,
      thisMonthsExpenses,
      thisWeeksExpenses,
      error
    };
  },
  components: {
    UpperNav
  },
  methods: {
    async budgetChange() {
      const result = await axios
        .put("http://localhost:3000/budget", {
          weeklyBudget: this.weekBudget,
          monthlyBudget: this.monthBudget
        })
        .then(() => {
          this.weekBudgetLeft = this.weekBudget - this.thisWeeksExpenses;
          this.monthBudgetLeft = this.monthBudget - this.thisMonthsExpenses;
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
