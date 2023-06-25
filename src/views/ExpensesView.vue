<template>
  <div>
    <UpperNav></UpperNav>
    <div class="flex flex-col items-center">
      <!-- Expenses Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-amber-400">EXPENSES</h2>
    </div>

    <!-- Expenses Table -->
    <div>
    
    </div>

    <!-- Add Expenses Button -->
    <div class="sticky-container">
      <router-link to="/add-expenses" class="image-button">
        <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
      </router-link>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue';

export default{
  components: {
    UpperNav,
  },
};
</script>

<style>
.sticky-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #f5f5f5;
}
</style>
