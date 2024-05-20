import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminRolesPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'roles',
    component: () => import('@/pages/admin-roles')
}
