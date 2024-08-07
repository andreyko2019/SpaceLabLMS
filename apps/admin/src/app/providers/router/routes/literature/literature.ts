import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'LiteraturePage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/literature',
  component: () => import('@/pages/literature'),
  meta: {
    title: 'Література',
    layout: 'DefaultLayout',
  },
}
