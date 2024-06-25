<template>
  <div class="input">
    <label class="input__label" v-if="label">{{ label }}</label>
    <input
      class="input__inp"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      :value="inputValue"
      @input="onInput"

    />
    <small class="input__error" v-if="errorMessage">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCustomField } from '@/shared'

type InputContent = string | number | null

type InputType = 'text' | 'number' | 'password' | 'email' | 'file'

interface Props {
  label: string
  modelValue?: InputContent
  type?: InputType | undefined
  name?: string | null
  placeholder?: string
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  name: null,
  placeholder: '',
  errorMessage: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputContent): void
}>()

const { value, errorMessage } = useCustomField<InputContent>(props)

// function getValueForNumber(initial: InputContent) {
//   if (initial === '' || initial === null || initial === undefined) {
//     return null
//   }
//
//   const val = Number(initial)
//
//   if (Number.isNaN(val)) {
//     return null
//   }
//
//   return val
// }

const inputValue = computed({
  get() {
    if (props.name) {
      return value.value
    }
    return props.modelValue
  },
  set(next: InputContent) {
    if (props.name) {
      value.value = next
    }
    emit('update:modelValue', next)
  },
})

function onInput(event: Event) {
  const input = event.target as HTMLInputElement
  inputValue.value = input.value
}

// function onBlur(event: FocusEvent) {
//   const input = event.target as HTMLInputElement
//
//   inputValue.value =
//     props.type === 'number' ? getValueForNumber(input.value) : input.value
//
//   input.value = inputValue.value?.toString() || ''
// }
</script>

<style lang="scss">
@import 'BaseInput';
</style>
