<script setup lang="ts">
import {
  Dropdown,
  BaseForm,
  BaseInput,
  BaseButton,
  BaseDropdown,
  BaseCheckbox,
  BaseIcon,
} from '@spacelablms/components'
import { computed, onMounted, ref } from 'vue'
import { course, getCourse } from '@/entities'
import {
  links,
  studentInp,
  useValidAddStudentForm,
} from '@/features'
import {
  Add1CurrentSituationEnum,
  StudentControllerApi,
  useApi,
} from '@/shared'
import { useRouter } from 'vue-router'

const router = useRouter()
const courseId = ref()
const isLoading = ref(false)

const addStudentForm = useValidAddStudentForm()
const isVideoReview = ref(false)

const isStudentEmployed = computed(() => {
  return (
    selectedValues.value.currentSituations !== Add1CurrentSituationEnum.Working
  )
})

function resetForm() {
  addStudentForm.values.name = ''
  addStudentForm.values.middlename = ''
  addStudentForm.values.lastname = ''
  addStudentForm.values.email = ''
  addStudentForm.values.telegram = ''
  addStudentForm.values.telephone = ''
  addStudentForm.values.totalmark = 0
  courseId.value = undefined
  isVideoReview.value = false
}

async function postAddStudent() {
  const api = useApi(StudentControllerApi)

  try {
    await api.add1({
      name: addStudentForm.values.name,
      middleName: addStudentForm.values.middlename,
      lastName: addStudentForm.values.lastname,
      email: addStudentForm.values.email,
      telegram: addStudentForm.values.telegram,
      telephone: addStudentForm.values.telephone,
      totalMark: addStudentForm.values.totalmark,

      courseId: +courseId.value,
      isVideoReview: isVideoReview.value,
      display: false,
    })
    router.push('/student')
  } catch (error) {
    console.log(error)
  } finally {
    resetForm()
    isLoading.value = false
  }
}
async function onSubmit() {
  const { valid } = await addStudentForm.instance.validate()

  if (!valid) return
  isLoading.value = true
  await postAddStudent()
  resetForm()
  isLoading.value = false
}

async function feathData() {
  await getCourse()
}
onMounted(feathData)
</script>

<template>
  <div class="add-student">
    <h1 class="add-student__title">Додати студента</h1>

    <div class="add-student__links">
      <router-link
        class="add-student__links-item"
        v-for="(link, index) in links"
        :key="index"
        :to="link.href"
        :class="{ 'add-student__links-item_act': !link.icon }"
      >
        {{ link.name }}

        <span v-if="link.icon">
          <BaseIcon :icon="link.icon" />
        </span>
      </router-link>
    </div>

    <BaseForm @send="onSubmit" class="add-student__form">
      <div class="add-student__column">
        <BaseInput
          v-for="(inp, index) in studentInp"
          :key="index"
          :label="inp.label"
          :name="inp.name"
          :type="inp.type"
        />

        <BaseInput
          label="Робота"
          name="work"
          :is-disabled="isStudentEmployed"
        />

        <BaseDropdown
          v-for="(item, index) in dropDown"
          :key="index"
          :options="item.option"
          :label="item.label"
          :val="item.label"
          @update:modelValue="selectedValues[item.select] = $event"
        />

        <Dropdown
          :options="course"
          label="Курс"
          value="Назва курсу"
          :selectId="courseId"
          @update:selectedId="courseId = $event"
        />

        <BaseCheckbox
          label="Надав відео відгук"
          id="video"
          name="video"
          value="Надав відео відгук"
          v-model:checked="isVideoReview"
        />
      </div>

      <div class="add-student__btn">
        <BaseButton text="Додати студента" type="submit" modify="primary" />
      </div>
    </BaseForm>

    <ThePreloader v-if="isLoading" />
  </div>
</template>

<style lang="scss">
@import 'AddStudent';
</style>
