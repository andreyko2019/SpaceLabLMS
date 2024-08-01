import { StudentControllerApi, useApi } from '@/shared'

export async function deleteStudent(id: string) {
  const api = useApi(StudentControllerApi)

  await api.deleteById1({
    id: +id,
  })
}
