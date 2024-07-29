import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'MainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/',
  redirect: 'statistic',
  meta: {
    title: 'Статистика',
    layout: 'DefaultLayout',
  },
}
