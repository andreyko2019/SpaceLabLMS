import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'MainPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/',
    redirect: 'statistics',
    meta: {
        title: 'Статистика',
        layout: 'DefaultLayout',
    }
}
