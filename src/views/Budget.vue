<template>
  <div class="bg-image">
    <div class="flex"> 
      <!-- <upper-nav></upper-nav> -->
        <div class="flex flex-col items-center w-full">
          <!-- "BUDGET" Text -->
          <h2 class="text-5xl p-5 font-bold text-black">Add Budget</h2>

          <!-- Budget Tracker Container -->
          <div class="border border-black rounded-lg p-12 mt-2 w-2/5 bg-slate-100">
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
                <h3 class="text-lg font-medium">If others, please specify</h3>
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
                <div class="flex items-center">
                  <select class="h-7 border-2 border-black rounded-l pl-2" required v-model="budget.currency">
                    <option value="$">₱ </option>
                    <option value="$">$ </option>
                    <option value="€">€ </option>
                    <option value="¥">¥ </option>
                    <!-- Add more currency options as needed -->
                  </select>
                  <input type="number" class="w-full h-7 border-2 border-black rounded-r" required v-model="budget.amount" step="0.01" />
                </div>
              </div>
              <div class="flex items-center justify-between mt-2">
                <h3 class="text-lg font-medium">Timeline</h3>
                <input type="text" class="text-lg text-right border-b border-black pb-1 w-1/4" v-model="budget.timeline" ref="timelineInput" />
              </div>
              <div class="flex items-center justify-between mt-2">
                <h3 class="text-lg font-medium">Activity</h3>
                <textarea class="text-lg border border-black rounded-md w-1/2" v-model="budget.note"></textarea>
              </div>
              <hr class="my-4">
            <!-- Confirm Button -->
            <div class="flex justify-end mt-4">
              <button class="bg-black hover:opacity-80 text-white font-bold py-2 px-4 rounded" @click="saveBudget">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>


<script>
import UpperNav from '@/components/UpperNav.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

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
        currency: '$', // Add currency field
        amount: '',
        timeline: '',
        note: ''
      }
    ])

    const saveBudget = async () => {
      const amount = budgets.value[0].amount
      await axios.put('http://localhost:3000/budget', {
        budgets: budgets.value
      })
      navigateTo('/home', amount)
    }

    const navigateTo = (route, amount) => {
      this.$router.push({ path: route, query: { amount: amount } })
    }

    return {
      budgets,
      saveBudget
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
