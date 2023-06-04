<!-- NOTE:

    Basta kuan ni sya para if mag-exit ang user while editing,
        naay magwarn sya iya if discard or continue editing.
 -->
<template>
  <div class="fixed inset-0 flex justify-center items-center z-50">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative">
      <!-- Discard Pop Up Container -->
      <div
        class="bg-white p-10 rounded-md border-2 border-amber-500 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h2 class="text-xl font-bold mb-4">Discard Changes?</h2>
        <p class="text-gray-600">
          You have unsaved changes. Are you sure you want to discard them?
        </p>
        <div class="mt-4 flex justify-end">
          <button
            @click="discardChanges"
            class="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-md mr-2"
          >
            Discard
          </button>
          <button
            @click="cancel"
            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    discardChanges() {
      // Handle discarding changes logic
      this.$emit('discard')
    },
    cancel() {
      // Handle cancel logic
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
.overlay {
  z-index: 9999;
}
</style>
