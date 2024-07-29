import { EnumControllerApi, useApi } from '@/shared'
import { englishLevel } from '@/entities/english-level'

async function getEnglishLevel() {
  const api = useApi(EnumControllerApi)

  const data = await api.listEnglishLevels()

  englishLevel.value = data.data
}

export { getEnglishLevel }
