<template>
  <!--  <div class="input">-->
  <!--    <label class="input__label" v-if="label" :for="name">{{ label }}</label>-->
  <!--    <input-->
  <!--      class="input__inp"-->
  <!--      :type="type"-->
  <!--      :placeholder="placeholder"-->
  <!--      autocomplete="off"-->
  <!--      :value="inputValue"-->
  <!--      :disabled="isDisabled"-->
  <!--      @input="onInput"-->
  <!--      :name="name"-->
  <!--    />-->
  <!--    <small class="input__error" v-if="errorMessage">-->
  <!--      {{ errorMessage }}-->
  <!--    </small>-->
  <!--  </div>-->
</template>

<script setup lang="ts">
// import { computed } from 'vue'
// import { useCustomField } from '@/shared'
//
// type InputContent = string | number | null
// type ExtendedInputContent = InputContent | File
// type InputType = 'text' | 'number' | 'password' | 'email' | 'file'
//
// interface Props {
//   label: string
//   modelValue?: ExtendedInputContent
//   type: InputType | null
//   name?: string | null
//   placeholder?: string
//   errorMessage?: string
//   isDisabled?: boolean
// }
//
// const props = withDefaults(defineProps<Props>(), {
//   modelValue: null,
//   name: null,
//   placeholder: '',
//   errorMessage: '',
//   type: 'text',
// })
//
// const emit = defineEmits<{
//   (e: 'update:modelValue', value: InputContent): void
// }>()

// const { value, errorMessage } = useCustomField<InputContent>(props)
//
// const inputValue = computed({
//   get() {
//     if (props.name) {
//       return value.value
//     }
//     return props.modelValue
//   },
//   set(next: InputContent) {
//     if (props.name) {
//       value.value = next
//     }
//     emit('update:modelValue', next)
//   },
// })
//
// function onInput(event: Event) {
//   const input = event.target
//
//   if (input instanceof HTMLInputElement) {
//     if (input) {
//       //   if (props.type === 'text') {
//       //     inputValue.value = input.value.replace(/\d/g, '')
//       //   } else {
//       inputValue.value = input.value
//       //   }
//     }
//   }
// }
</script>

<style lang="scss">
@import 'BaseInput';
</style>
