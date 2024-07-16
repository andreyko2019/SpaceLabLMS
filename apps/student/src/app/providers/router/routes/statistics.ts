import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'StatisticsPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/statistics',
  component: () => import('@/pages/statistics'),
  meta: {
    title: 'Статистика',
    layout: 'DefaultLayout',
  },
}
