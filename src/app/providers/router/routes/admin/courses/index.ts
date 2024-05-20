import type { RouteRecordRaw } from 'vue-router'

import { route as studentRoute } from './course.ts'

export const routeName: string = 'AdminCoursesPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'courses',
    component: () => import('@/pages/admin-courses'),
    children: [studentRoute]
}
