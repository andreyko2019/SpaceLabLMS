import { EnumControllerApi, useApi } from '@/shared'
import { status } from '@/entities'

async function getStatus() {
  const api = useApi(EnumControllerApi)

  const data = await api.listCourseStatuses()

  status.value = data.data
}

export { getStatus }
