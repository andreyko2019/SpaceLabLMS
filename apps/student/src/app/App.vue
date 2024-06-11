<template>
  <MainLayout v-if="isDefaultLayout">
    <template #header>
      <TheHeader @toggle-sidebar="handleToggleSidebar" />
    </template>

    <template #sidebar>
      <TheSidebar :data="sideBarStudent" :is-open="sidebar" />
    </template>

    <template #footer>
      <TheFooter />
    </template>
  </MainLayout>

  <EmptyLayout v-else></EmptyLayout>
  <SvgManager />
</template>

<script setup lang="ts">
import {
  TheHeader,
  TheFooter,
  TheSidebar,
  SvgManager,
} from '@spacelablms/components'
import { EmptyLayout, MainLayout } from '@/shared/ui/layouts'
import { computed, provide, ref } from 'vue'
import { EAppProviders, AppRoutes } from './providers'
import { AppPages } from './providers/router'
import { useRoute } from 'vue-router'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()

const isDefaultLayout = computed(() => route.meta.layout === 'DefaultLayout')
const sidebar = ref(false)
interface ISideBar {
  icon: string
  href: string
  name: string
}

const sideBarStudent: ISideBar[] = [
  {
    icon: 'statistic',
    href: 'statistics',
    name: 'Статистика',
  },
  {
    icon: 'lessons',
    href: 'lessons',
    name: 'Заняття',
  },
  {
    icon: 'task',
    href: 'tasks',
    name: 'Завдання',
  },
  {
    icon: 'literature',
    href: 'literature',
    name: 'Література',
  },
]

const handleToggleSidebar = () => {
  sidebar.value = !sidebar.value
}
</script>
