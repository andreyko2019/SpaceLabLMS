import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'StudentTaskPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: ':id',
    component: () => import('@/pages/student-task')
}
