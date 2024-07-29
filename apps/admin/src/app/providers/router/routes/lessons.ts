import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'LessonsPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/lesson',
  component: () => import('@/pages/lessons'),
  meta: {
    title: 'Заняття',
    layout: 'DefaultLayout',
  },
}
