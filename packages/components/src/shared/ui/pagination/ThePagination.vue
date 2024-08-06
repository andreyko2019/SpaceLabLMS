<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseButton, BaseIcon, BaseInput } from '@/shared'

interface IPagination {
  totalPage: number
}

const props = defineProps<IPagination>()
const emit = defineEmits(['change'])

const currentPage = ref(1)
const inputPage = ref(currentPage.value.toString())

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPage) {
    currentPage.value = page
    inputPage.value = currentPage.value.toString()
    emit('change', currentPage.value)
  }
}

const nextPage = () => {
  if (currentPage.value < props.totalPage) {
    goToPage(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1)
  }
}

const pageNumbers = computed(() => {
  const total = props.totalPage
  const pages = []
  const maxPagesToShow = 5

  if (total <= maxPagesToShow) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    const left = Math.max(currentPage.value - 1, 1)
    const right = Math.min(currentPage.value + 1, total)

    if (left > 1) {
      pages.push(1)
      if (left > 2) {
        pages.push('...')
      }
    }

    for (let i = left; i <= right; i++) {
      pages.push(i)
    }

    if (right < total) {
      if (right < total - 1) {
        pages.push('...')
      }
      pages.push(total)
    }
  }

  return pages
})

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  const pageNumber = parseInt(value, 10)
  if (!isNaN(pageNumber)) {
    goToPage(pageNumber)
  }
}
</script>

<template>
  <div class="pagination">
    <BaseButton
      modify="secondary"
      @click="prevPage"
      :disabled="currentPage === 1"
      class="pagination__button-prev"
    >
      <BaseIcon icon="pagination-left" />
    </BaseButton>

    <span
      class="pagination__pages"
      v-for="(page, index) in pageNumbers"
      :key="index"
      :class="{ pagination__pages_active: page === currentPage }"
      @click="page !== '...' && goToPage(+page)"
    >
      {{ page }}
    </span>

    <BaseButton
      modify="secondary"
      @click="nextPage"
      :disabled="currentPage === props.totalPage"
      class="pagination__button-next"
    >
      <BaseIcon icon="pagination-right" />
    </BaseButton>

    <div class="pagination__page">
      <span class="pagination__txt">Go to page</span>

      <div class="pagination__inp">
        <BaseInput
          type="number"
          v-model="inputPage"
          @input="handleInputChange"
          class="pagination__input"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'ThePagination';
</style>
