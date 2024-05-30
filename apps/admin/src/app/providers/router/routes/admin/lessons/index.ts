import type { RouteRecordRaw } from 'vue-router'

import { route as createLessonRoute } from './create-lesson.ts'

export const routeName: string = 'AdminLessonsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'lessons',
    component: () => import('@/pages/admin-lessons'),
    children: [ createLessonRoute ]
}
