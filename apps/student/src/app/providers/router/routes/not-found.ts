import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'NotFoundPage'

export const route: RouteRecordRaw = {
  path: '/not-found',
  name: routeName,
  component: () => import('@/pages/not-found'),
  meta: {
    title: 'Сторінка не знайдена',
    layout: 'EmptyLayout',
  },
}
