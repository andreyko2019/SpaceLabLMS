import { defineStore } from 'pinia'
import { useGetCookie } from '@spacelablms/components'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  function checkAdminAuth() {
    const studentAccessToken = useGetCookie('admin-access-token')
    isAuthenticated.value = !!studentAccessToken
  }

  return { isAuthenticated, checkAdminAuth }
})
