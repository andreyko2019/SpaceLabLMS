<script setup lang="ts">
import { ref, watch } from 'vue'
import { FormInput } from '@/shared'
// todo переробка
interface IFile {
  label: string
  name: string
  modelValue: File | null
}

const props = defineProps<IFile>()
const emit = defineEmits(['update:modelValue'])

const fileName = ref('')

const updateFile = (e: Event) => {
  const target = e.target

  if (target instanceof HTMLInputElement && target.files) {
    const selectedFile = target.files[0]
    if (selectedFile) {
      fileName.value = selectedFile.name
      emit('update:modelValue', selectedFile)
    } else {
      fileName.value = ''
      emit('update:modelValue', null)
    }
  }
}

watch(
  () => props.modelValue,
  (newFile) => {
    if (newFile) {
      fileName.value = newFile.name
    } else {
      fileName.value = ''
    }
  }
)
</script>

<template>
  <div class="file">
    <p class="file__label" v-if="label">{{ label }}</p>

    <div class="file__row">
      <p class="file__name">{{ fileName }}</p>

      <FormInput
        :name="name"
        type="file"
        label="Вибрати файл"
        @change="updateFile"
        accept="image/*"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import 'styles';
</style>
