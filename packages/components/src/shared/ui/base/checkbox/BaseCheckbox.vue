<template>
  <label class="base-checkbox" :for="name" :class="classes">
    <input
      type="checkbox"
      class="base-checkbox__input"
      :id="name"
      :checked="modelValue"
      :disabled="isDisabled"
      @change="onChange"
    />

    <span class="base-checkbox__icon-wrap">
      <IconChecked class="base-checkbox__icon-checked" />
    </span>

    <span class="base-checkbox__label">
      {{ label }}
    </span>

    <small v-if="error" class="base-checkbox__error">{{ error }}</small>
  </label>
</template>

<script setup lang="ts">
import IconChecked from './icons/IconChecked.vue'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface IBaseCheckbox {
  label: string
  name?: string
  isDisabled?: boolean
  error?: string

}

 // defineModel<string>()

const props = withDefaults(defineProps<IBaseCheckbox>(), {})

const classes = computed(() => ({
  'disabled events-none': props.isDisabled,
  error: props.error,
}))

function onChange() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss">
@import 'BaseCheckbox';
</style>
