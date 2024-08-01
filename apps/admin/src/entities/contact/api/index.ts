import { ContactControllerApi, useApi } from '@/shared'
import { contactTd, contactTotalPage } from '@/entities'

async function getContact(pageNumber: number = 0) {
  const api = useApi(ContactControllerApi)

  const contactData = await api.getAll7({
    contactDtoForFilter: {
      page: pageNumber,
      pageSize: 4,
    },
  })

  if (contactData.data.content) {
    contactTd.value = contactData.data.content.map((item) => ({
      id: item.id,
      fullName: `${item.name} ${item.middleName} ${item.lastName}`,
      telephone: item.telephone,
      telegram: item.telegram,
      email: item.email,
      icon: ['edit'],
    }))
  }

  contactTotalPage.value = contactData.data.totalPages || 0
  console.log(contactData.data.content?.map((item) => item.id))
}

export { getContact }

// async function getPagination(pageNumber = 0) {
//   isLoading.value = true
//   const api = useApi(ContactControllerApi)
//
//   try {
//     const data = await api.getAll7({
//       contactDtoForFilter: {
//         page: pageNumber,
//         pageSize: pageSize.value,
//       },
//     })
//
//     if (data.data.content && data.data) {
//       tdData.value = data.data.content.map((item) => ({
//         name: `${item.name} ${item.middleName} ${item.lastName}`,
//         telephone: item.telephone,
//         telegram: item.telegram,
//         email: item.email,
//         icon: 'pencil',
//       }))
//
//       totalPage.value = data.data.totalPages || 0
//     }
//   } catch (error) {
//     console.error(error)
//     isTest.value = false
//   } finally {
//     isLoading.value = false
//   }
// }
