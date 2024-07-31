import { RoleControllerApi, useApi } from '@/shared'
import { roles } from '@/entities'
import { useI18n } from 'vue-i18n'

async function getAllRole() {
  const { t } = useI18n()
  const api = useApi(RoleControllerApi)

  const data = await api.getAll2({
    roleDtoFilter: {
      page: 0,
      pageSize: 4,
      managers: [],
      pages: [],
      name: '',
    },
  })
  console.log(data.data)
  roles.value =
    data.data.content?.map(
      ({ id, nameEng, nameUkr, managers, pages, ...item }) => {
        const formattedPages = pages
          ? pages.map((page) => t(`PAGES.${page}`)).join(', ')
          : ''

        return {
          ...item,
          pages: formattedPages,
        }
      }
    ) || []
}

export { getAllRole }
