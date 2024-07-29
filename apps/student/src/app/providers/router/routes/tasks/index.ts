import type { RouteRecordRaw } from 'vue-router'

import { route as taskRoute } from './task'

export const routeName = 'TasksPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/tasks',
  component: () => import('@/pages/tasks'),
  children: [taskRoute],
  meta: {
    title: 'Завдання',
    layout: 'DefaultLayout',
  },
}
