<template>
  <section class="tasks">
    <div class="container">
      <h1 class="tasks__title">Завдання</h1>

      <div class="tasks__sub">
        <router-link to="">Карточка завдання</router-link>
      </div>

      <div class="tasks__table">
        <TheTable :th="tasksTh" :td="taskTd" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TheTable } from '@spacelablms/components'
// import { onMounted, ref } from 'vue'
// import { LessonControllerApi } from '@/shared/api'
//
// const getDasksData = ref()
// const tasksTd = ref([])
//
// const pagesNum = {
//   page: 1,
//   size: 1,
// }

// async function getTasks() {
//   try {
//     getDasksData.value = await useFetchData(
//       LessonControllerApi,
//       'getAllActive',
//       pagesNum
//     )
//
//     if (getDasksData.value.data) {
//       const tasksData = getDasksData.value.data.content[0]
//       const tasks = tasksData.course.tasks
//
//       tasks.forEach((item) => {
//         const td = {
//           title: item.name,
//           level: item.level,
//           status: item.status,
//           description: item.description,
//         }
//
//         tasksTd.value.push(td)
//       })
//
//       console.log(tasks)
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
// onMounted(async () => {
//   await getTasks()
// })

const tasksTh = ['Назва', 'Рівень', 'Статус ', 'Ціль завдання']
const taskTd = [
  {
    title: '',
    type: '',
    status: '',
    name: '',
  },
]
</script>

<style lang="scss">
@import './styles';
</style>
