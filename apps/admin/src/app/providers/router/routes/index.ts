import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { route as signInRoute } from './sign-in'
import { route as LessonsRoute } from './lessons'
import { route as notFoundRoute } from './not-found'
import { route as TaskRoute } from './task/task'
import { route as CoursesRoute } from './courses/courses'
import { route as CoursesCardRoute } from './courses/courses-card'
import { route as StudentRoute } from './student/student'
import { route as StudentAddRoute } from './student/student-add'
import { route as StudentCardRoute } from './student/student-card'
import { route as StudentListRoute } from './student/student-list'

import { route as StatisticsRoute } from './statistics'
import { route as RolesRoute } from './roles'
import { route as LiteratureRoute } from './literature'
import { route as mainRoute } from './main'
import { route as contactRoute } from './contact/contacts'
import { route as contactAddRoute } from './contact/contact-add'
import { route as contactEditRoute } from './contact/contact-edit'
import { authGuard } from './auth'

const rawRoutes: RouteRecordRaw[] = [
  signInRoute,
  notFoundRoute,
  LessonsRoute,
  TaskRoute,
  CoursesRoute,
  CoursesCardRoute,
  StudentRoute,
  StudentAddRoute,
  StudentCardRoute,
  StudentListRoute,
  StatisticsRoute,
  RolesRoute,
  LiteratureRoute,
  mainRoute,
  contactRoute,
  contactAddRoute,
  contactEditRoute,
]

export const routes: RouteRecordRaw[] = rawRoutes.map((route) => ({
  ...route,
  beforeEnter: authGuard,
}))

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
