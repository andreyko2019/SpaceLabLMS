import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'CoursesPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/course',
  component: () => import('@/pages/courses'),
  meta: {
    title: 'Курси',
    layout: 'DefaultLayout',
  },
}
