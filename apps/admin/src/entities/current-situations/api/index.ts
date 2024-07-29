import { EnumControllerApi, useApi } from '@/shared'
import { currentSituations } from '../config'

async function getCurrentSituations() {
  const api = useApi(EnumControllerApi)

  const data = await api.listCurrentSituations()

  currentSituations.value = data.data
}

export { currentSituations, getCurrentSituations }
