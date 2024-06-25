<script setup lang="ts">
interface IProps {
  modify: string
  num?: number
}

const props = withDefaults(defineProps<IProps>(), {
  modify: '',
  num: 1,
})
</script>

<template>
  <div
    class="skeleton"
    :class="{ [`skeleton__${props.modify}`]: props.modify }"
    v-for="i in props.num"
    :key="i"
  ></div>
</template>

<style lang="scss">
@import 'BaseSkeleton';
</style>
