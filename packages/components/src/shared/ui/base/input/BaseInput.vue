<template>
  <div class="input">
    <label class="input__label" :for="name" v-if="label">{{ label }}</label>
    <input
      class="input__inp"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      :value="inputValue"
      :disabled="isDisabled"
      :name="name"
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
type InputType = 'text' | 'number' | 'password' | 'email'

interface IProps {
  label: string
  modelValue?: InputContent
  type: InputType
  name?: string
  placeholder?: string
  errorMessage?: string
  isDisabled?: boolean
  inputValue?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: null,
  name: 'text',
  placeholder: '',
  errorMessage: '',
  type: 'text',
  inputValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputContent): void
}>()

const { value, errorMessage } = useCustomField<InputContent>(props)

const inputValue: any = computed({
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
  const input = event.target

  if (input instanceof HTMLInputElement) {
    if (input) {
      inputValue.value = input.value
    }
  }
}
</script>

<style lang="scss">
@import 'BaseInput';
</style>
