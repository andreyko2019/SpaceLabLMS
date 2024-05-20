import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'StudentStatisticsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'statistics',
    component: () => import('@/pages/student-statistics')
}
