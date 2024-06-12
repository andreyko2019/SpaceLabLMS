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

const literatureTh = ['Назва', 'Тип', 'Ключові слова', 'Посилання']

const literatureTd = [
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
  {
    title: 'The Clean Coder',
    type: 'Книга',
    keywords: 'java collection',
    link: 'https://app.moqups.com/0aewtgqqhsMdvmwc7hBigmvcQlUgLDGl/edit/page/a64e3e8b0',
  },
]
</script>

<style lang="scss">
@import './styles';
</style>
