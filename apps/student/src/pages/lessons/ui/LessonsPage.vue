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

const lessonsTh = [
  'Дата заняття',
  'Кількість набраних годин',
  'Ментор',
  'Статус',
  'Посилання',
]

const lessonsTd = [
  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Active',
    link: 'https://www.google.com/',
  },
]

const lessonsFinishedTh = [
  'Дата заняття',
  'Кількість набраних годин',
  'Ментор',
  'Статус',
]

const lessonsFinishedTd = [
  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Finished',
  },

  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Finished',
  },

  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Finished',
  },

  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Finished',
  },

  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Finished',
  },

  {
    title: '2020-02-20',
    time: '8',
    mentor: 'Dima',
    status: 'Finished',
  },

]
</script>

<style lang="scss">
@import './styles';
</style>
