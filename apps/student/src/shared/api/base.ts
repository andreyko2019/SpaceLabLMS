import { Configuration } from './gen'
import { BaseAPI, BASE_PATH } from './gen/base'
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

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

const conf = new Configuration({})

export function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  const axiosInstance = axios.create()
  configureAxios(axiosInstance)

  function configureAxios(axiosInstance: AxiosInstance) {
    const configurator = (config: InternalAxiosRequestConfig) => config
    axiosInstance.interceptors.request.use(configurator)
  }

  return new apiConstructor(conf, BASE_PATH, axiosInstance)
}
