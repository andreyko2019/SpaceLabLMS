import { ManagerControllerApi, useApi } from '@/shared'
import { useI18n } from 'vue-i18n'
import { pages } from '@/entities'

export async function getPages() {
  const { t } = useI18n()
  const api = useApi(ManagerControllerApi)

  const { data } = await api.getByIdForView2({ id: 26 })

  const newPages = data.role?.pages || []
  newPages.forEach((page) => {
    pages.value.push({
      href: page.toLowerCase(),
      icon: '',
      name: t(`PAGES.${page}`),
    })
  })
}
