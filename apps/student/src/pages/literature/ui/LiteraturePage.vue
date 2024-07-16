<template>
  <section class="literature">
    <div class="container">
      <h1 class="literature__title">Література</h1>

      <div class="literature__table">
        <TheTable :th="literatureTh" :td="literatureTd" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TheTable } from '@spacelablms/components'
import { onMounted, ref } from 'vue'
import {
  LiteratureControllerApi,
  LiteratureDtoForView,
  useApi,
} from '@/shared/api'

const literatureTh = ['Назва', 'Тип', 'Ключові слова', 'Посилання']
const literatureTd = ref<LiteratureDtoForView[]>([])

async function getLiteratureData() {
  const api = useApi(LiteratureControllerApi)
  const literatureData = await api.getAll1({ page: 0, size: 10 })

  if (literatureData.data) {
    literatureData.data.content?.forEach((item) => {
      const wordArr = item.keyWords?.map((item) => item)

      literatureTd.value.push({
        name: item.name,
        typeLiterature: item.typeLiterature,
        keyWords: wordArr,
        linkForDownload: item.linkForDownload,
      })
    })
  }
}

async function fetchDataLiterature() {
  await getLiteratureData()
}

onMounted(fetchDataLiterature)
</script>

<style lang="scss">
@import 'LiteraturePage';
</style>
