import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SignInPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/sign-in',
  component: () => import('@/pages/sign-in'),
  meta: {
    title: 'Авторизація',
    layout: 'EmptyLayout',
  },
}
