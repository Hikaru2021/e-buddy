<!-- 
  NOTE:

  The charts and tables are just dummy. 
  But just so you have an idea the layout of this page, I created those.
  Please feel free to edit it but please do not stray from the layout if possible.
 -->
<template>
  <div>
    <upper-nav></upper-nav>
    <div class="flex flex-col items-center">
      <!-- Financial Report Text -->
      <h2 class="text-5xl font-bold mt-4 text-center text-black">FINANCIAL REPORT</h2>
    </div>

    <!-- Financial Report Container -->
    <div class="flex justify-center mt-20">
      <!-- Previous Month Button -->
      <button class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-l" @click="changeMonth(0)">
        &lt;
      </button>

      <!-- Month Display -->
      <div class="bg-white text-2xl font-bold py-2 px-4 rounded flex justify-center items-center ml-20 mr-20">
        {{ monthNames[currentMonth] }}
      </div>

      <!-- Next Month Button -->
      <button class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-r" :disabled="isDisabled"
        id="button" @click="changeMonth(1)">
        &gt;
      </button>
    </div>

    <!-- Monthly Chart Placeholder -->
    <div class="flex justify-center items-center mt-10 w- text-center">
      <Pie v-if="render" :data="month" :options="options" />
    </div>

    <!-- Weekly Charts Container -->
    <div class="flex justify-center m-10">
      <div class="border-4 border-amber-500 p-2 rounded">
        <div class="grid grid-cols-2 gap-3">
          <!-- Weekly Chart 1 -->
          <div>
            <Pie v-if="render" :data="week1" :options="options" />
            <p class="text-center">Week 1</p>
          </div>

          <!-- Weekly Chart 2 -->
          <div>
            <Pie v-if="render" :data="week2" :options="options" />
            <p class="text-center">Week 2</p>
          </div>

          <!-- Weekly Chart 3 -->
          <div>
            <Pie v-if="render" :data="week3" :options="options" />
            <p class="text-center">Week 3</p>
          </div>

          <!-- Weekly Chart 4 -->
          <div>
            <Pie v-if="render" :data="week4" :options="options" />
            <p class="text-center">Week 4</p>
          </div>
          <!-- Weekly Chart 5 -->
          <div>
            <Pie v-if="render" :data="week5" :options="options" />
            <p class="text-center">Week5</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Expenses Table -->
    <div class="m-10 flex justify-center">
      <div class="w-80% max-w-2xl">
        <table class="border-collapse">
          <thead>
            <tr>
              <th class="border border-amber-500 px-4 py-2">Note</th>
              <th class="border border-amber-500 px-4 py-2">Type</th>
              <th class="border border-amber-500 px-4 py-2">Date</th>
              <th class="border border-amber-500 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.id">
              <td class="border border-amber-500 px-4 py-2">{{ expense.name }}</td>
              <td class="border border-amber-500 px-4 py-2">{{ expense.type }}</td>
              <td class="border border-amber-500 px-4 py-2">{{ expense.dateString }}</td>
              <td class="border border-amber-500 px-4 py-2">{{ expense.amount }}</td>
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

<script>
export default {
  components: {
    UpperNav
  }
  // },
  // data() {
  //   return {
  //     currentMonth: '',
  //     tableData: []
  //   }
  // },
  // mounted() {
  //   this.createMonthlyChart()
  //   this.createWeeklyCharts()
  //   this.fetchTableData()
  // },
  // methods: {
  //   fetchTableData() {
  //     console.log('Fetching table data...')
  //     // Simulate fetching data from an API
  //     setTimeout(() => {
  //       // Dummy data for demonstration
  //       const newData = [
  //         { id: 1, date: '2023-05-01', data1: 10, data2: 20, data3: 30 },
  //         { id: 2, date: '2023-05-02', data1: 15, data2: 25, data3: 35 },
  //         { id: 3, date: '2023-05-03', data1: 12, data2: 22, data3: 32 }
  //         // Add more data as needed
  //       ]

  //       this.tableData = newData // Update the table data
  //     }, 1000) // Simulate a delay of 1 second
  //   },
  //   createWeeklyCharts() {
  //     const chart1Canvas = this.$refs.weeklyChart1
  //     const chart2Canvas = this.$refs.weeklyChart2
  //     const chart3Canvas = this.$refs.weeklyChart3
  //     const chart4Canvas = this.$refs.weeklyChart4

  //     // Dummy data for demonstration
  //     const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  //     const datasets = [
  //       {
  //         label: 'Chart 1',
  //         data: [30],
  //         backgroundColor: ['red']
  //       },
  //       {
  //         label: 'Chart 2',
  //         data: [20],
  //         backgroundColor: ['green']
  //       },
  //       {
  //         label: 'Chart 3',
  //         data: [10],
  //         backgroundColor: ['blue']
  //       },
  //       {
  //         label: 'Chart 4',
  //         data: [40],
  //         backgroundColor: ['orange']
  //       }
  //     ]

  //     new Chart(chart1Canvas, {
  //       type: 'pie',
  //       data: {
  //         labels: labels,
  //         datasets: [datasets[0]]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: {
  //           legend: {
  //             display: false // Hide the labels
  //           }
  //         }
  //       }
  //     })

  //     new Chart(chart2Canvas, {
  //       type: 'pie',
  //       data: {
  //         labels: labels,
  //         datasets: [datasets[1]]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: {
  //           legend: {
  //             display: false // Hide the labels
  //           }
  //         }
  //       }
  //     })

  //     new Chart(chart3Canvas, {
  //       type: 'pie',
  //       data: {
  //         labels: labels,
  //         datasets: [datasets[2]]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: {
  //           legend: {
  //             display: false // Hide the labels
  //           }
  //         }
  //       }
  //     })

  //     new Chart(chart4Canvas, {
  //       type: 'pie',
  //       data: {
  //         labels: labels,
  //         datasets: [datasets[3]]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: {
  //           legend: {
  //             display: false // Hide the labels
  //           }
  //         }
  //       }
  //     })
  //   },
  //   createMonthlyChart() {
  //     const chartCanvas = this.$refs.chartCanvas
  //     const ctx = chartCanvas.getContext('2d')

  //     // Dummy data for demonstration
  //     const data = {
  //       labels: ['Label 1', 'Label 2', 'Label 3'],
  //       datasets: [
  //         {
  //           data: [30, 50, 20],
  //           backgroundColor: ['red', 'green', 'blue']
  //         }
  //       ]
  //     }

  //     new Chart(ctx, {
  //       type: 'pie',
  //       data: data,
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false
  //       }
  //     })
  //   },
  //   goToNextMonth() {
  //     const months = [
  //       'January',
  //       'February',
  //       'March',
  //       'April',
  //       'May',
  //       'June',
  //       'July',
  //       'August',
  //       'September',
  //       'October',
  //       'November',
  //       'December'
  //     ]
  //     const currentMonthIndex = months.indexOf(this.currentMonth)
  //     const nextMonthIndex = (currentMonthIndex + 1) % months.length
  //     this.currentMonth = months[nextMonthIndex]
  //   },
  //   goToPreviousMonth() {
  //     const months = [
  //       'January',
  //       'February',
  //       'March',
  //       'April',
  //       'May',
  //       'June',
  //       'July',
  //       'August',
  //       'September',
  //       'October',
  //       'November',
  //       'December'
  //     ]
  //     const currentMonthIndex = months.indexOf(this.currentMonth)
  //     const previousMonthIndex = (currentMonthIndex - 1 + months.length) % months.length
  //     this.currentMonth = months[previousMonthIndex]
  //   }
  // }
}
</script>