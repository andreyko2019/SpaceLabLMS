import { BaseAPI, BASE_PATH } from './gen/base'
import { Configuration } from './gen'
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { useGetCookie } from '@spacelablms/components'

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
