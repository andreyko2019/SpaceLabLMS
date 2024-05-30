<template>
  <VButton
      class="button-submit"
      :class="isSubmitting && 'submitting'"
      type="submit"
      :txt="txt"
      :disabled="isDisabled || isSubmitting"
  >
  </VButton>
</template>

<script setup lang="ts">
import { VButton } from '../base'

interface IButtonSubmit {
  txt?: string
  isSubmitting: boolean
  isDisabled?: boolean
}

withDefaults(defineProps<IButtonSubmit>(), {
  txt: 'Submit',
  isDisabled: false
})
</script>

<style lang="scss">
@import 'styles';
</style>
