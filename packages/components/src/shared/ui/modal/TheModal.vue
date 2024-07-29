<script setup lang="ts">
import { BaseIcon } from '@/shared'

interface IProps {
  title?: string
  className?: string
}
defineProps<IProps>()

const emit = defineEmits(['close'])
function close() {
  emit('close')
}
</script>

<template>
  <teleport to=".wrapper">
    <div class="modal" :class="className">
      <div class="modal__content">
        <div class="modal__row">
          <div class="modal__close" @click="close">
            <BaseIcon icon="close" />
          </div>
        </div>

        <h3 class="modal__title" v-if="title">{{ title }}</h3>

        <slot />
      </div>
    </div>
  </teleport>
</template>

<style lang="scss">
@import 'TheModal';
</style>
