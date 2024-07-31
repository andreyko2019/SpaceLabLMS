import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'StudentCardPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/student-card',
  component: () => import('@/pages/student-card'),
  meta: {
    layout: 'DefaultLayout',
  },
}
