<!-- 
    NOTE:

    Please make the numbers editable. 
    If the user click the numbers on Weekly and Monthly Budget, pwede niya maedit ang numbers. 
    Then it will be saved and reflected mismo sa screen.
    The Amount Left, expenses minus budget sya.
 -->

<template>
  <div>
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- "BUDGET" Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-amber-400">BUDGET</h2>

      <!-- Budget Tracker Container -->
      <div class="border border-amber-500 rounded-lg p-5 mt-20 w-4/5">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-amber-500">Weekly Budget</h3>
          <p class="text-lg text-right border-b border-amber-500 pb-1">1234</p>
        </div>
        <div class="flex items-center justify-between mt-2">
          <h3 class="text-lg font-medium">Amount Left</h3>
          <p class="text-lg text-right">123</p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <h3 class="text-lg font-bold text-amber-500">Monthly Budget</h3>
          <p class="text-lg text-right border-b border-amber-500 pb-1">5678</p>
        </div>
        <div class="flex items-center justify-between mt-2">
          <h3 class="text-lg font-medium">Amount Left</h3>
          <p class="text-lg text-right">567</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue'

export default {
  components: {
    UpperNav
  }
}
</script>
