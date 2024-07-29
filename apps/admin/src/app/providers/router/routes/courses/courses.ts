import type { RouteRecordRaw } from 'vue-router'
import { route as coursesCardRoute } from './courses-card'

export const routeName = 'CoursesPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/course',
  component: () => import('@/pages/courses'),
  children: [coursesCardRoute],
  meta: {
    title: 'Курси',
    layout: 'DefaultLayout',
  },
}
