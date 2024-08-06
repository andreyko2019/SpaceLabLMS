import { ManagerControllerApi, useApi } from '@/shared'
import { useI18n } from 'vue-i18n'
import { headerInfo, pages } from '@/entities'

export async function getPages() {
  const { t } = useI18n()
  const api = useApi(ManagerControllerApi)

  try {
    const response = await api.getAuthManager()
    const userData = response.data

    userData.role?.pages?.forEach((page) => {
      pages.value.push({
        href: page.toLowerCase(),
        icon: '',
        name: t(`PAGES.${page}`),
      })
    })

    if (userData && userData.name && userData.lastName) {
      headerInfo.name = userData.name + ' ' + userData.lastName
    }

    headerInfo.image = userData.image || ''
    headerInfo.userRole = t(`ROLE.${userData.role?.name}`)
  } catch (error) {
    console.error(error)
  }
}
