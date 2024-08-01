import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'StudentPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/student',
  component: () => import('@/pages/students'),
  meta: {
    title: 'Студенти',
    layout: 'DefaultLayout',
  },
}
