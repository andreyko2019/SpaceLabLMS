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
  getCurrentSituations,
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
}
onMounted(feathData)

const selectedId = ref()
const modelValue = ref()
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
      @update:modelValue="modelValue = $event"
      :model-value="modelValue"
    />

    {{ modelValue }}
  </div>

  <Dropdown
    :options="course"
    label="label"
    value="value"
    :modelValue="modelValue"
    :selectId="selectedId"
    @update:modelValue="modelValue = $event"
    @update:selectedId="selectedId = $event"
  />

  <BaseButton text="Додати студента" type="submit" modify="primary" />
</template>

<style lang="scss">
@import 'AddStudent';
</style>
