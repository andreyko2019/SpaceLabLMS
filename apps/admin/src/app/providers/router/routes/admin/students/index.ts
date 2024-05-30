import type { RouteRecordRaw } from 'vue-router'

import { route as tasksRoute } from './tasks'
import { route as createStudentRoute } from './createStudent'
import { route as studentRoute } from './student'

export const routeName: string = 'AdminStudentsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'students',
    component: () => import('@/pages/admin-students'),
    children: [studentRoute, createStudentRoute, tasksRoute]
}
