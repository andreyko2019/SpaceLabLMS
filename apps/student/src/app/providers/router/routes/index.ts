import type { RouteRecordRaw } from 'vue-router'
import { route as signInRoute } from './sign-in'
import { route as statisticsRoute } from './statistics'
import { route as dashboardRoute } from './dashboard'
import { route as lessonsRoute } from './lessons'
import { route as literatureRoute } from './literature'
import { route as tasksRoute } from './tasks'
import { route as notFoundRoute } from './not-found'
import { route as mainRoute } from './main'
import { route as redirectRoute } from './redirect'
import { authGuard } from './auth-guard'

const rawRoutes: RouteRecordRaw[] = [
  signInRoute,
  statisticsRoute,
  dashboardRoute,
  lessonsRoute,
  literatureRoute,
  tasksRoute,
  notFoundRoute,
  mainRoute,
  redirectRoute,
]

const routes: RouteRecordRaw[] = rawRoutes.map((route) => ({
  ...route,
  beforeEnter: authGuard,
}))

export { routes }
