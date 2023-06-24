<template>
    <div class="w-full h-screen bg-cover fixed" style="background-image: url('/homebg.jpg');">
        <header><UpperNavbar/></header>
        <div class="w-full h-full flex">
            <aside><Sidebar/></aside>
            <main class="w-full h-fulloverflow-y-auto"><router-view/></main>
        </div>
    </div>
</template>

  <script>
  import UpperNavbar from '@/components/UpperNav.vue'
  import Sidebar from '@/components/SideNav.vue'
  
  export default {
  components: {
    UpperNavbar,
    Sidebar,
  }
  }
  </script>