import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'TaskPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/task',
  component: () => import('@/pages/task'),
  meta: {
    title: 'Завдання',
    layout: 'DefaultLayout',
  },
}
