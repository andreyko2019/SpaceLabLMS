import type { RouteRecordRaw } from 'vue-router'
import { route as statisticssRoute } from './statistics'
import { route as  dashboardRoute } from './dashboard'
import { route as coursesRoute } from './courses'
import { route as studentsRoute } from './students'
import { route as tasksRoute } from './tasks'
import { route as contactsRoute } from './contacts'
import { route as rolesRoute } from './roles'
import { route as literatureRoute } from './literature'
import { route as createRoute } from './create'
import { route as lessonsRoute } from './lessons'

export const routeName: string = 'AdminPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/admin',
    redirect: statisticssRoute,
    component: () => import('@/pages/admin'),
    children: [ dashboardRoute, studentsRoute, coursesRoute, tasksRoute, contactsRoute, statisticssRoute, rolesRoute, literatureRoute, createRoute, lessonsRoute ]
}
