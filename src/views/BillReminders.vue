<!-- 
    NOTE:

    I created a component for each reminders -- "Reminder Box".
    Where if there is new reminder, i-call ra to syang component 
        then supply the details nalang.

    Please also make sure that if they click one of the Reminder Box,
        they should be able to edit the details of it.
 -->

<template>
  <div>
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- Reminders Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-amber-300">REMINDERS</h2>

      <!-- Reminders Tracker Container -->
      <div class="mt-20 w-screen">
        <ReminderBox></ReminderBox>
      </div>
    </div>

    <!-- Add Expenses Button -->
    <div class="sticky-container">
      <router-link to="/set-reminders" class="image-button">
        <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
      </router-link>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue'
import ReminderBox from '@/components/ReminderBox.vue'

export default {
  components: {
    UpperNav,
    ReminderBox
  }
}
</script>

<style>
.reminders-tracker-container {
  margin-top: 20%;
}
</style>
