import type { RouteRecordRaw } from 'vue-router'

import { route as taskRoute } from './task'

export const routeName: string = 'TasksPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/tasks',
    component: () => import('@/pages/tasks'),
    children: [taskRoute]
}
