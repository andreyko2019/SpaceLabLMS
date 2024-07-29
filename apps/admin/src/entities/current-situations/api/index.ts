import { EnumControllerApi, useApi } from '@/shared'
import { ref } from 'vue'

const currentSituations = ref()
async function getCurrentSituations() {
  const api = useApi(EnumControllerApi)

  const data = await api.listCurrentSituations()

  currentSituations.value = data.data
}

export { currentSituations, getCurrentSituations }
