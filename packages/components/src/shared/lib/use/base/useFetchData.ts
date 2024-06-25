import { useGetCookie } from '@/shared'
import { useApi } from '@spacelablms/student/src/shared/api'
import { BaseAPI } from '@spacelablms/student/src/shared/api/gen/base'

interface IConfig {
  headers: { Authorization: string }
}
interface IParams {
  paramFirst?: string | number | boolean | undefined
  paramSecond?: string | number | boolean | undefined
}

export async function useFetchData<T extends BaseAPI>(
  apiClass: new () => T,
  methodName: keyof T & string,
  params?: IParams
) {
  try {
    const authToken: string = useGetCookie('student-access-token')

    const config: IConfig = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }

    const apiInstance = useApi(apiClass)
    const method: any = apiInstance[methodName]

    if (params) {
      return await method.call(apiInstance, params, config)
    } else {
      return await method.call(apiInstance, config)
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
