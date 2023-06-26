<!-- 
  NOTE:

  The charts and tables are just dummy. 
  But just so you have an idea the layout of this page, I created those.
  Please feel free to edit it but please do not stray from the layout if possible.
 -->
<template>
  <upper-nav></upper-nav>
  <div class="flex flex-col items-center h-screen">
    <div class="flex flex-col items-center">
      <!-- Financial Report Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">FINANCIAL REPORT</h2>
    </div>

    <!-- Financial Report Container -->
    <div class="flex justify-center mt-20">
      <!-- Previous Month Button -->
      <button class="bg-black hover:opacity-60 text-white font-bold py-2 px-4 rounded-l shadow-md"
        @click="changeMonth(0)">
        &lt;
      </button>

      <!-- Month Display -->
      <div class="bg-white text-2xl font-bold py-2 px-4 rounded flex justify-center items-center ml-20 mr-20">
        {{ monthNames[currentMonth] }}
      </div>

      <!-- Next Month Button -->
      <button class="bg-black hover:opacity-60 text-white font-bold py-2 px-4 rounded-r shadow-md" :disabled="isDisabled"
        id="button" @click="changeMonth(1)">
        &gt;
      </button>
    </div>

    <!-- Monthly Chart Placeholder -->
    <div class="flex justify-center items-center mt-10 w-1/4">
      <div class="flex justify-center items-center">
        <Pie v-if="render" :data="month" :options="options" />
      </div>
    </div>

    <!-- Weekly Charts Container -->
    <div class="flex justify-center m-10" style="width:50%;">
      <div class="border-2 border-black p-2 rounded" style="width:75%; height: 100%;">
        <div class="grid grid-cols-2 gap-1 justify-items-center">
          <!-- Weekly Chart 1 -->
          <div class="w-2/4">
            <Pie v-if="render" :data="week1" :options="options" />
            <p class="text-center">Week 1</p>
          </div>

          <!-- Weekly Chart 2 -->
          <div class="w-2/4">
            <Pie v-if="render" :data="week2" :options="options" />
            <p class="text-center">Week 2</p>
          </div>

          <!-- Weekly Chart 3 -->
          <div class="w-2/4">
            <Pie v-if="render" :data="week3" :options="options" />
            <p class="text-center">Week 3</p>
          </div>

          <!-- Weekly Chart 4 -->
          <div class="w-2/4">
            <Pie v-if="render" :data="week4" :options="options" />
            <p class="text-center">Week 4</p>
          </div>
          <!-- Weekly Chart 5 -->
          <div class="w-2/4">
            <Pie v-if="render" :data="week5" :options="options" />
            <p class="text-center">Week 5</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Expenses Table -->
    <div class="m-5 flex justify-center">
      <div class="w-80% max-w-2xl">
        <table class="border-collapse mx-auto">
          <thead>
            <tr>
              <th class="border-2 border-black px-20 py-2">Note</th>
              <th class="border-2 border-black px-20 py-2">Type</th>
              <th class="border-2 border-black px-20 py-2">Date</th>
              <th class="border-2 border-black py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.id">
              <td class="border border-black px-4 py-2">{{ expense.name }}</td>
              <td class="border border-black px-4 py-2">{{ expense.type }}</td>
              <td class="border border-black px-4 py-2">{{ expense.dateString }}</td>
              <td class="border border-black px-4 py-2">{{ expense.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import UpperNav from '@/components/UpperNav.vue';
import getDb from "../composable/getFinancialStatement";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "vue-chartjs";
import { onMounted } from "vue";
import { ref } from "vue";

ChartJS.register(ArcElement, Tooltip);

const { expenses, month, week1, week2, week3, week4, week5, error, load } =
  getDb();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const offset = ref(0);
const currentMonth = ref((new Date().getMonth() + offset.value) % 12);
const isDisabled = ref(true);

var render = false;
onMounted(() => {
  load(offset.value);
  render = true;
});

const options = {
  responsive: true,
  maintainAspectRatio: true,
};

// Define the week2 variable and populate it with data

function changeMonth(x) {
  if (x == 0) {
    offset.value--;
    if (currentMonth.value == 0) currentMonth.value = 11;
    else currentMonth.value--;
  } else {
    offset.value++;
    if (currentMonth.value == 11) currentMonth.value = 0;
    else currentMonth.value++;
  }
  load(offset.value);
  if (offset.value == 0) isDisabled.value = true;
  else isDisabled.value = false;
}
</script>

<style>
table {
  table-layout: fixed;
  width: 100%;
}
</style>