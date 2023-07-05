<template>
  <div class="bg-image ml-24">
    <!-- <upper-nav></upper-nav> -->
    <div class="flex flex-col items-center">
      <!-- "Developers" Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">DEVELOPERS</h2>

      <!-- Developers Container -->
      <div class="flex items-center mt-20 ml-5">
        <!-- Developer's Image -->
        <img src="dev-pic.jpg" alt="Developer's Picture" class="w-20 h-20 rounded-full mr-8" />
        <!-- Developer's Name and Description -->
        <div>
          <h3 class="text-xl font-bold mb-1 text-black">Antonette Gwen Dela Torre</h3>
          <p class="text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem nisl.
          </p>
        </div>
      </div>
      <div class="flex items-center mt-10 ml-5">
        <!-- Developer's Name and Description -->
        <div>
          <h3 class="text-xl font-bold mb-1 text-black">Jose Mari Hinolan</h3>
          <p class="text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem nisl.
          </p>
        </div>
        <!-- Developer's Image -->
        <img src="dev-pic.jpg" alt="Developer's Picture" class="w-20 h-20 rounded-full mr-8" />
      </div>
      <div class="flex items-center mt-10 ml-5">
        <!-- Developer's Image -->
        <img src="dev-pic.jpg" alt="Developer's Picture" class="w-20 h-20 rounded-full mr-8" />
        <!-- Developer's Name and Description -->
        <div>
          <h3 class="text-xl font-bold mb-1 text-black">Arvin Arar</h3>
          <p class="text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem nisl.
          </p>
        </div>
      </div>
      <div class="flex items-center mt-10 mb-10 ml-5">
        <!-- Developer's Name and Description -->
        <div>
          <h3 class="text-xl font-bold mb-1 text-black">Brian Bulawan</h3>
          <p class="text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem nisl.
          </p>
        </div>
        <!-- Developer's Image -->
        <img src="dev-pic.jpg" alt="Developer's Picture" class="w-20 h-20 rounded-full mr-8" />
      </div>
    </div>
    <p class="text-m mr-10 ml-10 mb-10 text-center">© J&F 2023 - CSci 145 Final Project</p>
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

<style>
</style>
