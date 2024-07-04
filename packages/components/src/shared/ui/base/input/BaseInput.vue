<!--<template>-->
<!--  <div class="input">-->
<!--    <label class="input__label" :for="name" v-if="label">{{ label }}</label>-->
<!--    <input-->
<!--      class="input__inp"-->
<!--      :type="type"-->
<!--      :placeholder="placeholder"-->
<!--      autocomplete="off"-->
<!--      :value="inputValue"-->
<!--      :disabled="isDisabled"-->
<!--      :name="name"-->
<!--      onfocus="this.value=''"-->
<!--      @input=""-->
<!--    />-->
<!--    <small class="input__error" v-if="errorMessage">-->
<!--      {{ errorMessage }}-->
<!--    </small>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--// import { computed } from 'vue'-->
<!--// import { useCustomField } from '@/shared'-->
<!--// import { computed } from 'vue'-->

<!--type InputContent = string | number | null-->
<!--type ExtendedInputContent = InputContent | File-->
<!--type InputType = 'text' | 'number' | 'password' | 'email' | 'file'-->
<!--// //-->
<!--interface IProps {-->
<!--  label: string-->
<!--  modelValue?: ExtendedInputContent-->
<!--  type: InputType | null-->
<!--  name?: string | null-->
<!--  placeholder?: string-->
<!--  errorMessage?: string-->
<!--  isDisabled?: boolean-->
<!--  inputValue?: string-->
<!--}-->
<!--//-->
<!--const props = withDefaults(defineProps<IProps>(), {-->
<!--  modelValue: null,-->
<!--  name: null,-->
<!--  placeholder: '',-->
<!--  errorMessage: '',-->
<!--  type: 'text',-->
<!--  inputValue: '',-->
<!--})-->
<!--//-->
<!--// const emit = defineEmits(['input-click'])-->

<!--// @input="onInput"-->
<!--const emit = defineEmits<{-->
<!--  (e: 'update:modelValue', value: InputContent): void-->
<!--}>()-->
<!--//-->
<!--// const { value, errorMessage } = useCustomField<InputContent>(props)-->

<!--// const inputValue: any = computed({-->
<!--//   get() {-->
<!--//     if (props.name) {-->
<!--//       return value.value-->
<!--//     }-->
<!--//     return props.modelValue-->
<!--//   },-->
<!--//   set(next: InputContent) {-->
<!--//     if (props.name) {-->
<!--//       value.value = next-->
<!--//     }-->
<!--//     emit('update:modelValue', next)-->
<!--//   },-->
<!--// })-->

<!--// function onInput(event: Event) {-->
<!--//   const input = event.target-->
<!--//-->
<!--//   if (input instanceof HTMLInputElement) {-->
<!--//     if (input) {-->
<!--//       //   if (props.type === 'text') {-->
<!--//       //     inputValue.value = input.value.replace(/\d/g, '')-->
<!--//       //   } else {-->
<!--//       inputValue.value = input.value-->
<!--//       //   }-->
<!--//     }-->
<!--//   }-->
<!--// }-->
<!--</script>-->

<!--<style lang="scss">-->
<!--@import 'BaseInput';-->
<!--</style>-->
