<template>
  <button
      class="button reset"
      type="button"
  >

    <span class="button__text label">{{ txt }}</span>

    <slot />
  </button>
</template>

<script setup lang="ts">



interface IButton {
  txt: string
}

withDefaults(defineProps<IButton>(), {})
</script>

<style lang="scss">
@import 'styles';
</style>
