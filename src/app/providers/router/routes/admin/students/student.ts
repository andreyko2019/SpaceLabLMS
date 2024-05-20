import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminStudentPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: ':id',
    component: () => import('@/pages/admin-student')
}
