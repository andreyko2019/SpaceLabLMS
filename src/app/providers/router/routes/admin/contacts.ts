import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminContactsPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'contacts',
    component: () => import('@/pages/admin-contacts')
}
