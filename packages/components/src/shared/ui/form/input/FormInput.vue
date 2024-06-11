<template>
  <div class="form-input">
    <label v-if="label" class="form-input__label" :for="name">
      {{ label }}
    </label>

    <div class="form-input__field-wrap">
      <input
        class="form-input__field"
        ref="input"
        :type="type"
        :name="name"
        :id="name"
        :required="required"
        :placeholder="placeholder"
        :disabled="isDisabled"
        autocomplete="off"
        v-model="inputValue"
      />
    </div>
    <small v-if="error" class="form-input__error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import type { TInputType } from './types'

interface FormInput {
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string
  required?: boolean
  type?: TInputType
  error?: string
}

const inputValue = defineModel<string | number>()

withDefaults(defineProps<FormInput>(), {
  placeholder: '',
  label: '',
  name: '',
  type: 'text',
  error: '',
  required: false,
})
</script>

<style scoped lang="scss">
@import 'FormInput';
</style>
