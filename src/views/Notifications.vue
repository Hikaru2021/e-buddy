<template>
  <div class="bg-black h-12 flex justify-center">
    <!-- Upper Buttons -->
    <div class="flex justify-between w-full">
      <!-- Back Button -->
      <button @click="goBack" class="text-blue-500 hover:text-blue-700 flex items-center">
        <img src="back.svg" alt="Back" class="w-8 h-8 m-5" />
      </button>

      <!-- Empty Space (to push the buttons apart) -->
      <div class="flex-grow"></div>

      <!-- Read All Button -->
      <button @click="markAllAsRead" class="text-green-500 hover:text-amber-400 flex items-center">
        <img src="read-all.svg" alt="Read All" class="w-10 h-10 m-5" />
      </button>
    </div>
  </div>

  <!-- Notification Content -->
  <div class="notification-content mt-4">
    <NotificationBox
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>



<script>
import NotificationBox from '@/components/NotificationBox.vue'
import ReminderBox from '@/components/ReminderBox.vue'

export default {
  components: {
    NotificationBox,
    ReminderBox
  },
  data() {
    return {
      notifications: [
        // Define your notifications here, or you can fetch them from an API or store
        {
          id: 1,
          title: 'Rent is due!',
          due: 'April 28, 2023 8:45 PM',
          amount: '-800'
        },
        {
          id: 2,
          title: 'Over the budget alert',
          due: 'April 28, 2023 8:45 PM',
          amount: '-200'
        }
        // Add more notifications as needed
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1) // Navigates back to the previous page
    },
    markAllAsRead() {
      // Handle mark all as read functionality
    }
  }
}
</script>

<style></style>
