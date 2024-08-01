import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'ContactAddPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/contact-add',
  component: () => import('@/pages/contact-add'),
  meta: {
    layout: 'DefaultLayout',
  },
}
