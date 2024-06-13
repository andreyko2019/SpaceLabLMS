<script setup lang="ts">
import { ref } from 'vue'
import { FormInput } from '@/shared'
interface IFile {
  label: string
  name: string
}

const props = defineProps<IFile>()

const fileName = ref('')
const updateFile = (e: Event) => {
  const target = e.target

  if (target instanceof HTMLInputElement && target.files) {
    const selectedFile = target.files[0]
    if (selectedFile) {
      fileName.value = selectedFile.name
    } else {
      fileName.value = ''
    }
  }
}
</script>

<template>
  <div class="file">
    <p class="file__label" v-if="props.label">{{ props.label }}</p>

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
