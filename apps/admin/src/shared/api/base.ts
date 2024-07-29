import { BaseAPI, BASE_PATH } from './gen/base'
import { AuthControllerApi, Configuration } from './gen'
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { useGetCookie, useSetCookie } from '@spacelablms/components'

export type ApiConstructor<T> = new (
  ...args: ConstructorParameters<typeof BaseAPI>
) => T

export interface ApiOptions {
  apiBaseUrl: string
  getAccessToken: () => string
  refreshTokens: () => Promise<void>
  handleReload: () => void
}

export interface BlobResponse extends AxiosResponse {
  data: Blob | object | void
}
const token = useGetCookie('admin-access-token')

const conf = new Configuration({
  basePath: BASE_PATH,
  accessToken: token,
})

export function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  const axiosInstance = axios.create()
  configureAxios(axiosInstance)

  function configureAxios(axiosInstance: AxiosInstance) {
    const configurator = (config: InternalAxiosRequestConfig) => config
    axiosInstance.interceptors.request.use(configurator)
  }

  return new apiConstructor(conf, BASE_PATH, axiosInstance)
}

async function refreshAccessToken() {
  try {
    const refreshToken = useGetCookie('admin-refresh-token')

    if (refreshToken) {
      const authApi = useApi(AuthControllerApi)
      const { data } = await authApi.refresh({ refreshToken })

      console.log(data)

      const newAccessToken = <string>data.accessToken
      useSetCookie('admin-access-token', newAccessToken)
      console.log('токен оновлено')
      return newAccessToken
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

await refreshAccessToken()
