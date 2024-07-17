<script setup lang="ts">
import { BaseSkeleton } from '@/shared'
interface IStudentTable {
  th: string[]
  td: Array<{ [key: string]: string | boolean | undefined }>
}

defineProps<IStudentTable>()

const emit = defineEmits(['action'])

const handle = () => {
  emit('action')
}
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
        <th scope="row">{{ tr.main }}</th>
        <td
          v-for="([key, value], index) in Object.entries(tr)"
          :key="index"
          :data-title="th[index]"
        >
          <span v-if="key !== 'link' && key !== 'icon'">
            {{ value }}
          </span>
          <BaseSkeleton modify="table" v-if="!value" />

          <div class="table__row" v-if="key === 'link' && value">
            <!--            <a class="table__link" :href="value" target="_blank">Посилання</a>-->
          </div>

          <div class="table__btn" v-if="key === 'icon'">
            <button @click="handle">Edit</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
@import 'TheTable';
</style>
