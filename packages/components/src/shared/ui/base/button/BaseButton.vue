<template>
  <button
    class="btn"
    :class="`btn__${modify}${disabled ? '_disabled' : ''}`"
    :type="type"
    :disabled="disabled"
  >
    {{ text }}

    <slot />
  </button>
</template>

<script setup lang="ts">
interface IButton {
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit'
  text: string | number
  modify: string
}

withDefaults(defineProps<IButton>(), {
  type: 'button',
  text: '',
  modify: 'primary',
})
</script>

<style scoped lang="scss">
@import 'BaseButton';
</style>
