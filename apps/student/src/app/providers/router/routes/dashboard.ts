import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'DashboardPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/dashboard',
    component: () => import('@/pages/dashboard'),
    meta: {
        title: 'Особистий кабінет',
        layout: 'DefaultLayout',
    }
};
