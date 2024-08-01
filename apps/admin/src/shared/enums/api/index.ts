import { EnumControllerApi, useApi } from '@/shared'

const api = useApi(EnumControllerApi)

type ApiResponse<T> = {
  data: T
}

type ApiMethod<T> = () => Promise<ApiResponse<T>>

async function fetchData<T>(apiMethod: ApiMethod<T>): Promise<T> {
  const data = await apiMethod()
  return data.data
}

async function getTaskStatuses() {
  return fetchData(() => api.listTaskStatuses())
}

async function getTaskLevels() {
  return fetchData(() => api.listLevels())
}

async function getTaskForStudentStatuses() {
  return fetchData(() => api.listTaskForStudentStatuses())
}

async function getStudentStatuses() {
  return fetchData(() => api.listStudentStatuses())
}

async function getPreparationLevels() {
  return fetchData(() => api.listPreparationLevels())
}

async function getPages() {
  return fetchData(() => api.listPages())
}

async function getManagerStatuses() {
  return fetchData(() => api.listManagerStatuses())
}

async function getLiteratureTypes() {
  return fetchData(() => api.listLiteratureTypes())
}

async function getLessonStatuses() {
  return fetchData(() => api.listLessonStatuses())
}

async function getEnglishLevels() {
  return fetchData(() => api.listEnglishLevels())
}

async function getCurrentSituations() {
  return fetchData(() => api.listCurrentSituations())
}

async function getCourseStatuses() {
  return fetchData(() => api.listCourseStatuses())
}

export {
  getTaskStatuses,
  getCourseStatuses,
  getTaskLevels,
  getEnglishLevels,
  getLessonStatuses,
  getPreparationLevels,
  getTaskForStudentStatuses,
  getStudentStatuses,
  getManagerStatuses,
  getLiteratureTypes,
  getCurrentSituations,
  getPages,
}
