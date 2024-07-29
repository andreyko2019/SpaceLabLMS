import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'StudentAddPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/student/:add',
  component: () => import('@/pages/student-add'),
  meta: {
    layout: 'DefaultLayout',
  },
}
