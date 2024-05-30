import type { RouteRecordRaw } from 'vue-router'

import { route as taskRoute } from './task'
import { route as createTaskRoute } from './create-task'

export const routeName: string = 'AdminTasksPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'tasks',
    component: () => import('@/pages/admin-tasks'),
    children: [createTaskRoute, taskRoute ]
}
