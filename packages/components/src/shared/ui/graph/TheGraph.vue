<script setup lang="ts">
// import { BaseDropdown } from '@/shared'
// import { computed, onMounted, ref } from 'vue'
// import { Chart, ChartTypeRegistry } from 'chart.js/auto'
//
// interface IConfig {
//   type: keyof ChartTypeRegistry
//   data: {
//     datasets: {
//       label: string
//       data: number[]
//       fill: boolean
//       backgroundColor: string
//     }[]
//   }
//   options: {
//     responsive: boolean
//     maintainAspectRatio: boolean
//     scales: {
//       x: {
//         stacked: boolean
//       }
//       y: {
//         stacked: boolean
//       }
//     }
//   }
// }
//
// const months: string[] = [
//   'Січень',
//   'Лютий',
//   'Березень',
//   'Квітень',
//   'Травень',
//   'Червень',
//   'Липень',
//   'Серпень',
//   'Вересень',
//   'Жовтень',
//   'Листопад',
//   'Грудень',
// ]
// const currentMonth = new Date().getMonth()
// const pastMonths = months.slice(0, currentMonth + 1)
// const monthName = ref(months[currentMonth])
//
// const getDaysInMonth = (year: number, month: number) => {
//   return new Date(year, month + 1, 0).getDate()
// }
//
// const days = computed(() => {
//   const year = new Date().getFullYear()
//   const monthIndex = pastMonths.indexOf(monthName.value)
//   const dayCount = getDaysInMonth(year, monthIndex)
//   const daysArray = []
//
//   for (let i = 1; i <= dayCount; i++) {
//     daysArray.push(`${i}`)
//   }
//   return daysArray
// })
//
// const data = ref({
//   labels: days.value,
//   datasets: [
//     {
//       label: 'Не оплачені години',
//       data: [3, 4, 6, 7, 9, 8, 10],
//       fill: false,
//       backgroundColor: '#7798BF',
//     },
//     {
//       label: 'Оплачені години',
//       data: [1, 0.3, 2],
//       fill: false,
//       backgroundColor: 'rgb(75, 192, 192)',
//     },
//   ],
// })
//
// // todo типізація
// const chartRef = ref(null as HTMLCanvasElement | null)
// const config: IConfig = {
//   type: 'bar',
//   data: data.value,
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   },
// }
//
// function initGraph() {
//   if (chartRef.value) {
//     const ctx = chartRef.value.getContext('2d')
//     if (ctx) {
//       new Chart(ctx, config)
//     }
//   }
// }
//
// onMounted(() => {
//   initGraph()
// })
</script>

<template>
  <div class="graph__month">
    <!--    <BaseDropdown :val="monthName" :options="pastMonths" label="Місяць" />-->
  </div>

  <div class="graph__chart">
    <canvas ref="chartRef" class="graph__canvas"></canvas>
  </div>
</template>

<style lang="scss">
@import 'styles';
</style>
