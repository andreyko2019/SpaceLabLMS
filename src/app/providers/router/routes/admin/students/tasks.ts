import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminStudentTasksPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: ':id/tasks',
    component: () => import('@/pages/admin-student-tasks')
}
