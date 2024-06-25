<script setup lang="ts">
const emit = defineEmits(['update:value', 'theme'])

const updateVal = (e: Event) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    emit('update:value', target.value)
  }
}

const toggleTheme = () => {
  emit('theme')
}
</script>

<template>
  <label class="switch">
    <input class="switch__inp" type="checkbox" id="slider" @input="updateVal" />
    <span class="switch__slider round" @click="toggleTheme"></span>
  </label>
</template>

<style lang="scss">
@import './BaseSwitch';
</style>
