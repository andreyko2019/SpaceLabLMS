import { ManagerControllerApi, useApi } from '@/shared'

export async function changeTheme(theme: boolean) {
  const api = useApi(ManagerControllerApi)

  await api.changeTheme({
    theme: theme,
  })
}
