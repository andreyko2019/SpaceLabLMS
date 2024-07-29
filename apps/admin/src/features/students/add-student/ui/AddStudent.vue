<script setup lang="ts">
import {
  Dropdown,
  BaseForm,
  BaseInput,
  BaseButton,
  BaseDropdown,
} from '@spacelablms/components'
import { onMounted, ref } from 'vue'
import {
  course,
  getCourse,
  currentSituations,
  englishLevel,
  status,
  getCurrentSituations,
  getEnglishLevel,
  getStatus,
} from '@/entities'
import { studentInp, useValidAddStudentForm } from '@/features'

const addStudentForm = useValidAddStudentForm()
async function onSubmit() {
  const { valid } = await addStudentForm.instance.validate()

  if (!valid) return
}

async function feathData() {
  await getCourse()
  await getCurrentSituations()
  await getEnglishLevel()
  await getStatus()
}
onMounted(feathData)

const courseId = ref()
const selectedSituations = ref()
</script>

<template>
  <BaseForm @send="onSubmit"> </BaseForm>
  <div class="add-student__form">
    <BaseInput
      v-for="(inp, index) in studentInp"
      :key="index"
      :label="inp.label"
      :name="inp.name"
    />

    <BaseDropdown
      :options="currentSituations"
      label="Поточне становище"
      val="Поточне становище"
      @update:modelValue="selectedSituations = $event"
      :model-value="selectedSituations"
    />

    <BaseDropdown
      :options="englishLevel"
      label="Рівень англійської"
      val="Поточне становище"
      @update:modelValue="selectedSituations = $event"
      :model-value="selectedSituations"
    />

    <BaseDropdown
      :options="status"
      label="Рівень англійської"
      val="Поточне становище"
      @update:modelValue="selectedSituations = $event"
      :model-value="selectedSituations"
    />
  </div>

  <Dropdown
    :options="course"
    label="label"
    value="value"
    :selectId="courseId"
    @update:selectedId="courseId = $event"
  />

  <BaseButton text="Додати студента" type="submit" modify="primary" />
</template>

<style lang="scss">
@import 'AddStudent';
</style>
