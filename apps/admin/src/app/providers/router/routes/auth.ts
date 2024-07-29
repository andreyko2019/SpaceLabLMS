import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/features'

export const authGuard = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()
  authStore.checkAdminAuth()

  if (
    to.path === '/not-found' ||
    (to.path === '/sign-in' && !authStore.isAuthenticated)
  ) {
    next()
  } else if (!authStore.isAuthenticated && to.path !== '/sign-in') {
    next({ path: '/sign-in' })
  } else if (authStore.isAuthenticated && to.path === '/sign-in') {
    next({ path: '/' })
  } else {
    next()
  }
}
