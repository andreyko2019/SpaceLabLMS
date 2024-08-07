<script setup lang="ts">
import {
  BaseInput,
  TheTable,
  ThePagination,
  BaseDropdown,
} from '@spacelablms/components'
import { onMounted } from 'vue'
import { StudentControllerApi, useApi } from '@/shared'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  handleAction,
  IStudentDtoForView,
  // currentPage,
  pageSize,
  studentTh,
  totalPage,
  showPages,
} from '@/entities'
import { useRoute, useRouter } from 'vue-router'

const { t } = useI18n()
const studentTd = ref<IStudentDtoForView[]>([])

async function getAllStudent(pageNumber = 0) {
  const studentApi = useApi(StudentControllerApi)
  studentTd.value = []

  const studentData = await studentApi.getAll1({
    studentDtoForFilter: {
      page: pageNumber,
      pageSize: pageSize.value,
    },
  })

  studentData.data.content?.forEach(({ course, ...item }) => {
    const courseName =
      typeof course === 'object' &&
      course !== null &&
      Object.keys(course).length > 0
        ? course[Object.keys(course)[0]]
        : ''

    studentTd.value.push({
      id: item.id,
      fullName: item.fullName,
      courseName,
      dateOfJoining: item.dateOfJoining,
      levelOfPreparation: item.levelOfPreparation,
      task: item.task,
      statusName: t(`LESSONS_STATUS.${item.status}`),
      icon: ['edit', 'delete', 'tasks'],
    })
  })

  totalPage.value = studentData.data.totalPages || 0
}

const totalPages = ref(10)
const currentPage = ref(1)
const route = useRoute()
const router = useRouter()
console.log(route.path)
async function onPageChange(pageNumber: number) {
  currentPage.value = pageNumber
  // await getAllStudent(currentPage.value - 1)
  router.push({ query: { page: pageNumber } })
}

const fetchStudents = async (pageNumber = 0) => {
  await getAllStudent(pageNumber)
}
onMounted(() => {
  fetchStudents()
})
</script>

<template>
  <div class="students">
    <h1 class="students__title">Студенти</h1>

    <div class="students__row">
      <div class="students__search">
        <BaseInput />
      </div>

      <div class="students__add-btn">
        <router-link to="/student-add">Додати студента</router-link>
      </div>
    </div>

    <div class="students__table">
      <TheTable :th="studentTh" :td="studentTd" @action="handleAction" />

      <div class="students__pagination">
        <div class="students__pages">
          <BaseDropdown
            :options="showPages"
            val="4"
            @update:modelValue="pageSize = $event"
          />
        </div>

        <ThePagination :totalPage="totalPages" @change="onPageChange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Student';
</style>
