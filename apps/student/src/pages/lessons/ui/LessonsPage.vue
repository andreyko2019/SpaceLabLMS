<template>
  <section class="lessons">
    <div class="container">
      <h1 class="lessons__title">Заняття</h1>

      <div class="lessons__active">
        <!--        <TheTable :th="lessonsTh" :td="lessonsTd" />-->
      </div>

      <div class="lessons__finished">
        <!--        <TheTable :th="lessonsFinishedTh" :td="lessonsFinishedTd" />-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { TheTable, useFetchData } from '@spacelablms/components'
// import { LessonControllerApi } from '@/shared/api'
// import { onMounted, ref } from 'vue'
//
// const getLessonsData = ref()
// const lessonsTd = ref([])
// const num = {
//   page: 1,
//   size: 1,
// }
// async function getLessons() {
//   try {
//     getLessonsData.value = await useFetchData(
//       LessonControllerApi,
//       'getAllActive',
//       num
//     )
//
//     if (getLessonsData.value.data) {
//       const lessonsData = getLessonsData.value.data.content[0]
//       const mentor = lessonsData.course.mentor.contact.name
//
//       const td = {
//         title: lessonsData.date.slice(0, 10),
//         time: '8',
//         mentor: mentor,
//         status: lessonsData.status,
//         link: lessonsData.link,
//       }
//
//       lessonsTd.value.push(td)
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
//
// onMounted(async () => {
//   await getLessons()
// })
//
// const lessonsTh = [
//   'Дата заняття',
//   'Кількість набраних годин',
//   'Ментор',
//   'Статус',
//   'Посилання',
// ]

// const lessonsTd = [
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Active',
//     link: 'https://www.google.com/',
//   },
// ]

// const lessonsFinishedTh = [
//   'Дата заняття',
//   'Кількість набраних годин',
//   'Ментор',
//   'Статус',
// ]

// const lessonsFinishedTd = [
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Finished',
//   },
//
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Finished',
//   },
//
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Finished',
//   },
//
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Finished',
//   },
//
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Finished',
//   },
//
//   {
//     title: '2020-02-20',
//     time: '8',
//     mentor: 'Dima',
//     status: 'Finished',
//   },
// ]
</script>

<style lang="scss">
@import './styles';
</style>
