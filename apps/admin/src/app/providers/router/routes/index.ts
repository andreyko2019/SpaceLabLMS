import type { RouteRecordRaw } from 'vue-router'
import { route as signInRoute } from './sign-in'
import { route as LessonsRoute } from './lessons'
import { route as notFoundRoute } from './not-found'
import { route as TaskRoute } from './task'
import { route as CoursesRoute } from './courses'
import { route as StudentRoute } from './student'
import { route as StatisticsRoute } from './statistics'
import { route as RolesRoute } from './roles'
import { route as LiteratureRoute } from './literature'
import { route as mainRoute } from './main'
import { route as contactRoute } from './contacts'
import { authGuard } from './auth'

const rawRoutes: RouteRecordRaw[] = [
  signInRoute,
  notFoundRoute,
  LessonsRoute,
  TaskRoute,
  CoursesRoute,
  StudentRoute,
  StatisticsRoute,
  RolesRoute,
  LiteratureRoute,
  mainRoute,
  contactRoute,
]
export const routes: RouteRecordRaw[] = rawRoutes.map((route) => ({
  ...route,
  beforeEnter: authGuard,
}))
