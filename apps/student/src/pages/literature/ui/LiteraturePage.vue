<template>
  <section class="literature">
    <div class="container">
      <h1 class="literature__title">Література</h1>

      <div class="literature__table">
        <!--        <TheTable :th="literatureTh" :td="literatureTd" />-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { TheTable, useFetchData } from '@spacelablms/components'
// import { onMounted, ref } from 'vue'
// import { LessonControllerApi } from '@/shared/api'
//
// interface ILiterature {
//   id: number
//   name: string
//   keyWords: string[]
//   linkForDownload: string
//   typeLiterature: string
// }
//
// interface ICourse {
//   id: number
//   literature: ILiterature[]
// }
//
// interface IContent {
//   course: ICourse
// }
//
// interface ILiteratureData {
//   content: IContent[]
// }
//
// interface ILiteratureTd {
//   title: string
//   type: string
//   keywords: string
//   link: string
// }
//
// const getLiteratureData = ref<ILiteratureData | null>(null)
// const literatureTd = ref<ILiteratureTd[]>([])
// const pagesNum = {
//   page: 1,
//   size: 1,
// }
// async function getLiterature() {
//   try {
//     const response = await useFetchData(
//       LessonControllerApi,
//       'getAllActive',
//       pagesNum
//     )
//     getLiteratureData.value = response.data as ILiteratureData
//
//     console.log(getLiteratureData.value)
//
//     if (getLiteratureData.value && getLiteratureData.value.content.length > 0) {
//       const literatureData = getLiteratureData.value.content[0]
//       const literature = literatureData.course.literature
//
//       literature.forEach((item) => {
//         const formattedLiterature: ILiteratureTd = {
//           title: item.name,
//           type: item.typeLiterature,
//           keywords: item.keyWords.join(', '),
//           link: item.linkForDownload,
//         }
//
//         literatureTd.value.push(formattedLiterature)
//       })
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
//
// onMounted(async () => {
//   await getLiterature()
// })
// const literatureTh = ['Назва', 'Тип', 'Ключові слова', 'Посилання']
</script>

<style lang="scss">
@import 'LiteraturePage';
</style>
