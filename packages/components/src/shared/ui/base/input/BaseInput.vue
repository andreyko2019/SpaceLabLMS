<template>
  <div>
    <label>{{ label }}</label>
    <input
        class="input__inp"
        type="text"
        :placeholder="placeholder"
        autocomplete="off"
        :value="inputValue"
        @input="onInput"
        @blur="onBlur"
        :class="{ input__error: errorMessage }"
    />
    <div class="input__error" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCustomField } from '@/shared'

type InputContent = string | number | null

type InputType = 'text' | 'number' | 'password' | 'email' | 'url'

interface Props {
  modelValue?: InputContent
  type?: InputType
  name?: string | null
  placeholder?: string
  errorMessage?: any
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  name: null,
  placeholder: '',
  errorMessage: '',
  label: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputContent): void
}>()

const { value, errorMessage } = useCustomField<InputContent>(props)

function getValueForNumber(initial: InputContent) {
  if (initial === '' || initial === null || initial === undefined) {
    return null
  }

  const val = Number(initial)

  if (Number.isNaN(val)) {
    return null
  }

  return val
}

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
  }
})

function onInput(event: Event) {
  const input = event.target as HTMLInputElement
  inputValue.value = input.value
}

function onBlur(event: FocusEvent) {
  const input = event.target as HTMLInputElement

  inputValue.value = props.type === 'number' ? getValueForNumber(input.value) : input.value

  input.value = inputValue.value?.toString() || ''
}
</script>

<style lang="scss">
@import 'BaseInput';
</style>