<template>
  <svg class="base-icon">
    <use :href="icon" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  icon: string
}

const props = withDefaults(defineProps<Props>(), {})

const icon = computed(() => `#${props.icon}`)
</script>

<style lang="scss" scoped>
@import 'BaseIcon';
</style>
