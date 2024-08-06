import { ManagerControllerApi, useApi } from '@/shared'
import { ref } from 'vue'

export async function getTheme() {
  const isTheme = ref(false)
  const api = useApi(ManagerControllerApi)

  try {
    const data = await api.getTheme()
    isTheme.value = data.data
  } catch (error) {
    console.error('Error fetching theme:', error)
  }

  return isTheme.value
}
