<template>
  <div class="sticky top-0 bg-black flex justify-between items-center px-3 py-1">
    <div class="mr-2">
      <button class="bg-transparent border-none py-2" @click="goBack">
        <i class="fas fa-chevron-left text-white text-3xl pl-10"></i>
      </button>
    </div>
    <div>
      <button class="bg-transparent border-none" @click="showDiscardPopup">
        <i class="fas fa-bell text-white text-3xl pr-10"></i>
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
    goBack() {
      this.$router.back()
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

<style>
.fas:hover{
  color:#FFD700;
}
</style>
