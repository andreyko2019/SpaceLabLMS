<template>
  <form
      class="form"
      novalidate
      @submit="handlerSubmit"
  >
    <slot />

    <div class="form__buttons">
      <slot name="button-submit">
        <ButtonSubmit
            :txt="buttonSubmitTxt"
            :is-submitting="isSubmitting"
        />
      </slot>
      <slot name="additional-buttons" />
    </div>
  </form>
</template>

<script setup lang="ts">


import {ButtonSubmit} from "../../../buttons/button-submit";

interface IVForm {
  handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>
  isSubmitting?: boolean
  buttonSubmitTxt?: string
}

withDefaults(defineProps<IVForm>(), {
  isSubmitting: false,
  buttonSubmitTxt: undefined
})
</script>

<style lang="scss">
@import 'styles';
</style>
