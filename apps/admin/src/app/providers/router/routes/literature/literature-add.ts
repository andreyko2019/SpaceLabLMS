import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'LiteratureAddPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/literature-add',
    component: () => import('@/pages/literature-add'),
    meta: {
        layout: 'DefaultLayout',
    },
}