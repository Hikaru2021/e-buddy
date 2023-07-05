<template>
  <div class="sticky top-0 bg-black flex justify-between items-start px-3 py-1">
    <div>
      <button class="bg-transparent border-none py-2" @click="home">
        <img src="back.svg" alt="Back Button" class="h-6 w-10" />
      </button>
    </div>
    <div>
      <button class="bg-transparent border-none" @click="showDiscardPopup">
        <img src="notification.svg" alt="Notification Button" class="h-10 w-10" />
      </button>
    </div>
    <!-- Show the discard popup component -->
    <DiscardPopup v-if="showPopup" @discard="discardChanges" @cancel="cancel" />
  </div>
</template>

<script>
import DiscardPopup from '@/components/DiscardPopup.vue'

export default {
  data() {
    return {
      showPopup: false // Flag to control the display of the discard popup
    }
  },
  methods: {
    home() {
      this.$router.push({ name: 'home' });
    },
    showDiscardPopup() {
      this.showPopup = true // Set the flag to true to show the discard popup
    },
    discardChanges() {
      // Handle discarding changes logic
      this.showPopup = false // Set the flag back to false to hide the discard popup
    },
    cancel() {
      // Handle cancel logic
      this.showPopup = false // Set the flag back to false to hide the discard popup
    }
  },
  components: {
    DiscardPopup
  }
}
</script>

<style></style>
