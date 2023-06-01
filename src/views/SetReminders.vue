<!-- 
  NOTE
    When the user click the save button,
      the the new reminder should be added to the "Bills Reminder" page.
 -->

<template>
  <div>
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- Set Reminders Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-amber-300">SET REMINDERS</h2>

      <!-- Set Reminder Container -->
      <div class="border border-amber-500 rounded-lg p-5 mt-20 w-4/5">
        <!-- Notes -->
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold">Notes:</h3>
          <input
            type="text"
            class="ml-auto w-40 h-7 border-2 border-amber-500 rounded text-right"
          />
        </div>

        <!-- Amount -->
        <div class="flex items-center justify-between mt-4">
          <h3 class="text-lg font-bold">Amount:</h3>
          <input
            type="number"
            class="ml-auto w-40 h-7 border-2 border-amber-500 rounded text-right"
          />
        </div>

        <!-- Date -->
        <div class="flex items-center justify-between mt-4">
          <h3 class="text-lg font-bold">Date:</h3>
          <input
            type="date"
            class="ml-auto w-40 h-7 border-2 border-amber-500 rounded text-right"
          />
        </div>

        <!-- Time -->
        <div class="flex items-center justify-between mt-4">
          <h3 class="text-lg font-bold">Time:</h3>
          <input
            type="time"
            class="ml-auto w-40 h-7 border-2 border-amber-500 rounded text-right"
          />
        </div>
      </div>

      <!-- Save Button -->
      <router-link
        to="/bill-reminders"
        class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-9 rounded mt-4"
      >
        Save
      </router-link>
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

<style></style>
