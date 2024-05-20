import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'StudentLiteraturePage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'literature',
    component: () => import('@/pages/student-literature')
}
