<script setup lang="ts">
import { BaseIcon } from '@/shared'
interface IStudentTable {
  th: string[]
  td: Array<{ [key: string]: any }>
}

defineProps<IStudentTable>()

const emit = defineEmits(['action'])

const handleAction = (id: string, action: string) => {
  emit('action', id, action)
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
        <td
          v-for="([key, value], index) in Object.entries(tr)"
          :key="index"
          :data-title="th[index]"
        >
          <span v-if="key !== 'link' && key !== 'icon'">
            {{ value }}
          </span>

          <Skeletor v-if="!value" />

          <div class="table__row" v-if="key === 'link' && value">
            <!-- <a class="table__link" :href="value" target="_blank">Посилання</a> -->
          </div>

          <div class="table__btn" v-if="key === 'icon'">
            <button
              @click="handleAction(tr.id, item)"
              v-for="(item, index) in value"
              :key="index"
            >
              <BaseIcon :icon="item" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
@import 'TheTable';
</style>
