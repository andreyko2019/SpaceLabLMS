<script setup lang="ts">
interface Props {
  srcset?: string
  src: string
  alt: string
}

const props = defineProps<Props>()
</script>

<template>
  <picture>
    <source :srcset="props.srcset" type="image/webp" />
    <img :src="props.src" :alt="props.alt" />
  </picture>
</template>

<style lang="scss">
@import 'styles';
</style>
