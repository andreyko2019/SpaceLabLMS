import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCookie } from '@/shared/lib/browser'
import { REFRESH_TOKEN_KEY, TOKEN_EXPIRES_IN, TOKEN_KEY } from '@/shared/config'
import { api } from '../api'

const namespaced = 'session'

interface ITokens {
    idToken: string
    refreshToken: string
}



export const useSessionStore = defineStore(namespaced, () => {

    const { value: tokenValue, setCookieValue: setCookieToken } = useCookie(TOKEN_KEY, '')

    const token = ref(tokenValue)

    function setToken(value: string) {
        token.value = value
        setCookieToken(value)
    }

    function removeToken() {
        setToken('')
    }

    const { value: refreshTokenValue, setCookieValueValue: setLSRefreshToken } = useCookie(REFRESH_TOKEN_KEY, '')

    const refreshToken = ref(refreshTokenValue)

    function setRefreshToken(value: string) {
        refreshToken.value = value
        setLSRefreshToken(value)
    }

    function removeRefreshToken() {
        setRefreshToken('')
    }

    const { setTimeoutId: setTimeoutGetToken, clearTimeoutId: clearTimeoutGetToken } = useTimeout(
        getToken,
        TOKEN_EXPIRES_IN
    )

    async function getToken() {
        try {
            const { data } = await api.getToken(refreshToken.value)
            setToken(data.id_token)
            setRefreshToken(data.refresh_token)
            setTimeoutGetToken()
        } catch (e: any) {
            showError(e.message)
        }
    }

    function setTokens(data: ITokens) {
        clearTimeoutGetToken()
        setToken(data.idToken)
        setRefreshToken(data.refreshToken)
        setTimeoutGetToken()
    }

    const user = reactive<ISessionUser>({
        id: '',
        username: defaultUserName,
        gender: defaultUserGender,
        email: ''
    })

    const isAuth = computed(() => Boolean(user.id))

    function setUser(data: ISessionUser) {
        user.id = data.id
        user.username = data.username
        user.gender = data.gender
        user.email = data.email
        user.cartId = data.cartId
        user.favoritesId = data.favoritesId
        user.walletId = data.walletId
        user.orderIds = data.orderIds
    }

    function logout() {
        clearTimeoutGetToken()
        removeToken()
        removeRefreshToken()

        setUser({
            id: '',
            username: defaultUserName,
            gender: defaultUserGender,
            email: ''
        })
    }

    return {
        token,
        setTokens,
        refreshToken,
        user,
        setUser,
        isAuth,
        logout
    }
})
