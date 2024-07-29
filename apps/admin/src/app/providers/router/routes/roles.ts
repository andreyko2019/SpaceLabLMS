import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'RolesPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/role',
  component: () => import('@/pages/role'),
  meta: {
    title: 'Ролі',
    layout: 'DefaultLayout',
  },
}
