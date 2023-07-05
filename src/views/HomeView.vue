<template>
  <div>
    <!-- Upper Buttons -->
    <div class="sticky-buttons flex justify-between items-end px-4 bg-black shadow-lg">
      <div>
        <side-nav></side-nav>
      </div>
      <div>
        <img class="block lg:hidden h-8 w-auto" src="/logo2.png" alt="Logo">
        <img class="hidden lg:block p-1 h-14 w-auto" src="/logo2.png" alt="Logo">
      </div>
      <div>
        <button @click="navigateTo('/notifications')" class="bg-transparent border-none">
          <img src="notification.svg" alt="Right Button" class="h-10 w-10" />
        </button>
      </div>
    </div>

    <!-- Particles Background -->
    <div id="particles" class="particles-container"></div>

    <!-- Budget & Expenses Container -->
    <div class="flex flex-col justify-center items-center h-screen">
      <!-- Budget -->
      <div @click="navigateTo('/budget')"
        class="transform duration-500 hover:scale-110 shadow hover:shadow-md clickable-card text-center border border-black rounded-2xl p-3 pl-9 pr-9 mb-6 shadow-lg">
        <h2 class="text-2xl font-bold mb-1 pl-8">Remaining Balance</h2>
        <p class="text-xl">{{ monthBudgetLeft }}</p>
      </div>
      <!-- Expenses -->
      <div @click="navigateTo('/expenses-view')"
        class="transform duration-500 hover:scale-110 shadow hover:shadow-md clickable-card text-center border border-black rounded-2xl pl-7 pr-7 pt-5 pb-4 shadow-lg">
        <h2 class="text-2xl font-bold mb-1">This Week's Expenses</h2>
        <p class="text-xl p-2">{{ thisWeeksExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">This Month's Expenses</h2>
        <p class="text-xl p-2">{{ thisMonthsExpenses }}</p>
        <h2 class="text-2xl font-bold mb-1">Last Month's Expenses</h2>
        <p class="text-xl p-2">{{ lastMonthsExpenses }}</p>
      </div>
    </div>

    <!-- Add Expenses Button -->
    <div class="sticky-container bg-black">
      <router-link to="/add-expenses" class="image-button">
        <img src="add-expenses.svg" alt="Image Button" class="h-10 w-10" />
      </router-link>
    </div>
  </div>
</template>

<script>
import AddExpenses from '@/views/AddExpenses.vue'
import Budget from '@/views/Budget.vue'
import ExpensesView from '@/views/ExpensesView.vue'
import SideNav from '@/components/SideNav.vue'
import Notifications from '@/views/Notifications.vue'
import getDb from "@/composable/getDb.js";
import getMonthBudget from '@/composable/getMonthBudget.js'

export default {
  mounted() {
    this.initializeParticles();
  },
  methods: {
    initializeParticles() {
      particlesJS("particles", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    },
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  components: {
    AddExpenses,
    Budget,
    ExpensesView,
    SideNav,
    Notifications
  },
  setup() {
    const {
      expenses,
      error,
      thisMonthsExpenses,
      thisWeeksExpenses,
      lastMonthsExpenses,
      loadDb,
    } = getDb();
    loadDb();

    const { monthBudgetLeft, loadMonthBudget } = getMonthBudget();
    loadMonthBudget();

    return {
      expenses,
      thisMonthsExpenses,
      thisWeeksExpenses,
      lastMonthsExpenses,
      monthBudgetLeft,
      error,
    };
  },
}
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

.sticky-buttons {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.image-button {
  display: flex;
  align-items: center;
}

.clickable-card {
  cursor: pointer;
}

.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.bg-image {
  background-image: url('/homebg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.bg-image .grid {
  flex-grow: 1;
}

.shadow-lg {
  box-shadow: 0 5px 7px rgba(80, 79, 79, 0.1), 0 5px 7px rgba(93, 93, 93, 0.6);
}
</style>
