<script setup lang="ts">
defineProps({
  newClass: {
    type: String,
  },
})

const emit = defineEmits(['send'])

const handleSubmit = () => {
  emit('send')
}
</script>

<template>
  <form class="form" :class="newClass" @submit.prevent="handleSubmit">
    <slot />
  </form>
</template>

<style lang="scss">
@import 'BaseForm';
</style>
