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
      <h2 class="text-5xl font-bold mt-4 text-center text-amber-400">FINANCIAL REPORT</h2>
    </div>

    <!-- Financial Report Container -->
    <div class="flex justify-center mt-20">
      <!-- Previous Month Button -->
      <button
        class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-l"
        @click="goToPreviousMonth"
      >
        &lt;
      </button>

      <!-- Month Display -->
      <div
        class="bg-white text-2xl font-bold py-2 px-4 rounded flex justify-center items-center ml-20 mr-20"
      >
        {{ currentMonth }}
      </div>

      <!-- Next Month Button -->
      <button
        class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-r"
        @click="goToNextMonth"
      >
        &gt;
      </button>
    </div>

    <!-- Monthly Chart Placeholder -->
    <div class="mt-10 w-screen text-center">
      <canvas ref="chartCanvas"></canvas>
    </div>

    <!-- Weekly Charts Container -->
    <div class="flex justify-center m-10">
      <div class="border-4 border-amber-500 p-2 rounded">
        <div class="grid grid-cols-2 gap-3">
          <!-- Weekly Chart 1 -->
          <div>
            <canvas ref="weeklyChart1"></canvas>
          </div>

          <!-- Weekly Chart 2 -->
          <div>
            <canvas ref="weeklyChart2"></canvas>
          </div>

          <!-- Weekly Chart 3 -->
          <div>
            <canvas ref="weeklyChart3"></canvas>
          </div>

          <!-- Weekly Chart 4 -->
          <div>
            <canvas ref="weeklyChart4"></canvas>
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
              <th class="border border-amber-500 px-4 py-2">Date</th>
              <th class="border border-amber-500 px-4 py-2">Data 1</th>
              <th class="border border-amber-500 px-4 py-2">Data 2</th>
              <th class="border border-amber-500 px-4 py-2">Data 3</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableData" :key="row.id">
              <td class="border border-amber-500 px-4 py-2">{{ row.date }}</td>
              <td class="border border-amber-500 px-4 py-2">{{ row.data1 }}</td>
              <td class="border border-amber-500 px-4 py-2">{{ row.data2 }}</td>
              <td class="border border-amber-500 px-4 py-2">{{ row.data3 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UpperNav from '@/components/UpperNav.vue'
import Chart from 'chart.js/auto'

export default {
  components: {
    UpperNav
  },
  data() {
    return {
      currentMonth: '',
      tableData: []
    }
  },
  mounted() {
    this.createMonthlyChart()
    this.createWeeklyCharts()
    this.fetchTableData()
  },
  methods: {
    fetchTableData() {
      console.log('Fetching table data...')
      // Simulate fetching data from an API
      setTimeout(() => {
        // Dummy data for demonstration
        const newData = [
          { id: 1, date: '2023-05-01', data1: 10, data2: 20, data3: 30 },
          { id: 2, date: '2023-05-02', data1: 15, data2: 25, data3: 35 },
          { id: 3, date: '2023-05-03', data1: 12, data2: 22, data3: 32 }
          // Add more data as needed
        ]

        this.tableData = newData // Update the table data
      }, 1000) // Simulate a delay of 1 second
    },
    createWeeklyCharts() {
      const chart1Canvas = this.$refs.weeklyChart1
      const chart2Canvas = this.$refs.weeklyChart2
      const chart3Canvas = this.$refs.weeklyChart3
      const chart4Canvas = this.$refs.weeklyChart4

      // Dummy data for demonstration
      const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      const datasets = [
        {
          label: 'Chart 1',
          data: [30],
          backgroundColor: ['red']
        },
        {
          label: 'Chart 2',
          data: [20],
          backgroundColor: ['green']
        },
        {
          label: 'Chart 3',
          data: [10],
          backgroundColor: ['blue']
        },
        {
          label: 'Chart 4',
          data: [40],
          backgroundColor: ['orange']
        }
      ]

      new Chart(chart1Canvas, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [datasets[0]]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // Hide the labels
            }
          }
        }
      })

      new Chart(chart2Canvas, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [datasets[1]]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // Hide the labels
            }
          }
        }
      })

      new Chart(chart3Canvas, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [datasets[2]]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // Hide the labels
            }
          }
        }
      })

      new Chart(chart4Canvas, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [datasets[3]]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // Hide the labels
            }
          }
        }
      })
    },
    createMonthlyChart() {
      const chartCanvas = this.$refs.chartCanvas
      const ctx = chartCanvas.getContext('2d')

      // Dummy data for demonstration
      const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ['red', 'green', 'blue']
          }
        ]
      }

      new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      })
    },
    goToNextMonth() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const currentMonthIndex = months.indexOf(this.currentMonth)
      const nextMonthIndex = (currentMonthIndex + 1) % months.length
      this.currentMonth = months[nextMonthIndex]
    },
    goToPreviousMonth() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const currentMonthIndex = months.indexOf(this.currentMonth)
      const previousMonthIndex = (currentMonthIndex - 1 + months.length) % months.length
      this.currentMonth = months[previousMonthIndex]
    }
  }
}
</script>
