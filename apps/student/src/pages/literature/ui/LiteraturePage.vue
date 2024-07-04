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
import { onMounted } from 'vue'

const literatureTh = ['Назва', 'Тип', 'Ключові слова', 'Посилання']
const literatureTd = [
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
  {
    title: '',
    type: '',
    keywords: '',
    link: '',
  },
]

async function getLiteratureData() {}

async function fetchDataLiterature() {
  await getLiteratureData()
}

onMounted(fetchDataLiterature)
</script>

<style lang="scss">
@import 'LiteraturePage';
</style>
