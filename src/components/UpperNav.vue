<script>
export default {
  methods: {
    goBack() {
      // Implement the logic to navigate back
      // You can use Vue Router's `router.back()` or any other navigation method
    }
  }
}
</script>
<template>
  <div class="flex justify-between items-start px-4 py-2">
    <div>
      <button class="bg-transparent border-none" @click="goBack">
        <img src="back.svg" alt="Back Button" class="h-10 w-10" />
      </button>
    </div>
    <div>
      <button class="bg-transparent border-none">
        <img src="notification.svg" alt="Notification Button" class="h-10 w-10" />
      </button>
    </div>
  </div>
</template>
<style></style>
