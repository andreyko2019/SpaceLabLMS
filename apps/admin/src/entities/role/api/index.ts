import { RoleControllerApi, useApi } from '@/shared'
import { rolesTd } from '@/entities'

async function getAllRole() {
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

  const roleData = data.data.content

  // console.log(managersImage)
  //
  // console.log(managersImage)

  roleData?.map((item) => {
    rolesTd.value.push({
      id: item.id,
      name: item.name,
      managers: item.managers,
    })
  })
}

export { getAllRole }
