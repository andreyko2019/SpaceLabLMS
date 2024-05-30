export const APP_NAME = getEnvVar('VITE_APP_NAME')
const APP_PROD_BASE_URL = getEnvVar('VITE_APP_PROD_BASE_URL')

export const API_URL = getEnvVar('VITE_APP_API_URL')

export const TOKEN_KEY = 'jwt-token'
export const TOKEN_EXPIRES_IN = 3600 * 1000
export const REFRESH_TOKEN_KEY = 'refresh-token'

export const isDevEnv = getEnvVar('DEV')
export const isProdEnv = getEnvVar('PROD')

export const BASE_URL = isProdEnv ? APP_PROD_BASE_URL : ''

function getEnvVar(key: string) {
    const envVar = import.meta.env[key]
    if (envVar === undefined) {
        throw new Error(`Env variable ${key} is required`)
    }
    return envVar
}
