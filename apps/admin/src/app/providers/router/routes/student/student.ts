import type { RouteRecordRaw } from 'vue-router'
import { route as StudentAddRoute } from './student-add'
import { route as StudentCardRoute } from './student-card'
import { route as StudentListRoute } from './student-list'

export const routeName = 'StudentPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/student',
  component: () => import('@/pages/students'),
  children: [StudentAddRoute, StudentCardRoute, StudentListRoute],
  meta: {
    title: 'Студенти',
    layout: 'DefaultLayout',
  },
}
