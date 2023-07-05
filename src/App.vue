<template>
  <div>
    <side-nav></side-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'

export default {
  components: {
    SideNav
  }
}
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
