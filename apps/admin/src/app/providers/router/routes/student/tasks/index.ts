import type { RouteRecordRaw } from 'vue-router'

import { route as taskRoute } from './task'

export const routeName: string = 'StudentTasksPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'tasks',
    component: () => import('@/pages/student-tasks'),
    children: [taskRoute]
}
