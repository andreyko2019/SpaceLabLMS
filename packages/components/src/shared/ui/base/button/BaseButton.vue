<template>
  <button class="base-button" :type="type">
    <span class="base-button__text">{{ text }}</span>

    <slot />
  </button>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router'

interface IButton {
  disabled?: boolean
  loading?: boolean
  tag?: 'button' | 'a' | 'RouterLink'
  href?: string | null
  to?: RouteLocationRaw | null
  type?: 'button' | 'submit'
  text: string
}

withDefaults(defineProps<IButton>(), {
  tag: 'button',
  href: null,
  to: null,
  type: 'button',
  text: '',
})
</script>

<style scoped lang="scss">
@import 'BaseButton';
</style>
