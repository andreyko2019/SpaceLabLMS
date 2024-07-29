import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'TaskPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: ':id',
  component: () => import('@/pages/task'),
}
