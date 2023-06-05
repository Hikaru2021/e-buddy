<template>
  <div>
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- "Add Expenses" Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-amber-400">ADD EXPENSES</h2>

      <!-- Add Expenses Container -->
      <div class="w-3/4 h-1/2 flex flex-col items-center bg-amber-100 p-10 rounded mt-10">
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Note</h3>
          <input class="w-full h-7 border-2 border-amber-500 rounded" />
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Category</h3>
          <select class="w-full h-7 border-2 border-amber-500 rounded">
            <option value="category1">Others</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <div class="w-2/3 flex flex-col mb-4">
          <h3 class="text-lg font-bold mb-2">Amount</h3>
          <input
            type="text"
            class="w-full h-7 border-2 border-amber-500 rounded"
            oninput="restrictToNumbers(event)"
          />
        </div>
      </div>

      <!-- Add Button -->
      <button
        @click="navigateToExpensesView"
        class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-9 rounded mt-4"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue'

export default {
  components: {
    UpperNav
  },
  methods: {
    restrictToNumbers(event) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '')
    },
    navigateToExpensesView() {
      this.$router.push('/expenses-view')
    }
  }
}
</script>

<style></style>
