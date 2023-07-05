<template>
  <div class="bg-image ml-24">
    <!-- <upper-nav></upper-nav> -->
    <div class="flex flex-col items-center">
      <!-- Reminders Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">REMINDERS</h2>

      <!-- Reminders Tracker Container -->
      <div class="mt-20 w-3/4 ml-4">
        <ReminderBox></ReminderBox>
      </div>
    </div>

    <!-- Add Expenses Button -->
    <div class="flex justify-center mt-2">
      <router-link to="/set-reminders" class="image-button">
        <div class="bg-black flex justify-center items-center px-20 py-2 w-8 rounded-full hover:scale-110">
          <i class="fas fa-plus text-white text-3xl"></i>
        </div>
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
