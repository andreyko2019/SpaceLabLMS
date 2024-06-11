<template>
  <label class="checkbox" :class="classes">
    <input
      type="checkbox"
      class="checkbox__input"
      :name="name"
      :checked="modelValue"
      :disabled="isDisabled"
      @change="onChange"
    />

    <span class="checkbox__icon-wrap">
      <IconChecked class="checkbox__icon-checked" />
    </span>

    <span class="checkbox__label">
      {{ label }}
    </span>

    <small v-if="error" class="checkbox__error">{{ error }}</small>
  </label>
</template>

<script setup lang="ts">
import IconChecked from './icons/IconChecked.vue'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface IVCheckbox {
  modelValue?: boolean
  label: string
  name?: string
  isDisabled?: boolean
  error?: string
}

const props = withDefaults(defineProps<IVCheckbox>(), {
  modelValue: false,
})

const classes = computed(() => ({
  'disabled events-none': props.isDisabled,
  error: props.error,
}))

function onChange() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
