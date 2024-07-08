import { Configuration } from './gen'
import { BaseAPI, BASE_PATH } from './gen/base'
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

// import { useGetCookie } from '@spacelablms/components'

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
// const token = useGetCookie('student-access-token')
// console.log(token)
const conf = new Configuration({
  basePath: BASE_PATH,
  accessToken:
    'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MjA0MjA5MDUsImV4cCI6MTcyMDQ1NjkwNX0.f6xz2IQIuS5TCfkMtEdP8gVujsWkxInJzTesqglm__IxAjScku0nwBpFhoJyoSpH',
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
