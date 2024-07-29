<script setup lang="ts">
import {
  BaseInput,
  BaseButton,
  TheTable,
  ThePagination,
  TheModal,
  useToggle,
} from '@spacelablms/components'
import { onMounted } from 'vue'
import { StudentControllerApi, StudentDtoForView, useApi } from '@/shared'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { isModal, page, pageSize, studentTh, totalPage } from '@/entities'
import { AddStudent } from '@/features'
const { t } = useI18n()

const studentTd = ref<ReturnType<typeof mapStudentData>[]>([])
const openModal = useToggle(isModal)
const closeModal = useToggle(isModal)
function mapStudentData(item: StudentDtoForView) {
  if (item.course) {
    const courseValues = Object.values(item.course)
    return {
      ...item,
      course: courseValues[0],
      status: t(`LESSONS_STATUS.${item.status}`),
      levelOfPreparation: t(`LEVEL_OF_PREPARATION.${item.levelOfPreparation}`),
    }
  }
  return item
}

async function getAllStudent(pageNumber = 0) {
  const studentApi = useApi(StudentControllerApi)

  const studentData = await studentApi.getAll1({
    studentDtoForFilter: {
      page: pageNumber,
      pageSize: pageSize.value,
    },
  })

  studentTd.value =
    studentData.data.content?.map(({ id, ...item }) => mapStudentData(item)) ||
    []
  totalPage.value = studentData.data.totalPages || 0
}

async function onPageChange(pageNumber: number) {
  page.value = pageNumber

  await getAllStudent(pageNumber)
}

onMounted(getAllStudent)
</script>

<template>
  <div class="students">
    <h1 class="students__title">Студенти</h1>

    <div class="students__row">
      <div class="students__search">
        <BaseInput />
      </div>

      <div class="students__add-btn">
        <BaseButton
          text="Додати студента"
          modify="primary"
          @click="openModal"
        />
      </div>
    </div>

    <div class="students__table">
      <TheTable :th="studentTh" :td="studentTd" />

      <div class="contact__pagination">
        <ThePagination
          :model-value="page"
          :count="totalPage"
          @update:model-value="onPageChange"
        />
      </div>
    </div>

    <TheModal v-if="isModal" @close="closeModal" title="Додати студента">
      <AddStudent />
    </TheModal>
  </div>
</template>

<style lang="scss">
@import 'Student';
</style>
