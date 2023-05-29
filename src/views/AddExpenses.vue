<template>
  <div>
    <upper-nav></upper-nav>

    <!-- "Add Expenses" Text -->
    <h2 class="text-2xl font-bold mt-4">Add Expenses</h2>

    <!-- Add Expenses Container -->
    <div class="bg-gray-200 p-4 rounded mt-2">
      <h3 class="text-lg font-bold">Note</h3>
      <textarea class="w-full h-40 mt-2"></textarea>
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
