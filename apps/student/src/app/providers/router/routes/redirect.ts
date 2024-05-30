import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'RedirectPage'

export const route: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    redirect: 'not-found',
    name: routeName,
    meta: {
        title: 'Сторінка не знайдена',
        layout: 'EmptyLayout',
    }
}
