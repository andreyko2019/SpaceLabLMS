import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'ContactEditPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/contact-edit',
  component: () => import('@/pages/contact-edit'),
  meta: {
    layout: 'DefaultLayout',
  },
}
