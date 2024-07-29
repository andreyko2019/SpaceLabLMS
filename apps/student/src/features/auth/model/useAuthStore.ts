import { defineStore } from 'pinia'
import { useGetCookie } from '@spacelablms/components'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  function checkAuth() {
    const studentAccessToken = useGetCookie('student-access-token')
    isAuthenticated.value = !!studentAccessToken

    console.log((isAuthenticated.value = !!studentAccessToken))
  }

  return { isAuthenticated, checkAuth }
})
