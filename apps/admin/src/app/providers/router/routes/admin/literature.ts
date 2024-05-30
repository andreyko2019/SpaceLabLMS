import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminLiteraturePage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'literature',
    component: () => import('@/pages/admin-literature')
}
