<template>
  <section class="lessons">
    <div class="container">
      <h1 class="lessons__title">Заняття</h1>

      <div class="lessons__active">
        <TheTable :th="lessonsTh" :td="lessonsTd" />
      </div>

      <div class="lessons__finished">
        <TheTable :th="lessonsFinishedTh" :td="lessonsFinishedTd" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TheTable } from '@spacelablms/components'
import { onMounted } from 'vue'

const lessonsTh: string[] = [
  'Дата заняття',
  'Кількість набраних годин',
  'Ментор',
  'Статус',
  'Посилання',
]

const lessonsTd = [
  {
    title: '',
    time: '',
    mentor: '',
    status: '',
    link: '',
  },
]

const lessonsFinishedTh: string[] = [
  'Дата заняття',
  'Кількість набраних годин',
  'Ментор',
  'Статус',
]

const lessonsFinishedTd = [
  {
    title: '',
    time: '',
    mentor: '',
    status: '',
  },

  {
    title: '',
    time: '',
    mentor: '',
    status: '',
  },

  {
    title: '',
    time: '',
    mentor: '',
    status: '',
  },

  {
    title: '',
    time: '',
    mentor: '',
    status: '',
  },

  {
    title: '',
    time: '',
    mentor: '',
    status: '',
  },

  {
    title: '',
    time: '',
    mentor: '',
    status: '',
  },
]

async function getActiveLessons() {}

async function getFinishedLessons() {}

async function fetchDataLessons() {
  await getActiveLessons()
  await getFinishedLessons()
}

onMounted(fetchDataLessons)
</script>

<style lang="scss">
@import './styles';
</style>
