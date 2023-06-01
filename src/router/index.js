import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import RegisterView from '../views/RegisterView.vue'
//import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddExpenses from '../views/AddExpenses.vue'
import Budget from '@/views/Budget.vue'
import BillReminders from '@/views/BillReminders.vue'
import SetReminders from '@/views/SetReminders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/add-expenses',
      name: 'AddExpenses',
      component: AddExpenses
    },
    {
      path: '/budget',
      name: 'Budget',
      component: Budget
    },
    {
      path: '/bill-reminders',
      name: 'BillReminders',
      component: BillReminders
    },
    {
      path: '/set-reminders',
      name: 'SetReminders',
      component: SetReminders
    }
  ]
})

export default router
