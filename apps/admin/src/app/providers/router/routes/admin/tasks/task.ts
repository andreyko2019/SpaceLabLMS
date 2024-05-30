import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminTaskPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: ':id',
    component: () => import('@/pages/admin-task')
}
