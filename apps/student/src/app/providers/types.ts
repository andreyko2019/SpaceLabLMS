import type { InjectionKey } from 'vue'
import type { AppRoutes } from './app-routes'
import type { AppPages } from './router'

export const EAppProviders = {
    AppRoutes: Symbol() as InjectionKey<typeof AppRoutes>,
    AppPages: Symbol() as InjectionKey<typeof AppPages>
}
