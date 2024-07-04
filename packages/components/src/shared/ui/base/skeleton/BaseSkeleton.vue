<script setup lang="ts">
interface IProps {
  modify: string
}

const props = withDefaults(defineProps<IProps>(), {
  modify: '',
})
</script>

<template>
  <div
    class="skeleton"
    :class="{ [`skeleton__${props.modify}`]: props.modify }"
  ></div>
</template>

<style lang="scss">
@import 'BaseSkeleton';
</style>
