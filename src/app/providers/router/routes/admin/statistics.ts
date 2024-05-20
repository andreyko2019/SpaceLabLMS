import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminStatisticsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'statistics',
    component: () => import('@/pages/admin-statistics')
}
