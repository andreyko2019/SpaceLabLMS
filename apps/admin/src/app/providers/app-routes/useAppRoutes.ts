import { inject } from 'vue'
import { EAppProviders } from '@/app/providers/types'
import { throwInjectError } from '@spacelablms/components'

export function useAppRoutes() {
  const appRoutes = inject(EAppProviders.AppRoutes)

  if (!appRoutes) {
    throwInjectError('AppRoutes')
  }

  return appRoutes
}
