import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

export { pages as AppPages } from './pages'

export const router = createRouter({
  history: createWebHashHistory(
    import.meta.env.VITE_ADMIN_BASE_URL as string | undefined
  ),
  routes,
})
