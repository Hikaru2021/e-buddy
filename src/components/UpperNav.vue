<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    },
    goToNotificationPage() {
      // Implement the logic to navigate to the Notification page
      // Use Vue Router's `router.push()` method
      this.$router.push('/notification')
    }
  }
}
</script>

<template>
  <div class="sticky top-0 bg-white flex justify-between items-start px-4 py-2">
    <div>
      <button class="bg-transparent border-none" @click="goBack">
        <img src="back.svg" alt="Back Button" class="h-10 w-10" />
      </button>
    </div>
    <div>
      <button class="bg-transparent border-none" @click="goToNotificationPage">
        <img src="notification.svg" alt="Notification Button" class="h-10 w-10" />
      </button>
    </div>
  </div>
</template>

<style></style>
