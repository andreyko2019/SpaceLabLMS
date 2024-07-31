import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'ContactsPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/contact',
  component: () => import('@/pages/contacts'),
  meta: {
    title: 'Контакт',
    layout: 'DefaultLayout',
  },
}
