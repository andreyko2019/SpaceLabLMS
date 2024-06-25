<script setup lang="ts">
interface IProps {
  srcset?: string
  src: string
  alt: string
}

const props = defineProps<IProps>()
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
