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
