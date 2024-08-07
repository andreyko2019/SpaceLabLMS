import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'ProfilePage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/profile',
    component: () => import('@/pages/profile'),
    meta: {
        title: 'Особистий кабінет',
        layout: 'DefaultLayout',
    },
}