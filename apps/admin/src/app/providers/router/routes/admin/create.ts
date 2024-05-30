import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminCreatePage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'create',
    component: () => import('@/pages/admin-create')
}
