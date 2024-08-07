<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseButton, BaseIcon } from '@/shared'

interface IPagination {
  totalPage: number,
}

const props = defineProps<IPagination>()
const emit = defineEmits(['change'])

const currentPage = ref(1)

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPage) {
    currentPage.value = page
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

    if (left > 2) {
      pages.push(1)
      pages.push('...')
    }

    for (let i = left; i <= right; i++) {
      pages.push(i)
    }

    if (right < total - 1) {
      pages.push('...')
      pages.push(total)
    }
  }

  return pages
})
</script>

<template>
  <div class="pagination">
    <BaseButton
      modify="secondary"
      @click="prevPage"
      :disabled="currentPage === 1"
      class="pagination__button-prev"
    >
      <BaseIcon icon="arrow-left" />
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
      <BaseIcon icon="arrow-left" />
    </BaseButton>
  </div>
</template>

<style lang="scss">
@import 'ThePagination';
</style>
