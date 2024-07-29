import { PersonalAreaControllerApi, useApi } from '@/shared/api'
import { onMounted } from 'vue'
import { userInfo } from '@/entities'

export async function getUserInfo() {
  const api = useApi(PersonalAreaControllerApi)

  const userData = await api.getPersonalData()

  if (userData) {
    userInfo.name = userData.data.name
    userInfo.image = userData.data.image
  }
}

onMounted(getUserInfo)
