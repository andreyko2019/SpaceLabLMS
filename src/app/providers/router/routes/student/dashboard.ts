import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'StudentDashboardPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'dashboard',
    component: () => import('@/pages/student-dashboard')
}
