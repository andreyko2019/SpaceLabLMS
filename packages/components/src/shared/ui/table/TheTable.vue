<script setup lang="ts">
import { BaseSkeleton } from '@/shared'
interface IStudentTable {
  th: string[]
  td: {
    title: string
    time?: string
    mentor?: string
    status?: string
    link?: string
    name?: string
    type?: string
    keywords?: string
    level?: string
    description?: string
  }[]
}

defineProps<IStudentTable>()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th
          scope="col"
          v-for="(head, index) in th"
          :key="index"
          :data-title="head"
        >
          {{ head }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(tr, trInd) in td" :key="trInd">
        <th scope="row">{{ tr.title }}</th>
        <td
          v-for="([key, value], index) in Object.entries(tr)"
          :key="index"
          :data-title="th[index]"
        >
          <span v-if="key !== 'link'">
            {{ value }}
          </span>
          <BaseSkeleton modify="table" v-if="!value" />

          <div class="table__row" v-if="key === 'link' && value">
            <a class="table__link" :href="value" target="_blank">Посилання</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
@import 'TheTable';
</style>
