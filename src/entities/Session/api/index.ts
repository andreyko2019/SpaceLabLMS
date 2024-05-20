import { RestApi } from '@/shared/api'
import type { AxiosPromise } from 'axios'
import { getErrorMessageBy } from './errors'

export const api = {
    singUp,
    singIn,
    getUserBy,
}

interface IAuthData {
    email: string
    password: string
}

interface IAuthResponse {
    kind: string
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
}

async function singUp(data: IAuthData): AxiosPromise<IAuthResponse> {
    try {
        return await RestApi.instance.post('/api/v1/auth/login' )
    } catch (e: any) {
        throw new Error(getErrorMessageBy(e.response.data.error.message))
    }
}

async function singIn(data: IAuthData): AxiosPromise<IAuthResponse> {
    try {
        return await RestApi.instance.post('/api/v1/auth/login', withReturnToken(data))
    } catch (e: any) {
        throw new Error(getErrorMessageBy(e.response.data.error.message))
    }
}

function withReturnToken(data: IAuthData) {
    return {
        ...data,
        returnSecureToken: true
    }
}

async function getUserBy(idToken: string) {
    try {
        return await FirebaseApi.accountInstance.post(':lookup', { idToken })
    } catch (e: any) {
        throw new Error(getErrorMessageBy(e.response.data.error.message))
    }
}
