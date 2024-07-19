import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'CoursesCardPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/course/card',
  component: () => import('@/pages/courses-card/ui/CoursesCardPage.vue'),
  meta: {
    title: 'Карточка курсу',
    layout: 'DefaultLayout',
  },
}
