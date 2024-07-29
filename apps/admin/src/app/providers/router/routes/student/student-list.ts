import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'StudentListPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/student/:list',
  component: () => import('@/pages/student-list'),
  meta: {
    layout: 'DefaultLayout',
  },
}
