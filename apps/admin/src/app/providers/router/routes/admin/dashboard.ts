import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminDashboardPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'dashboard',
    component: () => import('@/pages/admin-dashboard')
}
