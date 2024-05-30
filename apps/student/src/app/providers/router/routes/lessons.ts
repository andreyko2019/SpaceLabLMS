import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'LessonsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/lessons',
    component: () => import('@/pages/lessons'),
    meta: {
        title: 'Заняття',
        layout: 'DefaultLayout',
    }
}
