import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminTaskCreatePage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'create',
    component: () => import('@/pages/admin-task-create')
}
