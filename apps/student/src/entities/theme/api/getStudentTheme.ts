import { PersonalAreaControllerApi, useApi } from '@/shared/api'
import { isTheme } from '@/entities'

export async function getStudentTheme() {
  const apiTheme = useApi(PersonalAreaControllerApi)

  const dataTheme = await apiTheme.getTheme()

  if (dataTheme.data) {
    isTheme.theme = dataTheme.data
  }
}

// export async function putChangeTheme() {
//   const api = useApi(PersonalAreaControllerApi)
//
//   await api.changeTheme({ theme: !isTheme })
// }
