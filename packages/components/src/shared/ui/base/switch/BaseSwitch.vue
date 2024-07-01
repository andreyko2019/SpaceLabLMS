<script setup lang="ts">
interface IProps {
  val: boolean
}

const props = defineProps<IProps>()
const emit = defineEmits(['theme'])

const changeTheme = () => {
  emit('theme')
}
</script>

<template>
  <div class="switch" @click="changeTheme()">
    <div
      class="switch__theme"
      :class="{ 'switch__theme_active': props.val }"
    ></div>
  </div>
</template>

<style lang="scss">
@import './BaseSwitch';
</style>
