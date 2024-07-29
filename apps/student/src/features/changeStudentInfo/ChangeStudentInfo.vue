<script setup lang="ts">
import { BaseForm, BaseButton } from '@spacelablms/components'

const test = () => {
  console.log(123)
}
</script>

<template>
  <BaseForm @send="test">
    gkbrekghekrghekrgr
    <BaseButton class="change-info__btn-save" type="submit" text="Зберегти" />
  </BaseForm>
</template>

<style lang="scss">
@import 'ChangeStudentInfo';
</style>
