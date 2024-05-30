import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminLessonCreatePage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'create',
    component: () => import('@/pages/admin-lesson-create')
}
