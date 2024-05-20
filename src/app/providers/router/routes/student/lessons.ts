import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'StudentLessonsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'lessons',
    component: () => import('@/pages/student-lessons')
}
