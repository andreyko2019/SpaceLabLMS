import type { RouteRecordRaw } from 'vue-router'
import { route as signInRoute } from './sign-in'
import { route as studentRoute } from './student'
import { route as adminRoute } from './admin'
import { route as notFoundRoute } from './not-found'

export const routes: readonly RouteRecordRaw[] = [
    signInRoute,
    studentRoute,
    adminRoute,
    notFoundRoute
] as const
