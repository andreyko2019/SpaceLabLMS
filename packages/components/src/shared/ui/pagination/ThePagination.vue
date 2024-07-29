<script setup lang="ts">
import { computed, ref } from 'vue'

import { BaseButton, BaseIcon } from '@/shared'

interface IPagination {
  modelValue: number
  count: number
  isDisabled?: boolean
}

const props = withDefaults(defineProps<IPagination>(), {
  isDisabled: false,
})

const emit = defineEmits(['update:modelValue'])
const isMobile = ref(window.innerWidth <= 767)

const isFirstPage = computed(() => props.modelValue === 1)
const isLastPage = computed(() => props.modelValue === props.count)

const visibleDots = computed(() => {
  if (isMobile.value) {
    return props.count > 6
  }
  return props.count > 7
})

const pageForVisibleDotsLeft = computed(() => (isMobile.value ? 3 : 4))
const visibleDotsLeft = computed(
  () => visibleDots.value && props.modelValue > pageForVisibleDotsLeft.value
)

const pageForVisibleDotsRight = computed(() => (isMobile.value ? 2 : 3))
const visibleDotsRight = computed(
  () =>
    visibleDots.value &&
    props.modelValue < props.count - pageForVisibleDotsRight.value
)

const pageForStartPages = computed(() => (isMobile.value ? 4 : 5))

const pages = computed(() => {
  if (props.modelValue < pageForStartPages.value) {
    return getStartPages()
  }

  if (props.modelValue > props.count - 3) {
    return getEndPages()
  }

  return getMiddlePages()
})

function updateModelValue(num: number) {
  if (num > 0 && num <= props.count) {
    emit('update:modelValue', num)
  }
}

function getStartPages() {
  return getStartPagesList().filter(between)
}
function getStartPagesList() {
  if (isMobile.value) {
    return [2, 3, 4]
  }
  return [2, 3, 4, 5, 6]
}

function getMiddlePages() {
  if (isMobile.value) {
    return [props.modelValue - 1, props.modelValue, props.modelValue + 1]
  }

  return [
    props.modelValue - 2,
    props.modelValue - 1,
    props.modelValue,
    props.modelValue + 1,
    props.modelValue + 2,
  ]
}

function getEndPages() {
  if (isMobile.value) {
    return [
      props.modelValue - 3,
      props.modelValue - 2,
      props.modelValue - 1,
      props.modelValue,
      props.modelValue + 1,
      props.modelValue + 2,
    ]
      .filter(between)
      .slice(-3)
  }

  return [
    props.modelValue - 5,
    props.modelValue - 4,
    props.modelValue - 3,
    props.modelValue - 2,
    props.modelValue - 1,
    props.modelValue,
    props.modelValue + 1,
    props.modelValue + 2,
  ]
    .filter(between)
    .slice(-4)
}

function between(page: number) {
  return page > 1 && page < props.count
}
</script>

<template>
  <div class="pagination" v-if="count > 0">
    <div class="pagination__pages">
      <div class="pagination__button">
        <BaseButton
          modify="secondary"
          :disabled="isDisabled || isFirstPage"
          @click="updateModelValue(modelValue - 1)"
        >
          <BaseIcon icon="arrow-left" />
        </BaseButton>
      </div>

      <BaseButton
        modify="secondary"
        :class="{ btn__secondary_active: modelValue === 1 }"
        :disabled="isDisabled || isFirstPage"
        @click="updateModelValue(1)"
        text="1"
      >
      </BaseButton>

      <span v-if="visibleDotsLeft">...</span>

      <BaseButton
        v-for="page in pages"
        :key="page"
        modify="secondary"
        :class="{ btn__secondary_active: page === modelValue }"
        :disabled="page === modelValue || isDisabled"
        @click="updateModelValue(page)"
        :text="page"
      />

      <span v-if="visibleDotsRight">...</span>

      <BaseButton
        v-if="count > 1"
        modify="secondary"
        :class="{ btn__secondary_active: count === modelValue }"
        :disabled="count === modelValue || isDisabled"
        type="button"
        @click="updateModelValue(count)"
        :text="count"
      />
      <div class="pagination__button">
        <BaseButton
          modify="secondary"
          type="button"
          :disabled="isDisabled || isLastPage"
          @click="updateModelValue(modelValue + 1)"
        >
          <BaseIcon icon="arrow-left" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'ThePagination';
</style>
