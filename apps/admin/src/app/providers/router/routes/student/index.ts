import type { RouteRecordRaw } from 'vue-router'
import { route as statisticsRoute } from './statistics.ts'
import { route as  dashboardRoute } from './dashboard'
import { route as lessonsRoute } from './lessons'
import { route as literatureRoute } from './literature'
import { route as tasksRoute } from './tasks'

export const routeName: string = 'StudentPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/student',
    redirect: statisticsRoute,
    component: () => import('@/pages/student'),
    children: [statisticsRoute, dashboardRoute, lessonsRoute, literatureRoute, tasksRoute],
}


